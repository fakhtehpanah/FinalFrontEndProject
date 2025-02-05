import { ImageView } from "@/components/common";
import Apps from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-apps.svg";
export function Menu() {
  return (
    <div>
        <div className='bg-[#3BB77E] p-4 text-white rounded flex gap-3'>
            <ImageView src={Apps}/>
            <p>browse all categories</p>
        </div>
        <div className="bg-green-200 p-2">
            <ul className="bg-pink-100">
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/Group.svg" width={48} height={30}/>
                    <span>Milks and Dairies</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/044-dress 1.svg" width={48} height={30}/>
                    <span>Clothing & beauty</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/021-pet food 1.svg" width={48} height={30}/>
                    <span>Pet Foods & Toy</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/006-dairy products 1.svg" width={48} height={30}/>
                    <span>Baking material</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/fruit.svg" width={48} height={30}/>
                    <span>Fresh Fruit</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/wine.svg" width={48} height={30}/>
                    <span>Wines & Drinks</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/026-crab 1.svg" width={48} height={30}/>
                    <span>Fresh Seafood</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/001-sweet 1.svg" width={48} height={30}/>
                    <span>Fast food</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/032-grocery 1.svg" width={48} height={30}/>
                    <span>Vegetables</span>
                </li>
                <li className="flex gap-4 items-center font-semibold py-2">
                    <ImageView src="/010-milk products 1.svg" width={48} height={30}/>
                    <span>Bread and Juice</span>
                </li>
            </ul>
        </div>
        <div className="bg-blue-500">
                <ul className='gap-6'>
                    <li className='flex gap-1 py-2'>
                        <ImageView src="/fi-rs-flame 1.svg" width={20} height={20}/>
                        <p>Hot Deals</p>
                    </li>
                    <li className="py-2">Home</li>
                    <li className="py-2">Vegetables</li>
                    <li className="py-2">Drink</li>
                </ul>
            </div>
    </div>
  )
}

