import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/Booklist";

function App() {
    return (
        <div>
            <Navbar />
            <BookList />
        </div>
    );
}

export default App;
