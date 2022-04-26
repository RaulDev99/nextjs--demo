
import { PlusIcon , TruckIcon, ClipboardListIcon,HomeIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Footer (){
    const router = useRouter();

    const MenuItems = [
        {
          label: 'Home',
          url: "/",
          icon: <HomeIcon />,
          active: true,
        },
        {
          label: 'Sacar',
          url: "/almacen2",
          icon: <PlusIcon/>,
          active: false,
        },
        {
          label: 'Registro',
          url: "/registro2",
          icon: <ClipboardListIcon />,
          active: false,
        },
       {
          label: 'Pedidos',
          url: "/pedidos",
          icon: <TruckIcon />,
          active: true,
        },
      ];

return(
    
    <>
        <div className="w-full h-14  fixed bottom-0 flex bg-gray-50 border-t-1 border-gray-300  items-center justify-around text-gray-700">
                
                
                {MenuItems.map((item,index)=>{
                    return(
                        
                        <div className='' key={index}>
                            <Link href={item.url} >
                                <div className={`cursor-pointer hover:bg-none text-center font-bold ${
                                    router.asPath === item.url
                                        ? "text-blue-500"
                                        : ""
                                    }`}>
                                        <div className=" w-6 mx-auto ">
                                        {item.icon}
                                </div>
                                <p className="text-xs ">{item.label}</p>
                                </div>
                            </Link>
                        
                        
                        </div>
                    )
                })}
        </div>




















    {/* <div className="w-full h-28 px-2 absolute bottom-0 flex  ">
    
        <Link href='/pedidos'>
        <div className="bg-blue-500 w-full rounded-lg flex items-center justify-center hover:bg-blue-400 flex-col font-bold text-gray-800">
        <ClipboardCheckIcon className="h-16 mb-2" ></ClipboardCheckIcon>  
        <h1 >PEDIDOS</h1>
            
        </div>
        </Link>
        
    
        <div className=" flex flex-col  justify-center items-center">
            <div className="h-24 w-24   rounded-b-lg  top-0 "></div>
            <div className="h-24 w-24 bg-gray-200 rounded-b-lg absolute top-0 mt-4 z-10"></div>
            

            <div className="h-16 w-16 bg-white rounded-md flex shadow-xl transform transition-all hover:scale-125 absolute top-6 z-20 ">
            <Link href='/almacen2'>
            <PlusIcon className="text-gray-800 p-2 "></PlusIcon>
            </Link>
            </div>
        </div>
        {/* <div className="bg-green-500 w-1/2    bottom-0"></div> */}
        
        
            {/* <Link href='/registro2'>
            <div className="bg-blue-500 w-full rounded-lg flex items-center justify-center flex-col hover:bg-blue-400 font-bold text-gray-800 ">
            <ChartBarIcon className=" h-16 mb-2" ></ChartBarIcon> 
            <h1 >REGISTRO</h1>
                  
            </div>
            </Link>
        

        

    </div> */} 
    
    </>
)
}