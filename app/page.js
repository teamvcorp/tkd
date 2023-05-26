import Image from 'next/image'
import styles from './page.module.css'



export default function Home() {
  return (
   <>
        <div>
          <div>
            <h1>Taekwondo</h1>
            <p>Storm Lake, IA</p>
            <p>Self-Control</p>
            <p>Self-Awareness</p>
            <p>Leadership</p>
          </div>
          <div>
            <Image src='/'height={200} width={200} alt='kids doing taekwondo' />
          </div>
          <div>
            <h1>Sign Up Today</h1>
            <button>Enroll Now</button>
            <p>Open Enrollment until August 1st</p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h2>Kids Taekwondo Class</h2>
              <Image src='/'height={100} width={100} alt='orange belt' />
            </div>
          </div>
          <div>
            <div>
              <h2>Afterschool Program</h2>
              <Image src='/'height={100} width={100} alt='kid with backpack' />
            </div>
          </div>
          <div>
            <div>
              <h2>TRIP Outreach</h2>
              <Image src='/'height={100} width={100} alt='kids jumping and happy' />
            </div>
          </div>

      </div>
      </>
  )
}
