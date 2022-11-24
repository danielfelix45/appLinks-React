import { useState } from 'react';
import './styles.css';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { auth } from '../../services/firebaseConnection';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('Preencha todos os campos!')
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo de volta :)')
        navigate('/admin', { replace: true })
      })
      .catch(() => {
        toast.error('Erro ao tentar fazer login.')
        console.log('Erro ao fazer seu login!')
      })

  }

  function ToHome() {
    navigate('/')
  }

  return (
    <div className='login-container' >
      <div className='back-to-home' onClick={ToHome}>
        <AiOutlineArrowLeft size={30} color='#fff' />
        <button>
          Home
        </button>
      </div>

      <Logo />

      <form className='form' onSubmit={handleLogin} >
        <Input
          type='email'
          placeholder='Digite seu email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='**********'
          autoComplete='on'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' >Acessar</button>
      </form>

    </div>
  )
}