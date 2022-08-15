import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import NoFormsComponent from './components/NoFormsComponent/NoFormsComponent';
import ReactBootstrapFormsComponent from './components/ReactBootstrapFormsComponent/ReactBootstrapFormsComponent';
import DefaultBrowserFromComponent from './components/DefaultBrowserFromComponent/DefaultBrowserFromComponent';
import { Button, Card } from 'react-bootstrap';
import Cards from "../src/components/CardComponent/CardComponent"
import CardListComponent from '../src/components/CardComponent/CardComponent';
import BasketComponent from './components/BasketComponent/BasketComponent';
import React, { useState } from 'react';
import logo from './logo.svg';
import { isTemplateSpan } from 'typescript';

type User = { name: string };




function App() {

  
 
  
  const [element, setElement] = useState([]);

  const handlerBasket = (item : never) => {
      element.push(item);
      console.log('working');
  }

  
  return (
    
    <div>
    
      <div className='flex'>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/basket">Basket</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
            
          
      </div>
      
  
      
  
    <Routes>
      <Route path="/" element={<CardsList />}></Route>

      <Route path="cards" element={<CardListComponent />}></Route>
      <Route path="react-bootstrap-forms" element={<ReactBootstrapFormsComponent />}></Route>
      <Route path="no-forms" element={<NoFormsComponent />}></Route>
      <Route path="*" element={<NoMatchComponent />} />
      <Route path="moreBMW" element={<MoreBMWComponent />} />
      <Route path="basket" element={<BasketComponent />} ></Route>
    </Routes>

  </div>
  );
}

function CardsList() {
  const navigation = useNavigate();

  return(
    <div>
        MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE MAIN PAGE 
    </div>
  );
}



const MoreBMWComponent = () => {
  return(
      <>
      <li><Link to="/">Go Home</Link></li>
      <Card>
    <Card.Body>
    <Card.Img variant="top" src={logo} style={{width: '400px'}}/>
      <Card.Title>BMW</Card.Title>
      <Card.Text>
        Full info Full infoFull info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info Full info 
      </Card.Text>
      <Button variant="primary">Add</Button>
    </Card.Body>
  </Card>
      </>
  );
}

const NoMatchComponent = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
