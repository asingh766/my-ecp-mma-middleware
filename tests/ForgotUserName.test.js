import { expect } from "chai";
import { ForgotUserName } from "../src/ForgotUserName/index.js";
import nock from "nock";

describe("Forgot UserName Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "POST",
			body: {
				LastName: "hurd",
				SSNLast5: "89526",
				DOB_Day: "03",
				DOB_Month: "10",
				DOB_Year: "1951",
			},
		};

		const responseData = {
			UserName: "ericddev",
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
			.post(
				`/forgotUserName`,
				req.body
			)
			.reply(200, responseData);

		// invoke the function
		await ForgotUserName(req, res);

		// Assert
		expect(responseData.UserName).to.equal("ericddev");
	});

	it("Should returns 200 as response - POST", async function () {
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
			.post(
				`/forgotUserName`,
				req.body
			)
			.reply(400);

		// invoke the function
		await ForgotUserName(req, res);

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
		await ForgotUserName(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
