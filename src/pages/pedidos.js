
import { useState } from 'react'

import Footer from '../components/footer'
import MenuHistorialPedidos from '../components/Pedidos/MenuHistorialPedidos'
import MenuRealizarPedidos from '../components/Pedidos/MenuRealizarPedidos'

export default function Pedidos(){

    const menuTop = [
        'Realizar pedido' ,
        'Historial de pedidos', 
    ]

    const [menuTopActive,setMenuTopActive] = useState ('Realizar pedido')

    const toggleMenuTopActive= (e)=>{
        setMenuTopActive(e.target.innerText)
    }

return(
    <>
    
    

    <div className='font-bold  grid grid-cols-2 text-center mt-2 '>
        {
            menuTop.map((menu,index)=>{
                
                return(
                    <h1 key={index}onClick={toggleMenuTopActive} className={menuTopActive === `${menu}`  ? 'border-b border-blue-400 p-2  ': 'm-2'}>{menu}</h1>
                )
            })
        }          
    </div>
    <div className="w-full h-0.5 bg-gray-300  "></div>

        {/* SUBMENU REALIZAR PEDIDOS */}
        {menuTopActive == 'Realizar pedido' ? 
        <MenuRealizarPedidos></MenuRealizarPedidos>
        :null
        }
        {menuTopActive == 'Historial de pedidos' ? 
        <MenuHistorialPedidos></MenuHistorialPedidos>
        :null
        }

        

    <Footer></Footer>
    
    </>

)
}