import { Suspense } from 'react';
import Provider from './appFolder/store';
import Router from './appFolder/router';
import Loading from './appFolder/components/Loading';


function App() {
  return (
    <div className="App">
      <Suspense fallback={()=><Loading loading={true} />}>
        <Provider>
          <Router />
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
