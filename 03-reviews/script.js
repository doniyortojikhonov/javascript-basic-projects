const reviews = [
  {
    id: 1,
    name: "doniyor tojikhonov",
    job: "front end developer",
    img: "https://res.cloudinary.com/dnimnmxyt/image/upload/v1654396655/person-1_akbnkj.jpg",
    text: `A Front-End Developer is responsible for developing new user-facing features, 
    determining the structure and design of web pages by using a variety of markup languages`,
  },
  {
    id: 2,
    name: "sanjar djuraev",
    job: "QA Engineer",
    img: "https://res.cloudinary.com/dnimnmxyt/image/upload/v1654396659/person-2_nhixo0.jpg",
    text: `A QA Engineer is a professional who finds and fixes 
    bugs in a product or program before its launch, collaborating 
    with developers on fixes to those problems when necessary. 
    `,
  },
  {
    id: 3,
    name: "jasur juraev",
    job: "web developer",
    img: "https://res.cloudinary.com/dnimnmxyt/image/upload/v1654396661/person-3_itskiw.jpg",
    text: `Web developers design and build websites. 
          They are typically responsible for the appearance, of the site and technical 
          aspects, such as site speed and how much traffic the site can handle.`,
  },
  {
    id: 4,
    name: "shakhzod mardiev",
    job: "back end developer",
    img: "https://res.cloudinary.com/dnimnmxyt/image/upload/v1654438189/person-4_j2vwim.jpg",
    text: `Back-end developers create, code, and improve the server, 
    server-side applications, and databases thats Back end developers should ideally have experience working in a back end environment. `,
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// set starting item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
