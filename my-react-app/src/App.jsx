import { useCallback, useEffect, useState } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState('Nothing');

  const passwordGenerator = useCallback( ()=>{
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charAllowed){
      str += "/[`!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?~]/";
    }
    if(numberAllowed){
      str += "0123456789";
    }
    let pass = '';

    for(let i=0; i<length; i++){
      let curr =  Math.floor(Math.random() * str.length);
      pass += str.charAt(curr);
    }

    setPassword(pass)
  }, [length,numberAllowed,charAllowed]);
  

  useEffect(()=>{
    passwordGenerator();
  }, [length,numberAllowed,charAllowed])

  return (
   <>
    <div className='bg-black min-h-screen flex h-screen items-center justify-center'>
      <div className='bg-gray-700'>
         <h1 className='font-bold mx-20 my-5'> Password Generator</h1>
         <input className='bg-white ml-10 mr-2 h-10 w-90' type="text" text="password" value={password} readOnly />
         <button className='bg-blue-700 rounded-2xl p-1'>Copy</button>

         <div className="slider-container mx-10 my-3">
        <input type="range" min="1" max="100" value={length} onChange={ (e) => {setLength(e.target.value)} }/>
        <span>Length: <span id="sliderValue">{length}</span></span>
         </div>

        <input type="checkbox" id="Character" value={charAllowed} onChange={()=>{
          setChar((prev) => !prev )
        }}/>
        <label htmlFor="Character">Character</label>
        <input type="checkbox" id="Number" value={numberAllowed} onChange={()=>{
          setNumber((prev) => !prev)
        }}/>
        <label htmlFor="Number">Number</label>

       
      </div>

    </div>
   </>
  )
}

export default App
