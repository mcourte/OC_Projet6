
const fetch = require("node-fetch");

async function fetchPaginatedData() {
  const apiUrl = 'http://localhost:8000/api/v1/titles/';
  let nextPage = apiUrl;
  const list_url = [];
  try {
    while (nextPage) {
      const response = await fetch(nextPage);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      nextPage = data.next;
      list_url.push(nextPage);
    }
  } catch (error) {
    console.error('Error:', error);
  }
  return list_url;
}

 // fetchPaginatedData();


async function fetchDataBestRated() {
  const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
  try {
    const response = await fetch(apiUrl + "?&sort_by=-imdb_score")
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const movie_info = [];
  
      for (let i = 0; i < data.results.length ; i++) {
        const url = data.results[i].url;
        const movie_response = await fetch(url);
        const movie_data = await movie_response.json();
        const movie_info_item = {
          url_image: movie_data.image_url,
          title: movie_data.title,
          genre: movie_data.genres,
          date_de_sortie: movie_data.date_published,
          Rated: movie_data.rated,
          imbd_score: movie_data.imbd_score,
          realisateur: movie_data.directors,
          liste_acteurs: movie_data.actors,
          duree: movie_data.duration,
          pays_origine: movie_data.countries,
          resultat_box_office: movie_data.worldwild_gross_income,
          resume_film: movie_data.description
        };
        movie_info.push(movie_info_item);
        
      }
      console.log(JSON.stringify(movie_info,null,2));
    } catch (error) {
      console.error('Error:', error);
    }
  }


// fetchDataBestRated();

async function fetchDataThriller() {
  try {

    const list_url = await fetchPaginatedData();

    for (const url of list_url) {
      const response = await fetch(url + "genre=thriller");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const movie_info = [];

      for (let i = 0; i < data.results.length; i++) {
        const movie_response = await fetch(data.results[i].url);
        const movie_data = await movie_response.json();
        const movie_info_item = {
          url_image: movie_data.image_url,
          title: movie_data.title,
          genre: movie_data.genres,
          date_de_sortie: movie_data.date_published,
          Rated: movie_data.rated,
          imbd_score: movie_data.imbd_score,
          realisateur: movie_data.directors,
          liste_acteurs: movie_data.actors,
          duree: movie_data.duration,
          pays_origine: movie_data.countries,
          resultat_box_office: movie_data.worldwild_gross_income,
          resume_film: movie_data.description
        };
        movie_info.push(movie_info_item);
      }
      console.log(JSON.stringify(movie_info, null, 2));
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataThriller();

async function fetchDataHorror() {
  const apiUrl = 'http://localhost:8000/api/v1/titles/';

  try {
    // Make a GET request
    const response = await fetch(apiUrl + "?genre=horror");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const movie_info = [];

    for (let i = 0; i < data.results.length ; i++) {
      const url = data.results[i].url;
      const movie_response = await fetch(url);
      const movie_data = await movie_response.json();
      const movie_info_item = {
        url_image: movie_data.image_url,
        title: movie_data.title,
        genre: movie_data.genres,
        date_de_sortie: movie_data.date_published,
        Rated: movie_data.rated,
        imbd_score: movie_data.imbd_score,
        realisateur: movie_data.directors,
        liste_acteurs: movie_data.actors,
        duree: movie_data.duration,
        pays_origine: movie_data.countries,
        resultat_box_office: movie_data.worldwild_gross_income,
        resume_film: movie_data.description
      };
      movie_info.push(movie_info_item);
      
    }
    console.log(JSON.stringify(movie_info,null,2));
  } catch (error) {
    console.error('Error:', error);
  }
}

//fetchDataHorror();

 async function fetchDataMystery() {
    const apiUrl = 'http://localhost:8000/api/v1/titles/';
  
    try {
      // Make a GET request
      const response = await fetch(apiUrl + "?genre=mystery")
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        const movie_info = [];
    
        for (let i = 0; i < data.results.length ; i++) {
          const url = data.results[i].url;
          const movie_response = await fetch(url);
          const movie_data = await movie_response.json();
          const movie_info_item = {
            url_image: movie_data.image_url,
            title: movie_data.title,
            genre: movie_data.genres,
            date_de_sortie: movie_data.date_published,
            Rated: movie_data.rated,
            imbd_score: movie_data.imbd_score,
            realisateur: movie_data.directors,
            liste_acteurs: movie_data.actors,
            duree: movie_data.duration,
            pays_origine: movie_data.countries,
            resultat_box_office: movie_data.worldwild_gross_income,
            resume_film: movie_data.description
          };
          movie_info.push(movie_info_item);
          
        }
        console.log(JSON.stringify(movie_info,null,2));
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
  // Call the async function
 // fetchDataMystery();




