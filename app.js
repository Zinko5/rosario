// Datos del Santo Rosario
const PRAYERS = {
    credo: {
        name: "El Credo",
        text: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre Todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."
    },
    padreNuestro: {
        name: "Padre Nuestro",
        text: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."
    },
    aveMaria: {
        name: "Ave María",
        text: "Dios te salve, María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén."
    },
    gloria: {
        name: "El Gloria",
        text: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."
    },
    fatima: {
        name: "Oración de Fátima",
        text: "Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu divina misericordia. Amén."
    },
    gloriaFatima: {
        name: "Gloria y Oración de Fátima",
        text: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.\n\n*Y después:*\n\nOh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu divina misericordia. Amén."
    },
    salve: {
        name: "La Salve",
        text: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar y gozar las promesas de nuestro Señor Jesucristo. Amén."
    }
};

const MYSTERIES = {
    gozosos: {
        name: "Misterios Gozosos (Lunes y Sábado)",
        list: [
            { title: "1. La Encarnación del Hijo de Dios", desc: "El Fiat voluntario de María como un acto de la razón que somete libremente la voluntad humana al orden perfecto y trascendente de la creación." },
            { title: "2. La Visitación de María a Santa Isabel", desc: "María viaja a prisa a la montaña para ayudar a su prima Isabel, quien la llama 'bendita entre todas las mujeres'." },
            { title: "3. El Nacimiento de Jesús", desc: "Jesús nace en un humilde pesebre en Belén rodeado de amor y adorado por pastores." },
            { title: "4. La Presentación en el Templo", desc: "María y José presentan al Niño en el templo para cumplir la Ley, donde el anciano Simeón lo bendice." },
            { title: "5. El Niño Jesús perdido y hallado", desc: "Después de buscarlo tres días con angustia, encuentran a Jesús en el templo hablando con los sabios." }
        ]
    },
    dolorosos: {
        name: "Misterios Dolorosos (Martes y Viernes)",
        list: [
            { title: "1. La Oración en el Huerto", desc: "Jesús ora con angustia en Getsemaní aceptando la voluntad del Padre antes de ser entregado." },
            { title: "2. La Flagelación", desc: "El suplicio físico de Jesucristo como la asunción voluntaria e histórica de una deuda jurídica; un acto de justicia absoluta y reparación frente a la transgresión moral." },
            { title: "3. La Coronación de espinas", desc: "Los soldados le ponen una corona de espinas, burlándose de su realeza y haciéndole sufrir." },
            { title: "4. Jesús con la Cruz a cuestas", desc: "Cargando el pesado madero de la cruz, Jesús camina hacia el Calvario por amor a nosotros." },
            { title: "5. La Crucifixión y Muerte", desc: "Jesús es clavado en la cruz y muere para salvarnos y darnos vida eterna." }
        ]
    },
    gloriosos: {
        name: "Misterios Gloriosos (Miércoles y Domingo)",
        list: [
            { title: "1. La Resurrección", desc: "Jesús vence a la muerte y resucita victorioso al tercer día, abriendo las puertas del cielo." },
            { title: "2. La Ascensión", desc: "Jesús sube al cielo a la vista de sus discípulos para sentarse a la derecha del Padre." },
            { title: "3. La Venida del Espíritu Santo", desc: "El Espíritu Santo desciende sobre María y los Apóstoles reunidos en el Cenáculo en forma de lenguas de fuego." },
            { title: "4. La Asunción de María", desc: "La Virgen María es llevada en cuerpo y alma al cielo por los ángeles al final de su vida terrenal." },
            { title: "5. La Coronación de María", desc: "María es coronada como Reina de todo lo creado en el cielo, rodeada de gloria." }
        ]
    },
    luminosos: {
        name: "Misterios Luminosos (Jueves)",
        list: [
            { title: "1. El Bautismo en el Jordán", desc: "Jesús es bautizado por Juan, el Espíritu desciende como paloma y la voz del Padre proclama: 'Este es mi Hijo amado'." },
            { title: "2. Las Bodas de Caná", desc: "A petición de María, Jesús realiza su primer milagro convirtiendo el agua en vino excelente." },
            { title: "3. El Anuncio del Reino de Dios", desc: "La proclamación contundente de la Verdad Absoluta y la exigencia del Reino de Dios, demandando del hombre una metanoia (conversión) metódica, racional y de vida." },
            { title: "4. La Transfiguración", desc: "Jesús revela su gloria divina resplandeciente en el monte Tabor ante Pedro, Santiago y Juan." },
            { title: "5. La Institución de la Eucaristía", desc: "En la Última Cena, Jesús nos entrega su Cuerpo y Sangre como alimento de vida eterna." }
        ]
    }
};

