import React from 'react'

const FilterButtons = ({categories, filterMovies}) => {
  return (
    <div className='filter-buttons'>
      {categories.map((category,index)=>(
        <button key={index} onClick={()=>filterMovies(category)}>{category}</button>
      ))}
    </div>
  )
}

export default FilterButtons