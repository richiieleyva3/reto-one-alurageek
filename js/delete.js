async function deleteAPI(id) {
    try {
        const response = await axios.delete(`https://6633ff6c9bb0df2359a07faa.mockapi.io/productos/${id}`);
        location.reload();
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default deleteAPI;
