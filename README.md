# Sort Function

This project contains a TypeScript function for sorting packages based on their dimensions and mass. The function categorizes packages into different stacks: STANDARD, SPECIAL, and REJECTED, following specific rules.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/glaubermagal/sort-test.git
cd sort-test
```

2. Install dependencies:

```bash
npm install
```

## Usage

The `sort` function can be imported and used in your TypeScript projects. It categorizes packages into three stacks based on the given rules.

```typescript
import { sort } from './src/sort';

const result = sort(140, 40, 60, 15);
console.log(result); // Output: "STANDARD"
```

## Details

The `sort` function takes four parameters: `width`, `height`, `length`, and `mass` of a package in centimeters and kilograms, respectively. It follows the rules to determine the appropriate stack for the package.

### Rules

- A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
- A package is **heavy** when its mass is greater or equal to 20 kg.

#### Stacks:

1. **STANDARD**: Standard packages (those that are not bulky or heavy) can be handled normally.
2. **SPECIAL**: Packages that are either heavy or bulky can't be handled automatically.
3. **REJECTED**: Packages that are **both** heavy and bulky are rejected.

## Running Tests

To run the provided test cases, use the following command:

```bash
npm test
```

This will execute Jest and run the test suite to ensure the correct functionality of the `sort` function.