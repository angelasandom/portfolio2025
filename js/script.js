//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

// sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100)
}

//remove icon and navbar when clicked link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// //scroll reveal
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .skills-container, projects.box, .contact-form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

// //typed js
//  const typed = new Typed('.multiple-text', {
//    strings: ['UX Designer', 'Software Developer'],
//    typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//    loop: true
// })

// const typed = new Typed('.multiple-text', {
//     strings: ['Software Developer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: false,
// });


//popup
const projectData = {
    ncnews: {
        title: "NC News",
        image: "img/stack-ncnews.png",
        description: "Full-Stack Development of a News Platform with a RESTful API and Interactive UI",
        points: [
            "NC News is a full-stack web application — Featuring a RESTful API that manages news articles, comments, and user interactions. It includes a backend built with Node.js and PostgreSQL and a frontend developed with React.js and CSS, ensuring a seamless user experience.",
            "The backend supports filtering, sorting, pagination, and full CRUD operations for articles and comments. — It follows a Test-Driven Development approach using Jest and Supertest.",
            "The frontend, built with React.js, provides a responsive interface that allows users to browse, vote, and comment on articles. — Optimistic rendering ensures a smooth experience, while robust error handling enhances usability and reliability.",
            "The backend is deployed separately and consumed via API calls, utilizing pg-format for PostgreSQL queries, and Axios for API requests. — The design prioritizes accessibility and ease of use, with intuitive navigation and a clean UI."
        ],
        link: "https://angela-nc-news.netlify.app/"
    },
    worldwhizz: {
        title: "World Whizz",
        image: "img/stack-world-whizz.png",
        description: "This was the final group project for the Northcoders Software Development Bootcamp.",
        points: [
            "Interactive — Users can navigate a Western Europe map, learn fun facts about each country, and take quizzes to earn badges.",
            "User Management —  Users can sign up and log in to save their progress, view completed countries, and track earned badges.",
            "Technologies — Built with Node.js, Express.js, and MongoDB for the backend, using Phaser for front-end & API endpoints for managing data."
        ],
        video: "https://drive.google.com/file/d/1RhrQge9RODXQJK1_2Gm6BsE6I13G36cl/view?usp=drive_link",
        link: "https://world-whizz.netlify.app/"
    },
    artistweb: {
        title: "Artist Website",
        image: "img/stack-artist-web.png",
        description: "Artist Portfolio developed with WebFlow",
        points: [
            "Conceptual Design in Figma — Prototyping and wireframing that emphasize the artist's work and personality.",
            "Minimalistic Aesthetic — Clean, sophisticated presentation to highlight the artwork.",
            "Responsive Development in Webflow — Smooth animations and transitions ensure a fluid user experience.",
            "Intuitive Navigation — Clear structure facilitating easy exploration of the artist's portfolio." 
        ],
        link: "https://www.evasanchezpintora.com/"
    },
    outlands: {
        title: "Outlands App Design",
        image: "img/stack-outlands.png",
        description: "Outlands app: Unique outdoor activities with local experts.",
        points: [
            "Comprehensive UX Process — Conducted market research, competitor analysis, and user research to define target personas and uncover user needs.",
            "User Journey Mapping — Developed flow diagrams to visualize and streamline the interaction process.",
            "High-Fidelity Prototyping in Figma — Created a detailed, realistic prototype showcasing outdoor activities app.",
            "Accessibility & Inclusive Design — Evaluated design accessibility to ensure an inclusive and user-friendly experience."
        ],
        link: "https://www.figma.com/design/xVzAoNppgVRCqPp4yVjjSB/OUTLANDS-APP?t=t4Uv45SbvLMwa53a-0"
    },
    gamedesign: {
        title: "Simulator Game Design",
        image: "img/stack-game-design.png",
        description: "Flight simulator Battle Pass - Axes in Motion (selection process test).",
        points: [
            "Goal — Designed a Battle Pass screen for a flight simulator game under a one-week deadline.",
            "Research — Analyzed airplane and car games, using industry resources for UI trends.",
            "Design — Created wireframes in Figma, with radar-inspired aesthetics and an 8px grid system.",
            "Learning — Improved game UI/UX skills, refining workflows and user-focused design."
        ],
        link: "https://www.figma.com/design/oTJ6T9hX8twpI8lioaDolz/Untitled?node-id=0-1&t=UL8UFNrrJpzGgk3w-1"
    }
};

//select popup elements
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupDescription = document.getElementById("popup-description");
const popupList = document.getElementById("popup-list");
const closeBtn = document.querySelector(".close-btn");

//open popup
document.querySelectorAll('.popup-trigger').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        const projectId = icon.getAttribute("data-id");
        const project = projectData[projectId];

        if (project) {
            popupTitle.textContent = project.title;
            popupImage.src = project.image;
            popupDescription.textContent = project.description;
            popupList.innerHTML = project.points.map(point => {
                //split from "—"
                const splitPoint = point.split("—"); 
                if (splitPoint.length > 1) {
                    return `<li><strong>${splitPoint[0].trim()}</strong> — ${splitPoint[1].trim()}</li>`;
                }
                return `<li>${point}</li>`;
            }).join("");
            
            const popupLink = document.getElementById("popup-link");
            popupLink.href = project.link || '#';  
            popupLink.style.display = project.link ? 'inline-block' : 'none';  

            //show video if exists in projectData
            const popupVideo = document.getElementById("popup-video");
            if (project.video) {
                popupVideo.src = project.video.replace("view?usp=drive_link", "preview");
                popupVideo.style.display = "block";  
            } else {
                popupVideo.src = "";
                popupVideo.style.display = "none";  
            }

            popup.style.display = "flex";
        }
    });
});


//close popup when clicked button
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

//close popup when clicked outside window
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
