import React from 'react'
import Api from './Api'
export default function service(){
    return(
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
                    <Api/>
                </div>
            </div>
        </div>
    )
}