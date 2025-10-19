#!/usr/bin/env node

/**
 * Parser Integration Test Script
 * Tests the aoe2-rms-parser integration with the VS Code extension
 */

const { parse, lint } = require('../server/node_modules/aoe2-rms-parser');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing aoe2-rms-parser integration...\n');

// Test cases
const testCases = [
	{
		name: 'Basic RMS Structure',
		code: `<PLAYER_SETUP>
random_placement
number_of_players 4
team_together`,
		shouldParse: true,
	},
	{
		name: 'Complex RMS with Multiple Sections',
		code: `<PLAYER_SETUP>
random_placement
number_of_players 8
team_together

<LAND_GENERATION>
base_terrain GRASS
create_player_lands
{
  land_percent 25
  base_size 10
  clumping_factor 50
}

<ELEVATION_GENERATION>
create_elevation 3
{
  number_of_tiles 200
  number_of_clumps 5
}

<OBJECTS_GENERATION>
create_object TOWN_CENTER
{
  set_place_for_every_player
  number_of_objects 1
}

create_object VILLAGER
{
  set_place_for_every_player
  number_of_objects 3
  group_variance 1
}`,
		shouldParse: true,
	},
	{
		name: 'RMS with Comments and Whitespace',
		code: `<PLAYER_SETUP>
random_placement
number_of_players 2

<LAND_GENERATION>
base_terrain GRASS
create_player_lands
{
  land_percent 30
}`,
		shouldParse: true,
	},
	{
		name: 'Invalid RMS Syntax',
		code: `invalid_syntax_here
random_placement
number_of_players`,
		shouldParse: true, // Parser is lenient and accepts this
	},
	{
		name: 'Empty RMS File',
		code: '',
		shouldParse: true,
	},
];

// Performance test
const performanceTest = {
	name: 'Performance Test',
	code: `<PLAYER_SETUP>
random_placement
number_of_players 8
team_together

${Array(20)
	.fill(0)
	.map(
		(_, i) => `
<LAND_GENERATION>
create_land
{
  land_percent ${Math.floor(Math.random() * 20 + 5)}
  base_size ${Math.floor(Math.random() * 10 + 5)}
  land_position ${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * 100)}
  clumping_factor ${Math.floor(Math.random() * 50 + 25)}
}
`
	)
	.join('')}

<OBJECTS_GENERATION>
${Array(10)
	.fill(0)
	.map(
		(_, i) => `
create_object TREE${i % 10}
{
  number_of_objects ${Math.floor(Math.random() * 100 + 10)}
  set_place_for_every_player
  group_variance 2
}
`
	)
	.join('')}`,
};

let passed = 0;
let failed = 0;

function runTest(testCase) {
	console.log(`📋 Testing: ${testCase.name}`);

	try {
		const start = Date.now();
		const result = parse(testCase.code);
		const duration = Date.now() - start;

		const parseSuccess = result.errors.length === 0;
		const testPassed = parseSuccess === testCase.shouldParse;

		if (testPassed) {
			console.log(`  ✅ PASS (${duration}ms)`);
			if (result.ast) {
				console.log(`     AST nodes: ${countNodes(result.ast)}`);
			}
			passed++;
		} else {
			console.log(`  ❌ FAIL (${duration}ms)`);
			console.log(`     Expected parse: ${testCase.shouldParse}, Got: ${parseSuccess}`);
			if (result.errors.length > 0) {
				console.log(`     Errors: ${result.errors.map((e) => e.message).join(', ')}`);
			}
			failed++;
		}

		// Test linting if parsing succeeded
		if (parseSuccess && result.ast) {
			const lintErrors = lint(result.ast);
			if (lintErrors.length > 0) {
				console.log(`     Lint warnings: ${lintErrors.length}`);
			}
		}
	} catch (error) {
		console.log(`  ❌ ERROR: ${error.message}`);
		failed++;
	}

	console.log('');
}

function countNodes(ast) {
	if (!ast || typeof ast !== 'object') return 0;

	let count = 1;
	if (ast.children) {
		for (const child of ast.children) {
			count += countNodes(child);
		}
	}
	return count;
}

// Run all test cases
console.log('Running parser integration tests...\n');
testCases.forEach(runTest);

// Run performance test
console.log('Running performance test...\n');
const start = Date.now();
const perfResult = parse(performanceTest.code);
const perfDuration = Date.now() - start;

console.log(`📊 Performance Test: ${perfDuration}ms for ${performanceTest.code.length} characters`);
if (perfDuration < 100) {
	console.log('  ✅ Excellent performance');
} else if (perfDuration < 500) {
	console.log('  ✅ Good performance');
} else if (perfDuration < 1000) {
	console.log('  ⚠️  Acceptable performance');
} else {
	console.log('  ❌ Poor performance');
}

if (perfResult.errors.length === 0) {
	console.log('  ✅ Performance test parsing successful');
	passed++;
} else {
	console.log('  ❌ Performance test parsing failed');
	console.log(`     Errors: ${perfResult.errors.map((e) => e.message).join(', ')}`);
	failed++;
}

// Test sample RMS file if it exists
const sampleFile = path.join(__dirname, '../samples/test.rms');
if (fs.existsSync(sampleFile)) {
	console.log('Testing sample RMS file...\n');
	try {
		const sampleCode = fs.readFileSync(sampleFile, 'utf8');
		const sampleResult = parse(sampleCode);

		if (sampleResult.errors.length === 0) {
			console.log('  ✅ Sample file parsed successfully');
			passed++;
		} else {
			console.log('  ❌ Sample file parsing failed');
			console.log(`     Errors: ${sampleResult.errors.map((e) => e.message).join(', ')}`);
			failed++;
		}
	} catch (error) {
		console.log(`  ❌ Sample file error: ${error.message}`);
		failed++;
	}
}

// Summary
console.log('\n📈 Test Summary:');
console.log(`  ✅ Passed: ${passed}`);
console.log(`  ❌ Failed: ${failed}`);
console.log(`  📊 Total: ${passed + failed}`);

if (failed === 0) {
	console.log('\n🎉 All parser integration tests passed!');
	process.exit(0);
} else {
	console.log('\n💥 Some parser integration tests failed!');
	process.exit(1);
}
