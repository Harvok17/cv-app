import React, { useState } from 'react';
import '../styles/GeneralInfo.css';
import { FaEdit } from 'react-icons/fa';

const GeneralInfo = props => {
  const [name, setName] = useState('Your Name');
  const [introduction, setIntro] = useState(
    'I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text.'
  );
  const [link, setLink] = useState('your-porfolio.com');
  const [email, setEmail] = useState('your@email.com');
  const [number, setNumber] = useState('080909999');
  const [editMode, setEditMode] = useState(false);

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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <textarea
          name="introduction"
          rows="4"
          placeholder="Enter your introduction here..."
          className="header__introduction--text"
          value={introduction}
          onChange={e => setIntro(e.target.value)}
        ></textarea>
        <div className="header__contact-details">
          <input
            type="text"
            name="link"
            placeholder="Enter link"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button type="submit" onClick={saveOrEdit} className="btn btn--save">
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="header__name">{name}</p>
        <p className="header__introduction">{introduction}</p>
        <div className="header__contact-details">
          <p>{link}</p>
          <p>{email}</p>
          <p>{number}</p>
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
