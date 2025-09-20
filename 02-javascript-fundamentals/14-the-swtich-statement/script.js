// Select all flashcards
const cards = document.querySelectorAll('.flashcard');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle 'active' class on click
        card.classList.toggle('active');
    });
});
