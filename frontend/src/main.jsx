import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Contact from './components/Contact/Contact.jsx';
import PatientDetails from './components/Form/Step1/PatientDetails.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='patientdetails' element={<PatientDetails />} />
            {/* <Route
                loader={githubInfoLoader}
                path='github'
                element={<Github />}
            /> */}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
