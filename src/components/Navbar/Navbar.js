import classes from './Navbar.module.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchBar from '../SearchBar';

const Navbar = () => {

  return (
    <div className={classes.container}>
      <span className={classes.title}><LiveTvIcon className={classes.icon} />&nbsp; <span className={classes.text}>Notflix</span></span>
      <SearchBar />
    </div>
  )
}

export default Navbar