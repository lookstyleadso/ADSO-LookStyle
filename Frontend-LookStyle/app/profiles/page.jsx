'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';


export default function PageUserProfile() {
    const [userInfo, setUserInfo] = useState(null);
    const id = Cookies.get('id');
    
    console.log(id)
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`https://adso-lookstyle.onrender.com/api/v1/users/${id}`);
                setUserInfo(response.data.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        if (id) {
            fetchUserInfo();
        }
    }, [id]);
    console.log(userInfo)
    return (
        <div>
            
            {userInfo ? (
                <>
                    <h2>User Profile</h2>
                    <p>ID: {userInfo.id}</p>
                    <p>Nombre: {userInfo.name}</p>
                    <p>Apellido: {userInfo.last_name}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Numero de Telefono: {userInfo.phone_number}</p>
                    {/* ... otras propiedades del usuario */}
                </>
            ) : (
                <p>Loading user information...</p>
            )}
        </div>
    );
}
