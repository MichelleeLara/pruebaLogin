
import Input from './Components/Input.jsx'
import Button from './Components/Button.jsx'
import './App.css'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    // console.log('entroooo');
  
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
      setIsButtonDisabled(e.target.value.length < 6);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert(`Correo electrónico: ${email}\nContraseña: ${password}`);
      setIsLoading(false);
      storeEmail(email); 
    }, 4000);
  };

  const storeEmail = (email) => {
    localStorage.setItem('userEmail', email);
  };


  // const checkStoredEmail = () => {
  //   const storedEmail = localStorage.getItem('userEmail');
  //   if (storedEmail) {
  //     alert(`Bienvenido de nuevo, ${storedEmail}`);
  //   }
  // };

  // useEffect(() => {
  //   checkStoredEmail();
  // }, []);

  console.log('nombre', email);
  console.log('pass', password);

  return (
    <>
      <main className="flex min-h-screen" >

        <aside className="min-h-screen">
          <img src="/img_login.webp" alt="" className='rounded-tr-3xl w-[50rem] bg-cover bg-center rounded-br-3xl h-screen' />
        </aside>

        <article className='w-full flex items-center justify-center gap-4 flex-col'>
          <div className="w-2/4 flex flex-col gap-4">
            <header className='flex items-center justify-cente flex-col'>
              <img src="/logoIcon.webp" alt="" className='w-[6rem] h-[6rem] rounded-full' />
              {
                localStorage.getItem("userEmail") && (
                  <p className='text-sm '>Esta es tu cuenta logeada: <span className='text-xs font-bold'>{localStorage.getItem("userEmail")}</span></p>
                )
              }
            </header>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className='text-sm font-semibold' htmlFor="">Correo electrónico</label>
              <Input type="text" name="email" value={email} onChange={handleChange} />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className='text-sm font-semibold' htmlFor="">Contraseña</label>
              <Input type="password" name="password" value={password} onChange={handleChange}  />
            </div>
            
            <Button  onClick={handleSubmit} disabled={isButtonDisabled} isLoading={isLoading} />
          </div>
          
        </article>
      </main>
    
    </>
  )
}

export default App
