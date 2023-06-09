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
                  <ul>
                    <li>Discipline</li>
                    <li>Confidence</li>
                    <li>Self-Control</li>
                    <li>Self-defense</li>
                    <li>Physcial-Fitness</li>
                  </ul>
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
                  <ul>
                    <li>Taekwondo</li>
                    <li>Homework time</li>
                    <li>Group Activities</li>
                    <li>STEM learning</li>
                    <li>
                      <Link href="/program/afterschool">Read more...</Link>
                    </li>
                  </ul>
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
                  <ul>
                    <li>Community Involvement</li>
                    <li>Taekwondo</li>
                    <li>Group Activities</li>
                    <li>Volunteering</li>
                  </ul>
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
