import React, { useState, useEffect } from 'react';
import apiConfig from './apiKeys';
function WeatherFetch() {
    const Key = apiConfig.weatherFetchKey;
    const [ feelsLike, setFeelsLike ] = useState('');
    const [ mainTemp, setMainTemp ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ main, setMain ] = useState('');
    const [ iconID, setIconID ] = useState('');

    useEffect(() => {
    }, []);

    return (
        <>
        </>
    )
}
export default WeatherFetch;