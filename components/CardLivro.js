import api from '../pages/api/api'
import styles from '../styles/CardAutor.module.css'


export default function ListagemLivro (props) {
async function DeletarLivro() {
        
        let exclusao = confirm("Tem certeza que deseja deletar este livro??")
        
      if (exclusao == true) {
            const response = await api.delete("/deletar_livros/" + props.id)
            console.log(response);
            alert("O livro foi excluido com sucessor")
        
      } else {
            alert("Livro não foi excluido, tente novamente")
        }
    }

  
  
  return(
    <div className={styles.caixa}>
      <div className={styles.livrossss}>Editora: {props.editora}. <br/> Título: {props.nome}.  <br/>Autor: {props.autor} {props.datapublicacao} Valor:{props.preco}</div> 
      <button className={styles.deletar} onClick={DeletarLivro}>Deletar</button>
    </div>

  )
}