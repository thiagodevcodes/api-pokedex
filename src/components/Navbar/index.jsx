//Importações
import styles from "./navBar.module.css";

export default function Navbar({ setSearchTerm }) {
    //Componte do menu de navegação onde está a barra de pesquisa
    return (
        <div className={styles.navbar}>
            <label htmlFor="searchBar" >Procurar Pokémon:</label>
            <input placeholder="Digite aqui o nome do Pokémon" id="searchBar" name="searchBar" onChange={(e) => setSearchTerm(e.target.value)} type="text" />
        </div> 
    )
}