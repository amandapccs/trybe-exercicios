import './App.css';
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
