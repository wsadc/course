import React, { Component } from 'react';
import ArticleList from './components/ArticleList';

export default class Page3 extends Component {
  static displayName = 'Page3';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page3-page">
        <ArticleList />
      </div>
    );
  }
}
