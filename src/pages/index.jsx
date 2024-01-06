//Importações
import { useEffect, useState } from "react"
import axios from "axios";
import styles from "../styles/Pokemon.module.css";
import PokemonCard from "@/components/PokemonCard";
import Navbar from "@/components/Navbar";

export default function Pokemon() {
    //Estados para armazenamento das informações    

    const [data, setData] = useState([])
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);


    //Função para buscar os dados Poke Api
    const handleData = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1024`)
            console.log(res.status);
            
            //Caso a requisição tenha status 200 (OK) armazeno os dados no estado
            if(res.status == 200) {
                const dados = res.data;
                setData(dados.results)
                setFilteredData(dados.results)
            }
        } catch (err) {
            console.log(err)
        }
    }
    
    //Função responsável por filtrar os dados na barra de pesquisa
    const handleSearch = () => {
        //Os valores são filtrados do array e transformados em letras minusculas
        const filteredResults = data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredData(filteredResults);
    };

    //Hook useEffect para atualizar os dados assim que a barra de pesquisa é alterada através da função handleSearch
    useEffect(() => {
        handleSearch();
    }, [search]);

    //Buscar os dados dos cards Pokemons
    useEffect(() => {
        handleData();
    }, []);
    

    //Componente Navbar e PokemonCard sendo chamados e passando algumas props
    return (
        <div className={styles.containerMain}>
            <Navbar setSearchTerm={setSearch}/>
            <PokemonCard searchTerm={search} filteredData={filteredData} handleSearch={handleSearch}/>
        </div>
    )
  }