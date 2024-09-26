
function internetBanking(){

var horario = new Date().getHours()

if(horario >=6 && horario <12){
    alert("Olá! Bom dia! Seja bem-vindo, por gentileza, digite o número correspondente a operação que deseja executar.")
}

else if(horario >=12 && horario <18){
    alert("Olá! Boa tarde! Seja bem-vindo, por gentileza, digite o número correspondente a operação que deseja executar.")
}

else if(horario >=18 || horario <6){
    alert("Olá! Boa noite! Seja bem-vindo, por gentileza, digite o número correspondente a operação que deseja executar.")
}


var saldo = 14000
var listaDeMovimentacoes = []

while (operacao != 5){
    var operacao = prompt("1. Saldo\n2. Extrato\n3. Depósito\n4. Transferência\n5. Sair do Sistema")
    if(operacao == 5 ){
        alert("Muito obrigado por utilizar o sistema.")
    }
    else if(operacao == 1){
        alert("O seu saldo é igual a R$" + " " + saldo + ".")
    }
    else if(operacao == 2){
        var texto = ""
        listaDeMovimentacoes.forEach(transf => {
            if(transf.tipo == "T"){
            texto = texto + "Transferência no valor de: R$ " + transf.valorTransf +
            " realizada com sucesso. Data: " + transf.dia + "/" + transf.mes + "/" + transf.ano + ", Horário: " + transf.horas + ":" 
            + transf.minutos + ":" + transf.segundos + ". Saldo restante R$ " + transf.saldoRestante + ".\n\n"}
            else if(transf.tipo == "D"){
                texto = texto + "Depósito no valor de: R$ " + transf.valorTransf +
                " realizado com sucesso. Data: " + transf.dia + "/" + transf.mes + "/" + transf.ano + ", Horário: " + transf.horas + ":" 
                + transf.minutos + ":" + transf.segundos + ". Saldo restante R$ " + transf.saldoRestante + ".\n\n"
            }
        })
        alert("Saldo R$: " + saldo + "\n\n"+texto)
    }
    else if(operacao == 3){
        var valorDepositado = Number(prompt("Por favor, digite o valor que deseja depositar."))
        
        saldo = (saldo + valorDepositado)
        alert("Você depositou RS "  + valorDepositado + ". O seu saldo atual é de R$ " + saldo + ".")
    
        var movimentacao = {
            valorTransf: valorDepositado,
            dia: new Date().getDate(),
            mes: new Date().getMonth(),
            ano: new Date().getFullYear(),
            horas: new Date().getHours(),
            minutos: new Date().getMinutes(),
            segundos: new Date().getSeconds(),
            saldoRestante: saldo,
            tipo: "D"
        }
        
        listaDeMovimentacoes.push(movimentacao)
    
    }

    else if(operacao == 4){
        var valorTransferido = Number(prompt("Por favor, digite o valor que deseja transferir."))
        if(saldo < valorTransferido){
        alert("Desculpe, saldo insuficiente.")
        }
        else{
        saldo = (saldo - valorTransferido)
        alert("Você tranferiu RS "  + valorTransferido + ". O seu saldo atual é de R$ " + saldo + ".")

        var movimentacao = {
            valorTransf: valorTransferido,
            dia: new Date().getDate(),
            mes: new Date().getMonth(),
            ano: new Date().getFullYear(),
            horas: new Date().getHours(),
            minutos: new Date().getMinutes(),
            segundos: new Date().getSeconds(),
            saldoRestante: saldo,
            tipo: "T"
        }
        
        listaDeMovimentacoes.push(movimentacao)





    }
        
}
}

}
