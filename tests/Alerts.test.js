import { expect } from "chai";
import { Alerts } from "../src/Alerts/index.js";
import nock from "nock";

describe("Alerts Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = {
            method: "GET",
            query: { userId: "5414" },
        };

        const responseData = {
            IsTwoFactorAuthenticationEmail: true,
            IsTwoFactorAuthenticationText: true,
            IsPaymentReceivedEmail: true,
            IsPaymentReceivedText: true,
            PaymentReminderDueDays: 5,
            IsPaymentReminderEmail: true,
            IsPaymentReminderText: true,
            IsStatementReadyEmail: true,
            IsStatementReadyText: true,
            IsPastDueReminderEmail: true,
            IsPastDueReminderText: true,
            TransactionAmount: 1500,
            IsTransactionAmountEmail: true,
            IsTransactionAmountText: true,
            CurrentBalance: 1200,
            IsCurrentBalanceEmail: true,
            IsCurrentBalanceText: true,
            AvailableBalance: 1000,
            IsAvailableBalanceEmail: true,
            IsAvailableBalanceText: true,
            IsCardNotPresentEmail: true,
            IsCardNotPresentText: true,
            IsUserOptedForAnyAlert: true,
            IsUserEnrollForSMSAlert: false,
            IsUserOptedForTwoFA: true,
            IsUserOptedForTwoFAEmail: false,
            IsUserOptedForTwoFAText: true,
        };

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () { },
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/alerts`)
            .reply(200, responseData);

        // invoke the function
        await Alerts(req, res);

        // Assert
        expect(responseData.AvailableBalance).to.equal(1000);
    });

    it("Should returns 400 as response - PUT", async function () {
        const req = {
            method: "GET",
            query: { userId: "5414" },

        };

        const responseData = {
            response: 'Undefined'
        }

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () { },
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/alerts`)
            .reply(400, responseData);

        // invoke the function
        await Alerts(req, res);
        expect(responseData.response).to.equal('Undefined')
    });

    it("Should returns 400 as response - PUT", async function () {
        const req = {
            method: "PUT",
            query: { userId: "5414" },
            body: {
                IsTwoFactorAuthenticationEmail: true,
                IsTwoFactorAuthenticationText: true,
                IsPaymentReceivedEmail: true,
                IsPaymentReceivedText: true,
                PaymentReminderDueDays: 5,
                IsPaymentReminderEmail: true,
                IsPaymentReminderText: true,
                IsStatementReadyEmail: true,
                IsStatementReadyText: true,
                IsPastDueReminderEmail: true,
                IsPastDueReminderText: true,
                TransactionAmount: 1500,
                IsTransactionAmountEmail: true,
                IsTransactionAmountText: true,
                CurrentBalance: 1200,
                IsCurrentBalanceEmail: true,
                IsCurrentBalanceText: true,
                AvailableBalance: 1000,
                IsAvailableBalanceEmail: true,
                IsAvailableBalanceText: true,
                IsCardNotPresentEmail: true,
                IsCardNotPresentText: true,
                CurrentPassword: "string",
            },
        };

        const responseData = {
            response: 'Updated'
        }

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () { },
        };

        nock(`${process.env.baseUrl}`)
            .put(`/users/${req.query.userId}/alerts`)
            .reply(200, responseData);

        // invoke the function
        await Alerts(req, res);
        expect(responseData.response).to.equal("Updated")
    });

    it("Should returns 400 as response - PUT", async function () {
        const req = {
            method: "PUT",
            query: { userId: "5414" },
            body: {
            },
        };

        const responseData = {
            response: 'Undefined'
        }

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () { },
        };

        nock(`${process.env.baseUrl}`)
            .put(`/users/${req.query.userId}/alerts`)
            .reply(400, responseData);

        // invoke the function
        await Alerts(req, res);
        expect(responseData.response).to.equal("Undefined")
    });

    it("Should returns Error as response", async function () {
        const req = {
            method: "",
            query: { userId: "5414" },
        };

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
        await Alerts(req, res);

        // Assert
        expect(statusCode).to.equal(500);
    });

    it("Should returns 200 as response - PUT", async function () {
        const req = {
            method: "PUT",
            query: { userId: "5414" },
            body: {
                IsTwoFactorAuthenticationEmail: true,
                IsTwoFactorAuthenticationText: true,
                IsPaymentReceivedEmail: true,
                IsPaymentReceivedText: true,
                PaymentReminderDueDays: 5,
                IsPaymentReminderEmail: true,
                IsPaymentReminderText: true,
                IsStatementReadyEmail: true,
                IsStatementReadyText: true,
                IsPastDueReminderEmail: true,
                IsPastDueReminderText: true,
                TransactionAmount: 1500,
                IsTransactionAmountEmail: true,
                IsTransactionAmountText: true,
                CurrentBalance: 1200,
                IsCurrentBalanceEmail: true,
                IsCurrentBalanceText: true,
                AvailableBalance: 1000,
                IsAvailableBalanceEmail: true,
                IsAvailableBalanceText: true,
                IsCardNotPresentEmail: true,
                IsCardNotPresentText: true,
                IsUserOptedForAnyAlert: true,
                IsUserEnrollForSMSAlert: false,
                IsUserOptedForTwoFA: true,
                IsUserOptedForTwoFAEmail: false,
                IsUserOptedForTwoFAText: true,
                CurrentPassword: "TestPass1$",
            },
        };

        const responseData = {
            response: "Updated Successfully",
        };

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () { },
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/alerts`)
            .reply(200, responseData);

        // invoke the function
        await Alerts(req, res);

        // Assert
        expect(responseData.response).to.equal("Updated Successfully");
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
        await Alerts(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
});
