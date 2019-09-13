import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';

class App extends React.Component {




  render() {

    return (
      <div className="App">
        <div className="title-container">
          <Title />
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    );
  }

}

export default App;
