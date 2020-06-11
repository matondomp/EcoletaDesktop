import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'

const Points = () => {
   
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft /> Valtar pra Home
              </Link>
            </header>
            <form>
                <h1>Cadastro do<br /> ponto de coleta</h1>
               
                <fieldset>
                    <legend> <h2>Dados</h2></legend>
                    <div className="field">
                        <label htmlFor="nome">Nome</label>
                        <input type="text"
                            name="nome"
                            id="nome"
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                                name="email"
                                id="email"
                              
                            />
                        </div><div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text"
                                name="whatsapp"
                                id="whatsapp"
                               
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <div>
                            <h2>Endereco</h2>
                            <span>Selecione o indereco no mapa</span>
                        </div>

                    </legend>
                    
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (Uf)</label>
                            <select name="uf" value=""  id="uf" >
                                <option value="0">
                                    selecione um estado
                                </option>
                               
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value="" >
                                <option value="0">
                                    selecione um cidade
                                </option>
                                
                                
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>

                    <legend className="field-second">

                        <div>
                            <h2>Items de coletas</h2>
                            <span>Selecione um ou mais ítens abaixo</span>
                        </div>
                    </legend>
                    <ul className="items-grid">
                       
                            <li>
                                <img src="" alt="" />
                                <span> </span>
                            </li>

                    </ul>

                </fieldset>
                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
        </div>
    )
}

export default Points