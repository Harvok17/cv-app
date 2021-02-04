import React, { useState, useEffect, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const Education = props => {
  const [values, hanldeChange] = useForm({
    school: 'School',
    course: 'Course',
    dateStart: '[Month] [Year]',
    dateEnd: '[Month] [Year]',
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

  const displaySchool = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="school"
          className="primary"
          placeholder="Enter School"
          value={values.school}
          onChange={hanldeChange}
        />{' '}
        •{' '}
        <input
          type="text"
          name="course"
          className="secondary"
          placeholder="Enter Course"
          value={values.course}
          onChange={hanldeChange}
        />
        <br />
        <input
          type="text"
          name="dateStart"
          className="date"
          placeholder="[Month] [Year]"
          value={values.dateStart}
          onChange={hanldeChange}
        />{' '}
        -{' '}
        <input
          type="text"
          name="dateEnd"
          className="date"
          placeholder="[Month] [Year]"
          value={values.dateEnd}
          onChange={hanldeChange}
        />
        <button ref={btnRef} className="btn btn--save" onClick={saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{values.school}</span> •{' '}
          <span className="secondary">{values.course}</span>
        </p>
        <p className="date">
          {values.dateStart} - {values.dateEnd}
        </p>

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

  return <div>{displaySchool()}</div>;
};

export default Education;
