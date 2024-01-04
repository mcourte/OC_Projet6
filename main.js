const fetch = require("node-fetch");

async function fetchPaginatedData() {
    const apiUrl = 'http://localhost:8000/api/v1/titles/';
    let nextPage = apiUrl;
  
    try {
      while (nextPage) {
        // Make a GET request for the current page
        const response = await fetch(nextPage);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data); // Process the data from the current page
  
        // Check if there is a next page
        nextPage = data.next;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
 // fetchPaginatedData();

async function fetchDataBestRated() {
  const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
  try {
    // Make a GET request
    for (let i = 0; i < 5; i++) {
      var response = await fetch(apiUrl  + '?sort_by=-imdb_score' +  '&page=' + i )
    }
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Print the JSON data to the console
      for (let i = 0; i < 15; i++) {
        console.log(data.results[i])
    } 
  
  }catch (error) {
      console.error('Error:', error);
    }
  }

// Call the async function
// fetchDataBestRated();

async function fetchDataThriller() {
  const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
  try {
    // Make a GET request
    const response = await fetch(apiUrl + "?genre=thriller")
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Print the JSON data to the console
    for (let i = 0; i < 5; i++) {
      console.log(data.results[i])
    } 
  } catch (error) {
    console.error('Error:', error);
  }
}
  
  // Call the async function
 // fetchDataThriller();


async function fetchDataHorror() {
    const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
    try {
      // Make a GET request
      const response = await fetch(apiUrl + "?genre=horror")
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); // Print the JSON data to the console
      for (let i = 0; i < 5; i++) {
        console.log(data.results[i])
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
 // fetchDataHorror();

 async function fetchDataMystery() {
    const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
    try {
      // Make a GET request
      const response = await fetch(apiUrl + "?genre=mystery")
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      for (let i = 0; i < 5; i++) {
        console.log(data.results[i])
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
 // fetchDataMystery();

fetchDataBestRated()