const DAY_MAP = {
    lunes: "gozosos",
    martes: "dolorosos",
    miercoles: "gloriosos",
    jueves: "luminosos",
    viernes: "dolorosos",
    sabado: "gozosos",
    domingo: "gloriosos"
};

// Variables de Estado
let currentStepIndex = 0;
let rosarySteps = [];
let selectedDay = "lunes";

// Elementos del DOM
const screenWelcome = document.getElementById("screen-welcome");
const screenPray = document.getElementById("screen-pray");
const screenFinish = document.getElementById("screen-finish");
const daySelector = document.getElementById("day-selector");
const mysteriesPreview = document.getElementById("mysteries-preview");
const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const currentDayBadge = document.getElementById("current-day-badge");

const progressBar = document.getElementById("progress-bar");
const phaseLabel = document.getElementById("phase-label");
const stepCounter = document.getElementById("step-counter");
const actionInstruction = document.getElementById("action-instruction");
const mysteryTitle = document.getElementById("mystery-title");
const mysteryDesc = document.getElementById("mystery-desc");
const prayerName = document.getElementById("prayer-name");
const prayerText = document.getElementById("prayer-text");
const rosarySvgContainer = document.getElementById("rosary-svg-container");

// Iniciar aplicación
document.addEventListener("DOMContentLoaded", () => {
    initDaySelection();
    setupEventListeners();
});

// Detectar el día actual y configurar el selector
function initDaySelection() {
    const daysEn = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const todayIndex = new Date().getDay();
    selectedDay = daysEn[todayIndex];
    daySelector.value = selectedDay;
    
    updateDayBadge();
    updateMysteriesPreview();
}

function updateDayBadge() {
    const key = DAY_MAP[selectedDay];
    const mysteryType = capitalize(key); // e.g. "Gozosos"
    currentDayBadge.textContent = `${capitalize(selectedDay)} (Misterios ${mysteryType})`;
}

function setupEventListeners() {
    daySelector.addEventListener("change", (e) => {
        selectedDay = e.target.value;
        updateDayBadge();
        updateMysteriesPreview();
    });

    btnStart.addEventListener("click", startRosario);
    btnPrev.addEventListener("click", prevStep);
    btnNext.addEventListener("click", nextStep);
    btnRestart.addEventListener("click", restartRosario);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Actualizar la vista previa de misterios en la bienvenida
function updateMysteriesPreview() {
    const key = DAY_MAP[selectedDay];
    const mysteryData = MYSTERIES[key];
    
    mysteriesPreview.replaceChildren();
    
    const h4 = document.createElement("h4");
    h4.textContent = mysteryData.name;
    h4.style.marginBottom = "0.5rem";
    h4.style.color = "var(--accent-gold)";
    mysteriesPreview.appendChild(h4);

    const ul = document.createElement("ul");
    mysteryData.list.forEach((m, idx) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = `${idx + 1}.`;
        li.appendChild(span);
        
        const textNode = document.createTextNode(` ${m.title.substring(3)}`);
        li.appendChild(textNode);
        ul.appendChild(li);
    });
    mysteriesPreview.appendChild(ul);
}

