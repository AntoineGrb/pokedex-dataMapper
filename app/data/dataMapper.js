//dataMapper
const client = require('./db_client'); //Pour pouvoir utiliser la bdd
const dataMapper = {
    getAllPokemons : async () => {
        const query = `SELECT * FROM pokemon;`;
        const result = await client.query(query);
        return result.rows;
    },

    getPokemon : async (pokemonId) => {
        const query = `
            SELECT * FROM pokemon 
            WHERE numero = $1;
        `;
        const values = [pokemonId];
        const result = await client.query(query , values);
        return result.rows[0];
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
        return result.rows;
    }

}
module.exports = dataMapper;