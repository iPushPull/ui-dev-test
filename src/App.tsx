import { Link } from 'react-router-dom';
import './App.scss';
import { GridExample } from './components/GridExample/GridExample';

const App = () => {
  return (
    <>
      <h4>Example Grid</h4>
      <div className="note">
        Replace grid with implementation as per{' '}
        <Link to="https://github.com/iPushPull/ui-dev-test/blob/main/README.md">instructions</Link>
      </div>
      <GridExample />
    </>
  );
};

export default App;
