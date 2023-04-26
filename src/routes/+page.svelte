<script>
  import { goto } from '$app/navigation'
  import { Auth } from 'aws-amplify'
  //import { onMount } from 'svelte'

  async function navigate() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log('User is authenticated...', user.attributes.email)
      goto('/dashboard')
    } catch (err) {
      console.log('Checking for user... ', err)
      goto('/auth/login')
    }
  }
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Welcome to my DGM 3790 SvelteKit Project!  Check out the menu items to see all the cool stuff I've built.</p>
        <button class="btn btn-primary" on:click="{navigate}">Get Started</button>
      </div>
    </div>
  </div>
