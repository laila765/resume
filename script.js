var _a;
// Toggle visibility of the Skills section
var toggleButton = document.getElementById('toggleSkills');
var skillsSection = (_a = document.getElementById('skills')) === null || _a === void 0 ? void 0 : _a.querySelector('ul');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.classList.add('hidden');
        toggleButton.textContent = "Show Skills";
    }
});
