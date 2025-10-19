# AoE2 RMS Custom Themes

This extension includes four custom themes specifically designed for Age of Empires 2 Random Map Scripting (RMS) files.

## Available Themes

### 1. AoE2 RMS Dark
- **Type**: Dark theme
- **Base**: VS Code Dark
- **Colors**: Blue section headers, teal commands, light blue attributes
- **Best for**: Night coding sessions, reduced eye strain

### 2. AoE2 RMS Light
- **Type**: Light theme
- **Base**: VS Code Light
- **Colors**: Blue section headers, green commands, navy attributes
- **Best for**: Daytime coding, high contrast visibility

### 3. AoE2 RMS Vibrant
- **Type**: Dark theme
- **Base**: GitHub Dark
- **Colors**: Bright red section headers, teal commands, colorful palette
- **Best for**: Creative coding, high visibility

### 4. AoE2 RMS Monokai
- **Type**: Dark theme
- **Base**: Monokai
- **Colors**: Pink section headers, green commands, purple numbers
- **Best for**: Monokai fans, classic syntax highlighting

## How to Use

### Method 1: Theme Selection
1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Preferences: Color Theme"
4. Select one of the AoE2 RMS themes from the list

### Method 2: Settings
1. Open VS Code Settings (`Ctrl+,`)
2. Search for "color theme"
3. Select your preferred AoE2 RMS theme

### Method 3: Command Palette
1. Press `Ctrl+Shift+P`
2. Type "theme"
3. Select "Preferences: Color Theme"
4. Choose your AoE2 RMS theme

## Theme Elements

Each theme highlights these RMS syntax elements:

- **Section Headers**: `<LAND_GENERATION>`, `<OBJECTS_GENERATION>`
- **Commands**: `create_object`, `set_place_for_every_player`
- **Attributes**: `number_of_objects`, `min_distance_to_players`
- **Numbers**: `1`, `2`, `3`, `100`
- **Conditionals**: `if`, `endif`
- **Random Blocks**: `start_random`, `end_random`
- **Identifiers**: Variable names and constants
- **Comments**: `/* ... */` blocks
- **Directives**: Special RMS keywords
- **Punctuation**: Braces, parentheses, operators

## Customization

You can customize these themes by:

1. Opening the theme file in VS Code
2. Modifying the color values
3. Saving the file
4. Reloading VS Code

Theme files are located in the `themes/` directory:
- `aoe2-rms-dark.json`
- `aoe2-rms-light.json`
- `aoe2-rms-vibrant.json`
- `aoe2-rms-monokai.json`

## Color Reference

### Common Color Codes Used:
- **Blue**: `#569cd6`, `#0000ff`, `#f92672`
- **Teal/Cyan**: `#4ec9b0`, `#4ecdc4`, `#a6e22e`
- **Green**: `#008000`, `#96ceb4`, `#a8e6cf`
- **Purple**: `#c586c0`, `#800080`, `#ae81ff`
- **Yellow**: `#dcdcaa`, `#808000`, `#feca57`
- **Orange**: `#ce9178`, `#ff8000`, `#fd971f`
- **Red**: `#ff6b6b`, `#f92672`
- **Pink**: `#ff9ff3`

## Contributing

To add a new theme:

1. Create a new JSON file in the `themes/` directory
2. Follow the existing theme structure
3. Add the theme to `package.json` in the `themes` section
4. Test the theme with various RMS files
5. Submit a pull request

## Troubleshooting

If themes don't appear:

1. Ensure the extension is properly installed
2. Restart VS Code
3. Check that theme files are in the correct location
4. Verify `package.json` includes the theme definitions
5. Check VS Code Developer Console for errors
