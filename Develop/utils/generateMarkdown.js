// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
}

// Returns license in table of contents
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)

    Covered under the following license:

    ${renderLicenseLink(license)}
      `;
    } else {
      return '';
    }
}

// Function to return contributors
function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  I will not be accepting help from contributors.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}
  
  ## [Questions](#table-of-contents)

  Contact me:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;