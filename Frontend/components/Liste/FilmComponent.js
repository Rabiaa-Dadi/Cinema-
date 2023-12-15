import React from 'react';

function FilmComponent({ film }) {
  console.log(film.picture)
  return (
    <div className="film-card ">
    <img src={film.picture} alt={film.titre} className="film-image" />
    <h4 className="film-title">{film.titre}</h4>
    <h6>
      sale: {film.sale}
    </h6>
    <h6>
      date: {film.date}
    </h6>
    <h6>
      heure: {film.time}
    </h6>
    {/* Ajoutez d'autres informations du film ici */}
  </div>
  );
}
export default FilmComponent