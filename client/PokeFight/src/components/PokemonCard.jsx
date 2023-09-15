// import tailwind from "tailwindcss";
import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const url = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();
    console.log(pokemon);
   const [loading, setLoading] = useState(true)  
//    const [url, setUrl] = useState();
   const [nextUrl,setNextUrl]=useState();
   const [prevUrl,setPrevUrl]=useState();
   const [pokeData, setPokeData]=useState([]);






const {name,type,base,id}=pokemon
const showCard = () => {
    if (id) {
        navigate(`/pokemon/${id}`)
    }
}



const pokeFun= async() => {
    setLoading(true)
     const res=await axios.get(url);
     console.log(res.data)
     setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPoke(res.data.results);
      console.log(res.data.results);
    
     }

     const getPoke=async(res)=>{
      res.map(async(item)=>{
         const result=await axios.get(item.url)
         console.log(item.url);
         setPokeData(state=>{
             state=[...state,result.data]
             state.sort((a,b)=>a.id>b.id?1:-1)
             return state;
         })
      })   
   }

 
   useEffect(() => {
    pokeFun();
   },[]);


    return (

        <>
        <div key={id} className="text-lg p-5 bg-orange-500 ml-80 backdrop-filter backdrop-contrast-125" style={{border:"black solid 1px", cursor:"pointer", width:450 }}  onClick={showCard}>
         
         <h1 className="text-lg font-bold underline">
             Name
         </h1>
        
        <p className= "">English: {name?.english} </p>
        <p>Japanese: {name?.japanese} </p>
        <p>Chinese: {name?.chinese} </p>
        <p>French: {name?.french} </p>
        <h1 className="text-lg font-bold underline">Base</h1>
        <p> HP: {base?.HP} </p>
        <p> Defense: {base?.Defense} </p>
        <p> Attack: {base?.Attack} </p>
        <p> Defense: {base?.Defense} </p>
        <p> Speed: {base?.Speed} </p>

        <h2 className="text-lg font-bold underline">Types</h2>
        <ul >
        {type?.map((type) => 
           ( <li>{type}</li>
        )
        )}
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="" />
            {/* console.log(url.res.img); */}
        </ul>
        <div className="place-content-center h-5 ">
      {  prevUrl && <button  onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button> }
       { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button> }
      </div>
        </div>
        </>
    );
    }
    export default PokemonCard