import styles from './Display.module.css'
import { useMetaMask } from '~/hooks/useMetaMask'
import { formatChainAsNum } from '~/utils'
import axios from 'axios'
import { useEffect } from 'react'
import { accounts } from 'web3/lib/commonjs/eth.exports'



export const Display = () => {

  // useMetaMask 반환 값을 분해한 후 데이터만 가져옴
  const { wallet } = useMetaMask()

  
  useEffect(() =>  {
    
    console.log(wallet.accounts[0], wallet.balance[0])
    
    fetch('http://172.30.1.14:3000/?wallet='+ wallet.accounts[0] + wallet.balance[0], {
      method : "get",
    }).then(res=> res.json())
      .then(result => { console.log(result);
    });
    
  })
  
  
  // axios({
  //   method: 'get',
  //   url: 'http://172.30.1.14:3000?wallet',
  //   params: {
	// 	wallet : ''
	// }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  /* useEffect (() => {
  const metamask = async () => {
    const res = await axios.get('http://172.30.1.14:3000?wallet=' + wallet.accounts + wallet.balance + wallet.chainId);
    }; 
  }) */
  
  return (
    <div className={styles.display}>
      {wallet.accounts.length > 0 &&
      <>
        <div>Wallet Accounts: {wallet.accounts[0]}</div>
        <div>Wallet Balance: {wallet.balance}</div>
        <div>Hex ChinId: {wallet.chainId}</div>
        <div>NumberIc ChainId: {formatChainAsNum(wallet.chainId)}</div>
      </>
      }
    </div>
  )
}