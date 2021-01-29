import React, { Component } from 'react';
import '../styles/GeneralInfo.css';
import { FaEdit } from 'react-icons/fa';

class GeneralInfo extends Component {
  state = {
    name: 'Your Name',
    introduction:
      'I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text.',
    link: 'your-porfolio.com',
    email: 'your@email.com',
    number: '080909999',
    editMode: false,
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveOrEdit = e => {
    e.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  };

  displayInfo() {
    return this.state.editMode ? (
      <form onSubmit={this.saveOrEdit}>
        <input
          type="text"
          name="name"
          className="header__name"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <br />
        <textarea
          name="introduction"
          rows="4"
          placeholder="Enter your introduction here..."
          className="header__introduction--text"
          value={this.state.introduction}
          onChange={this.changeHandler}
        ></textarea>
        <div className="header__contact-details">
          <input
            type="text"
            name="link"
            placeholder="Enter link"
            value={this.state.link}
            onChange={this.changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter number"
            value={this.state.number}
            onChange={this.changeHandler}
          />
        </div>
        <button
          type="submit"
          onClick={this.saveOrEdit}
          className="btn btn--save"
        >
          Save
        </button>
      </form>
    ) : (
      <div>
        <p className="header__name">{this.state.name}</p>
        <p className="header__introduction">{this.state.introduction}</p>
        <div className="header__contact-details">
          <p>{this.state.link}</p>
          <p>{this.state.email}</p>
          <p>{this.state.number}</p>
        </div>

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
    return <div className="header__general-info">{this.displayInfo()}</div>;
  }
}

export default GeneralInfo;
