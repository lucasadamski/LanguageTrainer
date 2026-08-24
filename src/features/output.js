function drawList(data, target) {
    data.forEach(t => {
        target.innerHtml = '';
        const div = document.createElement('div');
        const wordP  = document.createElement('p');
        wordP.textContent = `Word: ${t.word}`;
        const definitionP = document.createElement('p');
        definitionP.textContent = `Definition: ${t.definition}`;
        div.appendChild(wordP);
        div.appendChild(definitionP);
        target.appendChild(div);


    });
}
export { drawList };