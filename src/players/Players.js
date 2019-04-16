import React from'react';

export default function Players(props) {
    const { players = []} = props;

    if (!players || !players.length > 0) {
        return <div>
            <p>No players available.</p>
        </div>
    } else 
    return (
        <div>
            <h3>Players List</h3> 
            {players.map(player => {
                return <div key={player.id} data-testid="player-name">{player.name}</div>
            })}
        </div>
    )
}