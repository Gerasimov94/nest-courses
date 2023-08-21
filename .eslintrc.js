module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "indent": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/indent": ["error", "tab", { "ignoredNodes": ["PropertyDefinition"] }],
    "no-tabs": ["error", { "allowIndentationTabs": true }],
    "prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"trailingComma": "all",
				"useTabs": true,
				"semi": true,
				"bracketSpacing": true,
				"printWidth": 100,
				"endOfLine": "auto"
			}
		],
    "no-underscore-dangle": "off",
    "no-useless-constructor": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "class-methods-use-this": "off",
    "import/no-named-as-default": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
