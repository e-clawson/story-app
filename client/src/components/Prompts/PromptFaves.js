// import { useState } from "react"
// import { VillagerList } from "../components/villagers/VillagerList"

// export const Favorites = (villagers, filteredVillagers) => {
//     const [favoriteView, setFavoriteView] = useState(false)
//     const [favoriteVillagers, setFavoriteVillagers] = useState(villagers)

//     const addToFavorites = (villager) => {
//         if (!favoriteVillagers.find(el => el.id === villager.id)) {
//             setFavoriteVillagers(favoriteVillagers => [...favoriteVillagers, villager])
//         alert(`${villager.name["name-USen"]} was added to favorites!`)
//         }
//     }


//     return (
//         <div>
//             <button onClick={() => setFavoriteView(bool => !bool)}> Favorites 💖</button>
//             {!!favoriteView ? <VillagerList villagers={favoriteVillagers} addToFavorites={addToFavorites}/>: <VillagerList villagers={filteredVillagers} addToFavorites={addToFavorites}/>}
//         </div>
//     )
// }