import React from 'react'
import {FileAddOutlined} from '@ant-design/icons'
const Input = () => {
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Type something...'/>
      <div className="inputInfo">
        <div>
        <input type="file" id='firstFile' />
        <label htmlFor="firstFile"><FileAddOutlined /></label>
      </div>

      <div>
      <input type="file" id='secondFile'/>
      <label htmlFor="secondFile"><FileAddOutlined /></label>
      </div>


      
      <button className="btn">Send</button>
      </div>
      
    </div>
  )
}

export default Input
