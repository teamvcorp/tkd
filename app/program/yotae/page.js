import "../program.css";
import Link from 'next/link';

export default function Yotae() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programCardioImg programImgLeft"
            src="/cardio.png"
            height={800}
            width={900}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">Yotae</h5>
            <p className="programsP">
              Born from the need to have an intense workout that starts at
              whatever level you are and grows with you. Yotae is all the
              benefits of taekwondo in and infomal and relaxed environment. Yoga
              stretches and techniques were brought in to replace traditional
              martial arts stretching. These two great programs blend together
              to make one extremely rewarding expereince that will leave you
              excited for your next session.
            </p>
            <Link href="/enroll">
              <button className="btn programsBtn programsBtnRight">
                Sign up Now
              </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programFooterBlk ">
          <p className="programsFooterP">Group Fitness </p>
          <p className="programsFooterP"> Intense Training </p>
          <p className="programsFooterP">Yoga Infused</p>
          <p className="programsFooterP">Full Body Workout</p>
        </div>
      </div>
    </>
  );
}
