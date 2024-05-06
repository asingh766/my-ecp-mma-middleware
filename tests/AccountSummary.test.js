import { expect } from "chai";
import sinon from "sinon";
import { AccountSummary } from "../src/AccountSummary/index.js";
import nock from "nock";

describe("AccountSummary Unit Test", function () {
	it("Should return 200 as status when successful", async function () {
		const req = { method: "GET", query: { userId: "5414" } };

		// Mock response data
		const responseData = {
			data: [
				{
					ProductTypeDesc: "abcde",
					AccountNumber: 767689978979865,
					AccountNumberLast4: 4321,
					TotalAuthorizedUsers: 2,
					CurrentBalance: 1300,
					MinimumPaymentDue: 768,
					IsMinimumPaymentDue: false,
					PaymentDueDate: "1/05/2022",
					TotalCreditLimit: 678970,
					AvailableCredit: 4450,
					RetailCreditLimit: 1000,
					MilitaryClothingCreditLimit: 290,
					TotalMemoBalance: 290,
					RetailMemoBalance: 290,
					MilitaryClothingMemoBalance: 290,
					TotalAvailableCredit: 290,
					RetailAvailableCredit: 290,
					MilitaryClothingAvailableCredit: 290,
					PaymentPastDue: 0,
					CurrentMinimumPaymentDue: 890,
					LastPaymentDate: "03/04/2023",
					LastPaidAmount: 300,
					LastPurchaseDate: 290,
					LastPurchaseAmount: 290,
					DisputedAmount: 290,
					PromoCurrentBalance: 290,
					HasPromoBalance: 290,
					IsStatementOnline: 290,
					hasACHAllowed: true,
					CoBrandStatus: "test",
					IsEnolledInPaperlessStatement: true,
					IsInstallmentPlanAvailable: true,
					IsPrimaryUser: true,
					HasClothingOptionOrRemainingClothingBalance: true,
					CloseProductType: "test",
					AllowChasePaymentOption: "test",
					AllowACHOption: "test",
					LoyaltyPoints: 5,
					LastStatementBalance: 2500,
					LastStatementDate: "09/01/2022",
					RecentCharges: 342,
					RecentChargesDate: "04/02/2022",
					RetailCurrentBalance: 4500,
					CashCurrentBalance: 3000,
					MilitaryClothingOTB: 3000,
					RetailOTB: 3000,
				},
			],
		};

		console.log("${process.env.baseUrl}", `${process.env.baseUrl}`)
		nock(`${process.env.baseUrl}`)
			.get(`/users/${req.query.userId}/accounts`)
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

		await AccountSummary(req, res);

		expect(statusCode).to.equal(200);
	});

	it("Should return 400 as status", async function () {
		const req = { method: "GET", query: { userId: "" } };

		// Mock response data
		const responseData = {
			data: [
				{
					ProductTypeDesc: "abcde",
					AccountNumber: 767689978979865,
					AccountNumberLast4: 4321,
					TotalAuthorizedUsers: 2,
					CurrentBalance: 1300,
					MinimumPaymentDue: 768,
					IsMinimumPaymentDue: false,
					PaymentDueDate: "1/05/2022",
					TotalCreditLimit: 678970,
					AvailableCredit: 4450,
					RetailCreditLimit: 1000,
					MilitaryClothingCreditLimit: 290,
					TotalMemoBalance: 290,
					RetailMemoBalance: 290,
					MilitaryClothingMemoBalance: 290,
					TotalAvailableCredit: 290,
					RetailAvailableCredit: 290,
					MilitaryClothingAvailableCredit: 290,
					PaymentPastDue: 0,
					CurrentMinimumPaymentDue: 890,
					LastPaymentDate: "03/04/2023",
					LastPaidAmount: 300,
					LastPurchaseDate: 290,
					LastPurchaseAmount: 290,
					DisputedAmount: 290,
					PromoCurrentBalance: 290,
					HasPromoBalance: 290,
					IsStatementOnline: 290,
					hasACHAllowed: true,
					CoBrandStatus: "test",
					IsEnolledInPaperlessStatement: true,
					IsInstallmentPlanAvailable: true,
					IsPrimaryUser: true,
					HasClothingOptionOrRemainingClothingBalance: true,
					CloseProductType: "test",
					AllowChasePaymentOption: "test",
					AllowACHOption: "test",
					LoyaltyPoints: 5,
					LastStatementBalance: 2500,
					LastStatementDate: "09/01/2022",
					RecentCharges: 342,
					RecentChargesDate: "04/02/2022",
					RetailCurrentBalance: 4500,
					CashCurrentBalance: 3000,
					MilitaryClothingOTB: 3000,
					RetailOTB: 3000,
				},
			],
		};

		console.log("${process.env.baseUrl}", `${process.env.baseUrl}`)
		nock(`${process.env.baseUrl}`)
			.get(`/users/${req.query.userId}/accounts`)
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

		await AccountSummary(req, res);

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

		await AccountSummary(req, res);

		expect(statusCode).to.equal(204);
	});
});