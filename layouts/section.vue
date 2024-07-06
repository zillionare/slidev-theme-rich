<script setup>
const props = defineProps({
    img: {
        type: String,
        default: "https://images.unsplash.com/photo-1518510434791-8ecb34c419da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D"
    }
})
</script>
<template>
    <div class="absolute w-50% h-full flex flex-col items-center justify-center">
        <h1 class="text-4xl">
            {{ $frontmatter.title }}
        </h1>
        <h3 class="italic text-large pt-4">
            {{ $frontmatter.subtitle }}
        </h3>
    </div>
    <div class="absolute w-50% h-full left-50% flex flex-col items-center justify-center">
        <img :src="$props.img">
    </div>
</template>
