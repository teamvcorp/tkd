import '../program.css'
export default function Afterschool() {
    return (
      <>
   <div className="programContainer">
        <div className='programContentContainer'>
              <div className='programsBackground'></div>
              <img className="programsImg programAfterschoolImg programImgLeft" src="/afterschoolBoy.png" height={800} width={700} />
              <div className="programInfo programTkdInfo ProgramInfoRight">
                  <h5 className="programsH5">Afterschool</h5>
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
        <div className="programsFooter programFooterYellow ">
            <p className="programsFooterP programsFooterPYotae">Homework Time </p>
            <p className="programsFooterP programsFooterPYotae">Group Activities</p>
            <p className="programsFooterP programsFooterPYotae">Taekwondo</p>
            <p className="programsFooterP programsFooterPYotae">Stem Classes</p>
            </div>
        </div>
      </>
    );
  }