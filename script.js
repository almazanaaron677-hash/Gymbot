const chat = document.getElementById("chat");
const entrada = document.getElementById("entrada");

const ejercicios = {
    "press banca": {
        grupo: "Pecho",
        musculos: "Trabaja principalmente el pecho, además de tríceps y hombros.",
        tecnica: "Acuéstate en el banco, coloca los pies firmes en el suelo, baja la barra de forma controlada hacia el pecho y empuja hacia arriba sin perder el control.",
        errores: "Evita rebotar la barra, mover demasiado los hombros o utilizar un peso que no puedas controlar.",
        variantes: "Puedes hacerlo con mancuernas, en máquina o con diferentes inclinaciones."
    },

    "press inclinado": {
        grupo: "Pecho",
        musculos: "Trabaja principalmente el pecho, con mayor participación de la zona superior, además de hombros y tríceps.",
        tecnica: "Usa un banco inclinado, mantén los pies firmes y mueve las pesas de forma controlada.",
        errores: "Evita arquear demasiado la espalda o bajar las pesas sin control.",
        variantes: "Puedes hacerlo con mancuernas, barra o máquina."
    },

    "flexiones": {
        grupo: "Pecho",
        musculos: "Trabajan pecho, tríceps y hombros, además de varios músculos que ayudan a mantener el cuerpo estable.",
        tecnica: "Coloca las manos aproximadamente al ancho de los hombros, mantén el cuerpo alineado y baja de forma controlada.",
        errores: "Evita dejar caer la cadera o mover la cabeza en lugar de mantener el cuerpo estable.",
        variantes: "Puedes hacerlas apoyando las rodillas o usando diferentes posiciones de las manos."
    },

    "jalon al pecho": {
        grupo: "Espalda",
        musculos: "Trabaja principalmente los dorsales y también participa el bíceps.",
        tecnica: "Siéntate correctamente, sujeta la barra y llévala hacia la parte superior del pecho manteniendo el movimiento controlado.",
        errores: "No balancees el cuerpo ni tires de la barra detrás del cuello.",
        variantes: "Puedes variar el agarre y utilizar diferentes accesorios."
    },

    "remo": {
        grupo: "Espalda",
        musculos: "Trabaja diferentes músculos de la espalda y también involucra los brazos.",
        tecnica: "Mantén el torso estable y lleva el agarre hacia tu cuerpo controlando tanto la subida como la bajada.",
        errores: "Evita encorvar demasiado la espalda o utilizar impulso.",
        variantes: "Puedes hacerlo con máquina, polea, barra o mancuernas."
    },

    "dominadas": {
        grupo: "Espalda",
        musculos: "Trabajan principalmente la espalda y también los bíceps y músculos estabilizadores.",
        tecnica: "Sujeta la barra, mantén el cuerpo controlado y eleva el cuerpo sin balancearte demasiado.",
        errores: "Evita hacer movimientos bruscos o utilizar impulso excesivo.",
        variantes: "Puedes utilizar una máquina asistida o una banda de resistencia."
    },

    "sentadilla": {
        grupo: "Piernas",
        musculos: "Trabaja principalmente piernas y glúteos, además de músculos que ayudan a estabilizar el cuerpo.",
        tecnica: "Coloca los pies en una posición cómoda, flexiona las rodillas y caderas manteniendo el control y vuelve a subir.",
        errores: "Evita perder el control de las rodillas o bajar de una manera que te cause dolor.",
        variantes: "Puedes hacerla con tu propio peso, con mancuerna, barra o en máquina."
    },

    "prensa": {
        grupo: "Piernas",
        musculos: "Trabaja principalmente los músculos de las piernas.",
        tecnica: "Coloca correctamente los pies en la plataforma, baja de forma controlada y empuja sin bloquear bruscamente las rodillas.",
        errores: "No despegues la cadera del respaldo ni uses un peso que no puedas controlar.",
        variantes: "La posición de los pies puede modificarse según la máquina y el ejercicio."
    },

    "zancadas": {
        grupo: "Piernas",
        musculos: "Trabajan piernas y glúteos, además de músculos que ayudan al equilibrio.",
        tecnica: "Da un paso hacia adelante, flexiona ambas piernas de manera controlada y vuelve a la posición inicial.",
        errores: "Evita perder el equilibrio o hacer el movimiento demasiado rápido.",
        variantes: "Puedes hacerlas caminando, en el mismo lugar o con mancuernas."
    },

    "curl biceps": {
        grupo: "Bíceps",
        musculos: "Trabaja principalmente los bíceps.",
        tecnica: "Mantén los codos cerca del cuerpo y flexiona los brazos de forma controlada.",
        errores: "Evita balancear el torso o usar impulso para levantar el peso.",
        variantes: "Puedes hacerlo con barra, mancuernas o máquina."
    },

    "curl martillo": {
        grupo: "Bíceps",
        musculos: "Trabaja los bíceps y otros músculos del brazo y antebrazo.",
        tecnica: "Mantén las palmas enfrentadas y flexiona los brazos sin mover demasiado los codos.",
        errores: "Evita balancearte o acelerar demasiado el movimiento.",
        variantes: "Puedes hacerlo de pie, sentado o alternando los brazos."
    },

    "triceps polea": {
        grupo: "Tríceps",
        musculos: "Trabaja principalmente los tríceps.",
        tecnica: "Mantén los codos cerca del cuerpo y empuja el agarre hacia abajo de forma controlada.",
        errores: "Evita mover los codos hacia adelante y atrás durante cada repetición.",
        variantes: "Puedes utilizar diferentes agarres y accesorios."
    },

    "press hombros": {
        grupo: "Hombros",
        musculos: "Trabaja principalmente los hombros y también participan los tríceps.",
        tecnica: "Mantén una postura estable y empuja las pesas hacia arriba de manera controlada.",
        errores: "Evita arquear demasiado la espalda o realizar movimientos bruscos.",
        variantes: "Puedes hacerlo con mancuernas, barra o máquina."
    },

    "elevaciones laterales": {
        grupo: "Hombros",
        musculos: "Trabajan principalmente la parte lateral de los hombros.",
        tecnica: "Levanta los brazos hacia los lados de forma controlada y vuelve lentamente a la posición inicial.",
        errores: "Evita balancear el cuerpo o utilizar demasiado peso.",
        variantes: "Puedes hacerlas con mancuernas, polea o máquina."
    },

    "abdominales": {
        grupo: "Core",
        musculos: "Trabajan principalmente los músculos abdominales.",
        tecnica: "Realiza el movimiento de manera controlada y evita tirar del cuello.",
        errores: "No hagas el ejercicio demasiado rápido ni fuerces el cuello.",
        variantes: "Puedes utilizar diferentes ejercicios para trabajar el abdomen."
    },

    "plancha": {
        grupo: "Core",
        musculos: "Trabaja el abdomen y varios músculos que ayudan a estabilizar el cuerpo.",
        tecnica: "Apoya los antebrazos y pies, mantén el cuerpo alineado y respira normalmente.",
        errores: "Evita dejar caer demasiado la cadera o elevarla demasiado.",
        variantes: "Puedes hacerla con rodillas apoyadas o utilizar variantes laterales."
    }
};


