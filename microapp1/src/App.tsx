import React from 'react';

const App = (props) => {
  const { children } = props;
  return <div>
    <p>
      Module Federation : MicroApp 1
    </p>
    <p>
      Environment: {process.env.environment}
    </p>
    {children}
  </div>;
};

export default App;
