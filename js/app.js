document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
    
    // Initialize dropdowns
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, {
        coverTrigger: false,
        constrainWidth: false
    });
    
    // Load and display camps
    loadCamps();
});

function loadCamps() {
    const camps = getCamps();
    const container = document.getElementById('camps-container');
    const noCampsMessage = document.getElementById('no-camps');
    
    if (camps.length === 0) {
        container.style.display = 'none';
        noCampsMessage.style.display = 'block';
    } else {
        container.style.display = 'flex';
        noCampsMessage.style.display = 'none';
        displayCamps(camps);
    }
}

function displayCamps(camps) {
    const container = document.getElementById('camps-container');
    container.innerHTML = '';
    
    camps.forEach((camp, index) => {
        const campCard = createCampCard(camp, index + 1);
        container.innerHTML += campCard;
    });
}

function createCampCard(camp, campNumber) {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Get translations for labels
    const translations = {
        en: { capacity: 'Capacity', seasideLocation: 'Seaside Location', status: 'Status', active: '🏖️ Active', inactive: '⛵ Inactive' },
        de: { capacity: 'Kapazität', seasideLocation: 'Meereslage', status: 'Status', active: '🏖️ Aktiv', inactive: '⛵ Inaktiv' },
        hr: { capacity: 'Kapacitet', seasideLocation: 'Lokacija na moru', status: 'Status', active: '🏖️ Aktivan', inactive: '⛵ Neaktivan' }
    };
    
    const t = translations[currentLang] || translations.en;
    const statusClass = camp.active ? 'status-active' : 'status-inactive';
    const statusIcon = camp.active ? t.active : t.inactive;
    const campName = camp.name[currentLang] || camp.name.en || camp.name;
    const campDescription = camp.description[currentLang] || camp.description.en || camp.description;
    
    return `
        <div class="col s12 m6" style="margin-bottom: 40px;">
            <div class="card camp-card" onclick="openCampModal('${campName}', '${campDescription}', ${campNumber})">
                <div class="card-image">
                    <img src="https://picsum.photos/seed/camp${campNumber}/400/200.jpg" alt="${campName} seaside camping">
                    <span class="card-title">${campName}</span>
                </div>
                <div class="card-content">
                    <p style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 15px;">${campDescription}</p>
                    <p style="font-size: 1.1rem; font-weight: 500;">${t.capacity}: ${camp.people_max_capacity} people</p>
                    <p style="font-size: 1.1rem; font-weight: 500;">${t.seasideLocation}</p>
                    <p style="font-size: 1.1rem; font-weight: 500;">
                        ${t.status}: 
                        <span class="${statusClass}">${statusIcon}</span>
                    </p>
                </div>
            </div>
        </div>
    `;
}

function openCampModal(name, description, campNumber) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h4>${name}</h4>
            <div class="modal-images">
                <img src="https://picsum.photos/seed/camp${campNumber}-1/600/400.jpg" alt="${name} view 1" onclick="enlargeImage(this.src)">
                <img src="https://picsum.photos/seed/camp${campNumber}-2/600/400.jpg" alt="${name} view 2" onclick="enlargeImage(this.src)">
                <img src="https://picsum.photos/seed/camp${campNumber}-3/600/400.jpg" alt="${name} view 3" onclick="enlargeImage(this.src)">
            </div>
            <p>${description}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
                <i class="material-icons left">close</i>Close
            </a>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Initialize Materialize modal
    const modalInstance = M.Modal.init(modal);
    modalInstance.open();
    
    // Remove modal from DOM when closed
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
            modalInstance.destroy();
            document.body.removeChild(modal);
        }
    });
}

