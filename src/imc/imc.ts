export type TipoTabela = {
    titulo: string,
    cor: string,
    icon: 'down' | 'up',
    imc: number[],
    seuImc?: number | undefined
}

export const tabelaImc: TipoTabela[] = [
    { titulo: 'Magreza', cor: 'gray', icon: 'down', imc: [0, 18.5]},
    { titulo: 'Normal', cor: 'green', icon: 'up', imc: [18.6, 24.9]},
    { titulo: 'Sobrepeso', cor: 'orange', icon: 'down', imc: [25, 30]},
    { titulo: 'Obesidade', cor: 'red', icon: 'down', imc: [30.1, 99]},
];


export const calcularImc = (altura: number, peso: number) => {
    const imc = peso / (altura * altura);

    for(let i in tabelaImc){
        if(imc >= tabelaImc[i].imc[0] && imc < tabelaImc[i].imc[1]){
            let novaTabela = {...tabelaImc[i]}
            novaTabela.seuImc = parseFloat(imc.toFixed(2));
            return novaTabela
        }
    }
    return null
}

