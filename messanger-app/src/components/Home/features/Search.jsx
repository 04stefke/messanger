import { UserOutlined } from '@ant-design/icons'
import React from 'react'

const Search = () => {
  return (
    <div className='searchContainer'>
      <div className="searchForm">
        <input type="text" placeholder="Search chat's"/>
      </div>
      <div className='userChat'>
        <UserOutlined/>
        <div className="userChatInfo">
          <span>Stefan</span>
        </div>
      </div>
    </div>
  )
}

export default Search
