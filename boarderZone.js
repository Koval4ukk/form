document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateBtn").addEventListener("click", generatePDF);
});

function toBase64(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
}

function generatePDF() {
    var name = document.getElementById("name").value;
    var birth = document.getElementById("birth").value;
    var passport = document.getElementById("passport").value;
    var house = document.getElementById("house").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    toBase64('sign.jpg', function(base64Img) {
        var dd = {
            content: [
                {
                    text: [
                        '94 Чопський прикордонний загін\n',
                        'Державної прикордонної служби України\n',
                        name + '\n',
                        house + '\n',
                        tel + '\n',
                        email + '\n'
                    ],
                    style: "whom"
                },            
                {
                    text: 'Про надання дозволу\n\n',
                    style: 'header',
                    alignment: 'center'
                },
                {
                    text: [
                        // Your text content here
                    ],
                    style: "simpletext"
                },
                {
                    image: base64Img,
                    fit: [100, 100],
                    pageBreak: 'after'
                },
            ],
            styles: {
                header: {
                    fontSize: 14,
                    bold: true
                },
                simpletext: {
                    fontSize: 12,
                },
                whom: {
                    fontSize: 12,
                    alignment: 'right'
                }
            }
        };

        pdfMake.createPdf(dd).open();
    });
}