// -----------------------------
// FUNCIONES BÁSICAS
// -----------------------------

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


function agregarMensaje(texto, tipo) {
    const mensaje = document.createElement("div");

    mensaje.className = `mensaje ${tipo}`;

    mensaje.innerHTML = texto.replace(/\n/g, "<br>");

    chat.appendChild(mensaje);

    chat.scrollTop = chat.scrollHeight;
}


// -----------------------------
// RESPUESTAS ALEATORIAS
// -----------------------------

const respuestasGenerales = [
    "Claro 💪 Cuéntame qué parte del entrenamiento quieres trabajar y te explico.",
    "¡Sí! 🏋️ Puedo ayudarte con ejercicios, técnica, calentamiento y entrenamiento.",
    "Vamos paso a paso 💪 Dime qué ejercicio o grupo muscular te interesa.",
    "¡Perfecto! 🤖 Pregúntame sobre algún ejercicio y te explico cómo realizarlo.",
    "Estoy listo 😎 Puedes preguntarme por ejercicios, músculos, técnica o descanso."
];


const respuestasNoEntiendo = [
    "🤔 No entendí completamente la pregunta. Puedes decirme el ejercicio o grupo muscular que te interesa.",
    "💪 Creo que necesito un poquito más de información. Prueba con algo como: “rutina de pecho” o “cómo se hace una sentadilla”.",
    "🧐 Esa pregunta todavía no la reconozco. Puedes preguntarme sobre ejercicios, músculos, técnica, calentamiento o cardio.",
    "🤖 Todavía estoy aprendiendo. Intenta preguntarme de otra forma y buscaré una respuesta.",
    "💡 Puedes probar con: “¿qué ejercicios hay para espalda?”, “¿cómo hago una sentadilla?” o “¿qué hago para calentar?”"
];


function respuestaAleatoria(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}


// -----------------------------
// BUSCAR EJERCICIO
// -----------------------------

function buscarEjercicio(texto) {

    for (const nombre in ejercicios) {

        const palabras = nombre.split(" ");

        let coincide = true;

        for (const palabra of palabras) {
            if (!texto.includes(palabra)) {
                coincide = false;
                break;
            }
        }

        if (coincide) {
            return ejercicios[nombre];
        }
    }

    return null;
}


