import "./Login.css";
import React, { useState } from 'react';



export default function Login() {

  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errores, setErrores] = useState({});


const handleSubmit = (event) => {
  event.preventDefault();
  const errores = {};

  if (usuario === '') {
    errores.usuario = 'Por favor, ingrese su usuario';
  }

  if (contraseña === '') {
    errores.contraseña = 'Por favor, ingrese su contraseña';
  }

  if (Object.keys(errores).length > 0) {
    setErrores(errores);
  } else {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
  }
};
return (   
 <div className="fondo">
      <div className="container">
        <input type="checkbox" id="check"></input>
        <div class="login form">
          
          <header>Inforsystem Computer</header>
          <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your email" value={usuario} 
            onChange={(event) => setUsuario(event.target.value)}></input>
            {errores.usuario && <div style={{ color: 'red' }}>{errores.usuario}</div>}

            <input type="password" placeholder="Enter your password"
            value={contraseña}
            name="contraseña"
            onChange={(event) => setContraseña(event.target.value)}></input>
            {errores.contraseña && <div style={{ color: 'red' }}>{errores.contraseña}</div>}

            <input type="submit" class="button-login" value="Login" ></input>
          </form>


          {/* <div class="signup">
            <span class="signup">
              Don't have an account?
              <label for="check">Signup</label>
            </span>
          </div> */}
        </div>
        {/* <div class="registration form">
          <header>Signup</header>
          <form action="#">
            <input type="text" placeholder="Enter your email"></input>
            <input type="password" placeholder="Create a password"></input>
            <input type="password" placeholder="Confirm your password"></input>
            <input type="button" class="button" value="Signup"></input>
          </form>
          <div class="signup">
            <span class="signup">
              Already have an account?
              <label for="check">Login</label>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}