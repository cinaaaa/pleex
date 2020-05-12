<p align="center">
  <a href="https://react-native-elements.github.io/react-native-elements/">
    <img alt="pleex" src="https://i.ibb.co/LP4kSq3/sign.png" width="300">
  </a>
</p>

<h1 align="center"> Pleex </h1>
<h3 align="center">
  ⚙️💣 " Schematic " ➕ " Storage " 💣⚙️ for react native
</h3>
<br />
<p align="center">
  <img src="https://travis-ci.com/E-RROR/pleex.svg?branch=master"/>
  <img src="https://img.shields.io/badge/with%20%E2%9D%A4-yes-brightgreen" />
  <img src="https://img.shields.io/github/license/E-RROR/pleex" />
  <img src="https://img.shields.io/github/package-json/v/E-RROR/pleex?color=blue" />
  <img src="https://img.shields.io/badge/document-yes-lightgreen" />
  <img src="https://img.shields.io/badge/test-jest-yellow" />
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

### Example Usage

Full example and list of api's can be find in [pleex documents](https://pleex.gitbook.com/docs)
<br />
this is example of creating schemas with pleex
```jsx
import React,{useEffect} from 'react';
import {Text} from 'react-native';
import {Pleex} from 'pleex';

const App = () => {

  const my_schema = Pleex.schema({
    name: String,
    age: Number,
    logged: Boolean,
  });

  return (
    <>
      <Text>Try Schemas</Text>
    </>
  );

};

export default App;
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
Find issues or want to add features? see contributing (guide)[https://pleex.gitbook.io/docs/contributing/how-to-contribute]
