<script setup>
import { isShow } from '../utils'
import { computed, useAttrs } from 'vue'

const props = defineProps({
    at: {
        type: [Number, Array],
        default: -1
    },
    action: {
        type: String,
        required: true
    },
    dur: {
        type: String,
        default: "1s"
    },
    delay: {
        type: String,
        default: "0ms"
    }
})


const animations = computed(() => {
    return {
        "animation": props.action,
        "animation-duration": props.dur,
        "animation-delay": props.delay,
        "animation-fill-mode": "forwards",
    }
})
</script>
<template>
    <div v-if="isShow(props.at, $clicks)" v-motion v-bind="$attrs">
        <div :style="animations">
            <slot />
        </div>
    </div>
</template>
