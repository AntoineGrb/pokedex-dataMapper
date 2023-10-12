const dataMapper = require('../data/dataMapper')

const mainController = {

    homePage: async (req , res) => {
        const pokemons = await dataMapper.getAllPokemons();        
        res.render('index' , {pokemons});
    },

    pokemonPage: async (req , res) => {
        const id = req.params.id;
        const pokemon = await dataMapper.getPokemon(id); 
        const pokemonTypes = await dataMapper.getPokemonType(id);   
        res.render('pokemonPage' , {pokemon:pokemon , types:pokemonTypes});
    },

}

module.exports = mainController;