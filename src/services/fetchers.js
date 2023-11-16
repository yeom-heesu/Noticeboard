

export const fetchMessage = async function (){
    const response = await this.$axios.get('/').catch(function (error){
        if (error.response){
            console.log(error.response.data);
        }else if (error.request){
            console.log(error.request);
        }else{
            console.log("Error",error.message);
        }
        console.log(error.config);
    });
    console.log(response.data.message);
    return response.data.message;
}