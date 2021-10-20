import styled from "styled-components";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from "./pages/Login/Login";
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
        </Switch>
      </Router>
    </MainBox>
  );
}

const MainBox = styled.div`
`

export default App;
