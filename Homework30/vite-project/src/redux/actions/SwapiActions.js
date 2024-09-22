export const fetchData = (url) => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
};


export const clearData = () => ({
    type: 'CLEAR_DATA',
});