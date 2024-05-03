const configs = {
    fontSize: 11,
    pageSize: "A4",
    pageMargins: [60, 60, 60, 60],
};

const defaultStyle = {
    fontSize: configs.fontSize,
    lineHeight: 1.1
};

const styles = {
    header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 10]
    },
    para: {
        alignment: 'justify',
    }
}

const docDefinition = {
    content: [
        { text: 'CodeOmelet', style: ['header'] },
        { text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, mollitia! Fugit eum aliquid est iusto ducimus ex reiciendis error esse eveniet aspernatur veritatis eaque omnis harum corporis voluptas beatae, odit maxime sit laborum possimus natus autem. Possimus molestiae assumenda reiciendis distinctio maxime in excepturi eaque eveniet omnis aliquid? Sit, pariatur!' }
    ],
    defaultStyle,
    styles,
    pageSize: configs.pageSize,
    pageMargins: configs.pageMargins,
};

function openPDF() {
    pdfMake.createPdf(docDefinition).open({}, window);
}

function printPDF() {
    pdfMake.createPdf(docDefinition).print();
}

function downloadPDF() {
    pdfMake.createPdf(docDefinition).download('PDF Make');
}
