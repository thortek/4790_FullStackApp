<script>

	import { Auth } from 'aws-amplify'
    import { localUser } from '$lib/stores/localUser'
    import { goto } from '$app/navigation'
	
    const credentials = {
		firstName: '',
		lastName: '',
        email: '',
		password: ''
    }

    let formError = {
        emailTaken: false,
        invalidPassword: false,
        errorMessage: ''
    }

	const handleSubmit = async () => {
		console.log('About to submit signup data...')
		try {
        const { user } = await Auth.signUp({
            username: credentials.email,
            password: credentials.password,
            attributes: {
                name: credentials.firstName,          // optional
                family_name: credentials.lastName,   // optional - E.164 number convention
                email: credentials.email, // other custom attributes 
                picture: 'https://picsum.photos/200/300'
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        })
        console.log(user)
        $localUser = credentials.email
		// go to verification route on success
        goto('/auth/verify')
    } catch (error) {
        console.log('error signing up:', error)
        formError.errorMessage = error.message
        if (error.code === 'UsernameExistsException') {
            formError.emailTaken = true
        }
        if (error.code === 'InvalidPasswordException') {
            formError.invalidPassword = true
        }
    }
	}


</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-400">
			<form class="card-body" on:submit|preventDefault={handleSubmit}>
				<div class="form-control">
                    <h1 class="text-4xl font-bold m-4">Sign up</h1>
                    <h4 class="m-2">Sign up to experience my demo app</h4>
					<label class="label" for="firstName">First name</label>
                    <input class="input input-bordered input-lg w-96" type="text" name="firstName" placeholder="First name" required autocomplete="given-name" minlength="2" maxlength="80" bind:value={credentials.firstName}/>
					<label class="label" for="lastName">Last name</label>
                    <input class="input input-bordered input-lg w-96" type="text" name="lastName" placeholder="Last name" required autocomplete="family-name" minlength="2" maxlength="80" bind:value={credentials.lastName}/>
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
                    {#if formError.emailTaken}<p class="text-red-800">{formError.errorMessage}</p>{/if}
                    <label class="label" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="80" bind:value={credentials.password}/>
                    {#if formError.invalidPassword}<p class="text-red-800">{formError.errorMessage}</p>{/if}
                    <button class="btn btn-primary btn-lg mt-8" type="submit">Sign up</button>
				</div>
			</form>
		</div>
	</div>
</div>
