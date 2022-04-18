<script>
import Header from "../../components/Header/Header.svelte";
import Footer from "../../components/Footer/Footer.svelte";
import Item from "./Item/Item.svelte"


import { onMount } from "svelte";
import { each } from "svelte/internal";

import { useLocation } from "svelte-navigator"

const location = useLocation();

let items =[];
let title =""

onMount(async ()=>{
    const relevantItems = $location.pathname
    const str = relevantItems.replace("/","")
    title = str.charAt(0).toUpperCase() + str.slice(1);
    const res = await fetch("http://localhost:3000/items" + relevantItems)
    const data = await res.json()
    items = data.data
});

</script>
<Header />
<h1>{title}</h1>
<div class="items-list">
    {#each items as item}
            <Item item={item} />
    {/each}
</div>
<Footer />
<style>
    h1{
    min-width: fit-content;
    font-size: 72px;
    color: white;
    -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow: 3px 3px #141313;
    margin: 0 auto;
    user-select: none;
    text-align: center;
    }

    .items-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }


</style>