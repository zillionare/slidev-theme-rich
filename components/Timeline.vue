<!-- 
    A vertical timeline.

    https://images.jieyu.ai/images/2024/07/timeline.gif

    Usage:

    <div class="abs left-50px top-400px">

    ```yaml

    - event: 1606年
    img: https://*.jpg w=150 roundCorner="50%"
    title: 第一张股票
    text: 1606年，荷兰东印度公司发行了人类第一张股票
    ```
    </div>


-->
<script setup>

import { ref, onMounted, reactive, watchEffect, nextTick } from 'vue';
import { Icon } from '@iconify/vue'
import { buildChatBotClipPath } from '../utils'

import YAML from 'yaml';

const props = defineProps({
    layout: {
        type: String,
        default: "vertical"
    }
})

const raw = ref(null)
const data = reactive([])
const wrapperBox = ref({})
const timeline = ref(null)
const eventBoxes = ref([])

// how to move the timeline
let offset = 0
let lastClicks = 0

function parseIconProperties(str) {
    const parts = str.split(' ');
    const obj = {};

    obj.name = parts.shift();

    parts.forEach(part => {
        const [key, value] = part.split('=');
        switch (key) {
            case 'w':
                obj.width = parseInt(value);
                break;
            case 'color':
                obj.color = value;
                break;
        }
    });

    return obj;
}
function parseImageProperties(str) {
    const urlPattern = /https?:\/\/[^\s]+\s/;
    const widthPattern = /\sw=(\d+)/;
    const roundCornerPattern = /\sroundCorner="([^"]+)"/;
    const shadowPattern = /\sshadow="([^"]+)"/;

    const urlMatch = str.match(urlPattern);
    const url = urlMatch ? urlMatch[0] : '';

    // width
    const widthMatch = str.match(widthPattern);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : null;

    // roundCorner
    const roundCornerMatch = str.match(roundCornerPattern);
    const roundCorner = roundCornerMatch ? roundCornerMatch[1] : null;

    // shadow
    const shadowMatch = str.match(shadowPattern);
    const shadow = shadowMatch ? shadowMatch[1] : null;

    return {
        url,
        width,
        roundCorner,
        shadow,
    };
}

watchEffect(() => {
    if ($renderContext.value !== 'slide')
        return

    if (timeline.value === null) {
        return
    }

    if (timeline.value.clientWidth > 0) {
        wrapperBox.value.width = timeline.value.clientWidth
    }

    if (timeline.value.clientHeight > 0) {
        wrapperBox.value.height = timeline.value.clientHeight
    }

    if ($clicks.value !== lastClicks) {
        offset += (lastClicks - $clicks.value) * 100
        lastClicks = $clicks.value

        timeline.value.style.transform = `translateY(${offset}px)`;
    }
})

onMounted(async () => {
    if (raw.value === null || $renderContext.value !== 'slide') {
        return
    }

    let parsed = YAML.parse(raw.value.textContent)
    for (let i = 0; i < parsed.length; i++) {
        let item = parsed[i]
        if (item.img) {
            let img = parseImageProperties(item.img)
            // console.log("img", img)
            item.img = {
                url: img.url,
                style: {
                    width: img.width + "px",
                    height: img.width + "px",
                    "object-fit": "cover",
                    borderRadius: img.roundCorner,
                    boxShadow: img.shadow,
                }
            }
        }
        if (item.icon) {
            let icon = parseIconProperties(item.icon)
            item.icon = {
                name: icon.name,
                style: {
                    width: icon.width + "px",
                    color: icon.color
                }
            }
        }

        if (item.title && !item["titleColor"]) {
            item["titleColor"] = ""
        }

        if (item.subtitle && !item["subtitleColor"]) {
            item["subtitleColor"] = ""
        }

        if (item.title && !item["textColor"]) {
            item["textColor"] = ""
        }
        data.push(item)
    }

    // console.log("data", data)
    await nextTick()

    // 为各事件容器计算clipbox
    eventBoxes.value.forEach((el, index) => {
        let side = index % 2 == 0 ? "right" : "left"
        let clipPath = buildChatBotClipPath(el.clientWidth, el.clientHeight, side, undefined, undefined, `event-box-${index}`)
        el.style.clipPath = clipPath
    })

})

const setRefs = (el, index) => {
    if (!eventBoxes.value[index]) {
        eventBoxes.value[index] = el;
    }
};

</script>
<style scoped>
.timeline {
    font-size: 2.5vw;
    background: transparent;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease;
    padding: 2em 0;
}

.timeline:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.3) 20%,
            rgba(0, 0, 0, 0.3) 80%,
            rgba(0, 0, 0, 0));
}

.timeline-item {
    position: relative;
    width: 100%;
    margin-bottom: 2em;
}

.timeline-event,
.timeline-text {
    flex-basis: calc(50% - 4vw);
    padding: 0.5em 0;
}

.timeline-event {
    background: #fcfcfc;
    display: flex;
    flex-flow: column;
    align-items: center;

    p {
        text-align: center;
        margin-top: 0.5em;
    }

    img {
        display: block;
    }

    .icon {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
}

.timeline-text {
    font-size: 1em;

    .timeline-title {
        font-size: 1.6em;
    }

    .timeline-subtitle {
        font-size: 1.3em;
    }

    p {
        font-size: 1em;
        line-height: 1.2em;
    }
}

.dot {
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    background-color: #f0f0f0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.timeline-item-even {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    /* background: #fcfcfc; */
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.timeline-even::after {
    content: "";
    display: block;
    width: 2vw;
    height: 2vw;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
}

.timeline-item-odd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    /* background: #fcfcfc; */
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}
</style>
<template>
    <div style="display:none" ref="raw">
        <slot />
    </div>
    <div class="timeline" ref="timeline" v-bind="$attrs">
        <div v-for="(item, index) in  data" :key="index" class="timeline-item">
            <div v-if="index % 2 === 0" class="timeline-item-even">
                <div class="timeline-event" :ref="(el) => setRefs(el, index)">
                    <img v-if="item.img" :src="item.img.url" :style="item.img.style">
                    <Icon v-if="item.icon" :icon="item.icon.name" class="icon" :style="item.icon.style" />
                    <p>{{ item.event }}</p>
                </div>
                <div class="dot" />
                <div class="timeline-text">
                    <div class="timeline-title" v-if="item.title" :style="{ color: item.titleColor }">{{ item.title }}
                    </div>
                    <div class="timeline-subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
                    <p v-if="item.text">{{ item.text }}</p>
                </div>
            </div>
            <div v-else class="timeline-item-odd">
                <div class="timeline-text">
                    <div class="timeline-title" v-if="item.title" :style="{ color: item.titleColor }">{{ item.title }}
                    </div>
                    <div class="timeline-subtitle" v-if="item.subtitle" :style="{ color: item.subtitleColor }">{{
        item.subtitle
    }}
                    </div>
                    <p v-if="item.text" :style="{ color: item.textColor }">{{ item.text }}</p>
                </div>
                <div class="dot" />
                <div class="timeline-event" :ref="(el) => setRefs(el, index)">
                    <img v-if="item.img" :src="item.img.url" :style="item.img.style">
                    <Icon v-if="item.icon" :icon="item.icon.name" class="icon" :style="item.icon.style" />
                    <p>{{ item.event }}</p>
                </div>
            </div>
        </div>
        <div class="timeline-divider" />
    </div>
</template>
