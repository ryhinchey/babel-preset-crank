const assert = require('assert'); 
const babel = require('@babel/core');
const preset = require('.');


const component = `
import{createElement}from"@bikeshaving/crank";

function Greeting({name="World"}) {
  return (
    <div>Hello {name}</div>
  );
}
`

const { code } = babel.transformSync(component, {
	presets: [
		preset
	],
	babelrc: false,
	compact: true
});

assert.equal(
  code, 
  'import{createElement}from"@bikeshaving/crank";function Greeting({name="World"}){return createElement("div",null,"Hello ",name);}'
);