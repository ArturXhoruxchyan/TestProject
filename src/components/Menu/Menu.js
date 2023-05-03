import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    const menuName=[
        {
            id:1,
            to:"/Home",
            name:"Home"
        },
        {
            id:2,
            to:"/AboutPage",
            name:"About"
        },
        {
            id:3,
            to:"/Contact",
            name:"Contact"
        },
        {
            id:4,
            to:"/JokePage",
            name:"Joke"
        },
        {
            id:5,
            to:"/RegistrePage",
            name:"Registre"
        }
    ]
    return (
        <div id="nav">
            <ul id="ul">
                {menuName.map((e)=>(
    <NavLink key={e.id} to={e.to} className={({isActive})=>(isActive?"li1":"li2")}><li>{e.name}</li></NavLink>
))}
                {/* <NavLink to='/Home' className={({ isActive }) => (isActive ? "li1" : "li2")}><li>Home</li></NavLink>
                <NavLink to='/AboutPage' className={({ isActive }) => (isActive ? "li1" : "li2")}><li>About</li></NavLink>
                <NavLink to='/ContactPage' className={({ isActive }) => (isActive ? "li1" : "li2")}><li>Contact</li></NavLink>
                <NavLink to='/JokePage' className={({ isActive }) => (isActive ? "li1" : "li2")}><li>Joke</li></NavLink>
                <NavLink to='/RegistrePage' className={({ isActive }) => (isActive ? "li1" : "li2")}><li>Register</li></NavLink> */}
            </ul>
        </div>
    )
}