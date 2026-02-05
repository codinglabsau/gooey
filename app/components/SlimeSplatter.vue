<script setup lang="ts">
import { ref, onUnmounted, nextTick } from "vue"
import spriteSlime from "@app/images/sprite-slime-3.png"
import slimeSplatterUrl from "@app/images/slime-splatter.svg"

const phase = ref<"idle" | "sprite" | "splatter">("idle")
const frame = ref(0)
let animationTimer: ReturnType<typeof setTimeout> | null = null
let fadeTimer: ReturnType<typeof setTimeout> | null = null

// Spritesheet: 5223x739, horizontal strip, 9 frames
const FRAME_W = 580.3
const FRAME_H = 739
const TOTAL_FRAMES = 9
const SPRITE_W = 5223
const SPRITE_H = 739

// Frame sequence (0-indexed left to right):
const frames = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const FRAME_DURATION = 120 // ms per frame

// Splatter variations — all start from center, fly outward with different rotations/scales
const splatters = [
  { id: 1, tx: -320, ty: -220, scale: 0.08, rotate: 0, delay: 0 },
  { id: 2, tx: 280, ty: -180, scale: 0.1, rotate: 90, delay: 0.08 },
  { id: 3, tx: -200, ty: 160, scale: 0.07, rotate: 200, delay: 0.15 },
  { id: 4, tx: 340, ty: 120, scale: 0.09, rotate: 45, delay: 0.05 },
  { id: 5, tx: -380, ty: 30, scale: 0.06, rotate: 130, delay: 0.12 },
  { id: 6, tx: 150, ty: 240, scale: 0.11, rotate: 270, delay: 0.03 },
  { id: 7, tx: -60, ty: -300, scale: 0.07, rotate: 160, delay: 0.1 },
  { id: 8, tx: 50, ty: -120, scale: 0.08, rotate: 310, delay: 0.07 },
  { id: 9, tx: -280, ty: -80, scale: 0.065, rotate: 70, delay: 0.18 },
  { id: 10, tx: 260, ty: -50, scale: 0.055, rotate: 220, delay: 0.14 },
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

    <!-- Phase 2: Pixel-art splatters burst from center of screen -->
    <Transition name="splatter">
      <div v-if="phase === 'splatter'" class="splatter-overlay" aria-hidden="true">
        <img
          v-for="s in splatters"
          :key="s.id"
          :src="slimeSplatterUrl"
          class="splatter-instance"
          :style="{
            '--tx': `${s.tx}px`,
            '--ty': `${s.ty}px`,
            '--scale': s.scale,
            '--rotate': `${s.rotate}deg`,
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
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Individual splatter instances ── */
.splatter-instance {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1074px; /* half of SVG height (2149/2) */
  margin-left: -900px; /* half of SVG width (1799/2) */
  opacity: 0;
  transform-origin: center;
  animation: splat-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes splat-in {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0) rotate(var(--rotate));
  }
  50% {
    opacity: 0.9;
    transform: translate(var(--tx), var(--ty)) scale(calc(var(--scale) * 1.15)) rotate(var(--rotate));
  }
  100% {
    opacity: 0.85;
    transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotate));
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
