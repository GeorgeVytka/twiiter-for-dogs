import React, { useState, useEffect } from 'react';
import {ListTwitter} from './API';
import Database from './Database';


const ListAllWoofs =  () => {
    const [logEntries, setLogEntries] = useState([]);
   
    const  getTwiites = async () =>{
        const logEntries = await ListTwitter();
        setLogEntries(logEntries);
       
      
           
    }
    
    useEffect(() => {
        getTwiites();
      }, []);



   

    return(
        <div>
           {
           logEntries.map( entry => 
               (<Database 
               key={entry._id}
               name={entry.name}
               content={entry.content}
               />)
        )
           }
        </div>
    )

    }
export default ListAllWoofs;