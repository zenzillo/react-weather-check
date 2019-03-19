var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var Forecast = require('./Forecast');

class App extends React.Component {
	render() {
		return (
		    <Router>
			    <div className='container'>
			    	<Switch>
				    	<Route exact path='/' component={Home} />
				    	<Route path='/forecast' component={Forecast} />
				    	<Route render={function () {
				    		return <p>Not Found</p>
				    	}} />
			    	</Switch>
			    </div>
		    </Router>
		)
	}
}

module.exports = App;