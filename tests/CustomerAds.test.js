import { expect } from "chai";
import nock from "nock";
import { CustomerAds } from "../src/CustomerAds/index.js";

describe("CustomerAds Unit Test", function () {
  it("Should returns 200 as response - GET", async function () {
    const req = {
      method: "GET",
      query: {
        pageName: "test",
      },
    };

    //mock data
    const responseData = {
      AdList: {
        AdList: [
          {
            CustomerAdID: 1855,
            AdID: "Ad_714_EXCHANGE",
            LocationID: 1,
            StartDate: "2023-10-04T00:00:00",
            EndDate: "2041-01-01T00:00:00",
            AdOrder: 1,
            Title: "Military\nCard Offers 10/4",
            Message:
              '<font face="Arial, Verdana">\n    <span style="font-size: 13.3333px;">Military Card Offers</span></font>\n',
            StatusID: 1,
            IsActive: true,
            CreationDate: "2023-12-09T19:18:45.013",
            Owner: "C111610",
          },
          {
            CustomerAdID: 1854,
            AdID: "Ad_713_EXCHANGE",
            LocationID: 1,
            StartDate: "2024-04-12T00:00:00",
            EndDate: "2024-04-30T23:55:00",
            AdOrder: 2,
            Title:
              "Take\nan extra 15% off shoes, clothing, handbags, and accessories with MILIT",
            Message:
              '<p class="header2"\n    style="box-sizing: border-box; margin: 0px 0px 10px; font-family: Arial, Helvetica, sans-serif; font-size: 18px;\n    background-color: rgb(255, 255, 255);">Plus, earn 4 points per $1 on all mentioned categories.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-family: Arial; font-size: 13px; background-color: rgb(255,\n    255, 255);"><a href="https: www.shopmyexchange.com="" browse?pagecategories="Clothing%20%26%20Accessories"\n        "="" target="_blank" style="box-sizing: border-box;"><img width="871" height="180" src="https://www.myecp.com/images/promotions/100648-SpringTrendApr2024-1.jpg" alt="Promotion Image 2" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 100%; height: auto;">\n        </ahref="https:>\n</p>\n<p class="promofootnote" style="box-sizing: border-box; margin: 0px 0px 10px; font-family: Arial, Helvetica,\n    sans-serif; font-size: 12px; color: rgb(49, 75, 91); background-color: rgb(255, 255, 255);">Valid April 12 – 25,\n    2024 at any Army & Air Force Exchange Service facilities\n    and <em style="box-sizing: border-box;">shop<strong style="box-sizing: border-box;">my</strong>exchange.com</em>.\n    This offer is limited to clothing, shoes, handbags and accessories. Not valid at Exchange Plus, Outlet, Alexandre\n    London, military clothing, designer handbags and accessories, sunglasses, prior purchases, concessionaires, Exchange\n    Online Marketplace, NEX, CGX or MCX facilities. Double points will be awarded on or about May 25, 2024. Offer ends\n    at 2359 on the final day of the promotion.</p>\n',
            StatusID: 1,
            IsActive: true,
            CreationDate: "2023-12-09T17:39:44.547",
            Owner: "C111610",
          },
        ],
        PageTitle: "Exchange",
      },
    };

    //nock .get .reply
    nock(`${process.env.baseUrl}`)
      .get(`/customerads?pageName=${req.query.pageName}`)
      .reply(200, responseData);

    let statusCode;
    const res = {
      set: function () {},
      status: function (x) {
        statusCode = x;
        return this;
      },
      send: function () {},
    };

    // invoke the function
    await CustomerAds(req, res);

    // Assert
    expect(statusCode).to.equal(200);
  });

  it("If Response is 204", async function () {
    const req = { method: "OPTIONS" };
    let statusCode;
    const res = {
      set: function () {},
      status: function (x) {
        statusCode = x;
        return this;
      },
      send: function (x) {},
    };

    // invoke the function
    await CustomerAds(req, res);

    // Assert
    expect(statusCode).to.equal(204);
  });
});
