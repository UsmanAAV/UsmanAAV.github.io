import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header.jsx';
import Home from './components/home.jsx';
import Activity from './components/activity.jsx';
import Contacts from './components/contacts.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container bg-light">
          <header>
            <Header />
          </header>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/activity/" exact component={Activity} />
            <Route path="/contacts/" exact component={Contacts} />
            <Route component={() => <div className="dark">{'Sorry, this page not found'}</div>} />
          </main>
          <footer className="page-footer font-small bg-dark">
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
