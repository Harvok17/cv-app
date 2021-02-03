import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Education = props => {
  const [form, setState] = useState({
    school: 'School',
    course: 'Course',
    dateStart: '[Month] [Year]',
    dateEnd: '[Month] [Year]',
  });

  const [editMode, setEditMode] = useState(false);

  const changeHandler = e => {
    setState({ ...form, [e.target.name]: e.target.value });
  };

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
          value={form.school}
          onChange={changeHandler}
        />{' '}
        •{' '}
        <input
          type="text"
          name="course"
          className="secondary"
          placeholder="Enter Course"
          value={form.course}
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="dateStart"
          className="date"
          placeholder="[Month] [Year]"
          value={form.dateStart}
          onChange={changeHandler}
        />{' '}
        -{' '}
        <input
          type="text"
          name="dateEnd"
          className="date"
          placeholder="[Month] [Year]"
          value={form.dateEnd}
          onChange={changeHandler}
        />
        <button className="btn btn--save" onClick={saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{form.school}</span> •{' '}
          <span className="secondary">{form.course}</span>
        </p>
        <p className="date">
          {form.dateStart} - {form.dateEnd}
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
