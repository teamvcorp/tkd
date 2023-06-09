import "../program.css";
import Link from 'next/link';


export default function Camps() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programCampImg programImgLeft"
            src="/superKids.png"
            height={600}
            width={800}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">Camps/Clinics</h5>
            <p className="programsP">
              This is the best place to go when school is closed and we accept
              drop-ins! Our school offers camps throughout the school year and
              during the summer that are filled with fun and excitement. We play
              games, learn life lessons, go on field trips and participate in
              group activities. Each camp has a different theme to keep the kids
              excited. During the summer we offer clinics and camps. Clinics
              focus on fine-tuning their taekwondo lessons and applying these
              lessons at home and at school.
            </p>
            <Link href="/enroll">
              <button className="btn programsBtn programsBtnRight">
                Sign up Now
              </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programFooterOrange">
          <p className="programsFooterP ">Day Camp</p>
          <p className="programsFooterP ">Summer Camp</p>
          <p className="programsFooterP ">Fun Activities</p>
          <p className="programsFooterP ">Field Trips</p>
          <p className="programsFooterP ">Games and Movies</p>
        </div>
      </div>
    </>
  );
}
