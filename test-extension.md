# Extension Testing Guide

## Test File: test.rms

The `test.rms` file contains various RMS syntax elements to test:

### Syntax Elements to Verify:

1. **Section Headers** - `<LAND_GENERATION>` and `<OBJECTS_GENERATION>`
2. **Commands** - `create_object` statements
3. **Command Blocks** - `{ ... }` blocks with attributes
4. **Conditionals** - `if MY_VARIABLE` and `endif`
5. **Random Blocks** - `start_random` and `end_random`
6. **Attributes** - `number_of_objects`, `set_place_for_every_player`, etc.
7. **Values** - Numbers, identifiers, strings

## Testing Steps:

### 1. Install Extension

- Open VS Code
- Press `Ctrl+Shift+P`
- Type: `Extensions: Install from VSIX...`
- Select: `aoe2-rms-1.0.0.vsix`

### 2. Open Test File

- Open `test.rms` in VS Code
- Verify file is recognized as RMS language

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

## Expected Results:

- File should be recognized as `aoe2-rms` language
- Syntax highlighting should be applied
- No major errors should be shown
- Language server should be active
- Extension should work without crashes

## Troubleshooting:

If issues occur:

1. Check VS Code Developer Console (`Help > Toggle Developer Tools`)
2. Look for error messages
3. Verify extension is properly installed
4. Check if language server is running
