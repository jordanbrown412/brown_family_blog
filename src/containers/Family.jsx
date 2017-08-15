import React from 'react'
import { Grid, Card, Image, Icon } from 'semantic-ui-react'
import headshot from '../images/headshot.jpg'

const FamilyCard = () => (
<Grid> 
  <Grid centered columns='equal'>
    <Grid.Row>
      <Grid.Column>
       <Card>
            <Image src={headshot}/>
                <Card.Content>
                     <Card.Header>Matthew</Card.Header>
                        <Card.Meta> <span className='date'>Joined in 2015 </span></Card.Meta>
                             <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
             <Card.Content extra>
                 <a><Icon name='user' />22 Friends</a>
            </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column>
           <Card>
            <Image src={headshot} />
                <Card.Content>
                     <Card.Header>Matthew</Card.Header>
                        <Card.Meta> <span className='date'>Joined in 2015 </span></Card.Meta>
                             <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
             <Card.Content extra>
                 <a><Icon name='user' />22 Friends</a>
            </Card.Content>
        </Card>
      </Grid.Column>

      <Grid.Column>
           <Card>
            <Image src={headshot} />
                <Card.Content>
                     <Card.Header>Matthew</Card.Header>
                        <Card.Meta> <span className='date'>Joined in 2015 </span></Card.Meta>
                             <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
             <Card.Content extra>
                 <a><Icon name='user' />22 Friends</a>
            </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Grid>
)

export default FamilyCard;