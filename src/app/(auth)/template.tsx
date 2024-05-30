"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({ children } : { children : React.ReactNode }){
    const [name, setName] = useState("");
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            {navLinks.map((link)=> {
                const isActive = pathname === link.href;
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
                );
            })}
            {children}
        </div>
    )
}