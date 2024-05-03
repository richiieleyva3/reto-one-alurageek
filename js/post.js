async function postAPI(producto) {
    try {
        const response = await axios.post(`https://6633ff6c9bb0df2359a07faa.mockapi.io/productos/`, producto);
        location.reload();
        return response.data;
    } catch (error) {
        console.error('Error occurred while posting data:', error);
        throw error;
    }
}

export default postAPI;