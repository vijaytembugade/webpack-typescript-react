import Counter from './Components/Counter';
import './styles.css';
const App = () => {
  return (
    <h2>
      Environment: {process.env.environment}
      <Counter />
    </h2>
  );
};

export default App;
