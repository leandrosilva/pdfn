# pdfn

Node.js **Azure Functions** app to convert HTML to PDF using **wkhtmltopdf**.

    git clone https://github.com/leandrosilva/pdfn.git
    cd pdfn
    docker build -f Dockerfile -t pdfn .
    docker run -p 8080:80 --name pdfn_dev pdfn

Head over to your Chrome or whatnot and fire:

    http://yourdockerhost:8080/api/converter?page=http://google.com

That's it.