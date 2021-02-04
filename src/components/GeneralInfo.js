import React, { useState, useEffect, useRef } from 'react';
import '../styles/GeneralInfo.css';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const GeneralInfo = props => {
  const [values, handleChange] = useForm({
    name: 'Your Name',
    introduction:
      'I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text.',
    link: 'your-porfolio.com',
    email: 'your@email.com',
    number: '080909999',
  });
  const [editMode, setEditMode] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displayInfo = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="name"
          className="header__name"
          placeholder="Enter name"
          value={values.name}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="introduction"
          rows="4"
          placeholder="Enter your introduction here..."
          className="header__introduction--text"
          value={values.introduction}
          onChange={handleChange}
        ></textarea>
        <div className="header__contact-details">
          <input
            type="text"
            name="link"
            placeholder="Enter link"
            value={values.link}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter number"
            value={values.number}
            onChange={handleChange}
          />
        </div>
        <button
          ref={btnRef}
          type="submit"
          onClick={saveOrEdit}
          className="btn btn--save"
        >
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="header__name">{values.name}</p>
        <p className="header__introduction">{values.introduction}</p>
        <div className="header__contact-details">
          <p>{values.link}</p>
          <p>{values.email}</p>
          <p>{values.number}</p>
        </div>

        {props.previewMode ? null : (
          <button
            className={`btn btn--edit ${props.darkMode ? 'dark' : ''}`}
            onClick={saveOrEdit}
          >
            <FaEdit />
          </button>
        )}
      </div>
    );
  };

  return <div className="header__general-info">{displayInfo()}</div>;
};

export default GeneralInfo;
