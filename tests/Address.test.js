import { expect } from "chai";
import { Address } from "../src/Address/index.js";
import nock from "nock";

describe("Address Unit Test", function () {
    it("Should return 200 as status when successful - PUT", async function () {
        const req = {
            method: "PUT",
            query: { userId: "5414" },
            body: {
                Address1: "string",
                Address2: "string",
                City: "string",
                State: "string",
                Zip: "string",
                ZipPlus: "string",
                CurrentPassword: "Password@123",
            },
        };

        // Mock response data
        const responseData = { response: "Updated Successfully" };

        nock(`${process.env.baseUrl}`)
            .put(`/users/${req.query.userId}/address`)
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

        await Address(req, res);

        expect(responseData.response).to.equal("Updated Successfully");
    });

    it("Should return 400 as status when successful - PUT", async function () {
        const req = {
            method: "PUT",
            query: { userId: "" },
            body: {
                Address2: "string",
                City: "string",
                State: "string",
                Zip: "string",
                ZipPlus: "string",
                CurrentPassword: "Password@123",
            },
        };

        // Mock response data
        const responseData = { response: "Undefined" };

        nock(`${process.env.baseUrl}`)
            .put(`/users/${req.query.userId}/address`)
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

        await Address(req, res);

        expect(responseData.response).to.equal("Undefined");
    });

    it("Should return 200 as status when successful", async function () {
        const req = { method: "GET", query: { userId: "5414" } };

        // Mock response data
        const responseData = {
            Address1: "string",
            Address2: "string",
            City: "string",
            State: "string",
            Zip: "string",
            ZipPlus: "string",
        };

        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/address`)
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

        await Address(req, res);

        expect(responseData.Address1).to.equal("string");
    });

    it("Should return 400 as status", async function () {
        const req = { method: "GET", query: { userId: "" } };

        const responseData = { response: "Undefined" };
        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/address`)
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

        await Address(req, res);

        expect(responseData.response).to.equal("Undefined");
    });


    it("Should return 500 as status", async function () {
        const req = { method: "", query: { userId: "" } };

        const responseData = { response: "Undefined" };
        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/address`)
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

        await Address(req, res);

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

        await Address(req, res);

        expect(statusCode).to.equal(204);
    });
});
