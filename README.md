# babel-preset-crank
Babel preset to transform JSX into Crank `createElement` calls.   
Without this plugin you must add the comment `/** @jsx createElement */` and `import { createElement} from '@bikeshaving/crank';` to the top of every file you write Crank components in.

### Install

```javascript
npm install babel-preset-crank --save-dev
```

### Usage

Make or update your .babelrc config file with the preset:

```javascript
{
  "presets": [
    "crank"
  ]
}
```