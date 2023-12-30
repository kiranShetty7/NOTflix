import classes from './Movies.module.css'
import { useEffect, useState } from 'react';
import { getMovies } from '../../services/apiHandler';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ViewMovie from '../../components/ViewMovie';

const Movies = () => {

    const [data, setData] = useState([])
    const [viewMovie, setViewMovie] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {
        getMovies().then((response) => {
            console.log(response.data.results)
            setData(response?.data?.results)
        })
    }, [])

    const closeMovie = () => {
        setViewMovie(false)
    }

    return (<>
        {viewMovie ? <ViewMovie closeMovie={closeMovie} movieDetails={movieDetails} /> : null}
        <div className={classes.container}>
            {data.map((item) => (
                <>
                    <div className={`${classes.glassCss} ${classes.cardCss}`}
                        onClick={() => {
                            setMovieDetails(item)
                            setViewMovie(true)
                        }}>
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} className={classes.image} />
                        <span className={classes.title}>{item.original_title}</span>
                        <div className={classes.dataContainer}>
                            <span >Release:&nbsp;{item.release_date}</span>
                            <br />
                            <span className={classes.heartButtonContainer}> <FavoriteRoundedIcon className={classes.heart} /> &nbsp;{item.vote_average}</span>
                        </div>

                    </div>
                </>
            ))}


        </div>
    </>)
}

export default Movies