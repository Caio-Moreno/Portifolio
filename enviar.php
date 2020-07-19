<?php
require("./PHPMailer-master/src/PHPMailer.php");
require("./PHPMailer-master/src/SMTP.php");

class Mensagem {
		private $para = null;
		private $assunto = null;
		private $mensagem = null;
		public $status = array( 'codigo_status' => null, 'descricao_status' => '');

		public function __get($atributo) {
			return $this->$atributo;
		}

		public function __set($atributo, $valor) {
			$this->$atributo = $valor;
		}
		
		
			
		public function mensagemValida() {
		
			if(empty($this->para)) {
			echo("<script> alert('Preencha os campos corretamente.');
			window.location.href = 'https://lucasgimenes.com.br';
			      </script>");	
				 
			} else if(empty($this->assunto)){
			echo("<script> alert('Preencha o assunto.');
			window.location.href = 'https://lucasgimenes.com.br';
			      </script>");
			} else if(empty($this->mensagem)){
			echo("<script> alert('Preencha a mensagem.');
			window.location.href = 'https://lucasgimenes.com.br';
			      </script>");
			}

			return true;
		}
	}

$mensagem = new Mensagem();

	$mensagem->__set('para', $_POST['para']);
	$mensagem->__set('assunto', $_POST['assunto']);
	$mensagem->__set('mensagem', $_POST['mensagem']);

if(!$mensagem->mensagemValida()) {
		echo 'Mensagem não é válida';
		header('Location: index.php');
	}

 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->CharSet = "utf-8";
$mail->IsSMTP(); // enable SMTP
 $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "mail.lucasgimenes.com.br";
 $mail->Port = 465; // or 587

 $mail->IsHTML(true);
 $mail->Username = "contato@lucasgimenes.com.br";
 $mail->Password = "Luc@sgimenes1590";
 $mail->SetFrom($mensagem->__get('para'));
 $mail->Subject = $mensagem->__get('assunto');
 $mail->Body = $mensagem->__get('mensagem');
 $mail->AddAddress("contato@lucasgimenes.com.br");
    if(!$mail->Send()) {
       echo "Mailer Error: " . $mail->ErrorInfo;
    ?>  
    <?php } else { ?>
    <script> alert('Mensagem enviada com sucesso');
window.location.href = 'https://lucasgimenes.com.br';
 </script>
<?php
}
?>
