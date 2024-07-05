<script setup>
import { computed } from 'vue'

const props = defineProps({
    headerImg: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    w: {
        type: String,
        default: "300px"
    },
    h: {
        type: String,
        default: "450px"
    },
    fontSize: {
        type: String,
        default: '14px'
    },
    seq: {
        type: String,
        default: "𝟭"
    }
});

const backgroundStyle = computed(() => {
    return {
        "background-image": `url("${props.headerImg}")`
    }
})

const avatarStyle = computed(() => {
    if (props.avatar) {
        return {
            "background-image": `url("${props.avatar}")`
        }
    } else {
        return {
            "opacity": 1,
            "background": "white"
        }
    }

})

const text = computed(() => {
    if (!props.avatar) {
        return props.seq
    }
    else {
        return ""
    }
})
</script>

<style scoped>
.profile-card {
    position: absolute;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    width: var(--w);
    height: var(--h);
}

.header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(var(--h) / 3);
    background-size: cover;
    background-position: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.avatar-box {
    position: relative;
    top: calc(-1 * var(--w) /4);
    left: calc(var(--w) / 4);
    width: calc(var(--w)/2);
    height: calc(var(--w)/2);
    border-radius: 50%;
    background-image: var(--avatar-url);
    background-size: cover;
    background-position: center;
    z-index: 1;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-size: calc(var(--w)/6);
    line-height: calc(var(--w)/2);
}

.profile-main {
    position: relative;
    text-align: center;
    height: calc(var(--h) - var(--h)/3 - var(--w)/4);
    top: calc(-1 * var(--w)/4);
    padding: 20px 5px;
    font-size: 0.8em;
}
</style>

<template>
    <div class="profile-card" :style="{ '--w': w, '--h': h, '--font-size': fontSize }">
        <div class="header" :style="backgroundStyle"></div>
        <div class="avatar-box" :style="avatarStyle">{{ text }}</div>
        <div class="profile-main">
            <slot />
        </div>
    </div>
</template>
