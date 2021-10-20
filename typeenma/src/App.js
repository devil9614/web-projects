import styled from "styled-components";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <MainBox>
      <Router>
        <Switch>
          <Route path = "/" exact>
            <Home/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path ="/register">
              <Register/>
          </Route>
        </Switch>
      </Router>
    </MainBox>
  );
}

const MainBox = styled.div`
`

export default App;
