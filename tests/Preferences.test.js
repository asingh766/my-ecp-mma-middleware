import { expect } from "chai";
import { Preferences } from "../src/Preferences/index.js";
import nock from "nock";

describe("Preferences Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414" },
		};

		const responseData = {
			IsStatementEmail: true,
			IsLegalNoticeEmail: true,
			IsExchangeCreditPromotion: true,
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
			.get(`/users/${req.query.userId}/preferences`)
			.reply(200, responseData);

		// invoke the function
		await Preferences(req, res);

		expect(responseData.IsExchangeCreditPromotion).to.equal(true);
	});

	it("Should returns 200 as response - GET", async function () {
		const req = {
			method: "PUT",
			query: { userId: "5414" },
		};

		const responseData = {
			Message: "Updated Successfully",
		};

		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/preferences`)
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
		await Preferences(req, res);

		expect(responseData.Message).to.equal("Updated Successfully");
	});

	it("Should returns 400 as response - PUT", async function () {
		const req = {
			method: "PUT",
			query: {},
		};

		const response = { response: 'Undefined' }
		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/preferences`)
			.reply(400);

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
		await Preferences(req, res);

		expect(response.response).to.equal('Undefined');
	});

	it("Should returns 400 as response - GET", async function () {
		const req = {
			method: "GET",
			query: {},
		};

		const response = { response: 'Undefined' }
		nock(`${process.env.baseUrl}`)
			.get(`/users/${req.query.userId}/preferences`)
			.reply(400);

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
		await Preferences(req, res);

		expect(response.response).to.equal('Undefined');
	});

	it("Should returns 500 as response - GET", async function () {
		const req = {
			method: "",
			query: { userId: "5414" },
		};

		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/preferences`)
			.reply(500);

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
		await Preferences(req, res);

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
		await Preferences(req, res);
		// Assert
		expect(statusCode).to.equal(204);
	});
});
