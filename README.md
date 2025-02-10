# orimay-config-eslint

A solid ESLint configuration for JavaScript and TypeScript projects using the
new flat config format. This package combines the best of
[@eslint/js](https://www.npmjs.com/package/@eslint/js),
[@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin),
[eslint-plugin-perfectionist](https://www.npmjs.com/package/eslint-plugin-perfectionist),
and [typescript-eslint](https://www.npmjs.com/package/@typescript-eslint) to
give you a strict, type-safe, and stylistically consistent coding experience.

## Features

- **JavaScript & TypeScript support:** Leverages recommended settings and strict
  type-checking.
- **Flat config integration:** Built for ESLint's modern flat config approach.
- **Import sorting:** Uses eslint-plugin-perfectionist for natural, sorted
  imports.
- **Customizable rules:** Includes stylistic and TypeScript rules you can
  override as needed.

## Installation

Install via npm:

```bash
npm install --save-dev orimay-config-eslint eslint
```

Or using pnpm:

```bash
pnpm add -D orimay-config-eslint eslint
```

**Note**: Ensure you have ESLint version `^9.15.0` installed as it's listed as a
peer dependency.

## Usage

For projects using ESLint's flat config, create an ESLint configuration file
(for example, `eslint.config.mts`) in your project root with the following
content:

```typescript
import eslintConfig from 'orimay-config-eslint';

export default eslintConfig;
```

Then run ESLint to lint your project files:

```bash
npx eslint . --fix
```

## How It Works

This package merges multiple ESLint configurations:

- **@eslint/js**: Provides the core JavaScript recommended rules.
- **@stylistic/eslint-plugin**: Adds stylistic guidelines with the recommended
  flat configuration.
- **typescript-eslint**: Integrates strict type-checking and stylistic rules for
  TypeScript.
- **eslint-plugin-perfectionist**: Enforces a natural, sorted import order with
  customizable settings.

These rules are merged together and fine-tuned for a clean, consistent codebase.
If you need to customize any settings, feel free to extend or override the rules
in your project-specific ESLint configuration.

## Available Scripts

In the `package.json`, you'll find helpful scripts:

- **lint**: Runs ESLint with the `--fix` flag to automatically correct fixable
  issues.
  ```bash
  npm run lint
  ```
- **release**: Uses changelogen to generate a changelog, commit changes, and
  publish the package.
- **prepare**: Sets up Git hooks using husky.

## Contributing

Contributions, issues, and suggestions are welcome. If you find a bug or have an
idea for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and
contribute!

For issues or suggestions, please
[open an issue](https://github.com/orimay/config-eslint/issues).

## Authors

- Dmitrii Baranov dmitrii.a.baranov@gmail.com
