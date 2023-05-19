import { todayMessage } from "@/data/messages"

export const Cards = ({nextBloodMoon} : {nextBloodMoon : number | undefined}) => {
    return (
        <div className="flex items-center justify-center bg-black px-4">
            <div className="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Feature-Image_7-Days-To-Die-Best-Perks.jpg" alt="plant" className="h-auto w-full" />
                <div className="p-5 bg-black">
                    <h1 className="text-xl font-bold mb-5 text-red-900 text-center uppercase">dia {nextBloodMoon}</h1>
                    <h2 className="text-xl font-bold mb-5 text-red-900 text-center uppercase">{todayMessage}</h2>
                    <button className="w-full rounded-md bg-red-900 py-2 text-white hover:bg-red-800 hover:shadow-md duration-75" disabled>Voy a sobrevivir</button>
                </div>
            </div>
        </div>
    )
}