# Bingo!

Bingo game in JS.

The default implementation uses stdin and stdout to communicate with users.

It can be extended and customized.

## Install

Use npm or yarn to install the dependencies

```bash
node init
```

or

```bash
yarn
```

## To play

Install nodeJS and run:

```bash
node main.js
```

## To extend

Call update function of bingo with new user actions.
Create another module with the text interface and provide it to bingo with setOutput.

This will allow you to use bingo with any other custom interface.
