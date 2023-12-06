import { plantList } from "../datas/plantList"
import '../style/ShoppingList.css'
function ShoppingList() {
    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    
    ); 
    return (
        <div className="lmj-plant-list">
            <ul>
                {categories.map((cat)=>(
                <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item' >
                        {plant.name}
                        {plant.isSpecialOffer&& <div className="lmj-sales" >Soldes</div>} 
                    </li>
				))}
			</ul>
        </div>   
    ) 
}
export default ShoppingList