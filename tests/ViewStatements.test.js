import { expect } from "chai";
import { ViewStatements } from "../src/Statements/ViewStatements/index.js";

describe("View Statements Unit Test", function () {
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
		await ViewStatements(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
