## Setting Up

### 1. ethers.js 설치

```
$ npm install --save ethers
```

### 2. Importing:

- node.js

```
const { ethers } = require("ethers");
```

- ES6 or TypeScript

```
import { ethers } from "ethers";
```

### 3. Node Provider:

- 접근할 수 있는 노드를 내가 만들어서 실행시키거나 기존에 있던 노드에 올려서 다른 노드들이 내 기록을 베껴갈 수있도록 해줘야하는데 새로 만드는건 어렵다.
- 프로바이더를 사용하면 이더 노드를 컴퓨터에 직접 구현하지 않아도 됨, 즉 블록체인 네트워크와 통신을 대신 하는 일종의 서버처럼 작동하며, 사용자에게 api를 제공해서 dapp 개발을 쉽게 도와주는 역할
- 그래서 Node Provider라는걸 쓰는데 여기서 쓸 건 INFURA라는 것.

### 4. ABI:

- ABI = describes how the smart contract works(interface)
- what functions does this smart contract have
- what are the function arguments
- what does it respond to if we're trying to read info from it..
- stored in JSON
