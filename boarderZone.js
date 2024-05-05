document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateBtn").addEventListener("click", generatePDF);
});

function generatePDF() {
    var name = document.getElementById("name").value;
    var birth = document.getElementById("birth").value;
    var passport = document.getElementById("passport").value;
    var house = document.getElementById("house").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var dd = {
        content: [
            {
                text: 'Про надання дозволу\n\n',
                style: 'header'
            },
            {
                text: [
                    'У зв’язку з набранням чинності змін до Постанови Кабінету Міністрів України від 27 липня 1998 р. № 1147 «Про прикордонний режим» та враховуючи Закон України «Про державний кордон» прошу надати дозвіл моїй дитині (дозвіл фізичним особам віком до 18 років надається за зверненням одного з батьків, або законного представника) на проведення топографо-геодезичних робіт (рибальство\збирання грибів, ягід\проходження по туристичному\вело- маршруту\проживання) в наступній локації: за межами с. Оноківці, урочище Дубки (у формі обов’зкове поле-назва найближчого населеного пункту\урочища)\n\n',
                    'Згідно ст. 24 Закону України «Про державний кордон» про себе зазначаю наступне:\n\n',
                    'Прізвище, ім’я, по батькові – ' + name + '\n',
                    'Дата народження – ' + birth + ' р.\n',
                    'Громадянство (підданство) особи, яка перебуватиме у межах прикордонної смуги – громадянин України\n',
                    'Реквізити документа, що посвідчує її особу – ' + passport + '\n',
                    'Місце проживання (місце перебування) – ' + house + '\n\n',
                    'Засоби зв’язку (одного з батьків)– тел.' + tel + ' e-mail: ' + email + '\n',
                    'Вид дозволу – проведення топографо-геодезичних робіт (рибальство\збирання грибів, ягід\проходження по туристичному\вело- маршруту\проживання)\n',
                    'Мета отримання дозволу- проведення топографо-геодезичних робіт (рибальство\збирання грибів, ягід\проходження по туристичному\вело- маршруту\проживання)\n',
                    'Правові підстави для отримання дозволу – згідно чинного законодавства України.\n',
                    'У разі відмови у наданні дозволу прошу надати обґрунтовану відповідь.\n',
                    'У разі надходження цього звернення до некомпетентного органу прошу направити його за належністю згідно вимог закону України «Про звернення громадян»\n\n',
                    'До звернення додаю копію паспорту та витяг про зареєстроване місце проживання (відповідних сторінок паспорту).\n',
                    'Про прийняте рішення прошу повідомити мене на електронну адресу: ' + email + '\n',
                    '____.______-. 2024 рік ______________ підпис'
                ]
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            }
        }
    };

    pdfMake.createPdf(dd).open();
}