// -----------------------------
// RUTINAS
// -----------------------------

function rutinaPorGrupo(grupo) {

    if (grupo === "pecho") {
        return `💪 Rutina básica de pecho:

1. Calentamiento general.
2. Press banca.
3. Press inclinado.
4. Flexiones.

Haz los ejercicios con una técnica controlada y utiliza una carga que puedas manejar correctamente.`;
    }

    if (grupo === "espalda") {
        return `🏋️ Rutina básica de espalda:

1. Calentamiento.
2. Jalón al pecho.
3. Remo.
4. Dominadas o una variante asistida.

Concéntrate en controlar el movimiento y mantener una postura estable.`;
    }

    if (grupo === "piernas") {
        return `🦵 Rutina básica de piernas:

1. Calentamiento.
2. Sentadilla.
3. Prensa.
4. Zancadas.

Empieza con movimientos que puedas realizar con buena técnica.`;
    }

    if (grupo === "hombros") {
        return `🔥 Rutina básica de hombros:

1. Calentamiento.
2. Press de hombros.
3. Elevaciones laterales.

No necesitas utilizar mucho peso para aprender correctamente los movimientos.`;
    }

    return null;
}


// -----------------------------
// RESPONDER
// -----------------------------

function responder(preguntaOriginal) {

    const texto = normalizar(preguntaOriginal);


    // SALUDOS

    if (
        texto === "hola" ||
        texto === "holaa" ||
        texto === "hey" ||
        texto.includes("buenos dias") ||
        texto.includes("buenas tardes") ||
        texto.includes("buenas noches")
    ) {
        return respuestaAleatoria([
            "¡Hola! 👋 Soy GYMBOT. ¿Qué quieres entrenar hoy?",
            "¡Hey! 💪 ¿En qué ejercicio necesitas ayuda?",
            "¡Hola! 😎 Estoy listo para hablar de entrenamiento.",
            "¡Qué tal! 🏋️ ¿Quieres una rutina o información sobre algún ejercicio?"
        ]);
    }


    // IDENTIDAD

    if (
        texto.includes("quien eres") ||
        texto.includes("que eres") ||
        texto.includes("como te llamas")
    ) {
        return "🤖 Soy GYMBOT, un chatbot escolar creado para ofrecer información básica sobre ejercicio, entrenamiento y hábitos saludables.";
    }


    // AYUDA

    if (
        texto.includes("ayuda") ||
        texto.includes("que puedes hacer") ||
        texto.includes("que sabes hacer")
    ) {
        return `💪 Puedo ayudarte con:

• Ejercicios
• Músculos
• Técnica
• Errores comunes
• Variantes
• Calentamiento
• Cardio
• Descanso
• Rutinas básicas

Puedes preguntarme directamente lo que necesites.`;
    }


    // RUTINA GENERAL

    if (
        texto.includes("rutina") &&
        (
            texto.includes("hoy") ||
            texto.includes("puedo hacer") ||
            texto.includes("recomiendas") ||
            texto.includes("que hago")
        )
    ) {
        return `🏋️ Puedes organizar tu entrenamiento según el grupo muscular que quieras trabajar.

Por ejemplo:

💪 Pecho
🏋️ Espalda
🦵 Piernas
🔥 Hombros

Si me dices cuál quieres entrenar, te puedo mostrar una rutina básica.`;
    }


    // RUTINAS POR GRUPO

    if (
        texto.includes("rutina de pecho") ||
        texto.includes("rutina para pecho") ||
        texto.includes("entrenar pecho")
    ) {
        return rutinaPorGrupo("pecho");
    }

    if (
        texto.includes("rutina de espalda") ||
        texto.includes("rutina para espalda") ||
        texto.includes("entrenar espalda")
    ) {
        return rutinaPorGrupo("espalda");
    }

    if (
        texto.includes("rutina de piernas") ||
        texto.includes("rutina para piernas") ||
        texto.includes("entrenar piernas")
    ) {
        return rutinaPorGrupo("piernas");
    }

    if (
        texto.includes("rutina de hombros") ||
        texto.includes("rutina para hombros") ||
        texto.includes("entrenar hombros")
    ) {
        return rutinaPorGrupo("hombros");
    }


    // PRINCIPIANTE

    if (
        texto.includes("principiante") ||
        texto.includes("soy nuevo") ||
        texto.includes("estoy empezando")
    ) {
        return `🌱 Si estás empezando, enfócate primero en aprender la técnica.

Una sesión sencilla puede incluir:

• Calentamiento
• Algunos ejercicios básicos
• Descansos adecuados
• Movimientos controlados

No necesitas empezar con cargas pesadas.`;
    }


    // CALENTAMIENTO

    if (
        texto.includes("calentamiento") ||
        texto.includes("calentar")
    ) {
        return `🔥 El calentamiento prepara tu cuerpo para la actividad.

Puedes comenzar con unos minutos de movimiento ligero y después realizar movimientos relacionados con los ejercicios que vas a hacer.

La idea es prepararte, no agotarte antes de entrenar.`;
    }


    // CARDIO

    if (
        texto.includes("cardio") ||
        texto.includes("correr") ||
        texto.includes("caminadora") ||
        texto.includes("bicicleta")
    ) {
        return `🏃 El cardio incluye actividades como caminar, correr, bicicleta o utilizar una máquina elíptica.

La intensidad puede ajustarse según tu condición y experiencia. Empieza de manera progresiva.`;
    }


    // DESCANSO

    if (
        texto.includes("descanso") ||
        texto.includes("descansar") ||
        texto.includes("cuanto descanso")
    ) {
        return `⏱️ El descanso depende del ejercicio y de la intensidad.

Para ejercicios generales, puedes descansar lo suficiente para recuperar la respiración y mantener una buena técnica en la siguiente serie.

Si todavía estás aprendiendo, prioriza la calidad del movimiento.`;
    }


    // PROGRESO

    if (
        texto.includes("progresar") ||
        texto.includes("progreso") ||
        texto.includes("mejorar")
    ) {
        return `📈 Para progresar en el entrenamiento puedes trabajar poco a poco en tu técnica, control, repeticiones o carga.

Lo importante es hacerlo de manera gradual y mantener una buena ejecución.`;
    }


    // EJERCICIO ESPECÍFICO

    const ejercicio = buscarEjercicio(texto);

    if (ejercicio) {

        if (
            texto.includes("musculo") ||
            texto.includes("trabaja") ||
            texto.includes("sirve")
        ) {
            return `💪 ${ejercicio.musculos}`;
        }

        if (
            texto.includes("como se hace") ||
            texto.includes("como hacerlo") ||
            texto.includes("tecnica") ||
            texto.includes("hacerlo")
        ) {
            return `🏋️ Técnica: ${ejercicio.tecnica}`;
        }

        if (
            texto.includes("error") ||
            texto.includes("errores") ||
            texto.includes("mal")
        ) {
            return `⚠️ Errores comunes: ${ejercicio.errores}`;
        }

        if (
            texto.includes("variante") ||
            texto.includes("variantes") ||
            texto.includes("otra forma")
        ) {
            return `🔄 Variantes: ${ejercicio.variantes}`;
        }

        return `💪 ${ejercicio.grupo}

${ejercicio.musculos}

🏋️ Técnica:
${ejercicio.tecnica}

⚠️ Errores comunes:
${ejercicio.errores}`;
    }


    // GRUPOS MUSCULARES

    if (
        texto.includes("ejercicios para pecho") ||
        texto.includes("ejercicios de pecho")
    ) {
        return "💪 Para pecho puedes trabajar con press banca, press inclinado y flexiones.";
    }

    if (
        texto.includes("ejercicios para espalda") ||
        texto.includes("ejercicios de espalda")
    ) {
        return "🏋️ Para espalda puedes trabajar con jalón al pecho, remo y dominadas o variantes asistidas.";
    }

    if (
        texto.includes("ejercicios para piernas") ||
        texto.includes("ejercicios de piernas")
    ) {
        return "🦵 Para piernas puedes trabajar con sentadilla, prensa y zancadas.";
    }

    if (
        texto.includes("ejercicios para hombros") ||
        texto.includes("ejercicios de hombros")
    ) {
        return "🔥 Para hombros puedes trabajar con press de hombros y elevaciones laterales.";
    }


    // DESPEDIDA

    if (
        texto.includes("adios") ||
        texto.includes("bye") ||
        texto.includes("nos vemos") ||
        texto.includes("hasta luego")
    ) {
        return respuestaAleatoria([
            "¡Nos vemos! 👋 Sigue entrenando con buena técnica.",
            "¡Hasta luego! 💪 Cuídate y entrena de forma segura.",
            "¡Adiós! 🏋️ Aquí estará GYMBOT cuando necesites información.",
            "¡Nos vemos! 😎"
        ]);
    }


    // RESPUESTAS GENERALES

    return respuestaAleatoria(respuestasNoEntiendo);
}


// -----------------------------
// ENVIAR MENSAJE
// -----------------------------

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


// -----------------------------
// ENTER PARA ENVIAR
// -----------------------------

entrada.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        enviarMensaje();
    }

});
