import React from 'react';


function Navbar(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-main" style={{fontFamily:'Roboto', backgroundColor:'purple'}}>
              <a class="navbar-brand" href="#" style={{color:'hotpink', fontFamily:'Sriracha'}}>KASENAGIRL ONLINE-SHOP</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                      <a class="nav-link" href="#" style={{color:'blue'}}>HOME <span class="sr-only">(current)</span></a>
                 </li>
                    <li class="nav-item">
        <a class="nav-link" href="#" style={{color:'blue'}}>REGISTER</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'blue'}}>
          CATEGORIES
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Hand Bags</a>
          <a class="dropdown-item" href="#">Laptop Bags</a>
          <a class="dropdown-item" href="#">Shoulder Bags</a>
          <a class="dropdown-item" href="#">Wallets</a>
          <a class="dropdown-item" href="#">Purses</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#"></a>
        </div>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" style={{color:'blue'}}>LOG IN</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#" style={{color:'blue'}}>CONTACT</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
        
    );
}

export default Navbar;