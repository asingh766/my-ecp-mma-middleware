const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.UserPhoneNumber = (req, res) => {
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
			getUserPhoneNumbers(req, res);
			break;
		case "PUT":
			updateUserPhoneNumbers(req, res);
			break;
		default:
			res.status(500).send({ error: "Something went wrong" });
			break;
		}
	}
};

const getUserPhoneNumbers = async (req, res) => {
	try {
		let response = await getUserPhoneNumbersData(req);
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

const updateUserPhoneNumbers = async (req, res) => {
	try {
		let response = await updateUserPhoneNumbersData(req);
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

const getUserPhoneNumbersData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/phone-numbers`, 
		{
			headers: {
				'apipsk': headerPassword,
			}
		}
	);
}

const updateUserPhoneNumbersData = async (req) => {
	let headerPassword = process.env.headerPassword;
	console.log(req.body);
	return await axios.put(`${process.env.baseUrl}/users/${req.query.userId}/phone-numbers`, 
		req.body, 
		{
			headers: {
				'apipsk': headerPassword ,
			}
		}
	);
}
