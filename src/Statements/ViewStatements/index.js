const { Storage } = require("@google-cloud/storage");
const path = require("path");
const fs = require("fs");

exports.ViewStatements = async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
	} else {
		console.log(req.query.download);
		const cwd = path.join(__dirname, "..");
		const destFileName = path.join(cwd, "tmp/mytest.pdf");
		const storage = new Storage();
		const bucketName = "myecp-files";
		const filename = "TEMP_PDF_8941066_0.pdf.pdf";
		const options = {
		destination: destFileName,
		};
		console.log(destFileName);
		await storage.bucket(bucketName).file(filename).download(options);

		if (req.query.download) {
		res.download(destFileName);
		} else {
		var data = fs.readFileSync(destFileName);
		res.contentType("application/pdf");
		res.status(200).send(data);
		}
	}
};
