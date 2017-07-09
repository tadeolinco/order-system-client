import React, { Component } from 'react';
import MenuPanel from './MenuPanel/MenuPanel';

class MenuLayout extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <MenuPanel />
            </div>
            <div className="column is-three-quarters">hello</div>
          </div>
        </div>
      </section>
    );
  }
}

export default MenuLayout;
