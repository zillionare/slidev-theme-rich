<script setup>
import { computed, onMounted, useAttrs } from 'vue';

var gallery = {
    "du": "https://images.jieyu.ai/images/sounds/du.wav", /*很短的嘟*/
    "mouse-click": "https://images.jieyu.ai/images/sounds/mouse-click.wav",
    "wechat-dingdong": "https://images.jieyu.ai/images/sounds/wechat-dingdong.wav",
    "wechat-huwo": "https://images.jieyu.ai/images/sounds/wechat-huwo.mp3",
    "laughing-man": "https://images.jieyu.ai/images/sounds/laughing-man-04s.mp3",
    "giggling1": "https://images.jieyu.ai/images/sounds/giggling-8s.mp3",
    "giggling2": "https://images.jieyu.ai/images/sounds/giggling-08s.mp3",
    "giggling3": "https://images.jieyu.ai/images/sounds/baby-laugh-28s.mp3",
    "evil-man-laughing": "https://images.jieyu.ai/images/sounds/evil-man-laughing-02s.mp3",
    "crow": "https://images.jieyu.ai/images/sounds/crow-03s.wav",/*乌鸦叫*/
    "dodo": "https://images.jieyu.ai/images/sounds/做做提醒.mp3",
    "whoosh-2": "https://images.jieyu.ai/images/sounds/whoosh-2.mp3",
    "whoosh": "https://images.jieyu.ai/images/sounds/whoosh.mp3",
    "bloop": "https://images.jieyu.ai/images/sounds/bloop-0s.mp3" /*bloop*/,
    "pop": "https://images.jieyu.ai/images/sounds/pop-0s.mp3",
    "typer": "https://images.jieyu.ai/images/sounds/typewriter-typing-27s.mp3" /*打字音效*/,
}
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    fadeOut: {
        type: Number,
        default: 0
    },
    fadeIn: {
        type: Number,
        default: 0
    },
    at: {
        type: Number,
        default: -1,
    },
    volume: {
        type: Number,
        default: 1
    },
    delay: {
        type: Number,
        default: 0 /*延迟播放，毫秒单位*/
    }
})

function fadeOut(duration, fadeOutStart, sound) {
    var fadePoint = Math.floor(duration - fadeOutStart);

    var timer = setInterval(function () {
        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume >= 0.0)) {
            var volume = Math.max(0, sound.volume - 0.1)
            if (volume > 0) {
                sound.volume = volume
            } else {
                clearInterval(timer)
            }
        }
    }, 200);
}

function fadeIn(resetAt, sound) {
    sound.volume = 0
    var timer = setInterval(function () {
        if ((sound.currentTime < resetAt) && (sound.volume < 1)) {
            var volume = Math.max(0, sound.volume + 0.1)
            if (volume > 0) {
                sound.volume = volume
            } else {
                clearInterval(timer)
            }
        }
    }, 200);
}


const src = computed(() => {
    var isurl = props.name.substr(0, 4) === "http"
    if (isurl) {
        return props.name
    }

    // 带扩展名，是http://images.jieyu.ai/images/sounds下的文件
    var ext = props.name.split(".").pop(-1)
    if (["mp3", "wav", "aiff"].includes(ext)) {
        return "https://images.jieyu.ai/images/sounds/" + props.name
    }

    // 不带扩展名，是预置文件
    return gallery[props.name]
})

const show = computed(() => {
    if (Array.isArray(props.at)) {
        return props.at.includes($slidev.nav.clicks)
    } else {
        return [-1, $slidev.nav.clicks].includes(props.at)
    }
})

const audioId = computed(() => {
    if (props.seq) {
        return `audio_${props.seq}`
    }

    var at = props.at
    if (Number.isInteger(at) && at != -1) {
        return `audio_${at}`
    }

    var seq = Math.floor(Math.random() * 10000)
    return `audio_${seq}`
})

onMounted(() => {
    var attrs = useAttrs()
    if (attrs.controls !== undefined) {
        // console.log("audio has controls")
        return
    }
    var timer = setInterval(() => {
        var sound = document.getElementById(audioId.value);
        if (sound == null) {
            clearInterval(timer);
            console.warn(`未找到Audio${audioId.value}`)
            return
        }

        sound.volume = props.volume
        var count = localStorage.getItem(audioId.value)

        if (count) {
            clearInterval(timer)
        }

        if (show.value && (count == null)) {
            localStorage.setItem(audioId.value, 1)
            setTimeout(() => {
                sound.play()

                // Set the point in playback that fadeout begins. 
                if (props.fadeOut != 0) {
                    sound.onloadedmetadata = () => {
                        fadeOut(sound.duration, props.fadeOut, sound)
                    };
                }

                if (props.fadeIn != 0) {
                    fadeIn(props.fadeIn, sound)
                }
            }, props.delay)

        }
    }, 200)
})
</script>
<template>
    <div v-show="show">
        <audio :id="audioId" :src="src" v-bind="$attrs"></audio>
    </div>
</template>
