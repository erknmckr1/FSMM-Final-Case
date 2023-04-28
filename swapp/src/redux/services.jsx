import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchSWshıps = createAsyncThunk(
    "swap/shıps",
    async({page})=>{
        try{
            const {data:response}= await axios(`https://swapi.dev/api/starships/?page=${page}&per_page=10`)
            return  { ships:response.results, totalCount: response.count, currentPage: page };
        }catch(error){
            console.log(error)
        }
    }
)