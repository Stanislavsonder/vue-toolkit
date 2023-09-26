module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		defineModel: 'readonly',
		withDefaults: 'readonly',
		pageInfo: true
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'no-tabs': 'off',
		'no-undef': 'off',
		'vue/no-undef': 'off',
		'no-useless-escape': 'warn',
		'prefer-const': 'warn',
		'prefer-rest-params': 'warn',
		'no-debugger': 'warn',
		'vue/v-on-event-hyphenation': ['warn', 'always'],
		'vue/no-empty-component-block': 'warn',
		'vue/no-multiple-objects-in-class': 'warn',
		'vue/no-duplicate-attr-inheritance': 'warn',
		'vue/no-required-prop-with-default': 'warn',
		'vue/v-on-handler-style': 'warn',
		'vue/no-static-inline-styles': 'warn',
		'vue/no-template-target-blank': 'warn',
		'vue/no-this-in-before-route-enter': 'error',
		'vue/v-for-delimiter-style': 'warn',
		'vue/no-setup-props-destructure': 'off',
		'vue/require-name-property': 'off',
		'vue/require-direct-export': 'warn',
		'vue/prefer-true-attribute-shorthand': 'warn',
		'vue/prefer-prop-type-boolean-first': 'warn',
		'vue/padding-line-between-blocks': 'warn',
		'vue/no-useless-v-bind': 'warn',
		'vue/multi-word-component-names': 'error',
		'vue/match-component-file-name': [
			'warn',
			{
				extensions: ['jsx', 'vue'],
				shouldMatchCase: true
			}
		],
		'vue/component-definition-name-casing': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-bare-strings-in-template': [
			'warn',
			{
				allowlist: [
					'(',
					')',
					',',
					'.',
					'&',
					'+',
					'-',
					'=',
					'*',
					'/',
					'#',
					'%',
					'!',
					'?',
					':',
					'[',
					']',
					'{',
					'}',
					'<',
					'>',
					'\u00b7',
					'\u2022',
					'\u2010',
					'\u2013',
					'\u2014',
					'\u2212',
					'|'
				],
				attributes: {
					'/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
					input: ['placeholder'],
					img: ['alt']
				},
				directives: ['v-text']
			}
		],
		'vue/next-tick-style': ['error', 'promise'],
		'vue/define-macros-order': [
			'warn',
			{
				order: ['defineProps', 'defineEmits']
			}
		],
		'vue/block-tag-newline': [
			'warn',
			{
				singleline: 'always',
				multiline: 'always',
				maxEmptyLines: 0
			}
		],
		'vue/block-lang': ['warn', { script: { lang: 'ts' } }],
		'no-prototype-builtins': 'off',
		'new-parens': 1,
		'no-bitwise': 1,
		'no-cond-assign': 1,
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error']
			}
		],
		'no-const-assign': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1
			}
		],
		'no-multi-spaces': 1,
		'no-var': 'warn',
		'no-redeclare': 2,
		'no-unused-vars': 'off',
		'prefer-arrow-callback': 'error',
		'vue/no-reserved-component-names': 'off',
		'vue/v-bind-style': ['error', 'shorthand']
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@constants', './src/constants/index.ts'],
					['@types', './src/types.ts'],
					['@', './src/']
				]
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
			}
		}
	}
};
