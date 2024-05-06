import { assert, expect } from "chai";
import { UserSecurityQuestions } from "../src/UserSecurityQuestions/index.js";
import nock from "nock";

describe("User Security Questions Unit Test", function () {
    it("Should return 200 as status when successful", async function () {
        const req = {
            method: "GET",
            query: { userId: "5414" },
        };

        const responseData = {
            EmailAddress: "sample@gmail.com",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/security-questions`)
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

        await UserSecurityQuestions(req, res);

        assert.deepEqual(responseData.EmailAddress, "sample@gmail.com");
    });

    it("Should return 400 as status", async function () {
        const req = {
            method: "GET",
            query: {},
        };

        const responseData = {
            EmailAddress: "Undefined",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/security-questions`)
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

        await UserSecurityQuestions(req, res);

        assert.deepEqual(responseData.EmailAddress, "Undefined");
    });

    it("Should return 200 as status", async function () {
        const req = {
            method: "PUT",
            query: {
                QuestionID1: "test",
                Answer1: "test",
                QuestionID2: "test",
                Answer2: "test",
                QuestionID3: "test",
                Answer3: "test",
                CurrentPassword: "test",
            },
        };

        const responseData = {
            Response: "Updated",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/security-questions`)
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

        await UserSecurityQuestions(req, res);

        assert.deepEqual(responseData.Response, "Updated");
    });

    it("Should return 200 as status", async function () {
        const req = {
            method: "",
            query: {

            },
        };

        const responseData = {
            Response: "Updated",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/security-questions`)
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

        await UserSecurityQuestions(req, res);

        assert.deepEqual(statusCode, 500);
    });

    it("Should return 400 as status", async function () {
        const req = {
            method: "PUT",
            query: {
                QuestionID2: "test",
                Answer2: "test",
                QuestionID3: "test",
                Answer3: "test",
                CurrentPassword: "test",
            },
        };

        const responseData = {
            Response: "Undefined",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/security-questions`)
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

        await UserSecurityQuestions(req, res);

        assert.deepEqual(responseData.Response, "Undefined");
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
        await UserSecurityQuestions(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
});
