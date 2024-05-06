import { expect } from "chai";
import { ForgotPasswordSQ } from "../src/Password/ForgotPasswordSQ/index.js";
import nock from "nock";

describe("Forgot Password SQ Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "GET",
			body: {
				UserName: "ericddev",
				Question1Id: 302,
				Question1Text: "What was the name of your high school?",
				Answer1: "Test",
				Question2Id: 201,
				Question2Text: "What was the name of your high school?",
				Answer2: "Test",
			},
		};

		const responseData = {
			message: "Security Answers validation is successful",
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
			.post(`/forgotPasswordSQ`, req.body)
			.reply(200, responseData);

		// invoke the function
		await ForgotPasswordSQ(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 400 as response - POST", async function () {
		const req = {
			method: "GET",
			body: {

				Question1Id: 302,
				Question1Text: "What was the name of your high school?",
				Answer1: "Test",
				Question2Id: 201,
				Question2Text: "What was the name of your high school?",
				Answer2: "Test",
			},
		};

		const responseData = {
			message: "Security Answers validation is successful",
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
			.post(`/forgotPasswordSQ`, req.body)
			.reply(400, responseData);

		// invoke the function
		await ForgotPasswordSQ(req, res);

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
		await ForgotPasswordSQ(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
