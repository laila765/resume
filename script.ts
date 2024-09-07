// Toggle visibility of the Skills section
const toggleButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skills')?.querySelector('ul');

toggleButton?.addEventListener('click', () => {
    if (skillsSection?.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleButton.textContent = "Hide Skills";
    } else {
        skillsSection?.classList.add('hidden');
        toggleButton.textContent = "Show Skills";
    }
});
