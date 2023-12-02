"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as HiIcons from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
function NavDashboard() {
    return (
        <div className="bg-darkcolor-dc h-48 w-screen">
            <nav>
                <ul>
                    <Link href={"/"}>Home</Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavDashboard;
