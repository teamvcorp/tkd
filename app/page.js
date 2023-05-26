import Image from 'next/image';
import './page_home.css';




export default function Home() {
  return (
   <>
   
   <div className='homeContainer' >
        <div className='spLayoutTop'>
          <div className='spLayoutTopLeft'>
            <h2>Taekwondo</h2>
            <p>Storm Lake, IA</p>
            <h5 className='fontRed'>Self-Control</h5>
            <h5 className='fontRed'>Self-Awareness</h5>
            <h5 className='fontRed'>Leadership</h5>
          </div>

          <div className='heroImg spLayoutTopMid'>
            <Image className='imgLG' src='/tkdGroup.png'height={450} width={600} alt='kids doing taekwondo' />
          </div>

          <div className='spLayoutTopRight'>
            <h1 className='homeHeroTxt'>Sign Up <br></br> Today!</h1>
            <button className='enrollHomeBtn'>Enroll Now</button>
            <p>Open Enrollment until August 1st</p>
          </div>

        </div>

        <div className='spLayoutBottom'>
          
            <div className='spLayoutBottomLeft background'>
             <div className='programBox'>  
              <h4 className='homeProgramTxt'>Kids Taekwondo Class</h4>
              <Image className='imgSm imgHomePro' src='/tkdGirl.png'height={450} width={450} alt='orange belt' />
            </div>
            </div>
            <div className='spLayoutBottomMid background'>
            <div className='programBox'>
              <h4 className='homeProgramTxt'>Afterschool Program</h4>
              <Image src='/afterschoolBoy.png'height={100} width={100} alt='kid with backpack' />
            </div>
            </div>  
          
            <div className='spLayoutBottomRight background'>
            <div className='programBox'>  
              <h4 className='homeProgramTxt'>TRIP Outreach</h4>
              <Image src='/happyKids.png'height={100} width={100} alt='kids jumping and happy' />
            </div>
          
            </div>
      </div>
      </div>
      </>
  )
}
