import React, { useContext } from 'react'
import { ParseContext } from '../../context/Parse.context'

import cl from './StyleList.module.css'

export default function StyleList() {
    const {scriptArr, setScriptArr, styleArr, setStyleArr, loader, setLoader} = useContext(ParseContext)
    console.log(loader, 'лоадер')
      return (
        <div className={cl.scriptListDiv}>
            <h2>Список подключенных стилей</h2>
    {loader ? (
        <div className={cl.spinnerContainer}>
        <div className={cl.ldsRipple}>
    <div />
    <div />
        </div>
        </div>
    
    ):(
    <>
            {styleArr?.map((el)=>{
                return(
                    <div className={cl.scriptDiv}> {el} </div>
                )
            })}
        </>
    )}
    </div>
      )
}


