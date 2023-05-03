import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
}
from "react-router-dom"
import Menu from "./components/Menu/Menu";
import Homepage from "./pages/hompage/hompage";
import AboutPage from "./pages/aboutpage/aboutpage";
import JokePage from "./pages/jokepage/jokepage";
import Register from "./pages/registerpage/registrepage";
import Contact from "./pages/contactpage/contactpage";


export default function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route exact path='/Home' element={<Homepage />} />
                <Route exact path='/AboutPage' element={<AboutPage />} />
                <Route exact path='/Contact' element={<Contact />} />
                <Route exact path='/jokepage' element={<JokePage />} />
                <Route exact path='/registrepage' element={<Register />} />
            </Routes>
        </Router>
    )
}