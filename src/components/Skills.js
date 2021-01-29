import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';

class Skills extends Component {
  state = {
    skills: 'HTML - CSS - JavaScript - Figma - ReactJS - Webpack',
    editMode: false,
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveOrEdit = e => {
    e.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  };

  displaySkills() {
    return this.state.editMode ? (
      <form onSubmit={this.saveOrEdit}>
        <textarea
          name="skills"
          rows="4"
          placeholder="Enter your skills here"
          className="primary skills-text"
          value={this.state.skills}
          onChange={this.changeHandler}
        ></textarea>
        <button className="btn btn--save" onClick={this.saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="primary">{this.state.skills}</p>
        {this.props.previewMode ? null : (
          <button
            className={`btn btn--edit ${this.props.darkMode ? 'dark' : ''}`}
            onClick={this.saveOrEdit}
          >
            <FaEdit />
          </button>
        )}
      </div>
    );
  }

  render() {
    return <div>{this.displaySkills()}</div>;
  }
}

export default Skills;
