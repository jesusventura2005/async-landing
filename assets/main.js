const APIkey = "efb89f8f";
const API = `https://www.omdbapi.com/?apikey=${APIkey}`;
const batmanZone = document.querySelector("#batman");
const supermanZone = document.querySelector("#superman")
const harryPotter = document.querySelector("#HarryPotter")
const rocky = document.querySelector("#rocky")
const titleName = document.querySelectorAll(".nameTitle")
const containerMovies = document.querySelector("#containerMovies")
const body = document.querySelector("body")



const fetchData = async (urlapi) => {
  const res = await fetch(urlapi);
  const data = await res.json();
  return data;
};

const getMovies = async (urlapi,nameMovie) => {
  try {
    const movies = await fetchData(`${urlapi}&s=${nameMovie}`);
    return movies;
  } catch (error) {
    console.error("no hay nada");
  }
};


const createLi = (title, zone, poster) => {
  const spam = document.createElement("spam")
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = poster
  img.width = 300;
  img.height = 450;
  spam.textContent = title
  li.appendChild(spam)
  li.appendChild(img);
  zone.appendChild(li);
};

const renderMovies = async (zone,movieName) => {
  const moviesData = await getMovies(API,movieName);
  const moviesArray = moviesData.Search;

  moviesArray.slice(1, 5).forEach((movie) => {
    createLi(movie.Title, zone, movie.Poster);
  });



};




renderMovies(batmanZone,"batman");

renderMovies(supermanZone,"superman")

renderMovies(harryPotter,"harry potter")

renderMovies(rocky,"rocky")

titleName.forEach((title) => {
  title.addEventListener("click", () => {
    const name = title.textContent;

    const spans = containerMovies.querySelectorAll("span");
    spans.forEach((span) => {
      if (span.textContent === name) {
        console.log(span);
        span.scrollIntoView({ behavior: "smooth", block: "start" });

      }
    });
  });
});



window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
});







