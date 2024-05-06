const axios = require("axios");

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.StaticPages = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
        // Send response to OPTIONS requests
        res.set("Access-Control-Allow-Methods", "*");
        res.set("Access-Control-Allow-Headers", "*");
        res.set("Access-Control-Max-Age", "3600");
        res.status(204).send("");
    } else {
        if (req.query.pageName == "about") {
            res.send(getAboutPage());
        } else if (req.query.pageName == "credit") {
            res.send(getCreditPage());
        } else if (req.query.pageName == "deployment") {
            res.send(getDeploymentPage());
        } else if (req.query.pageName == "help") {
            res.send(getHelpPage());
        } else if (req.query.pageName == "card-apply-tc") {
            res.send(getCardApplyTC());
        } else if (req.query.pageName == "card-apply-privacy") {
            res.send(getApplyNowPrivacy());
        } else if (req.query.pageName == "faq") {
            res.send(getFaq());
        } else if (req.query.pageName == "site-policy") {
            res.send(getSitePolicy());
        } else if (req.query.pageName == "privacy-policy") {
            res.send(getPrivacyPolicy());
        } else if (req.query.pageName == "terms-condition") {
            res.send(getTermsAndConditions());
        } else if (req.query.pageName == "rewards-condition") {
            res.send(getRewardsAndConditions());
        } else if (req.query.pageName == "militaryStar") {
            res.send(getMilitaryStar());
        } else if (req.query.pageName == "legal-privacy") {
            res.send(getLegalPolicy());
        }
    }
};

