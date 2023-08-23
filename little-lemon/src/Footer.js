import React from 'react';

function Footer() {
    return (
        <footer>
            <div>
                <p>Contact Us: LittleLemonUS@gmail.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;