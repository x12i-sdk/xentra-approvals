# @x12i/xentra-approvals usage example

Approval policies and requests for Xentra.

This consuming application demonstrates **create and approve a request in an isolated in-memory fixture** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Create an approval request under a defined policy.
- Evaluate the recorded approval state before continuing a governed operation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xentra-approvals)
- [Implementation monorepo](https://github.com/x12i/xentra)
- [Reviewed package source](https://github.com/x12i/xentra/tree/004372e6695509bf2e95d2e4e53d4534e81dd312/packages/approvals)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
