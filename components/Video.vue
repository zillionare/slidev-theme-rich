<script setup>
import { onMounted, computed } from 'vue';

const props = defineProps({
    at: {
        type: Number,
        default: -1,
    },
    muted: {
        type: Number,
        default: "false"
    },
    src: {
        type: String,
        required: true
    }
})

const show = computed(() => {
    if (Array.isArray(props.at)) {
        return props.at.includes($slidev.nav.clicks)
    } else {
        return [-1, $slidev.nav.clicks].includes(props.at)
    }
})

const videoId = computed(() => {
    if (props.seq) {
        return `video_${props.seq}`
    }

    var at = props.at
    if (Number.isInteger(at) && at != -1) {
        return `video_${at}`
    }

    var seq = Math.floor(Math.random() * 10000)
    return `video_${seq}`
})

onMounted(() => {
    var video = document.getElementById(videoId.value);
    if (video == null) {
        clearInterval(timer);
        console.warn(`未找到Video ${videoId.value}`)
        return
    }

    var count = localStorage.getItem(videoId.value)

    if (count) {
        clearInterval(timer)
    }

    if (show.value && (count == null)) {
        localStorage.setItem(videoId.value, 1)
        video.play()
    }
})
</script>
<template>
    <div v-show="show">
        <video :id="videoId" :src="src" v-bind="$attrs"></video>
    </div>
</template>
