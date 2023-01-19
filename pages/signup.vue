<template>
  <div>
    <h3 class="text-2xl text-center">Sign Up</h3>
    <form class="mt-6 space-y-4" @submit.prevent="onClickCreateUser">
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 md:col-span-6">
          <div>
            <label for="page-signin-input-firstName" class="text-sm text-gray-500">First name</label>
            <div class="mt-1">
              <input
                id="page-signin-input-firstName"
                v-model="values.firstName"
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
                v-model="values.lastName"
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

      <!-- Confirm Password field -->
      <div>
        <label for="page-signin-input-confirm-password" class="text-sm text-gray-500">Confirm password</label>
        <div class="mt-1">
          <input
            id="page-signin-input-confirm-password"
            v-model="values.confirmPassword"
            data-testid="page-signin-input-confirm-password"
            name="confirmPassword"
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

const onClickGotoSignIn = function () {
  useRouter().push({ path: '/signin' })
}

const schema = {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().min(6).required()
}

const { values } = useForm({
  validationSchema: schema,
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
})

const onClickCreateUser = function () {
  if(values.password === values.confirmPassword){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(() => {
      useRouter().replace({ path: '/' });
    })
    .catch((error) => {
      alert("ERROR CODE : " + error.code + "\n" + "ERROR MESSAGE : " + error.message );
    })
  }else{
    alert("PASSWORD MISMATCH !");
  }
}

</script>
