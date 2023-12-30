import { useState, useEffect } from 'react';
import classes from './TabSelection.module.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import Movies from '../../pages/Movies';
import TVSeries from '../../pages/TVSeries';
import Trending from '../../pages/Trending';

const TabSelection = (props) => {
  const [index, setIndex] = useState(1)

  const tabs = [
    {
      name: "Trending",
      component: <Trending />,
      icon: <TrendingUpIcon className={classes.icon} />
    }, {
      name: "Movies",
      component: <Movies />,
      icon: <MovieCreationIcon className={classes.icon} />
    }, {
      name: "Tv Series",
      component: <TVSeries />,
      icon: <TvIcon className={classes.icon} />
    }
  ]

  useEffect(() => {
    GetComponent()
  }, [index])

  const GetComponent = () => {
    const filteredData = tabs.filter((item, i) => i === index)
    return filteredData[0].component
  }

  return (
    <div>
      {<GetComponent />}
      <div className={classes.container}>
        <div className={`${classes.iconContainer}`}>
          {tabs.map((item, i) => (
            <span className={`${classes.label}  ${index == i && classes.selected}`} key={i} onClick={() => setIndex(i)}>{item.icon} &nbsp; {item.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TabSelection