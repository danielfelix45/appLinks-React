import { useState } from 'react';
import './styles.css';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Logo } from '../../components/Logo';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
        navigate('/admin', { replace: true })
      })
      .catch(() => {
        toast.error('Erro ao tentar fazer login.')
        console.log('Erro ao fazer seu login!')
      })

  }

  return (
    <div className='login-container' >
      <Logo />

      <form className='form' onSubmit={handleLogin} >
        <input
          type='email'
          placeholder='Digite seu email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
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