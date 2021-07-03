import React from 'react';
import './dashboard.css';

const Dashboard = () =>{
    return(
        <React.Fragment>
            <nav class="navbar navbar-inverse" style={{border:'none',
                                                       borderRadius:'0px',
                                                       color:'white',
                                                       background:'white',
                                                       marginBottom:'0%'}}>
                    <div class="container-fluid">
                        <div class="navbar-header" style={{height:'80px'}}></div>
                    </div>
            </nav>

            <section>
                <div id="title"><i className="fa fa-caret-left" aria-hidden="true"></i>&nbsp;Videos</div>
                    <div className="textInput">
                        <input type="text" placeholder="Insert URL here"/>
                    </div>
                    <br/><br/>
                    <center><b>or</b></center>

                     <p id="tileContainer">
                        upload
                    </p>
            </section>

           <div id="verticalContainer">
         <button id="box" style={{borderBottom:'4px double #f5f5f5'}}><i class="fa fa-gg-circle" style={{fontSize:'28px',marginTop:'7px'}}></i></button>
         <button id="box"><i className="fa fa-user" style={{fontSize:'28px'}}></i>Students</button>
         <button id="box"><i className="fa fa-book"style={{fontSize:'28px'}}></i>Lesson Plan</button>
         <button id="box"><span className="glyphicon glyphicon-cog" style={{fontSize:'28px'}}></span>Settings</button>
         <button id="box"></button>

    </div>
        </React.Fragment>
    )    
}


export default Dashboard;