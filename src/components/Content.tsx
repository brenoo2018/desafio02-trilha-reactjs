import { MovieCard } from '../components/MovieCard';
import { MovieProps, GenreResponseProps } from '../App';
import { Header } from './Header';
interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}
export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <Header selectedGenre={props.selectedGenre} />

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
