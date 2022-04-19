<script>
	import { useNavigate, useLocation } from "svelte-navigator";
    import { notifications } from "../../../store/notifications.js";
    import Toast from "../../../components/Popups/Toast.svelte";
    import { onMount } from "svelte";

	const navigate = useNavigate();
	const location = useLocation();

	let username;
	let password;
    let userSrc = "./images/user.png"

    let user;

    onMount(async ()=>{
        try{
            user = JSON.parse(localStorage.getItem("user"));
        }
        catch{
            console.log("No user logged in")
        }
    })
    
    async function handleSubmit() {
        
        if(user){
            await fetch("http://localhost:3000/logOut", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers:{
                "content-type": "application/json"
            }
        });
        const from = ($location.state && $location.state.from) || "/";
        navigate("/frontpage", from, { replace: true });
        localStorage.removeItem("user");
    }
        else{
            const res = await fetch("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers:{
                "content-type": "application/json",
            }
        });
        
        if(res.ok){
            let data = await res.json()
            console.log(data)
                notifications.success("Logged in with email: "+ username, 3000)
            
                localStorage.setItem("user", JSON.stringify(data.user));
                const from = ($location.state && $location.state.from) || "/";
                navigate("/dashboard", from, { replace: true });
            }
        else{
                notifications.warning('Wrong information given at login attempt!', 5000);
            }
	}

        }

        
    async function redirect(){
        if(!user){
            notifications.warning('You are not logged in!', 5000); 
            return;
        }

        const token = "Bearer" + user.token
        const res = await fetch("http://localhost:3000/dashboard", {
            method: 'POST',
            body: JSON.stringify({
            }),
            headers:{
                "content-type": "application/json",
                "Authorization": `Bearer ${user.token}`
            }
        });

        if(res.ok){
            const from = ($location.state && $location.state.from) || "/";
		    navigate("/dashboard", from, { replace: true });
        }
        else{
            notifications.warning('You are not logged in!', 5000);
        }
    }

</script>

<div class="login-container">
    <div class="login-header">
        <img src={userSrc} alt="User icon" on:click|preventDefault={redirect}>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
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
        {#if user}
            <button type="submit">Logout</button>
        {/if}
        {#if !user}
        <button type="submit">Login</button>
        {/if}
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
        padding-right: 1.5%;
    }

    .login-header:hover{
        cursor:pointer;
    }

    img{
        align-self: center;
        height:80%;
        width:max-content;
    }

    form{
        display: flex;
        flex-direction: row;
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
        margin: 0 auto;
    }
    button{
        align-self: center;
        justify-self: flex-start;
        text-align: center;
    }

</style>