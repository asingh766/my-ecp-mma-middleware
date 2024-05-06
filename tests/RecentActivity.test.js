import { expect } from "chai";
import { RecentActivity } from "../src/RecentActivity/index.js";
import nock from "nock";

describe("Recent Activity Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = { method: "GET", query: { userId: "5414", accountNo: 6019450400085430 } };

		const responseData = [
			{
				EffectiveDate: "2019-03-14T00:00:00",
				ExchangeName: "ECOM B2C OH GLOBAL",
				Amount: 5,
				TransactionType: "",
				TicketNo: "",
				PlanNo: "10001",
				PlanDesc: "EXCHANGE RETAIL",
				PostingDate: "2019-03-14T00:00:00",
				IsPending: true,
				IsPayment: false,
				CanDispute: false,
				TransTypeDetails: "Pending",
			},
		];
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
			.get(`/users/${req.query.userId}/accounts/${req.query.accountNo}/recent-activity`)
			.reply(200, responseData);

		// invoke the function
		await RecentActivity(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 200 as response - POST", async function () {
		const req = { method: "GET", query: { accountNo: 6019450400085430 } };

		const responseData = [
			{
				EffectiveDate: "2019-03-14T00:00:00",
				ExchangeName: "ECOM B2C OH GLOBAL",
				Amount: 5,
				TransactionType: "",
				TicketNo: "",
				PlanNo: "10001",
				PlanDesc: "EXCHANGE RETAIL",
				PostingDate: "2019-03-14T00:00:00",
				IsPending: true,
				IsPayment: false,
				CanDispute: false,
				TransTypeDetails: "Pending",
			},
		];
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
			.get(`/users/${req.query.userId}/accounts/${req.query.accountNo}/recent-activity`)
			.reply(400, responseData);

		// invoke the function
		await RecentActivity(req, res);

		// Assert
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
		await RecentActivity(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});