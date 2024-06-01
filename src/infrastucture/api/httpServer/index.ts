import axios, { AxiosRequestConfig } from "axios";

const httpServer = async (param: AxiosRequestConfig<any>) => {
	let config = { ...param };
		
	// UnComment this if you need to add bearer token
	// config = {
	// 	...param,
	// 	headers: {
	// 		Authorization: "Bearer " + localStorage.getItem("token"),
	// 	},
	// };

	const response = await axios(config);
	if (response.status !== 200) {
		throw new Error("Failed to fetch data");
	}

	return response.data;
};

export default httpServer;
