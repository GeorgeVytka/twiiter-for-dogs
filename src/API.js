const API_URL = 'http://localhost:3000/woofs';

export async function createTwitterEntry(entry){

    const respones = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            
          },
          body: JSON.stringify(entry),
    })
}

export async function ListTwitter(){
    const respone = await fetch(`${API_URL}`);
    return respone.json();
}