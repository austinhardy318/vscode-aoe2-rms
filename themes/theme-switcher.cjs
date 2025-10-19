#!/usr/bin/env node

/**
 * AoE2 RMS Theme Switcher
 *
 * This script helps test different themes by opening VS Code
 * with the specified theme applied to RMS files.
 */

const { execSync } = require('child_process');
const fs = require('fs');

const themes = [
	'AoE2 RMS Dark',
	'AoE2 RMS Light',
	'AoE2 RMS Vibrant',
	'AoE2 RMS Monokai',
	'AoE2 RMS Cursor Monokai',
];

function showUsage() {
	console.log('AoE2 RMS Theme Switcher');
	console.log('');
	console.log('Usage: node theme-switcher.js [theme-name] [file.rms]');
	console.log('');
	console.log('Available themes:');
	themes.forEach((theme, index) => {
		console.log(`  ${index + 1}. ${theme}`);
	});
	console.log('');
	console.log('Examples:');
	console.log('  node theme-switcher.js "AoE2 RMS Dark" test.rms');
	console.log('  node theme-switcher.js "AoE2 RMS Vibrant"');
	console.log('');
}

function switchTheme(themeName, filePath = 'test.rms') {
	if (!themes.includes(themeName)) {
		console.error(`Error: Theme "${themeName}" not found.`);
		console.log('Available themes:', themes.join(', '));
		process.exit(1);
	}

	if (!fs.existsSync(filePath)) {
		console.error(`Error: File "${filePath}" not found.`);
		process.exit(1);
	}

	try {
		console.log(`Switching to theme: ${themeName}`);
		console.log(`Opening file: ${filePath}`);

		// Open VS Code with the specified theme and file
		const command = `code --theme "${themeName}" "${filePath}"`;
		execSync(command, { stdio: 'inherit' });

		console.log('Theme applied successfully!');
	} catch (error) {
		console.error('Error switching theme:', error.message);
		process.exit(1);
	}
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
	showUsage();
	process.exit(0);
}

const themeName = args[0];
const filePath = args[1] || 'test.rms';

switchTheme(themeName, filePath);
