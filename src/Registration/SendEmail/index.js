const axios = require('axios');

/**
 * HTTP Cloud Function that makes an HTTP request
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.SendEmail = async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
	} else {
		try {
			let response = await sendEmail(req);
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
  	}
};

const sendEmail = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.post(`${process.env.baseUrl}/registration/send-email`,
		req.body,
		{
			headers: {
				'apipsk': headerPassword ,
			}
		}
	);
}