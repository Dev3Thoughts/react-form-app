import React, { useState, useEffect } from 'react'
import { MdExpandMore } from "react-icons/md"
import { IoMdAddCircle } from "react-icons/io"

const Form = () => {
    const [notes, setNotes] = useState(null);
    const [form, setForm] = useState({ title: "", description: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)


    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        setIsSubmitting(true)
        const res = await fetch('/notes')
        const data = await res.json()
        setIsSubmitting(false)
        setNotes(data)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    console.log(form);

    return (
        <div className='container'>
            <h5 className="text-bold">Comments</h5>
            <div>
                <p>
                    {JSON.stringify(notes, null, 8)}
                </p>
            </div>
            {
                isSubmitting
                    ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    : ''
            }
            <form action="">
                <button className="btn btn-outline-info btn-sm m-2">
                    <IoMdAddCircle className="m-1" />
                Add comment
                <MdExpandMore className="m-1 ml-1" />
                </button>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Add title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            id="title"
                            placeholder="Add title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            name='description'
                            placeholder="Add description..."
                            id="description"
                            rows="3"
                            onChange={handleChange}>
                        </textarea>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form
