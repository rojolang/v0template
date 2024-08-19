const { execSync } = require('child_process');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const projectName = packageJson.name;

try {
    // Create a new repository on GitHub
    execSync(`gh repo create ${projectName} --public -y`);
    console.log(`GitHub repository '${projectName}' created successfully.`);

    // Initialize git, add all files, and make the first commit
    execSync('git init');
    execSync('git add .');
    execSync('git commit -m "Initial commit"');

    // Add the GitHub repository as a remote and push
    execSync(`git remote add origin https://github.com/rojolang/${projectName}.git`);
    execSync('git push -u origin main');

    console.log('Project successfully pushed to GitHub.');
} catch (error) {
    console.error('An error occurred:', error.message);
}