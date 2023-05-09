"use strict";

const codeupExperience = document.querySelector('#codeup-experience');
const codeupExperienceContent = document.querySelector('#codeup-experience-content');
const codeupProjects = document.querySelector('#codeup-projects');
const codeupProjectsContent = document.querySelector('#codeup-projects-content');
const militaryExperience = document.querySelector('#military-experience');
const militaryExperienceContent = document.querySelector('#military-experience-content');

document.addEventListener('DOMContentLoaded', function () {
    codeupExperience.classList.add('active');
    codeupExperienceContent.style.display = 'block';
    codeupProjectsContent.style.display = 'none';
    militaryExperienceContent.style.display = 'none';
})

function switchActiveClassesExperienceSection(addActive, addBlock, removeActive, removeBlock, removeActive2, removeBlock2) {
    addActive.classList.add('active');
    addBlock.style.display = 'block';
    if (removeActive.classList.contains('active')) {
        removeActive.classList.remove('active');
    }
    if (removeActive2.classList.contains('active')) {
        removeActive2.classList.remove('active');
    }
    if (removeBlock.style.display === 'block') {
        removeBlock.style.display = 'none';
    }
    if (removeBlock2.style.display === 'block') {
        removeBlock2.style.display = 'none';
    }
}

codeupExperience.addEventListener('click', function () {
    switchActiveClassesExperienceSection(codeupExperience, codeupExperienceContent, codeupProjects, codeupProjectsContent, militaryExperience, militaryExperienceContent)
})

codeupProjects.addEventListener('click', function () {
    switchActiveClassesExperienceSection(codeupProjects, codeupProjectsContent, codeupExperience, codeupExperienceContent, militaryExperience, militaryExperienceContent)
})

militaryExperience.addEventListener('click', function () {
    switchActiveClassesExperienceSection(militaryExperience, militaryExperienceContent, codeupExperience, codeupExperienceContent, codeupProjects, codeupProjectsContent)
})

