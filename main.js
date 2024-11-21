document.addEventListener("DOMContentLoaded", () => {
  // Show menu functionality
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };

  showMenu("nav-toggle", "nav-menu");

 
  const socialLinks = document.querySelectorAll(".twitter");
  const border = document.querySelector(".border");

  if (socialLinks.length > 0) {
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        border.style.borderLeft = "solid var(--first-color) 2px";
      });
      link.addEventListener("mouseleave", () => {
        border.style.borderLeft = "solid white 2px";
      });
    });
  }

  
  gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
  gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
  gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });

  gsap.from(".home-img", { opacity: 0, duration: 2, delay: 2, x: 60 });
  gsap.from(".home-information", { opacity: 0, duration: 3, delay: 2.3, y: 25 });
  gsap.from(".anime-text", {
    opacity: 0,
    duration: 3,
    delay: 2.3,
    y: 25,
    ease: "expo.out",
    stagger: 0.3,
  });
  gsap.from(".nav-logo", {
    opacity: 0,
    duration: 3,
    delay: 3.2,
    y: 25,
    ease: "expo.out",
  });
  gsap.from(".nav-item", {
    opacity: 0,
    duration: 3,
    delay: 3.2,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
  });
  gsap.from(".home-social", {
    opacity: 0,
    duration: 3,
    delay: 4,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
  });


  const skills = [
    { skill: "Front", title: "Frontend" },
    { skill: "Back", title: "Backend" },
    { skill: "Tools", title: "Tools" },
    { skill: "Learning", title: "In-progress" },
  ];

  const skillsLogos = {
    Front: [
      { name: "HTML5", image: "logos/html5-logo.png" },
      { name: "CSS3", image: "logos/css-logo.png" },
      { name: "ReactJS", image: "logos/react-logo.png" },
      { name: "Bootstrap", image: "logos/bootstrap-5-logo-icon.png" },
      { name: "JavaScript", image: "logos/js-logo.png" },
    ],
    Back: [
      { name: "NodeJS", image: "logos/nodejs-logo.png" },
      { name: "ExpressJS", image: "logos/express-logo.png" },
      { name: "MongoDB", image: "logos/mongodb-logo.webp" },
    ],
    Tools: [
      { name: "Git", image: "logos/git-logo.png" },
      { name: "GitHub", image: "logos/github-logo.webp" },
      { name: "Vscode", image: "logos/vscode.png" },
      { name: "Rest Api", image: "logos/icons8-rest-api-50.png" },
      { name: "Vercel", image: "logos/vercel.png" },
      { name: "Redux", image: "logos/redux-logo.png" },
    ],
    Learning: [
      { name: "Python", image: "logos/python-logo.png" },
      { name: "AWS", image: "logos/github-logo.webp" },
      { name: "Docker", image: "logos/docker-logo.png" },
      { name: "Figma", image: "logos/figma-logo.webp" },
      
    ],

  };

  const activeSkillTitle = document.getElementById("active-skill-title");
  const skillsLogosGrid = document.getElementById("skills-logos-grid");

  function renderSkills(skill) {
    skillsLogosGrid.innerHTML = "";
    skillsLogos[skill].forEach((logo) => {
      const logoElement = document.createElement("div");
      logoElement.className = "skill-logo";
      logoElement.innerHTML = `
        <img src="${logo.image}" alt="${logo.name}" />
        <h3>${logo.name}</h3>
      `;
      skillsLogosGrid.appendChild(logoElement);
    });
  }

  function handleSkillChange(event) {
    const skill = event.target.closest("button").dataset.skill;
    if (!skill) return;

    document
      .querySelectorAll(".skills-button")
      .forEach((button) => button.classList.remove("skills-button-active"));

    event.target.closest("button").classList.add("skills-button-active");
    activeSkillTitle.textContent = skills.find((s) => s.skill === skill).title;
    renderSkills(skill);
  }

  document.querySelectorAll(".skills-button").forEach((button) => {
    button.addEventListener("click", handleSkillChange);
  });

  renderSkills("Front");
  document
    .querySelector('.skills-button[data-skill="Front"]')
    .classList.add("skills-button-active");

  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.remove(target.dataset.animation);
          void target.offsetWidth; // Trigger a reflow
          target.classList.add(target.dataset.animation);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll("#about-me [data-animation]")
    .forEach((element) => observer.observe(element));

  const skillsPicker = document.querySelector(".skills-picker");
  const colors = [
    "#FF6347",
    "#FFD700",
    "#DA70D6",
    "#7FFF00",
    "#FF1493",
    "#FF4500",
    "#32CD32",
    "#8A2BE2",
    "#FF69B4",
  ];
  let colorIndex = 0;

  function changeBackgroundColor() {
    skillsPicker.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }

  setInterval(changeBackgroundColor, 1000);
});


document.addEventListener("DOMContentLoaded", () => {
  const skillsPicker = document.querySelector(".skills-picker");
  const skillsButtons = document.querySelectorAll(".skills-button");
  const skillsText = document.querySelectorAll(".skills-text");

 
  function animateSkillsSection() {
    
    skillsPicker.classList.remove("animate"); 
    void skillsPicker.offsetWidth; 
    skillsPicker.classList.add("animate");

    skillsButtons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add("animate");
      }, index * 200); 
    });

   
    skillsText.forEach((text) => {
      text.style.animation = "none"; 
      void text.offsetWidth; 
      text.style.animation = "text-spin 1s ease-in-out forwards";
    });
  }


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillsSection();
        } else {
          skillsButtons.forEach((button) => button.classList.remove("animate"));
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(document.querySelector(".skills-picker-wrapper"));
});
document.addEventListener("DOMContentLoaded", () => {
  const workExperienceSection = document.querySelector("#work-experience");
  const experienceCard = document.querySelector("#experience-card");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        workExperienceSection.classList.add("visible");
        experienceCard.classList.add("visible");
      } else {
        workExperienceSection.classList.remove("visible");
        experienceCard.classList.remove("visible");
      }
    },
    { threshold: 0.5 } 
  );

  observer.observe(workExperienceSection);
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`; // Stagger animations
        card.classList.add('animate');
      });
    } else {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => {
        card.classList.remove('animate');
      });
    }
  });
});
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.animationPlayState = 'paused';
  });
  
  card.addEventListener('touchend', () => {
    card.style.animationPlayState = 'running';
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.animationPlayState = 'paused';
  });
  
  card.addEventListener('mouseout', () => {
    card.style.animationPlayState = 'running';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const educationSection = document.querySelector("#education");
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timelineItems.forEach((item, index) => {
          const animationClass = index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight";
          item.classList.add("animate__animated", animationClass);
        });
      } else {
        timelineItems.forEach((item) => {
          item.classList.remove("animate__animated", "animate__fadeInLeft", "animate__fadeInRight");
        });
      }
    });
  }, {
    threshold: 0.5, 
  });

  observer.observe(educationSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon-container img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const icon = entry.target;

        if (entry.isIntersecting) {
          icon.style.animation = `iconAnim 1s ease-in-out forwards`;
        } else {
          icon.style.animation = "none";
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  icons.forEach((icon) => {
    observer.observe(icon);
  });
});
