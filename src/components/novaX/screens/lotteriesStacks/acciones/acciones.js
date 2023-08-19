import axios from "axios";

const suscribe = async (userId, gameId) => {
    const body = {
        salespersonId: userId,
        lotteryId: gameId
    }

    console.log(body);
    console.log('Llamado nuevamente');
    const handle = await axios.post('/app/game/suscribe', body)
    .then((res) => {
        console.log('Aqui estamos');
        if(res.status == 201){
            return 201
        }
    })
    .catch((err) => {
        console.log(err);
        console.log('aqui estamos en error');
        if(err.request.status == 404){
            return 404
        }else if (err.request.status == 502){
            return 502
        }else if (err.request.status == 501){
            return 501
        }else{
            return 500
        }
    })
    return handle;
}

export { suscribe }