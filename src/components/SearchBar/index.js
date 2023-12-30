import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import classes from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <FormControl className={classes.container} variant="outlined">

            <OutlinedInput
                placeholder='Search'
                className={classes.textField}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <SearchIcon className={classes.icon} />
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    )
}

export default SearchBar