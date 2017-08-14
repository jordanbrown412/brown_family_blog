import React from 'react';
import { Card, Form, Input, Segment, Container, Grid, Header } from 'semantic-ui-react';
import '../App.css';

const LoginForm = () => (
    
    <div>
    <Grid verticalAlign='middle' centered columns={1} className='login'>
    <Grid.Column width={7}>
    {/* <Segment basic> */}
    <Card fluid className='login'>
        <Card.Content className='login-header'>
            
            <Header as='h2'textAlign='center'>
                Login Page
            </Header>
            
        </Card.Content>

        <Card.Content>
            <Form>
                <Form.Field control={Input} label='Username' placeholder='Username' />
                <Form.Field control={Input} label='Password' placeholder='password' />
            </Form>
        </Card.Content>
    </Card>
    {/* </Segment> */}
    </Grid.Column>
    </Grid>
    </div>
)

export default LoginForm;