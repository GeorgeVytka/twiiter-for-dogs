const API_URL = 'http://localhost:3000/woof';

export async function createTwitterEntry(entry){

    const respones = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            
          },
          body: JSON.stringify(entry),
    });
}