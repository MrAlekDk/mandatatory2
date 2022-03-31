<script>
    import Header from "../../components/Header/Header.svelte"
    import Footer from "../../components/Footer/Footer.svelte"

    </script>
    <Header />
    
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