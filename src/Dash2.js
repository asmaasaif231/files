import React from 'react';
import dash2Image from './images/certficate.jpg';
class Dash2 extends React.Component{

    constructor(){
        super();
        this.state={
            CourseName:"",
            placeIssue:"",
            DateR:"",
            certScore:"",
            Message:"",
            Message1:"",
            Message2:"",
            Message3:"",
            Message4:"",
            Message5:""
        }
    }

    textFunction = (e) => {
        let CourseName = document.forms["inputForm"]["CourseName"].value;
        let placeIssue = document.forms["inputForm"]["placeIssue"].value;
        let DateR = document.forms["inputForm"]["DateR"].value;
        let certScore = document.forms["inputForm"]["certScore"].value;

          this.setState({
            Message:"Certification", 
            Message1:"of completion",
            Message2:CourseName, 
            Message3:"issued from " + placeIssue ,
            Mwssage4:"on " + DateR ,
            Message5:"with score of " + certScore

          });}
     
      render(){
        return(
        <>
            <div className="wow fadeInUp col-md-8 col-sm-12" data-wow-delay="0.4s" id="dashboardOrder1">
            {/* <!-- part1 --> */}
            <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                <div className="about-thumb">
                
                    <div className="about-overlay">
                    <br/>
                <br/>
                        <form className="well form-horizontal"  name="inputForm">


                            <fieldset>

                                {/* <!-- Form Name --> */}
                                <legend><center><h3><b>Add New Certificate</b></h3></center></legend><br/>
                                
                                
                                
                                {/* <!-- Text input--> */}
                                
                                <div className="form-group">
                                
                                <div className="col-md-12 inputGroupContainer">
                                <div className="input-group">
                                <input  name="CourseName" placeholder="Course Name" className="form-control"  type="text" required onChange={this.textFunction} maxLength="16"/>
                                <input  name="placeIssue" placeholder="Place of Issue" className="form-control"  type="text" required onChange={this.textFunction} maxLength="30"/>
                                <input  name="DateR" placeholder="Date Recieved" className="form-control"  type="date" requiredonChange={this.textFunction} />
                                <input type="number" name="certScore" placeholder="certification Score" className="form-control" minLength="0" maxLength = "2" min="60" max="99" required onChange={this.textFunction} />


                                    </div>
                                </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label"></label>
                                    <div className="col-md-4"><br/>
                                    <button type="submit" className="btn btn-warning" > Add <span className="glyphicon glyphicon-send"></span></button>
                                    </div>
                                </div>

                                </fieldset>
                    </form>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
           
            {/* <!-- part2 --> */}
            <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
                <div className="about-thumb">
               
                    <div className="about-overlay">
                    {/* </br> </br> */}
                    
                        <form className="well form-horizontal" >
                        <div className= "certimageBack">
                            <fieldset>
                              
{/* 
                            <div className="error" id="passwordErr" name="passwordErr"> */}

                                        {/* <img src={dash2Image} className="img-responsive" alt="cert"/> */}
                                    <p>  {this.state.Message}</p>
                                    <p>  {this.state.Message1}</p>
                                    <h3>  {this.state.Message2}</h3><br/>
                                    <p>  {this.state.Message3}</p>
                                    <p>  {this.state.Message4}</p>
                                    <p>  {this.state.Message5}</p>
                                        {/* </div> */}
                         
                                <br/>
                                
                            </fieldset>
                            </div>
                        </form>
                
                </div>
                </div>
            </div>


            </div>
        </>

);
}
}

    
export default Dash2;
    