const fs = require('fs');
const path = require('path');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const projectName = packageJson.name;

const indexPath = path.join(process.cwd(), projectName, 'index.html');

// Read the contents of index.html
fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Add PHP code at the top
    const phpCode = `<?php require_once($_SERVER['DOCUMENT_ROOT'].'/kowboykit/includes/money.php'); ?>\n`;
    const updatedContent = phpCode + data;

    // Write the updated content to index.php
    fs.writeFile(path.join(process.cwd(), projectName, 'index.php'), updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Successfully created index.php');

        // Delete the original index.html
        fs.unlink(indexPath, (err) => {
            if (err) {
                console.error('Error deleting index.html:', err);
                return;
            }
            console.log('Successfully deleted index.html');
        });
    });
});