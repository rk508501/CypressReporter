const fs = require('fs');
const path = require('path');
const glob = require('glob');

function listSpecs(projectPath) {
  const specPattern = '**/*.cy.ts';
  const specs = glob.sync(specPattern, { cwd: projectPath });
  const relativeSpecs = specs.map((specPath) => path.relative(projectPath, specPath));
  return relativeSpecs.join(', ');
}

const projectPath = process.cwd();
const listOfSpecs = listSpecs(projectPath);
console.log(listOfSpecs);

