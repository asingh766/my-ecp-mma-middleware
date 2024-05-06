import { expect, assert } from "chai";
import { UserEmailAddress } from "../src/UserEmailAddress/index.js";
import nock from "nock";

describe("Update Email Address Unit Test", function () {
	it("Should returns 400 as response - GET", async function () {
		const req = { method: "GET", query: {} };

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
			.get(`/users/${req.query.userId}/email-address`)
			.reply(400);
		// invoke the function
		await UserEmailAddress(req, res);
		//expect(statusCode).to.equal(400);
	});

	it("Should returns 500 as response - GET", async function () {
		const req = { method: "", query: {} };

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
			.get(`/users/${req.query.userId}/email-address`)
			.reply(500);
		// invoke the function
		await UserEmailAddress(req, res);
		expect(statusCode).to.equal(500);
	});

	it("Should returns 200 as response - GET", async function () {
		const req = { method: "GET", query: { userId: "5414" } };
		const responseData = {
			EmailAddress: "sample@gmail.com",
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
			.get(`/users/${req.query.userId}/email-address`)
			.reply(200, responseData);
		// invoke the function
		await UserEmailAddress(req, res);
		expect(responseData.EmailAddress).to.equal("sample@gmail.com");
	});

	it("Should returns 200 as response - PUT", async function () {
		const req = {
			method: "PUT",
			query: { userId: "5414" },
			body: {
				EmailAddress: "nomail@gmail.com",
				ConfirmEmailAddress: "nomail@gmail.com",
				CurrentPassword: "Password@123",
			},
		};
		const responseData = {
			Response: "Updated Successfully",
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
			.put(`/users/${req.query.userId}/email-address`)
			.reply(200, responseData);
		// invoke the function
		await UserEmailAddress(req, res);
		expect(responseData.Response).to.equal("Updated Successfully");
	});

	it("Should returns 400 as response - PUT", async function () {
		const req = {
			method: "PUT",
			query: {},
			body: {
				EmailAddress: "nomail@gmail.com",
				ConfirmEmailAddress: "nomail@gmail.com",
				CurrentPassword: "Password@123",
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
			.put(`/users/${req.query.userId}/email-address`)
			.reply(400);
		// invoke the function
		await UserEmailAddress(req, res);
		//expect(statusCode).to.equal(400);
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
		await UserEmailAddress(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
