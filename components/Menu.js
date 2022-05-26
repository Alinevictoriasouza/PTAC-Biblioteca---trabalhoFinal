import Link from 'next/link'
import Image from 'next/image'
import { Heart,  House, Laptop, Phone  } from 'phosphor-react'

import styles from '../styles/Menu.module.css'

export default function Menupg() {
  return (
    <>
      <div className={styles.cabecalho}>
        <Link href="/">
          <img src="/images/logo.png" height={130} 
    width={330} 
  />
        </Link> 

        <Link href="/cadastrol" >
          <a className={styles.text}>Cadastrar livro</a>
        </Link>
        <Link href="/cadastraa" >
          <a className={styles.text}>Cadastrar autor</a>
        </Link>
       </div>
<div className={styles.barrasec}>
      
			</div>
      
   
    </>
  )
}
//<div className={styles.barra}>
        //<Link href="/cadastro" >
          //<a className={styles.itemMenu}>Cadastro</a>
        //</Link>
        
      //</div>