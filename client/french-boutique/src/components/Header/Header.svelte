<script>
import Basket from "./Basket/Basket.svelte"
import Navbar from "./Navbar/Navnbar.svelte"
let eiffelSource = "./images/eiffel-tower.png"
</script>
<div class="header-box">
    <h1>La Boutique Manifique</h1>
    <img src={eiffelSource} alt="The Eiffel-tower" class="eiffel-tower">
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
    color: white;
    text-shadow: 3px 3px #141313;
}

.eiffel-tower{
    min-height: 2.5%;
    min-width: 2.5%;
    max-height: 5%;
    max-width: 5%;
}
</style>