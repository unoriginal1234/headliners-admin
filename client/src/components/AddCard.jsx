import React, { useState } from 'react'

const AddCard = ({handleAddCard}) => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [openingAct1, setOpeningAct1] = useState('');
  const [openingAct2, setOpeningAct2] = useState('')
  const [headliner, setHeadliner] = useState('');

  return (
    <div>
      <form>
        <label>Venue:</label>
        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} />

        <label>Date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Opening Act 1:</label>
        <input type="text" value={openingAct1} onChange={(e) => setOpeningAct1(e.target.value)} />

        <label>Opening Act 2:</label>
        <input type="text" value={openingAct2} onChange={(e) => setOpeningAct2(e.target.value)} />

        <label>Headliner:</label>
        <input type="text" value={headliner} onChange={(e) => setHeadliner(e.target.value)} />

        <input type="submit" value="Submit" onClick={() => handleAddCard(venue, date, location, openingAct1, openingAct2, headliner)} />
      </form>


    </div>
  )
}

export default AddCard