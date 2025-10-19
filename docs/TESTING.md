# Extension Testing Guide

## Overview

This guide covers testing both the core extension functionality and the custom themes for the AoE2 RMS extension.

## Test File: test.rms

The `test.rms` file contains various RMS syntax elements to test:

### Syntax Elements to Verify

1. **Section Headers** - `<LAND_GENERATION>` and `<OBJECTS_GENERATION>`
2. **Commands** - `create_object` statements
3. **Command Blocks** - `{ ... }` blocks with attributes
4. **Conditionals** - `if MY_VARIABLE` and `endif`
5. **Random Blocks** - `start_random` and `end_random`
6. **Attributes** - `number_of_objects`, `set_place_for_every_player`, etc.
7. **Values** - Numbers, identifiers, strings

## Installation and Setup

### 1. Install Extension

1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type: `Extensions: Install from VSIX...`
4. Select: `output/aoe2-rms-1.0.0.vsix`

### 2. Open Test File

1. Open `test.rms` in VS Code
2. Verify file is recognized as RMS language

## Core Functionality Testing

### 3. Check Syntax Highlighting

- Section headers should be highlighted
- Commands should be highlighted
- Attributes should be highlighted
- Numbers should be highlighted
- Comments should be highlighted

### 4. Check Error Detection

- Look for any red squiggly lines indicating errors
- Check the Problems panel for diagnostics
- Verify the Mangudai parser is working

### 5. Test Language Features

- Hover over elements for tooltips
- Check if IntelliSense works
- Verify bracket matching works

## Custom Themes Testing

### 6. Test Each Theme

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Preferences: Color Theme`
3. Test each theme:
   - **AoE2 RMS Dark** - Blue headers, teal commands, optimized for dark environments
   - **AoE2 RMS Light** - High contrast, good for daytime coding
   - **AoE2 RMS Vibrant** - Bright, colorful palette for creative coding sessions
   - **AoE2 RMS Monokai** - Classic Monokai-inspired theme for RMS syntax
   - **AoE2 RMS Cursor Monokai** - Cursor's modern dark UI with Monokai syntax highlighting

### 7. Verify Theme Elements

Check that these elements are properly highlighted in each theme:

- **Section Headers**: `<LAND_GENERATION>`, `<OBJECTS_GENERATION>`
- **Commands**: `create_object`, `set_place_for_every_player`
- **Attributes**: `number_of_objects`, `min_distance_to_players`
- **Numbers**: `1`, `2`, `3`, `100`
- **Conditionals**: `if`, `endif`
- **Random Blocks**: `start_random`, `end_random`
- **Comments**: `/* ... */` blocks

### 8. Test Theme Switcher (Optional)

If you have Node.js installed:

```bash
node themes/theme-switcher.js "AoE2 RMS Dark" test.rms
node themes/theme-switcher.js "AoE2 RMS Vibrant" test.rms
node themes/theme-switcher.js "AoE2 RMS Cursor Monokai" test.rms
```

## Expected Results

### Core Functionality

- File should be recognized as `aoe2-rms` language
- Syntax highlighting should be applied
- No major errors should be shown
- Language server should be active
- Extension should work without crashes

### Custom Themes

- All five themes should appear in the theme list
- Each theme should highlight RMS syntax differently
- Colors should be consistent within each theme
- No errors should appear in the VS Code Developer Console

## Troubleshooting

### General Issues

1. Check VS Code Developer Console (`Help > Toggle Developer Tools`)
2. Look for error messages
3. Verify extension is properly installed
4. Check if language server is running

### Theme Issues

If themes don't appear:

1. Restart VS Code after installation
2. Check VS Code Developer Console for errors
3. Verify the extension is properly installed
4. Try uninstalling and reinstalling the extension

If colors look wrong:

1. Check that the file is recognized as `aoe2-rms` language
2. Verify the theme is properly selected
3. Try switching to a different theme and back
4. Check if VS Code has any conflicting theme settings

## Development Testing

### Local Development

1. Run `npm run compile` to build the extension
2. Press `F5` in VS Code to launch a new Extension Development Host window
3. Test changes in the development window
4. Use `Ctrl+R` to reload the extension after changes

### Docker Build Testing

1. Run `npm run build:docker` to build in Docker
2. Test the generated VSIX file from `output/` directory
3. Verify all themes and functionality work correctly
