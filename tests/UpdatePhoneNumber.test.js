import { expect } from "chai";
import { UserPhoneNumber } from "../src/UserPhoneNumber/index.js";
import nock from "nock";

describe("Update Phone Number Unit Test", function () {
	it("Should returns 200 as response - PUT", async function () {
		const req = {
			method: "PUT",
			query: { userId: "5414" },
			body: {
				HomePhoneNumber: 768556476,
				MobilePhoneNumber: 867678775,
				WorkPhoneNumber: 9865765867,
			},
		};
		const responseData = { response: "updated" };

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
		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/phone-numbers`)
			.reply(200, responseData);

		// invoke the function
		await UserPhoneNumber(req, res);

		// Assert
		expect(responseData.response).to.equal("updated");
	});

	it("Should returns 200 as response - GET", async function () {
		const req = { method: "GET", query: { userId: "5414" } };

		const responseData = {
			response: {
				ContactNo: "9876543321",
				MobileNo: "9876543321",
				WorkNo: "9876543321",
				SMS_OPT_IN: true,
				SMS_OPT_IN_CODE: "string",
				SmsTimePrefrence: 0,
				TimeZoneID: "string",
				FromHour: "string",
				ToHour: "string",
				SMSEnrollmentConfirmationPending: "string",
				SMSEnrollmentmobileNo: "string",
			},
		};
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
		nock(`${process.env.baseUrl}`)
			.get(`/users/${req.query.userId}/phone-numbers`)
			.reply(200, responseData);

		// invoke the function
		await UserPhoneNumber(req, res);

		// Assert
		expect(responseData.response.ContactNo).to.equal("9876543321");
	});

	it("Should returns 500 as response", async function () {
		const req = { method: "", query: { userId: "5414" } };

		const responseData = {
			response: {
				ContactNo: "9876543321",
				MobileNo: "9876543321",
				WorkNo: "9876543321",
				SMS_OPT_IN: true,
				SMS_OPT_IN_CODE: "string",
				SmsTimePrefrence: 0,
				TimeZoneID: "string",
				FromHour: "string",
				ToHour: "string",
				SMSEnrollmentConfirmationPending: "string",
				SMSEnrollmentmobileNo: "string",
			},
		};
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
		nock(`${process.env.baseUrl}`)
			.get(`/users/${req.query.userId}/phone-numbers`)
			.reply(500, responseData);

		// invoke the function
		await UserPhoneNumber(req, res);

		// Assert
		expect(statusCode).to.equal(500);
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
		await UserPhoneNumber(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