function getHelpPage() {
    let HelpFaq = [
        {
            Title: "Why are some of my changes not listed under Recent Activity?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Where can I update my mailing address?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Where can I update my email address?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Where can I update my phone number?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "How do I add an authorized user?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "How do I remove an authorized user?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "How do I report my credit card lost or stolen?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "What are push notifications?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "What is the MILITARY STAR<sup>&reg;</sup> Rewards Program?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title:
                "How do I enroll in the MILITARY STAR<sup>&reg;</sup> Rewards Program?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "What is MILITARY STAR Pay Your Way?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "What are the benefits of Pay Your Way?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Where is Pay Your Way available?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "What are the payment plan options for Pay Your Way?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title:
                "Is the Pay Your Way APR the same as the MILITARY STAR standard APR?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Are there fees for participating in Pay Your Way?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Can customers use Pay Your Way at the commissary?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "Can customers choose a Pay Your Way plan for online purchases?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
        {
            Title: "How do I delete my online profile?",
            content:
                "Your recent activity includes all the transactions that have occured since your current statement closed, including your pending charges and credits.When your next statement is ready, the transactions that have posted will be moved from your recent activity into your statement where you can review them",
        },
    ];
    return HelpFaq;
}

function getAboutPage() {
    return `<div
	style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
   <!-- <div style="align-self: stretch; padding: 8px; background: #042757; border-bottom: 1px #B70100 solid; justify-content: space-between; align-items: center; display: inline-flex">
	   <div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
		 <div style="color: white; font-size: 16px; font-family: Arial; font-weight: 700; line-height: 20px; word-wrap: break-word">About ECP</div>
	   </div>
	   <div style="height: 20px; justify-content: space-between; align-items: center; display: flex"></div>
	 </div> -->
   <div
	 style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex">
	 <div
	   style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
	   <div
		 style=" color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		 About the Exchange Credit Program</div>
	   <div
		 style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex">
		 <div style="flex: 1 1 0; text-align: justify"><span
			 style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">The
			 Exchange Credit Program (ECP) is administered by the Army and Air Force Exchange Service, a nonappropriated
			 fund entity of the Department of Defense. Established by Congress in 1979 to protect service members from
			 predatory lending, the program offers responsible credit solutions to Warfighters and their
			 families.<br /><br />ECP operates the MILITARY STAR program on behalf of the Army, Air Force, Navy, Marines
			 Corps and Coast Guard. Serving approximately 1.6 million cardholders from all branches of service, the
			 MILITARY STAR card is accepted at all military exchanges and commissaries and at shopmyexchange.com,
			 myNavyExchange.com and ShopCGX.com.<br /><br />MILITARY STAR cardholders benefit from fair and flexible
			 terms to help them safely and affordably build credit, multiple discounts that save them money all year
			 long, and critical Quality-of-Life programs that support their military community. Cardholders also have
			 24/7 access to the Exchange Contact Center, an internal team of dedicated professionals committed to serving
			 the unique needs of military customers. The call center services approximately 4 million calls annually.
		   </span><a href="/static?pageName=CP_MilStarCard&title=MILITARY+STAR" target="_blank"
			 style="color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Read
			 more about MILITARY STAR benefits here.</a></div>
	   </div>
	 </div>
	 <div
	   style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
	   <div
		 style=" color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		 Supporting the Military Community</div>
	   <div
		 style=" text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
		 The entire military community benefits when shoppers use the MILITARY STAR card. In 2021, the MILITARY STAR card
		 generated more than $408 million in value for Warfighters and their families. Unlike bank-issued credit cards,
		 MILITARY STAR does not charge merchant fees to the military resale community, saving the exchanges more than $31
		 million in costly merchant and bank fees in 2021. Not charging merchant fees allows the Exchange to contribute
		 additional funds to critical military Quality-of-Life programs, such as Child, Youth and School Services; Armed
		 Forces Recreation Centers; and other programs to support troops and their families.</div>
	 </div>
   </div>
 </div>`;
}

function getCreditPage() {
    return `<div
	style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
	<!-- <div style="align-self: stretch; padding: 8px; background: #042757; border-bottom: 1px #B70100 solid; justify-content: space-between; align-items: center; display: inline-flex">
			<div style="justify-content: flex-start; align-items: center; gap: 8px; display: flex">
			  <div style="color: white; font-size: 16px; font-family: Arial; font-weight: 700; line-height: 20px; word-wrap: break-word">Credit Building Tips</div>
			</div>
			<div style=" justify-content: space-between; align-items: center; display: flex"></div>
		  </div> -->
	<div
	  style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex">
	  <div
		style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
		<div
		  style="color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		  1. Building Credit History</div>
		<div
		  style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: flex">
		  <div style="align-self: stretch; text-align: justify"><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">The
			  Exchange Credit Program is committed to helping service members build their credit wisely. Lenders use
			  credit history/score to determine your credit worthiness. A low credit history/score can prevent you from
			  qualifying for a credit card, home mortgage or car loan at the best possible interest rate. The Exchange
			  Credit Program has created a set of credit guidelines to guide you in building your credit
			  history/score.<br /><br />Tips for raising your credit score<br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Payment
			  history (approximately 35% of your credit score)a. Pay your bills on timeb. Stay current on all your credit
			  accounts<br />Account balances (approximately 30% of your credit score)a. Keep low outstanding balances on
			  credit cardsb. Pay off debt rather than shifting it between credit cardsc. Do not close unused credit cards
			  (this can possibly lower your credit score)d. Do not apply/open unnecessary credit card accounts<br />Length
			  of credit history (approximately 15% of your credit score)a. How long have you had creditb. How often you
			  use credit<br />New credit (approximately 10% of your credit score)a. Manage how many new accounts do you
			  haveb. Do not open several new accounts in a short time (this can possibly lower your credit score)c.
			  Maintain a good recent credit history<br />Types of credit used (approximately 10% of your credit score)a.
			  Credit score is a combination of all your outstanding credit cards, retail cards, loans, etc.b. Closed
			  accounts will show up on your credit report and may be included in your credit score</span></div>
		</div>
	  </div>
	</div>
	<div
	  style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex">
	  <div
		style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
		<div
		  style=" color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		  2. Check your credit report</div>
		<div
		  style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: flex">
		  <div
			style="align-self: stretch; text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
			It is important to check your credit report from each credit reporting agency at least once a year. Knowing
			what is on your credit report allows you to catch mistakes or dispute erroneous charges/accounts. A credit
			report containing mistakes will affect how potential lenders determine your credit
			worthiness.<br /><br />Check your credit report by contacting:</div>
		  <div style="align-self: stretch; justify-content: flex-start; align-items: flex-start; display: inline-flex">
			<div
			  style="text-align: justify; color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; text-decoration: underline; line-height: 20px; word-wrap: break-word">
			  Equifax<br />Experian<br />TransUnion<br />Innovis</div>
			<div
			  style="flex: 1 1 0; text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
			  (800) 685-1111<br />(888) 397-3742<br />(877) 322-8228<br />(877) 261-7685</div>
		  </div>
		</div>
	  </div>
	</div>
	<div
	  style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex">
	  <div
		style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
		<div
		  style="color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		  3. Check out these websites to learn more about using credit responsibly</div>
		<div
		  style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: flex">
		  <div
			style="align-self: stretch; text-align: justify; color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; text-decoration: underline; line-height: 20px; word-wrap: break-word">
			The Federal Trade Commission's Website on Credit<br />Credit Card Security and Credit Building Basics-A site
			provided by MasterCard</div>
		</div>
	  </div>
	</div>
  </div>`;
}

function getDeploymentPage() {
    return `<div
	style="overflow: hidden; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
	<div
	  style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex">
	  <div
		style="align-self: stretch;  flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
		<div
		  style="align-self: stretch; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: flex">
		  <div style="align-self: stretch; text-align: justify"><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">The
			  Exchange Credit Program offers deployment benefits1 to all eligible Active Duty and Mobilized or Activated
			  Reservists or National Guard Military Members who have valid orders to deploy to qualifying contingency
			  locations. While you are deployed, you may still make purchases, but you are not required to make monthly
			  payments and your interest rate is temporarily reduced to six-percent (6%). After your deployment ends, your
			  interest rate reverts to the rate in the current Exchange Credit Program Credit Agreement and you are
			  required to make monthly payments as long as your account still has a balance.<br /><br />In order to be
			  eligible for deployment, your account must be in good standing (no more than one payment past due), and you
			  must provide a copy of your deployment orders or a letter from your unit commander.<br /><br />The
			  deployment orders or letter must contain:<br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Your
			  full name<br />Your Social Security Number<br />Your length of deployment or dates of
			  deployment<br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word"><br />If
			  your deployment is extended, you or your Unit Commander/representative should notify the Exchange Credit
			  Program.</span></div>
		</div>
		<div
		  style="align-self: stretch; text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
		  You will need to submit your deployment orders or letter to:</div>
		<div
		  style="align-self: stretch; padding-left: 32px; justify-content: center; align-items: flex-start; display: inline-flex">
		  <div style="flex: 1 1 0; text-align: justify"><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Exchange
			  Credit Program<br />ATTN: Deployments<br />P.O. Box 650410<br />Dallas, TX 75265-0410<br />Fax: 214-465-2997
			  DSN: 967.2997<br />ATTN: Deployments<br /><br />Email: </span><span
			  style="color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Deployment@aafes.com<br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">Note:
			  If sending by email, please attach an image of the orders or letter.</span></div>
		</div>
		<div style="align-self: stretch; text-align: justify"><span
			style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">For
			questions about this policy, please contact the Exchange Credit Program Call Center at 1‑877‑891‑7827
			(STAR).<br /></span><span
			style="color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">(Additional
			telephone numbers)</span></div>
	  </div>
	  <div
		style="align-self: stretch;   flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
		<div
		  style=" color: black; font-size: 20px; font-family: Arial; font-weight: 700; line-height: 24px; word-wrap: break-word">
		  The Service member's Civil Relief Act (SCRA)</div>
		<div
		  style="align-self: stretch;  flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; display: flex">
		  <div style="align-self: stretch; text-align: justify"><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">The
			  Service member's Civil Relief Act (SCRA) is a federal law that provides certain protections to service
			  members. One of the provisions is a six-percent (6%) cap on interest on debts incurred before entry on
			  active duty, including mobilization or activation from the Reserve or National Guard. This benefit does not
			  apply to charges you make after you enter active duty or are mobilized or activated.<br /><br />If you are
			  an Exchange Credit Program cardholder, this provision may apply to you if you meet all of the following
			  criteria:<br /><br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">You
			  are a member of the Active Component, Reserve Component or National Guard<br />You enlist or receive a
			  direct appointment to the active component<br />You are mobilized or activated to U.S. military service
			  under Title 10 orders, or you receive Title 32 orders for federal emergencies and your activation was at the
			  request of the President or Secretary of Defense<br />You have incurred charges on your Exchange Credit
			  Program account prior to enlisting, being appointed, being mobilized or activated<br /></span><span
			  style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word"><br />If
			  you meet all the criteria, the Exchange Credit Program will lower your interest rate while you are on active
			  duty. The interest rate reduction will become effective as of the date active duty begins, and you must
			  continue to make payments on your account. After your active service ends, your interest rate will revert to
			  the rate in the current Exchange Credit Program Credit Agreement.</span></div>
		</div>
		<div
		  style="align-self: stretch; text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
		  In order to obtain an interest rate reduction, you may mail or fax a copy of your orders to:</div>
		<div
		  style="align-self: stretch; padding-left: 32px; justify-content: center; align-items: flex-start; display: inline-flex">
		  <div
			style="flex: 1 1 0; text-align: justify; color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">
			Exchange Credit Program<br />ATTN: Deployments<br />P.O. Box 650410<br />Dallas, TX 75265-0410<br /><br />Fax:
			214-465-2997 DSN: 967.2997</div>
		</div>
		<div style="align-self: stretch; text-align: justify"><span
			style="color: black; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">The
			orders must include the dates or number of days of active duty service, and must be provided no later than 180
			days after your termination or release from military service.<br /><br />For questions about this policy,
			please contact the Exchange Credit Program Call Center at 1‑877‑891‑7827 (STAR).<br /></span><span
			style="color: #0000FF; font-size: 14px; font-family: Arial; font-weight: 400; line-height: 20px; word-wrap: break-word">(Additional
			telephone numbers)</span></div>
	  </div>
	</div>
	<div style="align-self: stretch;  justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
	  <div
		style=" text-align: justify; color: black; font-size: 12px; font-family: Arial; font-weight: 400; line-height: 16px; word-wrap: break-word">
		1 This benefit is offered effective January 5, 2004. Each request will be considered based on the current benefit
		offered on the date your request is received. Once you are approved for this benefit, the terms will remain
		effective during your period of mobilization, activation or deployment unless such change is required by law,
		regulation, Executive Order, or other non-discretionary policies applicable to ECP (the Exchange Credit Program)
		or the military exchanges. At the end of your mobilization, activation or deployment, your Exchange Credit Program
		ECP Credit Agreement will govern your account. Your APR will return to the variable interest rate according to
		these terms as long as your account has a balance. These terms are subject to change.</div>
	</div>
  </div>`;
}

function getCardApplyTC() {
    return `


	<!DOCTYPE html>
	
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title></title>
	</head>
	
	<body>
	
		<table border=0 style="width:98%">
			<tbody>
				<tr>
					<td align="right" style="padding-right:10px"><input type="button" value="Print" onclick="javascript: window.print();" /> </td>
				</tr>
				<tr>
					<td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 16px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
						<p>Exchange Credit Program Account Opening Disclosures</p>
					</td>
				</tr>
				<tr>
					<td>
						<table style="BACKGROUND: #000" width="100%">
							<tbody>
								<tr>
									<th style="COLOR: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: bold; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left;" colspan=2>Interest Rates and Interest Charges </th>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>Annual Percentage Rate (APR) for Purchases</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">14.49%</span> for Retail Plan purchases</p>
										<p>This APR will vary with the market based on the Prime Rate.</p>
										<p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">0.00%</span> for Military Clothing Plan purchases</p>
									</td>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>Penalty APR and When it Applies</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">22.49%</span></p>
										<p>This APR will vary with the market based on the Prime Rate. This APR may be applied to all of your Account balances and new purchases, if you do not pay the full amount of any Total Minimum Payment Due within 60 days of its Payment Due Date.</p>
										<p><b>How Long Will the Penalty APR Apply?</b> If your APRs are increased for this reason, the Penalty APR will apply until you make six consecutive payments of the Total Minimum Payment Due by their Payment Due Dates, beginning with the first Total Minimum Payment Due that is due immediately after the Penalty APR takes effect.</p>
									</td>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>How to Avoid Paying Interest</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p>Your due date is at least 25 days after the close of each billing cycle. We will not charge you any interest on purchases if you pay your entire balance by the due date each month.</p>
									</td>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>Minimum Interest Charge</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p>If you are charged interest, the charge will be no less than $0.50.</p>
									</td>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>For Credit Card Tips from the Consumer Financial Protection Bureau</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p>
											To learn more about factors to consider when applying for or using a credit card, visit the website of the Consumer Financial Protection Bureau at <a target="_blank" href="http://www.consumerfinance.gov/learnmore" class="text-bluelink1">consumer finance.gov / learnmore</a>
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table style="BACKGROUND: #000" width="100%">
							<tbody>
								<tr>
									<th style="COLOR: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: bold; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left;" colspan=2>
										Fees
									</th>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p><b>Annual Fee</b></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p><b>None.</b></p>
									</td>
								</tr>
								<tr>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
										<p>
											<b>Penalty Fees</b>
											<ul>
												<li>Returned Payment</li>
											</ul>
										<p></p>
									</td>
									<td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
										<p><br></p>
										<p>Up to <b>$25</b></p>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr>
					<td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; TEXT-ALIGN: left;">
						<p>
							<b> How We Will Calculate Your Balance:</b>
							We use a method called “daily balance.” See your MILITARY STAR Credit Program Agreement for more details.
						</p>
						<p>
							<b>Billing Rights:</b>
							Information on your rights to dispute transactions and how to exercise those rights is provided in your MILITARY STAR Credit Program Agreement.
						</p>
						<h1 style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
							Military Lending Act Disclosure
						</h1>
						<p>
							Federal law provides important protections to members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a member of the Armed Forces and his or her dependent may not exceed an annual percentage rate of 36 percent. This rate must include, as applicable to the credit transaction or account: the costs associated with credit insurance premiums; fees for ancillary products sold in connection with the credit transaction; any application fee charged (other than credit application fees for specified credit transactions or accounts); and any participation fee charged (other than certain participation fees for a credit card account).
						</p>
						<p>
							Please refer to Section 12 of the Military Star Credit Card Agreement to see how your monthly minimum payment is calculated.
						</p><p>
							Please call toll- free 1-877-891-7827 to hear this disclosure orally.
						</p>        
						<hr>
	
						<p>
							Variable APRs are based on the 7.50% Prime Rate in effect as of 12/20/2022, which remained in effect as of a date not more than 30 days before you
							received these Account Opening Disclosures. The variable APR for Retail Plan purchases is 14.49% (a Daily Periodic Rate of 0.03970%), based on a
							Margin of 6.99% that we added to this Prime Rate. The variable Penalty APR is 22.49% (a Daily Periodic Rate of 0.06162%), based on a Margin of
							14.99% that we added to this Prime Rate.
						</p>
					</td>
				</tr>
				<tr>
					<td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; TEXT-ALIGN: left;">
						<h1 style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
							Exchange Credit Program Agreement
						</h1>
						<p>
							This <span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
									 EXCHANGE CREDIT PROGRAM
							</span> Agreement ("Agreement") governs the <b>MILITARY STAR</b> Private Label Revolving Credit Account (“Account”) available through the Exchange
							Credit Program and administered by the Army and Air Force Exchange Service (“AAFES”), P.O. Box 650410, Dallas, TX 75265-0410. Your Account application
							and other documents we provide to modify or supplement this Agreement are incorporated into and made a part of the Agreement  by reference. Please read
							the entire Agreement carefully before you use or permit the use of the Account and keep it for your records.
						</p>
						<p>
							<b>1. Definitions and General Terms:</b>
							In this Agreement, the terms “we,” “us,” and “our” mean
							the Account creditor to which you applied for an Account or from which you obtain Account credit (AAFES, the Navy Exchange Service Command, the Marine
							Corps Exchange, or Coast Guard Exchange Service), and any entity to which your Account or its unpaid balance may be assigned. The terms “you” and
							“your” refer to the individual who applied for and accepted an Account and the terms of this Agreement (see Section 2). The term “Authorized User”
							is defined below in Section 5. Any reference to a “Card” means any card we issue to you or an Authorized User that is used to access your Account.
							Other capitalized terms used below are explained in the context of their first use.
						</p>
						<p>
							Whenever this Agreement states that we may take certain actions, it means we are authorized to take those actions in our sole discretion. Whenever this
							Agreement requires or allows you to provide us with a written notice or request related to your Account, you must send that notice or request to Army
							and Air Force Exchange Service, Exchange Credit Program, P.O. Box 650410, Dallas, TX 75265-0410, unless we have instructed you otherwise in this
							Agreement, a periodic Account statement, or another document we might provide after this Agreement becomes effective.
						</p>
						<p>
							<b>2. When Agreement Is Effective: </b>
							You understand and agree that this Agreement is effective as of the first date you or an Authorized User use a Card or the Account.
						</p>
						<p>
							<b>3. Your Promise to Us:</b> You agree to the terms and conditions in this Agreement and promise
							to do everything this Agreement requires of you. You agree to pay us for all purchases charged to the Account by you and any Authorized User. You agree to pay the Interest Charges (see Section 10 below), Account Fees (see Section 11 below), and all other fees, charges, costs,
							and expenses as provided in this Agreement, including, without limitation, those described in
							Section 16 below (“Default and Remedies”).
						</p>
						<p>
							<b>4. Account Eligibility:</b>
							Eligible Exchange patrons who satisfy our creditworthiness standards may open and maintain an Account with us.
							We receive notification from the Department of Defense regarding the status of eligible patrons and use this information to determine eligibility for
							an Account. You and your Authorized Users may not make purchases with the Account once your eligibility has ended. An individual presenting a power of
							attorney form or identified as your attorney-in-fact cannot open an Account in your name or on your behalf as an account holder. The Account creditor
							to which you apply for an Account or from which you obtain Account credit (AAFES, Navy Exchange Service Command, Marine Corps Exchange, or Coast Guard
							Exchange Service) will determine whether you are eligible to use your Account for making Military Clothing Plan purchases.
						</p>
						<p>
							<b>5. Authorized Users:</b>
							You may authorize eligible dependents (as defined by the Department of Defense) who are 18 years or older, with current Exchange privileges, to use the
							Account as an “Authorized User”. To do so, you must identify the Authorized User in the Account application or in a written request you send to us
							after the Account is opened. You may remove an Authorized User by contacting the Exchange Call Center at 877-891-7827 or making the request in writing.
							No one other than you may add or remove the authority of any Authorized User to use the Card or the Account, even if that person has been designated to
							act for you through a Power of Attorney. You understand and agree that Authorized Users may use the Account and Card to make purchases from us and to
							may make Account payments on your behalf. You also understand and agree that you are liable for all amounts due for the Account under the Agreement,
							including amounts due for Account purchases made by you and by any Authorized User. Authorized Users may not change the mailing address or electronic
							mail address of the Account.
						</p>
						<p>
							<b>6. Eligible Account Purchases:</b>
							You and each Authorized User may use the Account to
							purchase qualifying goods and services from us, subject to the terms and conditions of this
							Agreement. Depending on the Account we maintain for you under this Agreement, you and each Authorized User may use the Account to purchase qualifying
							goods and services from us under our Retail Plan, Military Clothing Plan (if you qualify), and any Special Promotion plan we may offer from time to time.
							Any Account purchases returned to us will result in a credit to your Account, not a cash refund, and may be subject to a restocking fee. Account purchases are subject to the terms of our Retail Plan, unless we determine that those purchases qualify
							for different treatment under the Military Clothing Plan or a Special Promotion. Terms that apply to a Special Promotion are described in this Agreement,
							except to the extent those terms are changed by promotional disclosures that modify or supplement this Agreement. Account purchases that qualify for the
							Military Clothing Plan (formerly UCDPP) are limited to the following: Defense Supply Center Philadelphia (DSCP) procured issue military clothing items
							and footwear; DSCP organizational clothing and individual equipment (OCIE) items; AAFES commercial uniform clothing, undergarments, insignia and footwear
							items to be worn with the uniform. Military clothing and equipment offered by other vendors are not eligible for the Military Clothing Plan. You
							understand and agree that this Account may be used only for personal, family or household purposes, and may not be used for any commercial or business
							purposes. You agree not to use the Account or permit it to be used to purchase goods or services intended for resale to any person or party other than you. You also agree not to use the Account or Card
							or permit them to be used for any illegal transaction or purpose.
						</p>
						<p>
							<b>7. Credit Limits and Available Credit:</b>
							The Credit Limit of your Account is the maximum amount you may owe us at any time. The Available Credit of your Account is the amount of credit that
							remains available to you, up to the amount of your applicable Credit Limit. We may restrict or delay the Available Credit of your Account for risk
							management purposes, to protect you and us against actual or potential fraud or unauthorized transactions, and for other legitimate reasons. We may
							establish separate Credit Limits for the Retail Plan and the Military Clothing Plan. When you do not have enough Available Credit to complete a purchase
							under the Military Clothing Plan, we may allow you to complete that purchase under the Retail Plan (subject to the Available Credit, Interest Charges,
							Account Fees and other terms and conditions that otherwise apply to Retail Plan purchases). Your Credit Limits will be shown on your monthly Account
							statements (“Periodic Statements”). You must ensure that your Account balances do not exceed the Credit Limits we set for your Account from time to
							time, even if we electronically or manually authorize an Account purchase. If your Account balance is more than your applicable Credit Limit, we can
							still charge you for any and all Account purchases, Interest Charges and Account Fees, and require that you immediately pay any amount exceeding your
							Credit Limit, without giving up any of our rights under this Agreement. We may increase or decrease your Credit Limits at any time without advance
							notice to you, subject to any requirements or limitations of applicable law. An Authorized User, an individual presenting a power of attorney form or
							otherwise identified as your attorney-in-fact, may not request an increase of decrease in the credit limit assigned to your Account.
						</p>
						<p>
							<b>8. Purchase Authorizations:</b>
							We may ask that you or any Authorized User provide identification documents to confirm eligibility for an Account purchase. We may decline to authorize
							any purchase requested on your Account. If the system we use to authorize Account purchases is not working, we may not authorize a purchase, even if
							your Available Credit is sufficient for that purchase. We will not be liable to you if this occurs. We may not authorize a purchase if you are in
							Default (see Section 16 below), if the Available Credit under the Account has been suspended or cancelled for any reason, if you have not followed our
							procedures for requesting a purchase, or for other reasons. You will be bound by any policy we disclose, such as “no returns,” “no refund,” “no return
							or credit without receipt,” “as is,” “store credit only,” “all sales final,” or similar statements.
						</p>
						<p>
							<b>9. Periodic Statements; Billing Cycles:</b>
							We will, as required by law, send a Periodic
							Statement to you or your designee after the end of each Billing Cycle. Each Periodic Statement will show the ending date of the most recent Billing
							Cycle (the “Closing Date”). A Billing Cycle refers to the number of days between Closing Dates. Each Periodic Statement will show the total amount you
							owed as of the Closing Date of your prior Periodic Statement (the “Previous Balance”), and the amounts added to and subtracted from the Previous
							Balance to determine the total amount you owe as of your most recent Closing Date (the “New Balance”).
						</p>
						<p>
							The Periodic Statement will show the minimum amount you must pay (the “Total Minimum Payment Due”) and the date on which your payment is due
							(the “Payment Due Date,” which will be at least 25 days after the Closing Date). See Section 12 below for more information about how your Total Minimum
							Payment Due is determined. Only one Periodic Statement will be sent each month to the address of record for your Account (see Section 15 below). Your
							Billing Cycle may be changed at any time and for our convenience, as permitted by law.
						</p>
						<p>
							You should review each Periodic Statement carefully. Subject to any limitations or requirements of applicable law, you may be bound by what the Periodic
							Statement shows if there is a billing error on your Periodic Statement and you do not advise us of the error within 60 days after we have mailed it to
							you. For more information about billing disputes and your rights, read the section below called “Your Billing Rights.”
						</p>
						<p><b>10. Interest Charges: </b></p>
						<p>
							<b>A. Daily Periodic Rates; Index for Variable Rate Adjustments.</b>
							The Daily Periodic Rate used to determine your periodic rate finance charges (“Interest Charges”) is determined by dividing the corresponding Annual
							Percentage Rate by three hundred sixty five (365) or, in a leap year, by three hundred sixty six (366). The resulting Daily Periodic Rate is carried
							five places past the decimal point, and the last digit is rounded. The Daily Periodic Rates and Annual Percentage Rates applied to Retail Plan and
							Special Promotion balances may vary from monthly Billing Cycle to monthly Billing Cycle, based on published changes in the index rate that applies to
							your Account. If your Account balances become subject to the Penalty APR as described below in Section 10(G), the Daily Periodic Rates and Annual
							Percentage Rates we apply to all of your unpaid Retail Plan, Special Promotion, and Military Clothing Plan balances may vary from monthly Billing Cycle
							to monthly Billing Cycle, based on published changes in the index rate that applies to your Account. Each variable Daily Periodic Rate and corresponding
							Annual Percentage Rate is based on the value of a published index rate plus the Margins described below in Section 10(D), in Section 10(G), or in
							separate documents that modify or supplement this Agreement. The index rate used for variable rate adjustments will be the highest bank prime loan rate
							published in “Money Rates” section of The Wall Street Journal on the Closing Date of your previous Billing Cycle or the business day immediately before
							that Closing Date (the “WSJ Prime Rate”). Changes in an index rate will be effective as of the first day of a monthly Billing Cycle. An increase in the
							index rate will result in increased Interest Charges and an increased Total Minimum Payment Due.
						</p>
						<p>
							<b>B. How We Calculate Balances Subject to Interest Rate.</b>
							We figure the Interest Charges for your Account by applying the Daily Periodic Rate to the “Daily Balance” of your Account (including new purchases)
							for each day in the Billing Cycle. We calculate a separate Daily Balance for each of the different categories of your Account (for purchases made under
							the Retail Plan, the Military Clothing Plan, and any Special Promotions). To get the “Daily Balance” for each Account category, we take the beginning
							balance of your Account each day in each category, add any new purchases, and then subtract any unpaid Interest Charges, unpaid Account Fees, unpaid
							costs and charges of collection, payments and credits. This gives us the Daily Balance for each category of your Account.
						</p>
						<p>
							<b>C. Grace Period.</b>
							The Periodic Statement for the Billing Cycle with the most recent Closing Date is your “Current Statement.” New purchases shown for the first time on
							your Current Statement will begin to accrue Interest Charges from the date of the purchase, except as provided in this Agreement or as otherwise
							required by law. New purchases shown for the first time on your Current Statement will not begin to accrue Interest Charges until the first day of                           the following Billing Cycle if: (a) there is no Previous Balance or there is a credit balance for the
							Billing Cycle shown on your Current Statement; or (b) the sum of payments and credits we received during the Billing Cycle shown on your Current
							Statement was at least equal to the Previous Balance shown on that Current Statement. To avoid additional Interest Charges, you must pay the full New
							Balance shown on the Current Statement by the Payment Due Date shown on the same Periodic Statement. We will give you the benefit of a grace period for
							certain partial payments you make, in those limited circumstances and to the extent required by law.
						</p>
						<p>
							<b>D. Interest Charges for Retail Plan Purchases.</b>
							The variable Annual Percentage Rate used to determine the Interest Charges for Retail Plan purchases will be based on the WSJ Prime Rate plus a Margin
							of 6.99%. The Account Opening Disclosures provided with this Agreement disclose the Annual Percentage Rate and Daily Periodic Rate in effect for Retail
							Plan purchases on or near the date your Account was opened.
						</p>
						<p>
							<b>E. Interest Charges for Military Clothing Plan.</b>
							The non-variable Annual Percentage Rate for purchases qualifying for the Military Clothing Plan is 0.00% (a Daily Periodic Rate of 0.00000%).
						</p>
						<p>
							<b>F. Interest Charges for Special Promotions.</b>
							The Interest Charges and other terms and conditions for any Special Promotion will be described in separate promotional disclosures that modify or
							supplement this Agreement.
						</p>
						<p>
							<b>G. Penalty APR.</b>
							A “Penalty APR Triggering Event” will occur if you have not paid a Total Minimum Payment Due within 60 days of its applicable Payment Due Date (in other
							words, within 90 days after the Closing Date of the Billing Cycle for which we determined this minimum payment was due). If a Penalty APR Triggering
							Event occurs, we may apply an increased Annual Percentage Rate (a “Penalty APR”) on an indefinite basis to the unpaid Account balances for all of your
							Retail Plan, Special Promotion and Military Clothing Plan purchases and any new Account purchases we permit, except as otherwise provided in this
							Agreement or required by law. In addition to applying this Penalty APR, we may close your Account to future purchases and exercise other remedies
							related to this event of Default as provided in this Agreement (see Section 16 below). The Penalty APR is a variable Annual Percentage Rate determined
							as of the date we first apply it, based on the WSJ Prime Rate plus a Margin of 14.99%. The Account Opening Disclosures provided with this Agreement
							disclose the Penalty APR in effect on or near the date your Account was opened. If we receive six consecutive payments of your Total Minimum Payment
							Due by their Payment Due Dates, beginning with the first Total Minimum Payment Due that is due immediately after the Penalty APR takes effect, then we
							will begin to apply the standard Annual Percentage Rates then in effect for your Retail Plan purchases and any applicable Military Clothing Plan
							purchases. An increase to the Penalty APR will result in increased Interest Charges and an increased Total Minimum Payment Due.
						</p>
						<p>
							<b>H. Minimum Interest Charge.</b>
							A minimum Interest Charge (a Finance Charge) of $0.50 will be assessed in any Billing Cycle in which an Interest Charge is due, but is less than $0.50.
						</p>
						<p>
							<b>I. Temporary Reductions in Interest Charges.</b>
							Your Interest Charges may be temporarily reduced based on military activation or deployment. At the end of your activation or deployment, the Interest
							Charges will return to the rates then in effect under this Agreement. To request a temporary reduction in Interest Charges, you or your representative
							must provide a copy of your activation or deployment orders to us by sending them: (1) by email to us at deployment@aafes.com; (2) by facsimile
							transmission to (214) 465-2997; or (3) by mail addressed to the Exchange Credit Program, PO Box 650410, Dallas, TX 75265-0410.
						</p>
						<p>
							<b>11. Account Fees. </b>
						</p>
						<p>
							<b>A. Returned Payment Fee.</b>
							If any check, payment instrument, or any form of electronic payment to us is dishonored by your depository institution or returned to us unpaid for any
							reason, we will assess and add a Returned Payment Fee of up to $25.00 to your Account. The Returned Payment Fee will not exceed the Total Minimum
							Payment Due for your Account immediately before the date on which your payment was returned unpaid.
						</p>
						<p>
							<b>B. Document Copy Fee.</b>
							On non-disputed matters and matters unrelated to a Billing Error, and subject to any limitations or restrictions of applicable law, we may require that you pay
							us a flat processing fee of $5.00 per request, plus $0.25 (25 cents) for each page printed each time you request photocopies or reprints of Account and
							transaction documents. Recent historical statements are available on <a target="_blank" href="https://www.MyECP.com" class="text-bluelink1">www.MyECP.com</a>.
						</p>
						<p>
							<b>12. Payments; Total Minimum Payment Due. You may pay your New Balance in full any time without penalty or pay it in monthly installments.</b>
							Paying your entire New Balance or paying more than your Total Minimum Payment Due will help you reduce or avoid Interest Charges. To pay the New
							Balance in installments, you must pay us at least the Total Minimum Payment Due for each Billing Cycle by the Payment Due Date shown on each Periodic
							Statement. Your Periodic Statement will disclose the Total Minimum Payment Due after each Billing Cycle.
						</p>
						<p>
							Your Total Minimum Payment Due will be the sum of items 1 through 4 below:
							<ol>
								<li>
									The greater of:
									<ol type=a>
										<li>$15.00 (or the entire New Balance if it is less than $15.00); or</li>
										<li>
											1% of the unpaid balance of your Retail Plan and Special Promotion purchases plus accrued Interest Charges for such purchases
											(or any different percentage of Special Promotion purchases plus accrued Interest Charges separately disclosed to you in documents
											that modify or supplement this Agreement), based on the unpaid balance of such purchases as of the Closing Date for the Billing Cycle
											during which you made your most recent Retail Plan and/or Special Promotion purchase; plus
										</li>
									</ol>
								</li>
								<li>
									8.333% of the unpaid balance of any Military Clothing Plan purchases (if applicable), based on the unpaid balance of these purchases as of the
									Closing Date of the Billing Cycle during which you made your most recent Military Clothing Plan purchase; plus
								</li>
								<li>All past due payments; plus</li>
								<li>The amount by which your Account balance exceeds any applicable Credit Limit. </li>
							</ol>
						<p></p>
						
						<p>
							<b>13. Method of Payment; Check Endorsements.</b>
							You may make payments on your Account by sending personal checks, money orders or other negotiable instruments, payable in U.S. dollars, to the Payment
							Address shown on your Periodic Statement. Any payments received there will be promptly credited to your Account as specified on your Periodic Statement.
							Include your payment stub and do not send cash. Your Available Credit may not immediately show a payment has been applied to your Account if any
							payment you make is not received at the Payment Address shown on your Periodic Statement or is not accompanied by the payment coupon portion of your
							Periodic Statement. We may also permit you to make Account payments at your local Exchange or online at Exchange Credit Central on
							<a target="_blank" href="https://www.myecp.com/" class="text-bluelink1">www.MyECP.com</a>.
						</p>
						<p>
							<b>
								You must not send us any check marked "payment in full," or with similar terms or other conditions, unless both you and one of our authorized
								representatives have agreed in writing to resolve a dispute in that manner.
							</b>
							We can accept such checks or late or partial payments without losing our right to receive the full amount you owe for your Account under this Agreement.
						</p>
						<p>
							When you provide a check as payment, you agree that we may use information from your check to make a one-time electronic fund transfer from the deposit
							account at the financial institution identified on the check or process the payment as a check transaction. When we use information from your check to
							initiate an electronic fund transfer, funds may be withdrawn from your deposit account as soon as the same day we receive your payment. The electronic
							fund transfer will be the same as the amount shown on your check, without including any additional amounts. Electronically processed checks (and checks
							presented electronically) are not returned to you by your depository institution. We will retain an image of your electronically processed check as
							required by law. In the ordinary course of business, your check will not be provided to you with your deposit account statement, but you can retrieve
							a copy of your check by contacting your depository institution. Please notify us at the address provided above in Section 1 if you want to learn about
							other payment options and you prefer not to have your check used in this way.
						</p>
						<p>
							<b>14. Application of Payments.</b>
							We have the right to apply payments to the Total Minimum Payment Due for your Account in the order and manner we determine in our sole discretion. We
							will apply payments that exceed your Total Minimum Payment Due in the manner required by law, which generally means that any such excess payment
							amounts will be applied to your Account balances in descending order, beginning with Account balances subject to higher APRs. Special rules may apply
							if we offer certain deferred interest or similar programs as a Special Promotion or if we agree to apply payments in a specific manner at your request.
						</p>
						<p>
							<b>15. Account Documents We Send to You; Change of Address.</b>
							You agree that any Account notices, Periodic Statements, and correspondence (together, “Account Documents”) we send will be effective notice to you if
							sent to the most recent address we maintain for your Account in our records (your Account “address of record”). Initially, your address of record will
							be the address you provided on your Account application. If any address of record we maintain changes for any reason, you must give us written notice
							of any new address of record. To change your contact information such as any mailing address, email address or telephone number, you may sign on to
							your account at <a target="_blank" href="https://www.MyECP.com/" class="text-bluelink1">www.MyECP.com</a>. You may also contact the call center at 877-891-7827; go to the customer service desk at an Exchange; or complete and
							mail the change of address form on your billing statement. You understand and agree that we may update your address of record by using information we
							receive from national change of address service providers. Account Documents will be deemed given to you when they are hand delivered to you or
							deposited in the mail using your address of record, or, if you consented to electronic delivery, when sent by electronic means. If you do not receive
							any Periodic Statement after you attempt to change the address of record, it is your responsibility to contact us again and verify that any such
							address of record has been updated.
						</p>
						<p>
							<b>16. Default and Remedies.</b>
							Subject to any limitations or notice requirements under applicable law, we may declare your Account in default if any of the following occur (each, a
							“Default”): (a) you do not make any Total Minimum Payment Due by its applicable Payment Due Date; (b) you do not, upon our request, pay the full unpaid
							balance of your Account after the date your Exchange privileges are terminated or you voluntarily ask us to cancel your Available Credit and close
							your Account as provided in Section 19 below; (c) you do not do anything this Agreement requires of you; (d) you die, are adjudged incompetent or
							become the subject of a bankruptcy or insolvency proceeding; (e) you have supplied us at any time with misleading, false, incomplete, or incorrect
							information; (f) you or an Authorized User attempt or make any fraudulent use of the Account, before or after it is suspended or closed; (g) a purchase
							in which we retain a security interest is transferred, stolen or significantly damaged; (h) we have suspended your check presentation privileges; (i)
							you default or become delinquent in satisfying other obligations you owe us; or (j) you attempt or authorize an Account payment knowing that the funds
							needed to pay are insufficient or unavailable for any reason.
						</p>
						<p>
							Our remedies under applicable law include, without limitation, those available to us under the federal Debt Collection Improvement Act of 1996
							(Pub. L. 104-134), the Deficit Reduction Act of 1984 (Pub. L. 98-369), the Debt Collection Act of 1982 (Pub. L. 97-365), and the Federal Claims
							Collection Act of 1966 (Pub. L. 89-508), each as codified in the United States Code and as amended from time to time, and as implemented by the
							federal Claims Collection Standards, 31 C.F.R. Parts 900 through 904 and other implementing regulations promulgated by the Department of Defense and
							other federal agencies, each as amended from time to time. Regardless of anything in this Agreement to the contrary, you understand and agree that we
							may pursue any one or more of the following remedies after a Default, subject to any notice requirements and other limitations of applicable law. In
							doing so, we may: (i) close your Account to future purchases and require immediate payment of your entire Account balance; (ii)
							<b>
								arrange for garnishment or deduction from your military, retired, or civilian pay of the maximum amount allowed by applicable law to pay amounts you
								owe under the Account
							</b>
							; (iii) arrange for an offset or deduction of the maximum amount allowed against any federal payment due to you (including a federal income tax refund
							or a federal salary); (iv) refuse to honor any further attempts by you to purchase from us using a Card, the Account, checks, or any other form of
							payment; (v) reduce your Credit Limit and cancel or suspend all Available Credit connected with your Account; (vi) terminate any Special Promotion and
							transfer all related Account balances to the Retail Plan for your Account; (vii) bring an action to collect all amounts owed; (viii) repossess
							purchases in which we retain a security interest and otherwise seek self-help or judicial remedies available to us as a secured creditor; (ix) notify
							your unit commander about our Account collection efforts; (x) close and transfer your Account for collection by the AAFES Collections unit, a
							commercial collection agency, or a law firm, in accordance with applicable law; and/or (xi) take any other action allowed by law. Our rights and
							remedies under this Agreement are cumulative and we may pursue them in any order or combination we consider appropriate. If we refer your Account for
							collection by a commercial collection agency or law firm, submit your Account for offset through the U.S. Department of the Treasury, or arrange for
							garnishment or deduction from your military, retired, or civilian pay through your current or former employer, you shall be liable and responsible for
							paying any and all costs, fees and expenses that these parties charge and that you or we incur in connection with the collection of your Account after
							Default, except as limited by applicable law. The costs and expenses you will be responsible for include any fees associated with a bankruptcy
							reaffirmation. We will tell you in advance and/or give you an opportunity to cure your default only if applicable law requires us to do so.
						</p>
						<p>
							<b>17. Lost or Stolen Card; Unauthorized Use.</b>
							Each Card we issue remains our property and
							you must surrender it to us upon our demand. You must sign your Card before its first use. If you notice the loss or theft of your Card or a possible
							unauthorized use of your Card, you should write to us immediately at Exchange Credit Program, PO Box 650410, Dallas, TX 75265-0410, or call us at
							(877) 891-7827. If you are outside the United States, you should call us at the customer service numbers listed at the end of this Agreement. You may
							also contact us at the customer service desk of the Exchange. You will not be liable for any unauthorized use that occurs after you notify us. You may,
							however, be liable for unauthorized use that occurs before your notice to us. In any case, your liability will not exceed $50. You agree to cooperate
							with us while we investigate any unauthorized use. You must identify for us the unauthorized charges from which you received no benefit. We may require
							that you provide us information in writing to help us find out what happened. We may also require that you comply with certain procedures in connection
							with our investigation. If you orally give us notice about any loss or theft, you agree to confirm it in writing. You agree that unauthorized use does
							not include use by a person whom you have given authority to use a Card or the Account and that you will be liable for all use by any such person.
						</p>
						<p>
							<b>18. Separation.</b>
							Clearing the Exchange during the base or post clearing process does not result in a forgiveness of your Account balance. Even after any separation from
							service, you remain responsible for all purchases made with the Account and all related Interest Charges, Account Fees and other fees and charges, as
							provided in this Agreement. If you are an AAFES employee who separates voluntarily or involuntarily, we may offset your final AAFES pay in an amount up
							to the full amount needed to satisfy the entire balance owed for the Account.
						</p>
						<p>
							<b>19. How You May Close Your Account.</b>
							You may ask us to cancel your Available Credit and close the Account at any time and for any reason (including when you lose your Exchange privileges).
							We may ask that you send a cancellation request to us in writing, to the extent permitted by law. We may also ask that you collect and destroy all
							Cards held by you, an Authorized User, or any other person to prevent any further use of the Account. No one other than you may instruct us to cancel
							your Available Credit and close the Account, even if they are designated to act for you through a Power of Attorney. You must still pay us the full
							amount you owe us for the Account under this Agreement, including amounts due for Interest Charges, Account Fees, other authorized fees and charges,
							and any purchases you or an Authorized User make after the date of your request to close the Account or cancel a Card, except to extent expressly
							prohibited by applicable law. If you ask to cancel your Available Credit and close the Account, we may require that you pay the full unpaid balance of
							the Account no later than 30 calendar days from the date of your cancellation request, except as prohibited by law. If you elect to cancel your Account
							when exercising rights you may have to reject certain changes we propose to make to the terms of your Account or this Agreement, we will not require
							that you cancel your Account in writing or immediately pay the full unpaid balance of the Account solely because you are exercising these rights
							(see Section 27 below).
						</p>
						<p>
							<b>20. We Have the Right to Close or Suspend your Account.</b>
							We may close your Account and cancel or suspend your Available Credit and use of the Account and Cards at any time, with or without cause, and for any
							reason, subject to any requirements or limitations of applicable law. You and any Authorized Users must not use or attempt to use a Card or the Account
							after we cancel or suspend your Available Credit or close your Account. We will send a notice to the mailing address or email address for your Account
							(see Section 15 above) notifying you if we have cancelled or suspended your Account and Cards. You must collect Cards held by you, an Authorized User,
							or any other person, and cut those Cards in half to prevent their further use. Our reasons, among others, for closing your Account and cancelling or
							suspending your use of the Account or Cards may relate to your loss of Exchange privileges, the length of time in which the Account has been inactive,
							your failure to notify us of an address change, or any event of Default under the Agreement. You must still pay the full amount you owe us under this
							Agreement if your Account is closed and your Available Credit is cancelled or suspended, including accrued Interest Charges, accrued Account Fees,
							other fees and charges provided for in this Agreement, and amounts due for any purchases you or an Authorized User make after the date we attempt to
							cancel or suspend use of the Account or a Card. You agree to pay us the outstanding balance, Interest Charges, Account Fees and all other fees,
							charges, costs, and expenses due on your Account under the terms of this Agreement, even if we have closed your Account and cancelled or suspended
							your use of the Account and Cards. If you are not in Default under this Agreement, we may allow you to pay the amount you owe as otherwise provided
							under the terms of this Agreement. After an Account is closed and its balance paid in full, you must submit an application to us for a new Account at
							an exchange where the Card is accepted or online at <a target="_blank" href="https://www.MyECP.com" class="text-bluelink1">www.MyECP.com</a>.
						</p>
						<p>
							<b>21. Credit Investigation and Credit Reports.</b>
							You authorize us to investigate your credit
							record and verify your income, employment, and other related information with third parties. You understand and agree that your credit report may be
							requested in connection with processing your initial credit application. You also understand and agree that your credit report may be requested in
							connection with any subsequent extension of Account credit, request to increase your Credit Limit, renewal or update of your Account, Account
							collection action, or an investigation of an Account dispute.
						</p>
						<p>
							You also understand and agree that we may furnish information about the status and payment history of your Account to credit reporting agencies and
							other creditors as permitted or required by applicable law. We may report information about your Account to credit reporting agencies and others who
							may properly receive that information. Late payments, missed payments, or other defaults on your Account may be reflected in your credit report.
						</p>
						<p>
							<b>
								If you believe that we have reported inaccurate information about you to a credit reporting agency, notify us in writing at Exchange Credit Program, P.O. Box 650410, Dallas, TX 75265-0410; by email at CreditDisputes@aafes.com; by fax at 214-465-
								2702.
							</b>
							Please provide your name, mailing address, email address, Account number, telephone number, the information you believe is inaccurate, and tell us why
							you believe the information is incorrect. If you have supporting documents or information, such as a copy of a credit report that includes information
							you believe is inaccurate, send us the supporting documents and information as well. We will investigate the matter. If our investigation shows that
							information we furnished was inaccurate, we will notify each credit reporting agency to which we reported the information and ask the agency to correct
							any such inaccurate information.
						</p>
						<p>
							<b>22. Telephone Calls.</b>
							You agree that you and we have an established business relationship and authorize us to contact you by telephone about your Account. You agree that we may
							place such telephone calls using an automatic dialing–announcing device and that such calls will not be unsolicited calls for purposes of applicable law.
							You agree that we may, from time to time, monitor and/or record telephone calls between you and us to assure the quality of our customer service and for
							other legitimate business reasons. If you provide a mobile or cellular phone number to us, or if you call us using a mobile or cellular phone, you
							agree that we and our agents and representatives may make Account collection and servicing calls to your mobile or cellular phone.
						</p>
						<p>
							<b>23. Governing Law.</b>
							This Agreement and your and our rights and responsibilities related to the Account are governed solely by applicable federal law.
						</p>
						<p>
							<b>24. No Waiver by Us.</b>
							You agree that we may, without notice to you, waive or refrain from enforcing our rights under this Agreement without losing any of those rights.
							You agree that we may waive one or more of our rights under the Agreement without affecting any of our other rights. If we waive any right at a
							particular time, you agree that we are not also waiving the same right in other circumstances or at another time.
						</p>
						<p>
							<b>25. Severability.</b>
							If any provision of this Agreement is finally determined to be void or unenforceable under any law, rule, or regulation, you agree that all other
							provisions of this Agreement will still be valid and enforceable.
						</p>
						<p>
							<b>26. Assignment of Account.</b>
							We may sell, assign or transfer your Account or any interest we hold in your Account at any time, without notice, and without your consent. You may not
							sell, assign or transfer any of your rights or obligations under this Agreement or the Account, except with our express written consent.
						</p>
						<p>
							<b>27. Change in Terms.</b>
							Subject to any required notices and other requirements and limitations of applicable law, we may, at any time, change any term of this Agreement,
							including the Interest Charges and Account Fees that apply to your Account. Unless we explain otherwise in any change in terms notice you receive,
							the changes we make to this Agreement and your Account will take effect automatically on the date we specify in the notice, even if you do not make
							any further Account purchases or otherwise agree with the changes. If required by law, our change in terms notice will explain whether there are
							changes you may reject and, if so, how you may do so and what may result from any decision you make to reject these changes. Except as limited by
							applicable law or as otherwise provided in our change in terms notice, any change in terms will apply to: (a) all Account purchases made after the
							effective date of the change; and (b) all unpaid Account balances. No one has the authority to change this Agreement without our express written
							consent.
						</p>
						<p>
							<b>
								28. Security Interest. You grant us and we retain a security interest in each Retail Plan and Special Promotion purchase you or an Authorized User
								make with the Account.
							</b>
							To the extent permitted by applicable law, you grant to us and we shall retain a purchase money security interest under the Uniform Commercial Code in
							each Retail Plan and Special  Promotion Plan purchase you make with your Account, as shown on sales slips or other evidence of the sales transaction,
							until the unpaid balance of that purchase and any related Interest Charges and Account Fees are paid in full. For purposes of determining at any
							time which Retail Plan and Special Promotion Plan purchases remain subject to our security interest, payments on your Account will be applied in
							accordance with any mandatory provisions of applicable law and, absent such provisions, shall be applied as follows: first, to Interest Charges,
							then to any Account Fees, then to pay that portion of the Total Minimum Payment Due for purchases made under the Military Clothing Plan, then to each
							Retail Plan and Special Promotion purchase in the order that each such purchase was charged to your Account, beginning with the oldest purchase. Retail
							Plan and Special Promotion purchases made on the same day will be paid off by allocating your payments to the lowest price purchase(s) first. You
							understand and agree that we may, at our option, record financing or security documents as permitted by applicable law that evidence our security
							interest in Retail Plan and Special Promotion purchases made with the Account. It is expressly agreed that no security interest is or will be retained
							or acquired by us in any consumer’s principal dwelling or household goods other than those you or an Authorized User purchased with the Account. This
							does not apply to a lien created by a court judgment. In the event of default, we shall have all the rights of a secured party under applicable law,
							including, to the extent permitted by applicable law, the right to repossess items that remain subject to our security interest.
						</p>
						<p>
							<b>29. Consent for Communications.</b>
							By providing the number of your land line, cell phone or other wireless device and your email address, now or in the future, you expressly consent and
							agree that we and any of our agents, service providers or assignees may call you using an automatic telephone dialing system or otherwise; leave you a
							voice, prerecorded, or artificial voice message; or send you a text, email message, or other electronic message for any purpose related to the
							servicing or collection of the Account or any account you may establish with us or for other informational purposes related to your Account or other
							accounts with us (each, a “Communication”). You also agree that we and our agents, service providers or assignees may include your personal
							information in a Communication. We will not charge you for a Communication, but your service provider may. You agree that we may monitor and record any
							telephone calls to assure the quality of our service or for other reasons.
						</p>
						<p>
							<b>30. Entire Agreement.</b>
							This Agreement, together with the accompanying documents and related credit disclosures and any application you signed or otherwise submitted in
							connection with the Account (which are incorporated by reference in this Agreement), represents the entire agreement between you and us relating to
							your Account, and supersedes any other prior or contemporaneous agreement between you and us relating to your Account. This Agreement will survive
							termination of your Account until all amounts due under this Agreement are paid in full. This Agreement may not be changed or amended, except in
							accordance with the provisions of this Agreement. It is not the intention of the parties that anything in this Agreement should result in the
							assessment of fees or charges in excess of those permitted by applicable law. If any fee or charge assessed under this Agreement is finally determined
							to be in excess of that permitted by applicable law, the excess amount will be applied to reduce the outstanding balance in your Account or, if there
							is no outstanding balance, will be refunded to you.
						</p>
						<p>
							<b>
								NOTICE: ANY HOLDER OF THIS CONSUMER CREDIT CONTRACT IS SUBJECT TO ALL CLAIMS AND DEFENSES WHICH THE DEBTOR COULD ASSERT AGAINST THE SELLER OF GOODS OR
								SERVICES OBTAINED PURSUANT HERETO OR WITH THE PROCEEDS HEREOF. RECOVERY HEREUNDER BY THE DEBTOR SHALL NOT EXCEED AMOUNTS PAID BY THE DEBTOR HEREUNDER.
							</b>
						</p>
						<p>
							<i>
								Your Billing Rights: Keep This Document For Future Use.
							</i>
						</p>
						<p>This notice tells you about your rights and our responsibilities under the Fair Credit Billing Act.</p>
						<p><i>What To Do If You Find A Mistake On Your Statement</i></p>
						<p>
							If you think there is an error on your statement, write to us at:
						</p>
						<p>
							Exchange Credit Program<br />
							P.O. Box 650410<br />
							Dallas, TX 75265-0410
						</p>
						<p>In your letter, give us the following information:</p>
	
						<div class="ml20">
							<p>
								<ul>
									<li><i>Account information</i>: Your name and account number.</li>
									<li><i>Dollar amount</i>: The dollar amount of the suspected error.</li>
									<li>Description of problem: If you think there is an error on your bill, describe what you believe is wrong and why you believe it is a mistake.</li>
								</ul>
	
							</p>
	
						</div>
						<p>You must contact us:</p>
						<div class="ml20">
							<p>
								<ul>
									<li>Within 60 days after the error appeared on your statement.</li>
									<li>At least 3 business days before an automated payment is scheduled, if you want to stop payment on the amount you think is wrong.</li>
								</ul>
							</p>
						</div>
						<p>
							You must notify us of any potential errors in writing. You may call us, but if you do we are not required to investigate any potential errors and you
							may have to pay the amount in question.
						</p>
	
						<p><i>What Will Happen After We Receive Your Letter</i></p>
						<p>
							When we receive your letter, we must do two things:
							<ol>
								<li>
									Within 30 days of receiving your letter, we must tell you that we received your letter. We will also tell you if we have already corrected the
									error.
								</li>
								<li>
									Within 90 days of receiving your letter, we must either correct the error or explain why we believe the bill was correct.
								</li>
							</ol>
						</p>
						<p>
							While we investigate whether or not there has been an error:
							<ul>
								<li>
									We cannot try to collect the amount in question, or report you as delinquent on that amount.
								</li>
								<li>
									The charge in question may remain on your statement, and we may continue to charge you interest on that amount.
								</li>
								<li>While you do not have to pay the amount in question, you are responsible for the remainder of your balance.</li>
								<li>We can apply any unpaid amount against your credit limit.</li>
							</ul>
						</p>
						<p>
							After we finish our investigation, one of two things will happen:
							<ul>
								<li><i>If we made a mistake</i>: You will not have to pay the amount in question or any interest or other fees related to that amount.</li>
								<li>
									<i>If we do not believe there was a mistake</i>: You will have to pay the amount in question, along with applicable interest and fees. We will
									send you a statement of the amount you owe and the date payment is due. We may then report you as delinquent if you do not pay the amount we
									think you owe.
								</li>
							</ul>
						</p>
						<p>
							If you receive our explanation but still believe your bill is wrong, you must write to us within <i>10 days</i> telling us that you still refuse to pay.
							If you do so, we cannot report you as delinquent without also reporting that you are questioning your bill. We must tell you the name of anyone to whom
							we reported you as delinquent, and we must let those organizations know when the matter has been settled between us.
						</p>
						<p>
							If we do not follow all of the rules above, you do not have to pay the first $50 of the amount you question even if your bill is correct.
						</p>
						<p>
							<i>
								Your Rights If You Are Dissatisfied With Your Credit Card Purchases
							</i>
						</p>
						<p>
							If you are dissatisfied with the goods or services that you have purchased with your credit card, and you have tried in good faith to correct the
							problem with the merchant, you may have the right not to pay the remaining amount due on the purchase.
						</p>
						<p>
							To use this right, all of the following must be true:
							<ol>
								<li>
									The purchase must have been made in your home State or within 100 miles of your current mailing address, and the purchase price must have been
									more than $50. (Note: Neither of these is necessary if your purchase was based on an advertisement we mailed to you, or if we own the company that
									sold you the goods or services.)
								</li>
								<li>You must have used your credit card for the purchase.</li>
								<li>You must not yet have fully paid for the purchase.</li>
							</ol>
						</p>
						<p>If all of the criteria above are met and you are still dissatisfied with the purchase, contact us in writing at:</p>
						<p>
							Exchange Credit Program<br />
							P.O. Box 650410<br />
							Dallas, TX 75265-0410
						</p>
						<p>
							While we investigate, the same rules apply to the disputed amount as discussed above. After we finish our investigation, we will tell you our decision.
							At that point, if we think you owe an amount and you do not pay, we may report you as delinquent.
						</p>
						<p><b>Privacy Notice</b></p>
						<p>
							Protecting your privacy is important to us. We adhere to the Privacy Act, 5 U.S.C. 552 et seq., as well as the Right to Financial Privacy Act, 12 U.S.C.
							3401 et seq. We collect nonpublic personal information about you from the following sources:
							<ul>
								<li>
									information we receive from you on applications or other forms;
								</li>
								<li>
									information about your transactions with us or others; and
								</li>
								<li>
									information we receive from a consumer reporting agency.
								</li>
							</ul>
							We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted by law. We restrict access
							to nonpublic personal information about you to those employees who need to know that information to provide products or services to you. We maintain
							physical, electronic, and procedural safeguards that comply with federal standards to guard your nonpublic personal information.
						</p>
						<div style="align-content:center"></div>
						<p>
							<b>
								Exchange Credit Program<br />
								P.O. Box 650410<br />
								Dallas, Texas 75265-0410<br />
								www.MyECP.com<br />
							</b>
						</p>
						<p><b>Exchange Credit Call Center Telephone Numbers</b></p>
						<table role="presentation">
							<tbody>
								<tr>
									<td>CONUS (includes Alaska &amp; Hawaii)</td>
									<td>1-877-891-7827</td>
								</tr>
							</tbody>
						</table>
						<br />
						<p><b>Toll Free Numbers</b></p>
						<p>
							<table role="presentation">
								<tbody>
									<tr>
										<td>BELGIUM</td>
										<td>0800-1-6374</td>
									</tr>
									<tr>
										<td>CRETE</td>
										<td>00-800-18092003452</td>
									</tr>
									<tr>
										<td>GERMANY</td>
										<td>0800-812-4690</td>
									</tr>
									<tr>
										<td>GUAM</td>
										<td>1-800-546-7195</td>
									</tr>
									<tr>
										<td>ITALY</td>
										<td>8008-72683</td>
									</tr>
									<tr>
										<td>JAPAN</td>
										<td>00531-11-4239</td>
									</tr>
									<tr>
										<td>KOREA</td>
										<td>00308-130663</td>
									</tr>
									<tr>
										<td>NETHERLANDS</td>
										<td>0800-022-9614</td>
									</tr>
									<tr>
										<td>NORWAY</td>
										<td>800-14-199</td>
									</tr>
									<tr>
										<td>SPAIN</td>
										<td>900-971-394</td>
									</tr>
									<tr>
										<td class="pr10">UNITED KINGDOM </td>
										<td>0800-96-1843</td>
									</tr>
								</tbody>
							</table>
						</p>
						<br />
						<p><b>Collect Numbers</b></p>
						<table role="presentation">
							<tbody>
								<tr>
									<td>ICELAND</td>
									<td>214-465-6030</td>
								</tr>
								<tr>
									<td class="pr10">SAUDI ARABIA</td>
									<td>214-465-6030</td>
								</tr>
								<tr>
									<td>TURKEY</td>
									<td>214-465-6030</td>
								</tr>
	
							</tbody>
						</table>
						<br />
						<p>Fax: 214-465-2997</p>
					</td>
				</tr>
	
			</tbody>
		</table>
	
	</body>
	</html>
	`;
}

function getApplyNowPrivacy() {
    return `


	<!DOCTYPE html>
	
	<html>
	<head>
		<meta name="viewport" content="width=device-width" />
		<title></title>
	
		<style>
			.link-break {
				word-break: break-word;
				-ms-word-break: break-all;
				display: inline-block;
			}
	
			.tac {
				text-align: center;
			}
	
			.pt10 {
				padding-top: 10px;
			}
	
			.pt25 {
				padding-top: 25px;
			}
		</style>
	</head>
	<body>
	
		<div class="">
			<div class="">
				<div class="">
					<div class="tac">
						<span>Army & Air Force Exchange Service</span><br />
						<span><b>MILITARY STAR® Card Application</b></span><br />
						<span><i>(Read Agency Disclosure Notice, Privacy Act Statement, and Instructions before completing form.)</i></span>
					</div>
				</div>
			</div>
			<div class="pt20">
				<div class="">
					<div class="tac"><b>AGENCY DISCLOSURE NOTICE</b></div>
					<div align="right"><span>OMB CONTROL NUMBER: 0702-0137</span></div>
					<div align="right">
						<span>OMB EXPIRATION DATE:</span>
						<span>OCT 31, 2025</span>
					</div>
					<div class="pt10">
						The public reporting burden for this collection of information, 0702‐0137, is estimated to average 2 minutes per response,
						including the time for reviewing instructions, searching existing data sources, gathering and maintaining the data needed, and
						completing and reviewing the collection of information. Send comments regarding the burden estimate or burden reduction
						suggestions to the Department of Defense, Washington Headquarters Services, at whs.mc‐alex.esd.mbx.dd‐dod‐informationcollections@mail.mil.
						Respondents should be aware that notwithstanding any other provision of law, no person shall be subject to any penalty
						for failing to comply with a collection of information if it does not display a currently valid OMB control number.
					</div>
				</div>
			</div>
			<div class="pt25">
				<div class="">
					<div class="tac"><b>PRIVACY ACT STATEMENT</b></div>
	
					<div class="pt10">
						<b>AUTHORITY:</b> 10 U.S.C. 7013, Secretary of the Army; 10 U.S.C. 9013, Secretary of the Air Force; Federal Claims Collection Act of 1966
						(Pub.L. 89‐508, as amended) and Debt Collection Act of 1982 (Pub.L. 97‐365, as amended), as amended by the Debt Collection
						Improvement Act of 1996 (Pub.L. 104‐134, section 31001) as codified in 31 U.S.C. §3711, Collection and Compromise; 31 CFR 285.11,
						Administrative Wage Garnishment; DoD Instruction 1330.21, Armed Services Exchange Regulations; DoD 7000.14‐R, Department of
						Defense Financial Management Regulation Volume 13:, “Nonappropriated Funds Policy” and Volume 16: “Department of Defense
						Debt Management”; Army Regulation 215‐8/Air Force Instruction 34‐211(I), Army and Air Force Exchange Service Operations; and
						E.O. 9397 (SSN), as amended.
					</div>
	
					<div class="pt10">
						<b>PRINCIPAL PURPOSES(S):</b> To determine an individual’s credit worthiness, monitor account activity, process account purchases,
						payments and/or collections, answer patron’s questions about their account, determine indebtedness and eligibility to cash checks
						at Exchange facilities, administer and respond to questions about the Federal Claims Collection Act, and post to Exchange Accounts
						Receivable and audit results.
					</div>
	
					<div class="pt10">
						<b>ROUTINE USE(S):</b> Your records may be disclosed outside of DoD pursuant to Title 5 U.S.C. §552a(b)(3) regarding DoD “Blanket
						Routine Uses” published at <a href="http://dpcld.defense.gov/Privacy/SORNsIndex/BlanketRoutineUses.aspx" target="_blank" class="link-break">http://dpcld.defense.gov/Privacy/SORNsIndex/BlanketRoutineUses.aspx.</a>
						This includes disclosure to the Department of the Treasury, and a debt collection agency with which the United States has contracted for collection services to
						recover debts owed to the United States. To any employer (person or entity) that employs the services of others and that pays their
						wages or salaries, where the employee owes a delinquent nontax debt to the United States. The term employer includes, but is not
						limited to, State and local governments, but does not include any agency of the Federal Government. To consumer reporting
						agencies pursuant to 5 U.S.C. 552a(b)(12) as defined in the Fair Credit Reporting Act (14 U.S.C. 1681a(f)) or the Federal Claims
						Collection Act of 1966 (31 U.S.C. 3701(a)(3)). The purpose of this disclosure is to aid in the collection of outstanding debts owed to
						the Federal government; typically, to provide an incentive for debtors to repay delinquent Federal government debts by making
						these debts part of their credit report. The disclosure is limited to information necessary to establish the identity of the individual,
						including name, address, and taxpayer identification number (Social Security Number); the amount, status, and history of the claim;
						and the agency or program under which the claim arose for the sole purpose of allowing the consumer reporting agency to prepare a commercial credit report.
						This disclosure will be made only after the procedural requirement of 31 U.S.C. 3711(f) has been followed.
					</div>
	
					<div class="pt10">
						<b>DISCLOSURE:</b> Voluntary, however, failure to provide all the requested information may result in the denial of your application for
						inadequate data.
					</div>
				</div>
			</div>
	
			<div class="pt25">
				<div class="">
					<div class="tac"><b>INSTRUCTIONS</b></div>
					<div class="pt10">
						<ol>
							<li>Please complete application in its entirety to ensure timely processing.</li>
							<li>Follow all directions printed on the application.</li>
							<li>Please read the terms and conditions prior to submitting your application.</li>
							<li>Questions should be directed to Exchange Credit Program Contact Center at 1-877-891-7827.</li>
						</ol>
					</div>
				</div>
			</div>
	
	
		</div>
	
	
	</body>
	</html>
	`;
}

function getFaq() {
    return {
        help: getGeneralHelp(),
        paymentQuestions: getPaymentQuestions(),
        onlinePayments: getOnlinePayment(),
        statementQuestions: getStatementQuestions(),
        rewardPrograms: getRewardPrograms(),
        textAlerts: getTextAlerts(),
        twofa: getTwofa(),
        payYourWay: getPayYourWay(),
    };
}

function getGeneralHelp() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
        <h4>Do I need a different user id and password for MyECP.com and <i>shop<b>my</b>exchange.com</i>? </h4>
        <p>
            Yes. For your security, your log in information is not interchangeable with MyECP.com and <i>shop<b>my</b>exchange.com</i>.
        </p>
        <br>
        <h4>Where can I update my mailing address?</h4>
        <ol>
            <li>Log onto your account (first time users must register)</li>
            <li>Under "Manage Account" select "Update Contact Info"</li>
            <li>Edit your information and select "Update Info"</li>
        </ol>
        <br>
        <h4>How do I add an authorized user?</h4>
        <ol>
            <li>Log onto your account (first time users must register)</li>
            <li>Under "Manage Account" select  "Manage Authorized Users"</li>
            <li>Add your authorized user's information and submit*</li>
        </ol>
        <p style="padding-left:20px">	*Only primary account holders may add authorized users.</p>

        <br>
        <h4>How do I report my credit card lost or stolen?</h4>
        <p>
            You must contact The Exchange Credit Program Call Center at 1-877-891-7827 (STAR) to report your card lost or stolen. <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers)</a>.
        </p>

        <br>
        <h4>How do I close my account?</h4>
        <p>
            You must contact The Exchange Credit Program call center at 1-877-891-7827 (STAR) to close your account. <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers)</a>.
        </p>

        <br>
        
        <h4>How do I dispute a charge on my account?</h4>
        <div>
            <p>You must dispute all transactions in writing within 60-days from the date the transaction posts to your account.</p>
            <div>
                You may submit a dispute on a transaction by:
                <ol style="margin-top: 10px;">
                    <li>Sending an email to our Risk Department at <a href="mailto:ecpfraud@aafes.com" class="text-bluelink1">ecpfraud@aafes.com</a></li>
                    <li>Sending a fax to Attention: Risk Department at 214-465-2017</li>
                    <li>Mailing your request to:</li>
                </ol>
            </div>
            <div style="padding-left: 25px;">
                <p>
                    Exchange Credit Program<br>
                    P.O. Box 650410<br>
                    Dallas, Texas 75265-0410<br>
                </p>
            </div>
            <p style="padding-top: 10px;">Requests must include the following:</p>
            <ul>
                <li>Your full name as it appears on your card</li>
                <li>The last 4 digits of your account number or last 5 digits of your SSN</li>
                <li>The transaction amount</li>
                <li>The transaction location</li>
                <li>Brief description of why you are disputing the transaction</li>
            </ul>
            You may refer to your terms and conditions for a detailed explanation of your rights and our responsibilities when investigating disputes.<br>

        </div>

        <br>

        <h4>What if I become deployed?</h4>
        <p>
            The Exchange Credit Program offers deployment benefits to all eligible Active Duty and Mobilized or
            Activated Reservists or National Guard Military Members who have valid orders to deploy to qualifying
            contingency locations.  While you are deployed, you may still make purchases, but you are not required
            to make monthly payments and your interest rate is temporarily reduced to six-percent (6%).
            After your deployment ends, your interest rate reverts to the rate in the current Exchange
            Credit Program Credit Agreement and you are required to make monthly payments as
            long as your account still has a balance.
        </p>
        <p>
            In order to be eligible for deployment, your account must be in good standing (no more than one payment
            past due), and you must provide a copy of your deployment orders or a letter from your unit commander.
        </p>
        <p>The deployment orders or letter must contain:</p>
        <ul>
            <li>Your full name</li>
            <li>Your Social Security Number</li>
            <li>Your length of deployment or dates of deployment</li>
        </ul>
        <p>
            If your deployment is extended, you or your Unit Commander/representative should notify the Exchange
            Credit Program.
        </p>
        <br>

        <div style="margin-bottom: 10px;">
            You will need to submit your deployment orders or letter to: <br>
            <div style="margin-top: 10px;" style="padding-left:30px">
                Exchange Credit Program <br>
                ATTN: Deployments<br>
                P.O. Box 650410<br>
                Dallas, TX 75265-0410
                <br>
                <br>
                Fax: 214-465-2997 DSN: 967.2997 <br>
                ATTN: Deployments
                <br>
                <br>
                Email: <a href="mailto:Deployment@aafes.com "><span style="color: blue; text-decoration: underline">Deployment@aafes.com</span></a>
                <br>
                Note: If sending by email, please attach an image of the orders or letter.
            </div>
        </div>
        <p>
            For questions about this policy, please contact the Exchange Credit Program Call Center at 1-877-891-7827 (STAR).<br>
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers)</a>.
        </p>
    </div>
