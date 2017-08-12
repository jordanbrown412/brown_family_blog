import React, { Component } from 'react';
import { Segment, Menu, Image, Container, Divider } from 'semantic-ui-react';
import header from '../images/header1.jpeg'
import HomePageBlog from './HomePageBlog.jsx'
import FamilyCard from '../containers/Family';

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
    

     {/*<Container fluid className='header-image'>
          <Image src={header} alt='fam' width='100%' height='200px' />
     </Container>
     */}
    <br/>

     <FamilyCard />
     {/*<HomePageBlog />*/}
      </div>
    )
  }
}




export default Header;

