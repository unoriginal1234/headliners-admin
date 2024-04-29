import React, { useState } from 'react'

const AddCard = ({handleAddCard}) => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [openers, setOpeners] = useState([]);
  const [headliner, setHeadliner] = useState('');

  const handleAddOpener = () => {
    setOpeners([...openers, '']);
  };

  const handleOpenerChange = (index, value) => {
    const updatedOpeners = [...openers];
    updatedOpeners[index] = value;
    setOpeners(updatedOpeners);
  };

  const handleRemoveOpener = (index) => {
    const updatedOpeners = [...openers];
    updatedOpeners.splice(index, 1);
    setOpeners(updatedOpeners);
  };

  return (
    <div>
      <form>
        <label>Venue:</label>
        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} />

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

        {openers.map((opener, index) => (
          <div key={index}>
            <label>{`Opener ${index + 1}:`}</label>
            <input
              type="text"
              value={opener}
              onChange={(e) => handleOpenerChange(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveOpener(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddOpener}>
          Add Opener
        </button>

        <label>Headliner:</label>
        <input type="text" value={headliner} onChange={(e) => setHeadliner(e.target.value)} />

        <input
          type="submit"
          value="Submit"
          onClick={() => handleAddCard(venue, date, location, openers, headliner)}
        />
      </form>
    </div>
  );
}

export default AddCard