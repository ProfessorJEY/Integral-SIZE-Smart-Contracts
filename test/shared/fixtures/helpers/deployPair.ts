import { Wallet } from 'ethers'
import { expandTo18Decimals, overrides } from '../../utilities'
import { ERC20__factory, TwapOracleTest, TwapFactory, TwapOracleV3Test, IERC20 } from '../../../../build/types'
import { deployPairForTokens } from './deployPairForTokens'

export async function deployPair(
  wallet: Wallet,
  oracle: TwapOracleTest | TwapOracleV3Test,
  factory: TwapFactory,
  trader: string,
  token0?: IERC20,
  token1?: IERC20
) {
  const tokenA = token0 ?? (await new ERC20__factory(wallet).deploy(expandTo18Decimals(1000000000000), overrides))
  const tokenB = token1 ?? (await new ERC20__factory(wallet).deploy(expandTo18Decimals(1000000000000), overrides))

  const pair = await deployPairForTokens(wallet, oracle.address, factory, tokenA, tokenB, trader)
  return { ...pair, oracle }
}
