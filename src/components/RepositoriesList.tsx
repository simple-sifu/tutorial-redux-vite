import {useState} from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      <form>
        <input />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
