<script setup lang="ts">
import { ref, onUnmounted } from "vue"

const visible = ref(false)
let timeout: ReturnType<typeof setTimeout> | null = null

function splat() {
  visible.value = true
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    visible.value = false
  }, 3200)
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
          <defs>
            <!-- Gooey filter: merges shapes into blobby organic forms -->
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
                result="gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
            </filter>

            <!-- Slime gradient: darker at top, lighter as it drips -->
            <linearGradient id="slimeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#168c29" />
              <stop offset="40%" stop-color="#3dd838" />
              <stop offset="100%" stop-color="#6dff67" />
            </linearGradient>

            <!-- Highlight gradient for glossy drips -->
            <linearGradient id="slimeHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#6dff67" stop-opacity="0" />
              <stop offset="40%" stop-color="#a5ffb0" stop-opacity="0.6" />
              <stop offset="60%" stop-color="#a5ffb0" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#6dff67" stop-opacity="0" />
            </linearGradient>
          </defs>

          <!-- Main slime group with gooey filter -->
          <g filter="url(#gooey)">
            <!-- Top sludge layer covering the top of the screen -->
            <rect class="slime-top" x="-20" y="-200" width="1040" height="380" fill="url(#slimeGrad)" />

            <!-- Wavy bottom edge of top layer -->
            <path
              class="slime-wave"
              d="M-20,180 Q50,260 120,200 Q180,150 250,230 Q320,300 400,220
                 Q460,160 530,250 Q600,330 680,230 Q740,160 810,240
                 Q870,310 940,220 Q980,170 1020,210 L1020,0 L-20,0 Z"
              fill="url(#slimeGrad)"
            />

            <!-- Fat drips - varying lengths and widths -->
            <path
              class="slime-drip slime-drip-1"
              d="M80,160 Q85,150 100,150 Q115,150 120,160
                 L118,520 Q115,570 108,600 Q100,630 92,600
                 Q85,570 82,520 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-2"
              d="M230,200 Q237,188 252,188 Q267,188 274,200
                 L270,700 Q267,760 260,800 Q252,840 244,800
                 Q237,760 234,700 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-3"
              d="M420,180 Q425,170 435,170 Q445,170 450,180
                 L448,480 Q446,520 440,550 Q435,575 430,550
                 Q425,520 422,480 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-4"
              d="M560,220 Q568,205 583,205 Q598,205 606,220
                 L602,820 Q598,890 590,940 Q583,980 576,940
                 Q568,890 564,820 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-5"
              d="M700,190 Q706,178 718,178 Q730,178 736,190
                 L733,580 Q730,630 725,670 Q718,700 712,670
                 Q706,630 703,580 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-6"
              d="M850,170 Q854,162 862,162 Q870,162 874,170
                 L872,400 Q870,430 867,455 Q862,475 858,455
                 Q854,430 852,400 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-7"
              d="M950,210 Q955,200 965,200 Q975,200 980,210
                 L978,650 Q976,710 970,750 Q965,780 960,750
                 Q955,710 952,650 Z"
              fill="url(#slimeGrad)"
            />

            <!-- Secondary thinner drips for detail -->
            <path
              class="slime-drip slime-drip-8"
              d="M170,190 Q173,184 178,184 Q183,184 186,190
                 L185,350 Q184,375 181,390 Q178,400 175,390
                 Q172,375 171,350 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-9"
              d="M340,210 Q343,204 348,204 Q353,204 356,210
                 L355,440 Q354,470 351,490 Q348,505 345,490
                 Q342,470 341,440 Z"
              fill="url(#slimeGrad)"
            />
            <path
              class="slime-drip slime-drip-10"
              d="M640,200 Q643,194 648,194 Q653,194 656,200
                 L655,380 Q654,400 651,415 Q648,425 645,415
                 Q642,400 641,380 Z"
              fill="url(#slimeGrad)"
            />

            <!-- Splatter blobs that pop in -->
            <circle class="slime-splat slime-splat-1" cx="200" cy="550" r="35" fill="#3dd838" />
            <circle class="slime-splat slime-splat-2" cx="480" cy="620" r="25" fill="#3dd838" />
            <circle class="slime-splat slime-splat-3" cx="750" cy="500" r="30" fill="#3dd838" />
            <circle class="slime-splat slime-splat-4" cx="900" cy="650" r="20" fill="#3dd838" />
            <circle class="slime-splat slime-splat-5" cx="100" cy="700" r="22" fill="#3dd838" />
            <circle class="slime-splat slime-splat-6" cx="620" cy="750" r="28" fill="#3dd838" />
          </g>

          <!-- Glossy highlights on top (outside gooey filter) -->
          <rect class="slime-sheen" x="0" y="0" width="1000" height="180" fill="url(#slimeHighlight)" opacity="0.4" />
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

/* ── Top sludge slides down ── */
.slime-top {
  animation: sludge-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes sludge-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

/* ── Wavy edge ── */
.slime-wave {
  animation: wave-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes wave-in {
  0% {
    transform: translateY(-120%);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ── Drip animations ── */
.slime-drip {
  transform-origin: top center;
  animation: drip 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

/* Staggered delays for organic feel */
.slime-drip-1 { animation-delay: 0.1s; }
.slime-drip-2 { animation-delay: 0.25s; }
.slime-drip-3 { animation-delay: 0.05s; }
.slime-drip-4 { animation-delay: 0.35s; }
.slime-drip-5 { animation-delay: 0.18s; }
.slime-drip-6 { animation-delay: 0.08s; }
.slime-drip-7 { animation-delay: 0.3s; }
.slime-drip-8 { animation-delay: 0.15s; }
.slime-drip-9 { animation-delay: 0.22s; }
.slime-drip-10 { animation-delay: 0.12s; }

@keyframes drip {
  0% {
    transform: scaleY(0) translateY(-50%);
    opacity: 0;
  }
  20% {
    opacity: 0.9;
  }
  60% {
    transform: scaleY(1.1) translateY(0);
    opacity: 0.9;
  }
  75% {
    transform: scaleY(0.95) translateY(1%);
  }
  100% {
    transform: scaleY(1) translateY(0);
    opacity: 0.9;
  }
}

/* ── Splatter blobs ── */
.slime-splat {
  opacity: 0;
  transform-origin: center;
}

.slime-splat-1 { animation: splat-pop 0.5s 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.slime-splat-2 { animation: splat-pop 0.5s 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.slime-splat-3 { animation: splat-pop 0.5s 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.slime-splat-4 { animation: splat-pop 0.5s 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.slime-splat-5 { animation: splat-pop 0.5s 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.slime-splat-6 { animation: splat-pop 0.5s 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

@keyframes splat-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 0.75;
  }
}

/* ── Sheen shimmer ── */
.slime-sheen {
  animation: sheen-slide 1.2s 0.3s ease-out forwards;
  opacity: 0;
}

@keyframes sheen-slide {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.15;
    transform: translateX(100%);
  }
}

/* ── Enter/leave transitions ── */
.slime-enter-active {
  transition: opacity 0.05s ease-out;
}

.slime-leave-active {
  transition: opacity 1.2s ease-in;
}

.slime-enter-from {
  opacity: 0;
}

.slime-leave-to {
  opacity: 0;
}
</style>
