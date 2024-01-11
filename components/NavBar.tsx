import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">Mahesh Admane</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="/#about">About Me.</Link>
                </li>
                <li>
                    <Link href="/#about">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}