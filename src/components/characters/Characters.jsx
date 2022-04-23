import React from 'react'
import spinnner from '../../img/spinner.gif'
import Spinner from '../Spinner'
import Character from './Character'
const Characters = ({isLoading,items}) => {
  if(isLoading){
      return  <Spinner/>
  }
    return (<section className='cards'>    
        {items.map((item,i)=>{
               return <Character item={item} key={i}/>
        })}
        </section>

  )
}

export default Characters