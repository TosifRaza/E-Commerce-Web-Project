import Hero from '../Components/Hero/Hero.jsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import NewCollection from '../Components/NewCollection/NewCollection.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'
function Shop(){
   return(
      <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
      </div>
   )
}
export default Shop
