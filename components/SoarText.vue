<script setup>
import { onMounted, watchEffect, ref, reactive, nextTick, onUnmounted } from 'vue';
import Anime from './Anime.vue';
import tinycolor from 'tinycolor2';

const text = ref(null)
const lines = ref([])
const animes = reactive([])
let rendered = {}
const container = ref(null)
const backgrounds = {}
const view = ref([])
let observer

const props = defineProps({
    maxLines: {
        type: Number,
        default: 3
    },
    enter: {
        type: Array,
        default: [
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeInTopLeft',
            'fadeInTopRight',
            'fadeInBottomLeft',
            'fadeInBottomRight',
            'flipInX',
            'flipInY',
            'lightSpeedInLeft',
            'lightSpeedRight',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rollIn',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
        ]
    },
    exit: {
        type: Array,
        default: [
            'backOutDown',
            'backOutUp',
            'backOutLeft',
            'backOutRight',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'fadeOutTopLeft',
            'fadeOutTopRight',
            'fadeOutBottomLeft',
            'fadeOutBottomRight',
            'flipOutX',
            'flipOutY',
            'lightSpeedOutRight',
            'lightSpeedOutLeft',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'rollOut',
            'slideOutUp',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
        ]
    },
    offsetY: {// The distance between the text appearance and the bottom
        type: Number,
        default: 0
    },
    colorMix: {//Text and background color blend mode
        type: String,
        default: "difference"
    }
})

onUnmounted(() => {
    if (observer && container.value) {
        observer.unobserve(container.value);
    }
});

onMounted(async () => {
    if (text.value !== null && $renderContext.value === 'slide') {
        animes.values = []
        rendered = {}

        text.value.textContent.split("\n").forEach(function (line) {
            if (line === "")
                return

            let [subtitle, background] = line.split("<bg>")
            lines.value.push(subtitle)
            if (background) {
                console.log(background)
                backgrounds[lines.value.length - 1] = background
            }
        })
    }

    await nextTick()
    observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height, top, left } = entry.contentRect;
            if (width > 0 || height > 0) {
                view.value = {
                    "x": left,
                    "y": top,
                    "width": width,
                    "height": height
                }

                console.log("size changed", view.value)
            }
        }
    })

    if (container.value) {
        observer.observe(container.value);
    }
});

function randomColor() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 30) + 70;
    let lightness = Math.random() * 30 + 30;
    let color = tinycolor({ h: hue, s: saturation, l: lightness })
    return color
}

watchEffect(() => {
    if ($renderContext.value !== 'slide' || !view.value.width || !view.value.height)
        return

    if ($clicks.value === 0) {
        animes.splice(0);
        rendered = {}
    }

    // set background
    let img = backgrounds[$clicks.value]
    if (img !== undefined) {
        container.value.style.background = `rgba(0,0,0, 0.2) url("${img}") no-repeat center / cover`
    }

    let text = lines.value[$clicks.value]
    if (text === undefined || text in rendered) {
        //already rendered
        return
    }

    let fontSize = Math.floor(view.value.width / text.length)
    let enter_action = Math.floor(Math.random() * props.enter.length)
    let color = randomColor(props.lightness)
    let anime = {
        text: text,
        action: props.enter[enter_action],
        style: {
            left: 0,
            fontSize: fontSize * 0.9 + "px",
            textAlign: "center",
            position: "absolute",
            width: "100%",
            lineHeight: fontSize * 1.2 + "px",
            color: color,
            "mix-blend-mode": props.colorMix,
        }
    }
    animes.push(anime)

    rendered[text] = {
        text: text,
        top: view.value.height - fontSize * 1.2,
        fontSize: fontSize
    }

    // when new text is added, adjust old animes's position
    let cum = 0
    for (let i = animes.length - 1; i >= 0; i--) {
        if (animes.length - i === props.maxLines + 1) {
            // console.log(animes.length, i)
            let j = Math.floor(Math.random() * props.exit.length);
            animes[i].action = props.exit[j]
        }

        if (animes.length - i > props.maxLines + 1) {
            // console.log(animes.length, i)
            animes[i].style.display = "none"
        }

        let item = rendered[animes[i].text];
        if (item === undefined) {
            console.warn(`${text} not found in rendered`)
            continue
        }

        cum += item.fontSize + 30
        animes[i].style.top = view.value.height - cum - props.offsetY + "px"
        console.log("calc top:", animes[i].text, view.value.height - cum - props.offsetY + "px")
    }
})

</script>

<template>
    <div style="display: none" ref="text">
        <slot />
    </div>
    <div v-bind="$attrs" v-motion ref="container">
        <Anime v-for="(anime, index) in animes" :key="index" :action="anime.action" :style="anime.style">{{ anime.text
            }}</Anime>
    </div>
</template>
<style scoped></style>
