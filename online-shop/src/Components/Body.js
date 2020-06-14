import React from 'react';

function Body(props){

    return(
        <div style={{width:'100%'}}>
            <h1>Product Categories</h1>
    
    <div class="card-deck">
  <div class="card">
    <img src="images/ladies1.jpg" class="card-img-top" alt="Handbag"/>
    <div class="card-body">
      <h2 class="card-title">Ladies Handbag</h2>
      <h2 class="price"><small>$</small>18<small>.70<br/>or 4 x$4.67</small> </h2>
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="images/walletmen.jpg" class="card-img-top" alt="Wallet"/>
    <div class="card-body">
      <h2 class="card-title">Wallet for men</h2>
      <h2 class="price"><small>$</small>10<small>.00<br/>or 2 x$2.00</small> </h2>
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="images/laptopbag.jpg" class="card-img-top" alt="Laptop Bag"/>
    <div class="card-body">
      <h2 class="card-title">Laptop Bag</h2>
      <h2 class="price"><small>$</small>20<small>.10<br/>or 5 x$5.10</small> </h2>
      <button type="button" class="btn btn-primary">Add to Cart</button>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
        

          
        
        
        </div>
        
     
    );
}

export default Body;
