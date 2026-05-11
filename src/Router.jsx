import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import TechStack from './components/Tech-Stack/TechStack';
import JavaScript from './components/Tech-Stack/JavaScript';
import Angular from './components/Tech-Stack/Angular';
import ReactPage from './components/Tech-Stack/React';
import Vue from './components/Tech-Stack/Vue';
import CommingSoon from './components/Tech-Stack/CommingSoon';
import PageNotFound from './components/PageNotFound';

function Router() {
    return(
        <>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/tech-stack' element={<TechStack />}></Route>
            <Route path='/javascript' element={<JavaScript />}></Route>
            <Route path='/angular' element={<Angular />}></Route>
            <Route path='/react' element={<ReactPage />}></Route>
            <Route path='/vue' element={<Vue />}></Route>
            <Route path='/commingsoon' element={<CommingSoon />}></Route>
            <Route path='/page-not-found' element={<PageNotFound />}></Route>
         </Routes>
        </>
    )
}

export default Router;