const dataForm = document.getElementById('dataForm');
const output = document.getElementById('output');
const data = [];

dataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const substituicao = parseFloat(dataForm.substituicao.value);
    const proporcao = parseFloat(dataForm.proporcao.value);

    // Calculate dosagemSubstituto and dosagemCacau
    const dosagemSubstituto = substituicao / proporcao;
    const dosagemCacau = 100 - substituicao;

    const entry = {
        substituicao: substituicao.toFixed(2) + '%',
        proporcao: `1/${proporcao}`,
        dosagemSubstituto: dosagemSubstituto.toFixed(2) + '%',
        dosagemCacau: dosagemCacau.toFixed(2) + '%'
    };

    data.push(entry);
    displayData();

    // Clear form
    dataForm.reset();
});

function displayData() {
    output.innerHTML = '<h3>Data:</h3>';
    data.forEach((entry, index) => {
        output.innerHTML += `
            <div>
                <strong>Entry ${index + 1}</strong><br>
                Substituição: ${entry.substituicao}<br>
                Proporção: ${entry.proporcao}<br>
                Dosagem Substituto: ${entry.dosagemSubstituto}<br>
                Dosagem Cacau: ${entry.dosagemCacau}<br>
                <br>
            </div>
        `;
    });
}