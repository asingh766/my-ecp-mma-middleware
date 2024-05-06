const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.BankProfile = async (req, res) => {
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
				getBankProfiles(req, res);
				break;
			case "POST":
				createBankProfile(req, res);
				break;
			case "PUT":
				createBankProfile(req, res);
				break;
			case "DELETE":
				deleteBankProfile(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}		
  	}
};

const getBankProfiles = async (req, res) => {
	try {
		let response = await getBankProfilesData(req);
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

const createBankProfile = async (req, res) => {
	try {
		let response = await createBankProfileData(req);
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

const deleteBankProfile = async (req, res) => {
	try {
		let response = await deleteBankProfileData(req);
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

const getBankProfilesData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/bank-profiles`, 
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}

const createBankProfileData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.post(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/bank-profiles`, 
		req.body,
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}

const deleteBankProfileData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.delete(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/bank-profiles/${req.query.profileNo}`, 
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}
