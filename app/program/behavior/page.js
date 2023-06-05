import '../program.css'
export default function Behavior() {
    return (
      <>
 <div className="programContainerLeft">
            <div className="programBackground programBackgroundLeft">
          
            <h5 className="programsH5Left">Behavior Health</h5>
            <p className="programsP programsPLeft">
             Coming Soon!
            </p>
            <button className="programsBtnRight">Sign up Now</button>   
          
        </div>
            <img className="programsImgRight " src="/family.png" height={600}/>
      </div>
        <div className="programsFooter programFooterBlue">
            <p className="programsFooterP programsFooterPNavy">One-On-One </p>
            <p className="programsFooterP programsFooterPNavy">Group Sessions</p>
            <p className="programsFooterP programsFooterPNavy">Family Plan</p>
            <p className="programsFooterP programsFooterPNavy">ABA Certified</p>
           
        </div>
      </>
    );
  }