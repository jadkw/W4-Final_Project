let darkToggle = false
function toggleContrast() {
    darkToggle = !darkToggle;
    if (darkToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


const pokemonListEl = document.querySelector(`.pokemon__wrapper`)

async function fetchData() {

    try {
        const pokemonName = document.getElementById("pokemonName").value
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = await response.json();

        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "";
        
        console.log(data)
        
        if (!response.ok) {
            throw new Error("Could not catch Pokemon");
        }
    }

    catch (error) {
        console.error(error)
    }

}




