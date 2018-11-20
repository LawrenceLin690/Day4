import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize, Translate } from 'react-localize-redux';
import globalTranslations from '../translations/global.json';
import LanguageToggle from './LanguageToggle';

class Main extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Spanish', code: 'sp' },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup },
    });

    this.props.addTranslation(globalTranslations);
  }

  render() {
    return (
      <React.Fragment>
        <LanguageToggle />
        <div>
          <Translate id="greeting">Hello World</Translate>
        </div>
      </React.Fragment>
    );
  }
}

export default withLocalize(Main);
