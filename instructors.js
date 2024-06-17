document.addEventListener('DOMContentLoaded', function() {
    const instructors = [
        {
            name: 'Instructor 1',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
            image: 'images/brooke-cagle-LnT_OqSf6Bs-unsplash.jpg'
        },
        {
            name: 'Instructor 2',
            bio: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.',
            image: 'images/brooke-cagle-LnT_OqSf6Bs-unsplash.jpg'
        },
        // Add more instructors here
    ];

    const instructorsList = document.getElementById('instructors-list');

    instructors.forEach(instructor => {
        const card = document.createElement('div');
        card.classList.add('instructor-card');

        const img = document.createElement('img');
        img.src = instructor.image;
        img.alt = instructor.name;

        const name = document.createElement('h2');
        name.textContent = instructor.name;

        const bio = document.createElement('p');
        bio.textContent = instructor.bio;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(bio);

        instructorsList.appendChild(card);
    });
});
