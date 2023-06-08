import '../program.css'
export default function Camps() {
    return (
      <>
 <div className="programContainer">
        <div className='programContentContainer'>
              <div className='programsBackground'></div>
              <img className="programsImg programCampImg programImgLeft" src="/superKids.png" height={600} width={800} />
              <div className="programInfo programTkdInfo ProgramInfoRight">
                  <h5 className="programsH5">Camps/Clinics</h5>
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