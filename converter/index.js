let wkhtmltopdf = require('wkhtmltopdf');
let MemoryStream = require('memorystream');

module.exports = function (context, req) {
	context.log(`pdfn::converter >> ${req.query.page}`);
	
	let payload = {
		'page' : req.query.page,
		'options': {
			'pageSize': 'letter'
		}
	};

	let memStream = new MemoryStream();	
	wkhtmltopdf(payload.page, payload.options, function(code, signal) {
		context.log(`pdfn::converter >> ${payload.page} >> writing response [code: ${code}, signal ${signal}]`);

		context.res = {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf'
			},
			isRaw: true,
			body: memStream.read()
		};

		context.log(`pdfn::converter >> ${payload.page} >> DONE`);
		context.done();
	}).pipe(memStream);
};