import { assert, expect } from "chai";
import { PaymentHistory } from "../src/PaymentHistory/index.js";
import nock from "nock";

describe("Payment History Unit Test", function () {
	it("Should returns 500 as response - POST", async function () {
		const req = {
			method: "POST",
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

		nock("https://myecpalpha.aafes.com/DEV-MYECP/api/v2")
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/payment-history`
			)
			.reply(200, responseData);
		// invoke the function

		await PaymentHistory(req, res);
		expect(statusCode).to.equal(200);
	});

	it("Should returns 500 as response - POST", async function () {
		const req = {
			method: "POST",
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

		nock("https://myecpalpha.aafes.com/DEV-MYECP/api/v2")
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/payment-history`
			)
			.reply(500, responseData);
		// invoke the function

		await PaymentHistory(req, res);
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
		await PaymentHistory(req, res);
		// Assert
		expect(statusCode).to.equal(204);
	});
});
