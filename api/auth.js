export default (axios1, axios2) => ({
	getUserById: async (idUser) => {
		return await axios2.get(`auth/user/${idUser}`);
	},
})