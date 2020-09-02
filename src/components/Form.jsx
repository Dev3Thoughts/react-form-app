import React, { useState, useEffect } from 'react'

const Form = () => {
    const [notes, setNotes] = useState(null);
    const [form, setForm] = useState({ reviews: "" })
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

    const validate = () => {
        let err = {}
        if (!form.reviews) {
            err.reviews = 'review is required';
        }
        if (!form.reviews.length > 20) {
            err.reviews = 'Title cannot be more than 40 characters';
        }
        return err;
    }

    const showError = () => {

    }

    console.log(form);


    return (
        <div className='container'>
            <div className="p-2">
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

            <form>
                <div className="form-group">
                    <label htmlFor="review">Add your review</label>
                    <textarea
                        className="form-control"
                        name='review'
                        placeholder="review..."
                        id="review"
                        rows="1"
                        onChange={handleChange}>
                    </textarea>

                </div>
                <button type="submit" className="btn btn-primary">Add</button>

            </form>

        </div>
    )
}

export default Form
