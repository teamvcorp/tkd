import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.css'


export default function Navbar() {
    return (

        <>
            <header>
                <div className='infoStrip'>
                <p className='infoStripInfo'>Contact us today (712)295-2103</p>
                    {/* <icon />
                    <icon /> */}
                </div>
                <div className='navBarContainer'>
                    <nav className='navBar'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/program">Program</Link>
                    <Link href="/events">Events/Schedule</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                </div>
                <Link href="/"><Image className='logo' src="/TKDLogo.png"
                    width={200}
                    height={200}
                    alt="Taekwondo logo" /></Link>
            </header>


        </>


    )
}