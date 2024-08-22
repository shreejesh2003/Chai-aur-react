
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebutton';
import Card from './components/Card';
import React, { useEffect } from'react';

function App() {

  const [themeMode, setThemeMode] = React.useState('light');

  const lightTheme=() => {
    setThemeMode('light')
  }

  const darkTheme=() => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  

  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Button*/}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card />
                    </div>
                </div>
      </div>
      </ThemeProvider>

    </>
  )
}

export default App
