import React, { useState } from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import "./Navbar.css"

export default function Navbar () {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
  }

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item 
          name='home' 
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item 
          name='decks' 
          active={activeItem === 'decks'}
          onClick={handleItemClick}
        />
        <Menu.Item 
          name='friends' 
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  )
}