import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Players from './Players';

describe('<Players />', () => {
    it('should render no players available when there are no players in the list', () => {
        const {queryByText} = render(<Players />) 
        expect(queryByText(/no players available/i)).not.toBeNull()
    })

    it('should render the list of players', () => {
        const players = [
            {id: 1, name: 'Elan'},
            {id: 2, name: 'Lloyd'},
            {id: 3, name: 'Lydia'},
            {id: 4, name: 'Megan'}
        ]
        const { getAllByTestId } = render(<Players players={players} />) 

        const playerNames = getAllByTestId('player-name').map(name => name.textContent);
        
        expect(playerNames).toHaveLength(players.length)

        const names = players.map(player => player.name)

        expect(playerNames).toEqual(names)
    })

})