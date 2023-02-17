import './App.css';
import BlogForm from './components/BlogForm';
import BlogPosts from './components/BlogPosts';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BlogPosts />
          </Route>
          <Route path="/create">
            <BlogForm />
          </Route>
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
