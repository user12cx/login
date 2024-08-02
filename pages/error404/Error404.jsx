import React from 'react'
import "./Error404.css"
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div id="error-page">
    <div class="content">
       <h2 class="header" >
          404
       </h2>
       <h4 >
          Opps! Esta Pagina No existe 
       </h4>
       <p>
          Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
       </p>
       <div class="btns">
        <Link to={"/dashboard"}> return Home</Link>
       </div>
    </div>
 </div>
  )
}
