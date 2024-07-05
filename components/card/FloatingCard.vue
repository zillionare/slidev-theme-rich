<!-- 

check the prototype here

https://www.freepik.com/premium-vector/5-data-infographics-tab-paper-index-template-vector-illustration-abstract-background_18061427.htm?epik=dj0yJnU9MS1WaDZwTURzelVlN250TmJKdlJTZ3ZTMHNoak5rZXkmcD0wJm49QkpkR2tHdFVYaEtqTzh2c2VOV25aUSZ0PUFBQUFBR2FHMjRj#page=2&query=infographics%20infographic%20elements&position=24&from_view=search

-->

<script setup>
import YAML from 'yaml';
import { ref, onMounted, nextTick, onUnmounted, computed } from 'vue';
import { isShow, calcAngle } from '../../utils'
const raw = ref(null)
const data = ref({})
const container = ref(null)
const view = ref({})
let observer

const props = defineProps({
    color: {
        type: String,
        default: "#F5C345"
    },
    at: {
        type: [Number, Array],
        default: -1
    }
})

onMounted(async () => {
    if (raw.value === null || $renderContext.value !== 'slide') {
        return
    }

    data.value = YAML.parse(raw.value.textContent)

    await nextTick();

    observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height, top, left } = entry.contentRect;
            if (width === 0 || height === 0) {
                continue
            }

            let cx = width * 0.15
            let cy = height * 0.1
            view.value = {
                x: cx,
                y: cy,
                blur: cx * 0.5,
                rotateZ: calcAngle(cx, height)
            }
        }
    })

    if (container.value) {
        observer.observe(container.value);
    }
})

onUnmounted(() => {
    if (observer && container.value) {
        observer.unobserve(container.value);
    }
});

const shadowX = computed(() => {
    return view.value.x + "px"
})

const headerY = computed(() => {
    return view.value.y * -1 + "px"
})

const footerY = computed(() => {
    return view.value.y + "px"
})

const blur = computed(() => {
    return view.value.blur + "px"
})

const footerZ = computed(() => {
    return view.value.rotateZ * -1 + "deg"
})

const headerZ = computed(() => {
    return view.value.rotateZ + "deg"
})


</script>
<style scoped>
.container-header,
.container-footer {
    border-radius: 0.5em;
    background-color: #fdfdfd;
    padding: 1em;
}

.container-footer {
    border-bottom: 2.5em solid var(--color);
}

.container-header {
    border-top: 2.5em solid var(--color);
}

.container-header:after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 90%;
    width: 80%;
    bottom: 5%;
    box-shadow: var(--shadow-x) var(--header-y) var(--blur) rgba(0, 0, 0, 0.3);
    transform: rotateZ(var(--header-z));
}

.container-footer:after {
    content: "";
    position: absolute;
    z-index: -1;
    height: 90%;
    width: 80%;
    bottom: 5%;
    box-shadow: var(--shadow-x) var(--footer-y) var(--blur) rgba(0, 0, 0, 0.3);
    transform: rotateZ(var(--footer-z));
}

.seq {
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
}

.card-title {
    color: var(--color);
}

.divider {
    border-bottom: 2px solid grey;
}

.desc {
    color: #808080;
    margin-top: 2em;
}
</style>
<template>
    <div style="display:none" ref="raw">
        <slot />
    </div>
    <div v-if="isShow(props.at, $clicks)" v-bind="$attrs"
        :style="[$attrs.style, { '--color': data.color, '--header-y': headerY, '--blur': blur, '--shadow-x': shadowX, '--footer-y': footerY, '--footer-z': footerZ, '--header-z': headerZ }]"
        :class="[$attrs.class, `container-${data.capping}`]" ref="container">

        <div class="seq">{{ data.seq }}</div>
        <div class="card-title">{{ data.title }}</div>
        <div class="divider" />
        <div class="desc">{{ data.desc }}</div>
    </div>


</template>
