class HeaderNavigation extends HTMLElement {

connectedCallback(){
    this.innerHTML = `
    <style>
   
    </style>
    <nav class="navbar navbar-expand-md navbar-light my-2">
    <a class="navbar-brand mr-5" href="#">
      <img src="/src/assets/image/eat.svg" class="brand-icon mr-2" target="blank" alt="logo" height="50"> Eaten~ 
    </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>

        
           
          </ul>

        </div>
      </nav>
    
    
    

    


   
    
    `








}









}

customElements.define("header-navigation",HeaderNavigation);