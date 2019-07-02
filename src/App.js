import React from 'react';
import './App.css';
import About from './components/About';

class App extends React.Component {
  render () {
    return (
      <div>

        {/* The rendering of the About Component */}
        <About>
          {About}
        </About>

      </div>
    )
  };
}

export default App;