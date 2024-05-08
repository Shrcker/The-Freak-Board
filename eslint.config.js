import js from "@eslint/js";

module.exports = [
	js.configs.recommended,
	{
		rules: {
			"prefer-const": [
				"error",
				{
					destructuring: "any",
					"ignoreReadBeforeAssign": false,
				},
			],
			"no-use-before-define": "error",
			"no-duplicate-case": "error",
			"no-extra-semi": "error",
			"no-empty": "error",
			curly: [
				"error",
				{
					"multi-or-nest",
				},
			],
			"eqeqeq": [
				"error",
				"smart",
			],
		},
		{
			
		}
	},
];
