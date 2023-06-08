import "../program.css";
export default function Trip() {
    return (
      <>
   <div className="programContainer">
        <div className='programContentContainer'>
              <div className='programsBackground'></div>
              <img className="programsImg programTripImg programImgLeft" src="/happyKids.png" height={600} width={600} />
              <div className="programInfo programTkdInfo ProgramInfoRight">
                  <h5 className="programsH5">TRIP Outreach</h5>
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