let token = `17b4484bcf6ce4a4f891b7be7258dd918b621503859affcb`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-inventory-api.herokuapp.com/api/characters`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://marvel-inventory-api.herokuapp.com/api/characters`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create data from server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://marvel-inventory-api.herokuapp.com/api/characters/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to UPDATE data from server')
        }

        return await response.json()
    },

    delete: async (id:string ) => {
        const response = await fetch(`https://marvel-inventory-api.herokuapp.com/api/characters/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
            
        });

        
    }
}