import { makeStyles } from "@material-ui/core";

export default makeStyles({
  counter:{
    background:"#fef68a",
    borderRadius:'10px',
    minHeight:'200px',
    display:'flex',
    flexDirection:'column',
    textAlign:'center',      
  },

  counterNumber:{
    fontSize:'3rem'
  },
  counterActions:{
    display:'flex',
    justifyContent:'space-around',
    
  },
  button:{
    textTransform:'none'
  }
  
});