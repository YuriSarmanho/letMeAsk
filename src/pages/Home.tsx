import { useNavigate } from 'react-router-dom'
import {firebase} from '../service/firebase'

import ilustrationImg from '../assets/images/illustration.svg'
import  logoImg from '../assets/images/logo.svg'
import googleIconimg from '../assets/images/google-icon.svg'
import {Button} from '../components/button'

import '../styles/auth.css'

export function Home(){
    const navigate = useNavigate();

    function handleCreateRoom(){
        navigate('/rooms/')
    }


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
                    <Button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconimg} alt="icone do google" />
                        Crie sua sala com o Google
                    </Button>
                    <div className='separator'>Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder ='Digite o código da sala'
                        />
                        <Button>
                            Entrar na sala 
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}