//Importações
import styles from "./movements.module.css";

export default function Movements({ moves }) {
    //Componente de listagem dos movimentos do pokemon
    //Onde irá percorrer o array atráves do método map listando os nomes dos movimentos
    return (
        <div className={styles.containerMovements}>
            <h2>Lista de Movimentos</h2>
            <ul className={styles.list}>
                {
                    moves.map((value, index) => {
                        return <li key={index}>{value.move.name}</li>
                    })
                }
            </ul>
        </div>

    )
}