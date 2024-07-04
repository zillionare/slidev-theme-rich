<script lang="ts" setup>
import { Transformer } from 'markmap-lib';
import { Markmap, deriveOptions } from 'markmap-view';
import { nextTick, onMounted, onUpdated, ref } from 'vue';

const data = ref('')
const transformer = new Transformer();
const mm = ref()
const svgRef = ref()
const props = defineProps({
    colorFreezeLevel: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        default: 500
    },
    maxWidth: {
        type: Number,
        default: 0,
    },
    expandlevel: {
        type: Number,
        default: -1
    },
    zoom: {
        type: Boolean,
        default: true
    },
    pan: {
        type: Boolean,
        default: true
    }

})


const update = () => {
    const { root } = transformer.transform(data.value.innerText);
    mm.value.setData(root);
    mm.value.fit();
}

onUpdated(update);

onMounted(async () => {
    if ($renderContext.value !== 'slide') {
        return
    }

    // 初始化markmap思维导图
    const options = deriveOptions({
        "colorFreezeLevel": props.colorFreezeLevel,
        "duration": props.duration,
        "maxWidth": props.maxWidth,
        "initialExpandLevel": props.expandlevel,
        "zoom": props.zoom,
        "pan": props.pan,
    });
    mm.value = Markmap.create(svgRef.value, options);
    await nextTick();

    update();
})
</script>

<style scoped>
.hide {
    display: none;
}

.wrapper {
    height: 100%;
    width: 100%;
}
</style>
<template>
    <div>
        <div class="hide" ref="data">
            <slot></slot>
        </div>
        <svg ref="svgRef" :class="['wrapper', $attrs.class]" />
    </div>
</template>
