import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/page.module.css'

export default function Navbar() {
    return (

        <>
            <header>
                <div><p>Contact us today (712)295-2103</p>
                    {/* <icon />
                    <icon /> */}
                </div>
                <div><nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/program">Program</Link>
                    <Link href="/events">Events/Schedule</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                </div>
                <Link href="/"><Image src="/TKDLogo.png"
                    width={200}
                    height={200}
                    alt="Taekwondo logo" /></Link>
            </header>


        </>


    )
}