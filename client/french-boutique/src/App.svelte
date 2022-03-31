<script>
	import { Router, Link, Route } from "svelte-navigator";
	import About from "./pages/About/About.svelte";
	import Home from "./pages/Frontpage/Frontpage.svelte";
	import Dashboard from "./pages/Dashboard/Dashboard.svelte"
	import Checkout from "./pages/Checkout/Checkout.svelte";
	import Itemspage from "./pages/Itemspage/Itemspage.svelte";
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/dashboard" component={Dashboard} />
	<Route path="/checkout" component={Checkout} />
	<Route path="/moustaches" component={Itemspage} />
</Router>

<style>
</style>