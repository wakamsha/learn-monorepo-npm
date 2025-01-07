export default {
  './**/*.{js,cjs,ts,tsx}': ['cspell', 'prettier -c', 'eslint'],
  './**/*.{css,scss}': ['stylelint --cache'],
  './**/*.md': ['cspell', 'prettier -c'],
};
