$(function () {
    $('#ChangeToggle').click(function () {
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden');
    });
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Form Control Script

document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const fileListDiv = document.getElementById('fileList');

    fileInput.addEventListener('change', updateFileList);

    function updateFileList() {
        const files = fileInput.files;
        fileListDiv.innerHTML = '';

        if (files.length > 0) {
            const fileList = document.createElement('ul');
            for (let i = 0; i < files.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = files[i].name;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeFile(i);
                });

                listItem.appendChild(removeButton);
                fileList.appendChild(listItem);
            }

            fileListDiv.appendChild(fileList);
        }
    }

    function removeFile(index) {
        const files = fileInput.files;
        const newFiles = Array.from(files);
        newFiles.splice(index, 1);

        // Create a new FileList and update the input element
        const newFileList = new DataTransfer();
        newFiles.forEach(file => newFileList.items.add(file));

        fileInput.files = newFileList.files;
        updateFileList();
    }
})