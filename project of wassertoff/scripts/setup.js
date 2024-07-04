const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to initialize configuration file
function initConfigFile() {
  const configFile = path.resolve(__dirname, '../config.json');
  const defaultConfig = {
    loadBalancerPort: 3000,
    servers: [
      'http://localhost:4000',
      'http://localhost:4001',
      'http://localhost:4002'
    ],
    queueStrategy: 'FIFO'
  };

  if (!fs.existsSync(configFile)) {
    fs.writeFileSync(configFile, JSON.stringify(defaultConfig, null, 2));
    console.log('Config file created successfully.');
  } else {
    console.log('Config file already exists.');
  }
}

// Function to install npm dependencies
function installDependencies() {
  try {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
  } catch (error) {
    console.error('Error installing dependencies:', error);
    process.exit(1);
  }
}

// Main function to execute setup tasks
function main() {
  console.log('Starting setup process...');

  // Initialize configuration file
  initConfigFile();

  // Install npm dependencies
  installDependencies();

  console.log('Setup completed successfully.');
}

// Run the main function
main();
