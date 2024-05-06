import { expect } from "chai";
import { AccountsSummaryBankProfile } from "../src/AccountsSummaryBankProfile/index.js";
import nock from "nock";

describe("Accounts Summary Bank Profile Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = { method: 'GET', query: { userId: '5414' } };

        //mock data
        const responseData = {
            ProductTypeDesc: "Military Star",
            IsPrimaryUser: true,
            AccountNoLast4: "5430",
            AccountNumber: "6019450400085430",
            IsAccountBlocked: true,
            BankProfiles: [],
        };

        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/bank-profiles`)
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
        await AccountsSummaryBankProfile(req, res);

        // Assert
        expect(statusCode).to.equal(200);
    });

    it("If Response is 200", async function () {
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
        await AccountsSummaryBankProfile(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });

    it("Should handle missing or invalid userId gracefully", async function () {
        const req = { query: {} };
        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/bank-profiles`)
            .reply(400);

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

        await AccountsSummaryBankProfile(req, res);

        // Assert
        expect(statusCode).to.equal(400);
    });
});
