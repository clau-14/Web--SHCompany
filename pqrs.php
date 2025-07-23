<?php
// SISTEMA PQRS - SH COMPANY SAS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar solicitudes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener datos del formulario
$tipoDocumento = $_POST['tipoDocumento'] ?? '';
$numeroDocumento = $_POST['numeroDocumento'] ?? '';
$nombres = $_POST['nombres'] ?? '';
$apellidos = $_POST['apellidos'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$email = $_POST['email'] ?? '';
$tipoPQRS = $_POST['tipoPQRS'] ?? '';
$categoria = $_POST['categoria'] ?? '';
$numeroContrato = $_POST['numeroContrato'] ?? '';
$sede = $_POST['sede'] ?? '';
$asunto = $_POST['asunto'] ?? '';
$descripcion = $_POST['descripcion'] ?? '';

// Validar campos requeridos
$camposRequeridos = [
    'tipoDocumento', 'numeroDocumento', 'nombres', 'apellidos', 
    'telefono', 'email', 'tipoPQRS', 'categoria', 'sede', 'asunto', 'descripcion'
];

foreach ($camposRequeridos as $campo) {
    if (empty($_POST[$campo])) {
        echo json_encode(['success' => false, 'message' => "El campo $campo es requerido"]);
        exit;
    }
}

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'El email proporcionado no es válido']);
    exit;
}

// Generar número de radicado
$radicado = 'PQRS-' . date('Y') . '-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);

// Tu correo donde recibirás las PQRS
$tuCorreo = 'internetjhs@gmail.com';
$asuntoCorreo = "🔔 Nueva $tipoPQRS - $radicado: $asunto";

// Crear correo HTML profesional
$cuerpoCorreo = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Nueva PQRS - SH COMPANY</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #f25c05, #ff8a47); color: white; padding: 25px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .badge { background: #28a745; color: white; padding: 8px 15px; border-radius: 20px; font-weight: bold; display: inline-block; margin-top: 10px; }
        .content { padding: 25px; }
        .info-row { margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-left: 4px solid #f25c05; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; margin-top: 5px; }
        .description { background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 15px; }
        .footer { background: #343a40; color: white; padding: 20px; text-align: center; font-size: 12px; }
        .urgent { background: #dc3545; color: white; padding: 10px; text-align: center; font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🔔 Nueva $tipoPQRS Recibida</h1>
            <div class='badge'>$radicado</div>
        </div>
        
        <div class='urgent'>
            ⚡ REQUIERE RESPUESTA EN 15 DÍAS HÁBILES
        </div>
        
        <div class='content'>
            <div class='info-row'>
                <div class='label'>👤 Cliente:</div>
                <div class='value'>$nombres $apellidos</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>📧 Email:</div>
                <div class='value'>$email</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>📱 Teléfono:</div>
                <div class='value'>$telefono</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>🆔 Documento:</div>
                <div class='value'>$tipoDocumento - $numeroDocumento</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>📋 Tipo:</div>
                <div class='value'>" . strtoupper($tipoPQRS) . "</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>🏢 Sede:</div>
                <div class='value'>" . ucwords($sede) . "</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>📑 Contrato:</div>
                <div class='value'>" . ($numeroContrato ?: 'No especificado') . "</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>📝 Asunto:</div>
                <div class='value'><strong>$asunto</strong></div>
            </div>
            
            <div class='description'>
                <div class='label'>📄 Descripción Completa:</div>
                <div class='value'>" . nl2br(htmlspecialchars($descripcion)) . "</div>
            </div>
            
            <div class='info-row'>
                <div class='label'>⏰ Recibida:</div>
                <div class='value'>" . date('d/m/Y H:i:s') . "</div>
            </div>
        </div>
        
        <div class='footer'>
            <strong>SH COMPANY SAS</strong><br>
            Cll 25ª # 7ª 12 Barrio la Inmaculada, Ayapel, Córdoba<br>
            📞 (313) 536-2337 | 📱 (314) 868-6245
        </div>
    </div>
</body>
</html>
";

// Headers para correo HTML
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: SH COMPANY PQRS <noreply@shcompany.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Enviar correo (funcionará en hosting real)
$correoEnviado = mail($tuCorreo, $asuntoCorreo, $cuerpoCorreo, $headers);

// Enviar correo de confirmación al cliente
$asuntoConfirmacion = "Confirmación de $tipoPQRS - $radicado";
$cuerpoConfirmacion = "
<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Confirmación PQRS - SH COMPANY</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 20px; text-align: center; border-radius: 8px; margin-bottom: 20px; }
        .info-box { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #28a745; }
        .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>✅ $tipoPQRS Recibida Exitosamente</h2>
            <p>Número de Radicado: <strong>$radicado</strong></p>
        </div>
        
        <p>Estimado/a <strong>$nombres $apellidos</strong>,</p>
        
        <p>Hemos recibido su $tipoPQRS con el siguiente detalle:</p>
        
        <div class='info-box'>
            <strong>📝 Asunto:</strong> $asunto<br>
            <strong>⏰ Fecha de recepción:</strong> " . date('d/m/Y H:i:s') . "<br>
            <strong>🕒 Tiempo de respuesta:</strong> Máximo 15 días hábiles
        </div>
        
        <p>Le responderemos a la brevedad posible. Si necesita atención inmediata, puede contactarnos:</p>
        
        <div class='info-box'>
            <strong>📞 Teléfonos:</strong><br>
            • (313) 536-2337<br>
            • (314) 868-6245 (WhatsApp)
        </div>
        
        <p>Gracias por contactarnos.</p>
        
        <div class='footer'>
            <strong>SH COMPANY SAS</strong><br>
            Cll 25ª # 7ª 12 Barrio la Inmaculada, Ayapel, Córdoba
        </div>
    </div>
</body>
</html>
";

$headersConfirmacion = "MIME-Version: 1.0\r\n";
$headersConfirmacion .= "Content-type: text/html; charset=UTF-8\r\n";
$headersConfirmacion .= "From: SH COMPANY SAS <noreply@shcompany.com>\r\n";

mail($email, $asuntoConfirmacion, $cuerpoConfirmacion, $headersConfirmacion);

// Respuesta exitosa
echo json_encode([
    'success' => true,
    'message' => 'PQRS enviada exitosamente',
    'radicado' => $radicado,
    'nombres' => $nombres,
    'tipoPQRS' => $tipoPQRS
]);
?>
