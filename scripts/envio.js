$('#alertaNome').hide();
$('#alertaEmail').hide();

$(document).ready( function(){ //Quando documento estiver pronto
    


$('#fechar').click( function(){
  document.getElementById("formulario").reset();
}); //limpar campos após envio do formulario



    $('#btn').click( function(){ /* Quando clicar em #btn */
        /* Coletando dados */
        var nome  = $('#nome').val();
        var email = $('#email').val();
        var msg   = $('#msg').val();
 
        /* Validando */
        if(nome.length <= 3){
            $('#alertaNome').show(1000);
            return false;
        }else {
            $('#alertaNome').hide(500);
        }
        if(!email.includes('@') || email.length < 5){
            $('#alertaEmail').show();
            return false;
        }else{
            $('#alertaEmail').hide();
        }
        
 
        /* construindo url */
        var urlData = "&nome=" + nome +
        "&email=" + email +
        "&msg=" + msg ;
 
        /* Ajax */
        $.ajax({
             type: "POST",
             url: "sendmail.php", /* endereço do script PHP */
             async: true,
             data: urlData, /* informa Url */
             success: function(data) { /* sucesso */
                 $('#myModalSucess').modal('show');
                 
 
             },
             beforeSend: function() { /* antes de enviar */
                 $('.loading').fadeIn('fast'); 
             },
             complete: function(){ /* completo */
                 $('.loading').fadeOut('fast'); //wow!
             }
         });
    });
});
