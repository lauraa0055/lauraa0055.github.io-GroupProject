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

// CODE FOR SEARCH RESULT
// const courseList = document.getElementById("course-list");
// const searchForm = document.getElementById("search-form");
// const searchInput = document.getElementById("search-input");
// const searchResultList = document.getElementById("search-result");

// searchForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent the form from submitting

//   const searchInputValue = searchInput.value.toUpperCase();
//   const searchResult = [];

//   for (let i = 0; i < courseList.children.length; i++) {
//     const courseElement = courseList.children[i];
//     const courseName = courseElement.textContent.toUpperCase();

//     if (courseName.includes(searchInputValue)) {
//       courseElement.style.display = "";
//       searchResult.push(courseElement.innerHTML);
//     } else {
//       courseElement.style.display = "none";
//     }
//   }

//   // Store the search result in session storage
//   sessionStorage.setItem("searchResult", JSON.stringify(searchResult));

//   // Redirect to search.html page
//   window.location.href = "search.html";
// });

// searchInput.addEventListener("input", function() {
//   const searchInputValue = searchInput.value.toUpperCase();

//   if (searchInputValue === "") {
//     searchResultList.innerHTML = "";
//     return;
//   }

//   const potentialResults = [];

//   for (let i = 0; i < courseList.children.length; i++) {
//     const courseElement = courseList.children[i];
//     const courseName = courseElement.textContent.toUpperCase();

//     if (courseName.includes(searchInputValue)) {
//       potentialResults.push(courseElement.textContent);
//     }
//   }

//   searchResultList.innerHTML = "";

//   for (let i = 0; i < potentialResults.length; i++) {
//     const result = potentialResults[i];
//     const listItem = document.createElement("li");
//     listItem.textContent = result;
//     searchResultList.appendChild(listItem);
//   }
// });
