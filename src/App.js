import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header';
import CharacterGrid from './components/menu/menuGrid'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://menu-training-api.herokuapp.com/api/menuItems`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
     <Header/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
