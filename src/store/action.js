import axios from 'axios'

// export const ADD_SHIFTS = "ADD_SHIFTS";
// export const REMOVE_SHIFTS = "REMOVE_SHIFTS";
// export const GET_SHIFTS = 'GET_SHIFTS'
// export const POST_SHIFT = 'POST_SHIFT'

// export function addShifts(payload) {
//     return { type: "ADD_SHIFTS", payload };
// }


// export function getData(payload) {
//     return { type: "GET_DATA", payload };
// }

// export const getShifts = () => dispatch => {
//     let URL = `http://192.168.0.209:5000/peluAPP/turnos`
//     axios.get(URL)
//         .then(res => {
//             dispatch({ type: 'GET_SHIFTS', payload: res.data})
//         }).catch(err => {
//             dispatch({ type: 'GET_SHIFTS', payload: err })
//         })
//     }

//     export const postShift = (shift) => dispatch => {
//         let URL = `http://192.168.0.209:5000/peluAPP/turnos`
//         axios.post(URL, shift, {headers: {'Content-Type': 'application/json'}})
//         .then(res => {
//             dispatch({ type: 'POST_SHIFT', payload: res.status })
//         }).catch(err => {
//             dispatch({ type: 'POST_SHIFT', payload: err })
//         })
//     }

//     export const removeShifts = (payload) => {
//         let URL = `http://192.168.0.209:5000/peluAPP/turnos`
//         axios ({
//             method:'DELETE',
//             url: URL,
//             data: payload,
//             headers: {'Content-Type': 'application/json'}
//         })
//         getShifts()
//     }


