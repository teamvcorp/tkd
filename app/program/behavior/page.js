import "../program.css";
import Link from 'next/link';


export default function Behavior() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programBehaviorImg programImgLeft"
            src="/family.png"
            height={800}
            width={700}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">Behavioral</h5>
            <p className="programsP">
              Our school teaches using ABA principles seemlessly in all of its
              programs allowing us to improve the efficiency and the quality of
              our service. In addition to using these methods throughout our
              programs we also offer ABA therapy to individuals that may have a
              need for them. We have the ability to offer individual sessions,
              group sessions, and family programs. You do not need to be a
              taekwondo student to participate in these services.
            </p>
            <Link href='/enroll'>
            <button className="btn programsBtn programsBtnRight">
              Sign up Now
            </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programFooterBlue">
          <p className="programsFooterP programsFooterPNavy">One-On-One </p>
          <p className="programsFooterP programsFooterPNavy">Group Sessions</p>
          <p className="programsFooterP programsFooterPNavy">Family Plan</p>
          <p className="programsFooterP programsFooterPNavy">ABA Certified</p>
        </div>
      </div>
    </>
  );
}
