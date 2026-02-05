<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const visible = ref(false)
let timeout: ReturnType<typeof setTimeout> | null = null

function splat() {
  visible.value = true
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    visible.value = false
  }, 2400)
}

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})

defineExpose({ splat })
</script>

<template>
  <Teleport to="body">
    <Transition name="slime">
      <div v-if="visible" class="slime-overlay" aria-hidden="true">
        <svg
          class="slime-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Main splatter blob -->
          <path
            class="slime-blob slime-blob-1"
            d="M0,0 L1000,0 L1000,1000 L0,1000 Z
               M100,200 Q150,180 200,220 Q250,260 180,300 Q120,280 100,200
               M700,100 Q780,80 820,150 Q860,220 780,260 Q700,220 700,100
               M400,600 Q500,550 550,620 Q600,700 500,740 Q400,700 400,600"
            fill-rule="evenodd"
          />
          <!-- Drip left -->
          <path
            class="slime-drip slime-drip-1"
            d="M150,0 Q170,-10 180,0 L180,350 Q175,420 160,480 Q150,520 145,480 Q135,420 140,350 Z"
          />
          <!-- Drip center-left -->
          <path
            class="slime-drip slime-drip-2"
            d="M380,0 Q400,-10 410,0 L410,500 Q405,580 395,650 Q385,700 375,650 Q365,580 370,500 Z"
          />
          <!-- Drip center -->
          <path
            class="slime-drip slime-drip-3"
            d="M520,0 Q540,-5 550,0 L550,420 Q545,500 535,560 Q525,600 515,560 Q505,500 510,420 Z"
          />
          <!-- Drip right -->
          <path
            class="slime-drip slime-drip-4"
            d="M750,0 Q770,-10 780,0 L780,600 Q775,700 765,780 Q755,830 745,780 Q735,700 740,600 Z"
          />
          <!-- Drip far right -->
          <path
            class="slime-drip slime-drip-5"
            d="M890,0 Q905,-5 915,0 L915,300 Q910,370 905,420 Q900,450 895,420 Q885,370 885,300 Z"
          />
          <!-- Top splatter edge with drip shapes -->
          <path
            class="slime-blob slime-blob-2"
            d="M0,0 L1000,0 L1000,200 Q950,280 900,240 Q860,200 820,260 Q780,320 720,280
               Q680,240 640,300 Q600,360 540,300 Q500,260 460,320 Q420,380 360,320
               Q320,280 280,340 Q240,400 180,340 Q140,300 100,360 Q60,400 20,340
               Q0,300 0,260 Z"
          />
          <!-- Extra splatter blobs -->
          <ellipse class="slime-blob slime-blob-3" cx="300" cy="450" rx="60" ry="45" />
          <ellipse class="slime-blob slime-blob-3" cx="650" cy="380" rx="50" ry="35" />
          <ellipse class="slime-blob slime-blob-3" cx="850" cy="500" rx="40" ry="30" />
          <ellipse class="slime-blob slime-blob-3" cx="120" cy="520" rx="55" ry="40" />
        </svg>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.slime-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
}

.slime-svg {
  width: 100%;
  height: 100%;
}

/* Green slime fill */
.slime-blob,
.slime-drip {
  fill: #6dff67;
  opacity: 0.85;
}

.slime-blob-2 {
  fill: #168c29;
  opacity: 0.7;
}

.slime-blob-3 {
  fill: #4de644;
  opacity: 0.75;
}

/* Drip animation - each drip slides down with a slight delay */
.slime-drip {
  animation: drip-down 1.8s ease-in-out forwards;
  transform-origin: top center;
}

.slime-drip-1 {
  animation-delay: 0s;
}
.slime-drip-2 {
  animation-delay: 0.15s;
}
.slime-drip-3 {
  animation-delay: 0.08s;
}
.slime-drip-4 {
  animation-delay: 0.22s;
}
.slime-drip-5 {
  animation-delay: 0.1s;
}

@keyframes drip-down {
  0% {
    transform: translateY(-100%) scaleY(0.3);
    opacity: 0;
  }
  30% {
    transform: translateY(0) scaleY(1);
    opacity: 0.85;
  }
  60% {
    transform: translateY(0) scaleY(1);
    opacity: 0.85;
  }
  100% {
    transform: translateY(5%) scaleY(1.05);
    opacity: 0.85;
  }
}

/* Main blob slides in from top */
.slime-blob-1 {
  animation: blob-in 0.6s ease-out forwards;
}

.slime-blob-2 {
  animation: blob-in 0.5s ease-out forwards;
}

.slime-blob-3 {
  animation: splat-in 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes blob-in {
  0% {
    transform: translateY(-120%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0.85;
  }
}

@keyframes splat-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.75;
  }
}

/* Transition for the whole overlay */
.slime-enter-active {
  transition: opacity 0.1s ease-out;
}

.slime-leave-active {
  transition: opacity 0.8s ease-in;
}

.slime-enter-from {
  opacity: 0;
}

.slime-leave-to {
  opacity: 0;
}
</style>
