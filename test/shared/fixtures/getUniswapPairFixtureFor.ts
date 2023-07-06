import { waffle } from 'hardhat'
import { BigNumber, Wallet } from 'ethers'
import { CustomERC20__factory, IUniswapV2Factory__factory, IUniswapV2Pair__factory } from '../../../build/types'
import { MAX_UINT_256, overrides } from '../utilities'
import UniswapFactory from '../../uniswap/UniswapFactory.json'

export function getUniswapPairFixtureFor(xDecimals: number, yDecimals: number) {
  return async function ([wallet]: Wallet[]) {
    const tokenA = await new CustomERC20__factory(wallet).deploy('Token', 'TKN', xDecimals, MAX_UINT_256, overrides)
    const tokenB = await new CustomERC20__factory(wallet).deploy('Token', 'TKN', yDecimals, MAX_UINT_256, overrides)

    const factoryAsContract = await waffle.deployContract(wallet, UniswapFactory, [wallet.address])
    const factory = IUniswapV2Factory__factory.connect(factoryAsContract.address, wallet)
    await factory.createPair(tokenA.address, tokenB.address, overrides)
    const pairAddress = await factory.getPair(tokenA.address, tokenB.address, overrides)
    const pair = IUniswapV2Pair__factory.connect(pairAddress, wallet)

    const [token0, token1] = tokenA.address === (await pair.token0()) ? [tokenA, tokenB] : [tokenB, tokenA]

    async function addLiquidity(token0Amount: BigNumber, token1Amount: BigNumber) {
      await token0.transfer(pair.address, token0Amount, overrides)
      await token1.transfer(pair.address, token1Amount, overrides)
      return await pair.mint(wallet.address, overrides)
    }

    return { pair, token0, token1, factory, addLiquidity }
  }
}
