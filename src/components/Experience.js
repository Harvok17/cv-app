import React, { Component } from 'react';
import { FaEdit } from 'react-icons/fa';

class Experience extends Component {
  state = {
    company: 'Company',
    position: 'Position',
    dateStart: '[Month] [Year]',
    dateEnd: '[Month] [Year]',
    description:
      'Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful. Maximum 10 lines?',
    editMode: false,
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveOrEdit = e => {
    e.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  };

  displayExperience() {
    return this.state.editMode ? (
      <form onSubmit={this.saveOrEdit}>
        <input
          type="text"
          name="company"
          className="primary"
          placeholder="Enter Company"
          value={this.state.company}
          onChange={this.changeHandler}
        />{' '}
        •{' '}
        <input
          type="text"
          name="position"
          className="secondary"
          placeholder="Enter Position"
          value={this.state.position}
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
        <br />
        <textarea
          name="description"
          rows="4"
          placeholder="Some stuff about the work that you’ve done here."
          value={this.state.description}
          onChange={this.changeHandler}
        ></textarea>
        <button className="btn btn--save" onClick={this.saveOrEdit}>
          Save
        </button>
      </form>
    ) : (
      <div>
        <p>
          <span className="primary">{this.state.company}</span> •{' '}
          <span className="secondary">{this.state.position}</span>
        </p>
        <p className="date">
          {this.state.dateStart} - {this.state.dateEnd}
        </p>
        <p className="description">{this.state.description}</p>
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
    return <div className="section__info">{this.displayExperience()}</div>;
  }
}

export default Experience;
