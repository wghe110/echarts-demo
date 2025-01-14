import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue", '**/*.js', '**/*.jsx'],
    ignores: ["public/**/*", 'dist/**/*', 'node_modules/**', '.vscode/**'],
    plugins: {
    },
    languageOptions: {
      globals: {},
    },
    rules: {
      'max-len': 'off',
      'vue/multi-word-component-names': 'off',
      'no-restricted-syntax': 'warn',
      'no-param-reassign': 'warn',
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn',
      'no-unused-vars': 'warn',
      'vue/no-unused-vars': 'warn',
      'no-plusplus': 'warn',
      'consistent-return': 'off',
      'no-use-before-define': 'warn',
      'no-debugger': 'warn',
      'import/prefer-default-export': 'off',
      'eol-last': 'off',
      'vue/comment-directive': 'off',
      'no-bitwise': 'warn',
      'no-restricted-globals': 'warn',
      'indent': 'off',
    }
  },
];