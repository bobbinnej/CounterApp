import React from "react";
import useStyles from './style';
const Header = () =>{
    const classes = useStyles();
    return(
        <div>
            <h2 className={classes.title}>Counter App</h2>
        </div>
    )
}

export default Header;