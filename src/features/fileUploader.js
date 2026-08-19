let wholeText;

async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    let output = document.getElementById('fileOutput');
    if (!file) {
        output.innerText = "No file attached!";
        return;
    } 

    const text = await readFileAsText(file);
    output.innerText = text;
    wholeText = text;
}



async function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

function sum(a, b) {
    return a + b;
}

export { sum, uploadFile, readFileAsText };

