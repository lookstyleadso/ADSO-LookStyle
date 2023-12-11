"use client"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Appointment() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://adso-lookstyle.onrender.com/api/v1/barbershops/14');
                console.log(response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <p>{data.barbershop_name}</p>
                    <p>{data.charge_name}</p>
                    <p>{data.email}</p>
                    {/* Renderiza las demás propiedades de los datos aquí */}
                </div>
            ) : <p>Loading...</p>}
        </div>
    );
}