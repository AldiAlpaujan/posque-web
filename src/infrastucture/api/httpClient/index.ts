"use client";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const httpClient = async (config: AxiosRequestConfig) => {
	let data = null;
	let error = null;
	try {
		// Uncomment this if you need to add bearer token
		// config = {
		// 	...config,
		// 	headers: {
		// 		Authorization: "Bearer " + localStorage.getItem("token"),
		// 	},
		// };
		const response = await axios(config);
		data = response.data;
	} catch (err) {
		if(err instanceof AxiosError){
			if(err.response !== undefined){
				error = err.response.data;
			}else{
				error = err;
			}
		}else{
			throw err;
		}
	}

	return { data, error }
};

export default httpClient;
