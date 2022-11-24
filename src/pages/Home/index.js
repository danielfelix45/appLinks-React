import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { db } from '../../services/firebaseConnection';
import { getDocs, collection, orderBy, query, getDoc, doc, } from 'firebase/firestore';

import { Social } from '../../components/Social';
import './styles.css';

export default function Home() {

  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  const navigate = useNavigate();

  useEffect(() => {

    function loadLinks() {
      const linksRef = collection(db, 'links')
      const queryRef = query(linksRef, orderBy('created', 'asc'))

      getDocs(queryRef)
        .then((snapshot) => {
          let lista = []

          snapshot.forEach((docs) => {
            lista.push({
              id: docs.id,
              name: docs.data().name,
              url: docs.data().url,
              bg: docs.data().bg,
              color: docs.data().color,
            })
          })

          setLinks(lista)
        })
    }

    loadLinks()

  }, [])

  useEffect(() => {

    function loadSocialLink() {
      const docRef = doc(db, 'social', 'link')

      getDoc(docRef)
        .then((snapshot) => {

          if (snapshot.data() !== undefined) {
            setSocialLinks({
              facebook: snapshot.data().facebook,
              instagram: snapshot.data().instagram,
              youtube: snapshot.data().youtube
            })
          }


        })
    }

    loadSocialLink()

  }, [])

  function toLogin() {
    navigate('/login');
  }

  return (
    <div className='home-container'>
      <div className='btn-login' onClick={toLogin}>
        <button>Login</button> <AiOutlineArrowRight size={30} color='#fff' />
      </div >

      <h1>Barbearia Félix</h1>
      <span>Veja meus links👇</span>

      <main className='links'>

        {links.map((item) => (
          <section key={item.id} className='link-area' style={{ backgroundColor: item.bg }}>
            <a href={item.url} target='blank'>
              <p style={{ color: item.color }} className='link-text'>{item.name}</p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.facebook} >
              <FaFacebook size={35} color='#fff' />
            </Social>
            <Social url={socialLinks?.youtube} >
              <FaYoutube size={35} color='#fff' />
            </Social>
            <Social url={socialLinks?.instagram} >
              <FaInstagram size={35} color='#fff' />
            </Social>
          </footer>
        )}

      </main>
    </div >
  )
}