<script>

import { navbar } from "../../../store/navbar.js"
let navComponents =[];

navbar.subscribe(elements =>{
    navComponents = elements.navbarComponents;
});
</script>

<nav>
    {#each navComponents as element}
    <a href={"/"+element.toLowerCase()}>{element}</a>
    {/each}
</nav>

<style>
    
    nav{
        border: solid black 1px;
        background-color: rgb(190, 31, 31);
        height: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    a{
        color: white;
        text-shadow: 1px 1px #141313;
        align-self: center;
        font-size: 25px;;
    }
</style>