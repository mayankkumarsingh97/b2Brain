import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import Contact from './components/contactus/Contact';
// import Body  from "./components/body/Body";
// import Myform02 from "./components/registration/Myform02";
// import { BrowserRouter } from "react-router-dom";
// import { Routes, Route} from "react-router-dom";
// import PageNotF from './materialUI/components/pagenotfound/PageNotF';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>

  // <BrowserRouter>
  

  //       <Routes>
  //         <Route path='/' element={<App/>}> 
  //          <Route path='/Contact' element={<Contact/>} />
  //          <Route path='/registration' element={<Myform02/>} />
  //          <Route index  element={<Body/>} />
  //          <Route path='*' element={<PageNotF/>}/>
  //         </Route>
            
  //       </Routes>
  //     </BrowserRouter>
       
);
























// ReactDOM.render(<Student name='mayank' roll={1+3} />,document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
    
      
//     <BrowserRouter>
//         <Routes>

//           <Route path='/' element={<Mybody/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/Contact' element={<Contact/>} />
//           <Route path='/Faq' element={<Faq/>} />

//         </Routes>

//       </BrowserRouter>
    
    

  
// );



