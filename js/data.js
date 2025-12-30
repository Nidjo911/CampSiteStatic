// Dummy data for testing purposes
const DUMMY_CAMPS = [
    {
        'name': 'Seaside Paradise Camp',
        'description': 'Beachfront camping with stunning ocean views and direct beach access',
        'people_max_capacity': 50,
        'active': true
    },
    {
        'name': 'Coastal Pines Retreat',
        'description': 'Peaceful camping among pine trees just steps from the shore',
        'people_max_capacity': 30,
        'active': true
    },
    {
        'name': 'Marina Bay Campground',
        'description': 'Full-service camping site with boat docking and fishing facilities',
        'people_max_capacity': 75,
        'active': false
    },
    {
        'name': 'Sunset Beach Resort',
        'description': 'Luxury camping experience with premium amenities and beachfront dining',
        'people_max_capacity': 40,
        'active': true
    },
    {
        'name': 'Harbor View Camp',
        'description': 'Scenic camping overlooking the harbor with easy water access',
        'people_max_capacity': 25,
        'active': true
    },
    {
        'name': 'Ocean Breeze Camping',
        'description': 'Family-friendly camping site with playground and beach activities',
        'people_max_capacity': 60,
        'active': false
    }
];

// Function to get camps from localStorage or use dummy data
function getCamps() {
    const storedCamps = localStorage.getItem('camps');
    if (storedCamps) {
        return JSON.parse(storedCamps);
    }
    return DUMMY_CAMPS;
}

// Function to save camps to localStorage
function saveCamps(camps) {
    localStorage.setItem('camps', JSON.stringify(camps));
}
