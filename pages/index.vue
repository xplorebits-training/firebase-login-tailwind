<template>
  <div class="flex items-center justify-center h-screen">
    <ui-loader />
  </div>
</template>

<script setup>
onMounted(() => {
  setTimeout(() => {
   useRouter().replace({ path: '/signin' })
  }, 2000)
})
</script>
