"use client";
import Image from "next/image";
import Link from "next/link";
// import "./page_home.css";

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
              className="imgLG tkdKidsHome"
              src="/tkdGroup.png"
              height={700}
              width={850}
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
              <div className="imgProgramBox imgTkd">
                <div className="homeProgramContent">
                  <h4 className="homeProgramH4">Taekwondo Classes</h4>
                  <p className="fontBlack homeProgramP">
                    <ul className="homeProgramList">
                      <li className="listItem">Discipline</li>
                      <li className="listItem">Confidence</li>
                      <li className="listItem">Self-Control</li>
                      <li className="listItem">Self-Defense</li>
                      <li className="listItem">Physcial-Fitness</li>
                      <li className="link">   <Link href="/program"><i>Learn More</i></Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="spLayoutBottomMid background">
            <div className="programBox">
              <div className="imgProgramBox imgAfterschool">
              <div className="homeProgramContent">
                <h4 className="homeProgramH4">Afterschool Program</h4>
                <p className="fontBlack homeProgramP">
                  <ul className="homeProgramList">
                    <li className="listItem">Taekwondo</li>
                    <li className="listItem">Homework Time</li>
                    <li className="listItem">Group Activities</li>
                    <li className="listItem">STEM Learning</li>
                    <li className="link">
                      <Link href="/program/afterschool"><i>Learn More</i></Link>
                    </li>
                  </ul>
                </p>
              </div>
              </div>
            </div>
          </div>

          <div className="spLayoutBottomRight background">
            <div className="programBox">
            <div className="imgProgramBox imgTRIP">
              <div className="homeProgramContent">
                <h4 className="homeProgramH4">TRIP Outreach</h4>
                <p className="fontBlack homeProgramP">
                  <ul className="homeProgramList">
                    <li className="listItem">Community Involvement</li>
                    <li className="listItem">Taekwondo</li>
                    <li className="listItem">Group Activities</li>
                    <li className="listItem">Volunteering</li>
                    <li className="link"> <Link href="/program/trip"><i>Learn More</i></Link></li>
                  </ul>
                </p>
              </div>

            </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
