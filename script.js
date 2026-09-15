// ===============================
// ANIME DATA
// ===============================

const animeData = [
  {
    id: 1,
    title: "Demon Slayer",
    genre: "Action",
    year: "2019",
    episodes: 2,
    rating: "9.0",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=85",
    description:
      "A young warrior begins a dangerous journey to protect his family and fight powerful enemies.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 2,
    title: "Skybound Legends",
    genre: "Adventure",
    year: "2024",
    episodes: 1,
    rating: "8.7",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85",
    description:
      "A group of young explorers travel beyond the clouds to discover a forgotten kingdom.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 3,
    title: "Crimson Hearts",
    genre: "Romance",
    year: "2023",
    episodes: 1,
    rating: "8.4",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",
    description:
      "Two students discover that friendship and love can change the course of their lives.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 4,
    title: "Neon Warriors",
    genre: "Action",
    year: "2025",
    episodes: 1,
    rating: "8.8",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85",
    description:
      "In a futuristic city, elite warriors fight to save humanity from a mysterious threat.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 5,
    title: "Moonlit Academy",
    genre: "Fantasy",
    year: "2022",
    episodes: 1,
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
    description:
      "A magical academy hides secrets that only a brave new student can uncover.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 6,
    title: "The Lazy Hero",
    genre: "Comedy",
    year: "2021",
    episodes: 1,
    rating: "8.1",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
    description:
      "A hero who wants a quiet life is constantly dragged into hilarious adventures.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 7,
    title: "Ocean of Stars",
    genre: "Adventure",
    year: "2024",
    episodes: 1,
    rating: "8.6",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85",
    description:
      "A space crew searches for a legendary ocean hidden among the stars.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 8,
    title: "Silent Spring",
    genre: "Romance",
    year: "2020",
    episodes: 1,
    rating: "8.3",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85",
    description:
      "A quiet story about healing, friendship, and finding hope after difficult times.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 9,
    title: "One Piece",
    genre: "Adventure",
    year: "1999",
    episodes: 1,
    rating: "9.5",
    image:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85",
    description:
      "A pirate crew sails across dangerous seas in search of a legendary treasure.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  },
  {
    id: 10,
    title: "My Hero Academy",
    genre: "Action",
    year: "2016",
    episodes: 1,
    rating: "8.9",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=85",
    description:
      "Students train to become heroes while facing challenges that test their courage.",
    episodeVideos: [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    ]
  }
];

// ===============================
// ELEMENTS
// ===============================

const animeGrid = document.getElementById("animeGrid");
const emptyMessage = document.getElementById("emptyMessage");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

const genreList = document.getElementById("genreList");

const animeModal = document.getElementById("animeModal");
const videoModal = document.getElementById("videoModal");

const modalImage = document.getElementById("modalImage");
const modalGenre = document.getElementById("modalGenre");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalDescription = document.getElementById("modalDescription");
const modalWatchBtn = document.getElementById("modalWatchBtn");
const episodeList = document.getElementById("episodeList");

const videoTitle = document.getElementById("videoTitle");
const videoPlayer = document.getElementById("videoPlayer");

const closeModal = document.getElementById("closeModal");
const closeVideo = document.getElementById("closeVideo");

const heroWatchBtn = document.getElementById("heroWatchBtn");
const heroInfoBtn = document.getElementById("heroInfoBtn");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

let selectedGenre = "All";
let selectedAnime = null;

// ===============================
// RENDER ANIME CARDS
// ===============================

function renderAnime(animeList) {
  animeGrid.innerHTML = "";

  if (animeList.length === 0) {
    emptyMessage.classList.add("visible");
    return;
  }

  emptyMessage.classList.remove("visible");

  animeList.forEach((anime) => {
    const card = document.createElement("article");
    card.className = "anime-card";

    card.innerHTML = `
      <div class="anime-poster">
        <img
          src="${anime.image}"
          alt="${anime.title} poster"
          loading="lazy"
        >
        <span class="anime-rating">★ ${anime.rating}</span>
      </div>

      <div class="anime-info">
        <h3>${anime.title}</h3>
        <p>${anime.genre} • ${anime.year}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openAnimeDetails(anime);
    });

    animeGrid.appendChild(card);
  });
}

// ===============================
// FILTER ANIME
// ===============================

function filterAnime() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredAnime = animeData.filter((anime) => {
    const matchesGenre =
      selectedGenre === "All" || anime.genre === selectedGenre;

    const matchesSearch =
      anime.title.toLowerCase().includes(searchTerm) ||
      anime.genre.toLowerCase().includes(searchTerm);

    return matchesGenre && matchesSearch;
  });

  renderAnime(filteredAnime);
}

// ===============================
// OPEN ANIME DETAILS
// ===============================

function openAnimeDetails(anime) {
  selectedAnime = anime;

  modalImage.src = anime.image;
  modalImage.alt = `${anime.title} cover`;
  modalGenre.textContent = anime.genre;
  modalTitle.textContent = anime.title;
  modalMeta.textContent =
    `${anime.year} • ${anime.episodes} episode${anime.episodes !== 1 ? "s" : ""} • ★ ${anime.rating}`;
  modalDescription.textContent = anime.description;

  episodeList.innerHTML = "";

  for (let i = 1; i <= anime.episodes; i++) {
    const episodeButton = document.createElement("button");
    episodeButton.className = "episode-btn";
    episodeButton.textContent = `Episode ${i}`;

    episodeButton.addEventListener("click", () => {
      openEpisode(anime, i);
    });

    episodeList.appendChild(episodeButton);
  }

  animeModal.classList.add("active");
}

// ===============================
// OPEN VIDEO
// ===============================

function openEpisode(anime, episodeNumber) {
  const videoUrl = anime.episodeVideos[episodeNumber - 1];

  if (!videoUrl) {
    alert("This episode video is not available yet.");
    return;
  }

  videoTitle.textContent = `${anime.title} - Episode ${episodeNumber}`;
  videoPlayer.src = videoUrl;
  videoPlayer.load();

  animeModal.classList.remove("active");
  videoModal.classList.add("active");

  videoPlayer.play().catch(() => {
    // Some browsers require the user to press Play.
  });
}

// ===============================
// BUTTON EVENTS
// ===============================

searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("visible");

  if (searchPanel.classList.contains("visible")) {
    searchInput.focus();
  }
});

searchInput.addEventListener("input", filterAnime);

genreList.addEventListener("click", (event) => {
  const button = event.target.closest(".genre-btn");

  if (!button) return;

  document.querySelectorAll(".genre-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
  selectedGenre = button.dataset.genre;

  filterAnime();
});

modalWatchBtn.addEventListener("click", () => {
  if (selectedAnime) {
    openEpisode(selectedAnime, 1);
  }
});

closeModal.addEventListener("click", () => {
  animeModal.classList.remove("active");
});

closeVideo.addEventListener("click", () => {
  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.load();
  videoModal.classList.remove("active");
});

heroWatchBtn.addEventListener("click", () => {
  document.getElementById("anime").scrollIntoView({
    behavior: "smooth"
  });
});

heroInfoBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Close modal when clicking outside the box

animeModal.addEventListener("click", (event) => {
  if (event.target === animeModal) {
    animeModal.classList.remove("active");
  }
});

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoModal.classList.remove("active");
  }
});

// Close modals with Escape key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    animeModal.classList.remove("active");

    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoModal.classList.remove("active");
  }
});

// ===============================
// INITIAL LOAD
// ===============================

renderAnime(animeData);