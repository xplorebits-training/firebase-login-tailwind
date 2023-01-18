<template>
  <div class="flex items-center justify-center h-screen">
    <ui-loader />
  </div>
</template>

<script setup>

import { getAuth, onAuthStateChanged } from "firebase/auth";

//onMounted(() => {
//  setTimeout(() => {
//   useRouter().replace({ path: '/home' })
//  }, 2000)
//})


onMounted(() => {
  setTimeout(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        useRouter().replace({ path: '/home' })
      } else {
        useRouter().replace({ path: '/signin' })
      }
    });

  }, 2000)

})

</script>
