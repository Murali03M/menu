import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://contest.elecard.ru/frontend_data/catalog.json');
      
      const data = await response.json();
      setMenuItems(data);
      // console.log(data);
      setFilteredItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const filterItems = useCallback((category) => {
    if (category === 'all') {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
  }, [menuItems]);

  const formatTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };


  return (
    <div className="section">
      <div>
        <Categories filterItems={filterItems} />
      </div>
      <div className="section-center">
        {filteredItems.map((item) => {
          return (
            <div key={item.image} className="menu-item">
                 <Link to={`/images/${item.image}`}>
                <img src={`http://contest.elecard.ru/frontend_data/${item.image}`} className="photo" />
                <div className="item-info">
                  <h4 className='item-info-category'><label>Category:</label>{item.category}</h4>
                  <h4 className='item-info-filesize'><label>fileSize:</label>{item.filesize}</h4>
                  <h4 className='item-info-timestamp'>{formatTimestamp(item.timestamp)}</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
   
  );
}

export default Menu;
