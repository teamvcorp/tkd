import "../program.css";
import Link from 'next/link'
export default function Afterschool() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programAfterschoolImg programImgLeft"
            src="/afterschoolBoy.png"
            height={800}
            width={700}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">Afterschool</h5>
            <p className="programsP">
              A safe space for kids to learn a range of skills from self
              managment to computer programing and of course Taekwondo. Academy
              afterschool program takes all the great qualities of an
              established Martial arts school and uses it to create a fun, safe,
              and puroposful place for your kids to thrive. The journey to self
              mastery starts can start here.
            </p>
            <Link href='/enroll'>
            <button className="btn programsBtn programsBtnRight">
              Sign up Now
            </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programFooterYellow ">
          <p className="programsFooterP programsFooterPYotae">Homework Time </p>
          <p className="programsFooterP programsFooterPYotae">
            Group Activities
          </p>
          <p className="programsFooterP programsFooterPYotae">Taekwondo</p>
          <p className="programsFooterP programsFooterPYotae">Stem Classes</p>
        </div>
      </div>
    </>
  );
}
