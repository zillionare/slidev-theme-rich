<script setup>
import { computed, useAttrs } from 'vue'
import { mergeTransform } from '../../utils'

const props = defineProps({
    kind: {
        type: String,
        required: true
    },
    scale: {
        type: Number,
        default: 1
    }
})

const devices = [
    "iphone-14-pro",
    "iphone-x",
    "iphone-8",
    "the-iphone",
    "google-pixel-6-pro",
    "macbook-pro",
    "imac",
    "ipad-pro",
    "apple-watch-ultra",
    "apple-watch-s8"
]

const device = computed(() => {
    return `device device-${props.kind}`
})

const wrapStyle = computed(() => {
    var style = useAttrs().style
    var scale = {
        transform: `scale(${props.scale})`
    }
    if (!style) {
        return scale
    }

    style.transform = mergeTransform(style.transform, scale.transform)

    return style
})

</script>
<style scoped></style>
<template>
    <div :class="[$attrs.class, device]" :style="wrapStyle">
        <div class="device-frame">
            <div class="device-screen" style="overflow: hidden;">
                <slot />
            </div>
        </div>
        <div class="device-stripe"></div>
        <div class="device-header"></div>
        <div class="device-sensors"></div>
        <div class="device-btns"></div>
        <div class="device-power"></div>
    </div>
</template>
