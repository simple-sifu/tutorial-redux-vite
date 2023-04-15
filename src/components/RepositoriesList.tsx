import {useState} from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const {data, error, loading} = useTypedSelector((state:any) => state.repositories);
  console.log(data)


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;


// import {useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';


// const RepositoriesList: React.FC = () => {
//   const [term, setTerm] = useState('');
//   const dispatch = useDispatch();


//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     dispatch(actionCreators.searchRepositories(term) as any);
//   };
