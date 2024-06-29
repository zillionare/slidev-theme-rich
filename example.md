---
theme: ./
title: Quantitative Finance
subtitle: 24 lessons learned from the market
presenter: Aaron Yang
brand: 量化风云
logo: https://images.jieyu.ai/images/hot/lhfy-badge.png
highlighter: shiki
themeConfig:
    primary: black
    secondary: '#404040'
---

---

# Mockup - Mobile Phone，Computers and Watches

<Device class="abs top-200px" kind="the-iphone">
<Video src="https://cdn.pixabay.com/video/2023/07/21/172597-847835440_large.mp4" autoplay loop="forever" muted />
</Device>

<Device class="abs top-410px left-350px" 
        kind="macbook-pro"
        scale=0.8>
<Video src="https://cdn.pixabay.com/video/2016/09/21/5373-183629075_medium.mp4"/>
</Device>

<Device class="abs top-150px left-400px" 
        kind="apple-watch-s8"
        autoplay
        scale=0.6>
<Video src="https://cdn.pixabay.com/video/2023/07/08/170617-843561820_large.mp4"/>
</Device>

<Device class="abs top-150px left-670px" 
        kind="apple-watch-ultra"
        autoplay loop="forever" muted 
        scale=0.6
        style="transform: rotateZ(45deg)">
<Video src="https://cdn.pixabay.com/video/2023/08/22/177210-857004263_large.mp4"/>
</Device>

<div class="abs left-1100px top-550px">

```md

<Device kind="apple-watch-s8"
        autoplay
        loop="forever"
        scale=0.6>
    <Video src="*.mp4"/>
</Device>
```
</div>

<div class="abs bottom-10px w-full text-center">

