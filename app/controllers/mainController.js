const { render } = require('ejs');
const dataMapper = require('../data/dataMapper')

const mainController = {

    homePage: async (req , res, next) => {
        try {
            const pokemons = await dataMapper.getAllPokemons(); 
            if (!pokemons) {
                next();
            } else {
                res.render('index' , {pokemons, page:'home'});
            }       
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    pokemonPage: async (req , res, next) => {
        const id = Number(req.params.id);

        try {
            const pokemon = await dataMapper.getPokemon(id); 
            const pokemonTypes = await dataMapper.getPokemonType(id);      
            
            if (!pokemon || !pokemonTypes) {
                next();
            } else {
                res.render('pokemonPage' , {pokemon:pokemon , types:pokemonTypes, page:'pokemon'});
            }

        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    typesPage: async (req, res) => {
        try {
            const types = await dataMapper.getTypes();   
            
            if (!types) {
                next();
            } else {
                res.render('types' , {types, page:'type'});
            }

        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    pokemonsByTypePage: async (req, res) => {
        const typeSearched = req.params.type;

        try {
            const pokemonsFromType = await dataMapper.getPokemonsByType(typeSearched);  
            
            if (!pokemonsFromType) {
                next();
            } else {
                res.render('pokemonFromType' , {pokemonsFromType, page:'PokemonFromType'});
            }

        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    pokemonsByNamePage: async (req, res) => {
        const searchInput = req.query.name;

        try {
            const pokemonsFromName = await dataMapper.getPokemonsByName(searchInput);
            
            if (!pokemonsFromName) {
                next();
            } else {
                res.render('pokemonFromName' , {pokemonsFromName, page:'PokemonFromName'});
            }

        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }        
    },
}

module.exports = mainController;