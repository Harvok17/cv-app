import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';
import uniqid from 'uniqid';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Section from './components/Section';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  state = {
    darkMode: false,
    previewMode: false,
  };

  enableDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  enablePreviewMode = () => {
    if (!document.querySelector('.btn--save')) {
      this.setState({
        previewMode: !this.state.previewMode,
      });
      return;
    }

    document.querySelectorAll('.btn--save').forEach(btn => btn.click());

    this.setState({
      previewMode: !this.state.previewMode,
    });
  };

  render() {
    return (
      <div className={`container ${this.state.darkMode ? 'dark' : ''}`}>
        <Header
          enableDarkMode={this.enableDarkMode}
          enablePreviewMode={this.enablePreviewMode}
        >
          <GeneralInfo
            previewMode={this.state.previewMode}
            darkMode={this.state.darkMode}
          />
        </Header>
        <Section
          items={[uniqid(), uniqid(), uniqid()]}
          title="Experience"
          previewMode={this.state.previewMode}
          darkMode={this.state.darkMode}
        >
          <Experience
            previewMode={this.state.previewMode}
            darkMode={this.state.darkMode}
          />
        </Section>
        <Section
          items={[uniqid(), uniqid()]}
          title="Education"
          previewMode={this.state.previewMode}
          darkMode={this.state.darkMode}
        >
          <Education
            previewMode={this.state.previewMode}
            darkMode={this.state.darkMode}
          />
        </Section>
        <Section
          items={[uniqid()]}
          title="Skills"
          previewMode={this.state.previewMode}
          darkMode={this.state.darkMode}
          buttons={false}
        >
          <Skills
            previewMode={this.state.previewMode}
            darkMode={this.state.darkMode}
          />
        </Section>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
