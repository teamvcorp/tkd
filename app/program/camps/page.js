import '../program.css'
export default function Camps() {
    return (
      <>
    <div className="programContainerLeft">
            <div className="programBackground programBackgroundLeft">
          
            <h5 className="programsH5Left">Camps</h5>
            <p className="programsP programsPLeft">
             Coming Soon!
            </p>
            <button className="programsBtnRight">Sign up Now</button>   
          
        </div>
            <img className="programsImgRight " src="/superKids.png" height={400}/>
      </div>
        <div className="programsFooter programFooterOrange">
            <p className="programsFooterP ">Day Camp</p>
            <p className="programsFooterP ">Summer Camp</p>
            <p className="programsFooterP ">Fun Activities</p>
            <p className="programsFooterP ">Field Trips</p>
            <p className="programsFooterP ">Games and Movies</p>
           
        </div>
      </>
    );
  }