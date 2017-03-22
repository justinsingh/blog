import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    );
  }
}

export default Main;
