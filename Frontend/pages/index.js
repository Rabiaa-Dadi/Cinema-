import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import FilmComponent from '@/components/Liste/FilmComponent'


export default function Home({ films }) {
  return (
    <div>
      <div className="film-container px-7 py-5">
        {films.map((film) => (
          <FilmComponent key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
 
  try{
     const response = await axios.get('http://127.0.0.1:8000/api/films/')
     console.log(response.data)
     return { 
      props: {films: response.data} ,
       }

  } catch(error)
  {
    console.log(error)

  }
}