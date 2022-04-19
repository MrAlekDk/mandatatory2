<script>
	import { useNavigate, useLocation } from "svelte-navigator";
    import { notifications } from "./store/notifications.js"
    import Toast from "./components/Popups/Toast.svelte"
	import Dashboard from "./pages/Dashboard/Dashboard.svelte"
	import { onMount} from "svelte"

	const navigate = useNavigate();
	const location = useLocation();
	
	let user;

	onMount(async () => {
		try{
			user = JSON.parse(localStorage.getItem("user"));
		}
		catch{
			console.log("Error in privateRoute")
		}
		if(!user){
			notifications.warning("Not logged in, no access!", 5000);
			const from = ($location.state && $location.state.from) || "/";
            navigate("/", from, { replace: true });
		}
	})
</script>
{#if user}
	<slot />
	<Dashboard/>
{/if}