<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { store } from "./store/auth.js";
    import { notifications } from "./store/notifications.js"
    import Toast from "./components/Popups/Toast.svelte"
	import Dashboard from "./pages/Dashboard/Dashboard.svelte"
	import { onMount} from "svelte"

	const navigate = useNavigate();
	const location = useLocation();


	
	onMount(async () => {
		const res = await fetch("http://localhost:3000/authorize", {
            method: 'POST',
            body: JSON.stringify({
            }),
            headers:{
                "content-type": "application/json"
            }
        });
		if(!res.ok){
			notifications.warning("Not logged in, no access!", 5000);
			const from = ($location.state && $location.state.from) || "/";
            navigate("/", from, { replace: true });
		}
		let data = await res.json()
		$store = data
	})
</script>
{#if $store}
	<slot />
	<Dashboard/>
{/if}