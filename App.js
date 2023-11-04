import React, { useState } from 'react';
import Movie from "./components/Movie";
import { dummy } from './movieDummy.js';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseLeave = () => {
    setSelectedMovie(null);
  }

  return (
    <div>
      <div 
      className="app-container"
      onMouseLeave={handleMouseLeave}
      >
        {
          dummy.results.map((item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
