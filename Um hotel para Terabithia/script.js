        let hotelName;
        let userName;
        let password = "2678";
        let defaultRate;
        let totalCost = 0;
        let totalGratis = 0;
        let totalHalfPrice = 0;
        let totalGarcons = 0;
        let totalGarconCost = 0;
        let totalCafe = 0;
        let totalAgua = 0;
        let totalSalgados = 0;
        let eventoCapacity = 350;
        let auditorioLaranjaCapacity = 150;
        let auditorioColoradoCapacity = 350;
        let auditorioLaranjaChairs = 70;
        let minDiscountQuantity = 3;
        let minDiscountValue = 0;
        let minDiscountCompany = "";

        function iniciar() {
            hotelName = prompt("Digite o nome do hotel:");
            userName = prompt("Digite seu nome de usuário:");
            let userPassword = prompt("Digite a senha:");
            
            if (userPassword !== password) {
                alert("Senha incorreta. Acesso negado.");
                return;
            }

            let option;
            do {
                option = prompt(`Bem-vindo ao Hotel \n${hotelName},  ${userName}. \nEscolha uma opção:\n1. HospedagemSimular\n2. HospedagemCadastrar\n3. Evento\n4. Buffet\n5. Passeio\n6. Orçamento \n7. Voltar Inicio\n8. Sair`);
                switch (option) {
    
                    case"1":
                        hospedagemconsultar();
                        break;
                    case "2":
                        hospedagemcadastrar();
                        break;
                    case "3":
                        evento();
                        break;
                    case "4":
                        buffet();
                        break;
                    case "5":
                        passeio();
                        break;
                    case "6":
                        orcamento();
                        break;
                        case "7":
                      // Volta ao Inicio
                    return;
                    case "8":
                        alert(`Muito obrigado e até logo, ${userName}.`);
                        break;
                    default:
                        alert("Opção inválida. Tente novamente.");
                }
            } while (option !== "0");
        }

        function hospedagemconsultar() {
            let hotelRate = parseFloat(prompt("Qual o valor da diária no hotel?"));
            let stayDuration = parseInt(prompt("Quantos dias de hospedagem?"));

            if (isNaN(hotelRate) || isNaN(stayDuration) || hotelRate < 0 || stayDuration <= 0 || stayDuration > 30) {
                alert("Valor inválido. Volte ao menu inicial.");
                return;
            }

            defaultRate = hotelRate;

            let guestName = prompt("Qual o nome do hóspede?");
            let confirmation = prompt(`${userName}, você confirma a hospedagem para ${guestName} por ${stayDuration} dias? (S/N)`);

            if (confirmation.toUpperCase() === "S") {
                let totalCostForStay = calculateCost(stayDuration, hotelRate);
                alert(`${userName}, reserva efetuada para ${guestName}. O valor total é de R$${totalCostForStay.toFixed(2)}.`);
                totalCost += totalCostForStay;
                checkGratisOrHalfPrice(guestName, stayDuration);
            } else {
                alert(`${userName}, reserva não efetuada.`);
            }
        }

        function calculateCost(duration, rate) {
            return duration * rate;
        }

        function checkGratisOrHalfPrice(name, duration) {
            if (duration <= 0) return;
            
            let age = parseInt(prompt(`Qual a idade de ${name}?`));
            if (age < 6) {
                alert(`${name} possui gratuidade.`);
                totalGratis++;
            } else if (age > 60) {
                alert(`${name} paga meia.`);
                totalHalfPrice++;
            }

            let nextGuest = prompt("Qual o nome do próximo hóspede? (Digite 'PARE' para encerrar)");
            if (nextGuest.toUpperCase() !== "PARE") {
                hospedagem();
            } else {
                alert(`${userName}, o valor total das hospedagens é: R$${totalCost.toFixed(2)}; ${totalGratis} gratuidade(s); ${totalHalfPrice} meia(s)`);
            }
        }
             
             

            function evento() {
            let garcons = parseInt(prompt("Quantos garçons serão necessários?"));
            let hours = parseInt(prompt("Qual a duração do evento em horas?"));
            let totalGarconCost = 10.5 * garcons * hours;
            alert(`Custo total: R$ ${totalGarconCost.toFixed(2)}`);
            let confirmation = prompt(`${userName}, gostaria de efetuar a reserva? (S/N)`);

            if (confirmation.toUpperCase() === "S") {
                alert(`${userName}, reserva efetuada com sucesso.`);
            } else {
                alert(`${userName}, reserva não efetuada.`);
            }
        }

        function buffet() {
            let guests = parseInt(prompt("Qual o número de convidados para o evento?"));

            if (guests > eventoCapacity) {
                alert("Quantidade de convidados superior à capacidade máxima.");
                return;
            }

            let cafeLiters = guests * 0.2;
            let aguaLiters = guests * 0.5;
            let salgados = guests * 7;
            let totalBuffetCost = (cafeLiters * 0.8) + (aguaLiters * 0.4) + ((salgados / 100) * 34);

            alert(`O evento precisará de ${cafeLiters} litros de café, ${aguaLiters} litros de água, ${salgados} salgados. O custo total do evento será de R$ ${totalBuffetCost.toFixed(2)}`);

            let confirmation = prompt(`${userName}, gostaria de efetuar a reserva? (S/N)`);

            if (confirmation.toUpperCase() === "S") {
                alert(`${userName}, reserva efetuada com sucesso.`);
            } else {
                alert(`${userName}, reserva não efetuada.`);
            }
        }

        function passeio() {
            let alcoholWayneOil = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
            let gasolineWayneOil = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
            let alcoholStarkPetrol = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
            let gasolineStarkPetrol = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

            let costAlcoholWayneOil = 0.7 * alcoholWayneOil;
            let costGasolineWayneOil = gasolineWayneOil;

            if (costAlcoholWayneOil < costGasolineWayneOil) {
                alert(`${userName}, é mais barato abastecer com álcool no posto Wayne Oil.`);
            } else {
                alert(`${userName}, é mais barato abastecer com gasolina no posto Wayne Oil.`);
            }
        }

        function orcamento() {
            let companyName;
            let serviceRate;
            let serviceQuantity;
            let serviceDiscount;
            let serviceMinQuantity;

            let minBudgetValue = Number.MAX_VALUE;
            let minBudgetCompany = "";

            do {
                companyName = prompt("Qual o nome da empresa?");
                serviceRate = parseFloat(prompt("Qual o valor por aparelho?"));
                serviceQuantity = parseInt(prompt("Qual a quantidade de aparelhos?"));
                serviceDiscount = parseFloat(prompt("Qual a porcentagem de desconto?"));
                serviceMinQuantity = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

                let totalServiceCost = calculateServiceCost(serviceRate, serviceQuantity, serviceDiscount, serviceMinQuantity);
                alert(`O serviço de ${companyName} custará R$ ${totalServiceCost.toFixed(2)}.`);

                if (totalServiceCost < minBudgetValue) {
                    minBudgetValue = totalServiceCost;
                    minBudgetCompany = companyName;
                }

                let newEntry = prompt(`${userName}, deseja informar novos dados? (S/N)`);

                if (newEntry.toUpperCase() !== "S") {
                    alert(`O orçamento de menor valor é o de ${minBudgetCompany} por R$ ${minBudgetValue.toFixed(2)}.`);
                    break;
                }
            } while (true);
        }

        function calculateServiceCost(rate, quantity, discount, minQuantity) {
            let totalCost = rate * quantity;
            if (quantity >= minQuantity) {
                totalCost -= (discount / 100) * totalCost;
            }
            return totalCost;
        }
        
    // Array para armazenar os nomes dos hóspedes
    var hospedes = [];
    
    // Loop principal do programa
    function hospedagemcadastrar(){
    while (true) {
        var hospedagemcadastrar = prompt("Selecione uma opção: \n1. Cadastrar - \n2. Pesquisar - \n3. Listar - \n4. Sair - \n5.Voltar ao Menu Principal");
        
        switch (hospedagemcadastrar) {
            case "1":
                if (hospedes.length < 15) {
                    var nomeHospede = prompt("Qual o nome do Hóspede?");
                    hospedes.push(nomeHospede);
                    alert("Hóspede " + nomeHospede + " foi cadastrado com sucesso!");
                } else {
                    alert("Máximo de cadastros atingido.");
                }
                break;
            case "2":
                var nomePesquisa = prompt("Qual o nome do Hóspede?");
                if (hospedes.indexOf(nomePesquisa) !== -1) {
                    alert("Hóspede " + nomePesquisa + " foi encontrado!");
                } else {
                    alert("Hóspede não encontrado.");
                }
                break;
            case "3":
                if (hospedes.length === 0) {
                    alert("Nenhum hóspede cadastrado.");
                } else {
                    alert("Lista de Hóspedes:\n" + hospedes.join("\n"));
                }
                break;
            case "4":
                alert("Saindo do programa.");
                // Encerra o loop principal
                window.location.reload();
                break;
                case "5":
                alert("Voltar ao Menu Principal");
                // Volta ao Menu principal
                return;
            default:
                alert("Opção inválida. Tente novamente.");
            }
        }
    }
