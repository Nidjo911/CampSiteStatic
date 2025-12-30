document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    const sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);
    
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
    const statusClass = camp.active ? 'status-active' : 'status-inactive';
    const statusIcon = camp.active ? '🏖️ Active' : '⛵ Inactive';
    
    return `
        <div class="col s12 m6" style="margin-bottom: 40px;">
            <div class="card camp-card" onclick="openCampModal('${camp.name}', '${camp.description}', ${campNumber})">
                <div class="card-image">
                    <img src="https://picsum.photos/seed/camp${campNumber}/400/200.jpg" alt="${camp.name} seaside camping">
                    <span class="card-title">${camp.name}</span>
                </div>
                <div class="card-content">
                    <p>${camp.description}</p>
                    <p>Capacity: ${camp.people_max_capacity} people</p>
                    <p>Seaside Location</p>
                    <p>
                        Status: 
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
                <img src="https://picsum.photos/seed/camp${campNumber}-1/600/400.jpg" alt="${name} view 1">
                <img src="https://picsum.photos/seed/camp${campNumber}-2/600/400.jpg" alt="${name} view 2">
                <img src="https://picsum.photos/seed/camp${campNumber}-3/600/400.jpg" alt="${name} view 3">
            </div>
            <p>${description}</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
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
