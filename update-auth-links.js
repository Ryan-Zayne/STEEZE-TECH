const fs = require('fs');
const path = require('path');

// Function to update links in a file
function updateLinksInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace login.html with signin.html
        content = content.replace(/href="login\.html"/g, 'href="signin.html"');

        // Update any "Login & Register" text to "Sign In"
        content = content.replace(/Login & Register/g, 'Sign In');

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Get all HTML files in the current directory
const files = fs.readdirSync('.')
    .filter(file => file.endsWith('.html'));

// Update each file
files.forEach(file => {
    updateLinksInFile(file);
});