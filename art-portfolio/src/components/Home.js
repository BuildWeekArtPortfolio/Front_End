import React from 'react';
import HomeCard from './HomeCard';

const Home = () => {

    const [photos, setPhotos] = useState([]);

useEffect( () => {
  axios.get('https://artportfoliobw.herokuapp.com/')
  .then(response => {
    console.log(response.data)
    return setPhotos(response.data);
  })
}, [])

  return (
    <div>
      {photos.map(() => <HomeCard photos={photos} />)}
    </div>
  );
};


export default Home;