import { create } from "zustand";

interface productProps{
    product_type:string;
    description:string;
    product:string;
    total:string;
}

interface storeProps{
    products:productProps[],
    setProducts:(values:productProps[])=>void;    
}

export const useStore=create<storeProps>((set)=>(
    {
        products:[
            {
                product:'',
                product_type:'',
                description:'',
                total:''
            }
        ],
        setProducts:(data)=> {
            set((state)=>({
                ...state,
                products: data
            }))
        },
    }
))
export default useStore;