

class RecipeItem extends HTMLElement {

    set recipe(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
    
        </style>
          
        <div class="col mb-4 position-relative">
        <img class="card-img-top card-recipe"  data-id="${this._item.id}" 
        src="https://spoonacular.com/recipeImages/${this._item.id}-480x360" alt="${this._item.title}">
          <div class="card-body px-0 pt-2">
           <h5 class="text-center text-truncate card-title mb-1">${this._item.title}</h5>
            <p class="card-text text-muted small ">
              <a class="stretched-link" target="_blank" href="${this._item.sourceUrl}"></a>
             <span class="float-left">
              <i class="fa fa-clock"></i> 
                ${this._item.readyInMinutes} MINS 
             </span>
             <span class="float-right">
                ${this._item.servings} PERSON <i class="fa fa-utensils"></i>
             </span>
          </p>
        </div>
      </div>`;

           
      
    }
}

customElements.define("recipe-item", RecipeItem);