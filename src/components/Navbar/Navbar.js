import classes from './Navbar.module.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
const Navbar = () => {

    return(
        <div style={{display:'flex',width:'90%',margin:'auto',backgroundColor:'',padding:'1.5rem',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{color:"#fff",fontSize:'2rem',display:'flex',alignItems:'center'}}><LiveTvIcon sx={{color:'red',fontSize:'5rem'}}/>&nbsp; NOTflix</span>
            

            <FormControl sx={{ m: 1, width: '20rem',border:'1px solid white' }} variant="outlined">
          
          <OutlinedInput
          placeholder='Enter the movie name to search'
                sx={{color:"#fff"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                    <SearchIcon sx={{color:"#fff",fontSize:'2rem'}}/>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
           
            
        </div>
    )
}

export default Navbar