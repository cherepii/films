import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [films, setFilms] = useState(null)

  const getFilms = async() => {
    const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top', {
      method: 'GET',
      headers: {
          'X-API-KEY': '051b0115-c788-493f-8f1e-bff66e70950d',
          'Content-Type': 'application/json',
      },
    })

    const films = await res.json()
    console.log(films)

    setFilms(films)
  }

  useEffect(() => {
    getFilms()
  }, [])
  
  return (
    <div className="App">
        <div className='wrapper'>
          <h1>Список фильмов взят из неофициальной базы данных KinoPoisk</h1>
        
          {films && !!films.films.length && films.films.map(item => (
            <div className='film__item' key={item.filmId}>
              <p>{item.nameRu} / {item.rating} / {item.year} года выпуска / продолжительностью {item.filmLength}</p>
              <img src={item.posterUrlPreview} alt="poster preview" />
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
