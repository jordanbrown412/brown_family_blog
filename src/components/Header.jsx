import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
    <div>
     <Menu  attached pointing secondary>
             <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}><Link to='/login'>Home</Link></Menu.Item>
             <Menu.Item name='Family' active={activeItem === 'Family'} onClick={this.handleItemClick}><Link to='/'>Famiily</Link></Menu.Item>
             <Menu.Item name='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick}>Blog</Menu.Item>
     <Menu.Menu position='right'>
             <Menu.Item name='CMS' active={activeItem === 'logout'} onClick={this.handleItemClick} />
    </Menu.Menu>
    </Menu>
    <br/>
    <br/>
      </div>
    )
  }
}




export default Header;

