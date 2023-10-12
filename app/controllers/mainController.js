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

    typesPage: async (req, res) => {
        const types = await dataMapper.getTypes();
        res.render('types' , {types, page:'type'});
    },

    pokemonsByTypePage: async (req, res) => {
        const typeSearched = req.params.type;
        const pokemonsFromType = await dataMapper.getPokemonsByType(typeSearched);
        console.log(pokemonsFromType);
        res.render('pokemonFromType' , {pokemonsFromType, page:'PokemonFromType'});
    },

    pokemonsByNamePage: async (req, res) => {
        const searchInput = req.query.name;
        console.log(searchInput);
        const pokemonsFromName = await dataMapper.getPokemonsByName(searchInput);
        console.log(pokemonsFromName);
        res.render('pokemonFromName' , {pokemonsFromName, page:'PokemonFromName'});
    },

}

module.exports = mainController;