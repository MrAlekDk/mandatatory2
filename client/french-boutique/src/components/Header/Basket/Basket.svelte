<script>
let cartSource = "./images/cart.png"

</script>

<div class="shopping-container">
    <a class="basket-container" href="/checkout">
        <span class="item-amount">3</span>
        <img class="basket-logo" src={cartSource} alt="Logo of a Cart">
    </a>
    <div class="price-sum">500kr</div>
</div>
<style>

.shopping-container{
    display: flex;
    flex-direction: row;

}

.basket-container{
    display: inline-block;
    position:sticky;
    width: 48px;
    height: 42px;
    text-align: center;
    padding-top: 6px;
    align-self: center;
}

.basket-container:hover{
    cursor: pointer;
}

.item-amount{
    position: absolute;
    font-size:13px;
    color:#fff;
    align-self: center;
    justify-self: center;
    left:45%;
    top:27%;
}

.basket-logo{
    margin-top: 0;
}
.price-sum{
    color: white;
    align-self: center;
}
</style>