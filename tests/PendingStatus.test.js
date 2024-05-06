import { expect } from "chai";
import { PendingStatus } from "../src/Card/PendingStatus/index.js";
import nock from "nock";

describe("Pending Status Unit Test", function () {
	it("Should returns 200 as response", async function () {
		const req = { method: "POST" };

		const responseData = {
			ApplicationNumber: 20247986465874560,
			ApplicationType: "Military Clothing",
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
			.post(`/applycard/pending-status`)
			.reply(200, responseData);
		// invoke the function
		await PendingStatus(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 400 as response", async function () {
		const req = { method: "" };

		const responseData = {
			ApplicationNumber: 20247986465874560,
			ApplicationType: "Military Clothing",
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
			.post(`/applycard/pending-status`)
			.reply(400, responseData);
		// invoke the function
		await PendingStatus(req, res);

		// Assert
		expect(statusCode).to.equal(400);
	});

	it("Should returns 500 as response", async function () {
		const req = {};

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
			.post(`/applycard/pending-status`)
			.reply(500);

		// invoke the function
		await PendingStatus(req, res);

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
		await PendingStatus(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
