import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.svg'
import { FiLogIn} from 'react-icons/fi'
import SetColor from '../../darkColor.js'
const Home=()=>{
 
    return (
        <>
         <div id="page-home">
          <div className="content">
          <header>
            <img src={logo} />
              <SetColor />
            </header>
            <main>
              <h1>Seu marketplace de coleta de resíduos.</h1>
              <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

              <Link to="/Points">
                <span><FiLogIn /></span>
                <strong>Pesquisar pontos de coleta</strong>
              </Link>
            </main>  
            
          </div>
        </div>
        </>
    )
}

export default Home