</div>`;
}

function getPaymentQuestions() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
        <h4>Where can I make my payments?</h4>
        <p>
            You may submit a payment through the website or by calling the Exchange Credit Program Call Center at 1-877-891-7827 (STAR).
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers).</a>
        </p>

        <p>Payments are also accepted at your local Exchange or may be mailed to:</p>
        <div style="padding-left:20px">
            The Exchange<br>
            PO Box 740890<br>
            Cincinnati, OH 45274-0890<br>
            <br>
            <b>NOTE:</b> Be sure to include your remittance stub to ensure your payment is posted to the correct account. <br>
            <br>
            <b>Check Payments:</b> Be sure to write your 16-digit account number on the front of your check.<br>
        </div>


        <br>
        <h4>How does my payment cover all plans?</h4>
        <p>
            Payments will be applied to your account in accordance with the Terms and Conditions of your account and as required by law. By paying at least the minimum payment amount each month, you will ensure your account stays current.
        </p>

        <br>
        <h4>What if I want to make a payment that is more than the minimum amount due?</h4>
        <p>
            You may pay any amount you wish, as long as you pay the minimum amount due.  Any payment that is over the minimum due is applied to the plan(s) with the highest interest rate(s).  If you wish to apply any excess payment to a promotional plan, please contact the Exchange Credit Program.
        </p>

        <br>
        <h4>What if I pay less than the minimum payment required?</h4>
        <p>
            Any underpayment becomes past due and is added to the next month's minimum monthly payment. If you need assistance with your monthly payment, please contact the Exchange Credit Program Call Center at 1-877-891-7827 (STAR) to discuss your payment options.
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers).</a> <br>
        </p>

        <br>
        <h4>What happens if I don't make my payments?</h4>
        <p>
            If your monthly payment is not made, your account becomes delinquent. Your charge and check privileges and rewards may be suspended. Your unit commander may be notified and the delinquent balance may be involuntary collected. If you need assistance with your monthly payment, please contact the Exchange Credit Program Call Center at 1-877-891-7827 (STAR) to discuss your payment options.
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers).</a> <br>
        </p>

        <br>
        <h4>What do I need to do if I mailed a payment to the payment center and it did not post?</h4>
        <p>
            If the check cleared your bank, please contact Exchange Credit Program Call Center at 1-877-891-7827 (STAR).
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers).</a>
        </p>

        <div style="padding-left:20px">
            <p>You will need to provide the:</p>
            <ul>
                <li>Check Number</li>
                <li>Check Date</li>
                <li>Check Amount</li>
            </ul>
        </div>


        <br>
        <h4>Will I be charged interest while the payment in question is being researched?</h4>
        <p>
            Yes. However, once the missing payment is located and posted, any interest will be adjusted.
        </p>

        <br>
        <h4>What if I made my payment at the local exchange, and it did not post?</h4>
        <p>
            You may contact the customer service desk where the payment was made or contact the Exchange Credit Program Call Center at 1-877-891-7827 (STAR).
            <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers).</a>
        </p>

        <div style="padding-left:20px">
            <p>If payment was by check, you will need to provide the:</p>
            <ul>
                <li>Check Number</li>
                <li>Check Date</li>
                <li>Check Amount</li>
            </ul>
        </div>
        <br>
    </div>
</div>`;
}

