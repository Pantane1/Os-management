// Simple interactive addition – console greeting and dynamic year.
(function() {
    console.log('🚧 OS API Explorer loaded · based on OS hierarchy diagram');

    // Optional: update footer with current year (just for a bit of life)
    const yearSpan = document.getElementById('year-message');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `✶ hover cards for a subtle glow ✶ · ${currentYear}`;
    }

    // Extra: clicking on any card logs its category (just for fun)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            console.log(`📌 Clicked on ${category} category`);
        });
    });
})();
