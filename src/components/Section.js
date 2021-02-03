import React, { useState, useEffect } from 'react';
import '../styles/Section.css';
import { FaTrashAlt } from 'react-icons/fa';
import uniqid from 'uniqid';

const Section = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    for (let i = 0; i < props.items; i++) {
      addItem();
    }
  }, [props.items]);

  const deleteItem = e => {
    const targetId = e.target.closest('.section__item').id;

    setItems(items.filter(item => item !== targetId));
  };

  const addItem = () => {
    setItems(prevItems => prevItems.concat(uniqid()));
  };

  const displayItems = () => {
    const { buttons, previewMode, darkMode, children } = props;

    return items.map(item => {
      return (
        <div key={item} id={item} className="section__item">
          {buttons && !previewMode ? (
            <button
              className={`btn btn--delete ${darkMode ? 'dark' : ''}`}
              onClick={deleteItem}
            >
              <FaTrashAlt />
            </button>
          ) : null}
          {children}
        </div>
      );
    });
  };

  const displayAddBtn = () => {
    const { buttons, previewMode } = props;
    return buttons && !previewMode ? (
      <button className="btn btn--add" onClick={addItem}>
        Add
      </button>
    ) : null;
  };

  const { title } = props;
  return (
    <section className="section">
      <h3 className="section__title">{title}</h3>
      {displayItems()}
      {displayAddBtn()}
    </section>
  );
};

export default Section;

Section.defaultProps = {
  buttons: true,
};
