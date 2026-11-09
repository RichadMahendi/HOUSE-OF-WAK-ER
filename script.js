
/* =========================
   ALBUM DATABASE
========================= */

const albums = {
    family: {
        title: "Family Moments",
        photos: [
            "images/family-01.jpg",
            "images/family-02.jpg",
            "images/family-03.jpg",
            "images/family-04.jpg",
            "images/family-05.jpg",
            "images/family-06.jpg",
            "images/family-07.jpg",
            "images/family-08.jpg",
            "images/family-09.jpg",
            "images/family-10.jpg",
            "images/family-11.jpg"
        ]
    },

    journey: {
        title: "Our Journey",
        photos: []
    },

    special: {
        title: "Special Days",
        photos: []
    }
};


/* =========================
   PAGE NAVIGATION
========================= */

function hideAllPages() {
    document.getElementById("homePage").hidden = true;
    document.getElementById("galleryPage").hidden = true;
    document.getElementById("albumView").hidden = true;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showHome() {
    hideAllPages();

    document.getElementById("homePage").hidden = false;

    scrollToTop();
}

function showGallery() {
    hideAllPages();

    document.getElementById("galleryPage").hidden = false;

    scrollToTop();
}


/* =========================
   OPEN ALBUM
========================= */

function openAlbum(albumName) {
    const album = albums[albumName];

    if (!album) {
        console.error("Album tidak ditemukan:", albumName);
        return;
    }

    const albumTitle = document.getElementById("albumTitle");
    const photoGrid = document.getElementById("photoGrid");

    albumTitle.textContent = album.title;
    photoGrid.innerHTML = "";

    if (album.photos.length === 0) {
        photoGrid.innerHTML = `
            <p class="empty-album">
                No memories added yet.
            </p>
        `;
    } else {
        album.photos.forEach((photo, index) => {
            const item = document.createElement("div");
            item.className = "photo-placeholder";

            const img = document.createElement("img");

            img.src = photo;
            img.alt = `${album.title} - Photo ${index + 1}`;
            img.className = "family-photo";
            img.loading = "lazy";

            img.addEventListener("click", function () {
                openPhoto(photo);
            });

            item.appendChild(img);
            photoGrid.appendChild(item);
        });
    }

    hideAllPages();

    document.getElementById("albumView").hidden = false;

    scrollToTop();
}


/* =========================
   BACK TO GALLERY
========================= */

function closeAlbum() {
    showGallery();
}


/* =========================
   PHOTO LIGHTBOX
========================= */

function openPhoto(photoSrc) {
    const lightbox = document.getElementById("photoLightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = photoSrc;
    lightbox.hidden = false;

    document.body.style.overflow = "hidden";
}

function closePhoto() {
    const lightbox = document.getElementById("photoLightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightbox.hidden = true;
    lightboxImage.src = "";

    document.body.style.overflow = "";
}


/* =========================
   CLOSE LIGHTBOX
========================= */

// Close with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePhoto();
    }
});

// Close when clicking outside the photo
document.addEventListener("click", function(event) {
    const lightbox = document.getElementById("photoLightbox");

    if (event.target === lightbox) {
        closePhoto();
    }
});
