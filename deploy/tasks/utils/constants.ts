import { BigNumberish } from 'ethers'
import { ALL_PAIRS } from '../../config/pairs'
import { Network } from '../../shared/wallet'

type Tokens = { [key in Network]: { [symbol: string]: string | undefined } }
type RewardTokensPerSecond = { [key in Network]: BigNumberish }
type AllocationPoints = { [key in Network]: { [pairName: string]: BigNumberish } }

export const KNOWN_TOKENS: Tokens = {
  polygon: {
    wbtc: undefined,
    usdc: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    usdt: undefined,
    dai: undefined,
    weth: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: '0x0000000000000000000000000000000000001010',
    wmatic: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },
  'polygon-mumbai': {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: '0x0000000000000000000000000000000000001010',
    wmatic: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
  },
  'optimism-goerli': {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0x4200000000000000000000000000000000000006',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  optimism: {
    wbtc: undefined,
    usdc: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    usdt: undefined,
    dai: undefined,
    weth: '0x4200000000000000000000000000000000000006',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  'arbitrum-goerli': {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  arbitrum: {
    wbtc: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    usdt: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    dai: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    crv: '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978',
    cvx: undefined,
    sushi: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
    steth: '', // Unknown
    matic: '', // Unknown
    wmatic: undefined,
  },
  ganache: {
    wbtc: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
    weth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    link: '0x514910771af9ca656af840dff83e8264ecf986ca',
    crv: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    cvx: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    sushi: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    steth: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    matic: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    wmatic: '0x7c9f4c87d911613fe9ca58b579f737911aad2d43',
  },
  goerli: {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: '0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae',
    wmatic: undefined,
  },
  sepolia: {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  kovan: {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  ropsten: {
    wbtc: '0x2d80502854fc7304c3e3457084de549f5016b73f',
    usdc: '0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c',
    usdt: undefined,
    dai: '0xad6d458402f60fd3bd25163575031acdce07538d',
    weth: '0xc778417e063141139fce010982780140aa0cd5ab',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  rinkeby: {
    wbtc: undefined,
    usdc: undefined,
    usdt: undefined,
    dai: undefined,
    weth: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    crv: undefined,
    cvx: undefined,
    sushi: undefined,
    steth: undefined,
    matic: undefined,
    wmatic: undefined,
  },
  mainnet: {
    wbtc: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
    weth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    link: '0x514910771af9ca656af840dff83e8264ecf986ca',
    crv: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    cvx: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    sushi: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
    steth: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    matic: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    wmatic: '0x7c9f4c87d911613fe9ca58b579f737911aad2d43',
  },
}

// https://github.com/makerdao/multicall
export const KNOWN_MULTICALL = {
  mainnet: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  kovan: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
  ropsten: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
  rinkeby: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
  ganache: '0xBCa5c1cBc034C0AF31D976a4e3a36951A537eD77',
  goerli: '0x30Ae91AcFD7D9a5ebbf99D56005Ab9F96984C9B3',
  sepolia: undefined,
  arbitrum: undefined,
  'arbitrum-goerli': undefined,
  polygon: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  'polygon-mumbai': '0x08411ADd0b5AA8ee47563b146743C13b3556c9Cc',
  optimism: undefined,
  'optimism-goerli': undefined,
}

export const UNISWAP_V2_FACTORY = {
  mainnet: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  kovan: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  ropsten: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  rinkeby: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  ganache: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  goerli: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  sepolia: '0xB7f907f7A9eBC822a80BD25E224be42Ce0A698A0',
  arbitrum: '',
  'arbitrum-goerli': undefined,
  polygon: '',
  'polygon-mumbai': '',
  optimism: undefined,
  'optimism-goerli': undefined,
}

export const UNISWAP_V3_FACTORY = {
  mainnet: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  kovan: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  ropsten: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  rinkeby: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  ganache: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  goerli: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  sepolia: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  arbitrum: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  'arbitrum-goerli': undefined,
  polygon: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  'polygon-mumbai': '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  optimism: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  'optimism-goerli': undefined,
}

// https://github.com/Uniswap/uniswap-v3-periphery/blob/767e779227a4f10fc7f4b4d90b103e9dfd252677/testnet-deploys.md
export const UNISWAP_V3_NON_FUNGIBLE_POSITION_MANAGER = {
  mainnet: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  kovan: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  ropsten: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  rinkeby: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  ganache: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  goerli: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  sepolia: '0x1238536071E1c677A632429e3655c799b22cDA52',
  arbitrum: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  'arbitrum-goerli': undefined,
  polygon: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  'polygon-mumbai': '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  optimism: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  'optimism-goerli': undefined,
}

export const SUSHISWAP_V2_FACTORY = {
  mainnet: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  kovan: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  ropsten: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  rinkeby: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  ganache: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  goerli: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  sepolia: undefined,
  arbitrum: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  'arbitrum-goerli': undefined,
  polygon: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  'polygon-mumbai': '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  optimism: undefined,
  'optimism-goerli': undefined,
}

export const REWARD_TOKENS_PER_SECOND: RewardTokensPerSecond = {
  mainnet: '82671957671957671',
  kovan: 0,
  ropsten: 0,
  rinkeby: 0,
  ganache: 0,
  goerli: '82671957671957671',
  sepolia: 0,
  arbitrum: 0,
  'arbitrum-goerli': 0,
  polygon: 0,
  'polygon-mumbai': 0,
  optimism: 0,
  'optimism-goerli': 0,
}

export const ALLOCATION_POINTS: AllocationPoints = {
  mainnet: {
    [ALL_PAIRS.wethUsdc.name]: 3000,
    [ALL_PAIRS.wethUsdt.name]: 3000,
    [ALL_PAIRS.usdcUsdt.name]: 2000,
    [ALL_PAIRS.wethWbtc.name]: 2000,
  },
  kovan: {},
  ropsten: {},
  rinkeby: {},
  ganache: {},
  goerli: {
    [ALL_PAIRS.wethUsdc.name]: 1,
    [ALL_PAIRS.wethUsdt.name]: 1,
  },
  sepolia: {},
  arbitrum: {},
  'arbitrum-goerli': {},
  polygon: {},
  'polygon-mumbai': {},
  optimism: {},
  'optimism-goerli': {},
}
