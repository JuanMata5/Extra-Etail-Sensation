
import { FeatureGrid } from "../components/Home/FeatureGrid"

import { NewsLetter } from "../components/Home/NewsLetter"
import Carrousel from "../components/Home/Carrousel"
import Products from "../components/Home/Products"


export const HomePage = () => {
  return (
     <section className="">
       <Carrousel/>
       <FeatureGrid/>
       <Products/>
       <NewsLetter/>

     </section>
  )
}
