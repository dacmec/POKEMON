import { Home, Landing, Detail, Form, About } from './views'
import NavBar from './components/NavBar/NavBar';
import { Route, useLocation } from "react-router-dom"


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/about" && <NavBar />}
      

      <Route exact path="/">
        <Landing />

      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path="/detail/:id">
        <Detail />
      </Route>

      <Route path='/form'>
        <Form />
      </Route>


      <Route path='/about'>
        <About />
      </Route>







    </div>
  );
}

export default App;
