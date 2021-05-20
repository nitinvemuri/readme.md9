const fs = require('fs');

// Returns a license badge based on which license is used
function renderLicenseBadge(data) {
  const selectLice = data.license[0];
  let thisLice = " "
  if (selectLice === 'MIT') {
    thisLice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
   if (selectLice === 'GNU General Public') {
    thisLice = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (selectLice === 'Apache') {
    thisLice = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (selectLice === 'Unlicense') {
    thisLice = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  };
  if (selectLice === ' ') {
    thisLice = `" "`
  };
 return thisLice;
};

// Creates the markdown for README
function generateMarkdown(data) {  
  return `# ${data.title}

  
  ${renderLicenseBadge(data)}
  # Table of Contents 
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Steps](#steps)
  * [Contact](#contact)
  * [RepoLink](#RepoLink)
  * [DirectLink](#DirectLink)

  # Description
  ${data.description}

  # Installation
  The following must be installed or linked in order to run the application properly: ${data.installation}
  
  # Usage
  ​${data.usage}
 
  # License
  This project is licensed under the ${data.license} license.
  
  # Contributing
  ​Contributors: ${data.contributions}
  
  # Steps
  ${data.steps}
  
  # Contact
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.


  # RepoLink
  Repo Link: https://github.com/${data.username}


  # DirectLink
  Direct Link: https://github.com/${data.username}/${data.title}
`;
}

module.exports = generateMarkdown;