import { useEffect,useState } from "react";
import axios from 'axios'
const DisplayList=()=>{
const [data,setData]=useState({});
   useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await fetch('https://cdn.drcode.ai/interview-materials/products.json')
            setData(response.data)
            console.log(response);
            }
            catch(err){
                console.log("Unable to fetch", err);
            }
    }
    fetchData();
   },[]);

   return(
    <>
    <h1>Hello</h1>
    </>
   )
}
export default DisplayList;