// Genera la secuencia exacta de pasos para rezar el rosario
function buildRosarySteps() {
    const key = DAY_MAP[selectedDay];
    const activeMysteries = MYSTERIES[key].list;
    const steps = [];

    // 1. Cruz
    steps.push({
        id: "inicio-cruz",
        beadId: "bead-cross",
        phase: "Inicio",
        action: "Sostén la Cruz",
        title: "Persígnate y reza El Credo",
        desc: "Haz la señal de la cruz en tu cuerpo santiguándote y luego reza la oración del Credo.",
        prayer: PRAYERS.credo
    });

    // 2. Cuenta 1 (Separada/PN)
    steps.push({
        id: "inicio-pn-1",
        beadId: "bead-intro-pn-1",
        phase: "Inicio",
        action: "Pasa a la 1ª cuenta colgante (Grande/Separada)",
        title: "Reza el primer Padre Nuestro",
        desc: "Dedica este momento a preparar tu corazón para la meditación de los misterios.",
        prayer: PRAYERS.padreNuestro
    });

    // 3. Cuentas 2, 3 y 4 (Agrupadas/AV)
    for (let i = 1; i <= 3; i++) {
        steps.push({
            id: `inicio-av-${i}`,
            beadId: `bead-intro-av-${i}`,
            phase: "Inicio",
            action: `Pasa a la ${i + 1}ª cuenta colgante`,
            title: `Reza 1 Ave María (${i} de 3)`,
            desc: "Para el crecimiento de la fe, la esperanza y la caridad en nosotros.",
            prayer: PRAYERS.aveMaria
        });
    }

    // 4. Espacio vacío (Gloria)
    steps.push({
        id: "inicio-gl",
        beadId: "bead-intro-space",
        phase: "Inicio",
        action: "En el espacio vacío después de la cuenta 4",
        title: "Reza el Gloria",
        desc: "Damos gloria a la Santísima Trinidad para culminar la preparación inicial.",
        prayer: PRAYERS.gloria
    });

    // 5. Cuenta 5 (Separada/Misterio 1 + PN)
    steps.push({
        id: "inicio-pn-2",
        beadId: "bead-intro-pn-2",
        phase: "Decena 1",
        action: "Pasa a la 5ª cuenta colgante (Grande/Separada) antes de la medalla",
        title: "Anuncia el 1º Misterio y reza 1 Padre Nuestro",
        desc: activeMysteries[0].title + ": " + activeMysteries[0].desc + "\n\n*Medita este misterio y reza el Padre Nuestro.*",
        prayer: PRAYERS.padreNuestro
    });

    // 6. Decena 1 (10 Ave Marías)
    for (let a = 1; a <= 10; a++) {
        steps.push({
            id: `decena-0-av-${a}`,
            beadId: `bead-decena-av-0-${a}`,
            phase: "Decena 1",
            action: `Pasa a la cuenta ${a} de la decena 1`,
            title: `Reza 1 Ave María (${a} de 10)`,
            desc: `Meditando sobre el misterio: ${activeMysteries[0].title.substring(3)}.`,
            prayer: PRAYERS.aveMaria
        });
    }

    // Gloria + Fátima de Decena 1
    steps.push({
        id: "decena-0-gl-fat",
        beadId: "bead-decena-space-0",
        phase: "Decena 1",
        action: "En el espacio al terminar la decena 1",
        title: "Reza el Gloria y la Oración de Fátima",
        desc: "Damos gloria y rezamos la jaculatoria de Fátima.",
        prayer: PRAYERS.gloriaFatima
    });

    // Decenas 2 a 5
    for (let d = 1; d < 5; d++) {
        const m = activeMysteries[d];
        const decadeName = `Decena ${d + 1}`;

        // Cuenta Separada Grande d-1 (PN y Misterio)
        steps.push({
            id: `decena-${d}-pn`,
            beadId: `bead-decena-pn-${d - 1}`,
            phase: decadeName,
            action: `Sostén la cuenta separada (Grande) del círculo`,
            title: `Anuncia el ${d + 1}º Misterio y reza 1 Padre Nuestro`,
            desc: m.title + ": " + m.desc + "\n\n*Medita este misterio y reza el Padre Nuestro.*",
            prayer: PRAYERS.padreNuestro
        });

        // 10 Ave Marías
        for (let a = 1; a <= 10; a++) {
            steps.push({
                id: `decena-${d}-av-${a}`,
                beadId: `bead-decena-av-${d}-${a}`,
                phase: decadeName,
                action: `Pasa a la cuenta ${a} de la decena ${d + 1}`,
                title: `Reza 1 Ave María (${a} de 10)`,
                desc: `Meditando sobre el misterio: ${m.title.substring(3)}.`,
                prayer: PRAYERS.aveMaria
            });
        }

        // Gloria + Fátima (Para Decena 2, 3, 4 es en su espacio vacío; para Decena 5 es en la Medalla)
        steps.push({
            id: `decena-${d}-gl-fat`,
            beadId: d === 4 ? "bead-medalla" : `bead-decena-space-${d}`,
            phase: decadeName,
            action: d === 4 ? "Al regresar a la Medalla Central" : `En el espacio al terminar la decena ${d + 1}`,
            title: "Reza el Gloria y la Oración de Fátima",
            desc: "Damos gloria y rezamos la jaculatoria de Fátima para culminar esta decena.",
            prayer: PRAYERS.gloriaFatima
        });
    }

    // FASE DE CONCLUSIÓN
    // 1. La Salve en la Medalla Central
    steps.push({
        id: "concl-salve",
        beadId: "bead-medalla",
        phase: "Conclusión",
        action: "Sostén la Medalla Central",
        title: "Reza La Salve",
        desc: "Saludamos a nuestra Madre con amor y pedimos su intercesión por nosotros.",
        prayer: PRAYERS.salve
    });

    // 2. Señal de la Cruz
    steps.push({
        id: "concl-cruz",
        beadId: "bead-cross",
        phase: "Conclusión",
        action: "Sostén la Cruz de nuevo",
        title: "Termina con la Señal de la Cruz",
        desc: "Haz la señal de la cruz en tu cuerpo santiguándote. En el nombre del Padre, del Hijo y del Espíritu Santo. Amén.",
        prayer: {
            name: "Finalización",
            text: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.\n\n¡Has finalizado el rezo de tu Rosario!"
        }
    });

    return steps;
}

