// import './App.css';
import Navigation from './routes/navigaition';
import {LayoutContainer} from './themes/layouts'

function App() {
  return (
    <div className="App">
      <LayoutContainer>
        <Navigation></Navigation>
      </LayoutContainer>
    </div>
  );
}

export default App;
