import React from 'react';
import Header from './Header';
import Test from './Test';
import Footer from './Footer';

class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          
          <main role="main">
            <Test />
          </main>
      
          <Footer />
        </div>
      );
    }
  }

  export default App;
