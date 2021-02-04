import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
