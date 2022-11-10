import './styles.css';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import { Social } from '../../components/Social';

export default function Home() {
  return (
    <div className='home-container'>
      <h1>Barbearia Félix</h1>
      <span>Veja meus links👇</span>

      <main className='links'>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Nosso canal no Youtube</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Grupo privado no Instagram</p>
          </a>
        </section>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Nosso Blog</p>
          </a>
        </section>

        <footer>
          <Social url='https://facebook.com' >
            <FaFacebook size={35} color='#fff' />
          </Social>
          <Social url='https://youtube.com' >
            <FaYoutube size={35} color='#fff' />
          </Social>
          <Social url='https://instagram.com' >
            <FaInstagram size={35} color='#fff' />
          </Social>
        </footer>

      </main>
    </div>
  )
}