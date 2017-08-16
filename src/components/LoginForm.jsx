import React from 'react';
import { Card, Form, Input, Grid, Header } from 'semantic-ui-react';
import '../App.css';

const LoginForm = () => (
    
    <Grid verticalAlign='middle' centered columns={1} className='login'>
    <Grid.Column width={7}>
    <Card fluid className='login'>
        <Card.Content className='login-content login-header'>
            
            <Header inverted color='orange' floated='left' as='h2'textAlign='center'>
                Login Page
            </Header>
            
        </Card.Content>

        <Card.Content className='login-content'>
            <Form>
                <Form.Field control={Input} label='Username' placeholder='Username' />
                <Form.Field control={Input} label='Password' placeholder='password' />
            </Form>
        </Card.Content>
    </Card>
    </Grid.Column>
    </Grid>
  
)

export default LoginForm;