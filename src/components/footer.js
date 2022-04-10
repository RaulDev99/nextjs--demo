
import { PlusIcon} from '@heroicons/react/outline'
import Link from 'next/link'
export default function Footer (){
return(
    <div className="w-full h-32  absolute bottom-0 flex justify-center items-center">

        <div className="h-16 w-16 bg-white rounded-md flex justify-center items-center shadow-xl transform transition-all hover:scale-125">
        <Link href='/almacen2'>
        <PlusIcon className="text-gray-800 p-2 "></PlusIcon>
        </Link>
        </div>
    </div>
)
}