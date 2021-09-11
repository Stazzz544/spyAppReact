import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
 } from "react-router-dom";
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';


function App() {
  return (
    <div className="global">

		 <Router>
			 <Header></Header>
			 <div className="content">
			 <Switch>
				
					<Route exact path="/" component={Main}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/create" component={Create}/>
					<Route exact path="/note/" component={Note}/>
					<Route exact path="/note/:noteURL" component={Note}/>

				 	<Route component={Error}/>
				
			 </Switch>
			 </div>
			 <Footer></Footer>
		 </Router>

    </div>
  );
}

export default App;
