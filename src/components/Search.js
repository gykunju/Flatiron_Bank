import React from 'react'
import '../css/Search.css'

function Search({Search, handleSearch}) {
  return (
    <div id="search">
        <input 
        className='search-input'
        type='text'
        placeholder='Search...'
        value={Search}
        id='search'
        onChange={handleSearch}
        />
        <button className=''>Search</button>
    </div>
  )
}

export default Search