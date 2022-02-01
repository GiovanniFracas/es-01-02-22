
let soldiF:number=0;
let soldiM:number=0;
//classe figlio
class SonAccount {
    balanceInit: number = 0;

    constructor(balanceInit: number) {
        this.balanceInit = balanceInit;
    }

    public deposito(ammontare: number): number {
        this.balanceInit += ammontare;
        return ammontare;
    }

    public primoPrelievo(ammontare: number): number {
        this.balanceInit -= ammontare;
        return ammontare;
    }

    public secondoPrelievo(ammontare: number): number {
        this.balanceInit -= ammontare;
        return ammontare;
    }

    public saldo(): number {
        return this.balanceInit;
    }
}
//inizializzazione variabili figlio e oggetto figlio
let figlio = new SonAccount(soldiF);

let prelievo: number;
let deposito: number;


//cambio dei dati on click
$('#figlio').html('Deposito: ' + figlio.saldo());
$('#figlio-invia').on('click', () => {

    if(figlio.balanceInit<=0){
        alert('hai finito i soldi')
        return;
    }
    prelievo = Number($('#pre').val());

    console.log('Prelievo 1: ' + figlio.primoPrelievo(prelievo));
    $('#figlio').html('Deposito: ' + figlio.saldo());
})
$('#figlio-inviaD').on('click', () => {
    deposito = Number($('#dep').val());

    console.log('Prelievo 1: ' + figlio.deposito(deposito));
    $('#figlio').html('Deposito: ' + figlio.saldo());
})

//classe madre
class MotherAccount extends SonAccount {
    constructor(balanceInit: number) {
        super(balanceInit)
    }

    public interessi(tasso: number): number {
        return (this.balanceInit * tasso) / 100;
    }

    public saldoM(quanto: number): number {
        return this.balanceInit + this.interessi(quanto);
    }
}
//inizializzazione variabili madre e oggetto madre
let madre = new MotherAccount(soldiM);
let tasso: number = 10;


//cambio dei dati on click
$('#madre').html('Deposito: ' + madre.saldoM(tasso));
$('#tax-conf').on('click', () => {
    tasso = Number($('#tax').val());
})
$('#madre-invia').on('click', () => {
    prelievo = Number($('#preM').val());
    console.log('Prelievo 1: ' + madre.primoPrelievo(prelievo));
    $('#madre').html('Deposito: ' + madre.saldoM(tasso));
    if(madre.balanceInit<=0){
        alert('hai finito i soldi')
        return;
    }
})
$('#madre-inviaD').on('click', () => {
    deposito = Number($('#depM').val());
    console.log('Prelievo 1: ' + madre.deposito(deposito));
    $('#madre').html('Deposito: ' + madre.saldoM(tasso));
})


$('#sf-invia').on('click', () => {
    soldiF = Number($('#sf').val());
    figlio.balanceInit=soldiF;
    $('#figlio').html('Deposito: ' + figlio.saldo());
    $('#figlio').html('Deposito: ' + figlio.saldo());
    $('#figliolo').hide();
})
$('#sm-invia').on('click', () => {
    soldiM = Number($('#sm').val());
    madre.balanceInit=soldiM;
    $('#madre').html('Deposito: ' + madre.saldoM(0));
    $('#madre').html('Deposito: ' + madre.saldoM(0));
    $('#matrigna').hide();
})
$(()=>{
    alert('inserisci i saldi per continuare');
})