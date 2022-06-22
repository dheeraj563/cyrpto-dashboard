export async function getAllData() {

    try{
        const response = await fetch('/api/data');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function getDetails() {

    try{
        const response = await fetch('/api/details');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}