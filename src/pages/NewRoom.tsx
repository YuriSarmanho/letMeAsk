import { Link } from 'react-router-dom'

import ilustrationImg from '../assets/images/illustration.svg'
import  logoImg from '../assets/images/logo.svg'
import googleIconimg from '../assets/images/google-icon.svg'
import {Button} from '../components/button'

import '../styles/auth.css'

export function NewRoom(){
    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real </p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Let me ask" />
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder ='Nome da sala'
                        />
                        <Button>
                            Criar sala 
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente?</p> <Link to="/">clique aqui</Link>
                </div>
            </main>
        </div>
    )
}