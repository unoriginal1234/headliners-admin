import React, { useState, useEffect } from 'react';
import fakeData from '../../db/fakeData.js';
import GameCardsList from './components/GameCardsList.jsx'
import AddCard from './components/AddCard.jsx'
import axios from 'axios'

function App() {

  const [ cardsList, setCardsList ] = useState([])
  const [ isAdding, setIsAdding ] = useState(false)

  useEffect(() => {
    populate()
  }, []);

  const populate = () => {
    axios.get('/card')
      .then(response => {
        setCardsList(response.data);
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });
  };

  const handleUpdateCard = (id) => {
    axios.put(`/card/${id}`)
      .then(response => {
        populate()
      })
      .catch(error => {
        console.error('Error updating card:', error);
      });
  };

  const handleAddCard = (venue, date, location, openingActs, headliner) => {
    console.log(venue)
    axios.post('/card', { headliner })
      .then(response => {
        populate();
      })
      .catch(error => {
        console.error('Error adding card:', error);
      });

    event.preventDefault();
    setIsAdding(false);
  }

  if (!isAdding) {
    return (
      <div>
        <h1>Admin</h1>

        <button onClick={()=>setIsAdding(true)}>
          ADD A CARD
        </button>

        <GameCardsList cardsList={cardsList} handleUpdateCard={handleUpdateCard}/>
        <p>Delete</p>
      </div>
    );
  } else {
    return (
      <AddCard handleAddCard={handleAddCard}/>
    )
  }
}

export default App;