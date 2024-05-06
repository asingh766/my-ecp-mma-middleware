const axios = require('axios');

exports.Address = (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
    } else {
		switch (req.method) {
			case "GET":
				getAddress(req, res);
				break;
			case "PUT":
				updateAddress(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}
    }
};

const getAddress = async (req, res) => {
	try {
		let response = await getAddressData(req);
		console.log("API Response:: ", response);
		console.log("API Response Data:: ", response.data);
		res.status(200).send(JSON.stringify(response.data));
	} catch (error) {
		console.log("API Error:: " + error);
		if (error.response) {
			console.log("API Error Data:: ", error.response.data);
			console.log("API Error Code:: ", error.response.status);
		}
		res.status(error.response.status).send(error.response.data);
	}
};

const updateAddress = async (req, res) => {
	try {
		let response = await updateAddressData(req);
		console.log("API Response:: ", response);
		console.log("API Response Data:: ", response.data);
		res.status(200).send(JSON.stringify(response.data));
	} catch (error) {
		console.log("API Error:: " + error);
		if (error.response) {
			console.log("API Error Data:: ", error.response.data);
			console.log("API Error Code:: ", error.response.status);
		}
		res.status(error.response.status).send(error.response.data);
	}
};

const getAddressData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/address`, 
		{
			headers: {
				'apipsk': headerPassword , 
			}
		}
	);
}

const updateAddressData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.put(`${process.env.baseUrl}/users/${req.query.userId}/address`, 
		req.body,
		{
			headers: {
				'apipsk': headerPassword,
			}
		}
	);
}