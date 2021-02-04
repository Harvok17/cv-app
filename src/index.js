import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import Section from './components/Section';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const App = () => {
  const [darkMode, setDark] = useState(false);
  const [previewMode, setPreview] = useState(false);

  const enableDarkMode = () => {
    setDark(!darkMode);
  };

  const enablePreviewMode = () => {
    if (!document.querySelector('.btn--save')) {
      setPreview(!previewMode);
      return;
    }

    // document.querySelectorAll('.btn--save').forEach(btn => btn.click());

    setPreview(!previewMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <Header
        enableDarkMode={enableDarkMode}
        enablePreviewMode={enablePreviewMode}
      >
        <GeneralInfo previewMode={previewMode} darkMode={darkMode} />
      </Header>
      <Section
        items={3}
        title="Experience"
        previewMode={previewMode}
        darkMode={darkMode}
      >
        <Experience previewMode={previewMode} darkMode={darkMode} />
      </Section>
      <Section
        items={2}
        title="Education"
        previewMode={previewMode}
        darkMode={darkMode}
      >
        <Education previewMode={previewMode} darkMode={darkMode} />
      </Section>
      <Section
        items={1}
        title="Skills"
        previewMode={previewMode}
        darkMode={darkMode}
        buttons={false}
      >
        <Skills previewMode={previewMode} darkMode={darkMode} />
      </Section>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
