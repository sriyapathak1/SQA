import React from "react";
import { Button, Form } from 'react-bootstrap';

const FormTodo = ({ addTodo }) => {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit} > 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
        <Form.Label><b>Add comments</b></Form.Label>
        <Form.Control type="textarea" className="input" placeholder="Add your comments" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

  export default FormTodo;
