const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.Payment = (req, res) => {
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
				getPayments(req, res);
				break;
			case "POST":
				createPayment(req, res);
				break;
			case "PUT":
				createPayment(req, res);
				break;
			case "DELETE":
				deletePayment(req, res);
				break;
			default:
				res.status(500).send({ error: "Something went wrong" });
				break;
		}		
  	}
};

const getPayments = async (req, res) => {
	try {
		let response = await getPaymentsData(req);
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

const createPayment = async (req, res) => {
	try {
		let response = await createPaymentData(req);
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

const deletePayment = async (req, res) => {
	try {
		let response = await deletePaymentData(req);
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

const getPaymentsData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/payments`, 
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}

const createPaymentData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.post(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/payments`, 
		req.body,
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}

const deletePaymentData = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.delete(`${process.env.baseUrl}/users/${req.query.userId}/accounts/${req.query.accountNo}/payments/${req.query.paymentNo}`, 
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}
