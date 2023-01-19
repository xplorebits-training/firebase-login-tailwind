<template>
  <div>
    <h3 class="text-2xl text-center">Sign In</h3>
    <form class="mt-6 space-y-4" @submit.prevent="onClickCheckUser">
      <!-- Email field -->
      <div>
        <label for="page-signin-input-email" class="text-sm text-gray-500">Email</label>
        <div class="mt-1">
          <input
            id="page-signin-input-email"
            v-model="values.email"
            data-testid="page-signin-input-email"
            name="email"
            type="email"
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
            v-model="values.password"
            data-testid="page-signin-input-password"
            name="password"
            type="password"
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
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'vee-validate'
import * as yup from 'yup'

definePageMeta({
  layout: 'register'
})

const onClickGotoSignup = function () {
  useRouter().push({ path: '/signup' })
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

const onClickCheckUser = function() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then(() => {
      useRouter().push({ path: '/home' })
    })
    .catch((error) => {
      alert(" ERROR CODE : " + error.code + "\n" + " ERROR MESSAGE : " + error.message );
    });
}

</script>
