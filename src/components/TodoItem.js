import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const TodoItem = ({ todo, onDelete }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let todoId = todo.sno;
    // console.log(todoId, 'Id');
    return (
        <>
            <div id={todoId}>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger me-2" onClick={() => { onDelete(todo) }}>Delete</button>
                <AiOutlineEdit onClick={handleShow} size={30} cursor='pointer' color='#0070fc' />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Title & Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Title</Form.Label>
                            <div className="mb-3">
                                <textarea className="form-control" id={todoId} rows="1">{todo.title}</textarea>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Description</Form.Label>
                            <div className="mb-3">
                                <textarea className="form-control" id={todoId} rows="4">{todo.desc}</textarea>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className="btn btn-sm btn-secondary me-2">Close</button>
                    <button className="btn btn-sm btn-primary me-2">Update</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TodoItem;