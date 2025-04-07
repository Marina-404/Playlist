import { useState } from 'react'
import CardList from './components/cardList'

import './App.css'
import './Card.css'

// function App() {
//   const [count, setCount] = useState(0)

const App = () => {
  return (
    <>
    <h1>Ecoute ta Playlist !</h1>
    <CardList />
    </>
  )
}

export default App
