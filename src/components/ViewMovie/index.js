import classes from './ViewMovie.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { getMovieDetailsById, getYoutubeVideoKey } from '../../services/apiHandler';
import { useEffect, useState } from 'react';

const ViewMovie = (props) => {

    const [individualMovieDetails, setIndividualMovieDetails] = useState([])
    const [youtubeKey, setYoutubeKey] = useState('')

    useEffect(() => {
        getMovieDetailsById(props.movieDetails.id).then((response) => {
            setIndividualMovieDetails(response?.data?.cast?.slice(0, 20))
        })

        getYoutubeVideoKey(props.movieDetails.id).then((response) => {
            console.log(response?.data?.results)
            const trailerIndex = response?.data?.results?.length - 1
            setYoutubeKey(response?.data?.results[trailerIndex]?.key)
        })


    }, [])

    return (
        <div className={`${classes.viewMovieContainer} ${classes.glassCss}`} >
            <div className={classes.closeContainer}>
                <span className={classes.movieTitle}>{props.movieDetails.original_title}</span>
                <CloseRoundedIcon onClick={props.closeMovie} className={classes.closeIcon} />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.trialerScreen}>
                    <iframe className={classes.iframe} src={`https://www.youtube.com/embed/${youtubeKey}`} frameborder="0" ></iframe>

                </div>
                <div className={classes.infoContainer}>
                    <span className={classes.description}>Description :</span>
                    <p className={classes.overView}>
                        {props.movieDetails.overview}
                    </p>
                    <p className={classes.rating}> TMDB Rating : {props.movieDetails.vote_average}</p>
                    <p className={classes.cast}>Cast :</p>
                    <div className={classes.imageContainer}>
                        {
                            individualMovieDetails.map((castDetails) => (
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w300//${castDetails.profile_path}`} alt="" className={classes.image} />
                                    <p style={{ color: "grey", textAlign: 'center', margin: 0 }}>{castDetails.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewMovie