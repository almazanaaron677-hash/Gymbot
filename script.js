// ==========================================
// GYMBOT - CHATBOT DE GIMNASIO
// ==========================================

const chat = document.getElementById("chat");
const entrada = document.getElementById("entrada");

// ==========================================
// BASE DE CONOCIMIENTOS
// ==========================================

const ejercicios = {
    "press banca": {
        grupo: "pecho",
        musculos: "pectorales, tríceps y deltoides anterior",
        tecnica: "Acuéstate en el banco, coloca los pies firmes en el suelo, baja la barra de forma controlada hacia el pecho y vuelve a empujarla.",
        errores: "No rebotes la barra, no pierdas el control y evita utilizar un peso que no puedas manejar correctamente.",
        variantes: "Press inclinado, press declinado y press con mancuernas."
    },

    "press inclinado": {
        grupo: "pecho",
        musculos: "pectoral superior, tríceps y deltoides anterior",
        tecnica: "Utiliza un banco inclinado, mantén los pies firmes y baja el peso de manera controlada antes de empujar.",
        errores: "Evita bajar el peso sin control o utilizar demasiado peso.",
        variantes: "Barra, mancuernas y máquina."
    },

    "flexiones": {
        grupo: "pecho",
        musculos: "pectorales, tríceps, hombros y abdomen",
        tecnica: "Coloca las manos aproximadamente al ancho de los hombros, mantén el cuerpo alineado y baja de forma controlada.",
        errores: "No dejes caer la cadera ni hagas movimientos bruscos.",
        variantes: "Flexiones inclinadas, normales y diferentes posiciones de manos."
    },

    "jalon al pecho": {
        grupo: "espalda",
        musculos: "dorsales, bíceps y músculos de la espalda",
        tecnica: "Siéntate correctamente, fija las piernas y lleva la barra hacia la parte superior del pecho de manera controlada.",
        errores: "Evita balancearte demasiado o tirar de la barra bruscamente.",
        variantes: "Agarre amplio, cerrado y diferentes accesorios."
    },

    "remo": {
        grupo: "espalda",
        musculos: "dorsales, romboides, trapecios y bíceps",
        tecnica: "Mantén el torso estable y lleva el agarre hacia tu cuerpo controlando tanto la subida como la bajada.",
        errores: "Evita utilizar demasiado impulso o encorvar excesivamente la espalda.",
        variantes: "Remo con máquina, mancuerna, barra o polea."
    },

    "dominadas": {
        grupo: "espalda",
        musculos: "dorsales, bíceps y antebrazos",
        tecnica: "Sujeta la barra y eleva tu cuerpo de forma controlada evitando balancearte excesivamente.",
        errores: "Evita utilizar demasiado impulso.",
        variantes: "Dominadas asistidas y diferentes agarres."
    },

    "sentadilla": {
        grupo: "piernas",
        musculos: "cuádriceps, glúteos, isquiotibiales y músculos estabilizadores",
        tecnica: "Coloca los pies en una posición cómoda, flexiona cadera y rodillas de manera controlada y vuelve a subir.",
        errores: "No pierdas el control del movimiento ni utilices una carga que no puedas manejar correctamente.",
        variantes: "Sentadilla libre, goblet y otras variantes."
    },

    "prensa": {
        grupo: "piernas",
        musculos: "cuádriceps, glúteos e isquiotibiales",
        tecnica: "Coloca los pies firmes en la plataforma y empuja controladamente sin bloquear las rodillas.",
        errores: "No despegues la espalda del respaldo ni utilices una carga que no puedas controlar.",
        variantes: "Diferentes posiciones de pies y máquinas."
    },

    "zancadas": {
        grupo: "piernas",
        musculos: "cuádriceps, glúteos e isquiotibiales",
        tecnica: "Da un paso hacia delante, flexiona las rodillas de manera controlada y vuelve a la posición inicial.",
        errores: "Evita perder el equilibrio o hacer movimientos bruscos.",
        variantes: "Zancadas caminando, estáticas o con mancuernas."
    },

    "curl biceps": {
        grupo: "bíceps",
        musculos: "bíceps y antebrazos",
        tecnica: "Mantén los codos relativamente estables y flexiona los brazos controladamente.",
        errores: "Evita balancear el cuerpo para levantar el peso.",
        variantes: "Barra, mancuernas, polea y banco predicador."
    },

    "curl martillo": {
        grupo: "bíceps",
        musculos: "bíceps, braquial y antebrazo",
        tecnica: "Mantén las palmas enfrentadas y flexiona los codos sin balancearte.",
        errores: "Evita utilizar demasiado peso o impulso.",
        variantes: "Mancuernas y polea."
    },

    "triceps polea": {
        grupo: "tríceps",
        musculos: "tríceps",
        tecnica: "Mantén los codos cerca del cuerpo y extiende los brazos lentamente.",
        errores: "Evita mover demasiado los hombros.",
        variantes: "Cuerda, barra y diferentes agarres."
    },

    "press hombros": {
        grupo: "hombros",
        musculos: "deltoides y tríceps",
        tecnica: "Mantén una postura estable y empuja el peso hacia arriba de manera controlada.",
        errores: "Evita utilizar demasiado peso o arquear excesivamente la espalda.",
        variantes: "Mancuernas, barra y máquina."
    },

    "elevaciones laterales": {
        grupo: "hombros",
        musculos: "deltoides laterales",
        tecnica: "Eleva los brazos hacia los lados con control y vuelve lentamente.",
        errores: "Evita balancearte o utilizar demasiado peso.",
        variantes: "Mancuernas, polea y máquina."
    },

    "abdominales": {
        grupo: "abdomen",
        musculos: "recto abdominal y músculos estabilizadores",
        tecnica: "Realiza el movimiento lentamente y evita tirar del cuello.",
        errores: "Evita hacer movimientos bruscos.",
        variantes: "Crunch, elevaciones de piernas y otros ejercicios de core."
    },

    "plancha": {
        grupo: "abdomen",
        musculos: "abdomen, core, hombros y músculos estabilizadores",
        tecnica: "Mantén el cuerpo alineado mientras sostienes la posición y contraes el abdomen.",
        errores: "Evita hundir o levantar demasiado la cadera.",
        variantes: "Plancha lateral y otras variantes."
    }
};


