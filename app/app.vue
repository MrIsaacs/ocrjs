<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return 'OCRjs';
  },
  meta: [
    {
      name: 'lang',
      content: 'en'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
