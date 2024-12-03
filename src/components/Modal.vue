<script setup lang="ts">
    const emit = defineEmits(['close'])
</script>
<template>
    <section class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 bg-white dark:bg-black bg-opacity-50">
        <div class="modal-overlay absolute w-full h-full" @click="emit('close')" />
        <div class="bg-white dark:bg-gray-800 flex flex-col z-50 rounded-lg">
            <slot></slot>
        </div>
    </section>
</template>

