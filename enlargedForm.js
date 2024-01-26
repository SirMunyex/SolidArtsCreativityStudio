// Function to extract item details from the URL parameters
function getItemDetailsFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);

    return {
        name: urlParams.get('name') || '',
        description: urlParams.get('description') || '',
        price: urlParams.get('price') || '',
        image: urlParams.get('image') || '',
    };
}

// Function to render the enlarged form with item details
function renderEnlargedForm() {
    const enlargedFormContainer = document.getElementById('enlargedForm');
    const enlargedFormImage = document.getElementById('enlargedFormImage');
    const enlargedFormDetails = document.getElementById('enlargedFormDetails');
    const itemDetails = getItemDetailsFromUrl();

    // Populate the enlarged form with item details
    const imageElement = document.createElement('img');
    imageElement.src = decodeURIComponent(itemDetails.image);
    imageElement.classList.add('enlarged-image'); // Added class for styling
    enlargedFormImage.appendChild(imageElement);

    const nameElement = document.createElement('h2');
    nameElement.textContent = decodeURIComponent(itemDetails.name);
    nameElement.classList.add('enlarged-name'); // Added class for styling
    enlargedFormDetails.appendChild(nameElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = decodeURIComponent(itemDetails.description);
    descriptionElement.classList.add('enlarged-description'); // Added class for styling
    enlargedFormDetails.appendChild(descriptionElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: ${decodeURIComponent(itemDetails.price)}`;
    priceElement.classList.add('enlarged-price'); // Added class for styling
    enlargedFormDetails.appendChild(priceElement);

    // Add a button for requesting a quote
    const quoteButton = document.createElement('button');
    quoteButton.textContent = 'Request a Quote';
    quoteButton.classList.add('quote-button'); // Added class for styling
    quoteButton.addEventListener('click', () => {
        // Implement logic for handling the quote request
        document.location.href = './index.html#Contact';
    });
    enlargedFormDetails.appendChild(quoteButton);
}

// Call the function to render the enlarged form when the page loads
window.onload = renderEnlargedForm;