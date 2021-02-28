import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
