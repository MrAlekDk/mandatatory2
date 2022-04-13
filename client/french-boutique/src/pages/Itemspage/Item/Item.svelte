<script>
export let item;;


</script>

<div class="item">
    <img src={item.imageUrl} alt="Item in shop">
    <h2>{item.name}</h2>
    <p class="desc">{item.description || "No current description"}</p>
    <div class="add-box">
        <p>Stock: {item.stock}</p>
        <p>| Price: {item.price}£</p>
        <button>Add to basket</button>
    </div>
</div>
<style>

.item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width:500px;
    width:30%;
    border: black solid 2px;
    border-radius: 1%;
    margin: 1% auto;
    box-shadow: 8px 10px 15px rgba(20, 20, 20, 0.719);
}

.add-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
}

button{
    max-width: 45%;
    align-self: flex-end;
    justify-self: flex-end;
    color: white;
    background-color: rgba(190, 40, 40, 0.801);
    margin-right: 3%;
    margin-left: auto;
}
h2{
    margin:2%;
    align-self: flex-start;
}

img{
    margin-top: 2%;
    align-self: center;
    max-width: 50%;
    border: solid black 1px;
    box-shadow: 1px 1px 8px black;
}
p{
    margin:2%;
    align-self: flex-start;
}

.desc{
    font-style: italic;
}
</style>