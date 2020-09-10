
class Searchbar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
    
    <div class="input-group">
    <input id="searchElement" type="text" class="form-control form-control-lg border-warning" placeholder="Search recipe here..">
        
    </div>
    <p class="pt-1 pb-3">Example Search : pasta, pizza, sushi</p>
    `;



        this.querySelector("#searchElement").addEventListener("click", this._clickEvent);

    }
}

customElements.define("search-bar", Searchbar);
