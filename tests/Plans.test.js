import { assert, expect } from "chai";
import { Plans } from "../src/Plans/index.js";
import nock from "nock";

describe("Plans Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414", accountNo: 6019450400085430 },
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
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/plans`
			)
			.reply(200, responseData);
		// invoke the function
		await Plans(req, res);
		expect(statusCode).to.equal(200);
	});

	it("Should returns 400 as response - GET", async function () {
		const req = {
			method: "GET",
			query: { accountNo: 6019450400085430 },
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
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/plans`
			)
			.reply(400, responseData);
		// invoke the function
		await Plans(req, res);
		expect(statusCode).to.equal(400);
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
		await Plans(req, res);
		// Assert
		expect(statusCode).to.equal(204);
	});
});
