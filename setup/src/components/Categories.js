import React from 'react';

const Categories = ({filterItems}) => {
 
  return (
    <div className="btn-container">
       <button className="filter-btn" onClick={()=>filterItems('all')}>All</button>
       <button className="filter-btn" onClick={()=>filterItems('animals')}>Animals</button>
       <button className="filter-btn" onClick={()=>filterItems('business')}>Business</button>
       <button className="filter-btn" onClick={()=>filterItems('food')}>Food</button>
       <button className="filter-btn" onClick={()=>filterItems('health')}>Health</button>
       <button className="filter-btn" onClick={()=>filterItems('places')}>Pleaces</button>
       <button className="filter-btn" onClick={()=>filterItems('science')}>Science</button>
       <button className="filter-btn" onClick={()=>filterItems('vehicle')}>Vehicle</button>
       <button className="filter-btn" onClick={()=>filterItems('winter')}>winter</button>
       <div>
    </div>
    </div>
  )
};

export default Categories;