function getOnlinePayment() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
         <h4>What is an Automated Clearing House (ACH) payment?</h4>
         <p>
             ACH payments are payments that are automatically deducted monthly from your bank account. You may also schedule a one time payment.
         </p>
         <br>
         <p>
             Your payment may be for the account balance, the last statement balance, the minimum payment due, or any other amount you specify.
         </p>
 
         <br>
         <h4>How can I schedule an ACH payment?</h4>
        
         <p>You may schedule an ACH Payment online:</p>
         <div style="padding-left:20px">
                 <ol>
                     <li>Log onto your account (first time users must register)</li>
                     <li>From the Account Summary Page, select the "Make a Payment" button</li>
                     <li>Add at least one bank profile (you will need your bank account number and the transit/routing number from one of your checks; the page shows you how to identify these numbers)</li>
                     <li>Schedule your one-time or auto payment</li>
                     <li>Submit your request</li>
                 </ol>
         </div>
         <p>            
             You may also use our automated system at 1-877-891-7827 (STAR) <a class="text-bluelink1" href="/contactUs">(Additional telephone numbers)</a>
             to schedule a payment or speak to a representative who will be happy to assist you.
         </p>
         <br>
 
 
 
         <h4>Will my auto ACH payments automatically stop once the account has been paid in full?</h4>
                     
         <p>
             No. Even though you have an auto ACH payment, an ACH payment will not be requested from your bank unless you have a balance. If you have a balance on your account in the future, your auto ACH payment will resume.
         </p>
        
         <p>If you wish to permanently stop an auto ACH payment you must:</p>
 
         <div style="padding-left:20px">
                 <ol>
                     <li>Log onto your account</li>
                     <li>From the Account Summary Page, select the "Make a Payment" button</li>
                     <li>Cancel the auto payment</li>
                 </ol>
         </div>       
         <br>
 
 
         
         <h4>Will my ACH payment be available for use immediately?</h4>
         <p>
             Your open-to-buy may not be updated for up to five days.
         </p>
 
 
     </div>
 </div>`;
}

function getStatementQuestions() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
        <h4>How do I update my Statement Delivery Preference?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Under "Manage Account" select "Update Contact Info" </li>
                <li>Scroll to the bottom of the page and check "Yes, please email" under "Statements"</li>
                <li>Select "Submit" button</li>
            </ol>
        </div>
        <br>

        <h4>How do I view my online statement?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab located under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "View PDF now"</li>
            </ol>
        </div>
        <br>

        <h4>Can I download my statements?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab locate under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "Download as PDF"</li>
            </ol>
        </div>
        <br>

        <h4>How do I print my statements?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab locate under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "Download as PDF"</li>
            </ol>
        </div>
        <br>
    </div>
</div> <div>
        <h4>How do I update my Statement Delivery Preference?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Under "Manage Account" select "Update Contact Info" </li>
                <li>Scroll to the bottom of the page and check "Yes, please email" under "Statements"</li>
                <li>Select "Submit" button</li>
            </ol>
        </div>
        <br>

        <h4>How do I view my online statement?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab located under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "View PDF now"</li>
            </ol>
        </div>
        <br>

        <h4>Can I download my statements?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab locate under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "Download as PDF"</li>
            </ol>
        </div>
        <br>

        <h4>How do I print my statements?</h4>

        <div>
            <ol>
                <li>Log onto your account (first time users must register)</li>
                <li>Select the "Statements" tab locate under your account information</li>
                <li>Select the date you would like to view</li>
                <li>Select "Download as PDF"</li>
            </ol>
        </div>
        <br>
    </div>
</div>`;
}

function getRewardPrograms() {
    return `<div class="content-wrapper" id="tagTop" style="font-family:Arial;font-size:13px;line-height: 1.42857;">
    <div>
       <h4>What is the MILITARY STAR Rewards Program?</h4>

       <p>The MILITARY STAR Rewards Program is our way of thanking the military community for shopping at the exchanges. Cardholders earn rewards on nearly every MILITARY STAR purchase at participating facilities and automatically receive a $20 Digital Rewards card after 2,000 points. Digital Rewards are valid for 3 months.</p>

       <h4>Can Digital Rewards be delivered to an email address ending in .MIL?</h4>

       <p>No. Your MILITARY STAR Digital Rewards card will be sent to the email address on file. To ensure rewards delivery, please use an email that does not end in .MIL. To validate and/or update your email address:</p>

       <ul>
           <li>Log on to your account (first time users must register)</li>
           <li>Under "Manage Account" select "Update Contact Info"</li>
           <li>Edit your email information and select "Update Info"</li>
       </ul>
       <h4>What if I don't have an email address on my account?</h4>
       <p>
           Your MILITARY STAR Digital Rewards card will not be sent if there is no email address associated with the account. Your accumulated points will remain on your account until a valid email address is added.
           To ensure rewards delivery, please use an email that does not end in .MIL. To add or update your email address, visit MyECP.com or call 1-877-891-7827 for assistance.

       </p>

       <h4>What do I need to do if I have a MILITARY STAR card?</h4>

       <p>All MILITARY STAR cardholders began earning rewards as of October 1, 2015. To receive your Digital Rewards card, you must have a valid email address associated with your MILITARY STAR account that does not end in .MIL.</p>

       <h4>How do I enroll in this Rewards Program?</h4>

       <p>All MILITARY STAR cardholders are automatically enrolled in the MILITARY STAR Rewards Program.</p>

       <h4>How do I earn rewards?</h4>

       <p>
           You earn rewards every time you use your MILITARY STAR card at participating facilities.
           (Rewards exclude the military clothing line of credit.)
       </p>

       <h4>How are my rewards calculated?</h4>

       <p>You will earn (2) points for every ($1) spent on your MILITARY STAR card purchases, excluding any returns, at participating facilities. Rewards do not apply to purchases on the military clothing line of credit.</p>

       <h4>Where do I earn rewards?</h4>

       <p>You'll earn rewards at any exchange facility, online at shopmyexchange.com, myNavyExchange.com and ShopCGX.com; and at participating facilities where MILITARY STAR is accepted, such as commissaries.</p>

       <h4>What happens to my rewards if I return an item?</h4>

       <p>The rewards you earned for that purchase will be deducted from your account. If you have already received your rewards card, your rewards balance may become negative. As you continue to make additional purchases, your rewards balance will increase until you earn another Digital Rewards card.</p>

       <h4>How can I access my rewards balance?</h4>

       <p>You can view your rewards balance on MyECP.com, the MILITARY STAR Mobile App or your monthly MILITARY STAR statement.</p>

       <h4>I made a purchase last week. Where are my points?</h4>

       <p>You can see your available rewards balance after your statement closes each month.</p>

       <h4>When will I receive my MILITARY STAR Digital Rewards card?</h4>

       <p>Your MILITARY STAR Digital Rewards card will be AUTOMATICALLY sent to your email address on file once you have earned 2,000 points. You can expect to receive your Digital Rewards card within 48 hours after your statement date. To ensure rewards delivery, go to MyECP.com and provide a valid email address that does not end in .MIL. If it does, please change your email address in your MyECP.com account.</p>

       <h4>How long is my MILITARY STAR Digital Rewards card eligible?</h4>

       <p>Your MILITARY STAR Digital Rewards card is only eligible for 3 months.</p>

       <h4>How do I redeem my MILITARY STAR Digital Rewards cards?</h4>

       <p>Your MILITARY STAR Digital Rewards cards are valid for 3 months and can be redeemed anywhere an exchange gift card is accepted. This includes exchange facilities, shopmyexchange.com and myNavyExchange.com, exchange mall vendors and more.</p>

       <p>
           </p><ul>
               <li>
                   To redeem rewards in store
                   <ul>
                       <li>
                           Print or show the rewards email to cashier via mobile phone, the cashier will scan bar code and the rewards will be applied to your purchase.
                       </li>
                   </ul>
               </li>
               <li>
                   To redeem online
                   <ul>
                       <li>
                           At checkout, when entering payment information, enter card number (no spaces) and pin in the gift card tab, and the rewards will be applied to your purchase.<br>

                       </li>
                   </ul>
               </li>
           </ul>
       <p></p>

       <h4>What if I earned more than one Digital Rewards card at once?</h4>

       <p>You receive a $20 Digital Rewards card per 2,000 points. If you qualify for multiple rewards after your statement date, one Digital Rewards card will be sent for the full amount. For example, if at the end of your statement date you have a balance of 6,000 points, you will receive a $60 Digital Rewards card.</p>

       <h4>What if I didn't receive my Digital Rewards card?</h4>
       <p><a href="/contactUs" class="text-bluelink1">Contact us for assistance.</a></p>

       <h4>Why did I not receive a physical rewards card?</h4>

       <p>The MILITARY STAR Rewards Program changed from mailing rewards cards to delivering digital cards.</p>
   </div>

</div>`;
}

function getTextAlerts() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
        <h4>What are text alerts?</h4>
        <p>
            Text alerts provide account information by SMS/text message to your mobile device based on the alerts you select. Alerts can also be sent to your profile email address. The following alerts are available from MyECP.com for your MILITARY STAR account:
        </p>
        <div style="padding-left:20px">
            <ul>
                <li>Two-Factor Authentication - An added layer of security to help protect your information and account. The process is designed to ensure that you are the only person who can access your account and update your personal information, even if someone else knows your password. Once you are enrolled in two-factor authentication, you will need to enter an authentication code when you sign in to MyECP or update your information. The authentication code will be sent directly to your email or mobile phone.</li>
                <li>Payment Received - Sends an alert when a payment is posted to your MILITARY STAR account.</li>
                <li>Payment Reminder - Sends an alert when your payment is due based on the number of days you choose.</li>
                <li>Statement Ready - Sends an alert when a new MILITARY STAR statement is available.</li>
                <li>Past Due Reminder - Sends an alert when your payment is past due.</li>
                <li>Transaction Exceeds - Sends an alert when a purchase exceeds the amount you chose on MyECP.</li>
                <li>Current Balance Reaches - Sends an alert when the account balance reaches the amount you chose on MyECP.</li>
                <li>Available Balance is Less Than - Sends an alert when the available spending balance is less than the amount you chose on MyECP.</li>
                <li>Card Not Present - Sends an alert when a purchase is made online or without swiping your MILITARY STAR card at a store.</li>
            </ul>
        </div>

    </div>
    <div style="padding-top:15px;">
        <h4>How do I enroll for text alerts?</h4>
        <p>
            Go to My Profile and click the "Update Phone Numbers" link. Update your mobile number if necessary and click the checkbox for enrollment. Select the timeframe for receiving text alerts.
        </p>
        <p>
            You will receive a confirmation text on your mobile device; respond "Yes". Enrollment is complete and you can select the alerts you would like to receive by clicking "Manage Alerts" on your My Profile page.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>Can I stop text alerts?</h4>
        <p>
            You can stop text alerts at any time by clicking the "Update Phone Numbers" link under My Profile and unchecking the enrollment option. You will receive a text confirming un-enrollment for text alerts. You can also un-enroll for text alerts by replying "STOP" to an alert received on your mobile device.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>What if I need to update the alerts I'm receiving?</h4>
        <p>
            Go to My Profile and click the "Manage Alerts" option.  Use the checkboxes to select the alerts you would like to receive by email or text.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>Do I have to pay more for text alerts?</h4>
        <p>
            The Exchange does not charge for using this feature. If you are receiving SMS text messages, your wireless service provider's data and message rates may apply.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>What if I get a new phone?</h4>
        <p>
            If your mobile phone number remains the same, there will be no change to receiving text messages. If your phone number changes, update your contact information on the My Profile page with your new number. You can use your email address for authentication if required. Once you have updated your phone number, you will be un-enrolled from text alerts. You can enroll to receive text messages on your new number by going to My Profile on MyECP.com and selecting enrollment. Unless updated, your alert settings will remain the same from your prior enrollment.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>Can I receive a text if my mobile phone does not have data reception?</h4>
        <p>
            Please review information from your wireless service provider to determine your phone's functionality. If data reception is not available, texts may not be received.
        </p>
    </div>
    <div style="padding-top:15px;">
        <h4>I did not receive an expected alert; what should I do?</h4>
        <p>
            Review your mobile phone information on MyECP.com to confirm the information is correct. If the information is correct, go to My Profile on MyECP.com and review the alerts selected under "Manage Alerts". Select the alerts you would like to receive.
        </p>
    </div>
</div>`;
}

function getTwofa() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
         <h4>What is two-factor authentication (2FA)?</h4>
         <p>
             Two-factor authentication is an added layer of security to help protect your information and account. The process is designed to ensure that you are the only person who can access your account and update your personal information, even if someone else knows your password. Once you are enrolled in two-factor authentication, you will need to enter an authentication code when you sign in to MyECP or update your information. The authentication code will be sent directly to your email or mobile phone.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Why do I have to authenticate my account when accessing online or updating information?</h4>
         <p>
             Authentication protects your account from potential fraudulent activity or an account takeover.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Can I turn two-factor authentication off?</h4>
         <p>
             Yes. However, two-factor authentication is highly recommended to ensure the highest level of security available to protect your account information. If you wish to un-enroll from two-factor authentication, you can do so on your Manage Alerts page.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Do I have to authenticate my account every time I log in?</h4>
         <p>
             No, you will only need to authenticate once if you select "Remember My Device" on the log-in page, unless you log in from a new browser or device.
         </p>
     </div>
     <div style="padding-top:15px;">
         <h4>Does receiving an authentication code mean someone tried to access my account?</h4>
         <p>
             If you receive an authentication code by text or email without requesting one, please call our Contact Center at 1-877-891-7827 for assistance.
         </p>
     </div>
     <div style="padding-top:15px;">
         <h4>I did not receive the verification code; what should I do?</h4>
         <p>
             Review your email or mobile phone information on MyECP.com to confirm the information is correct. If the information is correct, you can request another code be sent to your email or phone. If the code is sent by email, review junk mail folders and confirm DoNotReply@aafes.com is on your safe sender list.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>My code does not work; what should I do?</h4>
         <p>
             Authentication codes are for one-time use only and expire once used or exceed the time limit. If the code has not expired, input the code exactly as it appears, without any spaces. A new code can be requested online.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Does my authentication code expire?</h4>
         <p>
             Authentication codes are for one-time use only and expire when you log out.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>How do I enable or disable two-factor authentication?</h4>
         <p>
             Click the "My Profile" option on MyECP.com and select "Manage Alerts" from the sidebar menu. Your email is the default selection for two-factor authentication. If you prefer to receive authentication codes by text, you can select your mobile number as the delivery method. If your mobile number is not available as a delivery method, go to the "Update Phone Numbers" page on your profile to add your mobile number.
         </p>
         <p>            
             To disable two-factor authentication, go to Manage Alerts under My Profile, select "Two-Factor Authentication," and uncheck the enrollment option, then save your changes.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>What if I lose my phone and have enabled two-factor authentication?</h4>
         <p>
             Your email address on file can be used for two-factor authentication until your phone is replaced.
         </p>
     </div>
 
 
     <div style="padding-top:15px;">
         <h4>Do I have to authenticate my account every time I update information?</h4>
         <p>
             Yes. This allows us to verify that you are the one updating the information and protects you from an account takeover.
         </p>
     </div>
 
 
     <div style="padding-top:15px;">
         <h4>I do not have access to the contact information displayed when prompted to authenticate my account. What should I do?</h4>
         <p>
             Call the Exchange Credit Program Contact Center at 1-877-891-7827 for assistance.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>What if I am trying to change my email address or phone number?</h4>
         <p>
             If you have access to the email address or phone number on file, request the authentication code be sent and complete the update. If you do not have access to either, contact the Exchange Credit Program Contact Center at 1-877-891-7827 for assistance.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>I do not have access to my old email address and cannot receive the authentication code being sent. What should I do?</h4>
         <p>
             If possible, request the authentication code be sent to your mobile phone on file. If neither option is available, contact the Exchange Credit Program Contact Center at 1-877-891-7827 for assistance.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Do I have to pay more for two-factor authentication?</h4>
         <p>
             The Exchange does not charge for using this feature. If you are receiving SMS text messages, your wireless service provider's data and message rates may apply.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>What if I get a new phone?</h4>
         <p>
             If your mobile phone number remains the same, there will be no change to receiving authentication codes. If your phone number changes, update your contact information on the My Profile page with your new number. You can use your email address for the required authentication. Once you have updated your phone number, you can select your mobile phone as your preferred delivery method for authentication codes.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>What if I do not have my phone with me, but it's not lost or stolen?</h4>
         <p>
             You can use your email address on file to receive your authentication code.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>What if my phone is lost or stolen?</h4>
         <p>
             Access MyECP.com and disable two-factor authentication for your phone number. Once the phone is replaced:
         </p>
         <div style="padding-left:20px">
             <ul>
                 <li>If your mobile phone number remains the same, you can enable two-factor authentication again.</li>
                 <li>If your phone number changes, go to My Profile on MyECP.com and update the information. Then re-enroll in two-factor authentication for your new phone number.</li>
             </ul>
         </div>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Can I receive a code if my mobile phone does not have data reception?</h4>
         <p>
             Please review information from your wireless service provider to determine your phone's functionality. If data reception is not available, authentication code texts may not be received.
         </p>
     </div>
 
 
     <div style="padding-top:15px;">
         <h4>Is two-factor authentication required for all users on MyECP?</h4>
         <p>
             No. However, two-factor authentication is highly recommended to ensure the highest level of security available to protect your account information.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Can I use an alternate two-factor authentication method like Google Authenticator?</h4>
         <p>
             No, the option to use external authentication is not available at this time.
         </p>
     </div>
 
 
     <div style="padding-top:15px;">
         <h4>Is two-factor authentication hard to use?</h4>
         <p>
             No, the process simply involves receiving an authentication code via text or email and submitting that code on MyECP.com.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>How does two-factor authentication protect me?</h4>
         <p>
             Two-factor authentication is an added layer of security for your MyECP account designed to ensure you are the only person who can access your information, even if someone else knows your password.
         </p>
     </div>
 
     <div style="padding-top:15px;">
         <h4>Will I still use my security question answers if I am enrolled in two-factor authentication?</h4>
         <p>
             No. Accounts enrolled for two-factor authentication will receive an authentication code by text or email when logging on to a new device or resetting a password. If an account is not enrolled in two-factor authentication, the security questions will continue to be used.
         </p>
     </div>
 
 </div>`;
}

function getPayYourWay() {
    return `<div class="content-wrapper justify" style="font-family:Arial;text-align: justify;font-size:13px;line-height: 1.42857;">
    <div>
        <h4>What is MILITARY STAR Pay Your Way?</h4>

        <p>Pay Your Way is a special financing plan offered through MILITARY STAR that allows 
           customers to choose a fixed monthly payment at a reduced APR and pay over a predetermined period until paid in full.</p>
        <br>
        <h4>What are the benefits of Pay Your Way?</h4>
        <p>Pay Your Way enables customers to choose financing terms that fit their budget. 
            Benefits include a fixed monthly payment, a fixed payment duration and a reduced APR. </p>
        <br>

        <h4>Where is Pay Your Way available?</h4>
        <p>Pay Your Way is available at Army, Air Force, Navy, Marine Corps and Coast Guard exchange stores, and 
        <a href="https://www.shopmyexchange.com/" target="_blank" class="text-bluelink1">shopmyexchange.com</a> (beginning November).</p>
        
        <br>

        <h4>What are the payment plan options for Pay Your Way? </h4>
        <div>
            <p>There are three fixed payment plans, each based on the total purchase:</p>
        <ul>
            <li>Spend $300, choose a 36-month payment plan</li>
            <li>Spend $500, choose a 36- or 48-month payment plan</li>
            <li>Spend $1,000, choose a 36-, 48- or 60-month payment plan</li>
        </ul>
        </div>
        <br>
        <h4>Is the Pay Your Way APR the same as the MILITARY STAR standard APR? </h4>
        <p>No. Customers who choose Pay Your Way will receive a reduced, fixed APR of 9.99%, which is lower than MILITARY STAR's standard APR.</p>
        <br>
        <h4>Are there fees for participating in Pay Your Way?</h4>
        <p>There are no fees for participating in Pay Your Way.</p>
        <br>
        <h4>Can customers use Pay Your Way at the commissary?</h4>
        <p>Currently, commissary purchases are not eligible for Pay Your Way.</p>
        <br>
        <h4>Can customers choose a Pay Your Way plan for online purchases? </h4>
        <p>Yes, customers may choose a Pay Your Way plan for a qualifying purchase at <a href="https://www.shopmyexchange.com/" target="_blank" class="text-bluelink1">shopmyexchange.com</a> (beginning November).</p>

    </div>
</div>`;
}

