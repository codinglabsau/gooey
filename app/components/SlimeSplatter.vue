<script setup lang="ts">
import { ref, onUnmounted, nextTick } from "vue"
import spriteSlime from "@app/images/sprite-slime.png"
import slimeSplatterUrl from "@app/images/slime-splatter.svg"

const phase = ref<"idle" | "sprite" | "splatter">("idle")
const frame = ref(0)
let animationTimer: ReturnType<typeof setTimeout> | null = null
let fadeTimer: ReturnType<typeof setTimeout> | null = null

// Spritesheet: 5803x739, horizontal strip, 10 frames
const FRAME_W = 580.25
const FRAME_H = 739
const TOTAL_FRAMES = 10
const SPRITE_W = 5803
const SPRITE_H = 739

// Frame sequence (0-indexed left to right):
// 0: idle, 1: squish, 2: jump, 3: land/spread, 4: wide squish,
// 5: small bounce, 6: tall stand, 7: splat particles, 8: particles spread, 9: scatter
const frames = [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 7, 8, 9]

const FRAME_DURATION = 120 // ms per frame

// Splatter variations — each gets a different position, scale, rotation
const splatters = [
  { id: 1, top: "5%", left: "10%", scale: 0.18, rotate: 0, delay: 0 },
  { id: 2, top: "8%", left: "65%", scale: 0.22, rotate: 90, delay: 0.08 },
  { id: 3, top: "30%", left: "5%", scale: 0.15, rotate: 200, delay: 0.15 },
  { id: 4, top: "25%", left: "75%", scale: 0.2, rotate: 45, delay: 0.05 },
  { id: 5, top: "55%", left: "15%", scale: 0.17, rotate: 130, delay: 0.12 },
  { id: 6, top: "50%", left: "60%", scale: 0.25, rotate: 270, delay: 0.03 },
  { id: 7, top: "15%", left: "35%", scale: 0.14, rotate: 160, delay: 0.1 },
  { id: 8, top: "65%", left: "45%", scale: 0.19, rotate: 310, delay: 0.07 },
  { id: 9, top: "40%", left: "85%", scale: 0.16, rotate: 70, delay: 0.18 },
  { id: 10, top: "70%", left: "80%", scale: 0.13, rotate: 220, delay: 0.14 },
]

function getFramePosition(frameIndex: number) {
  return {
    x: frameIndex * FRAME_W,
    y: 0,
  }
}

function playSprite(currentFrame: number) {
  if (currentFrame >= frames.length) {
    // Sprite animation done — trigger splatters
    phase.value = "splatter"
    fadeTimer = setTimeout(() => {
      phase.value = "idle"
      frame.value = 0
    }, 2800)
    return
  }

  frame.value = frames[currentFrame]
  animationTimer = setTimeout(() => {
    playSprite(currentFrame + 1)
  }, FRAME_DURATION)
}

function splat() {
  // Reset any ongoing animation
  cleanup()
  phase.value = "sprite"
  frame.value = frames[0]
  nextTick(() => {
    playSprite(0)
  })
}

function cleanup() {
  if (animationTimer) clearTimeout(animationTimer)
  if (fadeTimer) clearTimeout(fadeTimer)
  animationTimer = null
  fadeTimer = null
}

onUnmounted(cleanup)

defineExpose({ splat })
</script>

<template>
  <Teleport to="body">
    <!-- Phase 1: Sprite animation at bottom center -->
    <div v-if="phase === 'sprite'" class="sprite-container" aria-hidden="true">
      <div
        class="sprite-frame"
        :style="{
          backgroundImage: `url(${spriteSlime})`,
          backgroundPosition: `-${getFramePosition(frame).x}px -${getFramePosition(frame).y}px`,
          backgroundSize: `${SPRITE_W}px ${SPRITE_H}px`,
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
        }"
      />
    </div>

    <!-- Phase 2: Pixel-art splatters scattered across screen -->
    <Transition name="splatter">
      <div v-if="phase === 'splatter'" class="splatter-overlay" aria-hidden="true">
        <img
          v-for="s in splatters"
          :key="s.id"
          :src="slimeSplatterUrl"
          class="splatter-instance"
          :class="`splatter-${s.id}`"
          :style="{
            top: s.top,
            left: s.left,
            transform: `scale(${s.scale}) rotate(${s.rotate}deg)`,
            animationDelay: `${s.delay}s`,
          }"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Sprite container: bottom center ── */
.sprite-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2rem;
}

.sprite-frame {
  image-rendering: pixelated;
  transform: scale(0.4);
  transform-origin: bottom center;
}

/* ── Splatter overlay ── */
.splatter-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
}

/* ── Individual splatter instances ── */
.splatter-instance {
  position: absolute;
  opacity: 0;
  transform-origin: center;
  animation: splat-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes splat-in {
  0% {
    opacity: 0;
    filter: blur(4px);
    scale: 0;
  }
  50% {
    opacity: 0.9;
    filter: blur(0px);
    scale: 1.15;
  }
  100% {
    opacity: 0.85;
    filter: blur(0px);
    scale: 1;
  }
}

/* ── Splatter fade out ── */
.splatter-enter-active {
  transition: opacity 0.05s ease-out;
}

.splatter-leave-active {
  transition: opacity 1s ease-in;
}

.splatter-enter-from {
  opacity: 0;
}

.splatter-leave-to {
  opacity: 0;
}
</style>
