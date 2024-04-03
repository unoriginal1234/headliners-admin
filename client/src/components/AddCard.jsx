import React, { useState } from 'react'

const AddCard = ({handleAddCard}) => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [openingActs, setOpeningActs] = useState('');
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

        <label>Opening Acts:</label>
        <input type="text" value={openingActs} onChange={(e) => setOpeningActs(e.target.value)} />

        <label>Headliner:</label>
        <input type="text" value={headliner} onChange={(e) => setHeadliner(e.target.value)} />

        <input type="submit" value="Submit" onClick={() => handleAddCard(venue, date, location, openingActs, headliner)} />
      </form>


    </div>
  )
}

export default AddCard