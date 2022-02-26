import React from 'react'
import './Write.css'
export const Write = () => {
  return (
    <div className='form'>
      <img src="sdtitle.jpg" className='writeimg' />
        <form  className="form-part">
            <div className="formgrp">
                <label htmlFor="fileinput">
                <i className=" writeIcon fas fa-plus-circle"></i>
                </label>
                <input type="file" id='fileinput' style={{display:"none"}} />
                <input type="text" placeholder='Enter Title Here' className='title' autoFocus={true} />
            </div>
            <div className="content-part">
                <textarea type="text" placeholder='Tell your Story' className='content-part text-area' ></textarea>
            </div>
            <button className='submit-btn' >Publish</button>
        </form>
    </div>
  )
}
