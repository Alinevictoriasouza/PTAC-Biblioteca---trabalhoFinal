import api from '../pages/api/api'
import styles from '../styles/CardAutor.module.css'

export default function ListagemAutor (props) {
  async function DeletarAutor() {
        
        let excluir = confirm("Tem certeza que deseja deletar este autor?")
        
      if (excluir == true) {
            const response = await api.delete("/deletar/" + props.id)
            console.log(response);
            alert("O autor foi excluido com sucessor")       
      } else {
            alert("Autor não foi excluido, tente novamente")
        }
    }
  
  return(
    <div className={styles.caixa}>
      <div className={styles.autores}>{props.nome} {props.sobrenome} {props.data}</div> 
      <button className={styles.deletar} onClick={DeletarAutor}>Deletar</button>
    </div>
  )
}