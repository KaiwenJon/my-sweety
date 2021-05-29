import '../App.css';
import Header from './Header'
import Sweety from './sweety'
import Calender from './Calender'
import TodoList from './TodoList'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    // bottom: '10%',
    // border:'1px solid black',
    height: '90vh',
    // backgroundColor: 'black',
  },
  paper: {
    height: '500px',
    // width: '100%',
    // backgroundColor: 'green',
    color: 'white',
    padding: theme.spacing(2)
  },
  grid: {
    // maxHeight: '50vh',
    // overflow: 'auto',
  }

}));

function App(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Header username={props.username}/>
        <Grid container item spacing={0} justify='space-around'>
          <Grid item xs={1}>
            {/* <Sweety/> */}
          </Grid>
          <TodoList/>
          <Grid item xs={7} className={classes.grid}>
            <Calender/>
            {/* <Paper variant="outlined" elevation={3} className={classes.paper}/> */}
          </Grid>  
        </Grid>
      </Grid>
    </div>
    
      // <Header/>
      // <Grid container className={classes.root} spacing={10} >
      //   <Grid item height='100%'>
      //     <Paper variant="outlined" className={classes.paper} elevation={8}/>
      //   </Grid>
      // </Grid>
  );
}

export default App;