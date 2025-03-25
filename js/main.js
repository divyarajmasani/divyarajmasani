// This file contains the JavaScript for the main index.html page.
// It may include functionality such as event listeners or dynamic content loading.

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project 1', url: 'packages/project-1/index.html' },
        { name: 'Project 2', url: 'packages/project-2/index.html' },
        { name: 'Project 3', url: 'packages/project-3/index.html' }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = project.url;
        link.textContent = project.name;
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});