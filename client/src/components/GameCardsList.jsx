import React from 'react';

const GameCardList = ({cardsList, handleUpdateCard}) => {

  if (cardsList && cardsList.length > 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Headliner</th>
              <th>Openers</th>
              <th>Venue</th>
              <th>Currently Playing</th>
            </tr>
          </thead>
          <tbody>
            {cardsList.map((card, index) => (
              <tr key={index}>
                <td>{card.headliner.name}</td>
                <td>{card.openers[0].name}</td>
                <td>{card.venue.Name}</td>
                {card.isplaying? <td>Y</td>: <td><button onClick={() => handleUpdateCard(card.id)}>Play</button></td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  } else {
    return <></>
  }
}

export default GameCardList