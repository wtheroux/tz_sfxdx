import React, { Suspense, useState } from 'react';
import Loading from './components/loading/loading';

const MainPage = React.lazy(() => import ('./components/main/mainPage'));

function App() {

  const [isConnected, setIsConnected] = useState(false);  

  return (
    <>
    <Suspense fallback={
      <Loading />
    }>
        {
        <MainPage
          isConnected = {isConnected}
          setIsConnected = {setIsConnected}/>
        }
    </Suspense> 
    </>
  );
}

export default App;
