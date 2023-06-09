import "../program.css";
import Link from 'next/link';
export default function Trip() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programTripImg programImgLeft"
            src="/happyKids.png"
            height={600}
            width={600}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">TRIP Outreach</h5>
            <p className="programsP">
              TRIP Outreach uses community service projects to implement lessons
              of servent leadership, mastery of self, and power of inclusion.
              This great program runs up to 6 days per week and starts at $50
              per year! Enroll now or come check us out.
            </p>
            <Link href="/enroll">
              <button className="btn programsBtn programsBtnRight">
                Sign up Now
              </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programFooterGreen ">
          <p className="programsFooterP">Volunteering </p>
          <p className="programsFooterP"> Community Involvement </p>
          <p className="programsFooterP">Taekwondo</p>
          <p className="programsFooterP">Group Activities</p>
        </div>
      </div>
    </>
  );
}
