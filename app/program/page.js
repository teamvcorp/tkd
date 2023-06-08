import "./program.css";
export default function Program() {
  return (
    <>
    <div className="programContainer">
        <div className='programContentContainer'>
              <div className='programsBackground'></div>
              <img className="programsImg programTkdImg programImgLeft" src="/tkdGroup.png" height={200} width={700} />
              <div className="programInfo programTkdInfo ProgramInfoRight">
                  <h5 className="programsH5">Taekwondo</h5>
                  <p className="programsP">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet.
                  </p>
                  <button className="btn programsBtn programsBtnRight">Sign up Now</button>     
          
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
