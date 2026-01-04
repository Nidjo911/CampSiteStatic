// Dummy data for testing purposes
const DUMMY_CAMPS = [
    {
        'name': {
            'en': 'Seaside Paradise Camp',
            'de': 'Meeresparadies Camping',
            'hr': 'Kamp na morskom raju'
        },
        'description': {
            'en': 'Beachfront camping with stunning ocean views and direct beach access',
            'de': 'Camping am Strand mit atemberaubendem Meerblick und direktem Strandzugang',
            'hr': 'Kampiranje na plaži s prekrasnim pogledom na more i izravnim pristupom plaži'
        },
        'people_max_capacity': 50,
        'active': true
    },
    {
        'name': {
            'en': 'Coastal Pines Retreat',
            'de': 'Küstenkiefer-Rückzugsort',
            'hr': 'Obalni borovi povlačenje'
        },
        'description': {
            'en': 'Peaceful camping among pine trees just steps from the shore',
            'de': 'Ruhiges Camping unter Kiefern nur wenige Schritte vom Ufer entfernt',
            'hr': 'Mirno kampiranje među borovima samo nekoliko koraka od obale'
        },
        'people_max_capacity': 30,
        'active': true
    },
    {
        'name': {
            'en': 'Marina Bay Campground',
            'de': 'Marina-Bucht Campingplatz',
            'hr': 'Kamp u zaljevu marine'
        },
        'description': {
            'en': 'Full-service camping site with boat docking and fishing facilities',
            'de': 'Voll ausgestatteter Campingplatz mit Bootsanlegestelle und Angelmöglichkeiten',
            'hr': 'Kamp s potpunom uslugom s vezovima za brodice i ribolovnim objektima'
        },
        'people_max_capacity': 75,
        'active': false
    },
    {
        'name': {
            'en': 'Sunset Beach Resort',
            'de': 'Sonnenuntergang-Strandresort',
            'hr': 'Odmorište na plaži zalaska sunca'
        },
        'description': {
            'en': 'Luxury camping experience with premium amenities and beachfront dining',
            'de': 'Luxus-Camping-Erlebnis mit erstklassigen Annehmlichkeiten und Strandgastronomie',
            'hr': 'Luksuzno iskustvo kampiranja s premium sadržajima i restoranom na plaži'
        },
        'people_max_capacity': 40,
        'active': true
    },
    {
        'name': {
            'en': 'Harbor View Camp',
            'de': 'Hafenblick-Camping',
            'hr': 'Kamp s pogledom na luku'
        },
        'description': {
            'en': 'Scenic camping overlooking the harbor with easy water access',
            'de': 'Malergisches Camping mit Blick auf den Hafen und einfachem Wasserzugang',
            'hr': 'Prekrasno kampiranje s pogledom na luku i lakim pristupom vodi'
        },
        'people_max_capacity': 25,
        'active': true
    },
    {
        'name': {
            'en': 'Ocean Breeze Camping',
            'de': 'Meeresbrise Camping',
            'hr': 'Kamp morske povjetarine'
        },
        'description': {
            'en': 'Family-friendly camping site with playground and beach activities',
            'de': 'Familienfreundlicher Campingplatz mit Spielplatz und Strandaktivitäten',
            'hr': 'Obiteljski prijateljski kamp s igralištem i aktivnostima na plaži'
        },
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
