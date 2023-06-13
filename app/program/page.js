import "./program.css";
import Link from "next/link";
export default function Program() {
  return (
    <>
      <div className="programContainer">
        <div className="programContentContainer">
          <div className="programsBackground"></div>
          <img
            className="programsImg programTkdImg programImgLeft"
            src="/tkdGroup.png"
            height={200}
            width={700}
          />
          <div className="programInfo programTkdInfo ProgramInfoRight">
            <h5 className="programsH5">Taekwondo</h5>
            <p className="programsP">
              Our school offers Taekwondo for both adults and children. Our
              focus is discipline and leadership through the mastery of self and
              taekwondo principles. We boast a comprehensive program that will
              build confidence in our practitioners while building skills that
              can be demonstrated when needed. Whether you want to compete with
              our team at the highest levels or just reach your full potential
              this is the school for you and your family. Our
              poomsae,self-defense techniques and sparring may be rooted from a
              long line of masters. Our program however is not stuck in the
              past. Our kids program deleiver a fun and engaging curruculuim
              while teaching to accept our current self and strive to improve
              future self. We use the highest standards of education to level
              the playing feild allowing diverse learner to exceed expectaions
              on there journey to become black belt practitioners.
            </p>
            <Link href="/enroll">
              <button className="btn programsBtn programsBtnRight">
                Sign up Now
              </button>
            </Link>
          </div>
        </div>
        <div className="programsFooter programsFooterRed">
          <p className="programsFooterP">discipline </p>
          <p className="programsFooterP"> confidence </p>
          <p className="programsFooterP">self-control</p>
          <p className="programsFooterP">self-defense</p>
          <p className="programsFooterP">physical fitness</p>
        </div>
      </div>
    </>
  );
}
