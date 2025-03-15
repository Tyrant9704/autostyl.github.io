function toggleAccordion(sectionId) {
    var content = document.getElementById(sectionId);
    
    // Jeśli treść jest już widoczna, ukrywamy ją
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        // Ukrywamy wszystkie inne zakładki
        var allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(function(otherContent) {
            otherContent.classList.remove('show');
        });
        
        // Pokazujemy wybraną zakładkę
        content.classList.add('show');
    }
}
