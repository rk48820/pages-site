let recipes = [];

function addRecipe() {
    let name = document.getElementById("recipeName").value;
    let ingredients = document.getElementById("recipeIngredients").value;
    let instructions = document.getElementById("recipeInstructions").value;

    if (name.trim() === "" || ingredients.trim() === "" || instructions.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    let newRecipe = { name, ingredients, instructions };
    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    displayRecipes();
    updateMealOptions();

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeInstructions").value = "";
}

function displayRecipes() {
    let recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${recipe.name}</strong><br>
                        <small>Ingredients: ${recipe.ingredients}</small><br>
                        <small>Instructions: ${recipe.instructions}</small><br>
                        <button onclick="deleteRecipe(${index})">Delete</button>`;
        recipeContainer.appendChild(li);
    });
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    displayRecipes();
    updateMealOptions();
}

function updateMealOptions() {
    let mealSelects = document.querySelectorAll(".mealSelect");
    mealSelects.forEach(select => {
        select.innerHTML = "<option value=''>Select a recipe</option>";
        recipes.forEach(recipe => {
            let option = document.createElement("option");
            option.value = recipe.name;
            option.innerText = recipe.name;
            select.appendChild(option);
        });
    });
}

function loadRecipes() {
    let storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
    }
    displayRecipes();
    updateMealOptions();
}

window.onload = loadRecipes;
