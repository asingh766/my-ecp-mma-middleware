const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.Alerts = (req, res) => {
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
				getAlerts(req, res);
				break;
			case "PUT":
				updateAlerts(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}
	}
};

const getAlerts = async (req, res) => {
	try {
		let response = await getAlertsData(req);
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

const updateAlerts = async (req, res) => {
	try {
		let response = await updateAlertsData(req);
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

const getAlertsData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/alerts`, 
		{
			headers: {
				'apipsk': headerPassword ,
			}
		}
	);
}

const updateAlertsData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.put(`${process.env.baseUrl}/users/${req.query.userId}/alerts`, 
		req.body,
		{
			headers: {
				'apipsk': headerPassword , 
			}
		}
	);
}