import axios from "axios"

const createTicket = async (data, numeros,sorteo,salesperson) => {
    const body = {
        "nameUser": data.nameUser,
        "phoneUser": data.phoneUser,
        "nros": numeros.length,
        "numeros": numeros,
        "salespersonId": salesperson,
        "lotteryId": sorteo
    }
    const newTicket = await axios.post('/app/lottery/ticket/new', body)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
        console.log('Error en acciones.js');
    })
    return newTicket;
}
export { createTicket }
