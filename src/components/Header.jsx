import React, { Component } from 'react';
import { Segment, Menu, Image, Container } from 'semantic-ui-react';
import header from '../images/header.jpg'


class Header extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div>
     <Menu  attached pointing secondary>
             <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
             <Menu.Item name='Family' active={activeItem === 'Family'} onClick={this.handleItemClick} />
             <Menu.Item name='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick} />
     <Menu.Menu position='right'>
             <Menu.Item name='CMS' active={activeItem === 'logout'} onClick={this.handleItemClick} />
    </Menu.Menu>
    </Menu>
    
    <div className='header-image'>
     <Container fluid className='header-image'>
          <Image src={header} alt='fam' fluid />
     </Container>
     </div>
      </div>
    )
  }
}




export default Header;

