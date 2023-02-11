import { useState, Suspense, lazy } from 'react';
import './styles.css';

const Counter = lazy(() => delayForDemo(import('./Components/Counter')));

const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <h2>
      Environment: {process.env.environment}
      <button onClick={() => setShowCounter(true)}>Show Counter</button>
      {showCounter && (
        <Suspense fallback={<>Loading... </>}>
          <Counter />
        </Suspense>
      )}
    </h2>
  );
};

export default App;

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
