
function visualizeHL7() {
    const raw = document.getElementById('hl7Input').value;
    const lines = raw.split(/\r?\n/);
    let output = '<table><tr><th>Segment</th><th>Field Position</th><th>Value</th></tr>';

    for (const line of lines) {
        if (!line.trim()) continue;
        const fields = line.split('|');
        const segment = fields[0];
        for (let i = 1; i < fields.length; i++) {
            output += `<tr><td>${segment}</td><td>${i}</td><td>${fields[i]}</td></tr>`;
        }
    }
    output += '</table>';
    document.getElementById('output').innerHTML = output;
}
