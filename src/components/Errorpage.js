import React from 'react'
import { useRouteError } from 'react-router-dom'
function Errorpage() {


    let error=useRouteError()
    console.log(error)
  return (
    <div>
        Error Page
    </div>
  )
}

export default Errorpage