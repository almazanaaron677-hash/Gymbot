
// ==========================================
// FITBOT - CEREBRO DEL CHATBOT
// ==========================================

const chat = document.getElementById("chat");
const entrada = document.getElementById("entrada");

// ==========================================
// BASE DE CONOCIMIENTO
// ==========================================

const ejercicios = {

    "press banca": {
        grupo: "Pecho",
        musculos: "Pectoral mayor, tríceps y deltoides anterior",
        descripcion: "Ejercicio de empuje realizado normalmente con barra.",
        tecnica: "Acuéstate en el banco, coloca los pies firmes en el suelo, toma la barra con un agarre cómodo, bájala de forma controlada hacia el pecho y empújala nuevamente.",
        errores: "Evita rebotar la barra, levantar demasiado los hombros o perder el control durante el movimiento.",
        variantes: "Press inclinado, press declinado y press con mancuernas.",
        nivel: "Principiante a avanzado"
    },

    "press inclinado": {
        grupo: "Pecho",
        musculos: "Pectoral superior, tríceps y deltoides anterior",
        descripcion: "Variante del press de pecho realizada con el banco inclinado.",
        tecnica: "Apoya completamente la espalda en el banco, mantén los pies firmes y baja el peso lentamente antes de empujar.",
        errores: "No uses un peso que no puedas controlar ni rebotes durante el movimiento.",
        variantes: "Barra, mancuernas y máquina.",
        nivel: "Intermedio"
    },

    "flexiones": {
        grupo: "Pecho",
        musculos: "Pectorales, tríceps, hombros y abdomen",
        descripcion: "Ejercicio con el peso corporal que trabaja principalmente el tren superior.",
        tecnica: "Coloca las manos aproximadamente a la altura de los hombros, mantén el cuerpo alineado y baja controladamente.",
        errores: "Evita dejar caer la cadera o mover el cuerpo sin control.",
        variantes: "Flexiones inclinadas, normales y con diferentes posiciones de manos.",
        nivel: "Principiante"
    },

    "aperturas": {
        grupo: "Pecho",
        musculos: "Pectorales",
        descripcion: "Ejercicio de aislamiento para trabajar el pecho.",
        tecnica: "Realiza el movimiento de forma controlada y evita estirar demasiado los brazos.",
        errores: "No utilices demasiado peso ni hagas movimientos bruscos.",
        variantes: "Mancuernas, máquina y poleas.",
        nivel: "Principiante a intermedio"
    },

    "jalon al pecho": {
        grupo: "Espalda",
        musculos: "Dorsales, bíceps y músculos de la espalda",
        descripcion: "Ejercicio de tracción vertical realizado normalmente en polea.",
        tecnica: "Siéntate, fija las piernas y lleva la barra hacia la parte superior del pecho manteniendo el movimiento controlado.",
        errores: "Evita balancear demasiado el cuerpo o tirar de la barra con movimientos bruscos.",
        variantes: "Agarre amplio, cerrado y diferentes accesorios.",
        nivel: "Principiante"
    },

    "remo maquina": {
        grupo: "Espalda",
        musculos: "Dorsales, romboides, trapecios y bíceps",
        descripcion: "Ejercicio de tracción horizontal realizado en una máquina.",
        tecnica: "Mantén el torso estable y lleva los agarres hacia el cuerpo controladamente.",
        errores: "Evita encorvar demasiado la espalda o utilizar impulso.",
        variantes: "Remo con cable, máquina o mancuerna.",
        nivel: "Principiante"
    },

    "remo mancuerna": {
        grupo: "Espalda",
        musculos: "Dorsales, romboides, trapecios y bíceps",
        descripcion: "Ejercicio unilateral para trabajar la espalda.",
        tecnica: "Apoya una mano y una rodilla si lo necesitas, mantén la espalda estable y lleva la mancuerna hacia el torso.",
        errores: "No gires excesivamente el cuerpo ni utilices impulso.",
        variantes: "Remo con barra, máquina o cable.",
        nivel: "Intermedio"
    },

    "dominadas": {
        grupo: "Espalda",
        musculos: "Dorsales, bíceps, antebrazos y músculos de la espalda",
        descripcion: "Ejercicio de tracción vertical utilizando el peso corporal.",
        tecnica: "Sujeta la barra, mantén el cuerpo controlado y realiza la subida sin balancearte excesivamente.",
        errores: "Evita utilizar demasiado impulso.",
        variantes: "Dominadas asistidas y diferentes agarres.",
        nivel: "Intermedio a avanzado"
    },

    "sentadilla": {
        grupo: "Piernas",
        musculos: "Cuádriceps, glúteos, isquiotibiales y músculos estabilizadores",
        descripcion: "Ejercicio compuesto fundamental para trabajar las piernas.",
        tecnica: "Coloca los pies en una posición cómoda, flexiona cadera y rodillas manteniendo el torso estable y vuelve a subir.",
        errores: "Evita perder el control o utilizar una carga que no puedas manejar correctamente.",
        variantes: "Sentadilla libre, goblet y diferentes variantes.",
        nivel: "Principiante a avanzado"
    },

    "prensa": {
        grupo: "Piernas",
        musculos: "Cuádriceps, glúteos e isquiotibiales",
        descripcion: "Ejercicio de piernas realizado en una máquina de prensa.",
        tecnica: "Coloca los pies firmes en la plataforma y empuja controladamente sin bloquear las rodillas.",
        errores: "No bajes más de lo que puedas controlar ni despegues la espalda del respaldo.",
        variantes: "Diferentes posiciones de pies y máquinas.",
        nivel: "Principiante"
    },

    "extension de piernas": {
        grupo: "Piernas",
        musculos: "Cuádriceps",
        descripcion: "Ejercicio de aislamiento para la parte frontal del muslo.",
        tecnica: "Ajusta la máquina, mantén la espalda apoyada y extiende las piernas de forma controlada.",
        errores: "Evita realizar movimientos bruscos o utilizar demasiado peso.",
        variantes: "Diferentes máquinas.",
        nivel: "Principiante"
    },

    "curl femoral": {
        grupo: "Piernas",
        musculos: "Isquiotibiales",
        descripcion: "Ejercicio de aislamiento para la parte posterior del muslo.",
        tecnica: "Ajusta correctamente la máquina y flexiona las piernas controladamente.",
        errores: "No utilices impulso ni demasiado peso.",
        variantes: "Curl sentado o acostado.",
        nivel: "Principiante"
    },

    "zancadas": {
        grupo: "Piernas",
        musculos: "Cuádriceps, glúteos e isquiotibiales",
        descripcion: "Ejercicio unilateral que trabaja las piernas y el equilibrio.",
        tecnica: "Da un paso, flexiona las rodillas de manera controlada y regresa a la posición inicial.",
        errores: "Evita perder el equilibrio o realizar pasos demasiado inestables.",
        variantes: "Zancadas caminando, estáticas o con mancuernas.",
        nivel: "Principiante"
    },

    "pantorrillas": {
        grupo: "Pantorrillas",
        musculos: "Gastrocnemio y sóleo",
        descripcion: "Ejercicio para trabajar la parte inferior de las piernas.",
        tecnica: "Eleva los talones lentamente y baja de forma controlada.",
        errores: "Evita hacer rebotes o utilizar un movimiento demasiado corto.",
        variantes: "De pie, sentado o en máquina.",
        nivel: "Principiante"
    },

    "press hombros": {
        grupo: "Hombros",
        musculos: "Deltoides y tríceps",
        descripcion: "Ejercicio de empuje vertical para los hombros.",
        tecnica: "Mantén una postura estable y empuja el peso hacia arriba de manera controlada.",
        errores: "Evita utilizar demasiado peso o arquear excesivamente la espalda.",
        variantes: "Mancuernas, barra y máquina.",
        nivel: "Intermedio"
    },

    "elevaciones laterales": {
        grupo: "Hombros",
        musculos: "Deltoides laterales",
        descripcion: "Ejercicio de aislamiento para la parte lateral de los hombros.",
        tecnica: "Eleva los brazos hacia los lados con control y vuelve lentamente.",
        errores: "Evita balancearte o utilizar demasiado peso.",
        variantes: "Mancuernas, polea o máquina.",
        nivel: "Principiante"
    },

    "elevaciones posteriores": {
        grupo: "Hombros",
        musculos: "Deltoides posteriores y músculos de la espalda superior",
        descripcion: "Ejercicio para la parte posterior de los hombros.",
        tecnica: "Inclina el torso de forma estable y abre los brazos controladamente.",
        errores: "Evita utilizar impulso.",
        variantes: "Mancuernas, polea o máquina.",
        nivel: "Principiante"
    },

    "curl biceps": {
        grupo: "Bíceps",
        musculos: "Bíceps y músculos del antebrazo",
        descripcion: "Ejercicio clásico para trabajar la flexión del codo.",
        tecnica: "Mantén los codos relativamente estables y flexiona los brazos controladamente.",
        errores: "Evita balancear el cuerpo.",
        variantes: "Barra, mancuernas, polea y banco predicador.",
        nivel: "Principiante"
    },

    "curl martillo": {
        grupo: "Bíceps",
        musculos: "Bíceps, braquial y antebrazo",
        descripcion: "Curl realizado con las palmas enfrentadas.",
        tecnica: "Mantén las manos en posición neutra y flexiona los codos sin balancearte.",
        errores: "No utilices impulso ni demasiado peso.",
        variantes: "Mancuernas
