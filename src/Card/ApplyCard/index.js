const axios = require('axios');

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const Joi = require("joi");

const ApplyCardSchema = Joi.object({
  FirstName: Joi.string().required(),
  MiddleInitial: Joi.string().required(),
  LastName: Joi.string().required(),
  Suffix: Joi.string().required().max(3),
  DateOfBirth: Joi.date().required(),
  SSN: Joi.number().integer().required(),
  AddressLine1: Joi.string().required(),
  AddressLine2: Joi.string().required(),
  City: Joi.string().required(),
  State: Joi.string().required(),
  ZipCode: Joi.number().integer().required(),
  YearsAtAddressSelect: Joi.number().integer().required(),
  MonthsAtAddressSelect: Joi.number().integer().required(),
  MonthlySalary: Joi.number().integer().required(),
  Employer: Joi.string().required(),
  YearsAtEmployer: Joi.number().integer().required(),
  MonthsAtEmployer: Joi.number().integer().required(),
  MotherMaiden: Joi.string().required(),
  Email: Joi.string().email().required(),
  MonthlyHousePayment: Joi.number().integer().required(),
  PrimaryNo: Joi.number().integer().required(),
  AcceptTerms: Joi.boolean().required(),
  AcceptTerms2: Joi.boolean().required(),
  CapValue: Joi.string().required(),
});

exports.ApplyCard = async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
	} else {
		try {
			//await ApplyCardSchema.validateAsync(req.body, { abortEarly: false });
			let response = await createCardData(req); 
			console.log("API Response:: ", response);
			console.log("API Response Data:: ", response.data);
			res.status(200).send(JSON.stringify(response.data));
		} catch (error) {
			// const errorMessages = error.details?.map((err) =>
			// 	err.message.replace(/"/g, "")
			// );
			console.log("API Error:: " + error);
			if (error.response) {
				console.log("API Error Data:: ", error.response.data);
				console.log("API Error Code:: ", error.response.status);
			}
			res.status(error.response.status).send(error.response.data);
			//return res.status(400).send({ errors: errorMessages });
		}
	}
};

const createCardData = async (req) => {
  let headerPassword = process.env.headerPassword;
	console.log(req.body);
	return await axios.post(`${process.env.baseUrl}/cards/apply`, 
		req.body, 
		{
			headers: {
				'apipsk': headerPassword
			}
		}
	);
}