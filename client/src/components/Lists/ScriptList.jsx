import React, { useContext } from 'react'
import { ParseContext } from '../../context/Parse.context'

import cl from './StyleList.module.css'
export default function ScriptList() {
    const {scriptArr, setScriptArr, styleArr, setStyleArr, loader, setLoader} = useContext(ParseContext)
console.log(loader, 'лоадер')
  return (
    <div className={cl.scriptListDiv}>
        <h2>Список скриптов</h2>
{loader ? (
    <div className={cl.spinnerContainer}>
    <div className={cl.ldsRipple}>
<div />
<div />
    </div>
    </div>

):(
<>
        {scriptArr?.map((el)=>{
            return(
                <div className={cl.scriptDiv}> {el} </div>
            )
        })}
    </>
)}
</div>
  )
    }