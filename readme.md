# DevJobs App Readme

This project, named DevJobs App, is a job board application written in JavaScript. The application allows users to manage job listings, supporting features such as adding, editing, deleting, and searching for jobs. The application also includes a dark theme for a personalized user experience.
<br>

## Technologies Used

The DevJobs App, developed by Taleh Rzayev, utilizes the following technologies:

- **HTML**
- **CSS**
- **JavaScript**
- **Local Storage**

<br>

## Getting Started

To use the application, open the `index.html` file in a web browser. The primary functionalities include:

- Viewing a list of developer job postings.
- Editing job details.
- Deleting a job posting.
- Adding a new job posting.
<br>


## Code Overview

The JavaScript code is structured to facilitate key operations:

### 1. Job Listings Display (`getData`)

The `getData` function is responsible for rendering job listings on the main page (`index.html`). Each job listing includes essential details such as:

- Job title
- Company name
- Location
- Work type (Full Time, Part Time, etc.)
- Time posted


### Usage:

Call the `getData` function and pass an array of job data as an argument. The function will generate HTML content dynamically based on the provided job data and display it on the main page.

#### Example:

```javascript
// Assuming 'data' is an array of job objects
getData(data);
```

The function utilizes HTML templates to dynamically generate the content based on the provided job data.

---
<br>


### 2. Job Search Functionality (`search`)

The `search` function facilitates job searches based on user-specified criteria. Users can search by job title, location, and work type. The search results are then displayed on the main page, providing a streamlined approach to finding relevant job listings.


### Usage:

Call the `search` function with the search term, key, and the array of data as arguments. The function returns an array of filtered job data based on the search criteria.

#### Example:

```javascript
// Assuming 'data' is an array of job objects
const searchTerm = 'JavaScript Developer';
const searchKey = 'title';
const searchResults = search(searchTerm, searchKey, data);
console.log(searchResults); // Output: Array of job objects matching the search criteria
```


---
<br>

<br>


### 3. Current Page Information (`getCurrentUrl`)

The `getCurrentUrl` function extracts information about the current page, including the page name and any relevant parameters (e.g., job ID). This function is crucial for determining the context and executing page-specific logic, such as editing or adding job listings.

### Usage:

Call the `getCurrentUrl` function to obtain an object containing information about the current page, such as the page name and ID.

#### Example:

```javascript
const pageInformation = getCurrentUrl();
console.log(pageInformation.pageName); // Output: Current page name
console.log(pageInformation.id); // Output: Current job ID (if applicable)
```
<br>




### 4. Dark Theme Support

The application includes a dark theme feature to enhance user experience. Users can toggle between dark and light themes using the provided switch at the top of the page.

<br>

## Author

This project is authored by Taleh Rzayev. Feel free to contribute to the project by submitting bug reports, feature requests, or pull requests. Ensure adherence to the coding style and conventions used in the existing codebase.

Thank you for using the DevJobs App!

