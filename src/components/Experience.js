import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Experience = props => {
  const [company, setCompany] = useState('Company');
  const [position, setPosition] = useState('Position');
  const [dateStart, setDateStart] = useState('[Month] [Year]');
  const [dateEnd, setDateEnd] = useState('[Month] [Year]');
  const [description, setDescription] = useState(
    'Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful. Maximum 10 lines?'
  );
  const [editMode, setEditMode] = useState(false);

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displayExperience = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="company"
          className="primary"
          placeholder="Enter Company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />{' '}
        •{' '}
        <input
          type="text"
          name="position"
          className="secondary"
          placeholder="Enter Position"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="dateStart"
          className="date"
          placeholder="[Month] [Year]"
          value={dateStart}
          onChange={e => setDateStart(e.target.value)}
        />{' '}
        -{' '}
        <input
          type="text"
          name="dateEnd"
          className="date"
          placeholder="[Month] [Year]"
          value={dateEnd}
          onChange={e => setDateEnd(e.target.value)}
        />
        <br />
        <textarea
          name="description"
          rows="4"
          placeholder="Some stuff about the work that you’ve done here."
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <button className="btn btn--save" onClick={saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{company}</span> •{' '}
          <span className="secondary">{position}</span>
        </p>
        <p className="date">
          {dateStart} - {dateEnd}
        </p>
        <p className="description">{description}</p>
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

  return <div className="section__info">{displayExperience()}</div>;
};

export default Experience;
