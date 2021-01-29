import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';

class Education extends Component {
  state = {
    school: 'School',
    course: 'Course',
    dateStart: '[Month] [Year]',
    dateEnd: '[Month] [Year]',
    editMode: false,
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveOrEdit = e => {
    e.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  };

  displaySchool() {
    return this.state.editMode ? (
      <form onSubmit={this.saveOrEdit}>
        <input
          type="text"
          name="school"
          className="primary"
          placeholder="Enter School"
          value={this.state.school}
          onChange={this.changeHandler}
        />{' '}
        •{' '}
        <input
          type="text"
          name="course"
          className="secondary"
          placeholder="Enter Course"
          value={this.state.course}
          onChange={this.changeHandler}
        />
        <br />
        <input
          type="text"
          name="dateStart"
          className="date"
          placeholder="[Month] [Year]"
          value={this.state.dateStart}
          onChange={this.changeHandler}
        />{' '}
        -{' '}
        <input
          type="text"
          name="dateEnd"
          className="date"
          placeholder="[Month] [Year]"
          value={this.state.dateEnd}
          onChange={this.changeHandler}
        />
        <button className="btn btn--save" onClick={this.saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{this.state.school}</span> •{' '}
          <span className="secondary">{this.state.course}</span>
        </p>
        <p className="date">
          {this.state.dateStart} - {this.state.dateEnd}
        </p>

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
    return <div>{this.displaySchool()}</div>;
  }
}

export default Education;