Powered by [Device.css](https://github.com/picturepan2/devices.css) | Video source: Pixabay
</div>

<div class="abs top-150px left-1200px">

## available devices

- iphone-14-pro
- iphone-x
- iphone
- imac
- ipad-pro
- apple-watch-ultra
- more ... [Device.css](https://github.com/picturepan2/devices.css)
</div>

---

# Play with sound

<div class="abs top-150px left-50px">

## whoo
<Audio name="wechat-huwo" controls />
</div>

<div class="abs top-300px left-50px">

## du
<Audio name="du" controls />
</div>

<div class="abs top-450px left-50px">

## Mouse click
<Audio name="mouse-click" controls />
</div>

<div class="abs top-600px left-50px">

## wechat-dingdong
<Audio name="wechat-dingdong" controls />
</div>

<div class="abs top-150px left-450px">

## wechat-dingdong
<Audio name="laughing-man" controls />
</div>

<div class="abs top-300px left-450px">

## giggling1
<Audio name="giggling1" controls />
</div>

<div class="abs top-450px left-450px">

## giggling2
<Audio name="giggling2" controls />
</div>

<div class="abs top-600px left-450px">

## giggling3
<Audio name="giggling3" controls />
</div>

<div class="abs top-600px left-850px">

## Evil man laughing
<Audio name="evil-man-laughing" controls />
</div>

<div class="abs top-450px left-850px">

## Crow
<Audio name="crow" controls />
</div>

<div class="abs top-300px left-850px">

## dodo
<Audio name="dodo" controls />
</div>

<div class="abs top-150px left-850px">

## whoosh-2
<Audio name="whoosh-2" controls />
</div>

<div class="abs top-150px left-1200px">

## whoosh
<Audio name="whoosh" controls />
</div>

<div class="abs top-300px left-1200px">

## bloop
<Audio name="bloop" controls />
</div>

<div class="abs top-450px left-1200px">

## pop
<Audio name="pop" controls />
</div>

<div class="abs top-600px left-1200px">

## typer
<Audio name="typer" controls />
</div>

<div class="abs bottom-50px w-90%">

```md
<Audio name="typer" controls />

<Audio src="*.mp3" :at=1 :volume=0.5 />
```

</div>

---

<h1>Markmap</h1>

<Markmap class="abs top-50px left-20px w-full h-full">

```md

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- [coc-markmap](https://github.com/gera2ld/coc-markmap) for Neovim
- [markmap-vscode](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode) for VSCode
- [eaf-markmap](https://github.com/emacs-eaf/eaf-markmap) for Emacs

## Features

Note that if blocks and lists appear at the same level, the lists will be ignored.

### Lists

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- [x] checkbox
- Katex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- markmap: fold -->
  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
- Now we can wrap very very very very long text based on `maxWidth` option

### Blocks

``js
console.log('hello, JavaScript')
``

| Products | Price |
| -------- | ----- |
| Apple    | 4     |
| Banana   | 2     |

![](/favicon.png)

```
</Markmap>

<div class="abs bottom-50px w-full text-center">

Powered by [Markmap](https://markmap.js.org)
</div>

<div class="abs top-200px left-1000px">

```md

<Markmap class="abs top-400px left-50px w-full">

` ``
## level1
### level2
## level1
` ``
</Markmap>
```
</div>

---
layout: two-cols
---

# Markdown admonition

A good picture is worth a thousand words. The extended Markdown syntax provides Admonition syntax, which can convert admonition text into graphic boxes.

Using the following grammer to render admonition box:

```md

!!! tip
    this is a tip admonition!

!!! quote
    this is a quote/cite
```

::right::

<div class="relative left-50px top-100px w-full">

<div>

!!! example
    this is an example/snippet

!!! quote
    this is a quote/cite

</div>

</div>



---


<style scoped>

.admonition {
    margin: 0 !important;
}
</style>
# Markdown admonition

<div class="absolute grid grid-cols-3 grid-rows-3 gap-4 row-gap-1 w-1400px h-600px">

!!! summary
    summary/abstract



!!! hint
    this is a hint/tip


!!! info
    a hint/todo


!!! success
    a success/check/done


!!! question
    a question/help/faq


!!! attention
    an attention


!!! caution
    a caution/warning

!!! failure
    a failure/fail/missing

!!! danger
    a danger/error/bug
</div>

---

# Use Icons

- :smile: using icons is very simple, just write `:smile:`
- :heart: visit https://emojipedia.org/ for more emoji icons

the syntax:

```md
- :smile: using icons is very simple, just write `:smile:`
- :heart: visit https://emojipedia.org/ for more emoji icons
```

!!! Notice
    Be notified mark before bullet items are removed, so you could use whatever you like as the bullet mark.

---
layout: two-cols
clicks: 1
---

# Animation

<div v-motion
    :enter="{scale: 1, y:0, backgroundImage: 'url()'}"
    :click-1="{y: 60}"
    :click-2="{scale:0}"
>
Slidev has built-in animation support. 

➡️ move the paragraph down。

Almost all css property can be used as animation.

The example shows how to add background image during transition.
</div>

<div v-motion
    class="abs top-300px left-550px w-64px h-64px"
    :enter="{backgroundImage: 'url()'}"
    :click-1="{backgroundImage: 'url(https://images.jieyu.ai/images/hot/lhfy-badge.png)',backgroundSize: '64px', backgroundRepeat: 'no-repeat'}"
    :click-2="{scale: 0}"/>

::right::

<div v-motion
    :enter="{scale:1,y:0}"
    :click-1="{y: 120}"
    :click-2="{scale:0}"
>

```md

<div v-motion
    :enter="{scale: 1, 
            y:0, 
            backgroundImage: 'url()'
            }"
    :click-1="{y: 120, 
            backgroundImage: 'url(https://images.jieyu.ai/images/hot/lhfy-badge.png)',
            backgroundSize: '100px'
            backgroundRepeat: 'no-repeat'}"
    :click-2="{scale:0}"
>
</div>

```
</div>

---
layout: two-cols

---

# Animation II

Animate.css has also been integrated into this theme.

<div class="animate__animated animate__bounce abs top-300px w-200px">

:dancer: bounce
</div>

<div class="animate__animated animate__flash abs top-350px  w-200px">

:camera_flash: flash
</div>

<div class="animate__animated animate__wobble animate__delay-2s abs top-400px w-400px">

:woozy_face: wobble delay 2 seconds

</div>


::right::

```md

<div class="animate__animated
            animate__bounce"/>

<div class="animate__animated 
            animate__flash"/>

<div class="animate__animated 
            animate__wobble 
            animate__delay-2s 
            abs 
            top-400px 
            w-400px">
```

<div class="abs bottom-50px w-full center-text">
Powered by [Animate.css](https://animate.style/)
</div>

---
clicks: 1
---

# Card and Variants

## Naive Card

<Card title="Card with header" 
      class="abs top-250px w-300px h-450px"
      :enter="{opacity: 1}"
      :click-1="{opacity: 0}">

this is Card with a Title
</Card>

<Card :enter="{opacity: 1}"
      :click-1="{opacity: 0}"
      class="abs top-250px left-450px w-300px h-450px">

<img src="https://images.jieyu.ai/images/hot/blue-purple-gradient.jpg">

this is Card without a Title
</Card>

<!--left-->

<div class="abs left-900px top-290px">

```md

<Card title="Card with header"
      :enter="{opacity: 1}"
      :click-1="{opacity: 0}">

this is naive card with a Title. 
v-motion is supported out-of-box.

</Card>

```
</div>

---

# Profile Card

<Profile class="top-250px"
headerImg="https://images.unsplash.com/photo-1517825729380-9df085a3fbc3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9ybmluZyUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" >

### Aaron

Course Instructor
</Profile>

<Profile class="top-250px left-450px"
headerImg="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNreXxlbnwwfDB8MHx8fDA%3D" avatar="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwbGlwc3RpY2t8ZW58MHwwfDB8fHww">

### 宽粉

<p>Teaching Assistant</p>
</Profile>

<div class="absolute top-150px left-900px w-700px">

```md

<Profile class="top-150px left-250px"
    headerImg="https://images..jpg" 
    seq="1">

Since the avatar is not provided, 
the content of seq is displayed, 
which is typically a number.
</Profile>

<Profile class="top-150px left-250px"
headerImg="https://.../*.jpg" 
avatar="https://.../*.jpg">

### Aaron

Course Instructor
</Profile>
```
</div>

---

# Scard

<Scard background="url('https://images.jieyu.ai/images/hot/blue-purple-gradient.jpg') no-repeat center center / cover" 
    h="450px" w="300px"
    class="top-250px left-50px">
   the content of the box
</Scard>

<Scard background="url('https://images.jieyu.ai/images/hot/blue-purple-gradient.jpg') no-repeat center center / cover" 
    h="450px" 
    w="300px"
    contentHeight="400px"
    class="left-400px top-250px">
   the content of the box
</Scard>

<div class="absolute left-900px top-100px pr-20px">

Scard is a card variant, which contains a image header and main content area, and a s-curve split the two.

```md

<Scard background="url('image.png') 
        no-repeat center center / cover" 
        h="300px" 
        w="150px"
        contentHeight="260px"
        left="230px"
        top="100px">
   the content of the box
</Scard>
```
</div>

<Arrow x1="1010" y1="400" x2="680" y2="400" stroke-width="2" color="red"/>

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd>  | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
