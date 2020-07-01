import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp />
    <GlobalStyles />
  </>
);

export default App;
