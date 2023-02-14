import { useState, Suspense, lazy } from 'react';
import './styles.css';
import Counter from './Components/Counter';
const RemoteApp = lazy(() => import('microapp1/App'));
const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <h2>
      Environment: {process.env.environment}
      <div>
        <button onClick={() => setShowCounter((prev) => !prev)}>
          {!showCounter ? 'Show' : 'Hide'} Counter With React Lazy
        </button>
      </div>
      {showCounter && (
        <Suspense fallback={<>Loading... </>}>
          <RemoteApp>
            <Counter />
          </RemoteApp>
        </Suspense>
      )}
    </h2>
  );
};

export default App;

/**
 * We can use this function to delay load the component just for development use and testing.
 */
// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }
