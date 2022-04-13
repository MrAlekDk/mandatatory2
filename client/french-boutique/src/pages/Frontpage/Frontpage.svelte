<script>
    import Header from "../../components/Header/Header.svelte"
    import Footer from "../../components/Footer/Footer.svelte"

    </script>
    <Header />
    <h1>Frontpage</h1>
    <Footer />
    <main>
        
    
    </main>
    <style>
        :global(body){
            padding: 0;
        }
    
    
        @media (min-width: 640px) {
            main {
                max-width: none;
            }
        }
    </style>