// Initialize the like count
let likeCount = 0;

// Get references to the DOM elements
const likeCountDisplay = document.getElementById('likeCount');
const likeButton = document.getElementById('likeButton');

// Function to update the like count display
function updateLikeDisplay() {
    likeCountDisplay.textContent = likeCount;
}

// Event listener for the like button
likeButton.addEventListener('click', function() {
    // Increment the like count
    likeCount++;
    
    // Update the displayed like count
    updateLikeDisplay();
});
