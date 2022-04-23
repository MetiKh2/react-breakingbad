import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Characters from './components/characters/Characters'
import Header from './components/Header'
import Search from './components/Search'

const App = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [term,setTerm] = useState('')
  useEffect(()=>{
    axios.get(`https://www.breakingbadapi.com/api/characters`)
    .then(res=>{
      setItems(res.data)
      setLoading(false)
    }).catch(err=>{
        console.log(err);
    })
  },[])
  const searchCharacters=(q)=>{
    setLoading(true)
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${q}`)
    .then(res=>{
      setItems(res.data)
      setLoading(false)
    }).catch(err=>{
        console.log(err);
    })
  }
  return (
    <div className='container'>
        <Header/>
        <Search searchCharacters={searchCharacters} />
        <Characters items={items} isLoading={loading}/>
    </div>
  )
}

export default App