var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var soldiF = 0;
var soldiM = 0;
//classe figlio
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.deposito = function (ammontare) {
        this.balanceInit += ammontare;
        return ammontare;
    };
    SonAccount.prototype.primoPrelievo = function (ammontare) {
        this.balanceInit -= ammontare;
        return ammontare;
    };
    SonAccount.prototype.secondoPrelievo = function (ammontare) {
        this.balanceInit -= ammontare;
        return ammontare;
    };
    SonAccount.prototype.saldo = function () {
        return this.balanceInit;
    };
    return SonAccount;
}());
//inizializzazione variabili figlio e oggetto figlio
var figlio = new SonAccount(soldiF);
var prelievo;
var deposito;
//cambio dei dati on click
$('#figlio').html('Deposito: ' + figlio.saldo());
$('#figlio-invia').on('click', function () {
    if (figlio.balanceInit <= 0) {
        alert('hai finito i soldi');
        return;
    }
    prelievo = Number($('#pre').val());
    console.log('Prelievo 1: ' + figlio.primoPrelievo(prelievo));
    $('#figlio').html('Deposito: ' + figlio.saldo());
});
$('#figlio-inviaD').on('click', function () {
    deposito = Number($('#dep').val());
    console.log('Prelievo 1: ' + figlio.deposito(deposito));
    $('#figlio').html('Deposito: ' + figlio.saldo());
});
//classe madre
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.interessi = function (tasso) {
        return (this.balanceInit * tasso) / 100;
    };
    MotherAccount.prototype.saldoM = function (quanto) {
        return this.balanceInit + this.interessi(quanto);
    };
    return MotherAccount;
}(SonAccount));
//inizializzazione variabili madre e oggetto madre
var madre = new MotherAccount(soldiM);
var tasso = 10;
//cambio dei dati on click
$('#madre').html('Deposito: ' + madre.saldoM(tasso));
$('#tax-conf').on('click', function () {
    tasso = Number($('#tax').val());
});
$('#madre-invia').on('click', function () {
    prelievo = Number($('#preM').val());
    console.log('Prelievo 1: ' + madre.primoPrelievo(prelievo));
    $('#madre').html('Deposito: ' + madre.saldoM(tasso));
});
$('#madre-inviaD').on('click', function () {
    deposito = Number($('#depM').val());
    console.log('Prelievo 1: ' + madre.deposito(deposito));
    $('#madre').html('Deposito: ' + madre.saldoM(tasso));
});
$('#sf-invia').on('click', function () {
    soldiF = Number($('#sf').val());
    figlio.balanceInit = soldiF;
    $('#figlio').html('Deposito: ' + figlio.saldo());
    $('#figlio').html('Deposito: ' + figlio.saldo());
    $('#figliolo').hide();
});
$('#sm-invia').on('click', function () {
    soldiM = Number($('#sm').val());
    madre.balanceInit = soldiM;
    $('#madre').html('Deposito: ' + madre.saldoM(0));
    $('#madre').html('Deposito: ' + madre.saldoM(0));
    $('#matrigna').hide();
});
$(function () {
    alert('inserisci i saldi per continuare');
});
