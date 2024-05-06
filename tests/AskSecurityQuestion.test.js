import { expect } from "chai";
import { AskSecurityQuestion } from "../src/AskSecurityQuestion/index.js";
import nock from "nock";

describe("Ask Security Question Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = { method: 'GET' };
    
        //mock data
        const responseData = {
            QuestionId: "What was the name of your high school?",
            Question: "What was the name of your high school?"
        };
    
        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/ask-security-questions`)
            .reply(200, responseData);
    
        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () {
            },
        };
    
        // invoke the function
        await AskSecurityQuestion(req, res);
    
        // Assert
        expect(statusCode).to.equal(200);
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
            send: function (x) {
            },
        };
    
        // invoke the function
        await AskSecurityQuestion(req, res);
    
        // Assert
        expect(statusCode).to.equal(204);
    });
    
    it("Should returns 200 as response - POST", async function () {
        const req = { method: 'POST',
        body : {
            "UserId":"5414",
            "QuestionId": "What was the name of your high school?",
            "Answer":"test",
        }
    };
    
    //mock data
    const responseData = {
        "UserId": 5414,
        "UserName": "ericddev",
        "FirstName": "Michael",
        "LastName": "Hurd",
        "MiddleName":"X",
        "LastLoginDate" : "05:40 AM CST 03 Apr 2024",
        "Token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZXJpY2RkZXYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJNSUNIQUVMIEhVUkQiLCJleHAiOjE3MTIxNjMyMzUsImlzcyI6Ik15RUNQIiwiYXVkIjoiTXlFQ1AifQ.Vm0kv9uHdPB2x8gg9rttfz5CFn75637ibki5UoicNZs",
        "Expiration":"2024-04-03T16:53:55Z"
    };
    
    //nock .get .reply
    nock(`${process.env.baseUrl}`)
        .post(`/verify-security-questions`)
        .reply(200, responseData);
    
    
    let statusCode;
    const res = {
        set: function () { },
        status: function (x) {
            statusCode = x;
            return this;
        },
        send: function () {},
    };
    
    // invoke the function
    await AskSecurityQuestion(req, res);
    
    // Assert
    expect(statusCode).to.equal(200);
    });
    

});
