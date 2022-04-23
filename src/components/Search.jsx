import React, { useState } from 'react'

const Search = ({searchCharacters}) => {
    const [text, setText] = useState('')
   const onsubmit=(e)=>{
    e.preventDefault();
    searchCharacters(text)
   }
   
  return (
     <section className='search'>
      <form onSubmit={onsubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search