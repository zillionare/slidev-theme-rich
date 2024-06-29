<script setup lang="ts">

</script>
<style>
.title {
    @apply text-6xl;
    position: absolute;
    top: 25%;
    left: 0;
    text-align: center;
    width: 100%;
}

.title::after {
    content: ' ';
    display: block;
    width: 98%;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, white 0%, var(--slidev-theme-secondary) 50%, white 100%) 1;
}

.subtitle {
    @apply text-3xl;
    position: absolute;
    right: 4rem;
    height: 6vw;
    font-style: italic;
    color: var(--slidev-theme-secondary);
}

.brand-only {
    position: absolute;
    left: 0;
    height: 1.8rem;
    top: 2%;
    text-align: left;
    padding-left: 2vw;
    background-color: rgba(var(--slidev-theme-secondary), 0.2);
    border-radius: 0 20px 20px 0;
    padding: 5px 20px 5px 10px;
    border-left: 5px solid var(--slidev-theme-third);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.logo {
    position: absolute;
    background: var(--logo) no-repeat center center / cover;
    width: 48px;
    height: 48px;
    top: 30px;
    left: 30px;
}

.brand-with-logo {
    position: relative;
    left: 64px;
    width: 300px;
    line-height: 50px;
    font-size: 24px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    opacity: 0.8;
}

.presenter {
    @apply text-2xl;
    position: absolute;
    right: 0;
    width: 18vw;
    height: 1.8rem;
    top: 70%;
    text-align: left;
    padding-left: 2vw;
}

.header {
    position: absolute;
    height: 65%;
    width: 100%;
}

.waves {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0%;
    height: 15%;
}

.content {
    position: relative;
    height: 20%;
    text-align: center;
    background-color: white;
}

/* Animation */
.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }

    .content {
        height: 30%;
    }

    h1 {
        font-size: 24px;
    }
}
</style>
<template>
    <div class="slidev-layout cover">
        <div class="my-auto w-full">
            <div class="inner-header">
                <!--brand-->
                <div v-if="$slidev.configs.logo" class="logo"
                    :style="{ '--logo': 'url(' + $slidev.configs.logo + ')' }">
                    <div class="brand-with-logo">
                        {{ $slidev.configs.brand }}
                    </div>
                </div>
                <div v-else class="brand-only"> {{ $slidev.configs.brand }}</div>
                <!--title-->
                <div class="title"> {{ $slidev.configs.title }}</div>
                <div class="subtitle">{{ $slidev.configs.subtitle }}</div>

                <!--presenter-->
                <div class="presenter"> {{ $slidev.configs.presenter }}</div>
            </div>
        </div>
        <!--Waves-->
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(209,68,245,0.7)" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(169,105,240,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(105,240,240,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(27,176,245,0.3)" />
            </g>
        </svg>
        <!--Waves end-->
    </div>
</template>
