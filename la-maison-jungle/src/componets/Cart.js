import '../style/Cart.css';
function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    const title = 'Panier'
    return (
    <div 
    className='lmj-cart'>
        <h2>{title}</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li>
            </ul>
          Total : {monsteraPrice + ivyPrice + flowerPrice }€
    </div>
    )
    }
    export default Cart