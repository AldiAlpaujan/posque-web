"use client";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const RequestComponent = (param: AxiosRequestConfig<any>) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		let config = { ...param };

		// UnComment this if you need to add bearer token
		// config = {
		// 	...param,
		// 	headers: {
		// 		Authorization: "Bearer " + localStorage.getItem("token"),
		// 	},
		// };

		axios(config)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				if (error.response !== undefined) {
					setError({
						status: error.response.status,
						type: error.name,
						message: error.message,
					});
				} else {
					setError({
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					});
				}
			});
	}, [param]);

	return { data, error };
};

const httpClient = (param: AxiosRequestConfig) => {
	return RequestComponent(param);
};

export default httpClient;
