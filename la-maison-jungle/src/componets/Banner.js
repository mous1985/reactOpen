import '../style/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'La maison jungle'
    return (
            <div className='lmj-banner'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>)
            /* or we can use style as object to replace classeName  "for the good parctics it's recomandat to use classeName" */
            /* <div 
                    style={{
                        color: 'black',
                        textAlign: 'right',
                        padding: 32,
                        borderBottom: 'solid 3px solid black',
                    }}
            >
                <h1>La maison jungle</h1>
            </div>  */
}


export default Banner