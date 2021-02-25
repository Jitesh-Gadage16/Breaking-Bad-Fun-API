import React from 'react'
import CharacterItem from '../Characters/CharacterItem'
import Spinner from '../UI/Spinner'


const CharactersGrid = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : <section className="cards">
        {
           items.map((item) =>(
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ) )
        }
    </section>

}

export default CharactersGrid
