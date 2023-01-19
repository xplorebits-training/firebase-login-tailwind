<template>
  <div>
    <h3 class="text-2xl text-center">Sign Up</h3>

    <div> {{ values }} </div>

    <form class="mt-6 space-y-4" @click.prevent="">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 md:col-span-6">
          <div>
            <label for="page-signin-input-firstName" class="text-sm text-gray-500">First name</label>
            <div class="mt-1">
              <input
                id="page-signin-input-firstName"
                data-testid="page-signin-input-firstName"
                name="firstName"
                class="w-full border border-black rounded-md p-2"
              >
            </div>
          </div>
        </div>
        <div class="col-span-12  md:col-span-6">
          <div>
            <label for="page-signin-input-lastName" class="text-sm text-gray-500">Last name</label>
            <div class="mt-1">
              <input
                id="page-signin-input-lastName"
                data-testid="page-signin-input-lastName"
                name="lastName"
                class="w-full border border-black rounded-md p-2"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Email field -->
      <div>
        <label for="page-signin-input-email" class="text-sm text-gray-500">Email</label>
        <div class="mt-1">
          <input
            id="page-signin-input-email"
            data-testid="page-signin-input-email"
            name="email"
            type="email"
            v-model="values.email"
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
            type="password"
            v-model="values.password"
            class="w-full border border-black rounded-md p-2"
          >
        </div>
      </div>

      <div class="h-2" />

      <!-- Submit button -->
      <button type="submit" @click="onClickCreateUser" class="bg-indigo-500 w-full py-4 text-white rounded-lg hover:bg-indigo-700 uppercase">
        Submit
      </button>

      <button @click="onClickGotoSignIn" class="text-sm bg-white w-full py-4 text-black rounded-lg hover:bg-indigo-100 uppercase">
        Existing user? Sign In
      </button>
    </form>
  </div>
</template>

<script setup>

import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

definePageMeta({
  layout: 'register'
})

const onClickGotoSignup = function () {
  useRouter().push({ path: '/signin' })
}

const schema = {
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
}

const { values } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: ''
  }

})

const onClickCreateUser = function() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, values.email, values.password)
  .then(() => {
    useRouter().replace({ path: '/' });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

onMounted(() => {
  console.log(getAuth())
})

</script>
