alert('¡ATENCIÓN! Ésta sucursal es de Argentina, ¿es usted de Argentina?')
let nombreCliente=prompt('Ingrese su nombre');
let apellidoCliente=prompt('Ingrese su apellido para continuar');
let edadCliente = parseInt(prompt('Debe ser mayor de edad para continuar, ¿qué edad tiene?'));
let edadPermitida = 18
if(edadCliente>=edadPermitida){
    alert('Usted declara ser mayor de edad')
    let contraseñaGuardada = 'Kratos';
    for (let i = 0; i < 3; i++){
        let contraseñaUsuario = prompt('Por último, ingrese su contraseña');
        if (contraseñaUsuario === contraseñaGuardada) {
            alert('¡Login exitoso! Puedes comprar productos');
            break;
        }
    }
}else{
    alert('No cumplís con la mayoría de edad, podrás navegar pero NO comprar productos')
}
alert('Proceso de login finalizado')    
