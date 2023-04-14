const courseList = document.getElementById("course-list");

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const searchInput = document.getElementById("search-input").value.toUpperCase();
  const searchResult = [];

  for (let i = 0; i < courseList.children.length; i++) {
    const courseElement = courseList.children[i];
    const courseName = courseElement.textContent.toUpperCase();

    if (courseName.includes(searchInput)) {
      courseElement.style.display = "";
      searchResult.push(courseElement.innerHTML);
    } else {
      courseElement.style.display = "none";
    }
  }

  // Store the search result in session storage
  sessionStorage.setItem("searchResult", JSON.stringify(searchResult));

  // Redirect to search.html page
  window.location.href = "search.html";
});
