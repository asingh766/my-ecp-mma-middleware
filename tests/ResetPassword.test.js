import { expect, assert } from "chai";
import { ResetPassword } from "../src/Password/ResetPassword/index.js";
import nock from "nock";

describe("Reset Password Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "GET",
			body: {
				NewPassword: "Test",
				ConfirmPassword: "Test",
			},
		};

		const responseData = {
			message: "Undefined",
		};

		nock(`${process.env.baseUrl}`)
			.post(`/resetPassword`)
			.reply(400, responseData);

		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};

		// invoke the function
		await ResetPassword(req, res);

		// Assert
		expect(statusCode).to.equal(400);
	});

	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "GET",
			userId: "5414",
			body: {
				UserName: "MMACCXPrime1",
				NewPassword: "Test",
				ConfirmPassword: "Test",
			},
		};

		const responseData = {
			message: "Successful",
		};

		nock(`${process.env.baseUrl}`)
			.post(`/resetPassword`)
			.reply(200, responseData);

		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};

		// invoke the function
		await ResetPassword(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("If Response is 204", async function () {
		const req = { method: "OPTIONS" };
		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};

		// invoke the function
		await ResetPassword(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});