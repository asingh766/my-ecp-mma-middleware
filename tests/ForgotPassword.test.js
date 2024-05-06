import { expect } from "chai";
import { ForgotPassword } from "../src/Password/ForgotPassword/index.js";
import nock from "nock";

describe("Forgot Password Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "POST",
			body: {
				UserName: "ericddev",
				SSNLast5: "89526",
				DOB_Day: "03",
				DOB_Month: "10",
				DOB_Year: "1951",
			},
		};

		const responseData = {
			Question1Id: 1,
			Question1Text: "What is your native place",
			Question2Id: 2,
			Question2Text: "What is your best friend name",
		};

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		nock(`${process.env.baseUrl}`)
			.post(`/forgotPassword`, req.body)
			.reply(200, responseData);

		// invoke the function
		await ForgotPassword(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 400 as response - POST", async function () {
		const req = {
			method: "POST",
			body: {
				SSNLast5: "89526",
				DOB_Day: "03",
				DOB_Month: "10",
				DOB_Year: "1951",
			},
		};

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		nock(`${process.env.baseUrl}`)
			.post(`/forgotPassword`, req.body)
			.reply(400);

		// invoke the function
		await ForgotPassword(req, res);

		// Assert
		expect(statusCode).to.equal(400);
	});

	it("If Response is 204", async function () {
		const req = { method: "OPTIONS" };

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		// invoke the function
		await ForgotPassword(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
