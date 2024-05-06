import { expect } from "chai";
import { ApprovedCard } from "../src/Card/ApprovedCard/index.js";
import nock from "nock";
describe("Approved Card Unit Test", function () {
    it("Should returns 500 as response", async function () {
        const req = { method: "" };

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
            .post(`/applycard/approved`)
            .reply(500);

        // invoke the function
        await ApprovedCard(req, res);

        // Assert
        expect(statusCode).to.equal(500);
    });

    it("Should returns 200 as response", async function () {
        const req = { method: "POST" };

        const responseData = {
            ApplicationNumber: 2024533788009876,
            ApplicationType: "Military Clothing",
            TotalCreditLimit: 650,
            AccountNumber: 5769876443527627,
            SecurityCode: 955,
            ExpirationMonth: 4,
            ExpirationYear: 66,
        };
        nock(`${process.env.baseUrl}`)
            .post(`/applycard/approved`)
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
        await ApprovedCard(req, res);

        // Assert
        expect(statusCode).to.equal(200);
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
        await ApprovedCard(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
});
