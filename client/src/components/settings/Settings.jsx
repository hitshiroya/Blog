import React from 'react'
import './settings.css'
import {Sidebar} from '../sidebar/Sidebar'
export const Settings = () => {
  return (
    <div className='stngs' >
      <div className="stngswrapper">
        <div className="settingstitle">
          <span className="settingUpdate">Update your account</span>
          <span className="settingDelete">Delete your account</span>
        </div>
        <form className='settingform'>
          <label >Profile Picture</label>
          <div className="settingsdp">
            <img src="sdtitle.jpg" alt="" />
            <label htmlFor="fileInput">
          <i class="settingsdpIcon fas fa-user"></i>
          </label>
          <input type="file" id='fileInput' style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='hit' />
          <label >Email</label>
          <input type="email" placeholder='hit@gmail.com' />
          <label >Password</label>
          <input type="password" />
          <button className='settingsbtn'>Update</button>

          
        </form>

        
      </div>
      <Sidebar/>

    </div>
  )
}
