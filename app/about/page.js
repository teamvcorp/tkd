'use client';
import { useState } from "react";
import Image from "next/image";
import "./about.css";
import { AiFillStar } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";

export default function About() {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div className="aboutPage">
        <div className="aboutTop">
          <div className="aboutTopLeft">
            <div className="aboutTopLeftBox">
              <Image
                className="robertImg"
                src="/tkdImg2.png"
                height={250}
                width={200}
                alt=""
              />
              <div>
                <div className="aboutTopLeftBoxInnerBox">
                  <h4 className="fontRed">Master Robert Von Der Becke</h4>
                  <ul className="list">
                    <li>Master in Taekwondo</li>
                    <li>Masters is Psychology</li>
                    <li>Masters in Education*</li>
                    {/* <li
                      onMouseOver={handleMouseOver}
                      // onMouseOut={handleMouseOut}
                    >
                      <GrCircleInformation />
                    </li> */}
                  </ul>
                </div>
                  {isHovering && <div>
                    <p>Hello</p>
                    </div>}
              </div>
            </div>
          </div>
          <div className="aboutTopRight">
            <div className="aboutTopRightContent">
              <h5 className="underline">About the TKD Academy</h5>
              <p className="aboutText">
                The Academy succesfully blends Taekwondo, Behavior, and
                Conditioning into a comprehensive program that yeilds results in
                excess of expectations. Make no mistake about it however, the
                broad range of result is due to the narrow focus of training.
                Appling science to training we effectively train behaviors and
                muscle memories in such a way that leadership and mastery of
                self become evident in daily actions and choices. If you want
                achieve your full mental and physical potential The Academy is
                the school for you!
              </p>
              <button className="aboutEnrollBtn">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="aboutBottom">
          <h5 className="fontYellow testimonialTxt">Testimonials</h5>
          <div className="spLayoutBottomLeft background">
            <div className="programBox">
              <p className="aboutProgramTxt fontBlack">
                "Sir Robert is amazing with kids. My son has autism and trouble
                discerning right from wrong sometimes when he's being misled by
                other kids. Sir Robert helped him focus, build confidence, and
                stay amazingly positive. I can't say enough great things about
                him and his studio."
              </p>
              <span>
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
              </span>
            </div>
          </div>
          <div className="spLayoutBottomLeft background">
            <div className="programBox">
              <p className="aboutProgramTxt fontBlack">
                "Energy, focus, strength, confidence! My 9 year old has been
                training with Master Robert for a month now and she is hooked.
                This kid- who I normally have to push out the door to get
                anywhere on time- is literally pulling me out to get to training
                on time. The lessons are a great mix of physical fitness,
                technique building, lessons that apply both on and off the mat.
                And we’re making new friends- always a bonus!"
              </p>
              <span>
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
              </span>
            </div>
          </div>
          <div className="spLayoutBottomLeft background ">
            <div className="programBox">
              <p className="aboutProgramTxt fontBlack">
                "At first it was hard to accept that I could play a bigger part
                in my child's life, then I imagined. Sir Robert and his staff
                help families grow together and teach how my attitude effects my
                children more than my advise. If you can handle the truth this
                school will put you on a positive path for your entire life."
              </p>
              <span>
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
              </span>
            </div>
          </div>
          <div className="spLayoutBottomLeft background ">
            <div className="programBox">
              <p className="aboutProgramTxt fontBlack">
                "I enjoy and am enrolled in the cardio class. Instructor: Robert
                Von Der Becke, 4th degree black belt, has created an atmosphere
                where I am getting off my butt, working out and having a great
                time doing it. He changes the sessions every time so it is
                always something challenging. I appreciate his ability to adjust
                the sessions based on ability and injury level (I am getting up
                there and don't move like I used to) Make no mistake this is an
                intense workout and is what you make of it. I am grateful to
                find such a class and instructor so close to home!
              </p>
              <span>
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
                <AiFillStar color="#ffdd00" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
