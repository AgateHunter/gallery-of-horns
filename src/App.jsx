import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import Gallery from './Component/Gallery.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header title="Gallery of Horns" />
      
     <Gallery />

    <Footer />
    </>
  )
}

export default App;
