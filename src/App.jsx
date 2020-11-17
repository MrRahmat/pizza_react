import React from 'react';
import axios from 'axios';
import './scss/app.scss';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom';

function App() {
const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data})=> {
      setPizzas(data.pizzas);
    });

    /*
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas);
    });
    */
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home items={pizzas} />}/>
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
