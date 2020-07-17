const API_URL = 'http://localhost:3000';


export async function createTwitterEntry(entry){

    const respones = await fetch(`${API_URL}/woof`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            
          },
          body: JSON.stringify(entry),
    })
}

export async function ListTwitter(){
    const respone = await fetch(`${API_URL}/woofs`);
    return respone.json();
}