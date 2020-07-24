import React, { useState, useEffect } from 'react'
import { MdExpandMore } from "react-icons/md"

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

    return (
        <div className='container'>
            <strong className="text-bold">Comment</strong>
            <div>
                <p className="text-info">
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
                <a>Add comment<MdExpandMore /></a>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Add title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            id="title"
                            placeholder="Add title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            name='description'
                            placeholder="Add description..."
                            id="description"
                            rows="3">
                        </textarea>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form
