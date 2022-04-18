<script>
	import { Router, Link, Route } from "svelte-navigator";

	import PrivateRoute from "./PrivateRoute.svelte";

	import About from "./pages/About/About.svelte";
	import Home from "./pages/Frontpage/Frontpage.svelte";
	import Dashboard from "./pages/Dashboard/Dashboard.svelte"
	import Checkout from "./pages/Checkout/Checkout.svelte";
	import Itemspage from "./pages/Itemspage/Itemspage.svelte";

	import Toast from "./components/Popups/Toast.svelte"
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/beverages" component={Itemspage} />
	<Route path="/consumables" component={Itemspage} />
	<Route path="/moustaches" component={Itemspage} />
	<Route path="/merch" component={Itemspage} />
	<Route path="/about" component={About} />
	<Route path="/checkout" component={Checkout} />
	<PrivateRoute path="/dashboard" let:location>
	</PrivateRoute>	
	<Route path="/*" component={Home} />
</Router>
<Toast />
<style>
</style>