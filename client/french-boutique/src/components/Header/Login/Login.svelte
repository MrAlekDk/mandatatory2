<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	//import { user } from "./stores";

	const navigate = useNavigate();
	const location = useLocation();

	let username;
	let password;
    let userSrc = "./images/user.png"

	function handleSubmit() {
		user.set({ username, password });
		const from = ($location.state && $location.state.from) || "/";
		navigate(from, { replace: true });
	}
</script>

<div class="login-container">
    <div class="login-header">
        <img src={userSrc} alt="User icon">
        <h3>Login</h3>
    </div>
    <form on:submit={handleSubmit}>
        <span class="inputs">
            <input
                bind:value={username}
                type="text"
                name="username"
                placeholder="Username"
            />
            <input
                bind:value={password}
                type="password"
                name="password"
                placeholder="Password"
            />
        </span>
        <button type="submit">Login</button>
    </form>
</div>

<style>

    .login-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        overflow: hidden;
    }
    .login-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        
    }

    .login-header:hover{
        cursor:pointer;
    }

    img{
        align-self: center;
        height:80%;
        width:max-content;
        margin: 0;
    }
    h3{
        color: white;
        align-self: center;
        margin: 0;
        padding: 0;
    }

    form{
        display: flex;
        flex-direction: row-reverse;
        align-self: center;
        justify-self: flex-start;
    }

    .inputs{
        display: flex;
        flex-direction: column;
        width:auto;
        padding-left: 2%;
        margin-left: 0;
        align-self: center;
    }
    input{
        align-self: flex-start;
        min-width:50%;
        max-width: 70%;
    }
    button{
        align-self: center;
        justify-self: flex-start;
        text-align: center;
    }

</style>