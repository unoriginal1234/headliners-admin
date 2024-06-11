import React from 'react';

const GameCardList = ({cardsList, handleUpdateCard, handleDeleteCard, handleUpdatePlayDate}) => {

  if (cardsList && cardsList.length > 0) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Headliner</th>
              <th>Openers</th>
              <th>Venue</th>
              {/* <th>Currently Playing</th> */}
              <th>Delete</th>
              <th>Play Date</th>
              <th>Change Play Date</th>
            </tr>
          </thead>
          <tbody>
            {cardsList.map((card, index) => (
              <tr key={index}>
                <td>{card.headliner.name}</td>
                <td>
                  {card.openers.map((opener, index) => (
                    <span key={index}>{index + 1}. {opener.name} </span>
                  ))}
                </td>
                <td>{card.venue.Name}</td>
                {/* {card.isplaying ? (
                  <td>Y</td>
                ) : (
                  <td>
                    <button onClick={() => handleUpdateCard(card.id)}>Play</button>
                  </td>
                )} */}
                <td>
                  <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
                </td>
                <td>
                  {card.playdate}
                </td>
                <td>
                  <input type="date" onChange={(e) => handleUpdatePlayDate(card.id, e.target.value)} />
                </td>
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