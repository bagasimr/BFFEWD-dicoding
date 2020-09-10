import ImageHero from "../../assets/image/6.jpg"

class Jumbotron extends HTMLElement {

    connectedCallback(){
   
    this.render();
    }

    render() {
    this.innerHTML = `
    
     <style>
    .jumbotron{
        background: url(${ImageHero});
        background-repeat: no-repeat;
        background-size: cover ;
        background-position: center;
        background-color: #e9ecef;
        height: 350px;
        border-size: 20px;
        color: black;
        margin-bottom: 40px;
        
    }
    

    .jumbotron h1 {
        font-weight: 300;
    } 

    </style>
    <div class="jumbotron">
        <div class="container">
          <h1 class="display-2">Eaten~ </h1>
          <p class="lead">Your recomendded recipe Website!</p>
        </div>
      </div>


    `


















    }
}

customElements.define("header-jumbotron",Jumbotron);