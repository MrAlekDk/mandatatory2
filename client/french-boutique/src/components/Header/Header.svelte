<script>
import Basket from "./Basket/Basket.svelte"
import Navbar from "./Navbar/Navnbar.svelte"
let eiffelSource = "./images/eiffel-tower.png"
</script>
<div class="header-box">
    <h1>La Boutique Manifique</h1>
    <img alt="The Eiffel-tower">
    <Basket />
</div>
<Navbar />
<style>
.header-box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgb(46, 46, 151);
}
h1{
    font-size: 50px;
}
</style>