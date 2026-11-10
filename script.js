
/* =========================
   ALBUM DATABASE
========================= */

const albums = {

    // ALBUM 1: FAMILY MOMENTS
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
            "images/family-11.jpg",
            "images/family-12.jpeg",
            "images/family-13.jpeg",
            "images/family-14.jpeg",
            "images/family-15.jpeg",
            "images/family-16.jpeg",
            "images/family-17.jpeg",
            "images/family-18.jpeg",
            "images/family-19.jpeg",
            "images/family-20.jpeg",
            "images/family-21.jpeg",
            "images/family-22.jpeg",
            "images/family-23.jpeg",
            "images/family-24.jpeg"
        ]
    },


    // ALBUM 2: OUR JOURNEY
    journey: {
        title: "Our Journey",
        photos: [
            "images/family-25.jpeg",
            "images/family-26.jpeg",
            "images/family-27.jpeg",
            "images/family-28.jpeg",
            "images/family-29.jpeg",
            "images/family-30.jpeg"
        ]
    },


    // ALBUM 3: SPECIAL DAYS
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

    // Periksa apakah album tersedia
    if (!album) {

        console.error("Album tidak ditemukan:", albumName);

        return;

    }


    // Ambil elemen HTML
    const albumTitle = document.getElementById("albumTitle");

    const photoGrid = document.getElementById("photoGrid");


    // Tampilkan judul album
    albumTitle.textContent = album.title;

    // Bersihkan foto sebelumnya
    photoGrid.innerHTML = "";


    // Jika album belum memiliki foto
    if (album.photos.length === 0) {

        photoGrid.innerHTML = `
            <p class="empty-album">
                No memories added yet.
            </p>
        `;

    } else {

        // Tampilkan seluruh foto dalam album
        album.photos.forEach((photo, index) => {

            const item = document.createElement("div");

            item.className = "photo-placeholder";


            // Buat elemen gambar
            const img = document.createElement("img");

            img.src = photo;

            img.alt = `${album.title} - Photo ${index + 1}`;

            img.className = "family-photo";

            img.loading = "lazy";


            // Buka foto ketika diklik
            img.addEventListener("click", function () {

                openPhoto(photo);

            });


            // Masukkan gambar ke dalam grid
            item.appendChild(img);

            photoGrid.appendChild(item);

        });

    }


    // Sembunyikan halaman lain
    hideAllPages();

    // Tampilkan halaman album
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


    // Masukkan foto ke Lightbox
    lightboxImage.src = photoSrc;

    // Tampilkan Lightbox
    lightbox.hidden = false;

    // Kunci scroll halaman belakang
    document.body.style.overflow = "hidden";

}


function closePhoto() {

    const lightbox = document.getElementById("photoLightbox");

    const lightboxImage = document.getElementById("lightboxImage");


    // Sembunyikan Lightbox
    lightbox.hidden = true;

    // Kosongkan gambar
    lightboxImage.src = "";

    // Aktifkan kembali scroll halaman
    document.body.style.overflow = "";

}


/* =========================
   CLOSE LIGHTBOX
========================= */

// Tutup menggunakan tombol Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});


// Tutup ketika area luar foto diklik
document.addEventListener("click", function(event) {

    const lightbox = document.getElementById("photoLightbox");

    if (event.target === lightbox) {

        closePhoto();

    }

});
