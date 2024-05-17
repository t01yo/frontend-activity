import React from 'react';
import './List.css';

const List = () => {
    const subjects = ["Math", "Science", "History", "Sex Ed", "Art", "Music", "PE", "Literature", "Biology", "AP"];

    return (
        <ul >
            {subjects.map((subject, index) => (
                <li key={index} className="card">
                    <h3>{subject}</h3>
                    <p>Description of {subject}</p>
                </li>
            ))}
        </ul>
    );
};

export default List;
