import React, { useState } from 'react'


const MyAccordion = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <center>
                <div className='w-50 p-5 bg-primary text-light mt-4  '>
                    <div className='bg-secondary p-2 form-control text-start '> <button className='btn btn-primary' onClick={() => { setShow(!show) }}>{show ? "➖" : "➕"}</button> {props.topic}</div>
                    {
                        show &&
                        <div className='bg-bg-secondary p-2  form-control text-start'>{props.des}</div> 
                    }
                    {
                        show &&
                           <div className='bg-bg-secondary p-2  form-control text-start mt-2'>{props.html}</div>
                    }
                </div>
            </center>
        </div>
    )
}

export default MyAccordion

