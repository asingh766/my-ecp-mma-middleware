import { expect, assert } from "chai";
import { FederalRates } from "../src/FederalRates/index.js";
import nock from "nock";

describe("Federal Rates Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = { method: "GET", userId: "5414" };

		const responseData = {
			APR: 0,
			PNLTY_APR: 0,
			PRIME_RATE: 0,
			DLY_APR_PIR: 0,
			PNLTY_DLY_PIR: 0,
			EFF_DATE: "string",
			Month: "string",
		};
		nock(`${process.env.baseUrl}`)
			.get(`/federal-rates`)
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
		await FederalRates(req, res).then((response) => {
			assert.deepEqual(responseData.APR, 0);
		});
	});

	it("Should returns 200 as response - GET", async function () {
		const req = { method: "GET", userId: "5414" };

		const responseData = {
			APR: 0,
			PNLTY_APR: 0,
			PRIME_RATE: 0,
			DLY_APR_PIR: 0,
			PNLTY_DLY_PIR: 0,
			EFF_DATE: "string",
			Month: "string",
		};
		nock(`${process.env.baseUrl}`)
			.get(`/federal-rates`)
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
		await FederalRates(req, res).then((response) => {
			assert.deepEqual(responseData.APR, 0);
		});
	});

	it("Should returns 400 as response - GET", async function () {
		const req = { method: "GET", userId: "5414" };

		const responseData = {
			APR: 0,
			PNLTY_APR: 0,
			PRIME_RATE: 0,
			DLY_APR_PIR: 0,
			PNLTY_DLY_PIR: 0,
			EFF_DATE: "string",
			Month: "string",
		};
		nock(`${process.env.baseUrl}`)
			.get(`/federal-rates`)
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
		await FederalRates(req, res)
		expect(statusCode).to.equal(400)
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
		await FederalRates(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
