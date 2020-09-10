

class RecipeCategory extends HTMLElement {
 
    connectedCallback() {
      this.render();
  }

  set recipe(item) {
    this._item = item;
    this.render();
}



  render() {
      this.innerHTML = `
        <style>
        
        </style>
        

        <div class="" id="accordion">
        <h5 class="text-md-center d-flow-root">Filter By:</h5> 
        <hr class="mb-4 d-flow-root">
        
       <div class="list-group bg-warning ">
          <a type="button" data-toggle="collapse" data-target="#collapseOne" class="text-white btn my-2">
            <p class="h6 m-0">Cuisine</p>
          </a>

          <div id="collapseOne" class="collapse hide list-group-flush " aria-labelledby="headingOne" data-parent="#accordion">
            <a id="cuisine-category" class="list-group-item list-group-item-action text-center" href="#">Japanese</a>
          
            <a id="cuisine-category" class="list-group-item list-group-item-action text-center" href="#">Chinese</a>
          
            <a id="cuisine-category" class="list-group-item list-group-item-action text-center" href="#">Korean</a>
          

          </div>

        </div>

        <div class="list-group bg-warning ">
          <a type="button" data-toggle="collapse" data-target="#collapseTwo" class="text-white btn my-2">
            <p class="h6 m-0">Meal</p>
          </a>

          <div id="collapseTwo" class="collapse hide list-group-flush " aria-labelledby="headingTwo" data-parent="#accordion">
            <a class="list-group-item list-group-item-action text-center" href="#">Main Course</a>
          
            <a class="list-group-item list-group-item-action text-center" href="#">Side Dish</a>
          
            <a class="list-group-item list-group-item-action text-center" href="#">Desserts</a>
          

          </div>

        </div>

        <div class="list-group bg-warning ">
          <a type="button" data-toggle="collapse" data-target="#collapseThree" class="text-white btn my-2">
            <p class="h6 m-0">Healthy & Diet</p>
          </a>

          <div id="collapseThree" class="collapse hide list-group-flush " aria-labelledby="headingThree" data-parent="#accordion">
            <a class="list-group-item list-group-item-action text-center" href="#">Vegetarian</a>
          
            <a class="list-group-item list-group-item-action text-center" href="#">Ketogenic</a>
          
            <a class="list-group-item list-group-item-action text-center" href="#">Gluten Free</a>
          

          </div>

        </div>
 
        



        
      


      
      </div> 
      


        
        `

        

    }   
  
}
customElements.define("recipe-category", RecipeCategory);