import React from 'react';
import { Form, Button  } from 'semantic-ui-react'

const CmsForm = () => (
  <Form>
    <Form.Group>
      <Form.Input label='First name' placeholder='First Name' width={6} />
      <Form.Input label='Blog Title' placeholder='BLog Title' width={4} />
      <Form.Input label='Author' placeholder='Author' width={6} />
    </Form.Group>
    <Form.TextArea label='Blog Post' placeholder='Write something...' rows='20'/>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default CmsForm;