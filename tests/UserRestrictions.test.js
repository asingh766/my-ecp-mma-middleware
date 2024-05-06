import { assert, expect } from "chai";
import sinon from "sinon";
import { UserRestrictions } from "../src/UserRestrictions/index.js";
import nock from "nock";

describe("UserRestrictions Unit Test", function () {
	it("Should return 500 as status", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414", accountNo: "6019450400085430" },
		};

		// Mock response data
		const responseData = {
			AccountNo: "string",
			CanViewAccountSummary: true,
			CanViewAccountActivity: true,
			CanMakeOrEditPayment: true,
			CanAddOrEditPaymentProfile: true,
			CanViewPaymentHistory: true,
			CanReportLostOrStolenCard: true,
			CanUpdateContactInformation: true,
			CanManageAuthorizedUsers: true,
			CanCloseOrUpdateAccount: true,
			AlertMessages: [
				{
					Title: "CycleDueAlert-Test",
					Message: "Cycleduealert-Test",
					SeverityType: 50,
				},
			],
		};

		nock("https://myecpalpha.aafes.com/DEV-MYECP/api/v2")
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/restrictions`
			)
			.reply(500, responseData);

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

		await UserRestrictions(req, res);

		//assert.deepEqual(JSON.parse(result), responseData);
		assert.equal(statusCode, 500);
	});

	it("Should return 200 as status", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414", accountNo: "6019450400085430" },
		};

		// Mock response data
		const responseData = {
			AccountNo: "6019450400085430",
			CanViewAccountSummary: true,
			CanViewAccountActivity: true,
			CanMakeOrEditPayment: true,
			CanAddOrEditPaymentProfile: true,
			CanViewPaymentHistory: true,
			CanReportLostOrStolenCard: true,
			CanUpdateContactInformation: true,
			CanManageAuthorizedUsers: true,
			CanCloseOrUpdateAccount: true,
			AlertMessages: [
				{
					Title: "CycleDueAlert-Test",
					Message: "Cycleduealert-Test",
					SeverityType: 50,
				},
			],
		};

		nock("https://myecpalpha.aafes.com/DEV-MYECP/api/v2")
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/restrictions`
			)
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

		await UserRestrictions(req, res);

		assert.equal(statusCode, 200);
	});

	it("Should return 200", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414", accountNo: "6019450400085430" },
		};

		// Mock response data
		const responseData = {
			AccountNo: "string",
			CanViewAccountSummary: true,
			CanViewAccountActivity: true,
			CanMakeOrEditPayment: true,
			CanAddOrEditPaymentProfile: true,
			CanViewPaymentHistory: true,
			CanReportLostOrStolenCard: true,
			CanUpdateContactInformation: true,
			CanManageAuthorizedUsers: true,
			CanCloseOrUpdateAccount: true,
			AlertMessages: [
				{
					Title: "CycleDueAlert-Test",
					Message: "Cycleduealert-Test",
					SeverityType: 50,
				},
			],
		};

		// nock("https://myecpalpha.aafes.com/DEV-MYECP/api/v2")
		//   .get(
		//     `/users/${req.query.userId}/accounts/${req.query.accountNo}/restrictions`
		//   )
		//   .reply(500, responseData);

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

		await UserRestrictions(req, res);

		//assert.deepEqual(JSON.parse(result), responseData);
		assert.equal(statusCode, 500);
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
		await UserRestrictions(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
