<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "./store/global.js";
    import { notifications } from "./store/notifications.js"
    import Toast from "./components/Popups/Toast.svelte"

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$user) {
        notifications.warning('You are not logged in!', 5000)
		navigate("/", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $user}
	<slot />
{/if}