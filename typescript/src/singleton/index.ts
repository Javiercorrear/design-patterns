import Singleton from './Singleton'

const firstInstance = Singleton.getInstance( 'FOO' )
const secondInstance = Singleton.getInstance( 'BAR' )

console.log(
    'Must display true if firstInstance and secondInstance have teh same value,' +
    'which proves the implementation worked.' )

console.log( `Instances are the same: ${firstInstance.instanceValue === secondInstance.instanceValue}` )
 