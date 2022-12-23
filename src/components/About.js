import React from 'react';

function AboutUs(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#404268' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'light' : 'dark',
    };

    return (
        <div className='container mt-4'>
            <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseThree">
                            <strong >Analayze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            This is the accordion body.
                            This is the accordion body.
                            This is the accordion body.
                            This is the accordion body.
                        </div>
                    </div>
                    <h2 className="accordion-header" id="headingTwo" >
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
                            <strong >Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            This is accordion body.
                            This is accordion body.
                            This is accordion body.
                            This is accordion body.
                            This is accordion body.
                            This is accordion body.
                            This is accordion body.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
