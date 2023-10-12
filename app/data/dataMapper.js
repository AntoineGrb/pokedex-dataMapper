//dataMapper
const client = require('./db_client'); //Pour pouvoir utiliser la bdd
const dataMapper = {

    //Récupération des pokemons
    getAllPokemons : async () => {
        const query = `SELECT * FROM pokemon;`;
        const result = await client.query(query);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows;
		}
    },

    getPokemon : async (pokemonId) => {
        const query = `
            SELECT * FROM pokemon 
            WHERE numero = $1;
        `;
        const values = [pokemonId];
        const result = await client.query(query , values);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows[0];
		}
    },

    getPokemonType : async(pokemonId) => {
        const query = `
            SELECT * FROM pokemon_type 
            JOIN type 
            ON pokemon_type.type_id = type.id 
            WHERE pokemon_type.pokemon_numero = $1;
        `
        const values = [pokemonId];
        const result = await client.query(query , values);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows;
		}
    },

    //Récupération des types
    getTypes: async() => {
        const query = `SELECT * FROM type;`;
        const result = await client.query(query);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows;
		}
    },

    getPokemonsByType: async(type) => {
        const query = `
            SELECT * FROM pokemon
            JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero 
            JOIN type ON pokemon_type.type_id = type.id
            WHERE type.name = $1;
        `;
        const values = [type];
        const result = await client.query(query , values);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows;
		}
    },  

    //Recherche d'un pokemon par le nom
    getPokemonsByName : async (text) => {
        const query = `
            SELECT * FROM pokemon 
            WHERE nom ILIKE $1;
        `;
        const values = [`%${text}%`];
        const result = await client.query(query , values);
        if (result.rows === null) {
			return null;
		} else {
            return result.rows;
		}
    },
}

module.exports = dataMapper;