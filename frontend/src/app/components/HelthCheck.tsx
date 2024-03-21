"use client"
import React, { useEffect, useState } from 'react';

const HelthCheck: React.FC = () => {
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/v1/');
                const data = await response.json();
                setResult(JSON.stringify(data));
            } catch (error) {
                // setResult('Error: ' + error?.message);
                setResult('Error: ');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Health Check</h1>
            <p>{result}</p>
        </div>
    );
};

export default HelthCheck;