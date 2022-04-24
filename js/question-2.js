
const api_url = (`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=97264edf404a4b9d90dc46d5601ffecf`);

async function getInfo() {
const response = await fetch (api_url);
const data = await response .json ();
const { name, rating, tag } = data;
console.log(data.name);
console.log(data.rating);
console.log(data.tag);
   }
   getInfo();
   for (i = 0; i < 8; i++) {
    data.results.findIndex(results => results.name == name);
    data.results.findIndex(results => results.rating == rating);
    data.results.findIndex(results => results.tag == tag);
  
  }
document.getElementById(`Name`).textContent = Name;
document.getElementById(`Rating`).textContent = rating;
document.getElementById(`Tag`).textContent = tag;
   
 
/*/try {
    for (i = 0; i < 8; i++) {
        data.results.findIndex(results => results.name == name);
} catch (console.error); {
    console.log(`Error has occured:` + console.error);
}
console.log(´...Then the execution conitnues);
}




fetch(`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=97264edf404a4b9d90dc46d5601ffecf`)
    .then(res => res.json())
    .then(data => console.log(data));
    
   const container = document.querySelector(".results-container");

   console.log(container)/*/