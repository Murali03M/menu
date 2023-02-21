import React from 'react';
import PropTypes from 'prop-types';

function ImageDetails({ item, onClose }) {
  const formatTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img
          className="modal-photo"
          src={`http://contest.elecard.ru/frontend_data/${item.image}`}
          alt={item.category}
        />
        <div className="modal-info">
          <h3>Category: {item.category}</h3>
          <p>File size: {item.filesize}</p>
          <p>Timestamp: {formatTimestamp(item.timestamp)}</p>
        </div>
      </div>
    </div>
  );
}

ImageDetails.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageDetails;
