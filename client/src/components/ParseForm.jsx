import React, { useContext, useState } from 'react'
import { ParseContext } from '../context/Parse.context'

import cl from './Lists/StyleList.module.css'

const initialState = {
    siteurl: ''
}
export default function ParseForm() {
    const [myUrl, setMyUrl] = useState(initialState)
    const {scriptArr, setScriptArr, styleArr, setStyleArr, loader, setLoader} = useContext(ParseContext)

    const handleSubmit = (e) => {
        console.log(myUrl)
        setLoader(true)
        e.preventDefault();
        const url = 'http://localhost:6622/api/posturl';
        fetch(url, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myUrl),
        })
          .then((res) => res.json())
          .then((res) => {
          setMyUrl(initialState);
           setLoader(false)
           setScriptArr(res.myScripts)
           setStyleArr(res.myStyles)
           
          })
          .catch(console.error);
    
       
      };
    
      const handleInput = (e) => {
        setMyUrl({ ...myUrl, [e.target.name]: e.target.value });
      };

  return (
    <div>
        <form onSubmit={handleSubmit} className={cl.parseForm}>
            <input type='text' name='siteurl' value={myUrl.siteurl} placeholder='Введите URL сайта' onChange={handleInput} />
            <button type='submit'>Получить</button>
        </form>
    </div>
  )
}
