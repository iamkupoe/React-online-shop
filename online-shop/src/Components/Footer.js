import React from 'react';


function Footer(){

    return(
       
    <div class="footer" style={{backgroundColor:'lightgray',  width:'100%'}}>
    
        <p class="text" style={{color:'blue', textAlign:'center'}}> ©2020 KASENAGIRL. All Rights Reserved</p>
    
    
      
      {/*Add icon library*/}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

   {/*</link>Add font awesome icons */}
  <a href="#" class="fa fa-facebook fb" style={{marginRight:'10px', color:'blue'}}></a>
  <a href="#" class="fa fa-twitter fb" style={{marginRight:'10px',color:'blue' }}></a>
  <a href="#" class="fa fa-linkedin fb" style={{marginRight:'10px', color:'blue'}}></a>
  <a href="#" class="fa fa-instagram fb" style={{marginRight:'10px', color:'red'}}></a>

    </div>
   
    );
}

export default Footer;