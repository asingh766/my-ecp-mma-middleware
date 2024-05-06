const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.UserEmailAddress = async (req, res) => {
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
				getUserEmailAddress(req, res);
				break;
			case "PUT":
				updateUserEmailAddress(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}
	}
};

const getUserEmailAddress = async (req, res) => {
	try {
		let response = await getUserEmailData(req);
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

const updateUserEmailAddress = async (req, res) => {
	try {
		let response = await updateUserEmailAddressData(req);
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

const getUserEmailData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/email-address`, 
		{
			headers: {
				'apipsk': headerPassword ,
			}
		}
	);
}

const updateUserEmailAddressData = async (req) => {
	let headerPassword = process.env.headerPassword;
	console.log(req.body);
	return await axios.put(`${process.env.baseUrl}/users/${req.query.userId}/email-address`, 
		req.body, 
		{
			headers: {
				'apipsk': headerPassword ,
			}
		}
	);
}