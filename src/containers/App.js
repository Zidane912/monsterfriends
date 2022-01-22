import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchfield, setSearchField] = useState('')
  const [count, setCount] = useState(0) 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setMonsters(users)})
  },[count])

  

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !monsters.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Monster Friends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll className='b--dark-orange'>
            <CardList monsters={filteredMonsters} />
          </Scroll>
          <footer className='fl'>By Zidane Alam</footer>
        </div>
        
      );
  }

export default App;
