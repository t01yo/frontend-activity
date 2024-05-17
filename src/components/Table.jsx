import React from 'react';
import './Table.css'; // Import CSS file

const Table = () => {
    const data = [
        { lastName: "Obaña", firstName: "Alcel Marie", address: "Luna, La Union", age: 20 },
        { lastName: "Navarro", firstName: "Kylha Andrea", address: "Tagudin, Ilocos Sur", age: 22 },
        // Add 8 more entries...
        { lastName: "Pablo", firstName: "Jade", address: "Alilem, Ilocos Sur", age: 20 },
        { lastName: "Caponga", firstName: "Russel Gue", address: "Alilem, Ilocos Sur", age: 21 },
        { lastName: "Vega", firstName: "Cyanne Justin", address: "Tagudin, Ilocos Sur", age: 21 },
        { lastName: "Ramos", firstName: "Francis Xavier", address: "Bangar, La Union", age: 21 },
        { lastName: "Murao", firstName: "Mark Ghenly", address: "Tagudin, Ilocos Sur", age: 21 },
        { lastName: "Amigo", firstName: "Ronnie", address: "Luna, La Union", age: 21 },
        { lastName: "Fabro", firstName: "Jiovani", address: "Tagudin, Ilocos Sur", age: 20 },
        { lastName: "Balala", firstName: "Christian Angelo", address: "Tagudin, Ilocos Sur", age: 21 },
    ];

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Address</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.lastName}</td>
                        <td>{row.firstName}</td>
                        <td>{row.address}</td>
                        <td>{row.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
