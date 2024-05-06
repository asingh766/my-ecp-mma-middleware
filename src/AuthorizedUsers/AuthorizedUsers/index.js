const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.AuthorizedUsers = async (req, res) => {
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
				getAuthorizedUsers(req, res);				
				break;
			case "POST":
				createAuthorizedUsers(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}
	}
};

const getAuthorizedUsers = async (req, res) => {
	try {
		let response = await getAuthorizedUsersData(req);
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

const createAuthorizedUsers = async (req, res) => {
	try {
		let response = await createAuthorizedUsersData(req);
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

const getAuthorizedUsersData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`, 
		{
			headers: {
				'apipsk': headerPassword,
			}
		}
	);
}

const createAuthorizedUsersData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.post(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`, 
		req.body, 
		{
			headers: {
				'apipsk': headerPassword,
			}
		}
	);
}