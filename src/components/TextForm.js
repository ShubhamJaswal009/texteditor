import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('')
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCapitalLetter = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleDelete = () => {
        setText('')
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label className='text-label'
                    style={{ marginTop: '20px' }}
                >
                    <h2>{props.heading}</h2>
                </label>
                <textarea
                    className="form-control"
                    id="myBox"
                    aria-label="With textarea"
                    value={text}
                    rows={10}
                    style={{ marginTop: '20px' }}
                    onChange={handleOnChange}
                />

                <button className="btn btn-primary my-1 mx-1" type="button"
                    disabled={text.length === 0}
                    onClick={handleUpperCase}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-primary my-1 mx-1" type="button"
                    disabled={text.length === 0}
                    onClick={handleLowerCase}>
                    Convert to LowerCase
                </button>

                <button className="btn btn-primary my-1 mx-1" type="button"
                    disabled={text.length === 0}
                    onClick={handleCapitalLetter}>
                    Capitalize Letter
                </button>

                <button className="btn btn-primary my-1 mx-1" type="button"
                    disabled={text.length === 0}
                    onClick={handleDelete}>
                    Delete text
                </button>

                <button className="btn btn-primary my-1 mx-1" type="button"
                    disabled={text.length === 0}
                    onClick={handleCopy}>
                    Copy text
                </button>

            </div>
            <div className='container'
                style={{ marginTop: '20px', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
                <h2 >Preview</h2>
                <p>{text}</p>
                <h6>
                    {text.trim(' ').split('').length} letters and {text.split(/\s+/).filter((letter) => { return letter.length !== 0 }).length} words
                </h6>
            </div>
        </>
    )
}