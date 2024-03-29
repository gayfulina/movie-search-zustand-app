import Select from 'react-select';
import { MovieType } from '@/types';
import {useMovieType} from "@/stores/movieType";

type MovieOption = {
    [RegKey in MovieType]: { value: MovieType; label: string };
};

const optionsMap: MovieOption = {
    movie: { value: 'movie', label: 'Movies' },
    cartoon: { value: 'cartoon', label: 'Cartoons' },
};
const options = Object.values(optionsMap);

const MovieTypeSelect = () => {
    const [movieType, setMovieType] = useMovieType(state => [
        state.movieType,
        state.setMovieType,
    ]);

    return (
        <Select
            instanceId={'react-select'}
            options={options}
            placeholder="Choose movie type"
            isClearable
            isSearchable={false}
            value={movieType ? optionsMap[movieType] : null}
            onChange={(selected) => setMovieType(selected ? selected.value : null)}
        />
    );
};

export default MovieTypeSelect;
