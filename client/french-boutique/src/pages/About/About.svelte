<script>
    import Header from "../../components/Header/Header.svelte"
    import Footer from "../../components/Footer/Footer.svelte"
    import { user } from "../../store/global";

    let name="";
    let message="";

    //TODO: Implement limitation of emails
    async function sendMessage(evt){
        let options = JSON.stringify({
                name, message
            })
        const res = await fetch("http://localhost:3000/sendEmail",{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                message: message
            }),
            headers:{
                "content-type": "application/json"
            }
        })
    }
</script>

<Header />
<div class="about">
<div class="contact">
    <h2>Contact</h2>
    <div class="info">
        <img src={"./images/phone.png"} alt="Phone logo">
        <p>Phone: (+45)20202020</p>
    </div>
    <div class="info">
        <img src={"./images/mail.png"} alt="Mail logo">
        <p>Email: notARealMail@gmail.com</p>
    </div>
    <div class="info">
        <img src={"./images/location.png"} alt="Location logo">
        <p>Location: FakeStreet 666, 4000 Roskilde</p>
    </div>
</div>
<div class="white">
    <img src={"http://caitlinmanningfrench.weebly.com/uploads/2/5/1/6/25165328/9054517.jpg"} class="mr-french" alt="A stereotypical french guy">
</div>
<div class="avatar">
    <p>This website was created because of my passion for the world of france. "Je ne regrette rien" is a sentence, which often leaves my lips.</p>
</div>
</div>
<div class="message">
    <form class="content">
        <label for="name">Name</label>
        <input id="name" type="text" bind:value={name} maxlength=40 />
        <label for="message" >Message</label>
        <input id="message" type="text" bind:value={message} minlength="20"/>
        <input type="submit" on:click|preventDefault={sendMessage}>
      </form>
</div>
<Footer />

<style>
    .about{
        margin: 2%;
        display: flex;
        width:95%;
        min-width: 50%;
        box-shadow: 8px 10px 15px rgba(20, 20, 20, 0.719);
        border: solid 2px black;
    }

    .white{
        display: flex;
        background-color: white;
        width: 33%;
        min-width: 33%;
        border-left: solid black 2px;
        border-right: solid black 2px;
    }

    .avatar{
        display: flex;
        width:33%;
        min-width: 33%;
        background-color: rgba(241, 54, 54, 0.788);
    }

    .avatar p{
        margin: 2%;
        color: white;
        font-style: italic;
        font-size: 40px;
        text-align: center;
        text-shadow: 3px 3px #141313;
    }

    .contact{
    background-color: rgb(84, 87, 221);
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-right: 0;
    width:40%;
    }

    h2{
    min-width: fit-content;
    font-size: 40px;
    color: white;
    text-shadow: 3px 3px #141313;
    align-self: center;
    user-select: none;
    outline: none;
    }

    .info{
    color: white;
    display: flex;
    flex-direction: row;
    margin: 2%;
    }

    .mr-french{
        align-self: center;
        margin: 0 auto;
        min-width: 40%;
    }

    .message{
        margin: 2%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: rgba(241, 54, 54, 0.788);
        width: 32%;
        box-shadow: 8px 10px 15px rgba(20, 20, 20, 0.719);
        border: solid 2px black;
    }
    form{
        flex-direction: column;
    }


</style>