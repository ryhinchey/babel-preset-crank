const assert = require('assert'); 
const babel = require('@babel/core');
const preset = require('.');


const componentWithImport = `
import{createElement}from"@bikeshaving/crank";

function Greeting({name="World"}) {
  return (
    <div>Hello {name}</div>
  );
}
`

const { code: codeWithImport } = babel.transformSync(componentWithImport, {
	presets: [
		preset
	],
	babelrc: false,
	compact: true
});

assert.equal(
  codeWithImport, 
  'import{createElement}from"@bikeshaving/crank";function Greeting({name="World"}){return createElement("div",null,"Hello ",name);}'
);

const componentWithoutImport = `
function Greeting({name="World"}) {
  return (
    <div>Hello {name}</div>
  );
}
`

const { code: codeWithoutImport } = babel.transformSync(componentWithoutImport, {
	presets: [
		preset
	],
	babelrc: false,
	compact: true
});

assert.equal(
  codeWithoutImport, 
  'import{createElement}from"@bikeshaving/crank";function Greeting({name="World"}){return createElement("div",null,"Hello ",name);}'
);