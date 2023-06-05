import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.css'
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
    return (

        <>
            <header>
                <div className='infoStrip'>
                <p className='infoStripInfo'>Contact us today <span>< FaPhone size={15} /></span> (712)295-2103</p>
                    
                </div>
                <div className='navBarContainer'>
                    <nav className='navBar'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/program">Programs</Link>
                    <Link href="/events">Events/Schedule</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                </div>
                <Link href="/"><Image className='logo' src="/TKDLogo.png"
                    width={175}
                    height={175}
                    alt="Taekwondo logo" /></Link>
            </header>


        </>


    )
}