import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Login from './components/login';
import TicketCreate from './components/ticket-create';
import TicketEdit from './components/ticket-edit';
import TicketView from './components/ticket-view';
import Tickets from './components/tickets';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar';
import "./components/app.css"
import Signup from './components/signup';


const App = () => {
  const router = createBrowserRouter([
    { path: "/", 
    element: <> <Navbar /> <Home /></>
  },
    { path: "/contact", 
   element :  <> <Navbar /> <Contact /></> },
    { path: "/about", 
     element : <><Navbar /> <About /></> },
    { path: "/ticketcreate", 
    element: <> <Navbar /> <TicketCreate /></> },
    { path: "/ticketedit", 
    element:<> <Navbar /> <TicketEdit /></> },
    { path: "/ticketview", 
    element: <> <Navbar /> <TicketView /></> },
    { path: "/tickets", 
    element: <> <Navbar /> <Tickets /></> },
    { path: "/login", 
    element: <> <Navbar /> <Login /></> } , 
    {
      path : "/signup" , 
      element : <><Navbar/> <Signup /> </>
    }
  ]);

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
    
  );
};

export default App
