import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import DefaultBrowserFromComponent from '../DefaultBrowserFromComponent/DefaultBrowserFromComponent';
import './CardComponent.css'


let globalstr : string; 

// type CardPros = {
//     title: string;
//     text: string;
//     item: string;
//     link: string;
//     link2: string;
// }

// const CardItem: React.FC<CardPros> = ({title, text, item, link, link2}) => {
//     return (
//         <div className='item'>
//             <Card>
//                 <Card.Body>
//                 <Card.Title>{title}</Card.Title>
//                 <Card.Text>{text}</Card.Text>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                 <ListGroup.Item>{item}</ListGroup.Item>
//                 </ListGroup>
//                 <Card.Body>
//                 <Card.Link href="#">{link}</Card.Link>
//                 <Card.Link href="/more">{link2}</Card.Link>
//                 </Card.Body>
//             </Card> 

//             <Outlet />
//         </div>
     
//     );
//   }

  const CardListComponent = () => {
    return(
        <>
        Example

        <Routes>
      <Route path="/" element={<ListOfCards />}>

      </Route>
    </Routes>
        </>
    );
}

function handler(){
    localStorage.setItem("App_localStorage1", JSON.stringify({ name: {globalstr}}));
  }

function ListOfCards() {
    const navigation = useNavigate();

    let str = "BMW";

  
    return(
        <div>
            <li><Link to="/">Go Home</Link></li>

            <div className='item'>
                <div id="bmw-f">
                   <Card>
                <Card.Body>
                        <Card.Title>BMW</Card.Title>
                        <Card.Text>2022</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>brand new</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button id="bmw-car" variant="primary" style={{margin: '0px 30px 0px 0px'}} onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                            //let el = document.getElementById("bmw-car");
                            globalstr = "BMW"
                            handler()
                        }}>Add</Button>
                        <Card.Link href="/moreBMW">more</Card.Link>
                        </Card.Body>
                </Card> 
                </div>
                
            </div>

            <div className='item'>
                <Card>
                

                <Card.Body>
                        <Card.Title>Audi</Card.Title>
                        <Card.Text>2022</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>brand new</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button variant="primary" style={{margin: '0px 30px 0px 0px'}} onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                            //let el = document.getElementById("bmw-car");
                            globalstr = "Audi"
                            handler()
                        }}>Add</Button>
                        <Card.Link href="/moreBMW">more</Card.Link>
                        </Card.Body>
                </Card>
            </div>

            <div className='item'>
                <Card>
                

                <Card.Body>
                        <Card.Title>Reno</Card.Title>
                        <Card.Text>2022</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>brand new</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button variant="primary" style={{margin: '0px 30px 0px 0px'}} onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
                            //let el = document.getElementById("bmw-car");
                            globalstr = "Reno"
                            handler()
                        }}>Add</Button>
                        <Card.Link href="/moreBMW">more</Card.Link>
                        </Card.Body>
                </Card>
            </div>
        </div>
        

        
    
    );
  }
// const MoreBMWComponent = () => {
//     return(
//         <>
//         <li><Link to="/">Go Home</Link></li>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </>
//     );
// }



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


// const MoreComponent1 = () => {
//     return (
//         <Card>
//       <li><Link to="/">Go Home</Link></li>

//       <Card.Body>
//             <Card.Title> AKAAKAKKAAKAK</Card.Title>
//             <Card.Text>2022</Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//             <ListGroup.Item>brand new</ListGroup.Item>
//             </ListGroup>
//             <Card.Body>
//             </Card.Body>
      
//       </Card>
//     );
// }
  export default CardListComponent;