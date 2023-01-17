<template>
  <div class="flex items-start md:items-center justify-center h-screen">
    <div class="bg-white md:border border-black px-8 py-10 w-full max-w-md rounded-md">
      <h3 class="text-2xl text-center">Sign In</h3>
      <form class="mt-6 space-y-4" @click.prevent="">
        <!-- Email field -->
        <div>
          <label for="page-signin-input-email" class="text-sm text-gray-500">Email</label>
          <div class="mt-1">
            <input
              id="page-signin-input-email"
              data-testid="page-signin-input-email"
              name="email"
              class="w-full border border-black rounded-md p-2"
            >
          </div>
        </div>

        <!-- Password field -->
        <div>
          <label for="page-signin-input-password" class="text-sm text-gray-500">Password</label>
          <div class="mt-1">
            <input
              id="page-signin-input-password"
              data-testid="page-signin-input-password"
              name="password"
              class="w-full border border-black rounded-md p-2"
            >
          </div>
        </div>

        <div class="h-2" />

        <!-- Submit button -->
        <button type="submit" class="bg-indigo-500 w-full py-4 text-white rounded-lg hover:bg-indigo-700 uppercase">
          Submit
        </button>

        <button @click="onClickGotoSignup" class="text-sm bg-white w-full py-4 text-black rounded-lg hover:bg-indigo-100 uppercase">
          New user? Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const onClickGotoSignup = function () {
  useRouter().push({ path: '/signup' })
}
</script>
