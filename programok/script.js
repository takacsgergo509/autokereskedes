// Adatbázis: 6 márka x 4 modell = 24 autó
const cars = [
    // --- SKODA ---
    {
        brand: "Skoda",
        title: "Skoda Superb",
        year: 2022,
        km: 45000,
        price: 11500000,
        image: "../képek/superb.jpg"
    },
    {
        brand: "Skoda",
        title: "Skoda Kodiaq",
        year: 2021,
        km: 62000,
        price: 10800000,
        image: "../képek/skoda.kodiak.avif"
    },
    {
        brand: "Skoda",
        title: "Skoda Octavia",
        year: 2020,
        km: 88000,
        price: 7200000,
        image: "https://via.placeholder.com/400x250?text=Skoda+Octavia"
    },
    {
        brand: "Skoda",
        title: "Skoda Felicia",
        year: 1999,
        km: 185000,
        price: 650000,
        image: "https://via.placeholder.com/400x250?text=Skoda+Felicia"
    },

    // --- MERCEDES ---
    {
        brand: "Mercedes",
        title: "Mercedes-Benz C-Osztály",
        year: 2021,
        km: 38000,
        price: 14500000,
        image: "https://via.placeholder.com/400x250?text=Mercedes+C-Class"
    },
    {
        brand: "Mercedes",
        title: "Mercedes-Benz E-Osztály",
        year: 2022,
        km: 29000,
        price: 19800000,
        image: "https://via.placeholder.com/400x250?text=Mercedes+E-Class"
    },
    {
        brand: "Mercedes",
        title: "Mercedes-Benz GLE SUV",
        year: 2023,
        km: 15000,
        price: 28900000,
        image: "https://via.placeholder.com/400x250?text=Mercedes+GLE"
    },
    {
        brand: "Mercedes",
        title: "Mercedes-AMG GT",
        year: 2020,
        km: 22000,
        price: 42000000,
        image: "https://via.placeholder.com/400x250?text=Mercedes+AMG+GT"
    },

    // --- VOLKSWAGEN ---
    {
        brand: "Volkswagen",
        title: "Volkswagen Golf VII",
        year: 2018,
        km: 110000,
        price: 5400000,
        image: "https://via.placeholder.com/400x250?text=VW+Golf"
    },
    {
        brand: "Volkswagen",
        title: "Volkswagen Passat B8",
        year: 2020,
        km: 75000,
        price: 8200000,
        image: "https://via.placeholder.com/400x250?text=VW+Passat"
    },
    {
        brand: "Volkswagen",
        title: "Volkswagen Tiguan",
        year: 2021,
        km: 50000,
        price: 9900000,
        image: "https://via.placeholder.com/400x250?text=VW+Tiguan"
    },
    {
        brand: "Volkswagen",
        title: "Volkswagen Touareg",
        year: 2022,
        km: 32000,
        price: 21500000,
        image: "https://via.placeholder.com/400x250?text=VW+Touareg"
    },

    // --- PORSCHE ---
    {
        brand: "Porsche",
        title: "Porsche 911 Carrera",
        year: 2022,
        km: 12000,
        price: 55000000,
        image: "https://via.placeholder.com/400x250?text=Porsche+911"
    },
    {
        brand: "Porsche",
        title: "Porsche Cayenne",
        year: 2021,
        km: 35000,
        price: 36000000,
        image: "https://via.placeholder.com/400x250?text=Porsche+Cayenne"
    },
    {
        brand: "Porsche",
        title: "Porsche Panamera",
        year: 2020,
        km: 48000,
        price: 32000000,
        image: "https://via.placeholder.com/400x250?text=Porsche+Panamera"
    },
    {
        brand: "Porsche",
        title: "Porsche Taycan",
        year: 2023,
        km: 8000,
        price: 44000000,
        image: "https://via.placeholder.com/400x250?text=Porsche+Taycan"
    },

    // --- AUDI ---
    {
        brand: "Audi",
        title: "Audi A4 Avant",
        year: 2019,
        km: 95000,
        price: 7800000,
        image: "https://via.placeholder.com/400x250?text=Audi+A4"
    },
    {
        brand: "Audi",
        title: "Audi A6 Sedan",
        year: 2021,
        km: 54000,
        price: 13900000,
        image: "https://via.placeholder.com/400x250?text=Audi+A6"
    },
    {
        brand: "Audi",
        title: "Audi Q7 quattro",
        year: 2020,
        km: 68000,
        price: 18500000,
        image: "https://via.placeholder.com/400x250?text=Audi+Q7"
    },
    {
        brand: "Audi",
        title: "Audi RS6 Avant",
        year: 2022,
        km: 19000,
        price: 41000000,
        image: "https://via.placeholder.com/400x250?text=Audi+RS6"
    },

    // --- OPEL ---
    {
        brand: "Opel",
        title: "Opel Astra K",
        year: 2019,
        km: 82000,
        price: 4200000,
        image: "https://via.placeholder.com/400x250?text=Opel+Astra"
    },
    {
        brand: "Opel",
        title: "Opel Corsa F",
        year: 2021,
        km: 30000,
        price: 4900000,
        image: "https://via.placeholder.com/400x250?text=Opel+Corsa"
    },
    {
        brand: "Opel",
        title: "Opel Insignia Grand Sport",
        year: 2020,
        km: 71000,
        price: 6800000,
        image: "https://via.placeholder.com/400x250?text=Opel+Insignia"
    },
    {
        brand: "Opel",
        title: "Opel Mokka",
        year: 2022,
        km: 21000,
        price: 7900000,
        image: "https://via.placeholder.com/400x250?text=Opel+Mokka"
    }
];

// Ár formázása (pl. 11500000 -> 11 500 000 Ft)
function formatPrice(price) {
    return price.toLocaleString('hu-HU') + ' Ft';
}

// Futásteljesítmény formázása
function formatKm(km) {
    return km.toLocaleString('hu-HU') + ' km';
}

// Autók megjelenítése a HTML-ben
function displayCars(carList) {
    const container = document.getElementById("carList");
    container.innerHTML = "";

    if (carList.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; margin-top: 2rem;">
            A megadott feltételekkel nem található autó.
        </p>`;
        return;
    }

    carList.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
            <img src="${car.image}" alt="${car.title}">
            <div class="car-info">
                <span class="car-brand">${car.brand}</span>
                <h3 class="car-title">${car.title}</h3>
                <div class="car-details">Évjárat: <strong>${car.year}</strong></div>
                <div class="car-details">Futott: <strong>${formatKm(car.km)}</strong></div>
                <div class="car-price">${formatPrice(car.price)}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Szűrés és rendezés logika
function filterCars() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const brandFilter = document.getElementById("brandFilter").value;
    const sortFilter = document.getElementById("sortFilter").value;

    // 1. Szűrés keresőszó és márka alapján
    let filtered = cars.filter(car => {
        const matchesSearch = car.title.toLowerCase().includes(searchInput);
        const matchesBrand = brandFilter === "all" || car.brand === brandFilter;
        return matchesSearch && matchesBrand;
    });

    // 2. Rendezés logika
    if (sortFilter === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortFilter === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortFilter === "year-desc") {
        filtered.sort((a, b) => b.year - a.year);
    }

    displayCars(filtered);
}

// Kezdő nézet betöltése
document.addEventListener("DOMContentLoaded", () => {
    displayCars(cars);
});