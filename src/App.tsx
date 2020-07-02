import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/GlobalStyles';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: '' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyles />
  </>
);

export default App;
