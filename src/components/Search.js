import React from 'react'

function Search({Search, handleSearch}) {
  return (
    <div>
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