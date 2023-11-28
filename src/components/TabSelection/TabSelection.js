import classes from './TabSelection.module.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import { useEffect, useState } from 'react';
import { getMovies } from '../../services/apiHandler';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import moment from 'moment';
import ViewMovie from '../ViewMovie/ViewMovie';


const TabSelection = (props) => {
  const [data, setData] = useState([])
  const [viewMovie,setViewMovie] = useState(false)
  const [movieDetails,setMovieDetails] = useState({})
  useEffect(() => {
    getMovies().then((response) => {
      console.log(response.data.results)
      setData(response?.data?.results)
    })
  }, [])
const closeMovie = ()=>{
  setViewMovie(false)
}

  return (
    <div>
  {viewMovie?<ViewMovie closeMovie={closeMovie} movieDetails={movieDetails}/>:null} 
      <div style={{ height: '70vh', overflowY: 'auto', padding: '2rem', display: 'flex',flexWrap:'wrap', gap: 30,justifyContent:'center' }}>
        {data.map((item) => (
          <>
             
          <div className={`${classes.glassCss} ${classes.cardCss}`}
           onClick={()=>{
            setMovieDetails(item)
            setViewMovie(true)}}>
            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} style={{ height: '30rem', width: '20rem' }} />
            <span style={{ textAlign: 'center', fontSize: '1.5rem', color: '#fff', marginTop: '1rem',minHeight:'4rem',maxWidth:'20rem' }}>{item.original_title}</span>
            <div style={{ color: "#FFF", display: 'flex', alignItems: 'center',flexDirection:'column',marginTop:'1rem' }}>
              <span >Release:&nbsp;{item.release_date}</span>
              <br/>
              <span style={{display:'flex',alignItems:'center',fontSize:'1rem'}}> <FavoriteRoundedIcon sx={{color:'red'}}/> &nbsp;{item.vote_average}</span>
            </div>

          </div>
          </>
        ))}


      </div>
      <div style={{ display: 'flex', color: "#fff", justifyContent: 'space-between', position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid red', paddingLeft: '5rem', paddingRight: '5rem', boxSizing: 'border-box', height: '5vh' }}>
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', }}><TrendingUpIcon sx={{ fontSize: '2rem', color: "red" }} /> &nbsp; Trending</span>
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>  <MovieCreationIcon sx={{ fontSize: '2rem', color: "red" }} />&nbsp; Movies</span>
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}> <TvIcon sx={{ fontSize: '2rem', color: "red" }} />&nbsp;TV series</span>
      </div>
    </div>
  )
}

export default TabSelection