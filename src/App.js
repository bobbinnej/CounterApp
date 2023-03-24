import React from 'react';
import Counter from './components/CounterFolder/counter';
import Header from './components/HeaderFolder/header';
import useStyles from './style';

function App() {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <Header/>
      <Counter/>
     
    </div>
  );
}

export default App;
