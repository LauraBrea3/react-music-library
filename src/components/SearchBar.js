import React, { useState } from 'react'

export default function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

  return (
    <form onSubmit={(e) => props.handleSearch(e,searchTerm)}>
        <input type="text" placeHolder="Enter a search term here" 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit" />
    </form>
  )
}
