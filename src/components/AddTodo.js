import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            toast.error('Enter Title & Description', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
        }
        else {
            addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <>
            <div className="container my-3">
                <h3>Add Todos</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Enter Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Description</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" rows="4"></textarea>
                    </div>
                    <button onClick={submit} type="submit" className="btn btn-primary btn-sm">Add Todo</button>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default AddTodo;