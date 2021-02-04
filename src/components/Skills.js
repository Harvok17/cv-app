import React, { useState, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';

const Skills = props => {
  const [skills, setSkills] = useState(
    'HTML - CSS - JavaScript - Figma - ReactJS - Webpack'
  );
  const [editMode, setEditMode] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const changeHandler = e => {
    setSkills(e.target.value);
  };

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displaySkills = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <textarea
          name="skills"
          rows="4"
          placeholder="Enter your skills here"
          className="primary skills-text"
          value={skills}
          onChange={changeHandler}
        ></textarea>
        <button ref={btnRef} className="btn btn--save" onClick={saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="primary">{skills}</p>
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

  return <div>{displaySkills()}</div>;
};

export default Skills;
