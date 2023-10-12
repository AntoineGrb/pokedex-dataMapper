const { render } = require('ejs');
const dataMapper = require('../data/dataMapper')

const mainController = {

    homePage: async (req , res) => {
        const pokemons = await dataMapper.getAllPokemons();        
        res.render('index' , {pokemons, page:'home'});
    },

    pokemonPage: async (req , res) => {
        const id = req.params.id;
        const pokemon = await dataMapper.getPokemon(id); 
        const pokemonTypes = await dataMapper.getPokemonType(id);   
        res.render('pokemonPage' , {pokemon:pokemon , types:pokemonTypes, page:'pokemon'});
    },

    typesPage: (req, res) => {
        res.render('types' , {page:'type'});
    }

}

module.exports = mainController;