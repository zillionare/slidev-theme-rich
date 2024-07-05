/*
 * general
 */
export function randomString(n = 8, prefix = "") {
    const length = n - prefix.length;
    return Math.random().toString(36).substring(2, 2 + length);
}

export function calcAngle(a, b) {
    //已经a与b是直角三角两边，求b与c的夹角

    const angleRad = Math.atan(b / a);
    return 90 - angleRad * (180 / Math.PI);
}

/*
 * slidev
 */

export function isShow(rng, click) {
    if (Array.isArray(rng)) {
        return rng.includes(click)
    } else {
        return [-1, click].includes(rng)
    }
}

/*
 * css
 */
export function mergeTransform(baseTransform, additionalTransform) {
    // If there's no base transform, just return the additional one.
    if (!baseTransform) return additionalTransform;

    // Split the base transform into an array, assuming each transformation is separated by a space.
    let transforms = baseTransform.split(' ');

    // Check if the additional transform is already present to avoid duplication.
    // This is a simplistic check and assumes the additional transform does not contain complex cases like chained transformations.
    if (!transforms.includes(additionalTransform)) {
        // If it's not present, append the new transformation ensuring there's a space before it for proper CSS formatting.
        transforms.push(additionalTransform);
    }

    // Join the array back into a single string and return.
    return transforms.join(' ');
}

/* 
 * svg paths
*/
export function _buildChatBotClipPath(id_, rectWidth, rectHeight, triangleSide, side, borderRadius) {
    const triangleHeight = triangleSide * Math.sqrt(3) / 2; // 根据正三角形性质计算高度

    let [x0, y0, x1, y1, x2, y2] = [0, 0, 0, 0, 0, 0, 0, 0]
    let [rx, ry, rw, rh] = [0, 0, rectWidth, rectHeight]
    if (side === "right") {
        x0 = x1 = rectWidth - triangleHeight
        y0 = rectHeight / 2 - triangleSide / 2
        y1 = rectHeight / 2 + triangleSide / 2
        x2 = rectWidth
        y2 = rectHeight / 2

        //for the rect
        rx = 0
        ry = 0
        rw = rectWidth - triangleHeight
        rh = rectHeight

    } else if (side === "left") {
        x0 = x1 = triangleHeight
        y0 = rectHeight / 2 - triangleSide / 2
        y1 = rectHeight / 2 + triangleSide / 2
        y2 = rectHeight / 2

        //for the rect
        rx = triangleHeight
        ry = 0
        rw = rectWidth - triangleHeight
        rh = rectHeight
    } else if (side === "top") {
        x0 = rectWidth / 2 - triangleSide / 2
        x1 = rectWidth / 2 + triangleSide / 2
        y0 = y1 = triangleHeight
        x2 = rectWidth / 2

        //for the rect
        rx = triangleHeight
        ry = 0
        rw = rectWidth
        rh = rectHeight - triangleHeight
    } else {
        y0 = y1 = rectHeight
        x0 = rectWidth / 2 - triangleSide / 2
        x1 = rectWidth / 2 + triangleSide / 2
        x2 = rectWidth / 2
        y2 = triangleHeight / 2 + rectHeight

        //for the rect
        rx = 0
        ry = 0
        rw = rectWidth
        rh = rectHeight - triangleHeight
    }

    const polygonPoints = [
        `${x0} ${y0}`,
        `${x1} ${y1}`,
        `${x2} ${y2}`
    ].join(', ');

    return `
    <clipPath id="${id_}">
        <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="${borderRadius}" />
        <polygon points="${polygonPoints}" />
    </clipPath>
    `;
}

//chatbox是指一个矩形，其中一边有三角形凸起。

export function buildChatBotClipPath(rectWidth, rectHeight, side = "left", triSideLen = 0, borderRadius = 10, id_ = "") {
    if (!id_) {
        id_ = randomString();
    }

    if (!triSideLen) {
        if (side in ["left", "right"]) {
            triSideLen = rectHeight / 7
        } else {
            triSideLen = rectWidth / 7
        }
    }
    const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgDefs.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgDefs.setAttribute('width', '0');
    svgDefs.setAttribute('height', '0');
    let clipPath = _buildChatBotClipPath(id_, rectWidth, rectHeight, triSideLen, side, borderRadius);
    svgDefs.innerHTML = clipPath
    document.body.appendChild(svgDefs);

    console.debug("clip path is", clipPath);
    //返回clipPath, 可以用el.style.clipPath = buildChatBotClipPath()...
    return `url(#${id_})`;
}

/**
 * 
 * @param a 边长A
 * @param b 边长B
 * @param c 边长C
 * @param deg a与b的夹角
 */
export function trianglePathData(a: number, b: number, c?: number, thetaDegrees?: number, offset?: Array): string {
    let [x, y] = offset ? offset : [0, 0];

    if (thetaDegrees !== undefined && thetaDegrees !== 0) {
        // 使用两边和夹角计算路径
        if (c !== undefined) {
            console.info("trianglePath: 当提供了θ时，边长c将被忽略。");
        }
        const thetaRadians = thetaDegrees * (Math.PI / 180);
        let p1 = [0 + x, 0 + y];
        let p2 = [a + x, 0 + y];
        let p3 = [b * Math.cos(thetaRadians) + x, b * Math.sin(thetaRadians) + y];
        let d = `M${p1.join(' ')} L${p2.join(' ')} L${p3.join(' ')} Z`;
        return `<path d="${d}" style="fill:blue" />`
    } else if (c !== undefined) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("给定边长无法构成三角形。");
        }

        // 使用余弦定理计算角度
        const alphaRad = Math.acos((b * b + c * c - a * a) / (2 * b * c));
        const betaRad = Math.acos((a * a + c * c - b * b) / (2 * a * c));
        const gammaRad = Math.PI - alphaRad - betaRad;
        const p1 = [0 + x, 0 + y];
        const p2 = [c + x, 0 + y];
        const p3 = [
            p2[0] + b * Math.cos(gammaRad) + x,
            p2[1] + b * Math.sin(gammaRad) + y
        ];

        let d = `M${p1.join(' ')} L${p2.join(' ')} L${p3.join(' ')} Z`
        return `<path d="${d}" style="fill:blue" />`
    } else {
        throw new Error("必须提供θ（thetaDegrees）或边长c以确定三角形。");
    }
}

export function createSVGFromPath(parentEl, path, fill, stroke, strokeWidth = "1") {
    try {
        const svgNS = "http://www.w3.org/2000/svg";
        const svgElement = document.createElementNS(svgNS, "svg");
        // svgElement.setAttribute("width", "600");
        // svgElement.setAttribute("height", "400");

        // 创建SVG路径元素并设置路径数据
        svgElement.id = "test"
        const pathElement = document.createElementNS(svgNS, "path");
        pathElement.setAttribute("d", path);
        pathElement.setAttribute("fill", fill);
        pathElement.setAttribute("stroke", stroke);
        pathElement.setAttribute("stroke-width", strokeWidth);

        svgElement.appendChild(pathElement);

        parentEl.appendChild(svgElement);
    } catch (error) {
        console.error(error.message);
    }
}
