<script>
	import { goto } from '$app/navigation'
	import { DataStore, Auth } from 'aws-amplify'

    const credentials = {
        email: '',
        password: ''
    }

	const handleSubmit = async () => {
		try {
			const user = await Auth.signIn(credentials.email, credentials.password)
			console.log('Login appears to have worked...', user)
			goto('/avatars')
		} catch (err) {
			console.log(err)
		}
	}

</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-400">
			<form class="card-body" on:submit|preventDefault={handleSubmit}>
				<div class="form-control">
                    <h1 class="text-4xl font-bold m-4 text-primary-content">Log in</h1>
                    <h4 class="m-2 text-primary-focus">Sign in to my demo app</h4>
                    <label class="label" for="email">Email Address</label>
					<input
						class="input input-bordered input-lg w-96"
						type="email"
						name="email"
						placeholder="Email"
                        required
                        autocomplete="email"
                        bind:value={credentials.email}
					/>
                    <label class="label" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="80" bind:value={credentials.password}/>
                    <button class="btn btn-primary btn-lg mt-8" type="submit">Log In</button>
				</div>
			</form>
		</div>
	</div>
</div>
