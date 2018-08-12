FROM azure-functions-wkhtmltopdf AS base

ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY . /home/site/wwwroot
