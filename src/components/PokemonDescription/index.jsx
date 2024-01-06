import styles from "./pokemonDescription.module.css"

export default function PokemonDescription({ img, pokemon, name }) {
    return (
        <div className={styles.childDetails}>
            <img src={img} alt="Imagem do Pokemon" />
            <div className={styles.flexTitles}>
                <h1>{ name ? name.charAt(0).toUpperCase() + name.slice(1) : null }</h1>
                <div>  
                    
                    <p>Peso: {pokemon.weight} kg</p>
                    <p>Altura: {pokemon.height} m</p>
                    <p>Experiência Base: {pokemon.base_experience}</p>
                </div>
            </div>
        </div>
    )
}