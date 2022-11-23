import { useState, useEffect } from 'react';
import './styles.css';

import { db } from '../../services/firebaseConnection';
import { setDoc, doc, getDoc, } from 'firebase/firestore';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { MdAddLink } from 'react-icons/md'

export default function Networks() {
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, 'social', 'link')
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data().facebook)
            setInstagram(snapshot.data().instagram)
            setYoutube(snapshot.data().youtube)
          }
        })
    }

    loadLinks()

  }, [])

  function handleSave(e) {
    e.preventDefault()

    setDoc(doc(db, 'social', 'link'), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        console.log('Urls salvas com sucesso.')
      })
      .catch((error) => {
        console.log('Erro ao salvar Urls.')
      })
  }

  return (
    <div className='admin-container'>
      <Header />

      <h1 className='title-social'>Suas redes sociais</h1>

      <form className='form' onSubmit={handleSave}>
        <label className='label'>Link do facebook</label>
        <Input
          placeholder='Digite aqui seu facebook...'
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className='label'>Link do instagram</label>
        <Input
          placeholder='Digite aqui seu instagram...'
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className='label'>Link do youtube/label</label>
        <Input
          placeholder='Digite aqui seu youtube...'
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button className='btn-register' type='submit'>
          Salvar links < MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>

  )
}