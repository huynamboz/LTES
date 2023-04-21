export default (haveToken, noneToken) => ({
    getInfoMe: async(idProduct)=>{
        return await haveToken.get(`/users/me`);
    }
})