<p align="center">
  <a href="https://react-native-elements.github.io/react-native-elements/">
    <img alt="pleex" src="https://i.ibb.co/LP4kSq3/sign.png" width="300">
  </a>
</p>

<h1 align="center"> Pleex </h1>
<h3 align="center">
  ⚙️💣 " Schematic " ➕ " Storage " 💣⚙️ for ⚛️ react native
</h3>
<br />
<p align="center">
  <img src="https://travis-ci.com/E-RROR/pleex.svg?branch=master"/>
  <img src="https://img.shields.io/badge/with%20%E2%9D%A4-yes-brightgreen" />
  <img src="https://img.shields.io/github/license/E-RROR/pleex" />
  <img src="https://img.shields.io/github/package-json/v/E-RROR/pleex?color=blue" />
  <img src="https://img.shields.io/badge/document-yes-lightgreen" />
  <img src="https://img.shields.io/badge/test-jest-yellow" />
  <img src="https://img.shields.io/npm/v/pleex" />
</p>

<h3 align="center">Built with ❤</h3>
<br />

## Get Started

### Installation

install pleex with npm or yarn
```bash
npm i pleex
```
or
```bash
yarn add pleex
```
also pleex don't need any extra configuration or installation with gradle or pods

### Video Tutorial in youtube
[![Pleex](https://img.youtube.com/vi/JYgKpbZ9tyM/0.jpg)](https://www.youtube.com/watch?v=JYgKpbZ9tyM)

### Example Usage

Full example and list of api's can be find in [pleex documents](https://pleex.gitbook.io/docs)
<br />
this is example of creating schemas with pleex
```jsx
import {Pleex} from 'pleex';

const my_collection = Pleex.collection('test');

const my_schema = Pleex.schema({
  name: String,
  age: Number,
});

my_collection.insert(
    {
      name: 'Jack',
      age: 12,
    },
    my_schema,
    (success) => // Success,
    (error) => console.error(error)
);
```

### Tests
you can test source code by
```bash
npm test
```

### This package helps you in:
- #### Having simple storage
- #### Create Schema and use them
- #### Type cheking for schemas
- #### Async workflow
- #### Integrated with async storage
- #### Save and use Json objects
- #### Built in searching api 

### 🙋‍♂️ Contributing
Find issues or want to add features? see contributing [guide](https://pleex.gitbook.io/docs/contributing/how-to-contribute)

### Current api's:
- #### Collection
- #### Schema
- #### Insert
- #### removeItem
- #### removeItems
- #### getItem
- #### getItems
- #### clearCollection
- #### getAll
