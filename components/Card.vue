<!--带标题的盒子-->
<!-- colors:

    Note: greyblue #DEE7FA
    hint: mint #DAEBE2
-->
<script setup>
import tinycolor from "tinycolor2";
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: "rgb(223,248,251)",
    },
    title: {
        type: String,
        required: false,
    },
    titleAlign: {
        type: String,
        default: "left"
    },
    contentAlign: {
        type: String,
        default: "justify",
    },
    gradientTitle: {
        type: Boolean,
        default: false
    },
    titleFont: {
        type: String,
        default: "20px"
    }
})

const boxStyle = computed(() => {
    // var borderColor = tinycolor(props.color).darken(20).toString();
    return {
        "position": "absolute",
        // "border-left": `.2rem solid ${borderColor}`,
        "margin": "1.5625em 0",
        "padding": "0 1.2rem 1rem 1.2rem",
        // "border-left": .4rem solid rgba(68, 138, 255, .8);
        "box-shadow": "0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2)",
        "border-radius": ".2rem",
        "background-color": "rgba(255, 255, 255, 0.05)",
        "overflow": "auto"
    }
})

const titleStyle = computed(() => {
    var darkColor = tinycolor(props.color).darken(20).toString();
    var style = {
        "position": "relative",
        "background-color": props.color,
        "font-weight": "bold",
        "font-size": props.titleFont,
        "margin": "0 -1.2rem",
        "box-shadow": "0 1px 2px rgba(0, 0, 0, 0.2)",
        "padding": ".8rem 1.0rem .8rem 1rem",
        "text-align": props.titleAlign,
        // "mix-blend-mode": "difference",
    }
    if (props.gradientTitle == true) {
        style["background"] = `linear-gradient(to right, ${props.color} 0%, ${darkColor} 100%)`
        style["background-color"] = ""
    }

    if (!props.title) {
        style["display"] = "none"
    }
    return style
})

const mainStyle = computed(() => {
    return {
        "text-align": props.contentAlign
    }
})

</script>
<style scoped>
.naive-box .main {
    margin-top: .8rem;
}
</style>
<template>
    <div class="naive-box" v-motion v-bind="$attrs" :style="boxStyle">
        <h4 :style="titleStyle">{{ $props.title }}</h4>
        <div class="main" :style="mainStyle">
            <slot></slot>
        </div>
    </div>
</template>
