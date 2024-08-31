function filterCategory() {
    var category = document.getElementById("search").value;
    
    var allCategories = document.querySelectorAll(".category");
    allCategories.forEach(function(categoryDiv) {
        categoryDiv.style.display = "none";
    });

    if (category === "all") {
        allCategories.forEach(function(categoryDiv) {
            categoryDiv.style.display = "block";
        });
    } else {
        var selectedCategory = document.getElementById(category + "-category");
        if (selectedCategory) {
            selectedCategory.style.display = "block";
        }
    }
}
