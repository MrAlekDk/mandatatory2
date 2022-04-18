<script>
    import Header from "../../components/Header/Header.svelte"
    import Footer from "../../components/Footer/Footer.svelte"

    import { store } from "../../store/auth.js"

    let name;

    try{
     store.subscribe(value =>{
        name = value.user;
    })   
    }
    catch{
        console.log("Can't read")
    }
    
</script>

<Header />
<h1>Welcome to {name}</h1>
<p>This is the dashboard</p>
<p></p>
<Footer />
<style>

</style>