// Iniciar rezo
function startRosario() {
    rosarySteps = buildRosarySteps();
    currentStepIndex = 0;
    
    screenWelcome.classList.remove("active");
    screenPray.classList.add("active");
    screenFinish.classList.remove("active");
    
    renderRosarySvg();
    updateStepView();
}

// Actualizar la vista del paso actual
function updateStepView() {
    const step = rosarySteps[currentStepIndex];
    
    // Textos
    actionInstruction.textContent = step.action;
    mysteryTitle.textContent = step.title;
    mysteryDesc.textContent = step.desc;
    prayerName.textContent = step.prayer.name;
    
    // Limpiar y setear texto de oración de forma segura
    prayerText.textContent = "";
    const lines = step.prayer.text.split("\n\n");
    lines.forEach((lineText) => {
        const p = document.createElement("p");
        p.textContent = lineText;
        p.style.marginBottom = "0.75rem";
        prayerText.appendChild(p);
    });

    // Contador y progreso
    phaseLabel.textContent = step.phase;
    stepCounter.textContent = `Paso ${currentStepIndex + 1} de ${rosarySteps.length}`;
    
    const progressPercent = (currentStepIndex / (rosarySteps.length - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Navegación
    btnPrev.disabled = currentStepIndex === 0;

    // Resaltar cuentas del Rosario SVG
    highlightBead(step.beadId);
}

// Navegar
function nextStep() {
    if (currentStepIndex < rosarySteps.length - 1) {
        currentStepIndex++;
        updateStepView();
    } else {
        // Pantalla final
        screenPray.classList.remove("active");
        screenFinish.classList.add("active");
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        updateStepView();
    }
}

function restartRosario() {
    screenFinish.classList.remove("active");
    screenWelcome.classList.add("active");
}

// Renderizar el Rosario de forma interactiva en SVG usando createElementNS para seguridad XSS
function renderRosarySvg() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "20 15 200 340");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    // Definición de filtros para brillos
    const defs = document.createElementNS(svgNS, "defs");
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", "glow");
    const blur = document.createElementNS(svgNS, "feGaussianBlur");
    blur.setAttribute("stdDeviation", "2");
    blur.setAttribute("result", "coloredBlur");
    const merge = document.createElementNS(svgNS, "feMerge");
    const mergeNode1 = document.createElementNS(svgNS, "feMergeNode");
    mergeNode1.setAttribute("in", "coloredBlur");
    const mergeNode2 = document.createElementNS(svgNS, "feMergeNode");
    mergeNode2.setAttribute("in", "SourceGraphic");
    merge.appendChild(mergeNode1);
    merge.appendChild(mergeNode2);
    filter.appendChild(blur);
    filter.appendChild(merge);
    defs.appendChild(filter);
    svg.appendChild(defs);

    // Cadenas / Líneas de conexión
    // 1. Línea vertical del colgante
    const pendantLine = document.createElementNS(svgNS, "line");
    pendantLine.setAttribute("x1", "120");
    pendantLine.setAttribute("y1", "195");
    pendantLine.setAttribute("x2", "120");
    pendantLine.setAttribute("y2", "335");
    pendantLine.setAttribute("class", "rosary-chain");
    svg.appendChild(pendantLine);

    // 2. Círculo de la elipse de las decenas
    const loopPath = document.createElementNS(svgNS, "path");
    // Dibujamos un óvalo que se conecta en la medalla a (120, 195). Centro aprox (120, 110).
    loopPath.setAttribute("d", "M 120 195 A 95 85 0 1 1 120.1 195");
    loopPath.setAttribute("fill", "none");
    loopPath.setAttribute("class", "rosary-chain");
    svg.appendChild(loopPath);

    // Cruz al final del colgante (Centrada en 120, 335)
    const cross = document.createElementNS(svgNS, "path");
    cross.setAttribute("id", "bead-cross");
    cross.setAttribute("class", "rosary-cross inactive");
    cross.setAttribute("d", "M 116 320 H 124 V 326 H 132 V 333 H 124 V 349 H 116 V 333 H 108 V 326 H 116 Z");
    svg.appendChild(cross);

    // Cuenta 1 Colgante (Marrón)
    createBead(svg, svgNS, "bead-intro-pn-1", 120, 302, 4.5, true);

    // Cuentas 2, 3 y 4 Colgantes (Claras)
    createBead(svg, svgNS, "bead-intro-av-3", 120, 248, 3, false);
    createBead(svg, svgNS, "bead-intro-av-2", 120, 264, 3, false);
    createBead(svg, svgNS, "bead-intro-av-1", 120, 280, 3, false);

    // Espacio de Gloria
    createBead(svg, svgNS, "bead-intro-space", 120, 232, 2.2, false, true);

    // Cuenta 5 Colgante (Marrón) antes de la medalla
    createBead(svg, svgNS, "bead-intro-pn-2", 120, 214, 4.5, true);

    // Medalla de unión (Nexo Central)
    const medalla = document.createElementNS(svgNS, "polygon");
    medalla.setAttribute("id", "bead-medalla");
    medalla.setAttribute("points", "114,189 126,189 130,198 120,204 110,198");
    medalla.setAttribute("class", "rosary-bead inactive");
    medalla.style.fill = "#f59e0b"; // Tono dorado por defecto para la medalla
    svg.appendChild(medalla);

    // Distribuir las decenas y 4 separadores en el óvalo
    const cx = 120;
    const cy = 110;
    const rx = 95;
    const ry = 85;

    // Colocamos las 5 decenas y las 4 cuentas separadoras sobre un tramo de 330 grados
    // Iniciando en 105 grados (lado izquierdo de la medalla) y yendo hasta 435 grados en sentido horario
    let currentAngle = 105;

    for (let d = 0; d < 5; d++) {
        // 1. Decena d (10 Ave Marías)
        // Se separan levemente del inicio de la sección
        currentAngle += 8;
        for (let a = 1; a <= 10; a++) {
            const angleAV = (currentAngle) * (Math.PI / 180);
            const ax = cx + rx * Math.cos(angleAV);
            const ay = cy + ry * Math.sin(angleAV);
            createBead(svg, svgNS, `bead-decena-av-${d}-${a}`, ax, ay, 3, false);
            if (a < 10) currentAngle += 4.8;
        }

        // Espacio vacío para el Gloria al final de la decena d
        currentAngle += 10;
        const angleSpace = (currentAngle) * (Math.PI / 180);
        const sx = cx + rx * Math.cos(angleSpace);
        const sy = cy + ry * Math.sin(angleSpace);
        createBead(svg, svgNS, `bead-decena-space-${d}`, sx, sy, 2.2, false, true);

        // 2. Si no es la última decena, colocamos la Cuenta Separadora Marrón (Padre Nuestro)
        if (d < 4) {
            currentAngle += 10;
            const anglePN = (currentAngle) * (Math.PI / 180);
            const px = cx + rx * Math.cos(anglePN);
            const py = cy + ry * Math.sin(anglePN);
            createBead(svg, svgNS, `bead-decena-pn-${d}`, px, py, 4.5, true);
        }
    }

    rosarySvgContainer.replaceChildren(svg);
}

