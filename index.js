// Navbar function

document.addEventListener('DOMContentLoaded', function () {
    const navibarMenu = document.querySelector('.navibar-menu');
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = document.querySelector('.navibar').contains(event.target);
        const isClickInsideMenu = navibarMenu.contains(event.target);
        if (!isClickInsideNavbar && !isClickInsideMenu) {
            closeMenu();
        }
    });

    const links = document.querySelectorAll('.navibar-menu a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // event.preventDefault();
            const linkText = link.innerText;
            // handleLinkClick(linkText);
            closeMenu();
        });
    });
});

function toggleMenu() {
    const navibarMenu = document.querySelector('.navibar-menu');
    navibarMenu.classList.toggle('show');
}

function closeMenu() {
    const navibarMenu = document.querySelector('.navibar-menu');
    navibarMenu.classList.remove('show');
}

// function handleLinkClick(linkText) {
// Modify this function to perform actions on link click
// console.log('Link clicked:', linkText);
// For example, you can navigate to the href link.
// const hrefLink = linkText.toLowerCase(); // Assuming href links are in lowercase
// window.location.href = `#${hrefLink}`;
// You can also use other methods to navigate, depending on your requirements
// }

// End of Navbar function

// Mobile Navbar Script

// $(function () {
//     $('#ChangeToggle').click(function () {
//         $('#navbar-hamburger').toggleClass('hidden');
//         $('#navbar-close').toggleClass('hidden');
//     });
// });


// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

// End of Mobile Navbar Script

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

// End of Form Control Script



// Beginning of Catalog Items Function

function renderCatalogItems(sectionIndex) {
    const catalogItemsContainer = document.getElementById(`catalogItems${sectionIndex + 1}`);
    const section = catalogSections[sectionIndex];

    section.items.forEach((item, index) => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('catalog-item');

        // Populate the item details
        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.classList.add('item-image'); // Added class for styling
        itemContainer.appendChild(imageElement);

        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name;
        itemContainer.appendChild(nameElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        descriptionElement.classList.add('description'); // Added class for styling
        itemContainer.appendChild(descriptionElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${item.price}`;
        priceElement.classList.add('price'); // Added class for styling
        itemContainer.appendChild(priceElement);

        // Add a button to view details
        // const viewDetailsButton = document.createElement('button');
        // viewDetailsButton.textContent = 'View Details';

        // viewDetailsButton.classList.add('view-details-button'); // Added class for styling
        // viewDetailsButton.addEventListener('click', () => renderEnlargedForm(sectionIndex, index));
        // itemContainer.appendChild(viewDetailsButton);

        itemContainer.addEventListener('click', () => {
            goToEnlargedFormPage(item);
        });

        catalogItemsContainer.appendChild(itemContainer);
    });
}

function renderCatalogSections() {
    for (let i = 0; i < catalogSections.length; i++) {
        renderCatalogItems(i);
    }
}

// Function to navigate to the enlarged form page with item details
function goToEnlargedFormPage(item) {
    // Construct the URL for the enlarged form page with item details as parameters
    const url = `enlarged-form.html?name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`;

    // Navigate to the new page
    window.location.href = url;
}

// Call the function to render the catalog sections when the page loads
window.onload = renderCatalogSections;

// End of Catalog Items Function