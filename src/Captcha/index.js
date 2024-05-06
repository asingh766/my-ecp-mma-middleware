const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.Captcha = async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
	} else {
		try {
			let response = await getCaptcha(req);
			console.log("API Response:: ", response);
			console.log("API Response Data:: ", response.data);
			console.log("API Response Headers:: ", response.headers);
			res.setHeader('content-type', response.headers['content-type']);
			res.setHeader('Captcha', response.headers['captcha']);
			res.setHeader("Access-Control-Expose-Headers", "*");
			res.status(200).send(Buffer.from(response.data, 'binary'));
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

const getCaptcha = async (req) => {
	let headerPassword = process.env.headerPassword;
	return await axios.get(`${process.env.baseUrl}/captcha`, 
		{
			headers: {
				'apipsk': headerPassword ,
			},
			responseType: 'arraybuffer'
		}
	);
}