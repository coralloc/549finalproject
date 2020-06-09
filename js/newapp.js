function renderRecipes(recipe_list) {
  
    var tbody = document.querySelector(".recipes tbody");

    tbody.textContent = "";

    for (var idx = 0; idx < recipe_list.length; idx++) {
        var row = renderRecipe(recipe_list[idx]);
        tbody.appendChild(row);

    }
}

function renderRecipe(recipe) {
     var tr = document.createElement("tr");

     tr.appendChild(renderRecipeProp(recipe.name, true));
     tr.appendChild(renderRecipeProp(recipe.person, true));
     tr.appendChild(renderRecipeProp(recipe.meal, true));
 
     return tr;
 }
function renderRecipeProp(content, nonNumeric) {
    var td = document.createElement("td");

    td.textContent = content;

    if (nonNumeric) {
        td.classList.add("non-numeric");
    }

    return td;
}
var searchInput = document.getElementById("recipe-filter");



function findPerson(recipe){
    var userInput = searchInput.value ;
    var lowercaseUserinput = userInput.toLowerCase();
    var lowercasePerson = recipe.person.toLowerCase();

    if (lowercasePerson.indexOf(lowercaseUserinput) >= 0) {
    return true;
} else {
    return false;
} }


searchInput.addEventListener("input", function() {
    var filteredRecipes = RECIPES.filter(findPerson);
    console.log(filteredRecipes);
    renderRecipes(filteredRecipes);

})

