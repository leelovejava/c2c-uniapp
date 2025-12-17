export default {
	common: {
		mixRecharge: ["Por favor, ingrese su dirección de correo electrónico"],
		language: "Idioma",
		common: ["Servicio al Cliente en Línea", "Desactivar Flotante", "Confirmar", "Cancelar"],
		upload: ["Cargando...", "Formato incorrecto", "Carga exitosa", "Error al cargar"],
		vanPull: ["No hay más datos", "No hay datos"],
		login: {
			text: ["Idioma", "BITCOIN", "Iniciar sesión"],
			label: ["Iniciando sesión...", "Iniciar sesión ahora"],
			placeholder: ["Ingrese su correo electrónico", "Ingrese su contraseña"],
			default: ["¿No tienes una cuenta?", "Regístrate ahora", "¿Olvidaste tu contraseña?",
				"Olvidé mi contraseña de inicio de sesión"
			],
			codes: ["La cuenta no existe", "Contraseña incorrecta", "La cuenta está bloqueada", "Error"]
		},
		register: {
			text: ["BITCOIN", "Enviando código de verificación...", "Obtener", "Registrando...", "Regístrate ahora"],
			placeholder: ["Ingrese su correo electrónico", "Ingrese el código de verificación",
				"Ingrese una contraseña", "Confirmar su contraseña", "Ingrese el código de invitación",
				"Las contraseñas no coinciden", "Ingrese el código de verificación", "Correo electrónico inválido",
				"La contraseña debe tener al menos 6 caracteres"
			],
			label: ["¿Ya tienes una cuenta? {a} {line}", "Volver a iniciar sesión"],
			codes: ["La cuenta ya existe", "Sin código de verificación", "Código de verificación incorrecto",
				"Las contraseñas no coinciden", "El referente no existe", "Error"
			]
		},
		resetpwd: ["Olvidé mi contraseña", "Ingrese su correo electrónico", "Ingrese el código de verificación",
			"Obtener", "Ingrese una nueva contraseña", "Restablecer contraseña"
		],
		footer: ["Inicio", "Lobby", "Orden", "Mi cuenta"],
		home: {
			label: ["Bienvenido"],
			broadcast: "Felicitaciones a {member} por convertirse en {grade}",
			menu: ["Registro de fondos", "Tutorial para principiantes", "Registro de invitación",
				"Contacto con el servicio al cliente"
			],
			noticeTitle: "Últimas noticias",
			msg: "La tarea no está disponible",
			video: "No hay tutoriales en video"
		},
		hall: {
			default: ["Sala de operaciones", "Saldo", "Comprar", "Vender", "Confirmar venta", "Lista de pedidos",
				"Pedidos de venta", "Vender al comerciante", "Orden pendiente", "Comprar", "Ir a vender"
			],
			list: ["Cantidad", "Precio", "No completado", "Vender USDT", "Ingrese la cantidad de USDT",
				"Cantidad recibida", "Límite", "Comprar USDT", "Monto gastado"
			],
			kbip: ["Cancelar", "Cantidad excedida", "Debe estar dentro del rango de cantidad"]
		},
		msglist: ["Lista de mensajes"],
		sell: {
			placeholder: ["Ingrese el precio de venta", "Ingrese la cantidad de venta"],
			label: ["Saldo (USDT)", "Nombre", "Cuenta bancaria", "Precio actual (USDT)", "Mejor precio de venta",
				"Precio de venta", "Cantidad de venta", "Mejor precio", "Todo", "Confirmar venta"
			]
		},
		buy: {
			placeholder: ["Ingrese el precio de compra", "Ingrese la cantidad de compra", "Monto mínimo",
				"Monto máximo"],
			label: ["Saldo (USDT)", "Nombre", "Cuenta bancaria", "Precio actual (USDT)", "Mejor precio de compra",
				"Precio de compra", "Cantidad de compra", "Mejor precio", "Todo", "Confirmar compra", "Límite"
			]
		},
		user: {
			default: ["Centro personal", "Iniciar sesión", "Código de invitación", "Cerrar sesión", "Saldo",
				"Monedas de oro", "Billetera",
				"Billetera de intereses",
				"Ganancias totales",
				"Monto de recarga",
				"Monto de venta",
				"Detalles",
				"Ingrese el monto de compra",
				"Cancelar",
				"Confirmar",
				"Compra exitosa",
				"Monto",
				"Fecha de vencimiento",
				"Tasa de interés",
				"Plazo",
				"días"
			],
			menu: ["Mis activos", "Lista de equipos", "Vinculación de cuenta", "Detalles de la cuenta",
				"Introducción de la plataforma", "Cerrar sesión"
			]
		},
		bindAccount: {
			default: ["Vincular cuenta", "Enviar"],
			fields: ["Nombre del titular de la cuenta", "Número de teléfono", "Número de cuenta bancaria", "Nombre",
				"Tipo", "Dirección de USDT"
			],
			placeholder: ["Ingrese el nombre del titular de la cuenta", "Ingrese el número de teléfono",
				"Ingrese el número de cuenta bancaria", "Ingrese el nombre del banco", "Seleccione el tipo de USDT",
				"Ingrese la dirección de USDT"
			]
		},
		bindAccount2: [
			"Por favor, confirme que la información proporcionada es correcta, de lo contrario afectará las transacciones normales",
			"Vincular ahora"
		],
		wallet: {
			default: ["Mis activos", "Recargar", "Retirar", "Historial de recargas", "Historial de retiros",
				"Monto recargado", "Monto vendido", "Beneficios obtenidos", "Saldo de la cuenta", "Saldo",
				"Monto de recarga (USDT)", "Monto de venta",
				"Ganancias totales", "Actualizar a comerciante",
				"Actualizar a comerciante, por favor contacte al servicio al cliente", "Confirmar establecimiento",
				"Certificación del comerciante", "Debe pagar", "Comprobante de pago",
				"Depósito de garantía del comerciante", "Certificar ahora", "Información", "Debe pagar",
				"¿Saldo insuficiente, desea recargar?"
			],
			label: ["Método de retiro", "Monto a retirar", "Contraseña de fondos", "Enviar", "Número de teléfono",
				"Correo electrónico", "IFSC", "Confirmar"
			],
			placeholder: ["Seleccione el método de retiro", "Ingrese el monto a retirar",
				"Ingrese la contraseña de fondos", "Seleccione el método de retiro",
				"Ingrese el número de teléfono del receptor", "Ingrese el correo electrónico del receptor",
				"Ingrese el IFSC del receptor"
			],
			msg: ["Aún no has configurado una contraseña de fondos, por favor configúrala primero",
				"Aún no has vinculado una cuenta PIX, por favor vínculala primero", "¿Seguro que quieres retirar?"
			]
		},
		recharge4: [
			"Para su seguridad financiera, después de la transferencia exitosa, por favor envíe una captura de pantalla de la transferencia exitosa para su revisión"
		],
		recharge: {
			default: ["Recarga de billetera", "Recarga previa de billetera", "Método de recarga", "Recargar",
				"Confirmar"
			],
			label: ["Tipo", "Dirección", "Monto de recarga", "Ingrese el monto", "Cargar comprobante",
				"Copiado correctamente", "Pre-recarga en el intercambio"
			],
			placeholder: ["Tipo", "Dirección"],
			info: ["Monto de recarga", "Número de orden", "Banco receptor", "Cuenta receptora", "Receptor", "Copiar"]
		},
		task: {
			tabs: ["Todos", "Lista de ventas", "Vencidos", "Completados", "Esperando pago del comerciante",
				"Esperando confirmación"
			],
			default: ["Lista de pedidos", "Número de orden", "Cuenta del comerciante", "Cantidad", "Precio", "Monto",
				"Estado", "Fecha de emparejamiento", "En progreso", "Completado", "Cancelado", "Todos"
			],
			msg: ["Enviar para revisión", "Enviado, por favor espere la revisión",
				"Envío fallido, por favor envíe nuevamente"
			],
		},
		userInfo: {
			default: ["Información personal", "Avatar", "Cuenta", "Correo electrónico", "Alipay",
				"Información detallada", "Cambiar contraseña", "Contraseña de fondos", "Haga clic para establecer",
				"Cambiar avatar", "Cambiar contraseña de inicio de sesión", "Cambiar contraseña de fondos",
				"Enviar",
				"Borrar caché", "Ver información", "Alias", "Código de referencia", "Cambiar idioma"
			],
			label: ["Contraseña de inicio de sesión actual", "Nueva contraseña de inicio de sesión",
				"Confirmar contraseña", "Contraseña de fondos actual", "Nueva contraseña de fondos",
				"Confirmar contraseña", "Guardar", "Cambio exitoso"
			],
			placeholder: ["Ingrese la contraseña de inicio de sesión actual",
				"Ingrese la nueva contraseña de inicio de sesión",
				"Confirme la nueva contraseña de inicio de sesión", "Ingrese la contraseña de fondos actual",
				"Ingrese la nueva contraseña de fondos", "Confirme la nueva contraseña de fondos"
			]
		},
		fundRecord: {
			default: ["Registro de gastos", "Historial de recargas", "Registro de activos", "Rec", "Recib", "Gast"],
			tabs: ["Ingresos", "Gastos", "Recargas"]
		},
		dialog: ["Advertencia", "Confirmar", "Enviando...", "Copiado correctamente",
			"La versión del sistema IOS es demasiado baja y no es compatible", "Registrando...", "Cargando datos..."
		],
		serviceCenter: ["Centro de atención al cliente", "Hola, soy un servicio al cliente exclusivo~",
			"Es un placer servirte", "Servicio de autoservicio", "Servicio al cliente en línea",
			"Servicio al cliente de recargas", "Servicio al cliente de Line", "Actualizar a comerciante",
			"Actualizar a comerciante, por favor contactar al servicio al cliente",
			"Contactar al servicio al cliente"
		],

		userTaskRecord: ["Mis pedidos", "Pedidos de venta", "Pedidos de compra", "Estado actual", "Comisión ganada",
			"Completado"
		],
		withdrawlist: ["Historial de retiros"],


		withdraw: ["Nombre del banco", "IBAN", "Nombre de la cuenta", "Monto a retirar", "Ingrese el nombre del banco",
			"Ingrese el IBAN", "Ingrese el nombre de la cuenta", "Ingrese el monto a retirar"
		],
		teamReport: {
			default: ["Lista del equipo", "Total de personas del equipo"]
		},
		common2: ["Tutorial para principiantes", "Contactar al servicio al cliente",
			"Términos del servicio, ver detalles", "Servicio al cliente 1", "Servicio al cliente 2"
		],
		common3: ["Éxito", "Introducción a la plataforma"],
		invite: ["Compartir promoción", "Mi código de invitación",
			"Copia el código de invitación para invitar a más amigos", "Copiar",
			"No se puede invitar a nuevos miembros temporalmente"
		],
		common4: ["Verificación de identidad", "Envío exitoso", "Notas importantes", "Contenido del elemento",
			"Monto a pagar", "Identificación personal", "Prueba de fondos",
			"Por favor completa primero la vinculación de la cuenta",
			"Por favor completa primero la verificación de identidad"
		],
		common5: ["Vender", "minutos", "antes", "Guardar código QR", "Abrir",
			"La cuenta está bloqueada, no se puede realizar transacciones por el momento", "Descargar la aplicación"
		],
		common6: ["Orden de recarga", "Número de orden", "Monto", "Hora", "Estado"],
		hall2: ["El monto mínimo de venta es", "", "La cantidad de ventas ha superado el límite diario"],
		register2: ["Correo electrónico", "Teléfono", "Ingresa tu número de teléfono", "Código de invitación",
			"Contraseña de inicio de sesión", "Código de verificación", "Número de teléfono", "Registrarse"
		],
		withdraw2: ["Retirar", "Cuenta del vendedor", "Saldo de la cuenta", "Monto a pagar", "Pagar ahora",
			"No se pueden realizar retiros mientras hay tareas pendientes",
			"Se ha superado el límite diario de retiros", "Notas"
		],
		mytask2: ["Cuenta del comerciante", "Precio", "Monto", "Saldo de la cuenta", "Monto a pagar",
			"Hora de emparejamiento", "Detalles de la orden", "La cantidad no puede ser 0", "Saldo insuficiente",
			"El precio no puede ser 0", "Rango incorrecto"
		],
		taskOrder2: ["No puedes cancelar la orden sin completar todas las transacciones", "Saldo insuficiente",
			"Confirmar", "Fallido", "Aún necesitas completar las órdenes antes de poder retirar:"
		],
		busAuth2: ["Actualizar a cuenta de comerciante", "Acepto", "Confirmar actualización",
			"Actualizar a cuenta de comerciante",
			"Si necesitas modificar la información de tu tarjeta bancaria, por favor contacta al servicio al cliente",
			"Tu cuenta actual necesita ser actualizada a una cuenta de comerciante"
		],
		recharge2: ["El monto no puede ser 0", "Debes cargar una captura de pantalla"],
		buy3: ["Cuenta regresiva", "horas", "Tipo", "Orden de beneficios", "Orden de coparticipación",
			"Límite de participantes", "No ingresar para no limitar la cantidad de participantes",
			"Identificación de usuario especificado", "Ingresa la ID especificada"
		],
		hall3: ["días", "horas", "minutos", "segundos", "Orden de coparticipación", "Cuenta", "Expirado"],
		sell3: ["El precio de venta no puede ser mayor que el mejor precio"],
		busAuth3: ["Miembro", "Comerciante", "Comerciante coronado"],
		recharge3: ["Calcular"],
		home3: ["Máquina minería", "Adivinanza", "Caja sorpresa", "Finanzas", "Próximamente"],
		home4: ["Operación rápida", "Comprar USDT con un solo clic", "Transacciones C2C", "Comprar y vender USDT",
			"Usuarios en línea", "Volumen total de transacciones en 24 horas (USDT)"
		],
		common7: ["Si no resolvemos tu problema, por favor contacta al servicio al cliente en línea",
			"Contactar al servicio al cliente", "Haga clic para consultar", "Configuración", "Todos",
			"Invitar a amigos", "Cantidad de personas en el equipo", "Nuevos miembros este mes",
			"Fecha de registro", "Cantidad de personas subordinadas"
		],
		hall4: ["Tu identidad", "Miembro", "Información de tu cuenta", "Transacción exitosa",
			"Has completado exitosamente", "Precio total", "Comprar", "Vender"
		],
		task3: ["Todos", "No pagados", "Pagados"],
		my: ["¿Estás seguro de que deseas cerrar sesión?"],

		bind: [
			'Vinculación de la cuenta',
			'País/Región',
			'Nombre del banco',
			'IBAN',
			'Nombre de la cuenta',
			'Nombre',
			'Apellido',
			'Dirección',
			'Código postal',
			'Cuidad',
			'Provincia o estado',
			'Teléfono móvil',
			'Si necesitas modificar la información de tu tarjeta bancaria, por favor',
			'contacta al servicio al cliente',
			'Enviar',
			'Por favor ingresa',
			'Hay campos obligatorios sin completar',
			'Vinculación exitosa'
		],

		setting: [
			"Registro de mis publicaciones",
			"Orden de compra",
			"Orden de venta",
		],
		empty: [
			"No hay datos disponibles"
		]

	}
}