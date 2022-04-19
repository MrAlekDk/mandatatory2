<script>
    import Header from "../../components/Header/Header.svelte";
    import Footer from "../../components/Footer/Footer.svelte";
    import { onMount } from "svelte";

    let photos=["./images/france.jpg",
                "./images/france1.jpeg",
                "./images/france2.jpeg",
                "./images/france2.jpg",
                "./images/france3.jpeg",
                "./images/france4.jpg"
            ];

let slideIndex = 0;

showSlides();
function showSlides() {
    let slides = Array.from(document.getElementsByClassName("right-box"));
    slides.map(node => node.style.display="none");
    if (slideIndex >= slides.length) {
      slideIndex = 0
    }
        if(slides.length>0){
            slides[slideIndex].style.display = "inherit";
        }
    slideIndex++;
  setTimeout(showSlides, 7000); // Change text every 7 seconds
};
    </script>
    <Header />
    <h1>Welcome to the web boutique!</h1>
    <div class="front-box">
        <div class="left-box">
            <p>C'est la vie en rose</p>
            <img src="https://static.vecteezy.com/system/resources/previews/001/191/384/original/rose-logo-png.png" alt="A rose">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[0]} alt="Photos from France">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[1]} alt="Photos from France">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[2]} alt="Photos from France">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[3]} alt="Photos from France">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[4]} alt="Photos from France">
        </div>
        <div class="right-box fade">
            <img id="image-carousel"src={photos[5]} alt="Photos from France">
        </div>
    </div>
    <Footer />

    <style>
        :global(body){
            padding: 0;
        }

        h1{
            min-width: fit-content;
            font-size: 72px;
            color: white;
            -webkit-text-fill-color: white; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
            text-shadow: 3px 3px #141313;
            user-select: none;
            text-align: center;
            margin-bottom: 0;
        }

        .front-box{
            display: flex;
            flex-direction: row;
            align-self: center;
            width: 80%;
            min-width: 50%;
            background-color: rgb(255, 255, 255);
            margin: 10%;
            margin-top: 2%;
            box-shadow: 8px 10px 15px rgba(20, 20, 20, 0.719);
            border: solid 2px black;
            max-height: 500px;
        }

        .left-box{
            display: flex;
            flex-direction: row;
            width: 30%;
            background-color: rgb(255, 255, 255);
            
        }

        .left-box p{
            font-size: 45px;
            font-weight: bold;
            text-shadow: 1px 1px #141313;
            align-self: center;
            user-select: none;
            outline: none;
            margin-left: 2%;
        }

        .left-box img{
            align-self: center;
            flex-shrink: 0;
            width: 50%;
            min-width: 250px;
        }

        .right-box{
            display: flex;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            width: 70%;
            height:initial;
            background-color: rgb(33, 30, 219);
            
        }

        .right-box img{
            flex-shrink: 0;
            min-width: 100%;
            min-height: 100%
        }
.fade {
  animation-name: fade;
  animation-duration: 2.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
    </style>