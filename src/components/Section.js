import React, { Component } from 'react';
import '../styles/Section.css';
import { FaTrashAlt } from 'react-icons/fa';
import uniqid from 'uniqid';

class Section extends Component {
  state = {
    items: [...this.props.items],
  };

  static defaultProps = {
    buttons: true,
  };

  deleteItem = e => {
    const targetId = e.target.closest('.section__item').id;

    this.setState({
      items: this.state.items.filter(item => item !== targetId),
    });
  };

  addItem = () => {
    this.setState({
      items: this.state.items.concat(uniqid()),
    });
  };

  displayItems() {
    const { buttons, previewMode, darkMode, children } = this.props;

    return this.state.items.map(item => {
      return (
        <div key={item} id={item} className="section__item">
          {buttons && !previewMode ? (
            <button
              className={`btn btn--delete ${darkMode ? 'dark' : ''}`}
              onClick={this.deleteItem}
            >
              <FaTrashAlt />
            </button>
          ) : null}
          {children}
        </div>
      );
    });
  }

  displayAddBtn() {
    const { buttons, previewMode } = this.props;
    return buttons && !previewMode ? (
      <button className="btn btn--add" onClick={this.addItem}>
        Add
      </button>
    ) : null;
  }

  render() {
    const { title } = this.props;
    return (
      <section className="section">
        <h3 className="section__title">{title}</h3>
        {this.displayItems()}
        {this.displayAddBtn()}
      </section>
    );
  }
}

export default Section;
