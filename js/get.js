async function getAPI() {
    try {
        const response = await axios.get('https://6633ff6c9bb0df2359a07faa.mockapi.io/productos');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default getAPI;