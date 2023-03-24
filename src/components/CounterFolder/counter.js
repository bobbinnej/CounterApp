import React, {useState} from "react";
import useStyles from './style';
import { Button } from "@material-ui/core";

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
        <div className={classes.counter}>
            <div >
               <h2 className={classes.counterNumber}>{counter}</h2> 
            </div>
            <div className={classes.counterActions}>
               <Button className={classes.button} variant="contained" color="primary" size="large"  onClick={handleIncrement}>Increase</Button>
               <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={handleDecrement}>Decrease</Button>
               <Button className={classes.button} variant="contained" color="error" size="large" onClick={handleReset}>Reset</Button>
            </div>
           
            
            
        </div>
    )
}

export default Counter;