function getSitePolicy() {
    return `<div class="content-wrapper" id="tagTop" style="font-family:Arial;font-size:13px;line-height: 1.42857;">
    <ul style="color:blue;">
        <li>Topic: <a href="#LegalNotices"><span style="color:blue">Legal Notices</span></a></li>
        <li>Topic: <a href="#LimitedLicense"><span style="color:blue">Limited License</span></a></li>
        <li>Topic: <a href="#Disclaimer"><span style="color:blue">Disclaimer</span></a></li>
        <li>Topic: <a href="#ThirdPartySites"><span style="color:blue">Third Party Sites</span></a></li>
        <li>Topic: <a href="#ExternalLinks"><span style="color:blue">External Links to the Site</span></a></li>
        <li>Topic: <a href="#InformationProvidedByYou"><span style="color:blue">Information Provided By You</span></a></li>
        <li>Topic: <a href="#LimitationsOfDamages"><span style="color:blue">Limitations of Damages</span></a></li>
        
        <li>Topic: <a href="#InternationalUsers"><span style="color:blue">International Users and Choice of Law</span></a></li>
    </ul>

<div id="LegalNotices">
    <h4 class="pt20">Legal Notices</h4>
    <p style="padding-bottom: 5px;">
        Terms And Conditions Of Use <br>
        Please Read These Terms Carefully Before Using This Site.
    </p>
    <p>
        This Web Site is provided by Army and Air Force Exchange Service (The Exchange) and may be used for informational purposes
        only. By using the Site or downloading materials from the Site, you agree to abide by the terms and conditions set forth in this
        notice. If you do not agree to abide by these terms and conditions do not use the Site or download materials from the Site.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="LimitedLicense">
    <h4 class="pt20">Limited License</h4>
    <p class="section-paragraph pb5" style="padding-bottom: 5px;">
        Subject to the terms and conditions set forth in this Agreement, the Exchange grants you a non-exclusive, non-transferable,
        limited right to access, use and display this Site and the materials thereon. You agree not to interrupt or attempt to interrupt the
        operation of the Site in any way.
    </p>
    <p>
        The Exchange authorizes you to view and download the information ("Materials") at this Web Site ("Site") only for your personal,
        non-commercial use. This authorization is not a transfer of title in the Materials and copies of the Materials and is subject to the
        following restrictions: 1) you must retain, on all copies of the Materials downloaded, all copyright and other proprietary notices
        contained in the Materials; 2) you may not modify the Materials in any way or reproduce or publicly display, perform, or distribute or
        otherwise use them for any public or commercial purpose; and 3) you must not transfer the Materials to any other person unless
        you give them notice of, and they agree to accept, the obligations arising under these terms and conditions of use. You agree to
        abide by all additional restrictions displayed on the Site as it may be updated from time to time. This Site, including all Materials,
        is copyrighted and protected by worldwide copyright laws and treaty provisions. You agree to comply with all copyright laws worldwide
        in your use of this Site and to prevent any unauthorized copying of the Materials. Except as expressly provided herein, the Exchange
        does not grant any express or implied right to you under any patents, trademarks, copyrights or trade secret information.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="Disclaimer">
    <h4 class="pt20">Disclaimer</h4>
    <p class="section-paragraph pb5" style="padding-bottom: 5px;">
        The materials may contain inaccuracies and typographical errors. The Exchange does not warrant the accuracy or completeness
        of the materials or the reliability of any advice, opinion, statement or other information displayed or distributed through
        the site. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be at
        your sole risk. The Exchange reserves the right, in its sole discretion, to correct any errors or omissions in any portion
        of the site. The Exchange may make any other changes to the site, the materials and the products, programs, services or
        prices (if any) described in the site at any time without notice.
    </p>
    <p>
        This site, the information and materials on the site, and the software made available on the site, are provided "as is"
        without any representation or warranty, express or implied, of any kind, including, but not limited to, warranties of
        merchantability, non-infringement, or fitness for any particular purpose. Some jurisdictions do not allow for the exclusion
        of implied warranties, so the above exclusions may not apply to you.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="ThirdPartySites">
    <h4 class="pt20">Third Party Sites</h4>
    <p class="section-paragraph">
        As a convenience to you, the Exchange may provide, on this Site, links to Web sites operated by other entities. If you use these
        sites, you will leave this Site. If you decide to visit any linked site, you do so at your own risk and it is your responsibility
        to take all protective measures to guard against viruses or other destructive elements. The Exchange makes no warranty or
        representation regarding, and does not endorse, any linked Web sites or the information appearing thereon or any of the products
        or services described thereon. Links do not imply that the Exchange or this Site sponsors, endorses, is affiliated or associated
        with, or is legally authorized to use any trademark, trade name, logo or copyright symbol displayed in or accessible through the
        links, or that any linked site is authorized to use any trademark, trade name, logo or copyright symbol of the Exchange or any of
        its affiliates or subsidiaries.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="ExternalLinks">
    <h4 class="pt20">External Links to the Site</h4>
    <p class="section-paragraph">
        All links to the Site must be approved in writing by the Exchange, except that the Exchange consents to links in which: (i) the link is
        a text-only link containing only the name "Army and Air Force Exchange Service"; (ii) the link "points" only to www.<i>shop<b>my</b>exchange</i>.com
        and not to deeper pages;(iii) the link, when activated by a user, displays that page full-screen in a fully operable and navigable
        browser window and not within a "frame" on the linked website; and (iv) the appearance, position, and other aspects of the link may
        neither create the false appearance that an entity or its activities or products are associated with or sponsored by the Exchange nor
        be such as to damage or dilute the goodwill associated with the name and trademarks of the Exchange or its Affiliates. The Exchange
        reserves the right to revoke this consent to link at any time in its sole discretion.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>


<div id="InformationProvidedByYou">
    <h4 class="pt20">Information Provided by You</h4>
    <p class="section-paragraph">
        Any personally identifiable information you may provide to the Exchange via this Site is protected by the Privacy Policy associated with
        this Site. The Exchange does not want you to, and you should not, send any confidential or proprietary information to the Exchange via
        the Site. You agree that any information or materials that you or individuals acting on your behalf provide to the Exchange will not be
        considered confidential or proprietary. By providing any such information or materials to the Exchange, you grant to the Exchange an
        unrestricted, irrevocable, worldwide, royalty-free license to use, reproduce, display, publicly perform, transmit and distribute such
        information and materials, and you further agree that the Exchange is free to use any ideas, concepts or know-how that you or individuals
        acting on your behalf provide to the Exchange. You further recognize that the Exchange does not want you to, and you warrant that you
        shall not, provide any information or materials to the Exchange that is defamatory, threatening, obscene, harassing, or otherwise
        unlawful, or that incorporates the proprietary material of another.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>


<div id="LimitationsOfDamages">
    <h4 class="pt20">Limitations of Damages</h4>
    <p class="section-paragraph">
        In no event shall the Exchange be liable to any entity for any direct, indirect, special, consequential or other damages
        (including, without limitation, any lost profits, business interruption, loss of information or programs or other data on
        your information handling system) that are related to the use of, or the inability to use, the content, materials, and
        functions of the site or any linked website, even if the Exchange is expressly advised of the possibility of such damages.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="Changes" style="display:none;">
    <h4 class="pt20">Changes</h4>
    <p class="section-paragraph pb5" style="padding-bottom: 5px;">
        The Exchange reserves the right, at its sole discretion,
        to change, modify, add or remove any portion of this Agreement
        in whole or in part, at any time. Changes in this Agreement will
        be effective when notice of such change is posted. Your continued
        use of the Site after any changes to this Agreement are posted will be
        considered acceptance of those changes.
    </p>
    <p>
        The Exchange may terminate, change, suspend or discontinue any aspect of
        the Exchange Site, including the availability of any features of the Site,
        at any time. The Exchange may also impose limits on certain features and
        services or restrict your access to parts or all of the Site without notice
        or liability. The Exchange may terminate the authorization, rights and license
        given above and, upon such termination, you shall immediately destroy all Materials.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

<div id="InternationalUsers">
    <h4 class="pt20">International Users and Choice of Law</h4>
    <p class="section-paragraph pb5" style="padding-bottom: 5px;">
        This Site is controlled, operated and administered by the Exchange from its offices within the United States of America. The Exchange makes
        no representation that materials at this Site are appropriate or available for use at other locations outside of the United States and
        access to them from territories where their contents are illegal is prohibited. You may not use the Site or export the Materials in
        violation of U. S. export laws and regulations. If you access this Site from a location outside of the United States, you are responsible
        for compliance with all local laws. These Terms and Conditions of use shall be governed by the laws of the State of Texas, without giving
        effect to its conflict of laws provisions.
    </p>
    <p>
        This Agreement constitutes the entire agreement between the Exchange and you with respect to your use of the Site. Any cause of action you
        may have with respect to your use of the Site must be commenced within one (1) year after the claim or cause of action arises. If for any
        reason a court of competent jurisdiction finds any provision of the Agreement or portion thereof, to be unenforceable, that provision shall
        be enforced to the maximum extent permissible so as to effect the intent of the Agreement, and the remainder of this Agreement shall continue
        in full force and effect.
    </p>
    <p style="text-align: end;"><a href="#tagTop" class="text-bluelink">Return to top</a></p>
</div>

</div>`;
}

function getPrivacyPolicy() {
    return `<div class="section-paragraph" style="line-height:1.42857;font-size:13px;font-family:Arial;">
    <p>
        Protecting your privacy is important to us.  We adhere to the Privacy Act, 5 U.S.C. 552 et seq., as well as the Rights to Financial
        Privacy Act, 12 U.S.C. 3401 et seq.  We collect nonpublic personal information about you from the following sources:
    </p>
    <ul>
        <li>Information we receive from you on applications or other forms.</li>
        <li>Information about your transactions with us or others.</li>
        <li>Information we receive from a consumer reporting agency.</li>
    </ul>
    <p>
        We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted
        by law. We restrict access to nonpublic personal information about you to those employees who need to know that information
        to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with federal
        standards to guard your nonpublic personal information.
    </p>
    <p>To review our Privacy Notice Click <a href="https://www.myecp.com/HtmlPages/ShowPrivacyPDF" target="_blank" title="Display Privacy Policy"><span class="text-bluelink1">here.</span></a></p>

    <p><a target="_blank" href="http://www.adobe.com/products/reader.html"><img style="border:0;" src="https://www.myecp.com/images/get_adobe_reader.gif" alt="Download Adobe Reader"></a></p>
</div>`;
}

