<!-- A card with a s-curve to split header and main content -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
    w: {
        type: String,
        default: "300px"
    },
    h: {
        type: String,
        default: "450px"
    },
    round: {
        type: String,
        default: "10px"
    },
    contentHeight: {
        type: String,
        default: "100%"
    },
    background: {
        type: String,
        default: ""
    },
    left: {
        type: String,
        default: "0px"
    },
    top: {
        type: String,
        default: "0px"
    }
})

const wrapperStyle = computed(() => {
    var style = getComputedStyle(document.body)

    var background = props.background
    var primary = style.getPropertyValue("--slidev-theme-secondary")
    var third = style.getPropertyValue("--slidev-theme-third")
    if (!background) {
        background = `linear-gradient(to right, ${primary}, ${third})`
    }

    console.info(background)
    return {
        "border-radius": props.round,
        "background": background,
        "width": props.w,
        "height": props.h
    }
})

const sCurve = computed(() => {
    // 检查props.w, props.h, 和 props.round是否以'px'为单位
    if (typeof props.w !== 'string' || !props.w.endsWith('px') ||
        typeof props.h !== 'string' || !props.h.endsWith('px') ||
        typeof props.round !== 'string' || !props.round.endsWith('px')) {
        throw new Error("props.w, props.h, and props.round must be specified with 'px' units. Example: '200px'.");
    }

    // 去掉'px'后缀并转换为数值
    const roundPx = parseFloat(props.round.slice(0, -2));
    const wPx = parseFloat(props.w.slice(0, -2));
    const hPx = parseFloat(props.h.slice(0, -2));

    // 计算clip-path路径
    const path = `M 0 ${roundPx * 6} Q 0 ${roundPx * 4} ${roundPx * 2} ${roundPx * 4} L ${wPx - roundPx * 4} ${roundPx * 4} Q ${wPx} ${roundPx * 4} ${wPx} 0 L ${wPx} ${hPx} L 0 ${hPx} Z`;

    // console.info(path)
    return {
        "clip-path": `path("${path}")`,
        "border-radius": `0 0 ${props.round} ${props.round}`,
        "height": `${props.contentHeight}`,
        "padding-top": `${roundPx * 6}px`
    };
})

</script>
<style scoped>
/* 主盒子 */
.box {
    position: absolute;
    /* 盒子高度 */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 下部子项目 */
.content {
    position: relative;
    left: 0;
    right: 0;
}
</style>

<template>
    <div class="box" :style="wrapperStyle">
        <div class="content" :style="sCurve">
            <slot />
        </div>
    </div>
</template>
