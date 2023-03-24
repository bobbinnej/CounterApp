import React, {useState} from "react";
import useStyles from './style';
const Counter = () =>{
    const classes=useStyles();
    const [counter, setCounter] = useState(0);
    const handleIncrement = () =>{
        setCounter(counter+1);
    }
    const handleDecrement = () =>{
        setCounter(counter-1);
    }
    const handleReset = () =>{
        setCounter(0);
    }
    return(
        <div className={classes.container}>
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
            
        </div>
    )
}

export default Counter;