function getTermsAndConditions() {
    return `<div id="TermsandConditions" class="body-content">
    <table style="width:98%" role="presentation">
        <tbody>
            <tr>
                <td style="padding-right:10px; float:right"><input type="button" value="Print" onclick="printPage();"> </td>
            </tr>
            <tr>
                <td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 16px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
                    <p>Exchange Credit Program Account Opening Disclosures</p>
                </td>
            </tr>
            <tr>
                <td>
                    <table style="BACKGROUND: #000" role="presentation">
                        <tbody>
                            <tr>
                                <td style="COLOR: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: bold; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left;" colspan="2">Interest Rates and Interest Charges </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;">
                                    <p><b>Annual Percentage Rate (APR) for Purchases</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: justify; VERTICAL-ALIGN: text-top; width: 65%;">
                                    <p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">15.49%</span> for Retail Plan purchases</p>
                                    <p>This APR will vary with the market based on the Prime Rate.</p>
                                    <p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">0.00%</span> for Military Clothing Plan purchases</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;">
                                    <p><b>Penalty APR and When it Applies</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: justify; VERTICAL-ALIGN: text-top; width: 65%;">
                                    <p><span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 20px; FONT-WEIGHT: bold">23.49%</span></p>
                                    <p>This APR will vary with the market based on the Prime Rate. This APR may be applied to all of your Account balances and new purchases, if you do not pay the full amount of any Total Minimum Payment Due within 60 days of its Payment Due Date.</p>
                                    <p><b>How Long Will the Penalty APR Apply?</b> If your APRs are increased for this reason, the Penalty APR will apply until you make six consecutive payments of the Total Minimum Payment Due by their Payment Due Dates, beginning with the first Total Minimum Payment Due that is due immediately after the Penalty APR takes effect.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;">
                                    <p><b>How to Avoid Paying Interest</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: justify; VERTICAL-ALIGN: text-top; width: 65%;">
                                    <p>Your due date is at least 25 days after the close of each billing cycle. We will not charge you any interest on purchases if you pay your entire balance by the due date each month.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;">
                                    <p><b>Minimum Interest Charge</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: justify; VERTICAL-ALIGN: text-top;">
                                    <p>If you are charged interest, the charge will be no less than $0.50.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;">
                                    <p><b>For Credit Card Tips from the Consumer Financial Protection Bureau</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: justify; VERTICAL-ALIGN: text-top; width: 65%">
                                    <p>
                                        To learn more about factors to consider when applying for or using a credit card, visit the website of the Consumer Financial Protection Bureau at <a href="http://www.consumerfinance.gov/learnmore" class="text-bluelink1">consumer finance.gov / learnmore</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table style="BACKGROUND: #000; width:100%" role="presentation">
                        <tbody>
                            <tr>
                                <td style="COLOR: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: bold; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left;" colspan="2">
                                    Fees
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
                                    <p><b>Annual Fee</b></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
                                    <p><b>None.</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="35%">
                                    <p>
                                        <b>Penalty Fees</b>
                                        </p><ul>
                                            <li>Returned Payment</li>
                                        </ul>
                                    <p></p>
                                </td>
                                <td style="BACKGROUND: #fff; FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; PADDING-BOTTOM: 5px; PADDING-LEFT: 5px; PADDING-RIGHT: 5px; PADDING-TOP: 5px; TEXT-ALIGN: left; VERTICAL-ALIGN: text-top;" width="65%">
                                    <p><br></p>
                                    <p>Up to <b>$25</b></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; TEXT-ALIGN: justify;">
                    <p>
                        <b> How We Will Calculate Your Balance:</b>
                        We use a method called “daily balance.” See your MILITARY STAR Credit Program Agreement for more details.
                    </p>
                    <p>
                        <b>Billing Rights:</b>
                        Information on your rights to dispute transactions and how to exercise those rights is provided in your MILITARY STAR Credit Program Agreement.
                    </p>
                    <h1 style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
                        Military Lending Act Disclosure
                    </h1>
                    <p>
                        Federal law provides important protections to members of the Armed Forces and their dependents relating to extensions of consumer credit. In general, the cost of consumer credit to a member of the Armed Forces and his or her dependent may not exceed an annual percentage rate of 36 percent. This rate must include, as applicable to the credit transaction or account: the costs associated with credit insurance premiums; fees for ancillary products sold in connection with the credit transaction; any application fee charged (other than credit application fees for specified credit transactions or accounts); and any participation fee charged (other than certain participation fees for a credit card account).
                    </p>
                    <p>
                        Please refer to Section 12 of the Military Star Credit Card Agreement to see how your monthly minimum payment is calculated.
                    </p><p>
                        Please call toll- free 1-877-891-7827 to hear this disclosure orally.
                    </p>         
                    <hr>

                    <p>
                        Variable APRs are based on the 8.50% Prime Rate in effect as of 7/27/2023, which remained in effect as of a date not more than 30 days before you
                        received these Account Opening Disclosures. The variable APR for Retail Plan purchases is 15.49% (a Daily Periodic Rate of 0.04244%), based on a
                        Margin of 6.99% that we added to this Prime Rate. The variable Penalty APR is 23.49% (a Daily Periodic Rate of 0.06436%), based on a Margin of
                        14.99% that we added to this Prime Rate.
                    </p>
                </td>
            </tr>
            <tr>
                <td style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; TEXT-ALIGN: justify;">
                    <h1 style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 14px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
                        Exchange Credit Program Agreement
                    </h1>
                    <p>
                        This <span style="FONT-FAMILY: Arial, sans-serif; FONT-SIZE: 12px; FONT-VARIANT: small-caps; FONT-WEIGHT: bold; TEXT-ALIGN: center;">
                                 EXCHANGE CREDIT PROGRAM
                        </span> Agreement ("Agreement") governs the <b>MILITARY STAR</b> Private Label Revolving Credit Account (“Account”) available through the Exchange
                        Credit Program and administered by the Army and Air Force Exchange Service (“AAFES”), P.O. Box 650410, Dallas, TX 75265-0410. Your Account application
                        and other documents we provide to modify or supplement this Agreement are incorporated into and made a part of the Agreement  by reference. Please read
                        the entire Agreement carefully before you use or permit the use of the Account and keep it for your records.
                    </p>
                    <p>
                        <b>1. Definitions and General Terms:</b>
                        In this Agreement, the terms “we,” “us,” and “our” mean
                        the Account creditor to which you applied for an Account or from which you obtain Account credit (AAFES, the Navy Exchange Service Command, the Marine
                        Corps Exchange, or Coast Guard Exchange Service), and any entity to which your Account or its unpaid balance may be assigned. The terms “you” and
                        “your” refer to the individual who applied for and accepted an Account and the terms of this Agreement (see Section 2). The term “Authorized User”
                        is defined below in Section 5. Any reference to a “Card” means any card we issue to you or an Authorized User that is used to access your Account.
                        Other capitalized terms used below are explained in the context of their first use.
                    </p>
                    <p>
                        Whenever this Agreement states that we may take certain actions, it means we are authorized to take those actions in our sole discretion. Whenever this
                        Agreement requires or allows you to provide us with a written notice or request related to your Account, you must send that notice or request to Army
                        and Air Force Exchange Service, Exchange Credit Program, P.O. Box 650410, Dallas, TX 75265-0410, unless we have instructed you otherwise in this
                        Agreement, a periodic Account statement, or another document we might provide after this Agreement becomes effective.
                    </p>
                    <p>
                        <b>2. When Agreement Is Effective: </b>
                        You understand and agree that this Agreement is effective as of the first date you or an Authorized User use a Card or the Account.
                    </p>
                    <p>
                        <b>3. Your Promise to Us:</b> You agree to the terms and conditions in this Agreement and promise
                        to do everything this Agreement requires of you. You agree to pay us for all purchases charged to the Account by you and any Authorized User. You agree to pay the Interest Charges (see Section 10 below), Account Fees (see Section 11 below), and all other fees, charges, costs,
                        and expenses as provided in this Agreement, including, without limitation, those described in
                        Section 16 below (“Default and Remedies”).
                    </p>
                    <p>
                        <b>4. Account Eligibility:</b>
                        Eligible Exchange patrons who satisfy our creditworthiness standards may open and maintain an Account with us.
                        We receive notification from the Department of Defense regarding the status of eligible patrons and use this information to determine eligibility for
                        an Account. You and your Authorized Users may not make purchases with the Account once your eligibility has ended. An individual presenting a power of
                        attorney form or identified as your attorney-in-fact cannot open an Account in your name or on your behalf as an account holder. The Account creditor
                        to which you apply for an Account or from which you obtain Account credit (AAFES, Navy Exchange Service Command, Marine Corps Exchange, or Coast Guard
                        Exchange Service) will determine whether you are eligible to use your Account for making Military Clothing Plan purchases.
                    </p>
                    <p>
                        <b>5. Authorized Users:</b>
                        You may authorize eligible dependents (as defined by the Department of Defense) who are 18 years or older, with current Exchange privileges, to use the
                        Account as an “Authorized User”. To do so, you must identify the Authorized User in the Account application or in a written request you send to us
                        after the Account is opened. You may remove an Authorized User by contacting the Exchange Call Center at 877-891-7827 or making the request in writing.
                        No one other than you may add or remove the authority of any Authorized User to use the Card or the Account, even if that person has been designated to
                        act for you through a Power of Attorney. You understand and agree that Authorized Users may use the Account and Card to make purchases from us and to
                        may make Account payments on your behalf. You also understand and agree that you are liable for all amounts due for the Account under the Agreement,
                        including amounts due for Account purchases made by you and by any Authorized User. Authorized Users may not change the mailing address or electronic
                        mail address of the Account.
                    </p>
                    <p>
                        <b>6. Eligible Account Purchases:</b>
                        You and each Authorized User may use the Account to
                        purchase qualifying goods and services from us, subject to the terms and conditions of this
                        Agreement. Depending on the Account we maintain for you under this Agreement, you and each Authorized User may use the Account to purchase qualifying
                        goods and services from us under our Retail Plan, Military Clothing Plan (if you qualify), and any Special Promotion plan we may offer from time to time.
                        Any Account purchases returned to us will result in a credit to your Account, not a cash refund, and may be subject to a restocking fee. Account purchases are subject to the terms of our Retail Plan, unless we determine that those purchases qualify
                        for different treatment under the Military Clothing Plan or a Special Promotion. Terms that apply to a Special Promotion are described in this Agreement,
                        except to the extent those terms are changed by promotional disclosures that modify or supplement this Agreement. Account purchases that qualify for the
                        Military Clothing Plan (formerly UCDPP) are limited to the following: Defense Supply Center Philadelphia (DSCP) procured issue military clothing items
                        and footwear; DSCP organizational clothing and individual equipment (OCIE) items; AAFES commercial uniform clothing, undergarments, insignia and footwear
                        items to be worn with the uniform. Military clothing and equipment offered by other vendors are not eligible for the Military Clothing Plan. You
                        understand and agree that this Account may be used only for personal, family or household purposes, and may not be used for any commercial or business
                        purposes. You agree not to use the Account or permit it to be used to purchase goods or services intended for resale to any person or party other than you. You also agree not to use the Account or Card
                        or permit them to be used for any illegal transaction or purpose.
                    </p>
                    <p>
                        <b>7. Credit Limits and Available Credit:</b>
                        The Credit Limit of your Account is the maximum amount you may owe us at any time. The Available Credit of your Account is the amount of credit that
                        remains available to you, up to the amount of your applicable Credit Limit. We may restrict or delay the Available Credit of your Account for risk
                        management purposes, to protect you and us against actual or potential fraud or unauthorized transactions, and for other legitimate reasons. We may
                        establish separate Credit Limits for the Retail Plan and the Military Clothing Plan. When you do not have enough Available Credit to complete a purchase
                        under the Military Clothing Plan, we may allow you to complete that purchase under the Retail Plan (subject to the Available Credit, Interest Charges,
                        Account Fees and other terms and conditions that otherwise apply to Retail Plan purchases). Your Credit Limits will be shown on your monthly Account
                        statements (“Periodic Statements”). You must ensure that your Account balances do not exceed the Credit Limits we set for your Account from time to
                        time, even if we electronically or manually authorize an Account purchase. If your Account balance is more than your applicable Credit Limit, we can
                        still charge you for any and all Account purchases, Interest Charges and Account Fees, and require that you immediately pay any amount exceeding your
                        Credit Limit, without giving up any of our rights under this Agreement. We may increase or decrease your Credit Limits at any time without advance
                        notice to you, subject to any requirements or limitations of applicable law. An Authorized User, an individual presenting a power of attorney form or
                        otherwise identified as your attorney-in-fact, may not request an increase of decrease in the credit limit assigned to your Account.
                    </p>
                    <p>
                        <b>8. Purchase Authorizations:</b>
                        We may ask that you or any Authorized User provide identification documents to confirm eligibility for an Account purchase. We may decline to authorize
                        any purchase requested on your Account. If the system we use to authorize Account purchases is not working, we may not authorize a purchase, even if
                        your Available Credit is sufficient for that purchase. We will not be liable to you if this occurs. We may not authorize a purchase if you are in
                        Default (see Section 16 below), if the Available Credit under the Account has been suspended or cancelled for any reason, if you have not followed our
                        procedures for requesting a purchase, or for other reasons. You will be bound by any policy we disclose, such as “no returns,” “no refund,” “no return
                        or credit without receipt,” “as is,” “store credit only,” “all sales final,” or similar statements.
                    </p>
                    <p>
                        <b>9. Periodic Statements; Billing Cycles:</b>
                        We will, as required by law, send a Periodic
                        Statement to you or your designee after the end of each Billing Cycle. Each Periodic Statement will show the ending date of the most recent Billing
                        Cycle (the “Closing Date”). A Billing Cycle refers to the number of days between Closing Dates. Each Periodic Statement will show the total amount you
                        owed as of the Closing Date of your prior Periodic Statement (the “Previous Balance”), and the amounts added to and subtracted from the Previous
                        Balance to determine the total amount you owe as of your most recent Closing Date (the “New Balance”).
                    </p>
                    <p>
                        The Periodic Statement will show the minimum amount you must pay (the “Total Minimum Payment Due”) and the date on which your payment is due
                        (the “Payment Due Date,” which will be at least 25 days after the Closing Date). See Section 12 below for more information about how your Total Minimum
                        Payment Due is determined. Only one Periodic Statement will be sent each month to the address of record for your Account (see Section 15 below). Your
                        Billing Cycle may be changed at any time and for our convenience, as permitted by law.
                    </p>
                    <p>
                        You should review each Periodic Statement carefully. Subject to any limitations or requirements of applicable law, you may be bound by what the Periodic
                        Statement shows if there is a billing error on your Periodic Statement and you do not advise us of the error within 60 days after we have mailed it to
                        you. For more information about billing disputes and your rights, read the section below called “Your Billing Rights.”
                    </p>
                    <p><b>10. Interest Charges: </b></p>
                    <p>
                        <b>A. Daily Periodic Rates; Index for Variable Rate Adjustments.</b>
                        The Daily Periodic Rate used to determine your periodic rate finance charges (“Interest Charges”) is determined by dividing the corresponding Annual
                        Percentage Rate by three hundred sixty five (365) or, in a leap year, by three hundred sixty six (366). The resulting Daily Periodic Rate is carried
                        five places past the decimal point, and the last digit is rounded. The Daily Periodic Rates and Annual Percentage Rates applied to Retail Plan and
                        Special Promotion balances may vary from monthly Billing Cycle to monthly Billing Cycle, based on published changes in the index rate that applies to
                        your Account. If your Account balances become subject to the Penalty APR as described below in Section 10(G), the Daily Periodic Rates and Annual
                        Percentage Rates we apply to all of your unpaid Retail Plan, Special Promotion, and Military Clothing Plan balances may vary from monthly Billing Cycle
                        to monthly Billing Cycle, based on published changes in the index rate that applies to your Account. Each variable Daily Periodic Rate and corresponding
                        Annual Percentage Rate is based on the value of a published index rate plus the Margins described below in Section 10(D), in Section 10(G), or in
                        separate documents that modify or supplement this Agreement. The index rate used for variable rate adjustments will be the highest bank prime loan rate
                        published in “Money Rates” section of The Wall Street Journal on the Closing Date of your previous Billing Cycle or the business day immediately before
                        that Closing Date (the “WSJ Prime Rate”). Changes in an index rate will be effective as of the first day of a monthly Billing Cycle. An increase in the
                        index rate will result in increased Interest Charges and an increased Total Minimum Payment Due.
                    </p>
                    <p>
                        <b>B. How We Calculate Balances Subject to Interest Rate.</b>
                        We figure the Interest Charges for your Account by applying the Daily Periodic Rate to the “Daily Balance” of your Account (including new purchases)
                        for each day in the Billing Cycle. We calculate a separate Daily Balance for each of the different categories of your Account (for purchases made under
                        the Retail Plan, the Military Clothing Plan, and any Special Promotions). To get the “Daily Balance” for each Account category, we take the beginning
                        balance of your Account each day in each category, add any new purchases, and then subtract any unpaid Interest Charges, unpaid Account Fees, unpaid
                        costs and charges of collection, payments and credits. This gives us the Daily Balance for each category of your Account.
                    </p>
                    <p>
                        <b>C. Grace Period.</b>
                        The Periodic Statement for the Billing Cycle with the most recent Closing Date is your “Current Statement.” New purchases shown for the first time on
                        your Current Statement will begin to accrue Interest Charges from the date of the purchase, except as provided in this Agreement or as otherwise
                        required by law. New purchases shown for the first time on your Current Statement will not begin to accrue Interest Charges until the first day of                           the following Billing Cycle if: (a) there is no Previous Balance or there is a credit balance for the
                        Billing Cycle shown on your Current Statement; or (b) the sum of payments and credits we received during the Billing Cycle shown on your Current
                        Statement was at least equal to the Previous Balance shown on that Current Statement. To avoid additional Interest Charges, you must pay the full New
                        Balance shown on the Current Statement by the Payment Due Date shown on the same Periodic Statement. We will give you the benefit of a grace period for
                        certain partial payments you make, in those limited circumstances and to the extent required by law.
                    </p>
                    <p>
                        <b>D. Interest Charges for Retail Plan Purchases.</b>
                        The variable Annual Percentage Rate used to determine the Interest Charges for Retail Plan purchases will be based on the WSJ Prime Rate plus a Margin
                        of 6.99%. The Account Opening Disclosures provided with this Agreement disclose the Annual Percentage Rate and Daily Periodic Rate in effect for Retail
                        Plan purchases on or near the date your Account was opened.
                    </p>
                    <p>
                        <b>E. Interest Charges for Military Clothing Plan.</b>
                        The non-variable Annual Percentage Rate for purchases qualifying for the Military Clothing Plan is 0.00% (a Daily Periodic Rate of 0.00000%).
                    </p>
                    <p>
                        <b>F. Interest Charges for Special Promotions.</b>
                        The Interest Charges and other terms and conditions for any Special Promotion will be described in separate promotional disclosures that modify or
                        supplement this Agreement.
                    </p>
                    <p>
                        <b>G. Penalty APR.</b>
                        A “Penalty APR Triggering Event” will occur if you have not paid a Total Minimum Payment Due within 60 days of its applicable Payment Due Date (in other
                        words, within 90 days after the Closing Date of the Billing Cycle for which we determined this minimum payment was due). If a Penalty APR Triggering
                        Event occurs, we may apply an increased Annual Percentage Rate (a “Penalty APR”) on an indefinite basis to the unpaid Account balances for all of your
                        Retail Plan, Special Promotion and Military Clothing Plan purchases and any new Account purchases we permit, except as otherwise provided in this
                        Agreement or required by law. In addition to applying this Penalty APR, we may close your Account to future purchases and exercise other remedies
                        related to this event of Default as provided in this Agreement (see Section 16 below). The Penalty APR is a variable Annual Percentage Rate determined
                        as of the date we first apply it, based on the WSJ Prime Rate plus a Margin of 14.99%. The Account Opening Disclosures provided with this Agreement
                        disclose the Penalty APR in effect on or near the date your Account was opened. If we receive six consecutive payments of your Total Minimum Payment
                        Due by their Payment Due Dates, beginning with the first Total Minimum Payment Due that is due immediately after the Penalty APR takes effect, then we
                        will begin to apply the standard Annual Percentage Rates then in effect for your Retail Plan purchases and any applicable Military Clothing Plan
                        purchases. An increase to the Penalty APR will result in increased Interest Charges and an increased Total Minimum Payment Due.
                    </p>
                    <p>
                        <b>H. Minimum Interest Charge.</b>
                        A minimum Interest Charge (a Finance Charge) of $0.50 will be assessed in any Billing Cycle in which an Interest Charge is due, but is less than $0.50.
                    </p>
                    <p>
                        <b>I. Temporary Reductions in Interest Charges.</b>
                        Your Interest Charges may be temporarily reduced based on military activation or deployment. At the end of your activation or deployment, the Interest
                        Charges will return to the rates then in effect under this Agreement. To request a temporary reduction in Interest Charges, you or your representative
                        must provide a copy of your activation or deployment orders to us by sending them: (1) by email to us at deployment@aafes.com; (2) by facsimile
                        transmission to (214) 465-2997; or (3) by mail addressed to the Exchange Credit Program, PO Box 650410, Dallas, TX 75265-0410.
                    </p>
                    <p>
                        <b>11. Account Fees. </b>
                    </p>
                    <p>
                        <b>A. Returned Payment Fee.</b>
                        If any check, payment instrument, or any form of electronic payment to us is dishonored by your depository institution or returned to us unpaid for any
                        reason, we will assess and add a Returned Payment Fee of up to $25.00 to your Account. The Returned Payment Fee will not exceed the Total Minimum
                        Payment Due for your Account immediately before the date on which your payment was returned unpaid.
                    </p>
                    <p>
                        <b>B. Document Copy Fee.</b>
                        On non-disputed matters and matters unrelated to a Billing Error, and subject to any limitations or restrictions of applicable law, we may require that you pay
                        us a flat processing fee of $5.00 per request, plus $0.25 (25 cents) for each page printed each time you request photocopies or reprints of Account and
                        transaction documents. Recent historical statements are available on <a href="https://www.MyECP.com" class="text-bluelink1">www.MyECP.com</a>.
                    </p>
                    <p>
                        <b>12. Payments; Total Minimum Payment Due. You may pay your New Balance in full any time without penalty or pay it in monthly installments.</b>
                        Paying your entire New Balance or paying more than your Total Minimum Payment Due will help you reduce or avoid Interest Charges. To pay the New
                        Balance in installments, you must pay us at least the Total Minimum Payment Due for each Billing Cycle by the Payment Due Date shown on each Periodic
                        Statement. Your Periodic Statement will disclose the Total Minimum Payment Due after each Billing Cycle.
                    </p>
                    <p> Your Total Minimum Payment Due will be the sum of items 1 through 4 below:</p>
                    <ol>
                        <li>
                            The greater of:
                            <ol type="a">
                                <li>$15.00  (or the entire New Balance if it is less than $15.00); or</li>
                                <li>
                                    1%   of the unpaid balance of your Retail Plan and Special Promotion purchases plus accrued Interest Charges for such purchases
                                    (or any different percentage of Special Promotion purchases plus accrued Interest Charges separately disclosed to you in documents
                                    that modify or supplement this Agreement), based on the unpaid balance of such purchases as of the Closing Date for the Billing Cycle
                                    during which you made your most recent Retail Plan and/or Special Promotion purchase; plus
                                </li>
                            </ol>
                        </li>
                        <li>
                            8.333% of the unpaid balance of any Military Clothing Plan purchases (if applicable), based on the unpaid balance of these purchases as of the
                            Closing Date of the Billing Cycle during which you made your most recent Military Clothing Plan purchase; plus
                        </li>
                        <li>All past due payments; plus</li>
                        <li>The amount by which your Account balance exceeds any applicable Credit Limit. </li>
                    </ol>
                    
                    <p>
                        <b>13. Method of Payment; Check Endorsements.</b>
                        You may make payments on your Account by sending personal checks, money orders or other negotiable instruments, payable in U.S. dollars, to the Payment
                        Address shown on your Periodic Statement. Any payments received there will be promptly credited to your Account as specified on your Periodic Statement.
                        Include your payment stub and do not send cash. Your Available Credit may not immediately show a payment has been applied to your Account if any
                        payment you make is not received at the Payment Address shown on your Periodic Statement or is not accompanied by the payment coupon portion of your
                        Periodic Statement. We may also permit you to make Account payments at your local Exchange or online at Exchange Credit Central on
                        <a href="https://www.myecp.com/" class="text-bluelink1">www.MyECP.com</a>.
                    </p>
                    <p>
                        <b>
                            You must not send us any check marked "payment in full," or with similar terms or other conditions, unless both you and one of our authorized
                            representatives have agreed in writing to resolve a dispute in that manner.
                        </b>
                        We can accept such checks or late or partial payments without losing our right to receive the full amount you owe for your Account under this Agreement.
                    </p>
                    <p>
                        When you provide a check as payment, you agree that we may use information from your check to make a one-time electronic fund transfer from the deposit
                        account at the financial institution identified on the check or process the payment as a check transaction. When we use information from your check to
                        initiate an electronic fund transfer, funds may be withdrawn from your deposit account as soon as the same day we receive your payment. The electronic
                        fund transfer will be the same as the amount shown on your check, without including any additional amounts. Electronically processed checks (and checks
                        presented electronically) are not returned to you by your depository institution. We will retain an image of your electronically processed check as
                        required by law. In the ordinary course of business, your check will not be provided to you with your deposit account statement, but you can retrieve
                        a copy of your check by contacting your depository institution. Please notify us at the address provided above in Section 1 if you want to learn about
                        other payment options and you prefer not to have your check used in this way.
                    </p>
                    <p>
                        <b>14. Application of Payments.</b>
                        We have the right to apply payments to the Total Minimum Payment Due for your Account in the order and manner we determine in our sole discretion. We
                        will apply payments that exceed your Total Minimum Payment Due in the manner required by law, which generally means that any such excess payment
                        amounts will be applied to your Account balances in descending order, beginning with Account balances subject to higher APRs. Special rules may apply
                        if we offer certain deferred interest or similar programs as a Special Promotion or if we agree to apply payments in a specific manner at your request.
                    </p>
                    <p>
                        <b>15. Account Documents We Send to You; Change of Address.</b>
                        You agree that any Account notices, Periodic Statements, and correspondence (together, “Account Documents”) we send will be effective notice to you if
                        sent to the most recent address we maintain for your Account in our records (your Account “address of record”). Initially, your address of record will
                        be the address you provided on your Account application. If any address of record we maintain changes for any reason, you must give us written notice
                        of any new address of record. To change your contact information such as any mailing address, email address or telephone number, you may sign on to
                        your account at <a href="https://www.MyECP.com/" class="text-bluelink1">www.MyECP.com</a>. You may also contact the call center at 877-891-7827; go to the customer service desk at an Exchange; or complete and
                        mail the change of address form on your billing statement. You understand and agree that we may update your address of record by using information we
                        receive from national change of address service providers. Account Documents will be deemed given to you when they are hand delivered to you or
                        deposited in the mail using your address of record, or, if you consented to electronic delivery, when sent by electronic means. If you do not receive
                        any Periodic Statement after you attempt to change the address of record, it is your responsibility to contact us again and verify that any such
                        address of record has been updated.
                    </p>
                    <p>
                        <b>16. Default and Remedies.</b>
                        Subject to any limitations or notice requirements under applicable law, we may declare your Account in default if any of the following occur (each, a
                        “Default”): (a) you do not make any Total Minimum Payment Due by its applicable Payment Due Date; (b) you do not, upon our request, pay the full unpaid
                        balance of your Account after the date your Exchange privileges are terminated or you voluntarily ask us to cancel your Available Credit and close
                        your Account as provided in Section 19 below; (c) you do not do anything this Agreement requires of you; (d) you die, are adjudged incompetent or
                        become the subject of a bankruptcy or insolvency proceeding; (e) you have supplied us at any time with misleading, false, incomplete, or incorrect
                        information; (f) you or an Authorized User attempt or make any fraudulent use of the Account, before or after it is suspended or closed; (g) a purchase
                        in which we retain a security interest is transferred, stolen or significantly damaged; (h) we have suspended your check presentation privileges; (i)
                        you default or become delinquent in satisfying other obligations you owe us; or (j) you attempt or authorize an Account payment knowing that the funds
                        needed to pay are insufficient or unavailable for any reason.
                    </p>
                    <p>
                        Our remedies under applicable law include, without limitation, those available to us under the federal Debt Collection Improvement Act of 1996
                        (Pub. L. 104-134), the Deficit Reduction Act of 1984 (Pub. L. 98-369), the Debt Collection Act of 1982 (Pub. L. 97-365), and the Federal Claims
                        Collection Act of 1966 (Pub. L. 89-508), each as codified in the United States Code and as amended from time to time, and as implemented by the
                        federal Claims Collection Standards, 31 C.F.R. Parts 900 through 904 and other implementing regulations promulgated by the Department of Defense and
                        other federal agencies, each as amended from time to time. Regardless of anything in this Agreement to the contrary, you understand and agree that we
                        may pursue any one or more of the following remedies after a Default, subject to any notice requirements and other limitations of applicable law. In
                        doing so, we may: (i) close your Account to future purchases and require immediate payment of your entire Account balance; (ii)
                        <b>
                            arrange for garnishment or deduction from your military, retired, or civilian pay of the maximum amount allowed by applicable law to pay amounts you
                            owe under the Account
                        </b>
                        ; (iii) arrange for an offset or deduction of the maximum amount allowed against any federal payment due to you (including a federal income tax refund
                        or a federal salary); (iv) refuse to honor any further attempts by you to purchase from us using a Card, the Account, checks, or any other form of
                        payment; (v) reduce your Credit Limit and cancel or suspend all Available Credit connected with your Account; (vi) terminate any Special Promotion and
                        transfer all related Account balances to the Retail Plan for your Account; (vii) bring an action to collect all amounts owed; (viii) repossess
                        purchases in which we retain a security interest and otherwise seek self-help or judicial remedies available to us as a secured creditor; (ix) notify
                        your unit commander about our Account collection efforts; (x) close and transfer your Account for collection by the AAFES Collections unit, a
                        commercial collection agency, or a law firm, in accordance with applicable law; and/or (xi) take any other action allowed by law. Our rights and
                        remedies under this Agreement are cumulative and we may pursue them in any order or combination we consider appropriate. If we refer your Account for
                        collection by a commercial collection agency or law firm, submit your Account for offset through the U.S. Department of the Treasury, or arrange for
                        garnishment or deduction from your military, retired, or civilian pay through your current or former employer, you shall be liable and responsible for
                        paying any and all costs, fees and expenses that these parties charge and that you or we incur in connection with the collection of your Account after
                        Default, except as limited by applicable law. The costs and expenses you will be responsible for include any fees associated with a bankruptcy
                        reaffirmation. We will tell you in advance and/or give you an opportunity to cure your default only if applicable law requires us to do so.
                    </p>
                    <p>
                        <b>17. Lost or Stolen Card; Unauthorized Use.</b>
                        Each Card we issue remains our property and
                        you must surrender it to us upon our demand. You must sign your Card before its first use. If you notice the loss or theft of your Card or a possible
                        unauthorized use of your Card, you should write to us immediately at Exchange Credit Program, PO Box 650410, Dallas, TX 75265-0410, or call us at
                        (877) 891-7827. If you are outside the United States, you should call us at the customer service numbers listed at the end of this Agreement. You may
                        also contact us at the customer service desk of the Exchange. You will not be liable for any unauthorized use that occurs after you notify us. You may,
                        however, be liable for unauthorized use that occurs before your notice to us. In any case, your liability will not exceed $50. You agree to cooperate
                        with us while we investigate any unauthorized use. You must identify for us the unauthorized charges from which you received no benefit. We may require
                        that you provide us information in writing to help us find out what happened. We may also require that you comply with certain procedures in connection
                        with our investigation. If you orally give us notice about any loss or theft, you agree to confirm it in writing. You agree that unauthorized use does
                        not include use by a person whom you have given authority to use a Card or the Account and that you will be liable for all use by any such person.
                    </p>
                    <p>
                        <b>18. Separation.</b>
                        Clearing the Exchange during the base or post clearing process does not result in a forgiveness of your Account balance. Even after any separation from
                        service, you remain responsible for all purchases made with the Account and all related Interest Charges, Account Fees and other fees and charges, as
                        provided in this Agreement. If you are an AAFES employee who separates voluntarily or involuntarily, we may offset your final AAFES pay in an amount up
                        to the full amount needed to satisfy the entire balance owed for the Account.
                    </p>
                    <p>
                        <b>19. How You May Close Your Account.</b>
                        You may ask us to cancel your Available Credit and close the Account at any time and for any reason (including when you lose your Exchange privileges).
                        We may ask that you send a cancellation request to us in writing, to the extent permitted by law. We may also ask that you collect and destroy all
                        Cards held by you, an Authorized User, or any other person to prevent any further use of the Account. No one other than you may instruct us to cancel
                        your Available Credit and close the Account, even if they are designated to act for you through a Power of Attorney. You must still pay us the full
                        amount you owe us for the Account under this Agreement, including amounts due for Interest Charges, Account Fees, other authorized fees and charges,
                        and any purchases you or an Authorized User make after the date of your request to close the Account or cancel a Card, except to extent expressly
                        prohibited by applicable law. If you ask to cancel your Available Credit and close the Account, we may require that you pay the full unpaid balance of
                        the Account no later than 30 calendar days from the date of your cancellation request, except as prohibited by law. If you elect to cancel your Account
                        when exercising rights you may have to reject certain changes we propose to make to the terms of your Account or this Agreement, we will not require
                        that you cancel your Account in writing or immediately pay the full unpaid balance of the Account solely because you are exercising these rights
                        (see Section 27 below).
                    </p>
                    <p>
                        <b>20. We Have the Right to Close or Suspend your Account.</b>
                        We may close your Account and cancel or suspend your Available Credit and use of the Account and Cards at any time, with or without cause, and for any
                        reason, subject to any requirements or limitations of applicable law. You and any Authorized Users must not use or attempt to use a Card or the Account
                        after we cancel or suspend your Available Credit or close your Account. We will send a notice to the mailing address or email address for your Account
                        (see Section 15 above) notifying you if we have cancelled or suspended your Account and Cards. You must collect Cards held by you, an Authorized User,
                        or any other person, and cut those Cards in half to prevent their further use. Our reasons, among others, for closing your Account and cancelling or
                        suspending your use of the Account or Cards may relate to your loss of Exchange privileges, the length of time in which the Account has been inactive,
                        your failure to notify us of an address change, or any event of Default under the Agreement. You must still pay the full amount you owe us under this
                        Agreement if your Account is closed and your Available Credit is cancelled or suspended, including accrued Interest Charges, accrued Account Fees,
                        other fees and charges provided for in this Agreement, and amounts due for any purchases you or an Authorized User make after the date we attempt to
                        cancel or suspend use of the Account or a Card. You agree to pay us the outstanding balance, Interest Charges, Account Fees and all other fees,
                        charges, costs, and expenses due on your Account under the terms of this Agreement, even if we have closed your Account and cancelled or suspended
                        your use of the Account and Cards. If you are not in Default under this Agreement, we may allow you to pay the amount you owe as otherwise provided
                        under the terms of this Agreement. After an Account is closed and its balance paid in full, you must submit an application to us for a new Account at
                        an exchange where the Card is accepted or online at <a href="https://www.MyECP.com" class="text-bluelink1">www.MyECP.com</a>.
                    </p>
                    <p>
                        <b>21. Credit Investigation and Credit Reports.</b>
                        You authorize us to investigate your credit
                        record and verify your income, employment, and other related information with third parties. You understand and agree that your credit report may be
                        requested in connection with processing your initial credit application. You also understand and agree that your credit report may be requested in
                        connection with any subsequent extension of Account credit, request to increase your Credit Limit, renewal or update of your Account, Account
                        collection action, or an investigation of an Account dispute.
                    </p>
                    <p>
                        You also understand and agree that we may furnish information about the status and payment history of your Account to credit reporting agencies and
                        other creditors as permitted or required by applicable law. We may report information about your Account to credit reporting agencies and others who
                        may properly receive that information. Late payments, missed payments, or other defaults on your Account may be reflected in your credit report.
                    </p>
                    <p>
                        <b>
                            If you believe that we have reported inaccurate information about you to a credit reporting agency, notify us in writing at Exchange Credit Program, P.O. Box 650410, Dallas, TX 75265-0410; by email at CreditDisputes@aafes.com; by fax at 214-465-
                            2702.
                        </b>
                        Please provide your name, mailing address, email address, Account number, telephone number, the information you believe is inaccurate, and tell us why
                        you believe the information is incorrect. If you have supporting documents or information, such as a copy of a credit report that includes information
                        you believe is inaccurate, send us the supporting documents and information as well. We will investigate the matter. If our investigation shows that
                        information we furnished was inaccurate, we will notify each credit reporting agency to which we reported the information and ask the agency to correct
                        any such inaccurate information.
                    </p>
                    <p>
                        <b>22. Telephone Calls.</b>
                        You agree that you and we have an established business relationship and authorize us to contact you by telephone about your Account. You agree that we may
                        place such telephone calls using an automatic dialing–announcing device and that such calls will not be unsolicited calls for purposes of applicable law.
                        You agree that we may, from time to time, monitor and/or record telephone calls between you and us to assure the quality of our customer service and for
                        other legitimate business reasons. If you provide a mobile or cellular phone number to us, or if you call us using a mobile or cellular phone, you
                        agree that we and our agents and representatives may make Account collection and servicing calls to your mobile or cellular phone.
                    </p>
                    <p>
                        <b>23. Governing Law.</b>
                        This Agreement and your and our rights and responsibilities related to the Account are governed solely by applicable federal law.
                    </p>
                    <p>
                        <b>24. No Waiver by Us.</b>
                        You agree that we may, without notice to you, waive or refrain from enforcing our rights under this Agreement without losing any of those rights.
                        You agree that we may waive one or more of our rights under the Agreement without affecting any of our other rights. If we waive any right at a
                        particular time, you agree that we are not also waiving the same right in other circumstances or at another time.
                    </p>
                    <p>
                        <b>25. Severability.</b>
                        If any provision of this Agreement is finally determined to be void or unenforceable under any law, rule, or regulation, you agree that all other
                        provisions of this Agreement will still be valid and enforceable.
                    </p>
                    <p>
                        <b>26. Assignment of Account.</b>
                        We may sell, assign or transfer your Account or any interest we hold in your Account at any time, without notice, and without your consent. You may not
                        sell, assign or transfer any of your rights or obligations under this Agreement or the Account, except with our express written consent.
                    </p>
                    <p>
                        <b>27. Change in Terms.</b>
                        Subject to any required notices and other requirements and limitations of applicable law, we may, at any time, change any term of this Agreement,
                        including the Interest Charges and Account Fees that apply to your Account. Unless we explain otherwise in any change in terms notice you receive,
                        the changes we make to this Agreement and your Account will take effect automatically on the date we specify in the notice, even if you do not make
                        any further Account purchases or otherwise agree with the changes. If required by law, our change in terms notice will explain whether there are
                        changes you may reject and, if so, how you may do so and what may result from any decision you make to reject these changes. Except as limited by
                        applicable law or as otherwise provided in our change in terms notice, any change in terms will apply to: (a) all Account purchases made after the
                        effective date of the change; and (b) all unpaid Account balances. No one has the authority to change this Agreement without our express written
                        consent.
                    </p>
                    <p>
                        <b>
                            28. Security Interest. You grant us and we retain a security interest in each Retail Plan and Special Promotion purchase you or an Authorized User
                            make with the Account.
                        </b>
                        To the extent permitted by applicable law, you grant to us and we shall retain a purchase money security interest under the Uniform Commercial Code in
                        each Retail Plan and Special  Promotion Plan purchase you make with your Account, as shown on sales slips or other evidence of the sales transaction,
                        until the unpaid balance of that purchase and any related Interest Charges and Account Fees are paid in full. For purposes of determining at any
                        time which Retail Plan and Special Promotion Plan purchases remain subject to our security interest, payments on your Account will be applied in
                        accordance with any mandatory provisions of applicable law and, absent such provisions, shall be applied as follows: first, to Interest Charges,
                        then to any Account Fees, then to pay that portion of the Total Minimum Payment Due for purchases made under the Military Clothing Plan, then to each
                        Retail Plan and Special Promotion purchase in the order that each such purchase was charged to your Account, beginning with the oldest purchase. Retail
                        Plan and Special Promotion purchases made on the same day will be paid off by allocating your payments to the lowest price purchase(s) first. You
                        understand and agree that we may, at our option, record financing or security documents as permitted by applicable law that evidence our security
                        interest in Retail Plan and Special Promotion purchases made with the Account. It is expressly agreed that no security interest is or will be retained
                        or acquired by us in any consumer’s principal dwelling or household goods other than those you or an Authorized User purchased with the Account. This
                        does not apply to a lien created by a court judgment. In the event of default, we shall have all the rights of a secured party under applicable law,
                        including, to the extent permitted by applicable law, the right to repossess items that remain subject to our security interest.
                    </p>
                    <p>
                        <b>29. Consent for Communications.</b>
                        By providing the number of your land line, cell phone or other wireless device and your email address, now or in the future, you expressly consent and
                        agree that we and any of our agents, service providers or assignees may call you using an automatic telephone dialing system or otherwise; leave you a
                        voice, prerecorded, or artificial voice message; or send you a text, email message, or other electronic message for any purpose related to the
                        servicing or collection of the Account or any account you may establish with us or for other informational purposes related to your Account or other
                        accounts with us (each, a “Communication”). You also agree that we and our agents, service providers or assignees may include your personal
                        information in a Communication. We will not charge you for a Communication, but your service provider may. You agree that we may monitor and record any
                        telephone calls to assure the quality of our service or for other reasons.
                    </p>
                    <p>
                        <b>30. Entire Agreement.</b>
                        This Agreement, together with the accompanying documents and related credit disclosures and any application you signed or otherwise submitted in
                        connection with the Account (which are incorporated by reference in this Agreement), represents the entire agreement between you and us relating to
                        your Account, and supersedes any other prior or contemporaneous agreement between you and us relating to your Account. This Agreement will survive
                        termination of your Account until all amounts due under this Agreement are paid in full. This Agreement may not be changed or amended, except in
                        accordance with the provisions of this Agreement. It is not the intention of the parties that anything in this Agreement should result in the
                        assessment of fees or charges in excess of those permitted by applicable law. If any fee or charge assessed under this Agreement is finally determined
                        to be in excess of that permitted by applicable law, the excess amount will be applied to reduce the outstanding balance in your Account or, if there
                        is no outstanding balance, will be refunded to you.
                    </p>
                    <p>
                        <b>
                            NOTICE: ANY HOLDER OF THIS CONSUMER CREDIT CONTRACT IS SUBJECT TO ALL CLAIMS AND DEFENSES WHICH THE DEBTOR COULD ASSERT AGAINST THE SELLER OF GOODS OR
                            SERVICES OBTAINED PURSUANT HERETO OR WITH THE PROCEEDS HEREOF. RECOVERY HEREUNDER BY THE DEBTOR SHALL NOT EXCEED AMOUNTS PAID BY THE DEBTOR HEREUNDER.
                        </b>
                    </p>
                    <p>
                        <i>
                            Your Billing Rights: Keep This Document For Future Use.
                        </i>
                    </p>
                    <p>This notice tells you about your rights and our responsibilities under the Fair Credit Billing Act.</p>
                    <p><i>What To Do If You Find A Mistake On Your Statement</i></p>
                    <p>If you think there is an error on your statement, write to us at:</p>
                    <p>
                        Exchange Credit Program<br>
                        P.O. Box 650410<br>
                        Dallas, TX 75265-0410
                    </p>
                    <p>In your letter, give us the following information:</p>

                    <div class="ml20">
                        <ul>
                            <li><i>Account information</i>: Your name and account number.</li>
                            <li><i>Dollar amount</i>: The dollar amount of the suspected error.</li>
                            <li>Description of problem: If you think there is an error on your bill, describe what you believe is wrong and why you believe it is a mistake.</li>
                        </ul>
                    </div>
                    <p>You must contact us:</p>
                    <div class="ml20">
                        <ul>
                            <li>Within 60 days after the error appeared on your statement.</li>
                            <li>At least 3 business days before an automated payment is scheduled, if you want to stop payment on the amount you think is wrong.</li>
                        </ul>
                    </div>
                    <p>
                        You must notify us of any potential errors in writing. You may call us, but if you do we are not required to investigate any potential errors and you
                        may have to pay the amount in question.
                    </p>

                    <p><i>What Will Happen After We Receive Your Letter</i></p>

                    <p>When we receive your letter, we must do two things:</p>
                    <ol>
                        <li>
                            Within 30 days of receiving your letter, we must tell you that we received your letter. We will also tell you if we have already corrected the
                            error.
                        </li>
                        <li>
                            Within 90 days of receiving your letter, we must either correct the error or explain why we believe the bill was correct.
                        </li>
                    </ol>

                    <p>While we investigate whether or not there has been an error:</p>
                    <ul>
                        <li>
                            We cannot try to collect the amount in question, or report you as delinquent on that amount.
                        </li>
                        <li>
                            The charge in question may remain on your statement, and we may continue to charge you interest on that amount.
                        </li>
                        <li>While you do not have to pay the amount in question, you are responsible for the remainder of your balance.</li>
                        <li>We can apply any unpaid amount against your credit limit.</li>
                    </ul>

                    <p>After we finish our investigation, one of two things will happen:</p>
                    <ul>
                        <li><i>If we made a mistake</i>: You will not have to pay the amount in question or any interest or other fees related to that amount.</li>
                        <li>
                            <i>If we do not believe there was a mistake</i>: You will have to pay the amount in question, along with applicable interest and fees. We will
                            send you a statement of the amount you owe and the date payment is due. We may then report you as delinquent if you do not pay the amount we
                            think you owe.
                        </li>
                    </ul>

                    <p>
                        If you receive our explanation but still believe your bill is wrong, you must write to us within <i>10 days</i> telling us that you still refuse to pay.
                        If you do so, we cannot report you as delinquent without also reporting that you are questioning your bill. We must tell you the name of anyone to whom
                        we reported you as delinquent, and we must let those organizations know when the matter has been settled between us.
                    </p>
                    <p>If we do not follow all of the rules above, you do not have to pay the first $50 of the amount you question even if your bill is correct.</p>
                    <p>
                        <i>
                            Your Rights If You Are Dissatisfied With Your Credit Card Purchases
                        </i>
                    </p>
                    <p>
                        If you are dissatisfied with the goods or services that you have purchased with your credit card, and you have tried in good faith to correct the
                        problem with the merchant, you may have the right not to pay the remaining amount due on the purchase.
                    </p>
                    <p>To use this right, all of the following must be true:</p>
                    <ol>
                        <li>
                            The purchase must have been made in your home State or within 100 miles of your current mailing address, and the purchase price must have been
                            more than $50. (Note: Neither of these is necessary if your purchase was based on an advertisement we mailed to you, or if we own the company that
                            sold you the goods or services.)
                        </li>
                        <li>You must have used your credit card for the purchase.</li>
                        <li>You must not yet have fully paid for the purchase.</li>
                    </ol>

                    <p>If all of the criteria above are met and you are still dissatisfied with the purchase, contact us in writing at:</p>
                    <p>
                        Exchange Credit Program<br>
                        P.O. Box 650410<br>
                        Dallas, TX 75265-0410
                    </p>
                    <p>
                        While we investigate, the same rules apply to the disputed amount as discussed above. After we finish our investigation, we will tell you our decision.
                        At that point, if we think you owe an amount and you do not pay, we may report you as delinquent.
                    </p>
                    <p><b>Privacy Notice</b></p>
                    <p>
                        Protecting your privacy is important to us. We adhere to the Privacy Act, 5 U.S.C. 552 et seq., as well as the Right to Financial Privacy Act, 12 U.S.C.
                        3401 et seq. We collect nonpublic personal information about you from the following sources:
                    </p>
                    <ul>
                        <li>
                            information we receive from you on applications or other forms;
                        </li>
                        <li>
                            information about your transactions with us or others; and
                        </li>
                        <li>
                            information we receive from a consumer reporting agency.
                        </li>
                    </ul>
                    <p>
                        We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted by law. We restrict access
                        to nonpublic personal information about you to those employees who need to know that information to provide products or services to you. We maintain
                        physical, electronic, and procedural safeguards that comply with federal standards to guard your nonpublic personal information.
                    </p>
                    <div style="align-content:center"></div>
                    <p>
                        <b>
                            Exchange Credit Program<br>
                            P.O. Box 650410<br>
                            Dallas, Texas 75265-0410<br>
                            www.MyECP.com<br>
                        </b>
                    </p>
                    <p><b>Exchange Credit Call Center Telephone Numbers</b></p>
                    <table role="presentation">
                        <tbody>
                            <tr>
                                <td>CONUS (includes Alaska &amp; Hawaii)</td>
                                <td>1-877-891-7827</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <p><b>Toll Free Numbers</b></p>
                    <table role="presentation">
                        <tbody>
                            <tr>
                                <td>BELGIUM</td>
                                <td>0800-1-6374</td>
                            </tr>
                            <tr>
                                <td>CRETE</td>
                                <td>00-800-18092003452</td>
                            </tr>
                            <tr>
                                <td>GERMANY</td>
                                <td>0800-812-4690</td>
                            </tr>
                            <tr>
                                <td>GUAM</td>
                                <td>1-800-546-7195</td>
                            </tr>
                            <tr>
                                <td>ITALY</td>
                                <td>8008-72683</td>
                            </tr>
                            <tr>
                                <td>JAPAN</td>
                                <td>00531-11-4239</td>
                            </tr>
                            <tr>
                                <td>KOREA</td>
                                <td>00308-130663</td>
                            </tr>
                            <tr>
                                <td>NETHERLANDS</td>
                                <td>0800-022-9614</td>
                            </tr>
                            <tr>
                                <td>NORWAY</td>
                                <td>800-14-199</td>
                            </tr>
                            <tr>
                                <td>SPAIN</td>
                                <td>900-971-394</td>
                            </tr>
                            <tr>
                                <td class="pr10">UNITED KINGDOM </td>
                                <td>0800-96-1843</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <p><b>Collect Numbers</b></p>
                    <table role="presentation">
                        <tbody>
                            <tr>
                                <td>ICELAND</td>
                                <td>214-465-6030</td>
                            </tr>
                            <tr>
                                <td class="pr10">SAUDI ARABIA</td>
                                <td>214-465-6030</td>
                            </tr>
                            <tr>
                                <td>TURKEY</td>
                                <td>214-465-6030</td>
                            </tr>

                        </tbody>
                    </table>
                    <br>
                    <p>Fax: 214-465-2997</p>
                </td>
            </tr>

        </tbody>
    </table>
</div>`;
}

