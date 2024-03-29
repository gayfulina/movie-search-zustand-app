import Movies from '@/components/Movies';
import MovieTypeSelect from '@/components/MovieTypeSelect';

export default function Home() {
  // ...
  return (
    <div>
      <h1 className="main-title">HolyJS Cinema — movies</h1>
      <div className="controls">
        <MovieTypeSelect />
      </div>
      <Movies />
      <button
        className="button-load"
        onClick={() => {}}
      >More movies</button>
    </div>
  )
}