// ==========================================
// NORMALIZAR TEXTO
// ==========================================

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


// ==========================================
// MOSTRAR MENSAJE
// ==========================================

function agregarMensaje(tipo, texto) {

    const mensaje = document.createElement("div");

    mensaje.className = "mensaje " + tipo;

    mensaje.innerHTML = texto;

    chat.appendChild(mensaje);

    chat.scrollTop = chat.scrollHeight;
}


// ==========================================
// BUSCAR EJERCICIO
// ==========================================

function buscarEjercicio(texto) {

    const pregunta = normalizar(texto);

    for (const nombre in ejercicios) {

        if (pregunta.includes(nombre)) {
            return ejercicios[nombre];
        }
    }

    return null;
}


// ==========================================
// RESPUESTA DEL CHATBOT
// ==========================================

function responder(pregunta) {

    const texto = normalizar(pregunta);

    // SALUDOS
    if (
        texto === "hola" ||
        texto.includes("hola gymbot") ||
        texto.includes("buenas") ||
        texto.includes("hey")
    ) {
        return "¡Hola! 👋 Soy GYMBOT. ¿Qué quieres saber sobre el gimnasio?";
    }


    // PRESENTACIÓN
    if (
        texto.includes("quien eres") ||
        texto.includes("que eres")
    ) {
        return "Soy <b>GYMBOT</b> 💪, un chatbot escolar especializado en ejercicio, entrenamiento y conocimientos básicos del gimnasio.";
    }


    // AYUDA
    if (
        texto.includes("ayuda") ||
        texto.includes("que puedes hacer") ||
        texto.includes("que sabes")
    ) {
        return `
        Puedo conversar contigo sobre:<br><br>
        💪 Ejercicios<br>
        🧠 Músculos<br>
        📖 Técnica<br>
        ⚠️ Errores comunes<br>
        🔄 Variantes<br>
        🏋️ Máquinas<br>
        🦵 Piernas<br>
        💪 Pecho<br>
        🏋️ Espalda<br>
        🔥 Hombros<br>
        💪 Brazos<br>
        🔥 Abdomen<br>
        🏃 Cardio<br>
        🔥 Calentamiento<br>
        😴 Descanso<br><br>
        Puedes preguntarme cualquier cosa relacionada con estos temas.
        `;
    }


    // CALENTAMIENTO
    if (texto.includes("calentamiento")) {
        return "Antes de entrenar puedes hacer unos minutos de actividad suave y movimientos dinámicos. El objetivo es preparar el cuerpo para la sesión.";
    }


    // CARDIO
    if (texto.includes("cardio")) {
        return "Algunos ejemplos de cardio son caminar, correr, bicicleta, nadar o utilizar máquinas cardiovasculares. La intensidad depende de la actividad y del nivel de la persona.";
    }


    // DESCANSO
    if (texto.includes("descanso")) {
        return "El descanso es una parte importante del entrenamiento. El cuerpo necesita tiempo para recuperarse entre sesiones.";
    }


    // PECHO
    if (
        texto.includes("ejercicios para pecho") ||
        texto.includes("ejercicios de pecho")
    ) {
        return "Para pecho puedes consultar press banca, press inclinado, flexiones y aperturas. 💪 ¿Quieres que te explique alguno?";
    }


    // ESPALDA
    if (
        texto.includes("ejercicios para espalda") ||
        texto.includes("ejercicios de espalda")
    ) {
        return "Para espalda puedes consultar jalón al pecho, remo, dominadas y otros ejercicios de tracción. 🏋️ ¿Cuál quieres conocer?";
    }


    // PIERNAS
    if (
        texto.includes("ejercicios para piernas") ||
        texto.includes("ejercicios de piernas")
    ) {
        return "Para piernas puedes consultar sentadillas, prensa, zancadas y curl femoral. 🦵 ¿Quieres información sobre alguno?";
    }


    // EJERCICIO ESPECÍFICO
    const ejercicio = buscarEjercicio(pregunta);

    if (ejercicio) {

        if (
            texto.includes("musculo") ||
            texto.includes("musculos") ||
            texto.includes("trabaja")
        ) {
            return `💪 Este ejercicio trabaja principalmente: <b>${ejercicio.musculos}</b>.`;
        }


        if (
            texto.includes("como se hace") ||
            texto.includes("tecnica") ||
            texto.includes("hacer")
        ) {
            return `📖 Para realizarlo: ${ejercicio.tecnica}`;
        }


        if (
            texto.includes("error") ||
            texto.includes("errores")
        ) {
            return `⚠️ Algunos errores comunes son: ${ejercicio.errores}`;
        }


        if (
            texto.includes("variante") ||
            texto.includes("variantes")
        ) {
            return `🔄 Algunas variantes son: ${ejercicio.variantes}`;
        }


        return `
        💪 <b>Grupo:</b> ${ejercicio.grupo}<br><br>
        🧠 <b>Músculos:</b> ${ejercicio.musculos}<br><br>
        📖 <b>Cómo se realiza:</b> ${ejercicio.tecnica}<br><br>
        ⚠️ <b>Errores:</b> ${ejercicio.errores}<br><br>
        🔄 <b>Variantes:</b> ${ejercicio.variantes}
        `;
    }


    // DESPEDIDA
    if (
        texto.includes("adios") ||
        texto.includes("hasta luego")
    ) {
        return "¡Hasta luego! 👋 Cuando quieras seguir hablando de gimnasio, aquí estará GYMBOT.";
    }


    // RESPUESTA GENERAL
    return `
    🤔 Todavía no tengo información específica sobre eso en mi base de conocimientos.<br><br>
    Puedes preguntarme, por ejemplo:<br>
    • ¿Qué músculos trabaja el press banca?<br>
    • ¿Cómo se hace una sentadilla?<br>
    • ¿Qué errores tiene el curl de bíceps?<br>
    • ¿Qué ejercicios hay para espalda?<br>
    • ¿Qué variantes tiene el press banca?
    `;
}


// ==========================================
// ENVIAR MENSAJE
// ==========================================

function enviarMensaje() {

    const texto = entrada.value.trim();

    if (texto === "") {
        return;
    }

    // Mensaje del usuario
    agregarMensaje("usuario", texto);

    // Limpiar caja
    entrada.value = "";

    // Respuesta del bot
    setTimeout(function() {

        const respuesta = responder(texto);

        agregarMensaje("bot", respuesta);

    }, 400);
}


// ==========================================
// ENTER PARA ENVIAR
// ==========================================

entrada.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        enviarMensaje();
    }

});


// ==========================================
// MENSAJE INICIAL
// ==========================================

agregarMensaje(
    "bot",
    "¡Hola! 👋 Soy <b>GYMBOT</b>. Podemos conversar sobre ejercicios, músculos, técnica, errores, variantes, cardio y mucho más. 💪"
);
