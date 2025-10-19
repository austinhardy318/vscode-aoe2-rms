import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
				...globals.es2022,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2022,
			},
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		ignores: ['**/out/**', '**/dist/**', '**/node_modules/**', '**/*.cjs'],
	},
];
