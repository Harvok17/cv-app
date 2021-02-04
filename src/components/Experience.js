import React, { useState, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const Experience = props => {
  const [values, handleChange] = useForm({
    company: 'Company',
    position: 'Position',
    dateStart: '[Month] [Year]',
    dateEnd: '[Month] [Year]',
    description:
      'Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful. Maximum 10 lines?',
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

  const displayExperience = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="company"
          className="primary"
          placeholder="Enter Company"
          value={values.company}
          onChange={handleChange}
        />{' '}
        •{' '}
        <input
          type="text"
          name="position"
          className="secondary"
          placeholder="Enter Position"
          value={values.position}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="dateStart"
          className="date"
          placeholder="[Month] [Year]"
          value={values.dateStart}
          onChange={handleChange}
        />{' '}
        -{' '}
        <input
          type="text"
          name="dateEnd"
          className="date"
          placeholder="[Month] [Year]"
          value={values.dateEnd}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          rows="4"
          placeholder="Some stuff about the work that you’ve done here."
          value={values.description}
          onChange={handleChange}
        ></textarea>
        <button ref={btnRef} className="btn btn--save" onClick={saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{values.company}</span> •{' '}
          <span className="secondary">{values.position}</span>
        </p>
        <p className="date">
          {values.dateStart} - {values.dateEnd}
        </p>
        <p className="description">{values.description}</p>
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
