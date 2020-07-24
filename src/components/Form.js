import React, { useState, useEffect } from 'react'
// import { MdExpandMore } from "react-icons/md"
// import { IoMdAddCircle } from "react-icons/io"

const Form = () => {
    const [notes, setNotes] = useState(null);
    const [form, setForm] = useState({ comments: "" })
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
        if (!form.comments) {
            err.comments = 'comment is required';
        }
        if (!form.comments.length > 20) {
            err.comments = 'Title cannot be more than 40 characters';
        }
        return err;
    }

    const showError = () =>  {

    }

    console.log(form);


    return (
        <div className='container'>
            {/* <h5 className="text-bold">Comments</h5> */}
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
            <form action="">
                {/* <button className="btn btn-outline-info btn-sm m-2 text-white">
                    <IoMdAddCircle className="m-1" />
                Add comment
                <MdExpandMore className="m-1 ml-1" />
                </button> */}
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="comment">Add your comment</label>
                        <textarea
                            className="form-control"
                            name='comment'
                            placeholder="Comment..."
                            id="comment"
                            rows="2"
                            onChange={handleChange}>
                        </textarea>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>
    )
}

export default Form
