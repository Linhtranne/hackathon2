var projects = [];  
function displayProjects() {
    var tableBody = document.getElementById('projectTableBody');
    tableBody.innerHTML = '';

    projects.forEach(function(project, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${project.projectName}</td>
            <td><img src="${project.imageUrl}" alt="Project Image"></td>
            <td><a href="${project.link}" target="_blank">${project.link}</a></td>
            <td>${project.tags}</td>
            <td>
                <button class="edit" onclick="editProject(${index})">Edit</button>
                <button class="delete" onclick="deleteProject(${index})">Delete</button>
            </td>
        `;
    });
}
function addProject() {
    var projectName = document.getElementById('projectName').value;
    var imageUrl = document.getElementById('imageUrl').value;
    var link = document.getElementById('link').value;
    var tags = document.getElementById('tags').value;

    if (projectName && imageUrl && link && tags) {
        var project = {
            projectName: projectName,
            imageUrl: imageUrl,
            link: link,
            tags: tags
        };

        projects.push(project);
        displayProjects();
        document.getElementById('addProjectForm').reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin dự án.');
    }
}
function editProject(index) {
    var project = projects[index];
    document.getElementById('projectName').value = project.projectName;
    document.getElementById('imageUrl').value = project.imageUrl;
    document.getElementById('link').value = project.link;
    document.getElementById('tags').value = project.tags;

    projects.splice(index, 1);
    displayProjects();
    document.getElementById('addProjectForm').scrollIntoView();
}
function deleteProject(index) {
    projects.splice(index, 1);
    displayProjects();
}
window.addEventListener('storage', function (event) {
    if (event.key === 'updatedData') {
        let updatedData = JSON.parse(localStorage.getItem('updatedData'));
        updatePageData(updatedData);
    }
});
function updatePageData(updatedProjects) {
    displayProjects(updatedProjects);
}

