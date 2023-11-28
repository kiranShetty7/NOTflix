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
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <span style={{ color: "#fff", fontSize: '2rem' }}>{props.movieDetails.original_title}</span>
                <CloseRoundedIcon sx={{ color: "#fff", fontSize: '2rem', cursor: 'pointer' }} onClick={props.closeMovie} />
            </div>
            <div style={{ display: 'flex',height:'90%',overflow:'scroll'}}>
                <div style={{ width: '50%', padding: '2rem' }}>
                    <iframe style={{ height: '100%', width: '100%' }} src={`https://www.youtube.com/embed/${youtubeKey}`} frameborder="0" ></iframe>

                </div>
                <div style={{ width: '50%',height:'100%',overflowY:'scroll'}}>
                    <span style={{ color: "#fff", fontSize: '1.75rem' }}>Description :</span>
                    <p style={{ color: "#fff", fontSize: '1.3rem' }}>
                        {props.movieDetails.overview}
                    </p>
                    <p style={{ color: "#fff", fontSize: '1.75rem' }}> TMDB Rating : {props.movieDetails.vote_average}</p>
                    <p style={{ color: "#fff", fontSize: '1.75rem' }}>Cast :</p>
                    <div style={{ display: 'flex', gap: 20, overflow: 'auto' }}>
                        {
                            individualMovieDetails.map((castDetails) => (
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w300//${castDetails.profile_path}`} alt="" style={{ height: '16rem', width: '14rem' }} />
                                    <p style={{ color: "grey", textAlign: 'left', margin: 0 }}>Character : &nbsp;{castDetails.character}</p>
                                    <p style={{ color: "grey", textAlign: 'left', margin: 0 }}>Actor : &nbsp;{castDetails.name}</p>

                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMovie