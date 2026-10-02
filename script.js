const chat = document.getElementById("chat");
const entrada = document.getElementById("entrada");

/* =========================
   BASE DE EJERCICIOS
========================= */

const ejercicios = {
    "press banca": {
        grupo: "Pecho",
        musculos: "Pecho, tríceps y parte frontal de los hombros.",
        tecnica: "Acuéstate en el banco, mantén los pies firmes y baja la barra de manera controlada hacia el pecho. Después empuja hacia arriba manteniendo el control.",
        errores: "Rebotar la barra, perder el control del movimiento o utilizar una carga que no puedas manejar correctamente.",
        variantes: "Press con mancuernas, press inclinado y press en máquina."
    },

    "press inclinado": {
        grupo: "Pecho",
        musculos: "Principalmente la parte superior del pecho, además de hombros y tríceps.",
        tecnica: "Utiliza un banco inclinado y mueve las pesas de forma controlada, manteniendo los pies firmes.",
        errores: "Utilizar demasiado peso, perder el control o arquear demasiado la espalda.",
        variantes: "Mancuernas, barra o máquina."
    },

    "flexiones": {
        grupo: "Pecho",
        musculos: "Pecho, tríceps, hombros y músculos del abdomen que ayudan a estabilizar el cuerpo.",
        tecnica: "Coloca las manos aproximadamente al ancho de los hombros, mantén el cuerpo alineado y baja de forma controlada.",
        errores: "Dejar caer la cadera, levantar demasiado la cadera o hacer el movimiento demasiado rápido.",
        variantes: "Flexiones con rodillas apoyadas, normales o con diferentes posiciones de manos."
    },

    "jalon al pecho": {
        grupo: "Espalda",
        musculos: "Principalmente dorsales y también bíceps.",
        tecnica: "Siéntate correctamente, sujeta la barra y llévala hacia la parte superior del pecho manteniendo el movimiento controlado.",
        errores: "Balancear demasiado el cuerpo o llevar la barra detrás del cuello.",
        variantes: "Diferentes agarres y accesorios."
    },

    "remo": {
        grupo: "Espalda",
        musculos: "Trabaja diferentes músculos de la espalda y también los brazos.",
        tecnica: "Mantén el torso estable y lleva el agarre hacia tu cuerpo de manera controlada.",
        errores: "Encoger demasiado los hombros, encorvar la espalda o utilizar impulso.",
        variantes: "Remo con máquina, polea, barra o mancuernas."
    },

    "dominadas": {
        grupo: "Espalda",
        musculos: "Espalda, bíceps y músculos estabilizadores.",
        tecnica: "Sujeta la barra y eleva el cuerpo manteniendo el movimiento controlado.",
        errores: "Balancearse excesivamente o hacer movimientos bruscos.",
        variantes: "Dominadas asistidas o con diferentes agarres."
    },

    "sentadilla": {
        grupo: "Piernas",
        musculos: "Piernas y glúteos, además de músculos estabilizadores.",
        tecnica: "Coloca los pies en una posición cómoda, flexiona caderas y rodillas de manera controlada y vuelve a subir.",
        errores: "Perder el control del movimiento o utilizar una carga que dificulte mantener una buena técnica.",
        variantes: "Sentadilla con peso corporal, mancuerna, barra o máquina."
    },

    "prensa": {
        grupo: "Piernas",
        musculos: "Principalmente los músculos de las piernas.",
        tecnica: "Coloca correctamente los pies, baja la plataforma de manera controlada y empuja sin bloquear bruscamente las rodillas.",
        errores: "Despegar la cadera del respaldo o utilizar una carga que no puedas controlar.",
        variantes: "Puedes modificar la posición de los pies según la máquina."
    },

    "zancadas": {
        grupo: "Piernas",
        musculos: "Piernas y glúteos, además de músculos que ayudan al equilibrio.",
        tecnica: "Da un paso hacia adelante, flexiona ambas piernas de forma controlada y regresa a la posición inicial.",
        errores: "Perder el equilibrio o hacer el movimiento demasiado rápido.",
        variantes: "Zancadas caminando, estáticas o con mancuernas."
    },

    "curl biceps": {
        grupo: "Bíceps",
        musculos: "Principalmente los bíceps.",
        tecnica: "Mantén los codos cerca del cuerpo y flexiona los brazos de manera controlada.",
        errores: "Balancear el cuerpo o utilizar impulso.",
        variantes: "Barra, mancuernas o máquina."
    },

    "curl martillo": {
        grupo: "Bíceps",
        musculos: "Bíceps y músculos del antebrazo.",
        tecnica: "Mantén las palmas enfrentadas y flexiona los brazos manteniendo los codos estables.",
        errores: "Balancearse o acelerar demasiado el movimiento.",
        variantes: "Alternado, simultáneo o sentado."
    },

    "triceps polea": {
        grupo: "Tríceps",
        musculos: "Principalmente los tríceps.",
        tecnica: "Mantén los codos cerca del cuerpo y empuja el agarre hacia abajo de manera controlada.",
        errores: "Mover demasiado los codos o utilizar impulso.",
        variantes: "Cuerda, barra u otros agarres."
    },

    "press hombros": {
        grupo: "Hombros",
        musculos: "Hombros y tríceps.",
        tecnica: "Mantén una postura estable y empuja las pesas hacia arriba de forma controlada.",
        errores: "Arquear demasiado la espalda o hacer movimientos bruscos.",
        variantes: "Mancuernas, barra o máquina."
    },

    "elevaciones laterales": {
        grupo: "Hombros",
        musculos: "Principalmente la parte lateral de los hombros.",
        tecnica: "Eleva los brazos hacia los lados de forma controlada y regresa lentamente.",
        errores: "Balancear el cuerpo o utilizar demasiado peso.",
        variantes: "Mancuernas, polea o máquina."
    },

    "abdominales": {
        grupo: "Core",
        musculos: "Principalmente los músculos abdominales.",
        tecnica: "Realiza el movimiento de manera controlada y evita tirar del cuello.",
        errores: "Hacer el ejercicio demasiado rápido o forzar el cuello.",
        variantes: "Existen muchas variantes según el nivel y objetivo."
    },

    "plancha": {
        grupo: "Core",
        musculos: "Abdomen y músculos estabilizadores.",
        tecnica: "Apoya los antebrazos y pies, mantén el cuerpo alineado y respira normalmente.",
        errores: "Dejar caer demasiado la cadera o elevarla demasiado.",
        variantes: "Plancha con rodillas apoyadas y plancha lateral."
    }
};


/* =========================
   FUNCIONES DEL CHAT
========================= */

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function agregarMensaje(texto, tipo) {
    const mensaje = document.createElement("div");

    mensaje.className = "mensaje " + tipo;
    mensaje.innerHTML = texto.replace(/\n/g, "<br>");

    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight;
}

function respuestaAleatoria(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}


/* =========================
   RESPUESTAS VARIADAS
========================= */

const saludos = [
    "¡Hola! 👋 Soy GYMBOT. ¿Qué quieres entrenar hoy?",
    "¡Hey! 💪 ¿Qué necesitas saber sobre entrenamiento?",
    "¡Hola! 😎 Estoy listo para ayudarte con tu entrenamiento.",
    "¡Qué tal! 🏋️ Puedes preguntarme sobre ejercicios, rutinas o técnica."
];

const desconocido = [
    "🤔 No reconocí completamente esa pregunta. Prueba decirme qué músculo o ejercicio te interesa.",
    "💡 Puedo ayudarte con rutinas, ejercicios, técnica, calentamiento, cardio, descanso y más.",
    "🧐 No tengo una respuesta específica para eso todavía. Intenta escribirlo de otra manera.",
    "🤖 Todavía estoy aprendiendo. Puedes preguntarme directamente por un ejercicio o grupo muscular.",
    "💪 Prueba con algo como: “dame una rutina de pecho” o “¿qué trabaja la sentadilla?”"
];


/* =========================
   RUTINAS
========================= */

function crearRutina(grupo) {

    const rutinas = {

        pecho: `💪 RUTINA DE PECHO

🔥 Preparación
• Calentamiento general
• Movilidad de hombros

🏋️ Entrenamiento
1. Press banca
2. Press inclinado
3. Flexiones

🎯 En cada ejercicio:
• Prioriza la técnica
• Controla el movimiento
• Usa una carga que puedas manejar

Si eres principiante, empieza aprendiendo correctamente los movimientos.`,

        espalda: `🏋️ RUTINA DE ESPALDA

🔥 Preparación
• Calentamiento
• Movilidad de hombros

💪 Entrenamiento
1. Jalón al pecho
2. Remo
3. Dominadas o dominadas asistidas

🎯 Consejo:
Concéntrate en mover la espalda y evita utilizar demasiado impulso.`,

        piernas: `🦵 RUTINA DE PIERNAS

🔥 Preparación
• Calentamiento
• Movilidad de cadera y piernas

🏋️ Entrenamiento
1. Sentadilla
2. Prensa
3. Zancadas

🎯 Consejo:
Mantén el control durante todo el movimiento y aprende primero la técnica.`,

        hombros: `🔥 RUTINA DE HOMBROS

🏋️ Entrenamiento
1. Press de hombros
2. Elevaciones laterales

🎯 Consejo:
No necesitas utilizar mucho peso para aprender correctamente los ejercicios.`,

        brazos: `💪 RUTINA DE BRAZOS

Bíceps:
• Curl de bíceps
• Curl martillo

Tríceps:
• Tríceps en polea

🎯 Consejo:
Controla la subida y la bajada y evita utilizar impulso.`
    };

    return rutinas[grupo];
}


/* =========================
   BUSCAR EJERCICIO
========================= */

function buscarEjercicio(texto) {

    const equivalencias = {
        "press de banca": "press banca",
        "banca": "press banca",
        "press inclinado": "press inclinado",
        "flexiones": "flexiones",
        "lagartijas": "flexiones",
        "jalon": "jalon al pecho",
        "jalon al pecho": "jalon al pecho",
        "remo": "remo",
        "dominadas": "dominadas",
        "sentadilla": "sentadilla",
        "sentadillas": "sentadilla",
        "prensa": "prensa",
        "zancadas": "zancadas",
        "curl de biceps": "curl biceps",
        "curl biceps": "curl biceps",
        "curl martillo": "curl martillo",
        "triceps": "triceps polea",
        "triceps polea": "triceps polea",
        "press de hombros": "press hombros",
        "press hombros": "press hombros",
        "elevaciones laterales": "elevaciones laterales",
        "abdominales": "abdominales",
        "plancha": "plancha"
    };

    for (const palabra in equivalencias) {

        if (texto.includes(palabra)) {
            return ejercicios[equivalencias[palabra]];
        }
    }

    return null;
}


/* =========================
   RESPONDER
========================= */

function responder(preguntaOriginal) {

    const texto = normalizar(preguntaOriginal);


    /* SALUDOS */

    if (
        texto === "hola" ||
        texto === "holaa" ||
        texto === "hey" ||
        texto.includes("buenos dias") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches")
    ) {
        return respuestaAleatoria(saludos);
    }


    /* IDENTIDAD */

    if (
        texto.includes("quien eres") ||
        texto.includes("que eres") ||
        texto.includes("como te llamas")
    ) {
        return "🤖 Soy GYMBOT, un chatbot escolar diseñado para proporcionar información sobre ejercicio, entrenamiento y hábitos saludables.";
    }


    /* AYUDA */

    if (
        texto.includes("ayuda") ||
        texto.includes("que puedes hacer") ||
        texto.includes("que sabes")
    ) {
        return `🤖 Puedo ayudarte con muchas cosas:

💪 Ejercicios
🏋️ Rutinas
🦵 Grupos musculares
🔥 Calentamiento
🏃 Cardio
⏱️ Descanso
📈 Progreso
⚠️ Errores de técnica
🔄 Variantes

También puedes escribir una pregunta normal y trataré de identificar lo que necesitas.`;
    }


    /* QUÉ HACER PARA ENTRENAR */

    if (
        texto.includes("que debo hacer") ||
        texto.includes("que debo de hacer") ||
        texto.includes("que tengo que hacer") ||
        texto.includes("que hago para entrenar") ||
        texto.includes("como debo entrenar") ||
        texto.includes("como puedo entrenar") ||
        texto.includes("por donde empiezo")
    ) {
        return `🏋️ Para organizar un entrenamiento puedes comenzar así:

1️⃣ Decide qué grupo muscular quieres trabajar.
2️⃣ Haz un calentamiento.
3️⃣ Elige algunos ejercicios adecuados.
4️⃣ Concéntrate en la técnica.
5️⃣ Descansa entre ejercicios.
6️⃣ Termina cuando notes que tu técnica empieza a empeorar.

Si me dices qué quieres entrenar, puedo darte una rutina básica específica.`;
    }


    /* RUTINA HOY */

    if (
        texto.includes("rutina") &&
        (
            texto.includes("hoy") ||
            texto.includes("ahora") ||
            texto.includes("entrenar")
        )
    ) {
        return `💪 Podemos organizar tu entrenamiento según lo que quieras trabajar.

Opciones:

💪 Pecho
🏋️ Espalda
🦵 Piernas
🔥 Hombros
💪 Brazos

Dime cuál quieres trabajar y te preparo una rutina.`;
    }


    /* RUTINAS ESPECÍFICAS */

    if (
        texto.includes("rutina de pecho") ||
        texto.includes("rutina para pecho") ||
        texto.includes("entrenar pecho")
    ) {
        return crearRutina("pecho");
    }

    if (
        texto.includes("rutina de espalda") ||
        texto.includes("rutina para espalda") ||
        texto.includes("entrenar espalda")
    ) {
        return crearRutina("espalda");
    }

    if (
        texto.includes("rutina de piernas") ||
        texto.includes("rutina para piernas") ||
        texto.includes("entrenar piernas")
    ) {
        return crearRutina("piernas");
    }

    if (
        texto.includes("rutina de hombros") ||
        texto.includes("rutina para hombros") ||
        texto.includes("entrenar hombros")
    ) {
        return crearRutina("hombros");
    }

    if (
        texto.includes("rutina de brazos") ||
        texto.includes("rutina para brazos") ||
        texto.includes("entrenar brazos")
    ) {
        return crearRutina("brazos");
    }


    /* PRINCIPIANTE */

    if (
        texto.includes("principiante") ||
        texto.includes("soy nuevo") ||
        texto.includes("estoy empezando") ||
        texto.includes("nunca he entrenado")
    ) {
        return `🌱 Si estás comenzando, lo principal es aprender los movimientos.

Puedes empezar con:

🔥 Calentamiento
🏋️ Ejercicios básicos
⏱️ Descansos adecuados
🎯 Técnica controlada

No necesitas comenzar con cargas pesadas. Primero aprende a realizar correctamente los ejercicios.`;
    }


    /* SERIES Y REPETICIONES */

    if (
        texto.includes("series") ||
        texto.includes("repeticiones") ||
        texto.includes("reps")
    ) {
        return `🔢 Las series y repeticiones dependen del ejercicio, tu experiencia y el objetivo del entrenamiento.

Si estás comenzando, es mejor enfocarte en aprender la técnica y utilizar una cantidad de trabajo que puedas realizar con buena forma.

La calidad del movimiento es más importante que hacer muchas repeticiones rápidamente.`;
    }


    /* DESCANSO */

    if (
        texto.includes("descanso") ||
        texto.includes("descansar") ||
        texto.includes("cuanto descanso")
    ) {
        return `⏱️ El descanso depende del ejercicio y de la intensidad.

Puedes descansar hasta recuperar suficientemente la respiración y sentir que puedes volver a realizar el ejercicio con buena técnica.

Si todavía estás aprendiendo, no tengas prisa entre series.`;
    }


    /* CALENTAMIENTO */

    if (
        texto.includes("calentamiento") ||
        texto.includes("calentar")
    ) {
        return `🔥 El calentamiento sirve para preparar el cuerpo antes de entrenar.

Puedes comenzar con movimiento ligero y después realizar movimientos relacionados con los ejercicios que vas a realizar.

El objetivo es prepararte, no cansarte antes del entrenamiento.`;
    }


    /* CARDIO */

    if (
        texto.includes("cardio") ||
        texto.includes("correr") ||
        texto.includes("bicicleta") ||
        texto.includes("caminadora") ||
        texto.includes("eliptica")
    ) {
        return `🏃 El cardio puede incluir caminar, correr, bicicleta, elíptica u otras actividades.

La intensidad debe adaptarse a tu condición y experiencia. Puedes comenzar de manera gradual y aumentar poco a poco.`;
    }


    /* PROGRESO */

    if (
        texto.includes("progreso") ||
        texto.includes("progresar") ||
        texto.includes("mejorar")
    ) {
        return `📈 Para mejorar en el entrenamiento puedes trabajar progresivamente en:

• Técnica
• Control del movimiento
• Repeticiones
• Carga
• Consistencia

No necesitas aumentar todo al mismo tiempo.`;
    }


    /* MÚSCULOS */

    if (
        texto.includes("musculos") ||
        texto.includes("que trabaja")
    ) {
        const ejercicio = buscarEjercicio(texto);

        if (ejercicio) {
            return `💪 Este ejercicio trabaja principalmente:

${ejercicio.musculos}`;
        }
    }


    /* TÉCNICA */

    if (
        texto.includes("como se hace") ||
        texto.includes("como hacerlo") ||
        texto.includes("tecnica") ||
        texto.includes("como hago")
    ) {
        const ejercicio = buscarEjercicio(texto);

        if (ejercicio) {
            return `🏋️ Para realizarlo correctamente:

${ejercicio.tecnica}`;
        }
    }


    /* ERRORES */

    if (
        texto.includes("errores") ||
        texto.includes("error") ||
        texto.includes("que hago mal")
    ) {
        const ejercicio = buscarEjercicio(texto);

        if (ejercicio) {
            return `⚠️ Algunos errores comunes son:

${ejercicio.errores}`;
        }
    }


    /* VARIANTES */

    if (
        texto.includes("variantes") ||
        texto.includes("variante") ||
        texto.includes("otra forma")
    ) {
        const ejercicio = buscarEjercicio(texto);

        if (ejercicio) {
            return `🔄 Algunas variantes son:

${ejercicio.variantes}`;
        }
    }


    /* EJERCICIO DIRECTO */

    const ejercicio = buscarEjercicio(texto);

    if (ejercicio) {
        return `💪 ${ejercicio.grupo}

${ejercicio.musculos}

🏋️ Técnica:
${ejercicio.tecnica}

⚠️ Errores:
${ejercicio.errores}

🔄 Variantes:
${ejercicio.variantes}`;
    }


    /* GRUPOS MUSCULARES */

    if (
        texto.includes("ejercicios de pecho") ||
        texto.includes("ejercicios para pecho")
    ) {
        return "💪 Para pecho puedes utilizar press banca, press inclinado y flexiones.";
    }

    if (
        texto.includes("ejercicios de espalda") ||
        texto.includes("ejercicios para espalda")
    ) {
        return "🏋️ Para espalda puedes utilizar jalón al pecho, remo y dominadas o variantes asistidas.";
    }

    if (
        texto.includes("ejercicios de piernas") ||
        texto.includes("ejercicios para piernas")
    ) {
        return "🦵 Para piernas puedes trabajar sentadillas, prensa y zancadas.";
    }

    if (
        texto.includes("ejercicios de hombros") ||
        texto.includes("ejercicios para hombros")
    ) {
        return "🔥 Para hombros puedes trabajar press de hombros y elevaciones laterales.";
    }


    /* DESPEDIDA */

    if (
        texto.includes("adios") ||
        texto.includes("bye") ||
        texto.includes("nos vemos") ||
        texto.includes("hasta luego")
    ) {
        return respuestaAleatoria([
            "¡Nos vemos! 👋",
            "¡Hasta luego! 💪",
            "¡Adiós! 🏋️",
            "¡Nos vemos! 😎 Sigue entrenando con buena técnica."
        ]);
    }


    /* RESPUESTA FINAL */

    return respuestaAleatoria(desconocido);
}


/* =========================
   ENVIAR MENSAJE
========================= */

function enviarMensaje() {

    const pregunta = entrada.value.trim();

    if (pregunta === "") {
        return;
    }

    agregarMensaje(pregunta, "usuario");

    entrada.value = "";

    setTimeout(() => {

        const respuesta = responder(pregunta);

        agregarMensaje(respuesta, "bot");

    }, 350);
}


/* =========================
   ENTER
========================= */

entrada.addEventListener(
