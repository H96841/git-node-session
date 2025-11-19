// import React from 'react'; 
// import { Button } from 'primereact/button';
import './app.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Features/auth/login";
import Register from "./Features/auth/Register";
// import ColorPicker from './ColorPicker';
import Navigate from "./Components/Navigate"
import Blog from './Features/Products/blog';
import Products from './Components/Products';
import Layout from './Components/Layout';
import Button from './Components/butoon';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register ></Register>}></Route>
                    <Route path='/blog' element={<Blog></Blog>}></Route>
                    <Route path='/galery' element={<Products/>}></Route>
                </Route>
                </Routes>
            </Router>
        </div>
        // <>
        // <a>fcghj</a>
        // </>
    )
}
export default App
