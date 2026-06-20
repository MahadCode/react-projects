import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  function darkTheme(){
    setThemeMode('dark')
  }

  function lightTheme(){
    setThemeMode('light')
  }
  

  useEffect(()=>{
    document.documentElement.classList.remove("dark","light");
    document.documentElement.classList.add(themeMode);
  },[themeMode])




  return (
    <ThemeProvider value = {{themeMode,lightTheme,darkTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
