// function to generate markdown for README
// Images and URLs grabbed from - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function generateMarkdown(data) {
  var license = "";
  var bImg = "";
  var bURL = "";
  // the license choice
  // Images and URLs grabbed from - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch (data.license) {
    case "Apache":
      license = "";
      bImg = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      bURL = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "ISC":
      license = "ISC";
      bImg = "https://img.shields.io/badge/License-ISC-blue.svg";
      bURL = "https://opensource.org/licenses/ISC";
      break;

    case "Mozilla":
      license = "MPL 2.0";
      bImg = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      bURL = "https://opensource.org/licenses/MPL-2.0";
      break;

    case "Perl":
      license = "Artistic-2.0";
      bImg = "https://img.shields.io/badge/License-Perl-0298c3.svg";
      bURL = "https://opensource.org/licenses/Artistic-2.0";
      break;

    case "Unlicense":
      license = "Unlicense";
      bImg = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      bURL = "http://unlicense.org/";
      break;
  }

  return `#${data.title}
  #Discription

  ${data.descript}

  #Table of Contents 

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  #Installation

  ${data.install}

  #Usage

  ${data.use}

  #License

  [![License: ${license}](${bImg})](${bURL})

  #Contributing

  ${data.credit}

  #Tests

  ${data.test}

  #Questions

  If you have any additional questions,
  Please reach out to me by email or through Github

  Email: ${data.email}

  Github: ${data.git}
`;
}

module.exports = generateMarkdown;
