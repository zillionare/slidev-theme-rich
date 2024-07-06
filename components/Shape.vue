<!--根据给定的点，产生一个平滑连接线的闭合图形-->
<!--catmull-room算法-->
<!--use https://bennettfeely.com/clippy/ custom polyon to edit vertex 
TODO: 
    1. 增加部分直线点
    2. 通过v-if，既可作为图形，也可作为clip-path

用作clip-path示例：

<Shape id="myCurve2" :scale=3.2  :dx=-400 :dy=-500>

```md
50% 99%
28% 81%
39% 67%
55% 55%
86% 63%
92% 52%
99% 45%
99% 100%
```
</Shape>

<style scoped>
    .img-right {
        position: absolute;
        width: 50%;
        height: 100%;
        top: -10vh;
        right:0;
        /* clip-path: polygon(0 0, 100% 0%, 100% 100%); */
        clip-path: url(#myCurve);
        background: linear-gradient(to bottom, #f3b167, #ec38bc, #7303c0, #03001e);
        filter: drop-shadow(-2px, 7px 4px rgba(0,0,0,0.5));
    }
</style>
-->

<script setup>
import { computed, onMounted, ref } from 'vue'

const raw = ref(null)
const points = ref([])

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    w: {
        type: Number,
        required: true,
    },
    h: {
        type: Number,
        required: true,
    },
    dy: {
        type: Number,
        default: 0
    },
    dx: {
        type: Number,
        default: 0
    },
    scaleX: {
        type: Number,
        default: null
    },
    scaleY: {
        type: Number,
        default: null
    },
    scale: {
        type: Number,
        default: 1
    },
    smoothing: {
        type: Number,
        default: 0.2
    },
    fill: {
        type: String,
        default: null
    },
    stroke: {
        type: String,
        default: null
    },
    strokeWidth: {
        type: Number,
        default: 0
    }
})

// Render the svg <path> element
function getCurvePathData(points, smoothing = 0.2, closed = true) {
    // append first 2 points for closed paths
    if (closed) {
        points = points.concat(points.slice(0, 2));
    }

    // Properties of a line
    const line = (pointA, pointB) => {
        const lengthX = pointB.x - pointA.x;
        const lengthY = pointB.y - pointA.y;
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        };
    };

    // Position of a control point
    const controlPoint = (current, previous, next, reverse) => {
        const p = previous || current;
        const n = next || current;
        const o = line(p, n);

        const angle = o.angle + (reverse ? Math.PI : 0);
        const length = o.length * smoothing;

        const x = current.x + Math.cos(angle) * length;
        const y = current.y + Math.sin(angle) * length;
        return { x, y };
    };

    let pathData = [];
    pathData.push({ type: "M", values: [points[0].x, points[0].y] });

    for (let i = 1; i < points.length; i++) {
        let point = points[i];
        const cp1 = controlPoint(points[i - 1], points[i - 2], point);
        const cp2 = controlPoint(point, points[i - 1], points[i + 1], true);
        //console.log( i, 'a', a)
        const command = {
            type: "C",
            values: [cp1.x, cp1.y, cp2.x, cp2.y, point.x, point.y]
        };

        pathData.push(command);
    }

    // copy last commands 1st controlpoint to first curveto
    if (closed) {
        let comLast = pathData[pathData.length - 1];
        let valuesLastC = comLast.values;
        let valuesFirstC = pathData[1].values;

        pathData[1] = {
            type: "C",
            values: [valuesLastC[0], valuesLastC[1], valuesFirstC.slice(2)].flat()
        };
        // delete last curveto
        pathData = pathData.slice(0, pathData.length - 1);
    }

    return pathData;
};

// convert pathdata to d attribute string
function pathDataToD(pathData, decimals = 3) {
    let d = pathData
        .map((com) => {
            return `${com.type}${com.values.map(value => { return +value.toFixed(decimals) }).join(" ")}`;
        })
        .join(" ");
    return d;
}

/**
 * if the points are specified by percentage, one need to convert it
 * to absolute value before use.
 * @param {*} points 
 * @param {*} width 
 * @param {*} height 
 */
function scale(points, width, height, smoothing) {
    let scaled = points.map(point => {
        return [point[0] * width, point[1] * height]
    });

    let minX = Infinity;
    let minY = Infinity;

    for (let point of scaled) {
        let [x, y] = point;

        if (x < minX) minX = x;
        if (y < minY) minY = y;
    }

    return scaled.map(point => {
        return {
            x: point[0] + props.dx,
            y: point[1] + props.dy
        }
    })
}

onMounted(() => {
    if ($renderContext.value === 'slide' && raw.value) {
        let data = raw.value.textContent.split("\n")
        let converted = data.map(point => {
            let [x, y] = point.split(" ").map(parseFloat)
            return [x / 100, y / 100]
        })

        console.log(converted)
        points.value = converted
    }
})

const path = computed(() => {
    if (points.value.length === 0) {
        return
    }

    let w = 500 * (props.scaleX || props.scale)
    let h = 500 * (props.scaleY || props.scale)
    let pathData = getCurvePathData(scale(points.value, w, h, props.smoothing), props.smoothing, true);

    // serialize pathData to d attribute string
    let d = pathDataToD(pathData, 1);
    return d
})
</script>
<template>
    <div ref="raw" style="display:none">
        <slot />
    </div>
    <div v-bind="$attrs">
        <svg width="0" height="0">
            <defs>
                <clipPath :id="$props.id">
                    <path :d="path" :fill="$props.fill" :stroke="$props.stroke" :stroke-width="$props.strokeWidth" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>
