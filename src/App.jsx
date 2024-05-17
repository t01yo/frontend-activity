import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Navbar from './components/Navbar';
import List from './components/List';
import Table from './components/Table';
import './App.css'; // Import CSS file

const App = () => {
    const handleClick = () => {

        
        
            if(confirm("Are you happy?")){
                alert("Seems legit");
            } else {
                alert("Die!!")
            }
    };

    return (
        <>
           <Header />
            <Navbar />
        <div className="container">
        <Button text="Click Me" onClick={handleClick} />

            <main>
                <List />
                <Table />
            </main>
        </div>
        <Footer />

        </>
    );
};

export default App;
