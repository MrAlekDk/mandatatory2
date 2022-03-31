<script>
import { useNavigate, useLocation } from "svelte-navigator";

const navigate = useNavigate();
const location = useLocation();

function returnToFrontpage(){
    navigate("/",{
        state: {from : $location.pathname},
        replace: false,
    });
}
//import { user } from "./stores";
import Basket from "./Basket/Basket.svelte"
import Navbar from "./Navbar/Navbar.svelte"
import Login from "./Login/Login.svelte"

let eiffelSource = "./images/eiffel-tower.png"
</script>

<div class="header-box">
    <h1 on:click={returnToFrontpage}>La Boutique Manifique</h1>
    <div class="eiffel-box">
        <img src={eiffelSource} alt="The Eiffel-tower" class="eiffel-tower">
    </div>
    <Login />
    <Basket />
</div>
<Navbar />

<style>
.header-box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgb(68, 68, 204);
    height: 12%;
    border: solid black 1px;
}
h1{
    min-width: fit-content;
    font-size: 72px;
    color: white;
    text-shadow: 3px 3px #141313;
    align-self: center;
    user-select: none;
    outline: none;
}

@media only screen and (min-width: 601px) {
  h1 {
    font-size: 72px;
  }
}

/* If the screen size is 900px or less */
@media only screen and (max-width: 900px) {
  h1 {
    font-size: 45px;
  }
}

/* If the screen size is 900px or less */
@media only screen and (max-width: 500px) {
  h1 {
    font-size: 25px;
  }
}

h1:hover{
    cursor:pointer;
}

.eiffel-box{
    align-self: center;
    max-width: 10%;
    height: 90%;
}

img{
    width:100%;
    height:100%;
    object-fit: contain;
}



</style>