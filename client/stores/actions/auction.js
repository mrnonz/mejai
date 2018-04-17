import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const getCurrentTimeSuccess = (time) => ({
    type: 'GET_TIME_SUCCESS',
    time
})

export const getCurrentTime = () => (
    (dispatch) => {
        const getUrl = `${url}/time`
        return Axios.get(getUrl)
            .then((response) => {
                dispatch(getCurrentTimeSuccess(response))
            }) 
            .catch((error) => {
                throw(error);
            })
    }
)