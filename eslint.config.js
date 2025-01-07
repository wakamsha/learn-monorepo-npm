// @ts-check
import { essentials, react, storybook, test, typescript } from '@wakamsha/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      '**/dist/**',
      '**/vitest.setup.*',
      '**/*.config.*',
      '**/bin/*',
      '**/catalog/templates/*',
      '**/*.scss.d.ts',
    ],
  },

  ...essentials,
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [/\d_\w+\.story.tsx$/],
        },
      ],
    },
  },

  {
    files: ['**/react-router-*/**/*'],
    rules: {
      'import/consistent-type-specifier-style': [
        'error',
        // React Router の Route Module Type は top-level import が必要。
        // see: https://reactrouter.com/how-to/route-module-type-safety#2-include-the-generated-types-in-tsconfig
        'prefer-top-level',
      ],
    },
  },

  {
    files: ['**/react-router-*/**/{layouts,routes}/**/*', '**/react-router-*/**/{root,routes}.*', '**/ambience.d.ts'],
    rules: {
      'import/no-default-export': ['off'],
    },
  },

  {
    files: ['**/next-app/**/*.tsx'],
    rules: {
      'import/no-default-export': ['off'],
      'unicorn/filename-case': ['off'],
    },
  },

  ...typescript,
  {
    files: ['apps/react-router-ssr/**/*'],
    rules: {
      // React.Suspense で throw するため無効化する。
      '@typescript-eslint/no-throw-literal': ['off'],
    },
  },

  ...react,
  {
    rules: {
      'jsx-a11y/no-autofocus': ['off'],
    },
  },

  ...storybook,
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': ['off'],
    },
  },

  ...test.essentials,
  ...test.react,

  {
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          controlComponents: ['TextInput', 'TextArea'],
        },
      ],
    },
  },

  /* prettier */
  eslintConfigPrettier,
];
