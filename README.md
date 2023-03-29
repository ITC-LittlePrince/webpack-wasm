# webpack-wasm
[![Build Status](https://app.travis-ci.com/ITC-LittlePrince/webpack-wasm.svg?token=5srgE5sJboWxv5H8x4XB&branch=main)](https://app.travis-ci.com/ITC-LittlePrince/webpack-wasm)


Webpack + HMR + Babel + WASM(Rust cdylib)


This is a fresh and up-to-date wasm-pack repository using Webpack 5 + HMR and Bebel plugin to build a classic package for WEB MDN API developers and beyond.



> Overall, the official repository was supposed to be updated by the wasm-pack developers, but unfortunately now you are here.
> Well, like a typical American from Silicon Valley, I can add that I spent 3 days for 8 hours on this repository and it's posted absolutely for free.
> That's about how much time I saved for you.
> I'm sure this repository will serve as a foundation for many new projects, including my projects.

I'm also raising funds to create and maintain a protocol for my new ecosystem for use in WEB 4.0 networks with a decentralized node infrastructure.


Metamask wallet ETH, BNB, MATIC, AVAX: 0xAc3C75F55A51efeEa471bbB7fB4FD00Ec8FcE9e4


# To quickly create a new application using npx:
```sh
npx degit ITC-LittlePrince/webpack-wasm.git my-new-app-name
```
*Don't forget to change my-new-app-name to the name of your project.*


# Usage on Windows/Linux:

## To run during development
```sh
npm i
npm run start-windows
```
or
```sh
npm i
npm run start-linux
```

## To run during project deployment
```sh
npm i
npm run build-windows
```
or
```sh
npm i
npm run build-linux
```

## Project directory structure
| Directory | Functional belonging |
| ------ | ------ |
| /js/ | Directory for development in JavaScript |
| /js/bin | Directory for executable files |
| /js/lib | Directory for libraries that store interfaces and class objects |
| /js/static | Directory for package media files |
| /wasm/ | Directory for development in Rust |
| /wasm/src | Directory for writing structures, interfaces, and functions using [#wasm-bindgen] |

## A little bit about the problems I faced when creating the repository

> Note: --openssl-legacy-provider for Node >=v19. Popular error when running. Probably can be removed in the future or in earlier versions of Node.


## Additional links to WASM documentation:

 - [**wasm-pack**](https://rustwasm.github.io/docs/wasm-pack/introduction.html)
 - [**wasm-bindgen**](https://rustwasm.github.io/docs/wasm-bindgen/introduction.html)
 - [**rust-wasm**](https://rustwasm.github.io/book/introduction.html)