function enlargeImage(src) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-preview-overlay';
    
    // Create enlarged image
    const enlargedImg = document.createElement('img');
    enlargedImg.src = src.replace('/600/400', '/1200/800'); // Get higher resolution version
    
    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);
    
    // Close on click
    overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function changeLanguage(lang) {
    // Language translations
    const translations = {
        en: {
            home: 'Home',
            contact: 'Contact',
            language: 'Language',
            campingCroatia: 'Camping Croatia',
            allCamps: 'All Camps',
            noCamps: 'No seaside camps found',
            checkBack: 'Check back soon for new coastal camping destinations',
            amenities: 'Camp Amenities',
            swimmingPool: 'Swimming Pool',
            kitchen: 'Kitchen Facilities',
            wifi: 'WiFi Access',
            location: 'Location',
            locationDesc: 'Beautiful seaside camping locations along the Croatian coast',
            address: 'Address',
            contactInfo: 'Contact',
            capacity: 'Capacity',
            seasideLocation: 'Seaside Location',
            status: 'Status',
            active: '🏖️ Active',
            inactive: '⛵ Inactive'
        },
        de: {
            home: 'Startseite',
            contact: 'Kontakt',
            language: 'Sprache',
            campingCroatia: 'Camping Kroatien',
            allCamps: 'Alle Campingplätze',
            noCamps: 'Keine Campingplätze am Meer gefunden',
            checkBack: 'Schauen Sie bald wieder für neue Küsten-Campingziele vorbei',
            amenities: 'Camping-Annehmlichkeiten',
            swimmingPool: 'Schwimmbad',
            kitchen: 'Kücheneinrichtungen',
            wifi: 'WLAN-Zugang',
            location: 'Standort',
            locationDesc: 'Wunderschöne Campingplätze an der kroatischen Küste',
            address: 'Adresse',
            contactInfo: 'Kontakt',
            capacity: 'Kapazität',
            seasideLocation: 'Meereslage',
            status: 'Status',
            active: '🏖️ Aktiv',
            inactive: '⛵ Inaktiv'
        },
        hr: {
            home: 'Početna',
            contact: 'Kontakt',
            language: 'Jezik',
            campingCroatia: 'Kampiranje Hrvatska',
            allCamps: 'Svi kampovi',
            noCamps: 'Nema pronađenih kampova na moru',
            checkBack: 'Pogledajte uskoro za nova obalna kampiranja',
            amenities: 'Pogodnosti kampiranja',
            swimmingPool: 'Bazen',
            kitchen: 'Kuhinjski objekti',
            wifi: 'WiFi pristup',
            location: 'Lokacija',
            locationDesc: 'Prekrasne lokacije za kampiranje uz hrvatsku obalu',
            address: 'Adresa',
            contactInfo: 'Kontakt',
            capacity: 'Kapacitet',
            seasideLocation: 'Lokacija na moru',
            status: 'Status',
            active: '🏖️ Aktivan',
            inactive: '⛵ Neaktivan'
        }
    };
    
    const t = translations[lang];
    if (!t) return;
    
    // Update navigation
    document.querySelector('a[href="#home"] i').nextSibling.textContent = ` ${t.home}`;
    document.querySelector('a[href="#contact"] i').nextSibling.textContent = ` ${t.contact}`;
    document.querySelector('a.dropdown-trigger i.left').nextSibling.textContent = ` ${t.language}`;
    
    // Update main content
    const campingText = document.querySelector('.recolor-croatia');
    if (campingText) campingText.textContent = t.campingCroatia;
    
    const allCampsTitle = document.querySelector('h4.center-align');
    if (allCampsTitle) allCampsTitle.textContent = t.allCamps;
    
    // Update footer
    const footerTitle = document.querySelector('#contact h4');
    if (footerTitle) footerTitle.textContent = t.location;
    
    const footerDesc = document.querySelector('#contact p');
    if (footerDesc) footerDesc.textContent = t.locationDesc;
    
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
    
    // Reload camps to update language
    loadCamps();
    
    // Show notification
    M.toast({html: `Language changed to ${lang.toUpperCase()}`, classes: 'rounded'});
}
