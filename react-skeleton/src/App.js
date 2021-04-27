import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/component1">
            <Component1/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>	  
      </Router>
    </Container>
  );
}

function Login(props){
  return(<>Login</>);
}

function Component1(props){
  return(<>Component 1</>);
}

function HomePage(props){
  return(<>Home Page</>);
}

function NotFound(props){
  return(<>Not Found</>);
}

export default App;
