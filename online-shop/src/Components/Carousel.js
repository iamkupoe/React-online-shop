import React from 'react';


function Carousel(){

    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/banner1.jpg" style={{height:'80vh'}} class="d-block w-100" alt="Bags"/>
          </div>
          <div class="carousel-item">
            <img src="images/banner.jpg" style={{height:'80vh'}} class="d-block w-100" alt="Wallets"/>
          </div>
          <div class="carousel-item">
            <img src="images/banner2.jpg" style={{height:'80vh'}} class="d-block w-100" alt="Bags"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
}

export default Carousel;