function getRewardsAndConditions() {
    return `<div class="content-wrapper" id="tagTop" style="font-family:Arial;font-size:13px;line-height: 1.42857;padding-bottom:20px;">
    <p>
                       <b>Issuer: </b>Your <b>MILITARY STAR</b> credit card ("Card") account ("Account") is issued by the Exchange Credit 
                       Program (hereinafter "we", "our", or "us"), located in Dallas, Texas. In these Program Terms and Conditions, 
                       "you" or "your", means all persons responsible for complying with this agreement, including the person who 
                       applied for the Account and the person to whom we address billing statements, as well as any person who 
                       agrees to be liable on the Account or who is an authorized user on the Account.
                   </p>
                   <p>
                       <b>Ability to Earn Rewards: </b>You are automatically enrolled in the MILITARY STAR Rewards Program. If 
                       your Account is in default as described in your Cardmember Agreement, and/or your account is closed for 
                       any reason, and/or there is any actual or suspected fraud or abuse related to the accrual of points, we 
                       reserve the right to prohibit you or any authorized user on the Account from earning and redeeming Points 
                       through your Account until the next billing cycle after your Account is no longer in default, and to cause you 
                       to forfeit any Points in your Account. If your Points are forfeited for any reason, we will not reinstate these 
                       Points to your Account. If your Account is closed for any reason, your membership in the Program will be 
                       terminated and all remaining Points are forfeited.
                   </p>
                   <p>
                       "Good standing" means an Account that is not closed, bankrupt, charged off, fraudulent, blocked deceased, 
                       on a fixed payment plan, blocked when check writing privileges are revoked, over the credit limit, or 
                       delinquent because the minimum due payment has not been made for two consecutive billing cycles.
                   </p>
                   <p>
                       <b>Earning Rewards: </b>
                       You will earn 2% in Rewards. 2% equals two Points for each $1 of "Net Purchases" 
                       charged on your Account. After accumulating 2,000 points, you will automatically receive a $20 MILITARY 
                       STAR rewards card as explained below. Points are earned wherever the Card is accepted. Net Purchases 
                       means purchases of goods and services made by you or any authorized user on your Account minus any 
                       returns, refunds or credit adjustments rounded to the nearest dollar. Point accrual will begin upon the 
                       "Enrollment Date" in the Program. (Enrollment Date is the day on which we approve you as a Program 
                       member.) No retroactive Points will be awarded. You do not earn Points on Military Clothing Plan 
                       purchases, interest, unauthorized or fraudulent charges, or fees of any kind.
                   </p>
                   <p>
                       Points awarded for purchases that are returned, refunded or otherwise adjusted will be deducted from your 
                       Points balance. Such deductions may result in a negative Points balance, in which case, any Points you 
                       earn will be applied to reduce that balance, and you will not be able to redeem Points until you again have 
                       a positive balance. Points will appear on your billing statement.
                   </p>
                   <p>
                       We reserve the right to determine, at our sole discretion, whether any transaction qualifies as a Net Purchase, and our determinations shall be final.
                   </p>
                   <p>
                       <b>Earning Restrictions: </b>
                       Points earned are not transferable, have no cash value and cannot be used as 
                       payment for any obligation to us. If there is any actual or suspected fraud or abuse of the Program, failure 
                       to follow Program Terms and Conditions, or any misrepresentation by you or any authorized user on the 
                       Account, all unredeemed Points shall be forfeited and no additional Points shall accumulate. There is no 
                       maximum number of Points that you can accumulate in the Program.
                   </p>
                   <p>
                       <b>Expiration:  </b>
                       MILITARY STAR rewards points will not expire as long as you have qualifying purchase activity 
                       at least once every 12 months. You will forfeit your unused and unexpired Points if you violate the 
                       prohibitions on the transfer of Points, sell or attempt to sell Points, file for bankruptcy, violate the 
                       Cardmember Agreement, or close your Account for any reason. You will not be entitled to and will not 
                       receive any compensation from us for your Points that expire or are forfeited.
                   </p>
                   <p>
                       <b>Automatic Rewards Distribution Process: </b>
                       Points earned during a billing cycle are not available for redemption until they are posted on your billing statement. 
                       Points for transactions made on or near the end of your billing cycle may take up to one billing cycle to post on your 
                       billing statement. Once you accumulate the required number of Points, we will automatically email you a MILITARY STAR rewards 
                       card in $20 increments. A current valid email is required on your account for you to receive your Rewards. Your Account must be in 
                       good standing to redeem your Points.
                   </p>
                   <p>
                       <b>How to Redeem Your Rewards: </b>
                       You can redeem your MILITARY STAR rewards card anywhere an exchange gift card is accepted. To redeem your rewards card, 
                       you may print the email or have it displayed on your mobile device for the cashier to scan the rewards card bar code. 
                       To redeem your rewards card online at shopmyexchange.com or mynavyexchange.com, simply enter the rewards card number 
                       and PIN in the Gift Card payment option. 
                   </p>
                   <p>
                       MILITARY STAR rewards cards cannot be credited to an Account, redeemed for cash, applied to a previous purchase or used 
                       for purchasing gift cards or e-gift cards. MILITARY STAR rewards cards expire 3 months from the date of the email with 
                       the rewards card. Lost or stolen MILITARY STAR rewards cards are not replaceable. Selling MILITARY STAR rewards cards is prohibited.
                       We reserve the right to revoke participation in the Program of any persons caught selling or attempting to sell MILITARY STAR rewards cards and all unused and unexpired Points will be forfeited.
                   </p>
                   <p>
                       <b>Program Restrictions: </b>
                       We reserve the right to approve, deny or revoke participation in the Program for any reason whatsoever.
                   </p>
                   <p>
                       <b>Right to Change/Modify/Cancel: </b>
                       Subject to any notice requirements and other limitations imposed by 
                       applicable law, the Exchange Credit Program may, at any time: (a) change, limit, or terminate any aspect 
                       of the Program or these Program Terms and Conditions, including the types of Points available and the 
                       cost of Points; (b) terminate the Program in its entirety; (c) amend these Program Terms and Conditions in 
                       whole or in part, including adding provisions covering subjects not previously addressed; (d) discontinue or 
                       replace any Rewards with similar Rewards or Rewards of lesser, equal or greater value; (e) add or increase 
                       fees charged in connection with the Program; or (f) terminate your participation in the Program for any 
                       reason. Changes may apply retroactively and may affect outstanding transactions and Points, and may 
                       include, without limitation, the earnings rate for Points, the number of Points required to obtain Rewards, 
                       the type of transactions qualifying for Points, the type or value of Rewards, the expiration date of Points, 
                       and the maximum number of Points that may be earned per billing cycle or year. Any of the foregoing 
                       actions may be taken even if such actions affect the value of Points already earned. If the Program is 
                       terminated or a Membership is terminated, the Exchange Credit Program may also terminate any unused 
                       Points or Rewards that remain at the time of termination. Subject to any notice requirements, we may at 
                       any time change, limit or terminate any aspect of the Program to comply with applicable law.
                   </p>
                   <p>
                       <b>Communications: </b>                        
                       We may communicate with you regarding any matter related to the Program by mail,
                       telephone or electronic communication. You may update your contact information by signing in to your
                       Account at <a href="https://www.myecp.com" class="text-bluelink1">www.MyECP.com</a>. We are not responsible for communications, including MILITARY STAR
                       rewards cards, lost due to an undeliverable email or other contact information. Even if you opt out of marketing
                       materials from the Exchange Credit Program, if your MILITARY STAR rewards program membership is still
                       active, you will continue to receive relationship/operational emails related to MILITARY STAR Rewards
                       Program unless your Account is cancelled.
                   </p>
                   <p>
                       <b>Program Activity and Customer Service: </b>                       
                       You can view your Program activity online 
                       at <a href="https://www.myecp.com" class="text-bluelink1">www.MyECP.com</a>, the MILITARY STAR mobile app, or on your monthly billing statement, which will show the number of unused Points in 
                       your Account and any redemption activity. For any questions regarding the Program, you can also call 
                       1-877-891-7827 (additional OCONUS numbers available on <a href="https://www.myecp.com" class="text-bluelink1">www.MyECP.com</a>).
                   </p>
                   <p>
                       <b>Point Discrepancies: </b>
                       You agree to notify us promptly upon the receipt of your Account statement of any 
                       errors relating to additions or deletions of Points on your Rewards Account, but in no event later than sixty 
                       (60) days after the error appeared on your statement. If you fail to notify us, your statement will be 
                       considered accurate, and you will have waived all claims for adjustments. Point discrepancies do not 
                       constitute billing errors. Payments on your Account are due as provided in your Cardmember Agreement.
                   </p>
                   <p>
                       <b>Limited Liability: </b>
                       We may waive any obligation you have under these Program Terms and Conditions 
                       without losing our right at a later time to enforce that same obligation. We will not lose any of our rights 
                       under these Program Terms and Conditions if we delay taking action for any reason. If we take any other 
                       action, we will not lose any rights under these Program Terms and Conditions.
                   </p>
                   <p>
                       Unless otherwise required by law or our agreements with you, neither the Exchange Credit Program nor 
                       any of its respective affiliates, officers, directors, employees or agents will be liable to you or anyone making 
                       a claim on your behalf in connection with (a) any termination of, change in, or temporary suspension of the 
                       Program; (b) any claim relating to any products or services purchased using any Points obtained through 
                       the Program; (c) any claim relating to any Other Program Benefit received; (d) any loss, damage, expense 
                       or inconvenience caused by any occurrence outside of our control; (e) any content, products or service 
                       appearing on a website to which a link is provided from the Program Website; or (f) any taxes that you 
                       incur as a result of receiving or redeeming Points or receiving Other Program Benefits. Notwithstanding the 
                       foregoing, any liability that we have to you in connection with the Program shall be limited to the amount of 
                       any Points you have earned in accordance with these Program Terms and Conditions.
                   </p>
                   <p>
                       By accumulating and redeeming Points under the MILITARY STAR Rewards Program, you and any 
                       authorized user on your Account agree to all of the Program features, limitations and restrictions contained 
                       in these Terms and Conditions, as well as any additional Terms and Conditions contained in any Programs, 
                       promotions or transactions that may be offered to you or any authorized user on your Account from time to 
                       time and any terms and conditions in any certificate, coupon or document issued to you or any authorized 
                       user on your Account under the MILITARY STAR Rewards Program.
                   </p>
                   <p>
                       <b>Program Void: </b>
                       The Program is void where prohibited by federal law. These Terms and Conditions set forth 
                       all the terms of the Program, and supplement any other terms provided by us or our agents. We have no 
                       other obligation with respect to the Program beyond those described in these Terms and Conditions and 
                       any supplemental terms. All interpretations of these Terms and Conditions, all determinations of Point 
                       discrepancies and the resolution of all other disputes shall be at our sole discretion, and our decisions will 
                       be final.
                   </p>
                   <p>
                       <b>Taxes: </b>
                       You will be responsible for both determining and paying any federal, state, or local income tax, fees 
                       or other charges, if any, that may be imposed by any governmental or regulatory authority on Rewards 
                       obtained through the redemption of Points, whether or not such taxes, fees or other charges are imposed 
                       at the time of point redemption or subsequently. Should we be required to report taxes, tax reporting, if any, 
                       will be made to the tax ID number of the Account holder. Consult your tax advisor concerning any tax 
                       consequences that may arise from your participation in the Program.
                   </p>
               </div>`;
}

