"use client";
import Image from "next/image";
import Link from "next/link";
import "./page_home.css";

export default function Home() {
  const handleClick = () => {};

  return (
    <>
      <div className="homeContainer">
        <div className="spLayoutTop">  
          <div className="spLayoutTopLeft">
            <h2>Taekwondo</h2>
            <p>Storm Lake, IA</p>  
            <h5 className="fontRed">Self-Control</h5>
            <h5 className="fontRed">Self-Awareness</h5>
            <h5 className="fontRed">Leadership</h5>
          </div>

          <div className="heroImg spLayoutTopMid">
            <Image
              className="imgLG"
              src="/tkdGroup.png"
              height={400}
              width={575}
              alt="kids doing taekwondo"
            />
          </div>

          <div className="spLayoutTopRight">
            <h1 className="homeHeroTxt">
              Sign Up <br></br> Today!
            </h1>
            <Link href="/enroll">
              <button className="btn">Enroll now</button>
            </Link>
            <p>Open Enrollment until August 1st</p>
          </div>
        </div>

        <div className="spLayoutBottom">
          <div className="spLayoutBottomLeft background">
            <div className="programBox">
            <div className="homeProgramContent">
              <h4 className="homeProgramH4">Kids Taekwondo Class</h4>
              <p className="fontBlack homeProgramP">
                Our poomsae,self-defense techniques and sparring may be rooted from a
                long line of masters. Our program however is not stuck in the
                past. OUr kids program deleiver a fun and engaging curruculuim
                while teaching to accept our current self and strive to improve
                future self. We use the highest standards of education to level
                the playing feild allowing diverse learner to exceed expectaions
                on there journey to become black belt practitioners.
              </p>
            </div>
          <div className="homeProgramImg"></div>
              <Image
                className=""
                src="/tkdGirl.png"
                height={200}
                width={200}
                alt="orange belt"
              />
              
            </div>
          </div>
          <div className="spLayoutBottomMid background">
            <div className="programBox">
              <div className="homeProgramContent">
              <h4 className="homeProgramTxt">Afterschool Program</h4>
              <p className="fontBlack homeProgramP">
                A safe space for kids to learn a range of skills from self
                managment to computer programing and of course Taekwondo.
                Academy afterschool program takes all the great qualities of an
                established Martial arts school and uses it to create a fun,
                safe, and puroposful place for your kids to thrive. The journey
                to self mastery starts can start here.
              </p>
              </div>
<div className="homeProgramImg"> 
              <Image
                className="homeAfterschoolBoy"
                src="/afterschoolBoy.png"
                height={600}
                width={600}
                alt="kid with backpack"
              />

</div>
            </div>
          </div>

          <div className="spLayoutBottomRight background">
            <div className="programBox">
              <div className="homeProgramContent"> 
              <h4 className="homeProgramTxt">TRIP Outreach</h4>
              <p className="fontBlack homeProgramP">
                TRIP Outreach uses community service projects to implement
                lessons of servent leadership, mastery of self, and power of
                inclusion. This great program runs upto 6 days per week and
                starts at $50 per year! Enroll now or come check us out.
              </p>
              </div>
              <div className="homeProgramImg">
              <Image
                className="imgSm imgHomePro3"
                src="/happyKids.png"
                height={200}
                width={250}
                alt="kids jumping and happy"
              />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
