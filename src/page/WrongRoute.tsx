import React from 'react';
import { Link } from 'react-router-dom'

const WrongRoute = () => {
    return (
        <div className=' text-center my-48 text-3xl font-extrabold'>
            <h1 className=' text-center'>404</h1>
            <h2 className=' text-red-700 my-5'>Sorry Wrong Route</h2>
            <Link to="/" className=' text-center text-indigo-400'>Go Home</Link>
        </div>
    );
};

export default WrongRoute;