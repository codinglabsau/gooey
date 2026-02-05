<script setup lang="ts">
import { ref, onUnmounted, nextTick } from "vue"
import spriteSlime from "@app/images/sprite-slime.png"

const phase = ref<"idle" | "sprite" | "splatter">("idle")
const frame = ref(0)
let animationTimer: ReturnType<typeof setTimeout> | null = null
let fadeTimer: ReturnType<typeof setTimeout> | null = null

// Spritesheet: 2321x2215, 4 columns x 4 rows
// Each frame ~580x554
const COLS = 4
const FRAME_W = 580
const FRAME_H = 554
const SPRITE_W = 2321
const SPRITE_H = 2215

// Frame sequence for the animation (row * COLS + col)
// Row 0: idle, squish, jump, flat
// Row 1: stand, lean, jump-high, particles
// Row 2: splat-small, splat-big, (empty), (empty)
// Row 3: particles-small, particles-big, (empty), (empty)
const frames = [
  0,  // idle
  4,  // stand tall
  1,  // squish down
  2,  // jump up
  6,  // jump high
  2,  // come back down
  5,  // lean/land
  3,  // flat squish
  7,  // particles start
  11, // particles spread
  10, // splat bigger
  9,  // splat
  8,  // splat small
]

const FRAME_DURATION = 120 // ms per frame

function getFramePosition(frameIndex: number) {
  const col = frameIndex % COLS
  const row = Math.floor(frameIndex / COLS)
  return {
    x: col * FRAME_W,
    y: row * FRAME_H,
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
    <!-- Phase 1: Sprite animation in center -->
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

    <!-- Phase 2: Splatters burst from center -->
    <Transition name="splatter">
      <div v-if="phase === 'splatter'" class="splatter-overlay" aria-hidden="true">
        <svg
          class="splatter-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="gooey-splat">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>
            <radialGradient id="splatGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#6dff67" />
              <stop offset="60%" stop-color="#3dd838" />
              <stop offset="100%" stop-color="#168c29" />
            </radialGradient>
          </defs>

          <g filter="url(#gooey-splat)">
            <!-- Center impact -->
            <circle class="splat-center" cx="500" cy="500" r="80" fill="url(#splatGrad)" />

            <!-- Radial splatter blobs bursting outward from center -->
            <ellipse class="splat-blob splat-1" cx="500" cy="500" rx="45" ry="35" fill="#3dd838" />
            <ellipse class="splat-blob splat-2" cx="500" cy="500" rx="35" ry="28" fill="#6dff67" />
            <ellipse class="splat-blob splat-3" cx="500" cy="500" rx="50" ry="30" fill="#3dd838" />
            <ellipse class="splat-blob splat-4" cx="500" cy="500" rx="30" ry="40" fill="#6dff67" />
            <ellipse class="splat-blob splat-5" cx="500" cy="500" rx="40" ry="25" fill="#3dd838" />
            <ellipse class="splat-blob splat-6" cx="500" cy="500" rx="38" ry="32" fill="#6dff67" />
            <ellipse class="splat-blob splat-7" cx="500" cy="500" rx="28" ry="35" fill="#3dd838" />
            <ellipse class="splat-blob splat-8" cx="500" cy="500" rx="42" ry="30" fill="#6dff67" />

            <!-- Smaller flying droplets -->
            <circle class="splat-drop splat-drop-1" cx="500" cy="500" r="12" fill="#6dff67" />
            <circle class="splat-drop splat-drop-2" cx="500" cy="500" r="10" fill="#3dd838" />
            <circle class="splat-drop splat-drop-3" cx="500" cy="500" r="14" fill="#6dff67" />
            <circle class="splat-drop splat-drop-4" cx="500" cy="500" r="8" fill="#3dd838" />
            <circle class="splat-drop splat-drop-5" cx="500" cy="500" r="11" fill="#6dff67" />
            <circle class="splat-drop splat-drop-6" cx="500" cy="500" r="9" fill="#3dd838" />
            <circle class="splat-drop splat-drop-7" cx="500" cy="500" r="13" fill="#6dff67" />
            <circle class="splat-drop splat-drop-8" cx="500" cy="500" r="7" fill="#3dd838" />
            <circle class="splat-drop splat-drop-9" cx="500" cy="500" r="10" fill="#6dff67" />
            <circle class="splat-drop splat-drop-10" cx="500" cy="500" r="6" fill="#3dd838" />
          </g>
        </svg>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Sprite container ── */
.sprite-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sprite-frame {
  image-rendering: pixelated;
  transform: scale(0.45);
}

/* ── Splatter overlay ── */
.splatter-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
}

.splatter-svg {
  width: 100%;
  height: 100%;
}

/* ── Center impact ── */
.splat-center {
  animation: center-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: center;
}

@keyframes center-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.3);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.85;
  }
}

/* ── Blobs fly outward from center ── */
.splat-blob {
  opacity: 0;
  transform-origin: center;
}

.splat-1 { animation: fly-out 0.7s 0.05s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -280px; --ty: -200px; }
.splat-2 { animation: fly-out 0.7s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 300px; --ty: -180px; }
.splat-3 { animation: fly-out 0.7s 0.08s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -320px; --ty: 150px; }
.splat-4 { animation: fly-out 0.7s 0.12s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 260px; --ty: 220px; }
.splat-5 { animation: fly-out 0.7s 0.06s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -150px; --ty: -300px; }
.splat-6 { animation: fly-out 0.7s 0.14s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 180px; --ty: 280px; }
.splat-7 { animation: fly-out 0.7s 0.09s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -350px; --ty: -50px; }
.splat-8 { animation: fly-out 0.7s 0.11s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 340px; --ty: 30px; }

@keyframes fly-out {
  0% {
    transform: translate(0, 0) scale(0.3);
    opacity: 0;
  }
  30% {
    opacity: 0.85;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(1);
    opacity: 0.8;
  }
}

/* ── Small droplets fly further ── */
.splat-drop {
  opacity: 0;
}

.splat-drop-1  { animation: drop-fly 0.8s 0.1s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -400px; --ty: -350px; }
.splat-drop-2  { animation: drop-fly 0.8s 0.15s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 420px; --ty: -300px; }
.splat-drop-3  { animation: drop-fly 0.8s 0.12s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -380px; --ty: 320px; }
.splat-drop-4  { animation: drop-fly 0.8s 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 350px; --ty: 380px; }
.splat-drop-5  { animation: drop-fly 0.8s 0.08s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -200px; --ty: -420px; }
.splat-drop-6  { animation: drop-fly 0.8s 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 150px; --ty: 430px; }
.splat-drop-7  { animation: drop-fly 0.8s 0.13s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -450px; --ty: 100px; }
.splat-drop-8  { animation: drop-fly 0.8s 0.16s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 440px; --ty: -80px; }
.splat-drop-9  { animation: drop-fly 0.8s 0.11s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: 50px; --ty: -440px; }
.splat-drop-10 { animation: drop-fly 0.8s 0.19s cubic-bezier(0.22, 1, 0.36, 1) forwards; --tx: -80px; --ty: 400px; }

@keyframes drop-fly {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 0.9;
    transform: translate(calc(var(--tx) * 0.3), calc(var(--ty) * 0.3)) scale(1.2);
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0.8);
    opacity: 0.7;
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
