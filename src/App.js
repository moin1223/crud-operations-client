import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';

function App() {
  return (
   <Router>
     <NavBar/>
     <Switch>
       <Route exact path ="/">
         <Home/>
       </Route>
       <Route path ="/add">
         <AddUser/>
       </Route>
       <Route path ="/all">
         <AllUsers/>
       </Route>
       <Route path ="/edit/:id">
     <EditUser/>
       </Route>
       

       <Route>
         <NotFound/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
