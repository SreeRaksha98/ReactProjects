import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <main className="container">
             <div className="item item-1" id="card-1">
               <h1 className="main-heading">Join our community</h1> <br />
               <h2 className="sub-heading">1 week plan will be given to all the subscribers, enjoy as much as you can!..</h2> <br/>
               <p>Get to know more about Mysore and explore it.</p>
             </div>
             <div className="item item-2" id="card-2">
               <h3>Monthly Subscription</h3> <br/>
               <p className="price">
               <span>&nbsp;&nbsp;Just</span>
                 499 /- Rupees
                 <span>&nbsp;&nbsp;per week</span>
               </p> <br />
               <p className="para">Sign Up to know more</p> <br />
               <button>Sign Up</button>
             </div>
           </main>
           </footer>
        )
    }
}

export default Footer