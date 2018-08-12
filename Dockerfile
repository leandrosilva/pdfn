FROM leandr0silva/azure-functions-wkhtmltopdf:1.0 AS base

ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY . /home/site/wwwroot
