//Importações
import styles from "./pokemonCard.module.css";
import Link from "next/link";

export default function PokemonCard({ filteredData }) {
    //Componente responsável pelos card dos pokemons na tela inicial
    return (
        <div className={styles.box}>
            {                  
                filteredData.map((value, index) => { 
                        const url = value.url;
                        const partesDaURL = url.split("/");
                        const numeroDoPokemon = partesDaURL[partesDaURL.length - 2]; 
                        
                        return (
                        <Link href={`/pokemon/${value.name}`} key={index}>
                            <div  className={styles.boxChild} key={index}>
                                <p>{value.name.charAt(0).toUpperCase() + value.name.slice(1) }</p>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroDoPokemon}.png`} alt="Imagem do Pokémon" />
                                <p>{"#" + numeroDoPokemon}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

