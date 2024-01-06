//Importações
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Pokemon.module.css"
import PokemonDescription from "@/components/PokemonDescription";
import Movements from "@/components/Movements";

export default function PokemonDetails() {

    //Hook no Next responsável pelo roteamento
    const router = useRouter();

    //Valor recuperado através do parâmentro da URL
    let name = router.query.name;

    //Estados da página
    const [pokemon, setPokemon] = useState([]);
    const [img, setImg] = useState("")
    const [moves, setMoves] = useState([])

    //Função para buscar as informações de cada pokemon na Poke Api
    const handleData = async (name) => {
        try {
            if(name) {
                //Utilizando o axios para capturar os dados
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                console.log(res.status);

                //Verificar se o status foi 200 e armazenar os dados no estado
                if(res.status == 200) {
                    const dados = res.data;
                    setPokemon(dados)
                    setMoves(dados.moves)
                    setImg(dados.sprites.front_default)
                }
            }
        } catch (err) {
            //Caso ocorra algum erro informará no console
            console.log(err)
        }
    }

    //useEffect para alterar os dados do pokemon conforme o nome for alterado
    useEffect( () => {
        handleData(name)
    }, [name])

    //Componentes da descrição do pokemon e os movimentos dele
    return (
        <div className={styles.containerDetails}>
            <PokemonDescription name={name} img={img} pokemon={pokemon}/>
            <Movements moves={moves}/>
            <button onClick={() => router.back()}>Voltar</button>
        </div>
    );
};
