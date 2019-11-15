function getClima() {
    $.ajax({
        method: 'get',
        crossDomain: 'true',
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=350a884b648e64b6b24bf0bb560bf399',
        dataType: 'json',
        success: function (data) {
            
            
            temperatura = data.main.temp - 273;
            $('#temperatura').html(temperatura+"º");
            $('#pressaoAr').html(data.main.pressure);
            $('#umidade').html(data.main.humidity);
            $('#tempminima').html(data.main.temp_min);
            $('#tempmaxima').html(data.main.temp_max);
            $('#velocidadevento').html(data.main.visibility);
            
            var dataAmanhecer = new Date(data.sys.sunrise*1000);
            var descDataAmanhecer = dataAmanhecer.getHours()+':'+dataAmanhecer.getMinutes();
            $('#amanhecer').html(descDataAmanhecer);
            
            var porDoSol = new Date(data.sys.sunset*1000);
            var descPorDoSol = porDoSol.getHours()+':'+porDoSol.getMinutes();
            $('#pordosol').html(descPorDoSol);
            
            var icone = data.weather[0].icon;
            var caminho = 'img/icones/'+ícone+'.png';
            $('#icone').attr(src, cominhoIcone);
            
            


            
            
             
           
            
        },
        error: function (argumet) {
            alert('falha ao obter dados!');
        }
    });
}
function traduzirDescricao() {
    
    descricaoTraduzida = "";
    
    if (descricao =="clear sky") {
        descricaoTraduzida = "Céu limpo";
    } else if (descricao == "few clouds") {
        descricaoTraduzida = "poucas nuvens";
    } else if (descricao =="scattered clouds"){
        descricaoTraduzida="nuvens dispersas";
    } else if (descricao =="broken clouds"){
        descricaoTraduzida="nuvens quebradas";         
    } else if (descricao =="shower rain"){
        descricaoTraduzida="chuva de banho";
            
    } else if (descricao ==" rain"){
        descricaoTraduzida="chuva ";
            
    } else if (descricao =="thunderstorm "){
        descricaoTraduzida="trovoada ";
            
    } else if (descricao =="snow "){
        descricaoTraduzida="neve ";    
    }else if (descricao =="mist "){
        descricaoTraduzida="Névoa ";
        
        return descricaoTraduzida;
    }
}
window.onload = function () {
    getClima();
};