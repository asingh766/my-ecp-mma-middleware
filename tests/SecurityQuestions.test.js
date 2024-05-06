import { expect } from "chai";
import { SecurityQuestions } from "../src/SecurityQuestions/index.js";
import nock from "nock";

describe("Security Questions Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = { method: "GET", query: { type: "sample" } };

		const responseData = [
			[
				{
					ECPUsersCommonQuestionID: 1,
					QuestionID: 1,
					Question: "What is your birth place?",
					CreatedDate: "14/03/2024",
				},
			],
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
			.get(
				`/security-questions?type=${req.query.type}`
			)
			.reply(200, responseData);

		// invoke the function
		await SecurityQuestions(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 200 as response - POST", async function () {
		const req = { method: "GET", query: {} };

		const responseData = [
			[
				{
					ECPUsersCommonQuestionID: 1,
					QuestionID: 1,
					Question: "What is your birth place?",
					CreatedDate: "14/03/2024",
				},
			],
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
			.get(
				`/security-questions?type=${req.query.type}`
			)
			.reply(400, responseData);

		// invoke the function
		await SecurityQuestions(req, res);

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
		await SecurityQuestions(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