// Crear una cuenta individual en el SVG
function createBead(parent, ns, id, cx, cy, r, isLarge, isSpace = false) {
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("id", id);
    circle.setAttribute("cx", cx.toString());
    circle.setAttribute("cy", cy.toString());
    circle.setAttribute("r", r.toString());
    
    if (isSpace) {
        circle.setAttribute("class", "rosary-bead inactive");
        circle.style.opacity = "0.3";
    } else if (isLarge) {
        circle.setAttribute("class", "rosary-bead inactive");
        circle.style.fill = "#d97706"; // Color oro viejo
    } else {
        circle.setAttribute("class", "rosary-bead inactive");
    }
    
    parent.appendChild(circle);
}

// Resaltar la cuenta actual en el SVG
function highlightBead(beadId) {
    if (!beadId) return;

    // Resetear todas las cuentas
    const beads = document.querySelectorAll(".rosary-bead, .rosary-cross");
    beads.forEach(bead => {
        bead.classList.remove("active");
        bead.classList.remove("completed");
        bead.classList.add("inactive");
    });

    // Encontrar el paso actual e ir coloreando los pasos anteriores como completados
    let foundCurrent = false;
    for (let i = 0; i < rosarySteps.length; i++) {
        const step = rosarySteps[i];
        const elem = document.getElementById(step.beadId);
        
        if (step.beadId === beadId && !foundCurrent) {
            if (elem) {
                elem.classList.remove("inactive", "completed");
                elem.classList.add("active");
            }
            foundCurrent = true;
        } else if (!foundCurrent) {
            if (elem && elem.id !== beadId) {
                elem.classList.remove("inactive", "active");
                elem.classList.add("completed");
            }
        }
    }
}
