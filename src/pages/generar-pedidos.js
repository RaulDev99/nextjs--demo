import Link from "next/link";
import { useEffect,useRef } from "react";
import { useState } from "react";
import Footer from "../components/footer";
import TimeAgo from "../components/Pedidos/TimeAgo";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
import { getPedidosPendientes, updatePedidos } from "../firebase/firebase";
import { Field, Form, Formik } from "formik";
import { makePublicRouterInstance } from "next/router";


const userData = [
    { 
    createdAt: "30 de abril de 2022",
    descripcion: "Bornas dobles 2'5mm",
    estado: "Pendiente de enviar",
    id: "DtuRp0fauLsbo",
    referencia: 13456,
    timeAgo: 1651315603312,
    unidadesAlmacen: 2},
    { 
    createdAt: "30 de abril de 2022",
    descripcion: "Bornas dobles 2'5mm",
    estado: "Pendiente de enviar",
    id: "DtuRp0fauLsbozPnNkvF",
    referencia: 13456,
    timeAgo: 1651315603312,
    unidadesAlmacen: 2}

    
  ];

export default function GenerarPedidos(){
    const [pedidosPendientes,setPedidosPendientes] = useState([])
    const [verPDF,setVerPDF] = useState(true)
    const [pedidoSelected,setPedidoSelected] = useState([])
    const [idPendientes,setIdPendientes]= useState([])
    const [generarPedidos,setGenerarPedidos] = useState ([])
    const [errorMessage,setErrorMessage] = useState ([])
    const [pedidoRealizado,setPedidoRealizado] = useState(false)
    useEffect(()=>{
            getPedidosPendientes().then(setPedidosPendientes)
            setPedidoRealizado(false)
        },[pedidoRealizado])
        
    useEffect(()=>{
        pedidosPendientes.map((element)=>{
            setIdPendientes(oldPendientes=>[...oldPendientes,element.id]) 
        })
    },[pedidosPendientes])

    useEffect(()=>{
        
        pedidosPendientes.map((pedido)=>{
            
            if (pedido.isChecked ){
                // && !pedidoSelected.includes(pedido)
                if (pedidosPendientes.length)
                
                setPedidoSelected(oldSelect=>[...oldSelect,pedido])


            }else {
                
                if(!pedido.isChecked ){
                    pedidoSelected.splice(pedido)
                } 
            }  
        })
        
    },[pedidosPendientes])


    const generarAhora = async() =>{
        
        console.log(pedidoSelected)
        pedidoSelected.map((pedido)=>{
            updatePedidos(pedido.id)
        })
        
     if (pedidoSelected.length>0) {
        const doc = new jsPDF()
    
        doc.autoTable({
            body: pedidoSelected,
            columns: [
                { header: 'Referencia', dataKey: 'referencia' },
                { header: 'Descricpcion', dataKey: 'descripcion' },
                { header: 'Unidades en el almacen', dataKey: 'unidadesAlmacen' },
              ],
            
          })
        doc.save('prueba.pdf')
        setPedidoSelected([])
        
        setPedidoRealizado(true)
        }else{
            setErrorMessage("Debes seleccionar al menos un elemento")
        }

        
        
     }   

  const handleChange = (e) => {
    const { name, checked } = e.target;
    
    if (name === "allSelect") {
        
      let tempUser = pedidosPendientes.map((user) => {
        return { ...user, isChecked: checked };
        
      });
      setPedidosPendientes(tempUser);
      setPedidoSelected([])
    } else {

      let tempUser = pedidosPendientes.map((pedido) =>
        pedido.id === name ? 
        { ...pedido, isChecked: checked } 
        : pedido
        
      );
      
      setPedidosPendientes(tempUser);
      setPedidoSelected([])
    }
    setErrorMessage()
  };

    

    return(
             <div className="mb-20">
                 {errorMessage ? <div className="italic flex justify-center text-red-500">{errorMessage}</div> :null}

                 {pedidosPendientes == '' ?<div className="text-center italic p-4">No tienes pedidos pendientes para generar</div>
                 :
                 <div>
                <form >
                    <div className="flex justify-center items-center mt-2">
                        <input 
                        type="checkbox" 
                        name="allSelect" 
                        checked={!pedidosPendientes.some((pedido) => pedido?.isChecked !== true)}
                        onChange={handleChange}
                        
                        className="form-check-input  appearance-none h-6 w-6 border  border-gray-300 rounded-md"/>
                        <label className="mx-2" >Seleccionar todo</label>
                    </div>
             
                 
              {pedidosPendientes.map((pedido)=>{ 
                  
                     return(
                         
                             <div key={pedido.id}  onChange={handleChange} className= {"form-check bg-white  flex  mx-2 my-2 px-4 py-2 rounded-md shadow-lg items-center"  + (pedido.isChecked ? "bg-white border-2 border-cyan-600 items-center":"")}  >
                                 
                                 <input
                                 onChange={handleChange}
                                 checked={pedido?.isChecked || false}
                                 type="checkbox" 
                                 name={pedido.id}
                                 className="form-check-input  appearance-none mr-4 h-6 w-6 border border-gray-300 rounded-full ">
                                </input> 
                                
                                <div className="w-full">

                                
                                    <div className="flex items-center px-6">
                                        <b>
                                            {pedido.referencia ?
                                            pedido.referencia
                                            : "---"
                                            }
                                        </b>
                                        <TimeAgo timeAgo={pedido.timeAgo} className="text-gray-600 text-xs mx-1 ml-auto"/>
                                    </div>
                                    <h1 className="bg-blue-200 text-center">{pedido.descripcion}</h1>
                                 
                                    <div>
                                        <h1 className="">Unidades en el almacen: {pedido.unidadesAlmacen} </h1>
                                        {
                                        pedido.estado == 'Pendiente de enviar' ?
                                        <div className="flex items-center font-semibold italic text-red-500 ">
                                            <div className="h-2 w-2  mr-2 bg-red-500  rounded-full" ></div>
                                            <h1>{pedido.estado}</h1>
                                        </div>
                                        :null
                                        }
                                     
                                    </div> 
                                    <button type="submit">Submit</button> 
                                    
                                 </div>
                                               
                             </div>
                               
                     )})}
                         
                </form> 
                        <div className=" mx-4 text-white"  >
                            <button onClick={generarAhora} type="submit" className="bg-blue-400 p-2 font-semibold rounded-md w-full ">GENERAR AHORA</button>
                        </div>
                </div>
                 }
                 


                
                                 

             <Footer></Footer>
               
        
        
            </div>

)

}
    