function getMilitaryStar() {
    return `<html lang="en" class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths wf-brandongrotesque-n4-active wf-brandongrotesque-n5-active wf-brandongrotesque-n3-active wf-brandongrotesque-n7-active wf-active" style=""><head>
    <link href="https://www.myecp.com/Content/bootstrapcss?v=8r0rT2Qs_tkSwt9QK1q0FH6J_EQaxq9lPudLCexg7IY1" rel="stylesheet">

    <link href="https://www.myecp.com/Content/themes/base/corecss?v=YUTy7s-BwOAU0-CUBhOexsogwP6_4pMTUSk547DtvlU1" rel="stylesheet">

    <script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://sc-static.net/scevent.min.js"></script><script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script src="https://www.myecp.com/bundles/jquery?v=aZxjXkxXkArA3g3yFSjNTI9zY6gqUQf-qKIsgaGpvAY1"></script>

    <script src="https://www.myecp.com/bundles/smartbanner?v=ArH5bE6EsLhsS4TwIaKaKY8wDuKeTwtmsZ-E_RX4xGw1"></script>
    <meta charset="utf-8">
    <script type="text/javascript">
        $.widget.bridge('uitooltip', $.ui.tooltip);
    </script>
    <script src="https://www.myecp.com/bundles/BootstrapScripts?v=sBtOgX-7um9yPFevPYP_yAYP7sES2b-RMSypggyGPIY1"></script>

    <script type="text/javascript">
        var btn = $.fn.button.noConflict();
        $.fn.bsbutton = btn;
    </script>
    <!-- load brandon grotesque font in browser-->
    <script src="https://www.myecp.com//use.typekit.net/sjz2kif.js"></script>
    <style type="text/css">.tk-brandon-grotesque{font-family:"brandon-grotesque",arial,sans-serif;}</style><style type="text/css">@font-face{font-family:brandon-grotesque;src:url(https://use.typekit.net/af/1da05b/0000000000000000000132df/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/1da05b/0000000000000000000132df/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/1da05b/0000000000000000000132df/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:brandon-grotesque;src:url(https://use.typekit.net/af/8f4e31/0000000000000000000132e3/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/8f4e31/0000000000000000000132e3/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/8f4e31/0000000000000000000132e3/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:brandon-grotesque;src:url(https://use.typekit.net/af/2f8f3d/0000000000000000000132dd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("woff2"),url(https://use.typekit.net/af/2f8f3d/0000000000000000000132dd/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("woff"),url(https://use.typekit.net/af/2f8f3d/0000000000000000000132dd/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3) format("opentype");font-weight:300;font-style:normal;font-stretch:normal;font-display:auto;}@font-face{font-family:brandon-grotesque;src:url(https://use.typekit.net/af/d8f71f/0000000000000000000132e1/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3) format("woff2"),url(https://use.typekit.net/af/d8f71f/0000000000000000000132e1/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3) format("woff"),url(https://use.typekit.net/af/d8f71f/0000000000000000000132e1/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3) format("opentype");font-weight:500;font-style:normal;font-stretch:normal;font-display:auto;}</style><script>try { Typekit.load({ async: false }); } catch (e) { }</script> 
<script src="https://bat.bing.com/p/action/148021046.js" type="text/javascript" async="" data-ueto="ueto_926a437963"></script></head>
<body data-new-gr-c-s-check-loaded="14.1168.0" data-gr-ext-installed="" style="">
    <script type="text/javascript">
        $.smartbanner();
    </script>
            <div class="body-content">
        <div class="">
            <div class="">
                <div class="row">
                    <div class="col-md-6">
                        <h4 class="">For all you put into your service, MILITARY STAR wants you to get more back</h4>
                        <p class="section-paragraph justify">
                            The MILITARY STAR card and its benefits are exclusively available to military personnel and their families, DoD Civilians, Purple Heart recipients and Disabled Veterans and Veterans who received an Honorable or general under Honorable conditions discharge have online shopping privileges. This line of credit is designed to assist you with your financial needs, whether it’s an everyday purchase or one unique to your military lifestyle, such as PCS, deployment or retirement items. As a "thank you" for shopping the Exchange, cardholders also receive personal dividends through the MILITARY STAR Rewards Program.
                        </p>
                    </div>
                    <div class="col-md-6 milcard-new">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1500">
                            <!-- Indicators -->
                            <ol class="carousel-indicators" style="display:none">
                                <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                                <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                                <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                                <li data-target="#myCarousel" data-slide-to="3" class=""></li>
                                <li data-target="#myCarousel" data-slide-to="4" class=""></li>
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item">
                                    <img class="img-slider img-responsive" src="https://www.myecp.com/Images/1MilitaryStarCard_Army.jpg" alt="Milstar Card Army">
                                </div>

                                <div class="item">
                                    <img class="img-slider img-responsive" src="https://www.myecp.com/Images/2MilitaryStarCard_AirForce.jpg" alt="Milstar Card Army">
                                </div>

                                <div class="item active left">
                                    <img class="img-slider img-responsive" src="https://www.myecp.com/Images/3MilitaryStarCard_Marines.jpg" alt="Milstar Card Marine Corps">
                                </div>
                                <div class="item next left">
                                    <img class="img-slider img-responsive" src="https://www.myecp.com/Images/4MilitaryStarCard_Navy.jpg" alt="Milstar Card Navy">
                                </div>
                                <div class="item">
                                    <img class="img-slider img-responsive" src="https://www.myecp.com/Images/5MilitaryStarCard_Civilian.jpg" alt="Milstar Card Civilian">
                                </div>
                            </div>

                            <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        
                        <div class="apply-btn">
                            <div class="align-center cap"><a href="/applyNow" class="btn ecp-btn mb10" role="button">Apply Now</a><img src="https://www.myecp.com/Images/Caption.png" alt="Military Star"></div>
                            <div class="font-link align-center pt5"><a href="/static?pageName=terms-condition&title=Terms+and+Conditions">See Terms and Conditions</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>Earn 2% Rewards on Every Purchase<sup>†</sup></h4>
                <p class="section-paragraph justify">
                    Through the MILITARY STAR Rewards Program, you will earn 2% in rewards on every purchase except the Military Clothing Line of Credit. 
                    2% equals two points for every dollar you spend when you use your MILITARY STAR card at exchange stores, online at <i>shop<b>my</b>exchange.com</i>, 
                    myNavyExchange.com, ShopCGX.com, Army &amp; Air Force Exchange Service food courts, Express® locations, Exchange mall vendors, 
                    Armed Forces Recreation Center resort hotels and more.
                </p>
                <p class="section-paragraph justify">
                    For every 2,000 points accumulated, you’ll automatically earn a MILITARY STAR Rewards Card 
                    delivered to the email on your MILITARY STAR account. Reward cards are issued in $20 increments 
                    and may be redeemed for merchandise or services anywhere Exchange gift cards are accepted. Plus, 
                    there’s no limit to how many cards you can earn each year.
                </p>
                <div class="font-link pull-right pt5"><a href="/static?pageName=rewards-condition&title=MILITARY+STAR+Rewards+Program+(or+the+“Program”)+Terms+and+Conditions" target="_self">See Rewards Terms and Conditions</a></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4>Exclusive Military Benefits You've Come to Expect</h4>
                <div class="section-paragraph">
                    <h5>Fair and Flexible Terms to Help You Safely and Affordably Build Credit</h5>
                    <ul class="exclusive-benefits">
                        <li>Competitive low APR, no matter your credit score<sup>¥</sup></li>
                        <li>No late, annual or over-limit fees<sup>¥</sup></li>
                        <li>No back-interest when 0% promotions expire</li>
                    </ul>
                </div>
                <div class="section-paragraph pt10">
                    <h5>Programs to Support the Well-Being of Your Military Community</h5>
                    <ul class="exclusive-benefits">
                        <li>More than $408 million in benefit savings provided to Warfighters, their families and the military community in 2021</li>
                        <li>$1,000 interest-free Military Clothing Plan^</li>
                        <li>Reduced interest <a href="/static?pageName=deployment&title=Deployment+Policy" class="text-bluelink1">deployment policy**</a></li>
                    </ul>
                </div>
                <div class="section-paragraph pt10">
                    <h5>Multiple Discounts that Save You Money All Year Long</h5>
                    <ul class="exclusive-benefits">
                        <li>Promotional 0% interest offers</li>
                        <li>Fixed monthly payments for 36, 48 or 60 months with PayYourWay</li>
                        <li>Exclusive savings just for cardholders</li>
                        <li>Free standard shipping on <i>shop<b>my</b>exchange.com</i>, myNavyExchange.com and ShopCGX.com</li>
                        <li>5 cents off per gallon of fuel every day<sup>‡</sup></li>
                        <li>10% off at Exchange restaurants every day<sup>‡</sup></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 align-center">
                <h4><a href="/applyNow" class="text-bluelink1">Apply today</a> and save 10% on all your first day's purchases<sup>*</sup></h4>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-12">
                <div class="font-footnotes pb20">
                    <b>†</b> The MILITARY STAR Rewards Program is offered by the Exchange Credit Program. All cardholders are automatically
		enrolled in the MILITARY STAR Rewards Program and will earn 2% rewards on every purchase. 2% equals 2 points for
		every $1 on qualifying purchases at all military exchanges, commissaries, and other participating locations.
		Rewards cards are delivered to the email on your MILITARY STAR account after 2,000 points are earned.
		Rewards cards are issued in $20 increments. Points are calculated on the final amount charged to the MILITARY STAR account.
		Returns will be deducted from your available points, even if you have already received a rewards card and may result
		in a negative points balance. Points and rewards cards have no monetary value and cannot be used as payment on any account.
		Rewards exclude Military Clothing Plan. Rewards points will not expire as long as you have purchase activity at least once
		every 12 months. Rules are subject to change without prior notice.
                    <br>
                    <br>
                    ¥ Standard terms and conditions apply. As of July 27, 2023, a variable
                    15.49% APR applies to retail plan purchases, and a variable 23.49% APR applies to accounts
                    subject to penalty APR. Minimum interest charge: 50 cents.
                    <br>
                    <br>
                    
                    ^ Army, Air Force and Marine Corps only. Military Clothing Plan feature of the MILITARY STAR account may not be
                    available to all eligible account holders. Rewards exclude Military Clothing line of credit. Maximum amount $1,000. Eligible
                    items include DLATS merchandise and authorized commercial uniform clothing and accessories. No minimum purchase or
                    down payment is required. Estimate the monthly payments by dividing the new balance (including the purchase) by 12
                    months. The non-variable APR for purchases qualifying for the Military Clothing Plan is 0.00%.
                    <br>
                    <br>
                    ‡ Available only at Army &amp; Air Force Exchange Service and participating Marine Corps Community Service and Navy
                    Exchange facilities.
                    <br>
                    <br>
                    ** Your Interest Charges may be temporarily reduced based on military activation or deployment. The reduced interest rate
                    will be effective for the duration of your activation or deployment. Minimum interest charge: 50 cents. At the end of your
                    activation or deployment, the Interest Charges will return to the rates then in effect under this Agreement. To request a
                    temporary reduction in Interest Charges, you or your representative must provide a copy of your activation or deployment
                    orders to us by sending them: (1) by email to deployment@aafes.com; (2) by facsimile transmission to (214) 465-2997; or
                    (3) by mail addressed to the Exchange Credit Program, PO Box 650410, Dallas, TX 75265-0410.
                    <br>
                    <br>                  
                    * Upon account approval, new MILITARY STAR accounts will receive a 10% discount for purchases the first day. The 10% 
                    discount will be applied as a credit on the customer’s first monthly billing statement. Certain restrictions and limitations may 
                    apply.
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://www.myecp.com/bundles/accounthome?v=ROWSi_pqSBohRJxpGR4VgYzlzb3CLWkGC7MEgMitJC81"></script>

    <script src="https://www.myecp.com/bundles/SessionTimeOut?v=WZl0R5snlOkn91ffFrlLbpFs2qiEsLGpOM0_2LwtZy01"></script>

    <script src="https://www.myecp.com/bundles/AjaxErrorHandlers?v=os9aEOyxl1kDA69CSVUQxshYRXknk66TZQ2EFlfJkNc1"></script>

    <script src="https://www.myecp.com/bundles/ChatFunctionsMyECPJS?v=ZTN7Ekl_btObh1l3vGXZsy7mKTsqzcA6Ov4k8Cl9jdc1"></script>
    <script type="text/javascript">
        $(document).click(function (event) {
            var elementType = $(event.target).attr('type');

            if (elementType == "submit") {
                //check for button being disabled - workaround for IE8, 9 & 10 ISSUE
                var elementID = $(event.target).attr('id');
                //var elementDisabled = $(this).attr("disabled");
                var elementDisabled = $(event.target).attr('disabled');
                //special rules for the card app
                if (elementID == "submitApp") {
                    if ($("#AcceptTerms2").is(":checked") && $("#divErrorMsg").text().length == 0) {
                        $("#waitloader").show();
                        return;
                    }
                    else {
                        return;
                    }
                }
                if (elementDisabled == 'disabled') {
                    return;
                }
                $("#waitloader").show();
            }
        });
        function ToggleMenuArrow(menuId) {
            $("#" + menuId + " span").toggleClass("arrow pull-right  down-arrow pull-right");
        }

        function ShowSelectedMenu(menuId, cssClass, oldCssClass) {
            var newCssClass = oldCssClass + " " + cssClass;
            switch (menuId) {
                case "mnCreditCards":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnPromotion").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnContactUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                   /* $("#mnHome").removeClass(cssClass);*/
                    $("#mnCalculator").removeClass(cssClass);

                    break;
                case "mnPayments":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnPromotion").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnContactUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                    /*$("#mnHome").removeClass(cssClass);*/
                    $("#mnCalculator").removeClass(cssClass);

                    break;
                case "mnPromotion":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnContactUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                    $("#mnHome").removeClass(cssClass);
                    break;
                case "mnAboutUs":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnPromotion").removeClass(newCssClass);
                    $("#mnContactUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                    /*$("#mnHome").removeClass(cssClass);*/
                    break;
                case "mnContactUs":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnPromotion").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                    /*$("#mnHome").removeClass(cssClass);*/
                    break;
                case "mnAccountSummary":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnPromotion").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnContactUs").removeClass(newCssClass);
                   /* $("#mnHome").removeClass(cssClass);*/
                    break;
                case "mnContactUs":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                   /* $("#mnHome").removeClass(cssClass);*/
                    $("#mnPromotion").removeClass(newCssClass);
                    break;
                case "mnCalculator":
                    $("#" + menuId).addClass(newCssClass);
                    $("#mnPayments").removeClass(cssClass);
                    $("#mnCreditCards").removeClass(newCssClass);
                    $("#mnAboutUs").removeClass(newCssClass);
                    $("#mnAccountSummary").removeClass(newCssClass);
                    /*$("#mnHome").removeClass(cssClass);*/
                    $("#mnPromotion").removeClass(newCssClass);
                    break;

            }
        }
        $(document).ready(function () {

            //Hide Header and Footer for Caller
            //if ($("#showBodyOnly").val() == "Y") {
            //    $("#myECPHeader").addClass("turnoffHeaderFooter");
            //    $("#myECPFooter").addClass("turnoffHeaderFooter");
            //    $("#nav").addClass("turnoffHeaderFooter");
            //}

            $(".level1").hide();
            //add processing handlers
            $(document).ajaxStart(function () {

                $("#waitloader").show();
            });

            $("#hrefPaymobileMenu").click(function () {
                $(".level1").toggle();
            })


            $(document).ajaxStop(function () {
                $("#waitloader").hide();
            });
            $(document).ajaxComplete(function () {
                $("#waitloader").hide();
            });

            if ($("#HdIsAuthenticatedUser").val() == "True") {
                $("#SessionPopupDelayValue").val(540000)
                SessionTimeout.schedulePopup(540000);

            }
            var url = window.location.href;
            if (url.indexOf("CardApply") > -1 || url.indexOf("CP_MilStarCard") > -1) {
                ShowSelectedMenu('mnCreditCards', 'active', 'dropdown-toggle');
            }
            if (url.indexOf("CustomerAds") > -1) {
                ShowSelectedMenu('mnPromotion', 'active', 'dropdown-toggle');
            }
            else if (url.indexOf("AE_AboutECP") > -1 || url.indexOf("MR_DPolicy") > -1 || url.indexOf("MR_CBTips") > -1) {
                ShowSelectedMenu('mnAboutUs', 'active', 'dropdown-toggle');
            }
            else if (url.indexOf("AccountSummary") > -1 || url.indexOf("AccountHome") > -1 || url.indexOf("MyProfile") > -1) {
                if (url.indexOf("AccountHome") > -1) {
                    ShowSelectedMenu('mnPayments', 'active', 'dropdown-toggle');
                }
                else {
                    ShowSelectedMenu('mnAccountSummary', 'active', 'dropdown-toggle');
                }
            }
            else if (url.indexOf("ContactUs") > -1 || url.indexOf("FAQ") > -1) {
                ShowSelectedMenu('mnContactUs', 'active', 'dropdown-toggle');
            }
            else if (url.indexOf("Calculator") > -1 ) {
                ShowSelectedMenu('mnCalculator', 'active', 'dropdown-toggle');
            }
            $("[data-toggle='tooltip']").tooltip({ html: true });

            Chat_OnReady_Functions();  //Add MyECP side JS events for Chat

            $("#waitloader").hide();
        });
        function ResetSessionClock() {
            SessionTimeout.schedulePopup(540000);
        }

    </script>
    <!-- Version: 1.0.8852.15812 -->
<script type="text/javascript" src="https://www.myecp.com/ghXPkbjeEQ_6qOwUCJVx/a39tXSJGG0kiYE/ATs5MA/FEZDd/z97P2c"></script>


<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","341988626544416");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=237616136899209&amp;ev=PageView&amp;noscript=1"></noscript>
<div style="display: none; visibility: hidden;">
<script>!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://www.myecp.com//static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("init","o090k");twq("track","PageView");</script>
</div>
  <script type="text/javascript" id="">(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:"10000",properties:{pixelId:"10189561",he:"\x3cemail_address\x3e",auid:"\x3csha256_hashed_user_id\x3e"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||"complete"==f||"loaded"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,"script","https://s.yimg.com/wi/ytc.js",
"dotq");</script><script type="text/javascript" id="" src="https://js.adsrvr.org/up_loader.1.1.0.js"></script>
        <script type="text/javascript" id="">ttd_dom_ready(function(){if("function"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init("ve71hru",["rwivsi5"],"https://insight.adsrvr.org/track/up")}});</script>
</body></html>`;
}

function getLegalPolicy() {
    let LegalPolicy = [
        {
            Title: "End User License Agreement",
            content:
                `<div style="font-family: Lato;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                color: #000000;
                line-height: 20px;">
                Terms for MILITARY STAR<sup>&reg;</sup> App         <br>         <br> The following are the Terms of Use for the MILITARY STAR App Service, including the software application that is compatible         for use on all applicable mobile devices. The MILITARY STAR module is offered by the Army and Air Force Exchange<sup>&reg;</sup> Service,         also known as the Exchange<sup>&reg;</sup>. These Terms of Use shall apply to any person who accesses or uses any feature of this module.         <br>         <br> The MILITARY STAR module is available to eligible Exchange<sup>&reg;</sup> consumer credit card members with a compatible wireless         web-enabled cell phone or other type of mobile device, a MILITARY STAR credit card account registered on myECP.com,         and a valid MILITARY STAR User ID and password. There is no charge for using the MILITARY STAR App. However, your mobile         service carrier or provider may impose web-enablement fees or other charges for your use of the MILITARY STAR App.         <br>         <br> You are granted a non-exclusive, non-sub licensable, non-transferable, personal, limited license to install and use         of MILITARY STAR App (\"software\") only on a mobile device that you own or control, solely for your personal use and         as expressly permitted herein. Certain software that the Exchange<sup>&reg;</sup> uses to provide this App service has been licensed         from third parties not affiliated with Exchange<sup>&reg;</sup>. This limited right to use the software is revocable in the discretion         of the Exchange<sup>&reg;</sup>. The Exchange<sup>&reg;</sup> and this party licensors retain all right, title and interest in and to the MILITARY         STAR App and any modification and updates thereto. You agree not to decompile or reverse engineer the software. All         rights not expressly granted to you herein are reserved.         <br>         <br> The MILITARY STAR App is provided \"as is\" and without warranty. You acknowledge and agree that from time to time the         MILITARY STAR App service may be delayed, interrupted or disrupted for an indeterminated period of time due to circumstances         beyond the control of the Exchange<sup>&reg;</sup>. This includes disruptions due to software maintenance, power failures, equipment         malfunctions or other reasons. The Exchange<sup>&reg;</sup> and its affiliates will not be liable for any claim arising from or related         to the MILITARY STAR App service arising from any such delay, disruption or liable for any damages, to include indirect,         consequential special damages or lost profits, arising from your use of MILITARY STAR App, even if such damages were         reasonably foreseeble and notice was given regarding them. These limitations will apply to all causes of action, whether         arising from breach of contract, tort (including negligence) or any other legal theory.         <br>         <br> The Exchange<sup>&reg;</sup> and its third-party licensors have no obligation to correct any defect or errors in the MILITARY STAR         App service or software, or to otherwise support, maintain, improve, modify or enhance the service or software, Except         as otherwise required by applicable law or regulation, the Exchange<sup>&reg;</sup>, at any time in its sole discretion without prior         notice, may terminate your use of the MILITARY STAR App, modify or suspend the type and/or doller amounts of transactions         allowed using the service, and change the enrollment process and transaction limits assoicated with it from time to time         based on security issues and other factors at any time in its sole descretion without prior notice.         <br>         <br> You acknowledge and agree that the Exchange<sup>&reg;</sup> may collect, transmit, store, and use technical, location, and login or         other personal data and related information, including but not limited to technical information about your device, system         and application software, as well as information regarding your location, that is gathered to facilitate the provision         of software updates, product support, and other services to you, if needed, in connection with your use of the MILITARY         STAR App Service.         <br>         <br> The terms and conditions of your Exchange<sup>&reg;</sup> Credit Program Agreement (which governs your MILITARY STAR account) still         apply to all issues pertaining to your credit account. To the extent there is any conflict between these Terms of Use         and the Exchange<sup>&reg;</sup> Credit Program Agreement, the latter shall prevail.
                </div>`,
        },
        {
            Title: "Terms of Service",
            content:
                `<div style="font-family: Lato; font-size: 16px; font-style: normal; font-weight: 400; color: #000000; line-height: 20px; display:flex; flex-wrap:wrap; align-items:center;">
                <p style="margin-right:3px">For the current version of the Pay by Computer Terms and Conditions applicable to your use of this App, please go to <a style="color: #0088FF; text-decoration:none;" href="https://www.MyECP.com/FAQ/show/OnlinePayments">MyECP.com/FAQ/show/OnlinePayments</a></p>
              </div>`,
        },
        {
            Title: "Privacy Policy",
            content: `<div style="font-family: Lato; font-size: 16px; font-style: normal; font-weight: 400; color: #000000; line-height: 20px;">
            Protecting your privacy is important to us. We adhere to the Privacy Act, 5 U.S.C. 552 et seq., as well as the Rights to Financial Privacy Act, 12 U.S.C. 3401 et seq. We collect nonpublic personal information about you from the following sources:
            <ul class="ul-padding">
              <li>Information we receive from you on applications or other forms.</li>
              <li>Information about your transaction with us or others.</li>
              <li>Information we receive from a consumer reporting agency.</li>
            </ul>
            <br>
            We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted by law. We restrict access to nonpublic personal information about you to those employees who need to know that information to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with federal standards to guard your nonpublic personal information.
            <br><br>
            <span style="display:flex; align-items: center;">To review our Privacy Notice Click
              <nav><a style="color: #0088FF; text-decoration:none; margin-left:3px;" href="https://www.myecp.com/HtmlPages/ShowPrivacyPDF">here</a></nav>
            </span>
          </div>`,
        },
        {
            Title: "Pay by Computer Terms & Conditions",
            content:
            `<div style="font-family: Lato; font-size: 16px; font-style: normal; font-weight: 400; color: #000000; line-height: 20px;">
            For the current version of the Terms of Service applicable to your use of this App, please go to
            <span class="myecp-site label-text-decoration" style="white-space: nowrap;">
              <nav><a style="color: #0088FF; text-decoration:none;" href="https://www.myecp.com/FAQ/Show/Home">MyECP.com/FAQ/Show/Home</a></nav>
            </span>
          </div>`,
        },
    ];
    return LegalPolicy;
}
