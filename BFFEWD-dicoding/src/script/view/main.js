import '../component/recipe-category.js';
import "../component/recipe-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";


// searchbar
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const recipeListElement = document.querySelector("recipe-list");
    // const recipeCategoryElement = document.querySelectorAll('recipe-category #cuisine-category');
     

    const onButtonSearch = async () => {
        searchRecipe(searchElement.value);
    };

    // // searchcategory
    //  /* tambahin eventListener untuk semua element category */
    //  recipeCategoryElement.forEach((item) => {
    //   item.addEventListener('click', function () {
    //     const category = this.innerHTML;
    //     searchCategory(category);
    //   });
    // });

    const searchRecipe = async (keyword) => {

        try{
          const result = await DataSource.searchRecipe(searchElement.value);
            renderResult(result);

        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        recipeListElement.recipe = results;
    };

    const fallbackResult = message => {
        recipeListElement.renderError(message);
    };
 



    // Search Receipe
    searchElement.clickEvent = onButtonSearch;








}
export default main;