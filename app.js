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
            { title: "1. La Encarnación del Hijo de Dios", desc: "El humilde Fiat de María Santísima como la sumisión incondicional de la libertad humana ante la voluntad del Creador, permitiendo que la Verdad Divina tome carne en la historia." },
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
            { title: "2. La Flagelación", desc: "El suplicio atroz de Jesucristo como expiación voluntaria y redentora por los pecados del mundo; el restablecimiento de la justicia divina mediante el dolor inocente." },
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
            { title: "3. El Anuncio del Reino de Dios", desc: "La proclamación inequívoca de la Verdad y la llamada apremiante a la conversión del corazón, exhortando al hombre a abandonar el pecado y ordenar su vida según la ley de Dios." },
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

const BIBLE_PASSAGES = {
    "gozosos-0": [
        {
            "ref": "Lucas 1:26-38",
            "text": "<p><span class=\"text Luke-1-26\"><span class=\"verse-num\">26</span>Al sexto mes, el ángel Gabriel fue enviado por Dios a una ciudad de Galilea llamada Nazaret, </span> <span class=\"text Luke-1-27\" id=\"es-NBLA-24921\"><span class=\"verse-num\">27</span>a una virgen comprometida para casarse con un hombre que se llamaba José, de los descendientes de David; y el nombre de la virgen era María. </span> <span class=\"text Luke-1-28\" id=\"es-NBLA-24922\"><span class=\"verse-num\">28</span>Y entrando el <i>ángel,</i> le dijo: «¡Salve, muy favorecida! El Señor está contigo; bendita eres tú entre las mujeres».</span></p><p><span class=\"text Luke-1-29\" id=\"es-NBLA-24923\"><span class=\"verse-num\">29</span>Ella se turbó mucho por estas palabras, y se preguntaba qué clase de saludo sería este. </span> <span class=\"text Luke-1-30\" id=\"es-NBLA-24924\"><span class=\"verse-num\">30</span>Y el ángel le dijo: «No temas, María, porque has hallado gracia delante de Dios. </span> <span class=\"text Luke-1-31\" id=\"es-NBLA-24925\"><span class=\"verse-num\">31</span>Concebirás en tu seno y darás a luz un Hijo, y le pondrás por nombre Jesús. </span> <span class=\"text Luke-1-32\" id=\"es-NBLA-24926\"><span class=\"verse-num\">32</span>Este será grande y será llamado Hijo del Altísimo, y el Señor Dios le dará el trono de Su padre David; </span> <span class=\"text Luke-1-33\" id=\"es-NBLA-24927\"><span class=\"verse-num\">33</span>y reinará sobre la casa de Jacob para siempre, y Su reino no tendrá fin».</span></p><p><span class=\"text Luke-1-34\" id=\"es-NBLA-24928\"><span class=\"verse-num\">34</span>Entonces María dijo al ángel: «¿Cómo será esto, puesto que soy virgen?». </span> <span class=\"text Luke-1-35\" id=\"es-NBLA-24929\"><span class=\"verse-num\">35</span>El ángel le respondió: «El Espíritu Santo vendrá sobre ti, y el poder del Altísimo te cubrirá con su sombra; por eso el santo Niño que nacerá será llamado Hijo de Dios. </span> <span class=\"text Luke-1-36\" id=\"es-NBLA-24930\"><span class=\"verse-num\">36</span>Tu parienta Elisabet en su vejez también ha concebido un hijo; y este es el sexto mes para ella, la que llamaban estéril. </span> <span class=\"text Luke-1-37\" id=\"es-NBLA-24931\"><span class=\"verse-num\">37</span>Porque ninguna cosa será imposible para Dios». </span> <span class=\"text Luke-1-38\" id=\"es-NBLA-24932\"><span class=\"verse-num\">38</span>Entonces María dijo: «Aquí tienes a la sierva del Señor; hágase conmigo conforme a tu palabra». Y el ángel se fue de su presencia.</span></p>"
        },
        {
            "ref": "Mateo 1:18-25",
            "text": "<p><span class=\"text Matt-1-18\"><span class=\"verse-num\">18</span>El nacimiento de Jesucristo fue como sigue: estando Su madre María comprometida para casarse con José, antes de que se llevara a cabo el matrimonio, se halló que había concebido por <i>obra del</i> Espíritu Santo. </span> <span class=\"text Matt-1-19\" id=\"es-NBLA-23164\"><span class=\"verse-num\">19</span>Entonces José su marido, siendo un hombre justo y no queriendo denunciarla públicamente, quiso abandonarla en secreto. </span> <span class=\"text Matt-1-20\" id=\"es-NBLA-23165\"><span class=\"verse-num\">20</span>Pero mientras pensaba en esto, se le apareció en sueños un ángel del Señor, diciéndole: «José, hijo de David, no temas recibir a María tu mujer, porque el Niño que se ha engendrado en ella es del Espíritu Santo. </span> <span class=\"text Matt-1-21\" id=\"es-NBLA-23166\"><span class=\"verse-num\">21</span>Y dará a luz un Hijo, y le pondrás por nombre Jesús, porque Él salvará a Su pueblo de sus pecados».</span></p><p><span class=\"text Matt-1-22\" id=\"es-NBLA-23167\"><span class=\"verse-num\">22</span>Todo esto sucedió para que se cumpliera lo que el Señor había hablado por medio del profeta, diciendo: </span> <span class=\"text Matt-1-23\" id=\"es-NBLA-23168\"><span class=\"verse-num\">23</span>«<span class=\"small-caps\" style=\"font-variant: small-caps\">Miren</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">la virgen concebirá y dará a luz un Hijo</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">y le pondrán por nombre Emmanuel</span>», que traducido significa: «<span class=\"small-caps\" style=\"font-variant: small-caps\">Dios con nosotros</span>». </span> <span class=\"text Matt-1-24\" id=\"es-NBLA-23169\"><span class=\"verse-num\">24</span>Cuando José despertó del sueño, hizo como el ángel del Señor le había mandado, y tomó consigo a <i>María como</i> su mujer; </span> <span class=\"text Matt-1-25\" id=\"es-NBLA-23170\"><span class=\"verse-num\">25</span>y la conservó virgen hasta que dio a luz un Hijo; y le puso por nombre Jesús.</span></p>"
        },
        {
            "ref": "Génesis 3:15",
            "text": "<p><span class=\"text Gen-3-15\" id=\"es-NBLA-71\"><span class=\"verse-num\">15</span>-»Pondré enemistad</span><br/><span class=\"text Gen-3-15\">Entre tú y la mujer,</span><br/><span class=\"text Gen-3-15\">Y entre tu simiente y su simiente;</span><br/><span class=\"text Gen-3-15\">Él te herirá en la cabeza,</span><br/><span class=\"text Gen-3-15\">Y tú lo herirás en el talón».</span></p>"
        },
        {
            "ref": "Isaías 7:14",
            "text": "<p><span class=\"text Isa-7-14\" id=\"es-NBLA-17797\"><span class=\"verse-num\">14</span>Por tanto, el Señor mismo les dará esta señal: Miren, una virgen concebirá y dará a luz un hijo, y le pondrá por nombre Emmanuel. </span></p>"
        },
        {
            "ref": "Juan 1:14",
            "text": "<p><span class=\"text John-1-14\"><span class=\"verse-num\">14</span>El Verbo se hizo carne, y habitó entre nosotros, y vimos Su gloria, gloria como del unigénito del Padre, lleno de gracia y de verdad. </span></p>"
        },
        {
            "ref": "Hebreos 10:5-7",
            "text": "<p><span class=\"text Heb-10-5\" id=\"es-NBLA-30139\"><span class=\"verse-num\">5</span>Por lo cual, al entrar Cristo en el mundo, dice:</span></p><p><span class=\"text Heb-10-5\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Sacrificio y ofrenda no has querido</span>,</span><br/><span class=\"text Heb-10-5\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Pero un cuerpo has preparado para Mí</span>;</span><br/><span class=\"text Heb-10-6\" id=\"es-NBLA-30140\"><span class=\"verse-num\">6</span><span class=\"small-caps\" style=\"font-variant: small-caps\">En holocaustos y</span> <i>sacrificios</i> <span class=\"small-caps\" style=\"font-variant: small-caps\">por el pecado no te has complacido</span>.</span><br/><span class=\"text Heb-10-7\" id=\"es-NBLA-30141\"><span class=\"verse-num\">7</span>-»<span class=\"small-caps\" style=\"font-variant: small-caps\">Entonces dije</span>: “<span class=\"small-caps\" style=\"font-variant: small-caps\">Aquí estoy</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Yo he venido</span></span><br/><span class=\"text Heb-10-7\">(<span class=\"small-caps\" style=\"font-variant: small-caps\">En el rollo del libro está escrito de Mí</span>)</span><br/><span class=\"text Heb-10-7\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Para hacer</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">oh Dios</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Tu voluntad</span>”».</span></p>"
        }
    ],
    "gozosos-1": [
        {
            "ref": "Lucas 1:39-56",
            "text": "<p><span class=\"text Luke-1-39\"><span class=\"verse-num\">39</span>En esos días María se levantó y fue apresuradamente a la región montañosa, a una ciudad de Judá; </span> <span class=\"text Luke-1-40\" id=\"es-NBLA-24934\"><span class=\"verse-num\">40</span>y entró en casa de Zacarías y saludó a Elisabet. </span> <span class=\"text Luke-1-41\" id=\"es-NBLA-24935\"><span class=\"verse-num\">41</span>Cuando Elisabet oyó el saludo de María, la criatura saltó en su vientre; y Elisabet fue llena del Espíritu Santo, </span> <span class=\"text Luke-1-42\" id=\"es-NBLA-24936\"><span class=\"verse-num\">42</span>y exclamó a gran voz: «¡Bendita tú entre las mujeres, y bendito el fruto de tu vientre! </span> <span class=\"text Luke-1-43\" id=\"es-NBLA-24937\"><span class=\"verse-num\">43</span>¿Por qué me ha acontecido esto a mí, que la madre de mi Señor venga a mí? </span> <span class=\"text Luke-1-44\" id=\"es-NBLA-24938\"><span class=\"verse-num\">44</span>Porque apenas la voz de tu saludo llegó a mis oídos, la criatura saltó de gozo en mi vientre. </span> <span class=\"text Luke-1-45\" id=\"es-NBLA-24939\"><span class=\"verse-num\">45</span>Y bienaventurada la que creyó que tendrá cumplimiento lo que le fue dicho de parte del Señor».</span></p><p><span class=\"text Luke-1-46\" id=\"es-NBLA-24940\"><span class=\"verse-num\">46</span>Entonces María dijo:</span></p><p><span class=\"text Luke-1-46\">«Mi alma engrandece al Señor,</span><br/><span class=\"text Luke-1-47\" id=\"es-NBLA-24941\"><span class=\"verse-num\">47</span>Y mi espíritu se regocija en Dios mi Salvador.</span><br/><span class=\"text Luke-1-48\" id=\"es-NBLA-24942\"><span class=\"verse-num\">48</span>-»Porque ha mirado la humilde condición de <i>esta</i> su sierva;</span><br/><span class=\"text Luke-1-48\">Pues desde ahora en adelante todas las generaciones me tendrán por bienaventurada.</span><br/><span class=\"text Luke-1-49\" id=\"es-NBLA-24943\"><span class=\"verse-num\">49</span>-»Porque grandes cosas me ha hecho el Poderoso;</span><br/><span class=\"text Luke-1-49\">Y santo es Su nombre.</span><br/><span class=\"text Luke-1-50\" id=\"es-NBLA-24944\"><span class=\"verse-num\">50</span>-»Y <span class=\"small-caps\" style=\"font-variant: small-caps\">de generación en generación</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">es Su misericordia</span></span><br/><span class=\"text Luke-1-50\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Para los que le temen</span>.</span><br/><span class=\"text Luke-1-51\" id=\"es-NBLA-24945\"><span class=\"verse-num\">51</span>-»Ha hecho proezas con Su brazo;</span><br/><span class=\"text Luke-1-51\">Ha esparcido a los soberbios en el pensamiento de sus corazones.</span><br/><span class=\"text Luke-1-52\" id=\"es-NBLA-24946\"><span class=\"verse-num\">52</span>-»Ha quitado a los poderosos de <i>sus</i> tronos;</span><br/><span class=\"text Luke-1-52\">Y ha exaltado a los humildes;</span><br/><span class=\"text Luke-1-53\" id=\"es-NBLA-24947\"><span class=\"verse-num\">53</span>A <span class=\"small-caps\" style=\"font-variant: small-caps\">los hambrientos ha colmado de bienes</span></span><br/><span class=\"text Luke-1-53\">Y ha despedido a los ricos con las manos vacías.</span><br/><span class=\"text Luke-1-54\" id=\"es-NBLA-24948\"><span class=\"verse-num\">54</span>-»Ha ayudado a Israel, Su siervo,</span><br/><span class=\"text Luke-1-54\">Para recuerdo de Su misericordia</span><br/><span class=\"text Luke-1-55\" id=\"es-NBLA-24949\"><span class=\"verse-num\">55</span>Tal como dijo a nuestros padres,</span><br/><span class=\"text Luke-1-55\">A Abraham y a su descendencia para siempre».</span></p><p><span class=\"text Luke-1-56\" id=\"es-NBLA-24950\"><span class=\"verse-num\">56</span>María se quedó con Elisabet como tres meses y <i>después</i> regresó a su casa.</span></p>"
        },
        {
            "ref": "Sofonías 3:14-17",
            "text": "<p><span class=\"text Zeph-3-14\"><span class=\"verse-num\">14</span>¶Canta jubilosa, hija de Sión.</span><br/><span class=\"text Zeph-3-14\">Lanza gritos <i>de alegría,</i> Israel.</span><br/><span class=\"text Zeph-3-14\">Alégrate y regocíjate de todo corazón,</span><br/><span class=\"text Zeph-3-14\">Hija de Jerusalén.</span><br/><span class=\"text Zeph-3-15\" id=\"es-NBLA-22836\"><span class=\"verse-num\">15</span>El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> ha retirado <i>Sus</i> juicios contra ti,</span><br/><span class=\"text Zeph-3-15\">Ha expulsado a tus enemigos.</span><br/><span class=\"text Zeph-3-15\">El Rey de Israel, el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>, está en medio de ti;</span><br/><span class=\"text Zeph-3-15\">Ya no temerás mal alguno.</span><br/><span class=\"text Zeph-3-16\" id=\"es-NBLA-22837\"><span class=\"verse-num\">16</span>Aquel día le dirán a Jerusalén:</span><br/><span class=\"text Zeph-3-16\">«No temas, Sión;</span><br/><span class=\"text Zeph-3-16\">No desfallezcan tus manos.</span><br/><span class=\"text Zeph-3-17\" id=\"es-NBLA-22838\"><span class=\"verse-num\">17</span>-»El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> tu Dios está en medio de ti,</span><br/><span class=\"text Zeph-3-17\">Guerrero victorioso;</span><br/><span class=\"text Zeph-3-17\">Se gozará en ti con alegría,</span><br/><span class=\"text Zeph-3-17\">En Su amor guardará silencio,</span><br/><span class=\"text Zeph-3-17\">Se regocijará por ti con cantos de júbilo.</span></p>"
        },
        {
            "ref": "2 Samuel 6:9-12",
            "text": "<p><span class=\"text 2Sam-6-9\" id=\"es-NBLA-8167\"><span class=\"verse-num\">9</span>David tuvo temor del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> aquel día, y dijo: «¿Cómo podrá venir a mí el arca del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>?». </span> <span class=\"text 2Sam-6-10\" id=\"es-NBLA-8168\"><span class=\"verse-num\">10</span>Y David no quiso trasladar el arca del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> con él a la ciudad de David, sino que la hizo llevar a la casa de Obed Edom el geteo. </span> <span class=\"text 2Sam-6-11\" id=\"es-NBLA-8169\"><span class=\"verse-num\">11</span>Por tres meses permaneció el arca del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> en la casa de Obed Edom el geteo; y bendijo el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> a Obed Edom y a toda su casa.</span></p><p><span class=\"text 2Sam-6-12\" id=\"es-NBLA-8170\"><span class=\"verse-num\">12</span>Y se dio aviso al rey David: «El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> ha bendecido la casa de Obed Edom y todo lo que le pertenece a causa del arca de Dios». Entonces David fue, y con alegría hizo subir el arca de Dios de la casa de Obed Edom a la ciudad de David. </span></p>"
        },
        {
            "ref": "1 Samuel 2:1-10",
            "text": "<p><span class=\"text 1Sam-2-1\"><span class=\"verse-num\">1</span>Entonces Ana oró y dijo:</span></p><p><span class=\"text 1Sam-2-1\">«Mi corazón se regocija en el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>,</span><br/><span class=\"text 1Sam-2-1\">Mi fortaleza en el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> se exalta;</span><br/><span class=\"text 1Sam-2-1\">Mi boca habla sin temor contra mis enemigos,</span><br/><span class=\"text 1Sam-2-1\">Por cuanto me regocijo en Tu salvación.</span><br/><span class=\"text 1Sam-2-2\" id=\"es-NBLA-7243\"><span class=\"verse-num\">2</span>-»No hay santo como el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>;</span><br/><span class=\"text 1Sam-2-2\">En verdad, no hay otro fuera de Ti,</span><br/><span class=\"text 1Sam-2-2\">Ni hay roca como nuestro Dios.</span><br/><span class=\"text 1Sam-2-3\" id=\"es-NBLA-7244\"><span class=\"verse-num\">3</span>-»No se jacten más ustedes con tanto orgullo,</span><br/><span class=\"text 1Sam-2-3\">No salga la arrogancia de su boca.</span><br/><span class=\"text 1Sam-2-3\">Porque el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> es Dios de sabiduría,</span><br/><span class=\"text 1Sam-2-3\">Y por Él son pesadas las acciones.</span><br/><span class=\"text 1Sam-2-4\" id=\"es-NBLA-7245\"><span class=\"verse-num\">4</span>-»Quebrados son los arcos de los fuertes,</span><br/><span class=\"text 1Sam-2-4\">Pero los débiles se ciñen de poder.</span><br/><span class=\"text 1Sam-2-5\" id=\"es-NBLA-7246\"><span class=\"verse-num\">5</span>-»Los que estaban saciados se alquilan por pan,</span><br/><span class=\"text 1Sam-2-5\">Y dejan <i>de tener hambre</i> los que estaban hambrientos.</span><br/><span class=\"text 1Sam-2-5\">Aun la estéril da a luz a siete,</span><br/><span class=\"text 1Sam-2-5\">Pero la que tiene muchos hijos desfallece.</span><br/><span class=\"text 1Sam-2-6\" id=\"es-NBLA-7247\"><span class=\"verse-num\">6</span>-»El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> da muerte y da vida;</span><br/><span class=\"text 1Sam-2-6\">Hace bajar al Seol y hace subir.</span><br/><span class=\"text 1Sam-2-7\" id=\"es-NBLA-7248\"><span class=\"verse-num\">7</span>-»El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> empobrece y enriquece;</span><br/><span class=\"text 1Sam-2-7\">Humilla y también exalta.</span><br/><span class=\"text 1Sam-2-8\" id=\"es-NBLA-7249\"><span class=\"verse-num\">8</span>-»Levanta del polvo al pobre,</span><br/><span class=\"text 1Sam-2-8\">Del muladar levanta al necesitado</span><br/><span class=\"text 1Sam-2-8\">Para hacer<i>los</i> sentar con los príncipes,</span><br/><span class=\"text 1Sam-2-8\">Y heredar un sitio de honor;</span><br/><span class=\"text 1Sam-2-8\">Pues las columnas de la tierra son del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>,</span><br/><span class=\"text 1Sam-2-8\">Y sobre ellas ha colocado el mundo.</span><br/><span class=\"text 1Sam-2-9\" id=\"es-NBLA-7250\"><span class=\"verse-num\">9</span>-»Él guarda los pies de Sus santos,</span><br/><span class=\"text 1Sam-2-9\">Pero los malvados son acallados en tinieblas,</span><br/><span class=\"text 1Sam-2-9\">Pues no por la fuerza ha de prevalecer el hombre.</span><br/><span class=\"text 1Sam-2-10\" id=\"es-NBLA-7251\"><span class=\"verse-num\">10</span>-»Los que se oponen al <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> serán quebrantados,</span><br/><span class=\"text 1Sam-2-10\">Él tronará desde los cielos contra ellos.</span><br/><span class=\"text 1Sam-2-10\">El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> juzgará los confines de la tierra,</span><br/><span class=\"text 1Sam-2-10\">Dará fortaleza a Su rey,</span><br/><span class=\"text 1Sam-2-10\">Y ensalzará el poder de Su ungido».</span></p>"
        }
    ],
    "gozosos-2": [
        {
            "ref": "Lucas 2:1-20",
            "text": "<p><span class=\"text Luke-2-1\"><span class=\"verse-num\">1</span>Aconteció en aquellos días que salió un edicto de César Augusto, para que se hiciera un censo de todo el mundo habitado. </span> <span class=\"text Luke-2-2\" id=\"es-NBLA-24976\"><span class=\"verse-num\">2</span>Este fue el primer censo que se levantó cuando Cirenio era gobernador de Siria. </span> <span class=\"text Luke-2-3\" id=\"es-NBLA-24977\"><span class=\"verse-num\">3</span>Todos se dirigían a inscribirse en el censo, cada uno a su ciudad. </span> <span class=\"text Luke-2-4\" id=\"es-NBLA-24978\"><span class=\"verse-num\">4</span>También José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David que se llama Belén, por ser él de la casa y de la familia de David, </span> <span class=\"text Luke-2-5\" id=\"es-NBLA-24979\"><span class=\"verse-num\">5</span>para inscribirse junto con María, comprometida para casarse con él, la cual estaba encinta.</span></p><p><span class=\"text Luke-2-6\" id=\"es-NBLA-24980\"><span class=\"verse-num\">6</span>Sucedió que mientras estaban ellos allí, se cumplieron los días de su alumbramiento. </span> <span class=\"text Luke-2-7\" id=\"es-NBLA-24981\"><span class=\"verse-num\">7</span>Y dio a luz a su Hijo primogénito; lo envolvió en pañales y lo acostó en un pesebre, porque no había lugar para ellos en el mesón.</span></p><p><span class=\"text Luke-2-8\"><span class=\"verse-num\">8</span>En la misma región había pastores que estaban en el campo, cuidando sus rebaños <i>durante</i> las vigilias de la noche. </span> <span class=\"text Luke-2-9\" id=\"es-NBLA-24983\"><span class=\"verse-num\">9</span>Y un ángel del Señor se les presentó, y la gloria del Señor los rodeó de resplandor, y tuvieron gran temor. </span> <span class=\"text Luke-2-10\" id=\"es-NBLA-24984\"><span class=\"verse-num\">10</span>Pero el ángel les dijo: «No teman, porque les traigo buenas nuevas de gran gozo que serán para todo el pueblo; </span> <span class=\"text Luke-2-11\" id=\"es-NBLA-24985\"><span class=\"verse-num\">11</span>porque les ha nacido hoy, en la ciudad de David, un Salvador, que es Cristo el Señor. </span> <span class=\"text Luke-2-12\" id=\"es-NBLA-24986\"><span class=\"verse-num\">12</span>Esto les <i>servirá</i> de señal: hallarán a un Niño envuelto en pañales y acostado en un pesebre».</span></p><p><span class=\"text Luke-2-13\" id=\"es-NBLA-24987\"><span class=\"verse-num\">13</span>De repente apareció con el ángel una multitud de los ejércitos celestiales, alabando a Dios y diciendo:</span></p><p><span class=\"text Luke-2-14\" id=\"es-NBLA-24988\"><span class=\"verse-num\">14</span>«Gloria a Dios en las alturas,</span><br/><span class=\"text Luke-2-14\">Y en la tierra paz entre los hombres en quienes Él se complace».</span></p><p><span class=\"text Luke-2-15\" id=\"es-NBLA-24989\"><span class=\"verse-num\">15</span>Cuando los ángeles se fueron al cielo, los pastores se decían unos a otros: «Vayamos, pues, hasta Belén y veamos esto que ha sucedido, que el Señor nos ha dado a saber».</span></p><p><span class=\"text Luke-2-16\" id=\"es-NBLA-24990\"><span class=\"verse-num\">16</span>Fueron a toda prisa, y hallaron a María y a José, y al Niño acostado en el pesebre. </span> <span class=\"text Luke-2-17\" id=\"es-NBLA-24991\"><span class=\"verse-num\">17</span>Cuando lo vieron, dieron a saber lo que se les había dicho acerca de este Niño. </span> <span class=\"text Luke-2-18\" id=\"es-NBLA-24992\"><span class=\"verse-num\">18</span>Y todos los que <i>lo</i> oyeron se maravillaron de las cosas que les fueron dichas por los pastores. </span> <span class=\"text Luke-2-19\" id=\"es-NBLA-24993\"><span class=\"verse-num\">19</span>Pero María atesoraba todas estas cosas, reflexionando sobre ellas en su corazón. </span> <span class=\"text Luke-2-20\" id=\"es-NBLA-24994\"><span class=\"verse-num\">20</span>Y los pastores se volvieron, glorificando y alabando a Dios por todo lo que habían oído y visto, tal como se les había dicho.</span></p>"
        },
        {
            "ref": "Mateo 2:1-12",
            "text": "<p><span class=\"text Matt-2-1\"><span class=\"verse-num\">1</span>Después de nacer Jesús en Belén de Judea, en tiempos del rey Herodes, unos sabios del oriente llegaron a Jerusalén, preguntando: </span> <span class=\"text Matt-2-2\" id=\"es-NBLA-23172\"><span class=\"verse-num\">2</span>«¿Dónde está el Rey de los judíos que ha nacido? Porque vimos Su estrella en el oriente y lo hemos venido a adorar». </span> <span class=\"text Matt-2-3\" id=\"es-NBLA-23173\"><span class=\"verse-num\">3</span>Cuando <i>lo</i> oyó el rey Herodes, se turbó, y toda Jerusalén con él. </span> <span class=\"text Matt-2-4\" id=\"es-NBLA-23174\"><span class=\"verse-num\">4</span>Entonces, el rey reunió a todos los principales sacerdotes y escribas del pueblo, y averiguó de ellos dónde había de nacer el Cristo. </span> <span class=\"text Matt-2-5\" id=\"es-NBLA-23175\"><span class=\"verse-num\">5</span>Y ellos le dijeron: «En Belén de Judea, porque así está escrito por el profeta:</span></p><p><span class=\"text Matt-2-6\" id=\"es-NBLA-23176\"><span class=\"verse-num\">6</span>“Y <span class=\"small-caps\" style=\"font-variant: small-caps\">tú</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Belén</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">tierra de Judá</span>,</span><br/><span class=\"text Matt-2-6\"><span class=\"small-caps\" style=\"font-variant: small-caps\">De ningún modo eres la más pequeña entre los príncipes de Judá</span>;</span><br/><span class=\"text Matt-2-6\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Porque de ti saldrá un Gobernante</span></span><br/><span class=\"text Matt-2-6\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Que pastoreará</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">a Mi pueblo Israel</span>”».</span></p><p><span class=\"text Matt-2-7\" id=\"es-NBLA-23177\"><span class=\"verse-num\">7</span>Entonces Herodes llamó a los sabios en secreto y de ellos determinó el tiempo exacto en que había aparecido la estrella. </span> <span class=\"text Matt-2-8\" id=\"es-NBLA-23178\"><span class=\"verse-num\">8</span>Y enviándolos a Belén, dijo: «Vayan y busquen con diligencia al Niño; y cuando <i>lo</i> encuentren, avísenme para que yo también vaya y lo adore».</span></p><p><span class=\"text Matt-2-9\" id=\"es-NBLA-23179\"><span class=\"verse-num\">9</span>Después de oír al rey, los sabios se fueron; y la estrella que habían visto en el oriente iba delante de ellos, hasta que llegó y se detuvo sobre <i>el lugar</i> donde estaba el Niño. </span> <span class=\"text Matt-2-10\" id=\"es-NBLA-23180\"><span class=\"verse-num\">10</span>Cuando vieron la estrella, se regocijaron mucho con gran alegría. </span> <span class=\"text Matt-2-11\" id=\"es-NBLA-23181\"><span class=\"verse-num\">11</span>Entrando en la casa, vieron al Niño con Su madre María, y postrándose lo adoraron; y abriendo sus tesoros le presentaron obsequios de oro, incienso y mirra. </span> <span class=\"text Matt-2-12\" id=\"es-NBLA-23182\"><span class=\"verse-num\">12</span>Y habiendo sido advertidos <i>por Dios</i> en sueños que no volvieran a Herodes, se fueron para su tierra por otro camino.</span></p>"
        },
        {
            "ref": "Miqueas 5:2",
            "text": "<p><span class=\"text Mic-5-2\" id=\"es-NBLA-22636\"><span class=\"verse-num\">2</span>Pero tú, Belén Efrata,</span><br/><span class=\"text Mic-5-2\">Aunque eres pequeña entre las familias de Judá,</span><br/><span class=\"text Mic-5-2\">De ti me saldrá el que ha de ser gobernante en Israel.</span><br/><span class=\"text Mic-5-2\">Y sus orígenes son desde tiempos antiguos,</span><br/><span class=\"text Mic-5-2\">Desde los días de la eternidad.</span></p>"
        },
        {
            "ref": "Isaías 9:6",
            "text": "<p><span class=\"text Isa-9-6\" id=\"es-NBLA-17836\"><span class=\"verse-num\">6</span>Porque un Niño nos ha nacido, un Hijo nos ha sido dado,</span><br/><span class=\"text Isa-9-6\">Y la soberanía reposará sobre Sus hombros.</span><br/><span class=\"text Isa-9-6\">Y se llamará Su nombre Admirable Consejero, Dios Poderoso,</span><br/><span class=\"text Isa-9-6\">Padre Eterno, Príncipe de Paz.</span></p>"
        },
        {
            "ref": "Salmos 2:7",
            "text": "<p><span class=\"text Ps-2-7\" id=\"es-NBLA-13953\"><span class=\"verse-num\">7</span>¶«Ciertamente anunciaré el decreto del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span></span><br/><span class=\"text Ps-2-7\">Que me dijo: “Mi Hijo eres Tú,</span><br/><span class=\"text Ps-2-7\">Yo te he engendrado hoy.</span></p>"
        },
        {
            "ref": "Gálatas 4:4-5",
            "text": "<p><span class=\"text Gal-4-4\" id=\"es-NBLA-29136\"><span class=\"verse-num\">4</span>Pero cuando vino la plenitud del tiempo, Dios envió a Su Hijo, nacido de mujer, nacido bajo <i>la</i> ley, </span> <span class=\"text Gal-4-5\" id=\"es-NBLA-29137\"><span class=\"verse-num\">5</span>a fin de que redimiera a los que estaban bajo <i>la</i> ley, para que recibiéramos la adopción de hijos. </span></p>"
        }
    ],
    "gozosos-3": [
        {
            "ref": "Lucas 2:22-38",
            "text": "<p><span class=\"text Luke-2-22\"><span class=\"verse-num\">22</span>Al cumplirse los días para la purificación de ellos, según la ley de Moisés, lo trajeron a Jerusalén para presentar al Niño al Señor, </span> <span class=\"text Luke-2-23\" id=\"es-NBLA-24997\"><span class=\"verse-num\">23</span>(como está escrito en la Ley del Señor: «<span class=\"small-caps\" style=\"font-variant: small-caps\">Todo varón</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">que abra la matriz</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">será llamado santo para el Señor</span>)», </span> <span class=\"text Luke-2-24\" id=\"es-NBLA-24998\"><span class=\"verse-num\">24</span>y para ofrecer un sacrificio conforme a lo que fue dicho en la Ley del Señor: «<span class=\"small-caps\" style=\"font-variant: small-caps\">Un par de tórtolas o dos pichones</span>».</span></p><p><span class=\"text Luke-2-25\" id=\"es-NBLA-24999\"><span class=\"verse-num\">25</span>Había en Jerusalén un hombre que se llamaba Simeón. Este hombre, justo y piadoso, esperaba la consolación de Israel, y el Espíritu Santo estaba sobre él. </span> <span class=\"text Luke-2-26\" id=\"es-NBLA-25000\"><span class=\"verse-num\">26</span>Y por el Espíritu Santo se le había revelado que no vería la muerte sin antes ver al Cristo del Señor. </span> <span class=\"text Luke-2-27\" id=\"es-NBLA-25001\"><span class=\"verse-num\">27</span>Movido por el Espíritu fue al templo. Y cuando los padres del niño Jesús lo trajeron para cumplir por Él el rito de la ley, </span> <span class=\"text Luke-2-28\" id=\"es-NBLA-25002\"><span class=\"verse-num\">28</span>Simeón tomó al Niño en sus brazos, y bendijo a Dios diciendo:</span></p><p><span class=\"text Luke-2-29\" id=\"es-NBLA-25003\"><span class=\"verse-num\">29</span>«Ahora, Señor, permite que Tu siervo se vaya</span><br/><span class=\"text Luke-2-29\">En paz, conforme a Tu palabra;</span><br/><span class=\"text Luke-2-30\" id=\"es-NBLA-25004\"><span class=\"verse-num\">30</span>Porque mis ojos han visto Tu salvación</span><br/><span class=\"text Luke-2-31\" id=\"es-NBLA-25005\"><span class=\"verse-num\">31</span>La cual has preparado en presencia de todos los pueblos;</span><br/><span class=\"text Luke-2-32\" id=\"es-NBLA-25006\"><span class=\"verse-num\">32</span><span class=\"small-caps\" style=\"font-variant: small-caps\">Luz de</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">revelación a los gentiles</span>,</span><br/><span class=\"text Luke-2-32\">Y gloria de Tu pueblo Israel».</span></p><p><span class=\"text Luke-2-33\" id=\"es-NBLA-25007\"><span class=\"verse-num\">33</span>Y los padres del Niño estaban asombrados de las cosas que de Él se decían. </span> <span class=\"text Luke-2-34\" id=\"es-NBLA-25008\"><span class=\"verse-num\">34</span>Simeón los bendijo, y dijo a Su madre María: «Este <i>Niño</i> ha sido puesto para caída y levantamiento de muchos en Israel, y para ser señal de contradicción, </span> <span class=\"text Luke-2-35\" id=\"es-NBLA-25009\"><span class=\"verse-num\">35</span>y una espada traspasará aun tu propia alma, a fin de que sean revelados los pensamientos de muchos corazones».</span></p><p><span class=\"text Luke-2-36\" id=\"es-NBLA-25010\"><span class=\"verse-num\">36</span>Y había una profetisa, Ana, hija de Fanuel, de la tribu de Aser. Ella era de edad muy avanzada, y había vivido con <i>su</i> marido siete años después de su matrimonio, </span> <span class=\"text Luke-2-37\" id=\"es-NBLA-25011\"><span class=\"verse-num\">37</span>y después de viuda, hasta los ochenta y cuatro años. Nunca se alejaba del templo, sirviendo noche y día con ayunos y oraciones. </span> <span class=\"text Luke-2-38\" id=\"es-NBLA-25012\"><span class=\"verse-num\">38</span>Llegando ella en ese preciso momento, daba gracias a Dios y hablaba del Niño a todos los que esperaban la redención de Jerusalén.</span></p>"
        },
        {
            "ref": "Éxodo 13:2, 12",
            "text": "<p><span class=\"text Exod-13-2\" id=\"es-NBLA-1870\"><span class=\"verse-num\">2</span>«Conságrame todo primogénito. El primer nacido de toda matriz entre los israelitas, tanto de hombre como de animal, me pertenece».</span></p>"
        },
        {
            "ref": "Levitico 12:1-8",
            "text": "<p><span class=\"text Lev-12-1\"><span class=\"verse-num\">1</span>Entonces el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> habló a Moisés: </span> <span class=\"text Lev-12-2\" id=\"es-NBLA-3047\"><span class=\"verse-num\">2</span>«Di a los israelitas: “Cuando una mujer dé a luz y tenga varón, quedará impura por siete días; como en los días de su menstruación, será impura. </span> <span class=\"text Lev-12-3\" id=\"es-NBLA-3048\"><span class=\"verse-num\">3</span>Al octavo día la carne del prepucio <i>del niño</i> será circuncidada. </span> <span class=\"text Lev-12-4\" id=\"es-NBLA-3049\"><span class=\"verse-num\">4</span>Y ella permanecerá en la sangre de su purificación por treinta y tres días; no tocará ninguna cosa consagrada ni entrará al santuario hasta que los días de su purificación sean cumplidos. </span> <span class=\"text Lev-12-5\" id=\"es-NBLA-3050\"><span class=\"verse-num\">5</span>Pero si da a luz una niña, quedará impura por dos semanas, como en <i>los días de</i> su menstruación; y permanecerá en la sangre de su purificación por sesenta y seis días.</span></p><p><span class=\"text Lev-12-6\" id=\"es-NBLA-3051\"><span class=\"verse-num\">6</span>”Cuando se cumplan los días de su purificación por un hijo o por una hija, traerá al sacerdote, a la entrada de la tienda de reunión, un cordero de un año como holocausto, y un pichón o una tórtola como ofrenda por el pecado. </span> <span class=\"text Lev-12-7\" id=\"es-NBLA-3052\"><span class=\"verse-num\">7</span>Entonces él los ofrecerá delante del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> y hará expiación por ella, y quedará limpia del flujo de su sangre. Esta es la ley para la que da a <i>luz, sea</i> hijo o hija. </span> <span class=\"text Lev-12-8\" id=\"es-NBLA-3053\"><span class=\"verse-num\">8</span>Pero si no le alcanzan los recursos para ofrecer un cordero, entonces tomará dos tórtolas o dos pichones, uno para el holocausto y el otro para la ofrenda por el pecado; y el sacerdote hará expiación por ella, y quedará limpia”».</span></p>"
        },
        {
            "ref": "Malaquías 3:1",
            "text": "<p><span class=\"text Mal-3-1\"><span class=\"verse-num\">1</span>«Miren, Yo envío a Mi mensajero, y él preparará el camino delante de Mí. Y vendrá de repente a Su templo el Señor a quien ustedes buscan; el mensajero del pacto en quien ustedes se complacen, ya viene», dice el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> de los ejércitos. </span></p>"
        },
        {
            "ref": "Hebreos 2:17",
            "text": "<p><span class=\"text Heb-2-17\" id=\"es-NBLA-29995\"><span class=\"verse-num\">17</span>Por tanto, tenía que ser hecho semejante a Sus hermanos en todo, a fin de que llegara a ser un sumo sacerdote misericordioso y fiel en las cosas que a Dios atañen, para hacer propiciación por los pecados del pueblo. </span></p>"
        }
    ],
    "gozosos-4": [
        {
            "ref": "Lucas 2:41-52",
            "text": "<p><span class=\"text Luke-2-41\"><span class=\"verse-num\">41</span>Los padres de Jesús acostumbraban ir a Jerusalén todos los años a la fiesta de la Pascua. </span> <span class=\"text Luke-2-42\" id=\"es-NBLA-25016\"><span class=\"verse-num\">42</span>Y cuando Él cumplió doce años, subieron <i>allá</i> conforme a la costumbre de la fiesta. </span> <span class=\"text Luke-2-43\" id=\"es-NBLA-25017\"><span class=\"verse-num\">43</span>Al regresar ellos, después de haber pasado todos los días <i>de la fiesta</i>, el niño Jesús se quedó en Jerusalén sin que lo supieran Sus padres, </span> <span class=\"text Luke-2-44\" id=\"es-NBLA-25018\"><span class=\"verse-num\">44</span>y suponiendo que iba en la caravana, anduvieron camino de un día, y comenzaron a buscar a Jesús entre los familiares y conocidos.</span></p><p><span class=\"text Luke-2-45\" id=\"es-NBLA-25019\"><span class=\"verse-num\">45</span>Cuando no lo encontraron, volvieron y lo buscaron en Jerusalén. </span> <span class=\"text Luke-2-46\" id=\"es-NBLA-25020\"><span class=\"verse-num\">46</span>Después de tres días lo encontraron en el templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas. </span> <span class=\"text Luke-2-47\" id=\"es-NBLA-25021\"><span class=\"verse-num\">47</span>Todos los que le oían estaban asombrados de Su entendimiento y de Sus respuestas. </span> <span class=\"text Luke-2-48\" id=\"es-NBLA-25022\"><span class=\"verse-num\">48</span>Cuando Sus padres lo vieron, se quedaron maravillados; y Su madre le dijo: «Hijo, ¿por qué nos has tratado de esta manera? Mira, Tu padre y yo te hemos estado buscando llenos de angustia».</span></p><p><span class=\"text Luke-2-49\" id=\"es-NBLA-25023\"><span class=\"verse-num\">49</span>Entonces Él les dijo: <span class=\"woj\">«¿Por qué me buscaban? ¿Acaso no sabían que me era necesario estar en la casa de Mi Padre</span><span class=\"woj\">?».</span> </span> <span class=\"text Luke-2-50\" id=\"es-NBLA-25024\"><span class=\"verse-num\">50</span>Pero ellos no entendieron las palabras que Él les había dicho. </span> <span class=\"text Luke-2-51\" id=\"es-NBLA-25025\"><span class=\"verse-num\">51</span>Descendió con sus padres y vino a Nazaret, y continuó sujeto a ellos. Y Su madre atesoraba todas estas cosas en su corazón. </span> <span class=\"text Luke-2-52\" id=\"es-NBLA-25026\"><span class=\"verse-num\">52</span>Y Jesús crecía en sabiduría, en estatura y en gracia para con Dios y los hombres.</span></p>"
        },
        {
            "ref": "1 Reyes 8:27",
            "text": "<p><span class=\"text 1Kgs-8-27\" id=\"es-NBLA-9013\"><span class=\"verse-num\">27</span>Pero, ¿morará verdaderamente Dios sobre la tierra? Si los cielos y los cielos de los cielos no te pueden contener, cuánto menos esta casa que yo he edificado. </span></p>"
        },
        {
            "ref": "Salmos 27:4",
            "text": "<p><span class=\"text Ps-27-4\" id=\"es-NBLA-14290\"><span class=\"verse-num\">4</span>¶Una cosa he pedido al <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>, <i>y</i> esa buscaré:</span><br/><span class=\"text Ps-27-4\">Que habite yo en la casa del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> todos los días de mi vida,</span><br/><span class=\"text Ps-27-4\">Para contemplar la hermosura del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span></span><br/><span class=\"text Ps-27-4\">Y para meditar en Su templo.</span></p>"
        },
        {
            "ref": "Salmos 84:1-4",
            "text": "<p><span class=\"text Ps-84-1\"><span class=\"verse-num\">1</span>¡Cuán preciosas son Tus moradas,</span><br/><span class=\"text Ps-84-1\">Oh <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> de los ejércitos!</span><br/><span class=\"text Ps-84-2\" id=\"es-NBLA-15262\"><span class=\"verse-num\">2</span>Anhela mi alma, y aun desea con ansias los atrios del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>;</span><br/><span class=\"text Ps-84-2\">Mi corazón y mi carne cantan con gozo al Dios vivo.</span><br/><span class=\"text Ps-84-3\" id=\"es-NBLA-15263\"><span class=\"verse-num\">3</span>Aun el gorrión ha hallado casa,</span><br/><span class=\"text Ps-84-3\">Y la golondrina nido para sí donde poner sus polluelos:</span><br/><span class=\"text Ps-84-3\">¡Tus altares, oh <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> de los ejércitos,</span><br/><span class=\"text Ps-84-3\">Rey mío y Dios mío!</span><br/><span class=\"text Ps-84-4\" id=\"es-NBLA-15264\"><span class=\"verse-num\">4</span>¡Cuán bienaventurados son los que moran en Tu casa!</span><br/><span class=\"text Ps-84-4\">Continuamente te alaban. <i class=\"selah\">(Selah)</i></span></p>"
        },
        {
            "ref": "Juan 2:16-17",
            "text": "<p><span class=\"text John-2-16\" id=\"es-NBLA-26112\"><span class=\"verse-num\">16</span>A los que vendían palomas les dijo: <span class=\"woj\">«Quiten esto de aquí; no hagan de la casa de Mi Padre</span><span class=\"woj\">una casa de comercio».</span></span></p><p><span class=\"text John-2-17\" id=\"es-NBLA-26113\"><span class=\"verse-num\">17</span>Sus discípulos se acordaron de que estaba escrito: «<span class=\"small-caps\" style=\"font-variant: small-caps\">El celo por Tu casa me consumirá</span>».</span></p>"
        }
    ],
    "dolorosos-0": [
        {
            "ref": "Mateo 26:36-46",
            "text": "<p><span class=\"text Matt-26-36\"><span class=\"verse-num\">36</span>Entonces Jesús llegó con ellos a un lugar que se llama Getsemaní, y dijo a Sus discípulos: <span class=\"woj\">«Siéntense aquí mientras Yo voy allá y oro</span><span class=\"woj\">».</span> </span> <span class=\"text Matt-26-37\" id=\"es-NBLA-24092\"><span class=\"verse-num\">37</span>Y tomando con Él a Pedro y a los dos hijos de Zebedeo, comenzó a entristecerse y a angustiarse. </span> <span class=\"text Matt-26-38\" id=\"es-NBLA-24093\"><span class=\"verse-num\">38</span>Entonces les dijo: <span class=\"woj\">«Mi alma está muy afligida</span><span class=\"woj\">, hasta el punto de la muerte; quédense aquí y velen junto a Mí</span><span class=\"woj\">».</span></span></p><p><span class=\"text Matt-26-39\" id=\"es-NBLA-24094\"><span class=\"verse-num\">39</span>Y adelantándose un poco, cayó sobre Su rostro, orando y diciendo: <span class=\"woj\">«Padre Mío, si es posible, que pase de Mí esta copa</span><span class=\"woj\">; pero no sea como Yo quiero, sino como Tú <i>quieras</i></span><span class=\"woj\">».</span> </span> <span class=\"text Matt-26-40\" id=\"es-NBLA-24095\"><span class=\"verse-num\">40</span>Entonces vino Jesús a los discípulos y los halló durmiendo, y dijo a Pedro: <span class=\"woj\">«¿Conque no pudieron velar una hora junto a Mí</span><span class=\"woj\">?</span> </span> <span class=\"text Matt-26-41\" id=\"es-NBLA-24096\"><span class=\"verse-num\">41</span><span class=\"woj\">Velen</span><span class=\"woj\">y oren para que no entren en tentación; el espíritu está dispuesto, pero la carne es débil</span><span class=\"woj\">».</span></span></p><p><span class=\"text Matt-26-42\" id=\"es-NBLA-24097\"><span class=\"verse-num\">42</span>Apartándose de nuevo, oró por segunda vez, diciendo: <span class=\"woj\">«Padre Mío, si esta <i>copa</i> no puede pasar sin que Yo la beba</span><span class=\"woj\">, hágase Tu voluntad</span><span class=\"woj\">».</span> </span> <span class=\"text Matt-26-43\" id=\"es-NBLA-24098\"><span class=\"verse-num\">43</span>Vino otra vez Jesús y los halló durmiendo, porque sus ojos estaban cargados <i>de sueño.</i> </span> <span class=\"text Matt-26-44\" id=\"es-NBLA-24099\"><span class=\"verse-num\">44</span>Dejándolos de nuevo, se fue y oró por tercera vez, y dijo otra vez las mismas palabras. </span> <span class=\"text Matt-26-45\" id=\"es-NBLA-24100\"><span class=\"verse-num\">45</span>Entonces vino a los discípulos y les dijo: <span class=\"woj\">«¿Todavía están</span><span class=\"woj\">durmiendo y descansando? Vean, ha llegado la hora</span><span class=\"woj\">, y el Hijo del Hombre es entregado en manos de pecadores.</span> </span> <span class=\"text Matt-26-46\" id=\"es-NBLA-24101\"><span class=\"verse-num\">46</span><span class=\"woj\">¡Levántense! ¡Vamos! Miren, está cerca el que me entrega».</span></span></p>"
        },
        {
            "ref": "Marcos 14:32-42",
            "text": "<p><span class=\"text Mark-14-32\"><span class=\"verse-num\">32</span>Llegaron a un lugar que se llama Getsemaní, y Jesús dijo a Sus discípulos: <span class=\"woj\">«Siéntense aquí hasta que Yo haya orado».</span> </span> <span class=\"text Mark-14-33\" id=\"es-NBLA-24788\"><span class=\"verse-num\">33</span>Tomó con Él a Pedro, a Jacobo y a Juan, y comenzó a afligirse y a angustiarse mucho. </span> <span class=\"text Mark-14-34\" id=\"es-NBLA-24789\"><span class=\"verse-num\">34</span><span class=\"woj\">«Mi alma está muy afligida, hasta el punto de la muerte»,</span> les dijo; <span class=\"woj\">«quédense aquí y velen</span><span class=\"woj\">».</span></span></p><p><span class=\"text Mark-14-35\" id=\"es-NBLA-24790\"><span class=\"verse-num\">35</span>Adelantándose un poco, se postró en tierra y oraba que si fuera posible, pasara de Él aquella hora. </span> <span class=\"text Mark-14-36\" id=\"es-NBLA-24791\"><span class=\"verse-num\">36</span>Y decía: <span class=\"woj\">«¡Abba, Padre</span><span class=\"woj\">! Para Ti todas las cosas son posibles; aparta de Mí esta copa, pero no sea lo que Yo quiero, sino lo que Tú <i>quieras</i></span><span class=\"woj\">».</span> </span> <span class=\"text Mark-14-37\" id=\"es-NBLA-24792\"><span class=\"verse-num\">37</span>Entonces Jesús vino y los halló durmiendo, y dijo a Pedro: <span class=\"woj\">«Simón, ¿duermes? ¿No pudiste velar ni por una hora?</span> </span> <span class=\"text Mark-14-38\" id=\"es-NBLA-24793\"><span class=\"verse-num\">38</span><span class=\"woj\">Velen y oren para que no entren en tentación; el espíritu está dispuesto, pero la carne es débil</span><span class=\"woj\">».</span></span></p><p><span class=\"text Mark-14-39\" id=\"es-NBLA-24794\"><span class=\"verse-num\">39</span>Él se fue otra vez y oró, diciendo las mismas palabras. </span> <span class=\"text Mark-14-40\" id=\"es-NBLA-24795\"><span class=\"verse-num\">40</span>Y vino Jesús de nuevo y los halló durmiendo, porque sus ojos estaban muy cargados <i>de sueño;</i> y no sabían qué responder. </span> <span class=\"text Mark-14-41\" id=\"es-NBLA-24796\"><span class=\"verse-num\">41</span>Vino por tercera vez, y les dijo: <span class=\"woj\">«¿Todavía están</span><span class=\"woj\">durmiendo y descansando? Basta ya</span><span class=\"woj\">; ha llegado la hora; miren, el Hijo del Hombre es entregado en manos de los pecadores.</span> </span> <span class=\"text Mark-14-42\" id=\"es-NBLA-24797\"><span class=\"verse-num\">42</span><span class=\"woj\">Levántense, vámonos; ya está cerca el que me entrega».</span></span></p>"
        },
        {
            "ref": "Lucas 22:39-46",
            "text": "<p><span class=\"text Luke-22-39\"><span class=\"verse-num\">39</span>Saliendo Jesús, se encaminó, como de costumbre, hacia el monte de los Olivos; y los discípulos también lo siguieron. </span> <span class=\"text Luke-22-40\" id=\"es-NBLA-25905\"><span class=\"verse-num\">40</span>Cuando llegó al lugar, les dijo: <span class=\"woj\">«Oren para que no entren en tentación</span><span class=\"woj\">».</span></span></p><p><span class=\"text Luke-22-41\" id=\"es-NBLA-25906\"><span class=\"verse-num\">41</span>Y se apartó de ellos como a un tiro de piedra, y poniéndose de rodillas, oraba, </span> <span class=\"text Luke-22-42\" id=\"es-NBLA-25907\"><span class=\"verse-num\">42</span>diciendo: <span class=\"woj\">«Padre, si es Tu voluntad, aparta de Mí esta copa</span><span class=\"woj\">; pero no se haga Mi voluntad, sino la Tuya</span><span class=\"woj\">».</span> </span> <span class=\"text Luke-22-43\" id=\"es-NBLA-25908\"><span class=\"verse-num\">43</span>Entonces se apareció un ángel del cielo, que lo fortalecía. </span> <span class=\"text Luke-22-44\" id=\"es-NBLA-25909\"><span class=\"verse-num\">44</span>Y estando en agonía, oraba con mucho fervor; y Su sudor se volvió como gruesas gotas de sangre, que caían sobre la tierra.</span></p><p><span class=\"text Luke-22-45\" id=\"es-NBLA-25910\"><span class=\"verse-num\">45</span>Cuando se levantó de orar, fue a los discípulos y los halló dormidos a causa de la tristeza, </span> <span class=\"text Luke-22-46\" id=\"es-NBLA-25911\"><span class=\"verse-num\">46</span>y les dijo: <span class=\"woj\">«¿Por qué duermen? Levántense y oren para que no entren en tentación</span><span class=\"woj\">».</span></span></p>"
        },
        {
            "ref": "Juan 18:1-2",
            "text": "<p><span class=\"text John-18-1\"><span class=\"verse-num\">1</span>Después de decir esto, Jesús salió con Sus discípulos al otro lado del torrente Cedrón, donde había un huerto en el cual entró Él con Sus discípulos. </span> <span class=\"text John-18-2\" id=\"es-NBLA-26788\"><span class=\"verse-num\">2</span>También Judas, el que lo iba a entregar, conocía el lugar porque Jesús se había reunido allí muchas veces con Sus discípulos. </span></p>"
        },
        {
            "ref": "Salmos 42:5, 11",
            "text": "<p><span class=\"text Ps-42-5\" id=\"es-NBLA-14561\"><span class=\"verse-num\">5</span>¶¿Por qué te desesperas, alma mía,</span><br/><span class=\"text Ps-42-5\">Y <i>por qué</i> te turbas dentro de mí?</span><br/><span class=\"text Ps-42-5\">Espera en Dios, pues he de alabarlo otra vez</span><br/><span class=\"text Ps-42-5\"><i>Por</i> la salvación de Su presencia.</span></p>"
        },
        {
            "ref": "Hebreos 5:7-8",
            "text": "<p><span class=\"text Heb-5-7\" id=\"es-NBLA-30038\"><span class=\"verse-num\">7</span>Cristo, en los días de Su carne, habiendo ofrecido oraciones y súplicas con gran clamor y lágrimas al que lo podía librar de la muerte, fue oído a causa de Su temor reverente. </span> <span class=\"text Heb-5-8\" id=\"es-NBLA-30039\"><span class=\"verse-num\">8</span>Aunque era Hijo, aprendió obediencia por lo que padeció; </span></p>"
        }
    ],
    "dolorosos-1": [
        {
            "ref": "Mateo 27:26",
            "text": "<p><span class=\"text Matt-27-26\" id=\"es-NBLA-24156\"><span class=\"verse-num\">26</span>Entonces les soltó a Barrabás, y después de hacer azotar a Jesús, lo entregó para que fuera crucificado.</span></p>"
        },
        {
            "ref": "Marcos 15:15",
            "text": "<p><span class=\"text Mark-15-15\" id=\"es-NBLA-24842\"><span class=\"verse-num\">15</span>Pilato, queriendo complacer a la multitud, les soltó a Barrabás; y después de hacer azotar a Jesús, <i>lo</i> entregó para que fuera crucificado.</span></p>"
        },
        {
            "ref": "Lucas 23:16, 22",
            "text": "<p><span class=\"text Luke-23-16\" id=\"es-NBLA-25952\"><span class=\"verse-num\">16</span>Por tanto, lo voy a castigar y después, lo soltaré». </span></p>"
        },
        {
            "ref": "Juan 19:1",
            "text": "<p><span class=\"text John-19-1\" id=\"es-NBLA-26827\"><span class=\"verse-num\">1</span>Entonces, Pilato tomó a Jesús y lo azotó. </span></p>"
        },
        {
            "ref": "Salmos 129:3",
            "text": "<p><span class=\"text Ps-129-3\" id=\"es-NBLA-16136\"><span class=\"verse-num\">3</span>-»Sobre mis espaldas araron los aradores;</span><br/><span class=\"text Ps-129-3\">Alargaron sus surcos».</span></p>"
        },
        {
            "ref": "Isaías 50:6",
            "text": "<p><span class=\"text Isa-50-6\" id=\"es-NBLA-18669\"><span class=\"verse-num\">6</span>Ofrecí Mi espalda a los que <i>me</i> herían,</span><br/><span class=\"text Isa-50-6\">Y Mis mejillas a los que <i>me</i> arrancaban la barba;</span><br/><span class=\"text Isa-50-6\">No escondí Mi rostro de injurias y salivazos.</span></p>"
        },
        {
            "ref": "Isaías 53:4-5",
            "text": "<p><span class=\"text Isa-53-4\" id=\"es-NBLA-18716\"><span class=\"verse-num\">4</span>¶Ciertamente Él llevó nuestras enfermedades,</span><br/><span class=\"text Isa-53-4\">Y cargó con nuestros dolores.</span><br/><span class=\"text Isa-53-4\">Con todo, nosotros lo tuvimos por azotado,</span><br/><span class=\"text Isa-53-4\">Por herido de Dios y afligido.</span><br/><span class=\"text Isa-53-5\" id=\"es-NBLA-18717\"><span class=\"verse-num\">5</span>Pero Él fue herido por nuestras transgresiones,</span><br/><span class=\"text Isa-53-5\">Molido por nuestras iniquidades.</span><br/><span class=\"text Isa-53-5\">El castigo, por nuestra paz, <i>cayó</i> sobre Él,</span><br/><span class=\"text Isa-53-5\">Y por Sus heridas hemos sido sanados.</span></p>"
        },
        {
            "ref": "1 Pedro 2:24",
            "text": "<p><span class=\"text 1Pet-2-24\" id=\"es-NBLA-30424\"><span class=\"verse-num\">24</span>Él mismo llevó nuestros pecados en Su cuerpo sobre la cruz, a fin de que muramos al pecado y vivamos a la justicia, porque por Sus heridas fueron ustedes sanados. </span></p>"
        }
    ],
    "dolorosos-2": [
        {
            "ref": "Mateo 27:27-31",
            "text": "<p><span class=\"text Matt-27-27\"><span class=\"verse-num\">27</span>Entonces los soldados del gobernador llevaron a Jesús al Pretorio, y reunieron alrededor de Él a toda la tropa <i>romana.</i> </span> <span class=\"text Matt-27-28\" id=\"es-NBLA-24158\"><span class=\"verse-num\">28</span>Después de quitarle la ropa, le pusieron encima un manto escarlata. </span> <span class=\"text Matt-27-29\" id=\"es-NBLA-24159\"><span class=\"verse-num\">29</span>Y tejiendo una corona de espinas, la pusieron sobre Su cabeza, y una caña en Su <i>mano</i> derecha; y arrodillándose delante de Él, le hacían burla, diciendo: «¡Salve, Rey de los judíos!». </span> <span class=\"text Matt-27-30\" id=\"es-NBLA-24160\"><span class=\"verse-num\">30</span>Le escupían, y tomaban la caña y lo golpeaban en la cabeza. </span> <span class=\"text Matt-27-31\" id=\"es-NBLA-24161\"><span class=\"verse-num\">31</span>Después de haberse burlado de Él, le quitaron el manto, le pusieron Sus ropas y lo llevaron para ser crucificado.</span></p>"
        },
        {
            "ref": "Marcos 15:16-20",
            "text": "<p><span class=\"text Mark-15-16\"><span class=\"verse-num\">16</span>Entonces los soldados llevaron a Jesús dentro del palacio, es decir, al Pretorio, y convocaron a toda la tropa <i>romana</i>. </span> <span class=\"text Mark-15-17\" id=\"es-NBLA-24844\"><span class=\"verse-num\">17</span>Lo vistieron de púrpura, y después de tejer una corona de espinas, se la pusieron; </span> <span class=\"text Mark-15-18\" id=\"es-NBLA-24845\"><span class=\"verse-num\">18</span>y comenzaron a gritar: «¡Salve, Rey de los judíos!». </span> <span class=\"text Mark-15-19\" id=\"es-NBLA-24846\"><span class=\"verse-num\">19</span>Le golpeaban la cabeza con una caña y le escupían, y poniéndose de rodillas, le hacían reverencias. </span> <span class=\"text Mark-15-20\" id=\"es-NBLA-24847\"><span class=\"verse-num\">20</span>Después de haberse burlado de Jesús, le quitaron el manto de púrpura, le pusieron Sus ropas y lo sacaron para que fuera crucificado.</span></p>"
        },
        {
            "ref": "Juan 19:2-5",
            "text": "<p><span class=\"text John-19-2\" id=\"es-NBLA-26828\"><span class=\"verse-num\">2</span>Y los soldados tejieron una corona de espinas, la pusieron sobre Su cabeza y lo vistieron con un manto de púrpura; </span> <span class=\"text John-19-3\" id=\"es-NBLA-26829\"><span class=\"verse-num\">3</span>y acercándose a Jesús, le decían: «¡Salve, Rey de los judíos!». Y le daban bofetadas. </span> <span class=\"text John-19-4\" id=\"es-NBLA-26830\"><span class=\"verse-num\">4</span>Pilato salió otra vez, y les dijo: «Miren, lo traigo fuera, para que sepan que no encuentro ningún delito en Él».</span></p><p><span class=\"text John-19-5\" id=\"es-NBLA-26831\"><span class=\"verse-num\">5</span>Y cuando Jesús salió fuera, llevaba la corona de espinas y el manto de púrpura. Y <i>Pilato</i> les dijo: «¡Aquí está el Hombre!». </span></p>"
        },
        {
            "ref": "Isaías 52:14",
            "text": "<p><span class=\"text Isa-52-14\" id=\"es-NBLA-18711\"><span class=\"verse-num\">14</span>De la manera que muchos se asombraron de ti, <i>pueblo Mío,</i></span><br/><span class=\"text Isa-52-14\">Así fue desfigurada Su apariencia más que la de <i>cualquier</i> hombre,</span><br/><span class=\"text Isa-52-14\">Y Su aspecto más que el de los hijos de los hombres.</span></p>"
        },
        {
            "ref": "Isaías 53:3",
            "text": "<p><span class=\"text Isa-53-3\" id=\"es-NBLA-18715\"><span class=\"verse-num\">3</span>Fue despreciado y desechado de los hombres,</span><br/><span class=\"text Isa-53-3\">Varón de dolores y experimentado en aflicción;</span><br/><span class=\"text Isa-53-3\">Y como uno de quien <i>los hombres</i> esconden el rostro,</span><br/><span class=\"text Isa-53-3\">Fue despreciado, y no lo estimamos.</span></p>"
        },
        {
            "ref": "Cantares 3:11",
            "text": "<p><span class=\"text Song-3-11\" id=\"es-NBLA-17583\"><span class=\"verse-num\">11</span>-»Salgan, hijas de Sión,</span><br/><span class=\"text Song-3-11\">Y contemplen al rey Salomón con la corona</span><br/><span class=\"text Song-3-11\">Con la cual su madre lo coronó</span><br/><span class=\"text Song-3-11\">El día de sus bodas,</span><br/><span class=\"text Song-3-11\">El día de la alegría de su corazón».</span></p>"
        }
    ],
    "dolorosos-3": [
        {
            "ref": "Mateo 27:32",
            "text": "<p><span class=\"text Matt-27-32\" id=\"es-NBLA-24162\"><span class=\"verse-num\">32</span>Y cuando salían, hallaron a un hombre de Cirene llamado Simón, al cual obligaron a que llevara Su cruz.</span></p>"
        },
        {
            "ref": "Marcos 15:21",
            "text": "<p><span class=\"text Mark-15-21\" id=\"es-NBLA-24848\"><span class=\"verse-num\">21</span>Y obligaron a uno que pasaba <i>y</i> que venía del campo, Simón de Cirene, padre de Alejandro y Rufo, a que llevara la cruz de Jesús.</span></p>"
        },
        {
            "ref": "Lucas 23:26-32",
            "text": "<p><span class=\"text Luke-23-26\"><span class=\"verse-num\">26</span>Cuando lo llevaban, tomaron a un tal Simón de Cirene que venía del campo y le pusieron la cruz encima para que la llevara detrás de Jesús.</span></p><p><span class=\"text Luke-23-27\" id=\"es-NBLA-25963\"><span class=\"verse-num\">27</span>Y seguía a Jesús una gran multitud del pueblo y de mujeres que lloraban y se lamentaban por Él. </span> <span class=\"text Luke-23-28\" id=\"es-NBLA-25964\"><span class=\"verse-num\">28</span>Pero Jesús, volviéndose a ellas, dijo: <span class=\"woj\">«Hijas de Jerusalén, no lloren por Mí; lloren más bien por ustedes mismas y por sus hijos.</span> </span> <span class=\"text Luke-23-29\" id=\"es-NBLA-25965\"><span class=\"verse-num\">29</span><span class=\"woj\">Porque vienen días en que dirán: “Dichosas las estériles, los vientres que nunca concibieron y los senos que nunca criaron</span><span class=\"woj\">”.</span> </span> <span class=\"text Luke-23-30\" id=\"es-NBLA-25966\"><span class=\"verse-num\">30</span><span class=\"woj\">Entonces comenzarán <span class=\"small-caps\" style=\"font-variant: small-caps\">a decir a los montes</span>: “<span class=\"small-caps\" style=\"font-variant: small-caps\">Caigan sobre nosotros</span>”; <span class=\"small-caps\" style=\"font-variant: small-caps\">y a los collados</span>: “<span class=\"small-caps\" style=\"font-variant: small-caps\">Cúbrannos</span></span><span class=\"woj\">”.</span> </span> <span class=\"text Luke-23-31\" id=\"es-NBLA-25967\"><span class=\"verse-num\">31</span><span class=\"woj\">Porque si en el árbol verde hacen esto, ¿qué sucederá en el seco?».</span></span></p><p><span class=\"text Luke-23-32\" id=\"es-NBLA-25968\"><span class=\"verse-num\">32</span>También llevaban a otros dos, que eran malhechores, para ser muertos con Él.</span></p>"
        },
        {
            "ref": "Juan 19:16-17",
            "text": "<p><span class=\"text John-19-16\" id=\"es-NBLA-26842\"><span class=\"verse-num\">16</span>Así que entonces Pilato lo entregó a ellos para que fuera crucificado.</span></p><p><span class=\"text John-19-17\"><span class=\"verse-num\">17</span>Tomaron, pues, a Jesús, y Él salió cargando Su cruz al <i>sitio</i> llamado el Lugar de la Calavera, que en hebreo se dice Gólgota, </span></p>"
        },
        {
            "ref": "Génesis 22:6",
            "text": "<p><span class=\"text Gen-22-6\" id=\"es-NBLA-554\"><span class=\"verse-num\">6</span>Tomó Abraham la leña del holocausto y la puso sobre Isaac su hijo, y tomó en su mano el fuego y el cuchillo. Y los dos iban juntos.</span></p>"
        },
        {
            "ref": "Isaías 53:7",
            "text": "<p><span class=\"text Isa-53-7\" id=\"es-NBLA-18719\"><span class=\"verse-num\">7</span>¶Fue oprimido y afligido,</span><br/><span class=\"text Isa-53-7\">Pero no abrió Su boca.</span><br/><span class=\"text Isa-53-7\">Como cordero que es llevado al matadero,</span><br/><span class=\"text Isa-53-7\">Y como oveja que ante sus trasquiladores permanece muda,</span><br/><span class=\"text Isa-53-7\">Él no abrió Su boca.</span></p>"
        },
        {
            "ref": "Hebreos 13:12-13",
            "text": "<p><span class=\"text Heb-13-12\" id=\"es-NBLA-30254\"><span class=\"verse-num\">12</span>Por lo cual también Jesús, para santificar al pueblo mediante Su propia sangre, padeció fuera de la puerta. </span> <span class=\"text Heb-13-13\" id=\"es-NBLA-30255\"><span class=\"verse-num\">13</span>Así pues, salgamos a Su encuentro fuera del campamento, llevando Su oprobio. </span></p>"
        }
    ],
    "dolorosos-4": [
        {
            "ref": "Mateo 27:33-56",
            "text": "<p><span class=\"text Matt-27-33\"><span class=\"verse-num\">33</span>Cuando llegaron a un lugar llamado Gólgota, que significa Lugar de la Calavera, </span> <span class=\"text Matt-27-34\" id=\"es-NBLA-24164\"><span class=\"verse-num\">34</span>Le dieron a beber vino mezclado con hiel; pero después de probar<i>lo,</i> no <i>lo</i> quiso beber.</span></p><p><span class=\"text Matt-27-35\" id=\"es-NBLA-24165\"><span class=\"verse-num\">35</span>Y habiendo crucificado a Jesús, se repartieron Sus vestidos echando suertes; </span> <span class=\"text Matt-27-36\" id=\"es-NBLA-24166\"><span class=\"verse-num\">36</span>y sentados, lo custodiaban allí. </span> <span class=\"text Matt-27-37\" id=\"es-NBLA-24167\"><span class=\"verse-num\">37</span>Pusieron sobre Su cabeza la acusación contra Él, que decía: «ESTE ES JESÚS, EL REY DE LOS JUDÍOS».</span></p><p><span class=\"text Matt-27-38\" id=\"es-NBLA-24168\"><span class=\"verse-num\">38</span>Entonces fueron crucificados con Él dos ladrones, uno a la derecha y otro a la izquierda. </span> <span class=\"text Matt-27-39\" id=\"es-NBLA-24169\"><span class=\"verse-num\">39</span>Los que pasaban lo injuriaban, meneando la cabeza </span> <span class=\"text Matt-27-40\" id=\"es-NBLA-24170\"><span class=\"verse-num\">40</span>y diciendo: «Tú que destruyes el templo y en tres días lo reedificas, sálvate a Ti mismo. Si Tú eres el Hijo de Dios, desciende de la cruz».</span></p><p><span class=\"text Matt-27-41\" id=\"es-NBLA-24171\"><span class=\"verse-num\">41</span>De igual manera, también los principales sacerdotes, junto con los escribas y los ancianos, burlándose <i>de Él,</i> decían: </span> <span class=\"text Matt-27-42\" id=\"es-NBLA-24172\"><span class=\"verse-num\">42</span>«A otros salvó; a Él mismo no puede salvarse. Rey de Israel es; que baje ahora de la cruz, y creeremos en Él. </span> <span class=\"text Matt-27-43\" id=\"es-NBLA-24173\"><span class=\"verse-num\">43</span><span class=\"small-caps\" style=\"font-variant: small-caps\">En Dios confía</span>; <span class=\"small-caps\" style=\"font-variant: small-caps\">que</span> <i>lo</i> <span class=\"small-caps\" style=\"font-variant: small-caps\">libre</span> ahora <span class=\"small-caps\" style=\"font-variant: small-caps\">si</span> É<span class=\"small-caps\" style=\"font-variant: small-caps\">l lo quiere</span>; porque ha dicho: “Yo soy el Hijo de Dios”». </span> <span class=\"text Matt-27-44\" id=\"es-NBLA-24174\"><span class=\"verse-num\">44</span>En la misma forma lo injuriaban también los ladrones que habían sido crucificados con Él.</span></p><p><span class=\"text Matt-27-45\"><span class=\"verse-num\">45</span>Desde la hora sexta hubo oscuridad sobre toda la tierra hasta la hora novena. </span> <span class=\"text Matt-27-46\" id=\"es-NBLA-24176\"><span class=\"verse-num\">46</span>Y alrededor de la hora novena, Jesús exclamó a gran voz, diciendo: <span class=\"woj\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Elí</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Elí</span>, ¿<span class=\"small-caps\" style=\"font-variant: small-caps\">lema sabactani</span>?».</span> Esto es: <span class=\"woj\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Dios Mío</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Dios Mío</span>, ¿<span class=\"small-caps\" style=\"font-variant: small-caps\">por qué me has abandonado</span></span><span class=\"woj\">?».</span></span></p><p><span class=\"text Matt-27-47\" id=\"es-NBLA-24177\"><span class=\"verse-num\">47</span>Algunos de los que estaban allí, al oírlo, decían: «Este llama a Elías». </span> <span class=\"text Matt-27-48\" id=\"es-NBLA-24178\"><span class=\"verse-num\">48</span>Al instante, uno de ellos corrió, y tomando una esponja, la empapó en vinagre, y poniéndola en una caña, le dio a beber. </span> <span class=\"text Matt-27-49\" id=\"es-NBLA-24179\"><span class=\"verse-num\">49</span>Pero los otros dijeron: «Deja, veamos si Elías lo viene a salvar».</span></p><p><span class=\"text Matt-27-50\" id=\"es-NBLA-24180\"><span class=\"verse-num\">50</span>Entonces Jesús, clamando otra vez a gran voz, exhaló el espíritu.</span></p><p><span class=\"text Matt-27-51\" id=\"es-NBLA-24181\"><span class=\"verse-num\">51</span>En ese momento el velo del templo se rasgó en dos, de arriba abajo, y la tierra tembló y las rocas se partieron; </span> <span class=\"text Matt-27-52\" id=\"es-NBLA-24182\"><span class=\"verse-num\">52</span>y los sepulcros se abrieron, y los cuerpos de muchos santos que habían dormido resucitaron; </span> <span class=\"text Matt-27-53\" id=\"es-NBLA-24183\"><span class=\"verse-num\">53</span>y saliendo de los sepulcros, después de la resurrección de Jesús, entraron en la santa ciudad y se aparecieron a muchos.</span></p><p><span class=\"text Matt-27-54\" id=\"es-NBLA-24184\"><span class=\"verse-num\">54</span>El centurión y los que estaban con él custodiando a Jesús, cuando vieron el terremoto y las cosas que sucedían, se asustaron mucho, y dijeron: «En verdad este era Hijo de Dios». </span> <span class=\"text Matt-27-55\" id=\"es-NBLA-24185\"><span class=\"verse-num\">55</span>Y muchas mujeres que habían seguido a Jesús desde Galilea para servirle, estaban allí, mirando de lejos. </span> <span class=\"text Matt-27-56\" id=\"es-NBLA-24186\"><span class=\"verse-num\">56</span>Entre ellas estaban María Magdalena, María la madre de Jacobo y de José, y la madre de los hijos de Zebedeo.</span></p>"
        },
        {
            "ref": "Marcos 15:22-41",
            "text": "<p><span class=\"text Mark-15-22\"><span class=\"verse-num\">22</span>Lo llevaron al lugar <i>llamado</i> Gólgota, que traducido significa Lugar de la Calavera. </span> <span class=\"text Mark-15-23\" id=\"es-NBLA-24850\"><span class=\"verse-num\">23</span>Trataron de dar a Jesús vino mezclado con mirra, pero Él no lo tomó. </span> <span class=\"text Mark-15-24\" id=\"es-NBLA-24851\"><span class=\"verse-num\">24</span>Cuando lo crucificaron, se repartieron Sus vestidos, echando suertes sobre ellos <i>para decidir</i> lo que cada uno tomaría. </span> <span class=\"text Mark-15-25\" id=\"es-NBLA-24852\"><span class=\"verse-num\">25</span>Era la hora tercera cuando lo crucificaron. </span> <span class=\"text Mark-15-26\" id=\"es-NBLA-24853\"><span class=\"verse-num\">26</span>La inscripción de la acusación contra Él decía: «EL REY DE LOS JUDÍOS». </span> <span class=\"text Mark-15-27\" id=\"es-NBLA-24854\"><span class=\"verse-num\">27</span>Crucificaron con Él a dos ladrones; uno a Su derecha y otro a Su izquierda. </span> <span class=\"text Mark-15-28\" id=\"es-NBLA-24855\"><span class=\"verse-num\">28</span>Y se cumplió la Escritura que dice: «Y con los transgresores fue contado».</span></p><p><span class=\"text Mark-15-29\" id=\"es-NBLA-24856\"><span class=\"verse-num\">29</span>Los que pasaban lo injuriaban, meneando la cabeza y diciendo: «¡Bah! Tú que destruyes el templo y en tres días lo reedificas, </span> <span class=\"text Mark-15-30\" id=\"es-NBLA-24857\"><span class=\"verse-num\">30</span>¡sálvate a Ti mismo descendiendo de la cruz!». </span> <span class=\"text Mark-15-31\" id=\"es-NBLA-24858\"><span class=\"verse-num\">31</span>De igual manera, también los principales sacerdotes junto con los escribas, burlándose <i>de Él</i> entre ellos, decían: «A otros salvó, Él mismo no se puede salvar. </span> <span class=\"text Mark-15-32\" id=\"es-NBLA-24859\"><span class=\"verse-num\">32</span>Que este Cristo, el Rey de Israel, descienda ahora de la cruz, para que veamos y creamos». Y los que estaban crucificados con Él <i>también</i> lo insultaban.</span></p><p><span class=\"text Mark-15-33\"><span class=\"verse-num\">33</span>Cuando llegó la hora sexta, hubo oscuridad sobre toda la tierra hasta la hora novena. </span> <span class=\"text Mark-15-34\" id=\"es-NBLA-24861\"><span class=\"verse-num\">34</span>Y a la hora novena Jesús exclamó con fuerte voz: <span class=\"woj\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Eloi</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Eloi</span>, ¿<span class=\"small-caps\" style=\"font-variant: small-caps\">lema sabactani</span>?»,</span> que traducido significa, <span class=\"woj\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Dios Mío</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Dios Mío</span>, ¿<span class=\"small-caps\" style=\"font-variant: small-caps\">por qué me has abandonado</span></span><span class=\"woj\">?».</span> </span> <span class=\"text Mark-15-35\" id=\"es-NBLA-24862\"><span class=\"verse-num\">35</span>Algunos de los que estaban allí, al oír<i>lo,</i> decían: «Miren, está llamando a Elías». </span> <span class=\"text Mark-15-36\" id=\"es-NBLA-24863\"><span class=\"verse-num\">36</span>Entonces uno corrió y empapó una esponja en vinagre, y poniéndola en una caña, dio a Jesús a beber, diciendo: «Dejen, veamos si Elías lo viene a bajar». </span> <span class=\"text Mark-15-37\" id=\"es-NBLA-24864\"><span class=\"verse-num\">37</span>Pero Jesús, dando un fuerte grito, expiró. </span> <span class=\"text Mark-15-38\" id=\"es-NBLA-24865\"><span class=\"verse-num\">38</span>Y el velo del templo se rasgó en dos, de arriba abajo.</span></p><p><span class=\"text Mark-15-39\" id=\"es-NBLA-24866\"><span class=\"verse-num\">39</span>Viendo el centurión que estaba frente a Él, la manera en que expiró, dijo: «En verdad este hombre era Hijo de Dios». </span> <span class=\"text Mark-15-40\" id=\"es-NBLA-24867\"><span class=\"verse-num\">40</span>Había también unas mujeres mirando de lejos, entre las que <i>estaban</i> María Magdalena, María, la madre de Jacobo el menor y de José, y Salomé, </span> <span class=\"text Mark-15-41\" id=\"es-NBLA-24868\"><span class=\"verse-num\">41</span>las cuales cuando Jesús estaba en Galilea, lo seguían y le servían; y <i>había</i> muchas otras que habían subido con Él a Jerusalén.</span></p>"
        },
        {
            "ref": "Lucas 23:33-49",
            "text": "<p><span class=\"text Luke-23-33\"><span class=\"verse-num\">33</span>Cuando llegaron al lugar llamado «La Calavera», crucificaron allí a Jesús y a los malhechores, uno a la derecha y otro a la izquierda. </span> <span class=\"text Luke-23-34\" id=\"es-NBLA-25970\"><span class=\"verse-num\">34</span>Y Jesús decía: <span class=\"woj\">«Padre</span><span class=\"woj\">, perdónalos, porque no saben lo que hacen</span><span class=\"woj\">».</span> Y los soldados echaron suertes, repartiéndose entre sí Sus vestidos.</span></p><p><span class=\"text Luke-23-35\" id=\"es-NBLA-25971\"><span class=\"verse-num\">35</span>El pueblo estaba <i>allí</i> mirando; y aun los gobernantes se burlaban de Él, diciendo: «A otros salvó; que se salve Él mismo si Este es el Cristo de Dios, Su Escogido». </span> <span class=\"text Luke-23-36\" id=\"es-NBLA-25972\"><span class=\"verse-num\">36</span>Los soldados también se burlaban de Jesús, y se acercaban a Él y le ofrecían vinagre, </span> <span class=\"text Luke-23-37\" id=\"es-NBLA-25973\"><span class=\"verse-num\">37</span>diciendo: «Si Tú eres el Rey de los judíos, sálvate a Ti mismo».</span></p><p><span class=\"text Luke-23-38\" id=\"es-NBLA-25974\"><span class=\"verse-num\">38</span>Había también una inscripción sobre Él, <i>que decía:</i> «ESTE ES EL REY DE LOS JUDÍOS».</span></p><p><span class=\"text Luke-23-39\"><span class=\"verse-num\">39</span>Uno de los malhechores que estaban colgados <i>allí</i> le lanzaba insultos, diciendo: «¿No eres Tú el Cristo? ¡Sálvate a Ti mismo y a nosotros!».</span></p><p><span class=\"text Luke-23-40\" id=\"es-NBLA-25976\"><span class=\"verse-num\">40</span>Pero el otro le contestó, y reprendiéndolo, dijo: «¿Ni siquiera temes tú a Dios a pesar de que estás bajo la misma condena? </span> <span class=\"text Luke-23-41\" id=\"es-NBLA-25977\"><span class=\"verse-num\">41</span>Nosotros a la verdad, justamente, porque recibimos lo que merecemos por nuestros hechos; pero este nada malo ha hecho». </span> <span class=\"text Luke-23-42\" id=\"es-NBLA-25978\"><span class=\"verse-num\">42</span>Y añadió: «Jesús, acuérdate de mí cuando vengas en Tu reino». </span> <span class=\"text Luke-23-43\" id=\"es-NBLA-25979\"><span class=\"verse-num\">43</span>Entonces Jesús le dijo: <span class=\"woj\">«En verdad te digo: hoy estarás conmigo en el paraíso</span><span class=\"woj\">».</span></span></p><p><span class=\"text Luke-23-44\"><span class=\"verse-num\">44</span>Era ya como la hora sexta, cuando descendieron tinieblas sobre toda la tierra hasta la hora novena, </span> <span class=\"text Luke-23-45\" id=\"es-NBLA-25981\"><span class=\"verse-num\">45</span>al eclipsarse el sol. El velo del templo se rasgó en dos. </span> <span class=\"text Luke-23-46\" id=\"es-NBLA-25982\"><span class=\"verse-num\">46</span>Y Jesús, clamando a gran voz, dijo: <span class=\"woj\">«Padre, <span class=\"small-caps\" style=\"font-variant: small-caps\">en Tus manos encomiendo Mi espíritu</span></span><span class=\"woj\">».</span> Habiendo dicho esto, expiró.</span></p><p><span class=\"text Luke-23-47\" id=\"es-NBLA-25983\"><span class=\"verse-num\">47</span>Al ver el centurión lo que había sucedido, glorificaba a Dios, diciendo: «Ciertamente, este hombre era inocente». </span> <span class=\"text Luke-23-48\" id=\"es-NBLA-25984\"><span class=\"verse-num\">48</span>Todas las multitudes que se habían reunido para <i>presenciar</i> este espectáculo, al observar lo que había acontecido, se volvieron golpeándose el pecho. </span> <span class=\"text Luke-23-49\" id=\"es-NBLA-25985\"><span class=\"verse-num\">49</span>Pero todos los conocidos de Jesús y las mujeres que lo habían acompañado desde Galilea, estaban a cierta distancia viendo estas cosas.</span></p>"
        },
        {
            "ref": "Juan 19:18-37",
            "text": "<p><span class=\"text John-19-18\" id=\"es-NBLA-26844\"><span class=\"verse-num\">18</span>donde lo crucificaron, y con Él a otros dos, uno a cada lado y Jesús en medio. </span> <span class=\"text John-19-19\" id=\"es-NBLA-26845\"><span class=\"verse-num\">19</span>Pilato también escribió un letrero y lo puso sobre la cruz. Y estaba escrito: «JESÚS EL NAZARENO, EL REY DE LOS JUDÍOS».</span></p><p><span class=\"text John-19-20\" id=\"es-NBLA-26846\"><span class=\"verse-num\">20</span>Entonces muchos judíos leyeron esta inscripción, porque el lugar donde Jesús fue crucificado quedaba cerca de la ciudad; y estaba escrita en hebreo, en latín <i>y</i> en griego. </span> <span class=\"text John-19-21\" id=\"es-NBLA-26847\"><span class=\"verse-num\">21</span>Por eso los principales sacerdotes de los judíos decían a Pilato: «No escribas, “el Rey de los judíos”; sino que Él dijo: “Yo soy Rey de los judíos”». </span> <span class=\"text John-19-22\" id=\"es-NBLA-26848\"><span class=\"verse-num\">22</span>Pilato respondió: «Lo que he escrito, he escrito».</span></p><p><span class=\"text John-19-23\" id=\"es-NBLA-26849\"><span class=\"verse-num\">23</span>Entonces los soldados, cuando crucificaron a Jesús, tomaron Sus vestidos e hicieron cuatro partes, una parte para cada soldado. Y <i>tomaron también</i> la túnica; y la túnica era sin costura, tejida en una sola pieza. </span> <span class=\"text John-19-24\" id=\"es-NBLA-26850\"><span class=\"verse-num\">24</span>Por tanto, se dijeron unos a otros: «No la rompamos; sino echemos suertes sobre ella, <i>para ver</i> de quién será»; para que se cumpliera la Escritura: «<span class=\"small-caps\" style=\"font-variant: small-caps\">Repartieron entre sí Mis vestidos</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">y sobre Mi ropa echaron suertes</span>».</span></p><p><span class=\"text John-19-25\" id=\"es-NBLA-26851\"><span class=\"verse-num\">25</span>Por eso los soldados hicieron esto. Y junto a la cruz de Jesús estaban Su madre, y la hermana de Su madre, María, la <i>mujer</i> de Cleofas, y María Magdalena. </span> <span class=\"text John-19-26\" id=\"es-NBLA-26852\"><span class=\"verse-num\">26</span>Y cuando Jesús vio a Su madre, y al discípulo a quien Él amaba que estaba allí cerca, dijo a Su madre: <span class=\"woj\">«¡Mujer</span><span class=\"woj\">, ahí está tu hijo!».</span> </span> <span class=\"text John-19-27\" id=\"es-NBLA-26853\"><span class=\"verse-num\">27</span>Después dijo al discípulo: <span class=\"woj\">«¡Ahí está tu madre!».</span> Y desde aquella hora el discípulo la recibió en su propia <i>casa</i>.</span></p><p><span class=\"text John-19-28\" id=\"es-NBLA-26854\"><span class=\"verse-num\">28</span>Después de esto, sabiendo Jesús que todo ya se había consumado, para que se cumpliera la Escritura, dijo: <span class=\"woj\">«Tengo sed</span><span class=\"woj\">».</span> </span> <span class=\"text John-19-29\" id=\"es-NBLA-26855\"><span class=\"verse-num\">29</span>Había allí una vasija llena de vinagre. Colocaron, pues, una esponja empapada del vinagre en <i>una rama de</i> hisopo, y se la acercaron a la boca. </span> <span class=\"text John-19-30\" id=\"es-NBLA-26856\"><span class=\"verse-num\">30</span>Entonces Jesús, cuando hubo tomado el vinagre, dijo: <span class=\"woj\">«¡Consumado es!</span><span class=\"woj\">».</span> E inclinando la cabeza, entregó el espíritu.</span></p><p><span class=\"text John-19-31\" id=\"es-NBLA-26857\"><span class=\"verse-num\">31</span>Los judíos entonces, como era el día de preparación <i>para la Pascua,</i> a fin de que los cuerpos no se quedaran en la cruz el día de reposo, porque ese día de reposo era muy solemne, pidieron a Pilato que les quebraran las piernas y se los llevaran. </span> <span class=\"text John-19-32\" id=\"es-NBLA-26858\"><span class=\"verse-num\">32</span>Fueron, pues, los soldados y quebraron las piernas del primero, y <i>también las</i> del otro que había sido crucificado con Jesús. </span> <span class=\"text John-19-33\" id=\"es-NBLA-26859\"><span class=\"verse-num\">33</span>Cuando llegaron a Jesús, como vieron que ya estaba muerto, no le quebraron las piernas; </span> <span class=\"text John-19-34\" id=\"es-NBLA-26860\"><span class=\"verse-num\">34</span>pero uno de los soldados le traspasó el costado con una lanza, y al momento salió sangre y agua.</span></p><p><span class=\"text John-19-35\" id=\"es-NBLA-26861\"><span class=\"verse-num\">35</span>Y el que <i>lo</i> ha visto ha dado testimonio, y su testimonio es verdadero; y él sabe que dice la verdad, para que ustedes también crean. </span> <span class=\"text John-19-36\" id=\"es-NBLA-26862\"><span class=\"verse-num\">36</span>Porque esto sucedió para que se cumpliera la Escritura: «<span class=\"small-caps\" style=\"font-variant: small-caps\">No será quebrado</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">hueso Suyo</span>». </span> <span class=\"text John-19-37\" id=\"es-NBLA-26863\"><span class=\"verse-num\">37</span>Y también otra Escritura dice: «<span class=\"small-caps\" style=\"font-variant: small-caps\">Mirarán a Aquel que traspasaron</span>».</span></p>"
        },
        {
            "ref": "Salmos 22:1-18",
            "text": "<p><span class=\"text Ps-22-1\"><span class=\"verse-num\">1</span>Dios mío, Dios mío, ¿por qué me has abandonado?</span><br/><span class=\"text Ps-22-1\">¿<i>Por qué estás tan</i> lejos de mi salvación <i>y</i> de las palabras de mi clamor?</span><br/><span class=\"text Ps-22-2\" id=\"es-NBLA-14207\"><span class=\"verse-num\">2</span>Dios mío, de día clamo y no respondes;</span><br/><span class=\"text Ps-22-2\">Y de noche, pero no hay para mí reposo.</span><br/><span class=\"text Ps-22-3\" id=\"es-NBLA-14208\"><span class=\"verse-num\">3</span>Sin embargo, Tú eres santo,</span><br/><span class=\"text Ps-22-3\">Que habitas entre las alabanzas de Israel.</span><br/><span class=\"text Ps-22-4\" id=\"es-NBLA-14209\"><span class=\"verse-num\">4</span>En Ti confiaron nuestros padres;</span><br/><span class=\"text Ps-22-4\">Confiaron, y Tú los libraste.</span><br/><span class=\"text Ps-22-5\" id=\"es-NBLA-14210\"><span class=\"verse-num\">5</span>A Ti clamaron, y fueron librados;</span><br/><span class=\"text Ps-22-5\">En Ti confiaron, y no fueron decepcionados.</span><br/><span class=\"text Ps-22-6\" id=\"es-NBLA-14211\"><span class=\"verse-num\">6</span>¶Pero yo soy gusano, y no hombre;</span><br/><span class=\"text Ps-22-6\">Oprobio de los hombres, y despreciado del pueblo.</span><br/><span class=\"text Ps-22-7\" id=\"es-NBLA-14212\"><span class=\"verse-num\">7</span>Todos los que me ven, de mí se burlan;</span><br/><span class=\"text Ps-22-7\">Hacen muecas con los labios, menean la cabeza, <i>diciendo:</i></span><br/><span class=\"text Ps-22-8\" id=\"es-NBLA-14213\"><span class=\"verse-num\">8</span>Que se encomiende al <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>; que Él lo libre;</span><br/><span class=\"text Ps-22-8\">Que Él lo rescate, puesto que en Él se deleita.</span><br/><span class=\"text Ps-22-9\" id=\"es-NBLA-14214\"><span class=\"verse-num\">9</span>¶Porque Tú me sacaste del seno <i>materno;</i></span><br/><span class=\"text Ps-22-9\">Me hiciste confiar estando a los pechos de mi madre.</span><br/><span class=\"text Ps-22-10\" id=\"es-NBLA-14215\"><span class=\"verse-num\">10</span>A Ti fui entregado desde mi nacimiento;</span><br/><span class=\"text Ps-22-10\">Desde el vientre de mi madre Tú eres mi Dios.</span><br/><span class=\"text Ps-22-11\" id=\"es-NBLA-14216\"><span class=\"verse-num\">11</span>¶No estés lejos de mí, porque la angustia está cerca,</span><br/><span class=\"text Ps-22-11\">Pues no hay nadie que ayude.</span><br/><span class=\"text Ps-22-12\" id=\"es-NBLA-14217\"><span class=\"verse-num\">12</span>Muchos toros me han rodeado;</span><br/><span class=\"text Ps-22-12\"><i>Toros</i> fuertes de Basán me han cercado.</span><br/><span class=\"text Ps-22-13\" id=\"es-NBLA-14218\"><span class=\"verse-num\">13</span>Ávidos abren su boca contra mí,</span><br/><span class=\"text Ps-22-13\">Como un león que despedaza y ruge.</span><br/><span class=\"text Ps-22-14\" id=\"es-NBLA-14219\"><span class=\"verse-num\">14</span>Soy derramado como agua,</span><br/><span class=\"text Ps-22-14\">Y todos mis huesos están descoyuntados;</span><br/><span class=\"text Ps-22-14\">Mi corazón es como cera;</span><br/><span class=\"text Ps-22-14\">Se derrite en medio de mis entrañas.</span><br/><span class=\"text Ps-22-15\" id=\"es-NBLA-14220\"><span class=\"verse-num\">15</span>Como un tiesto se ha secado mi vigor,</span><br/><span class=\"text Ps-22-15\">Y la lengua se me pega al paladar;</span><br/><span class=\"text Ps-22-15\">Me has puesto en el polvo de la muerte.</span><br/><span class=\"text Ps-22-16\" id=\"es-NBLA-14221\"><span class=\"verse-num\">16</span>Porque perros me han rodeado;</span><br/><span class=\"text Ps-22-16\">Me ha cercado cuadrilla de malhechores;</span><br/><span class=\"text Ps-22-16\">Me horadaron las manos y los pies.</span><br/><span class=\"text Ps-22-17\" id=\"es-NBLA-14222\"><span class=\"verse-num\">17</span>Puedo contar todos mis huesos;</span><br/><span class=\"text Ps-22-17\">Ellos me miran, me observan.</span><br/><span class=\"text Ps-22-18\" id=\"es-NBLA-14223\"><span class=\"verse-num\">18</span>Se reparten entre sí mis vestidos,</span><br/><span class=\"text Ps-22-18\">Y sobre mi ropa echan suertes.</span></p>"
        },
        {
            "ref": "Salmos 69:21",
            "text": "<p><span class=\"text Ps-69-21\" id=\"es-NBLA-14957\"><span class=\"verse-num\">21</span>Y por comida me dieron hiel,</span><br/><span class=\"text Ps-69-21\">Y para mi sed me dieron a beber vinagre.</span></p>"
        },
        {
            "ref": "Isaías 53:12",
            "text": "<p><span class=\"text Isa-53-12\" id=\"es-NBLA-18724\"><span class=\"verse-num\">12</span>Por tanto, Yo le daré parte con los grandes</span><br/><span class=\"text Isa-53-12\">Y con los fuertes repartirá despojos,</span><br/><span class=\"text Isa-53-12\">Porque derramó Su alma hasta la muerte</span><br/><span class=\"text Isa-53-12\">Y con los transgresores fue contado;</span><br/><span class=\"text Isa-53-12\">Llevó el pecado de muchos,</span><br/><span class=\"text Isa-53-12\">E intercedió por los transgresores.</span></p>"
        },
        {
            "ref": "Zacarías 12:10",
            "text": "<p><span class=\"text Zech-12-10\"><span class=\"verse-num\">10</span>»Y derramaré sobre la casa de David y sobre los habitantes de Jerusalén, el Espíritu de gracia y de súplica, y me mirarán a Mí, a quien han traspasado. Y se lamentarán por Él, como quien se lamenta por un hijo único, y llorarán por Él, como se llora por un primogénito. </span></p>"
        },
        {
            "ref": "Filipenses 2:8",
            "text": "<p><span class=\"text Phil-2-8\" id=\"es-NBLA-29400\"><span class=\"verse-num\">8</span>Y hallándose en forma de hombre, se humilló Él mismo, haciéndose obediente hasta la muerte, y muerte de cruz. </span></p>"
        }
    ],
    "gloriosos-0": [
        {
            "ref": "Mateo 28:1-10",
            "text": "<p><span class=\"text Matt-28-1\"><span class=\"verse-num\">1</span>Pasado el día de reposo, al amanecer del primer <i>día</i> de la semana, María Magdalena y la otra María vinieron a ver el sepulcro. </span> <span class=\"text Matt-28-2\" id=\"es-NBLA-24198\"><span class=\"verse-num\">2</span>Y se produjo un gran terremoto, porque un ángel del Señor descendiendo del cielo, y acercándose, removió la piedra y se sentó sobre ella. </span> <span class=\"text Matt-28-3\" id=\"es-NBLA-24199\"><span class=\"verse-num\">3</span>Su aspecto era como un relámpago, y su vestidura blanca como la nieve; </span> <span class=\"text Matt-28-4\" id=\"es-NBLA-24200\"><span class=\"verse-num\">4</span>y de miedo a él los guardias temblaron y se quedaron como muertos.</span></p><p><span class=\"text Matt-28-5\" id=\"es-NBLA-24201\"><span class=\"verse-num\">5</span>Hablando el ángel, dijo a las mujeres: «Ustedes, no teman; porque yo sé que buscan a Jesús, el que fue crucificado. </span> <span class=\"text Matt-28-6\" id=\"es-NBLA-24202\"><span class=\"verse-num\">6</span>No está aquí, porque ha resucitado, tal como Él dijo. Vengan, vean el lugar donde estaba puesto. </span> <span class=\"text Matt-28-7\" id=\"es-NBLA-24203\"><span class=\"verse-num\">7</span>Vayan pronto, y digan a Sus discípulos que Él ha resucitado de entre los muertos; y Él va delante de ustedes a Galilea; allí lo verán. Miren, se <i>lo</i> he dicho a ustedes».</span></p><p><span class=\"text Matt-28-8\" id=\"es-NBLA-24204\"><span class=\"verse-num\">8</span>Y ellas, alejándose a toda prisa del sepulcro con temor y gran gozo, corrieron a dar las noticias a los discípulos. </span> <span class=\"text Matt-28-9\" id=\"es-NBLA-24205\"><span class=\"verse-num\">9</span>De repente Jesús les salió al encuentro, diciendo: <span class=\"woj\">«¡Saludos!».</span> Y ellas, acercándose, abrazaron Sus pies y lo adoraron. </span> <span class=\"text Matt-28-10\" id=\"es-NBLA-24206\"><span class=\"verse-num\">10</span>Entonces Jesús les dijo: <span class=\"woj\">«No teman</span><span class=\"woj\">. Vayan, avisen a Mis hermanos</span><span class=\"woj\">que vayan a Galilea, y allí me verán</span><span class=\"woj\">».</span></span></p>"
        },
        {
            "ref": "Marcos 16:1-8",
            "text": "<p><span class=\"text Mark-16-1\"><span class=\"verse-num\">1</span>Pasado el día de reposo, María Magdalena, María, la <i>madre</i> de Jacobo, y Salomé, compraron especias aromáticas para ir a ungir el cuerpo de Jesús. </span> <span class=\"text Mark-16-2\" id=\"es-NBLA-24876\"><span class=\"verse-num\">2</span>Muy de mañana, el primer día de la semana, llegaron al sepulcro cuando el sol <i>ya</i> había salido. </span> <span class=\"text Mark-16-3\" id=\"es-NBLA-24877\"><span class=\"verse-num\">3</span>Y se decían unas a otras: «¿Quién nos removerá la piedra de la entrada del sepulcro?». </span> <span class=\"text Mark-16-4\" id=\"es-NBLA-24878\"><span class=\"verse-num\">4</span>Cuando levantaron los ojos, vieron que la piedra, aunque era sumamente grande, había sido removida.</span></p><p><span class=\"text Mark-16-5\" id=\"es-NBLA-24879\"><span class=\"verse-num\">5</span>Entrando en el sepulcro, vieron a un joven sentado al <i>lado</i> derecho, vestido con ropaje blanco; y ellas se asustaron. </span> <span class=\"text Mark-16-6\" id=\"es-NBLA-24880\"><span class=\"verse-num\">6</span>Pero él les dijo: «No se asusten; ustedes buscan a Jesús el Nazareno, el que fue crucificado. Ha resucitado, no está aquí; miren el lugar donde lo pusieron. </span> <span class=\"text Mark-16-7\" id=\"es-NBLA-24881\"><span class=\"verse-num\">7</span>Pero vayan, digan a Sus discípulos y a Pedro: “Él va delante de ustedes a Galilea; allí lo verán, tal como les dijo”». </span> <span class=\"text Mark-16-8\" id=\"es-NBLA-24882\"><span class=\"verse-num\">8</span>Y saliendo ellas, huyeron del sepulcro, porque un <i>gran</i> temblor y espanto se había apoderado de ellas; y no dijeron nada a nadie porque tenían miedo.</span></p>"
        },
        {
            "ref": "Lucas 24:1-12",
            "text": "<p><span class=\"text Luke-24-1\"><span class=\"verse-num\">1</span>Pero el primer <i>día</i> de la semana, al rayar el alba, <i>las mujeres</i> vinieron al sepulcro trayendo las especias aromáticas que habían preparado. </span> <span class=\"text Luke-24-2\" id=\"es-NBLA-25994\"><span class=\"verse-num\">2</span>Encontraron <i>que</i> la piedra <i>había sido</i> removida del sepulcro, </span> <span class=\"text Luke-24-3\" id=\"es-NBLA-25995\"><span class=\"verse-num\">3</span>y cuando entraron, no hallaron el cuerpo del Señor Jesús.</span></p><p><span class=\"text Luke-24-4\" id=\"es-NBLA-25996\"><span class=\"verse-num\">4</span>Aconteció que estando ellas perplejas por esto, de pronto se pusieron junto a ellas dos varones en vestiduras resplandecientes. </span> <span class=\"text Luke-24-5\" id=\"es-NBLA-25997\"><span class=\"verse-num\">5</span>Estando ellas aterrorizadas e inclinados sus rostros a tierra, ellos les dijeron: «¿Por qué buscan entre los muertos al que vive? </span> <span class=\"text Luke-24-6\" id=\"es-NBLA-25998\"><span class=\"verse-num\">6</span>No está aquí, sino que ha resucitado. Acuérdense cómo les habló cuando estaba aún en Galilea, </span> <span class=\"text Luke-24-7\" id=\"es-NBLA-25999\"><span class=\"verse-num\">7</span>diciendo que el Hijo del Hombre debía ser entregado en manos de hombres pecadores, y ser crucificado, y al tercer día resucitar».</span></p><p><span class=\"text Luke-24-8\" id=\"es-NBLA-26000\"><span class=\"verse-num\">8</span>Entonces ellas se acordaron de Sus palabras, </span> <span class=\"text Luke-24-9\" id=\"es-NBLA-26001\"><span class=\"verse-num\">9</span>y regresando del sepulcro, anunciaron todas estas cosas a los once <i>apóstoles</i> y a todos los demás. </span> <span class=\"text Luke-24-10\" id=\"es-NBLA-26002\"><span class=\"verse-num\">10</span>Eran María Magdalena y Juana y María, la <i>madre</i> de Jacobo. También las demás <i>mujeres</i> con ellas decían estas cosas a los apóstoles. </span> <span class=\"text Luke-24-11\" id=\"es-NBLA-26003\"><span class=\"verse-num\">11</span>A ellos estas palabras les parecieron como disparates, y no las creyeron. </span> <span class=\"text Luke-24-12\" id=\"es-NBLA-26004\"><span class=\"verse-num\">12</span>Pero Pedro se levantó y corrió al sepulcro. Inclinándose para mirar <i>adentro,</i> vio solo las envolturas de lino, y se fue a su casa maravillado de lo que había acontecido.</span></p>"
        },
        {
            "ref": "Juan 20:1-18",
            "text": "<p><span class=\"text John-20-1\"><span class=\"verse-num\">1</span>El primer <i>día</i> de la semana María Magdalena fue temprano al sepulcro, cuando todavía estaba oscuro, y vio que la piedra <i>ya</i> había sido quitada del sepulcro. </span> <span class=\"text John-20-2\" id=\"es-NBLA-26870\"><span class=\"verse-num\">2</span>Entonces corrió y fue adonde estaban Simón Pedro y el otro discípulo a quien Jesús amaba, y les dijo: «Se han llevado al Señor del sepulcro, y no sabemos dónde lo han puesto».</span></p><p><span class=\"text John-20-3\" id=\"es-NBLA-26871\"><span class=\"verse-num\">3</span>Salieron, pues, Pedro y el otro discípulo, y fueron hacia el sepulcro. </span> <span class=\"text John-20-4\" id=\"es-NBLA-26872\"><span class=\"verse-num\">4</span>Los dos corrían juntos, pero el otro discípulo corrió más aprisa que Pedro, y llegó primero al sepulcro; </span> <span class=\"text John-20-5\" id=\"es-NBLA-26873\"><span class=\"verse-num\">5</span>e inclinándose para mirar <i>adentro</i>, vio las envolturas de lino puestas <i>allí,</i> pero no entró.</span></p><p><span class=\"text John-20-6\" id=\"es-NBLA-26874\"><span class=\"verse-num\">6</span>Entonces llegó también Simón Pedro tras él, entró al sepulcro, y vio las envolturas de lino puestas <i>allí,</i> </span> <span class=\"text John-20-7\" id=\"es-NBLA-26875\"><span class=\"verse-num\">7</span>y el sudario que había estado sobre la cabeza de Jesús, no puesto con las envolturas de lino, sino enrollado en un lugar aparte. </span> <span class=\"text John-20-8\" id=\"es-NBLA-26876\"><span class=\"verse-num\">8</span>También entró el otro discípulo, el que había llegado primero al sepulcro, y vio y creyó. </span> <span class=\"text John-20-9\" id=\"es-NBLA-26877\"><span class=\"verse-num\">9</span>Porque todavía no habían entendido la Escritura de que Jesús debía resucitar de entre los muertos. </span> <span class=\"text John-20-10\" id=\"es-NBLA-26878\"><span class=\"verse-num\">10</span>Los discípulos entonces se fueron de nuevo a sus casas.</span></p><p><span class=\"text John-20-11\"><span class=\"verse-num\">11</span>Pero María estaba fuera, llorando junto al sepulcro; y mientras lloraba, se inclinó y miró dentro del sepulcro; </span> <span class=\"text John-20-12\" id=\"es-NBLA-26880\"><span class=\"verse-num\">12</span>y vio dos ángeles vestidos de blanco, sentados donde había estado el cuerpo de Jesús, uno a la cabecera y otro a los pies. </span> <span class=\"text John-20-13\" id=\"es-NBLA-26881\"><span class=\"verse-num\">13</span>«Mujer, ¿por qué lloras?», le preguntaron. «Porque se han llevado a mi Señor, y no sé dónde lo han puesto», les contestó ella.</span></p><p><span class=\"text John-20-14\" id=\"es-NBLA-26882\"><span class=\"verse-num\">14</span>Al decir esto, se volvió y vio a Jesús que estaba <i>allí,</i> pero no sabía que era Jesús. </span> <span class=\"text John-20-15\" id=\"es-NBLA-26883\"><span class=\"verse-num\">15</span><span class=\"woj\">«Mujer, ¿por qué lloras</span><span class=\"woj\">?»,</span> le dijo Jesús. <span class=\"woj\">«¿A quién buscas?».</span> Ella, pensando que era el que cuidaba el huerto, le dijo: «Señor, si usted lo ha llevado, dígame dónde lo ha puesto, y yo me lo llevaré». </span> <span class=\"text John-20-16\" id=\"es-NBLA-26884\"><span class=\"verse-num\">16</span><span class=\"woj\">«¡María!»,</span> le dijo Jesús. Ella, volviéndose, le dijo en hebreo: «¡Raboní!» (que quiere decir Maestro).</span></p><p><span class=\"text John-20-17\" id=\"es-NBLA-26885\"><span class=\"verse-num\">17</span>Jesús le dijo: <span class=\"woj\">«Suéltame</span><span class=\"woj\">porque todavía no he subido al Padre; pero ve a Mis hermanos</span><span class=\"woj\">, y diles: “Subo a Mi Padre y Padre de ustedes, a Mi Dios y Dios de ustedes</span><span class=\"woj\">”».</span> </span> <span class=\"text John-20-18\" id=\"es-NBLA-26886\"><span class=\"verse-num\">18</span>María Magdalena fue y anunció a los discípulos: «¡He visto al Señor!», y que Él le había dicho estas cosas.</span></p>"
        },
        {
            "ref": "Salmos 16:8-11",
            "text": "<p><span class=\"text Ps-16-8\" id=\"es-NBLA-14101\"><span class=\"verse-num\">8</span>Al <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> he puesto continuamente delante de mí;</span><br/><span class=\"text Ps-16-8\">Porque está a mi diestra, permaneceré firme.</span><br/><span class=\"text Ps-16-9\" id=\"es-NBLA-14102\"><span class=\"verse-num\">9</span>Por tanto, mi corazón se alegra y mi alma se regocija;</span><br/><span class=\"text Ps-16-9\">También mi carne morará segura,</span><br/><span class=\"text Ps-16-10\" id=\"es-NBLA-14103\"><span class=\"verse-num\">10</span>Porque Tú no abandonarás mi alma en el Seol,</span><br/><span class=\"text Ps-16-10\">Ni permitirás que Tu Santo sufra corrupción.</span><br/><span class=\"text Ps-16-11\" id=\"es-NBLA-14104\"><span class=\"verse-num\">11</span>Me darás a conocer la senda de la vida;</span><br/><span class=\"text Ps-16-11\">En Tu presencia hay plenitud de gozo;</span><br/><span class=\"text Ps-16-11\">En Tu diestra hay deleites para siempre.</span></p>"
        },
        {
            "ref": "Hechos 2:22-32",
            "text": "<p><span class=\"text Acts-2-22\" id=\"es-NBLA-26972\"><span class=\"verse-num\">22</span>»Hombres de Israel, escuchen estas palabras: Jesús el Nazareno, varón confirmado por Dios entre ustedes con milagros, prodigios y señales que Dios hizo en medio de ustedes a través de Él, tal como ustedes mismos saben. </span> <span class=\"text Acts-2-23\" id=\"es-NBLA-26973\"><span class=\"verse-num\">23</span>Este fue entregado por el plan predeterminado y el previo conocimiento de Dios, y ustedes lo clavaron en una cruz por manos de impíos y <i>lo</i> mataron. </span> <span class=\"text Acts-2-24\" id=\"es-NBLA-26974\"><span class=\"verse-num\">24</span>Pero Dios lo resucitó, poniendo fin a la agonía de la muerte, puesto que no era posible que Él quedara bajo el dominio de ella. </span> <span class=\"text Acts-2-25\" id=\"es-NBLA-26975\"><span class=\"verse-num\">25</span>Porque David dice de Él:</span></p><p><span class=\"text Acts-2-25\">“<span class=\"small-caps\" style=\"font-variant: small-caps\">Veía siempre al Señor en mi presencia</span>;</span><br/><span class=\"text Acts-2-25\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Pues está a mi diestra para que yo no sea sacudido</span>.</span><br/><span class=\"text Acts-2-26\" id=\"es-NBLA-26976\"><span class=\"verse-num\">26</span>-”<span class=\"small-caps\" style=\"font-variant: small-caps\">Por lo cual mi corazón se alegró y mi lengua se regocijó</span>;</span><br/><span class=\"text Acts-2-26\">Y <span class=\"small-caps\" style=\"font-variant: small-caps\">aun hasta mi carne descansará en esperanza</span>;</span><br/><span class=\"text Acts-2-27\" id=\"es-NBLA-26977\"><span class=\"verse-num\">27</span><span class=\"small-caps\" style=\"font-variant: small-caps\">Pues Tú no abandonarás mi alma en el Hades</span>,</span><br/><span class=\"text Acts-2-27\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Ni permitirás</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">que Tu Santo vea corrupción</span>.</span><br/><span class=\"text Acts-2-28\" id=\"es-NBLA-26978\"><span class=\"verse-num\">28</span>-”<span class=\"small-caps\" style=\"font-variant: small-caps\">Me has hecho conocer los caminos de la vida</span>;</span><br/><span class=\"text Acts-2-28\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Me llenarás de gozo con Tu presencia</span>”.</span></p><p><span class=\"text Acts-2-29\" id=\"es-NBLA-26979\"><span class=\"verse-num\">29</span>»Hermanos, del patriarca David les puedo decir con franqueza que murió y fue sepultado, y su sepulcro está entre nosotros hasta el día de hoy. </span> <span class=\"text Acts-2-30\" id=\"es-NBLA-26980\"><span class=\"verse-num\">30</span>Pero siendo profeta, y sabiendo que <span class=\"small-caps\" style=\"font-variant: small-caps\">Dios le había jurado sentar</span> <i>a uno</i> <span class=\"small-caps\" style=\"font-variant: small-caps\">de sus descendientes</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">en su trono</span>, </span> <span class=\"text Acts-2-31\" id=\"es-NBLA-26981\"><span class=\"verse-num\">31</span>miró hacia el futuro y habló de la resurrección de Cristo, que <span class=\"small-caps\" style=\"font-variant: small-caps\">ni fue abandonado en el Hades</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">ni</span> Su carne <span class=\"small-caps\" style=\"font-variant: small-caps\">sufrió</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">corrupción</span>.</span></p><p><span class=\"text Acts-2-32\" id=\"es-NBLA-26982\"><span class=\"verse-num\">32</span>»A este Jesús resucitó Dios, de lo cual todos nosotros somos testigos. </span></p>"
        },
        {
            "ref": "1 Corintios 15:3-8, 20-22",
            "text": "<p><span class=\"text 1Cor-15-3\" id=\"es-NBLA-28722\"><span class=\"verse-num\">3</span>Porque yo les entregué en primer lugar lo mismo que recibí: que Cristo murió por nuestros pecados, conforme a las Escrituras; </span> <span class=\"text 1Cor-15-4\" id=\"es-NBLA-28723\"><span class=\"verse-num\">4</span>que fue sepultado y que resucitó al tercer día, conforme a las Escrituras; </span> <span class=\"text 1Cor-15-5\" id=\"es-NBLA-28724\"><span class=\"verse-num\">5</span>que se apareció a Cefas y después a los doce.</span></p><p><span class=\"text 1Cor-15-6\" id=\"es-NBLA-28725\"><span class=\"verse-num\">6</span>Luego se apareció a más de 500 hermanos a la vez, la mayoría de los cuales viven aún, pero algunos ya duermen. </span> <span class=\"text 1Cor-15-7\" id=\"es-NBLA-28726\"><span class=\"verse-num\">7</span>Después se apareció a Jacobo, luego a todos los apóstoles. </span> <span class=\"text 1Cor-15-8\" id=\"es-NBLA-28727\"><span class=\"verse-num\">8</span>Y al último de todos, como a uno nacido fuera de tiempo, se me apareció también a mí.</span></p>"
        },
        {
            "ref": "Apocalipsis 1:17-18",
            "text": "<p><span class=\"text Rev-1-17\" id=\"es-NBLA-30716\"><span class=\"verse-num\">17</span>Cuando lo vi, caí como muerto a Sus pies. Y Él puso Su mano derecha sobre mí, diciendo: <span class=\"woj\">«No temas</span><span class=\"woj\">, Yo soy el Primero y el Último</span><span class=\"woj\">,</span> </span> <span class=\"text Rev-1-18\" id=\"es-NBLA-30717\"><span class=\"verse-num\">18</span><span class=\"woj\">y el que vive</span><span class=\"woj\">, y estuve muerto</span><span class=\"woj\">. Pero ahora estoy vivo por los siglos de los siglos, y tengo las llaves de la muerte y del Hades</span><span class=\"woj\">.</span> </span></p>"
        }
    ],
    "gloriosos-1": [
        {
            "ref": "Marcos 16:19-20",
            "text": "<p><span class=\"text Mark-16-19\"><span class=\"verse-num\">19</span>Entonces, el Señor Jesús, después de hablar con ellos, fue recibido en el cielo y se sentó a la diestra de Dios. </span> <span class=\"text Mark-16-20\" id=\"es-NBLA-24894\"><span class=\"verse-num\">20</span>Y ellos salieron y predicaron por todas partes, colaborando el Señor con ellos, y confirmando la palabra por medio de las señales que la seguían.</span></p><p><span class=\"text Mark-16-20\"><i>Ellas comunicaron inmediatamente a Pedro y a sus compañeros todas estas instrucciones. Y después de esto, Jesús mismo envió por medio de ellos, desde el oriente hasta el occidente, el mensaje sacrosanto e incorruptible de la salvación eterna.</i></span></p>"
        },
        {
            "ref": "Lucas 24:50-53",
            "text": "<p><span class=\"text Luke-24-50\"><span class=\"verse-num\">50</span>Entonces Jesús los condujo fuera <i>de la ciudad,</i> hasta cerca de Betania, y alzando Sus manos, los bendijo. </span> <span class=\"text Luke-24-51\" id=\"es-NBLA-26043\"><span class=\"verse-num\">51</span>Y aconteció que mientras los bendecía, se separó de ellos y fue llevado arriba al cielo. </span> <span class=\"text Luke-24-52\" id=\"es-NBLA-26044\"><span class=\"verse-num\">52</span>Ellos, después de adorar a Jesús, regresaron a Jerusalén con gran gozo, </span> <span class=\"text Luke-24-53\" id=\"es-NBLA-26045\"><span class=\"verse-num\">53</span>y estaban siempre en el templo alabando a Dios.</span></p>"
        },
        {
            "ref": "Hechos 1:6-11",
            "text": "<p><span class=\"text Acts-1-6\"><span class=\"verse-num\">6</span>Entonces los que estaban reunidos, le preguntaban: «Señor, ¿restaurarás en este tiempo el reino a Israel?». </span> <span class=\"text Acts-1-7\" id=\"es-NBLA-26931\"><span class=\"verse-num\">7</span>Jesús les contestó: <span class=\"woj\">«No les corresponde a ustedes saber los tiempos ni las épocas que el Padre ha fijado con Su propia autoridad</span><span class=\"woj\">;</span> </span> <span class=\"text Acts-1-8\" id=\"es-NBLA-26932\"><span class=\"verse-num\">8</span><span class=\"woj\">pero recibirán poder cuando el Espíritu Santo venga sobre ustedes</span><span class=\"woj\">; y serán Mis testigos</span><span class=\"woj\">en Jerusalén, en toda Judea y Samaria</span><span class=\"woj\">, y hasta los confines de la tierra</span><span class=\"woj\">».</span></span></p><p><span class=\"text Acts-1-9\" id=\"es-NBLA-26933\"><span class=\"verse-num\">9</span>Después de haber dicho estas cosas, fue elevado mientras ellos miraban, y una nube lo recibió <i>y lo ocultó</i> de sus ojos. </span> <span class=\"text Acts-1-10\" id=\"es-NBLA-26934\"><span class=\"verse-num\">10</span>Mientras Jesús ascendía, estando ellos mirando fijamente al cielo, se les presentaron dos hombres en vestiduras blancas, </span> <span class=\"text Acts-1-11\" id=\"es-NBLA-26935\"><span class=\"verse-num\">11</span>que <i>les</i> dijeron: «Varones galileos, ¿por qué están mirando al cielo? Este <i>mismo</i> Jesús, que ha sido tomado de ustedes al cielo, vendrá de la misma manera, tal como lo han visto ir al cielo».</span></p>"
        },
        {
            "ref": "Salmos 47:5",
            "text": "<p><span class=\"text Ps-47-5\" id=\"es-NBLA-14631\"><span class=\"verse-num\">5</span>¶Dios ha ascendido entre aclamaciones,</span><br/><span class=\"text Ps-47-5\">El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>, al son de trompeta.</span></p>"
        },
        {
            "ref": "Salmos 110:1",
            "text": "<p><span class=\"text Ps-110-1\"><span class=\"verse-num\">1</span>Dice el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> a mi Señor:</span><br/><span class=\"text Ps-110-1\">«Siéntate a Mi diestra,</span><br/><span class=\"text Ps-110-1\">Hasta que ponga a Tus enemigos por estrado de Tus pies».</span></p>"
        },
        {
            "ref": "Efesios 4:8-10",
            "text": "<p><span class=\"text Eph-4-8\" id=\"es-NBLA-29281\"><span class=\"verse-num\">8</span>Por tanto, dice:</span></p><p><span class=\"text Eph-4-8\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">Cuando ascendió a lo alto</span>,</span><br/><span class=\"text Eph-4-8\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Llevó cautivo un gran número de cautivos</span>,</span><br/><span class=\"text Eph-4-8\">Y <span class=\"small-caps\" style=\"font-variant: small-caps\">dio dones a los hombres</span>».</span></p><p><span class=\"text Eph-4-9\" id=\"es-NBLA-29282\"><span class=\"verse-num\">9</span>Esta <i>expresión:</i> «Ascendió», ¿qué significa, sino que Él también había descendido a las profundidades de la tierra? </span> <span class=\"text Eph-4-10\" id=\"es-NBLA-29283\"><span class=\"verse-num\">10</span>El que descendió es también el mismo que ascendió mucho más arriba de todos los cielos, para poder llenarlo todo.</span></p>"
        },
        {
            "ref": "Hebreos 9:24",
            "text": "<p><span class=\"text Heb-9-24\" id=\"es-NBLA-30130\"><span class=\"verse-num\">24</span>Porque Cristo no entró en un lugar santo hecho por manos, una representación del verdadero, sino en el cielo mismo, para presentarse ahora en la presencia de Dios por nosotros, </span></p>"
        }
    ],
    "gloriosos-2": [
        {
            "ref": "Hechos 2:1-13",
            "text": "<p><span class=\"text Acts-2-1\"><span class=\"verse-num\">1</span>Cuando llegó el día de Pentecostés, estaban todos juntos en un mismo lugar, </span> <span class=\"text Acts-2-2\" id=\"es-NBLA-26952\"><span class=\"verse-num\">2</span>y de repente vino del cielo un ruido como el de una ráfaga de viento impetuoso que llenó toda la casa donde estaban sentados. </span> <span class=\"text Acts-2-3\" id=\"es-NBLA-26953\"><span class=\"verse-num\">3</span>Se les aparecieron lenguas como de fuego que, repartiéndose, se posaron sobre cada uno de ellos. </span> <span class=\"text Acts-2-4\" id=\"es-NBLA-26954\"><span class=\"verse-num\">4</span>Todos fueron llenos del Espíritu Santo y comenzaron a hablar en otras lenguas, según el Espíritu les daba habilidad para expresarse.</span></p><p><span class=\"text Acts-2-5\" id=\"es-NBLA-26955\"><span class=\"verse-num\">5</span>Había judíos que moraban en Jerusalén, hombres piadosos, procedentes de todas las naciones bajo el cielo. </span> <span class=\"text Acts-2-6\" id=\"es-NBLA-26956\"><span class=\"verse-num\">6</span>Al ocurrir este estruendo, la multitud se juntó; y estaban desconcertados porque cada uno los oía hablar en su propia lengua.</span></p><p><span class=\"text Acts-2-7\" id=\"es-NBLA-26957\"><span class=\"verse-num\">7</span>Estaban asombrados y se maravillaban, diciendo: «Miren, ¿no son galileos todos estos que están hablando? </span> <span class=\"text Acts-2-8\" id=\"es-NBLA-26958\"><span class=\"verse-num\">8</span>¿Cómo es que cada uno de nosotros <i>los</i> oímos hablar en nuestra lengua en la que hemos nacido? </span> <span class=\"text Acts-2-9\" id=\"es-NBLA-26959\"><span class=\"verse-num\">9</span>Partos, medos y elamitas, habitantes de Mesopotamia, Judea y Capadocia, del Ponto y de Asia, </span> <span class=\"text Acts-2-10\" id=\"es-NBLA-26960\"><span class=\"verse-num\">10</span>de Frigia y de Panfilia, de Egipto y de las regiones de Libia alrededor de Cirene, viajeros de Roma, tanto judíos como prosélitos, </span> <span class=\"text Acts-2-11\" id=\"es-NBLA-26961\"><span class=\"verse-num\">11</span>cretenses y árabes, los oímos hablar en nuestros propios idiomas de las maravillas de Dios».</span></p><p><span class=\"text Acts-2-12\" id=\"es-NBLA-26962\"><span class=\"verse-num\">12</span>Todos estaban asombrados y perplejos, diciéndose unos a otros: «¿Qué quiere decir esto?». </span> <span class=\"text Acts-2-13\" id=\"es-NBLA-26963\"><span class=\"verse-num\">13</span>Pero otros se burlaban y decían: «Están borrachos».</span></p>"
        },
        {
            "ref": "Juan 14:15-17, 26",
            "text": "<p><span class=\"text John-14-15\"><span class=\"verse-num\">15</span><span class=\"woj\">»Si ustedes me aman, guardarán Mis mandamientos</span> <span class=\"woj\">.</span> </span> <span class=\"text John-14-16\" id=\"es-NBLA-26685\"><span class=\"verse-num\">16</span><span class=\"woj\">Entonces Yo rogaré al Padre, y Él les dará otro Consolador</span><span class=\"woj\">para que esté con ustedes para siempre;</span> </span> <span class=\"text John-14-17\" id=\"es-NBLA-26686\"><span class=\"verse-num\">17</span><span class=\"woj\"><i>es decir,</i> el Espíritu de verdad</span><span class=\"woj\">, a quien el mundo no puede recibir</span><span class=\"woj\">, porque ni lo ve ni lo conoce, <i>pero</i> ustedes sí lo conocen porque mora con ustedes y estará en ustedes.</span> </span></p>"
        },
        {
            "ref": "Juan 16:7-15",
            "text": "<p><span class=\"text John-16-7\"><span class=\"verse-num\">7</span><span class=\"woj\">»Pero Yo les digo la verdad: les conviene que Yo me vaya; porque si no me voy, el Consolador</span> <span class=\"woj\">no vendrá a ustedes; pero si me voy, se lo enviaré</span> <span class=\"woj\">.</span></span></p><p><span class=\"text John-16-8\" id=\"es-NBLA-26735\"><span class=\"verse-num\">8</span><span class=\"woj\">»Y cuando Él venga, convencerá</span> <span class=\"woj\">al mundo de pecado, de justicia y de juicio;</span> </span> <span class=\"text John-16-9\" id=\"es-NBLA-26736\"><span class=\"verse-num\">9</span><span class=\"woj\">de pecado, porque no creen en Mí</span><span class=\"woj\">;</span> </span> <span class=\"text John-16-10\" id=\"es-NBLA-26737\"><span class=\"verse-num\">10</span><span class=\"woj\">de justicia</span><span class=\"woj\">, porque Yo voy al Padre</span><span class=\"woj\">y ustedes no me verán más;</span> </span> <span class=\"text John-16-11\" id=\"es-NBLA-26738\"><span class=\"verse-num\">11</span><span class=\"woj\">y de juicio, porque el príncipe de este mundo ha sido juzgado</span><span class=\"woj\">.</span></span></p><p><span class=\"text John-16-12\" id=\"es-NBLA-26739\"><span class=\"verse-num\">12</span><span class=\"woj\">»Aún tengo muchas cosas que decirles, pero ahora no <i>las</i> pueden soportar.</span> </span> <span class=\"text John-16-13\" id=\"es-NBLA-26740\"><span class=\"verse-num\">13</span><span class=\"woj\">Pero cuando Él, el Espíritu de verdad</span><span class=\"woj\">venga, los guiará a toda la verdad, porque no hablará por Su propia cuenta, sino que hablará todo lo que oiga, y les hará saber</span><span class=\"woj\">lo que habrá de venir.</span> </span> <span class=\"text John-16-14\" id=\"es-NBLA-26741\"><span class=\"verse-num\">14</span><span class=\"woj\">Él me glorificará</span><span class=\"woj\">, porque tomará de lo Mío y se <i>lo</i> hará saber a ustedes.</span> </span> <span class=\"text John-16-15\" id=\"es-NBLA-26742\"><span class=\"verse-num\">15</span><span class=\"woj\">Todo lo que tiene el Padre es Mío</span><span class=\"woj\">; por eso dije que Él toma de lo Mío y se <i>lo</i> hará saber a ustedes.</span></span></p>"
        },
        {
            "ref": "Joel 2:28-29",
            "text": "<p><span class=\"text Joel-2-28\"><span class=\"verse-num\">28</span>¶»Y sucederá que después de esto,</span><br/><span class=\"text Joel-2-28\">Derramaré Mi Espíritu sobre toda carne;</span><br/><span class=\"text Joel-2-28\">Y sus hijos y sus hijas profetizarán,</span><br/><span class=\"text Joel-2-28\">Sus ancianos soñarán sueños,</span><br/><span class=\"text Joel-2-28\">Sus jóvenes verán visiones.</span><br/><span class=\"text Joel-2-29\" id=\"es-NBLA-22341\"><span class=\"verse-num\">29</span>-»Y aun sobre los siervos y las siervas</span><br/><span class=\"text Joel-2-29\">Derramaré Mi Espíritu en esos días.</span></p>"
        },
        {
            "ref": "Ezequiel 36:26-27",
            "text": "<p><span class=\"text Ezek-36-26\" id=\"es-NBLA-21386\"><span class=\"verse-num\">26</span>’Además, les daré un corazón nuevo y pondré un espíritu nuevo dentro de ustedes; quitaré de su carne el corazón de piedra y les daré un corazón de carne. </span> <span class=\"text Ezek-36-27\" id=\"es-NBLA-21387\"><span class=\"verse-num\">27</span>Pondré dentro de ustedes Mi espíritu y haré que anden en Mis estatutos, y que cumplan cuidadosamente Mis ordenanzas. </span></p>"
        },
        {
            "ref": "Hechos 1:14",
            "text": "<p><span class=\"text Acts-1-14\" id=\"es-NBLA-26938\"><span class=\"verse-num\">14</span>Todos estos estaban unánimes, entregados de continuo a la oración junto con las mujeres, y <i>con</i> María la madre de Jesús, y con Sus hermanos.</span></p>"
        },
        {
            "ref": "Romanos 8:14-17",
            "text": "<p><span class=\"text Rom-8-14\" id=\"es-NBLA-28131\"><span class=\"verse-num\">14</span>Porque todos los que son guiados por el Espíritu de Dios, los tales son hijos de Dios.</span></p><p><span class=\"text Rom-8-15\" id=\"es-NBLA-28132\"><span class=\"verse-num\">15</span>Pues ustedes no han recibido un espíritu de esclavitud para volver otra vez al temor, sino que han recibido un espíritu de adopción como hijos, por el cual clamamos: «¡Abba, Padre!». </span> <span class=\"text Rom-8-16\" id=\"es-NBLA-28133\"><span class=\"verse-num\">16</span>El Espíritu mismo da testimonio a nuestro espíritu de que somos hijos de Dios. </span> <span class=\"text Rom-8-17\" id=\"es-NBLA-28134\"><span class=\"verse-num\">17</span>Y si somos hijos, somos también herederos; herederos de Dios y coherederos con Cristo, si en verdad padecemos con <i>Él</i> a fin de que también seamos glorificados con <i>Él</i>.</span></p>"
        }
    ],
    "gloriosos-3": [
        {
            "ref": "Apocalipsis 12:1",
            "text": "<p><span class=\"text Rev-12-1\"><span class=\"verse-num\">1</span>Una gran señal apareció en el cielo: una mujer vestida del sol, con la luna debajo de sus pies, y una corona de doce estrellas sobre su cabeza. </span></p>"
        },
        {
            "ref": "Lucas 1:28, 42",
            "text": "<p><span class=\"text Luke-1-28\" id=\"es-NBLA-24922\"><span class=\"verse-num\">28</span>Y entrando el <i>ángel,</i> le dijo: «¡Salve, muy favorecida! El Señor está contigo; bendita eres tú entre las mujeres».</span></p>"
        },
        {
            "ref": "Salmos 132:8",
            "text": "<p><span class=\"text Ps-132-8\" id=\"es-NBLA-16160\"><span class=\"verse-num\">8</span>Levántate, <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>, al lugar de Tu reposo;</span><br/><span class=\"text Ps-132-8\">Tú y el arca de Tu poder.</span></p>"
        },
        {
            "ref": "Cantares 2:10-11",
            "text": "<p><span class=\"text Song-2-10\" id=\"es-NBLA-17565\"><span class=\"verse-num\">10</span>¶»Mi amado habló, y me dijo:</span><br/><span class=\"text Song-2-10\">“Levántate, amada mía, hermosa mía,</span><br/><span class=\"text Song-2-10\">Y ven conmigo.</span><br/><span class=\"text Song-2-11\" id=\"es-NBLA-17566\"><span class=\"verse-num\">11</span>-”Pues mira, ha pasado el invierno,</span><br/><span class=\"text Song-2-11\">Ha cesado la lluvia <i>y</i> se ha ido.</span></p>"
        },
        {
            "ref": "Cantares 8:5",
            "text": "<p><span class=\"text Song-8-5\"><span class=\"verse-num\">5</span>¶«¿Quién es esta que sube del desierto,</span><br/><span class=\"text Song-8-5\">Recostada sobre su amado?».</span></p><p><span class=\"text Song-8-5\">«<b>D</b>ebajo del manzano te desperté;</span><br/><span class=\"text Song-8-5\">Allí tu madre tuvo dolores de parto por ti,</span><br/><span class=\"text Song-8-5\">Allí tuvo dolores de parto, <i>y</i> te dio a luz».</span></p>"
        },
        {
            "ref": "1 Corintios 15:22-23",
            "text": "<p><span class=\"text 1Cor-15-22\" id=\"es-NBLA-28741\"><span class=\"verse-num\">22</span>Porque así como en Adán todos mueren, también en Cristo todos serán vivificados.</span></p><p><span class=\"text 1Cor-15-23\" id=\"es-NBLA-28742\"><span class=\"verse-num\">23</span>Pero cada uno en su debido orden: Cristo, las primicias; luego los que son de Cristo en Su venida. </span></p>"
        }
    ],
    "gloriosos-4": [
        {
            "ref": "Apocalipsis 12:1-5",
            "text": "<p><span class=\"text Rev-12-1\"><span class=\"verse-num\">1</span>Una gran señal apareció en el cielo: una mujer vestida del sol, con la luna debajo de sus pies, y una corona de doce estrellas sobre su cabeza. </span> <span class=\"text Rev-12-2\" id=\"es-NBLA-30895\"><span class=\"verse-num\">2</span>Estaba encinta, y gritaba por los dolores del parto y el sufrimiento de dar a luz.</span></p><p><span class=\"text Rev-12-3\" id=\"es-NBLA-30896\"><span class=\"verse-num\">3</span>Entonces apareció otra señal en el cielo: Un gran dragón rojo que tenía siete cabezas y diez cuernos, y sobre sus cabezas <i>había</i> siete diademas. </span> <span class=\"text Rev-12-4\" id=\"es-NBLA-30897\"><span class=\"verse-num\">4</span>Su cola arrastró la tercera parte de las estrellas del cielo y las arrojó sobre la tierra. Y el dragón se paró delante de la mujer que estaba para dar a luz, a fin de devorar a su hijo cuando ella diera a luz. </span> <span class=\"text Rev-12-5\" id=\"es-NBLA-30898\"><span class=\"verse-num\">5</span>Y ella dio a luz un Hijo varón, que ha de regir a todas las naciones con vara de hierro. Su Hijo fue arrebatado hasta Dios y hasta Su trono. </span></p>"
        },
        {
            "ref": "1 Reyes 2:19",
            "text": "<p><span class=\"text 1Kgs-2-19\" id=\"es-NBLA-8790\"><span class=\"verse-num\">19</span>Betsabé fue al rey Salomón para hablarle por Adonías. El rey se levantó a recibirla, se inclinó delante de ella, y se sentó en su trono; hizo colocar un trono para la madre del rey y ella se sentó a su diestra. </span></p>"
        },
        {
            "ref": "Salmos 45:9-11",
            "text": "<p><span class=\"text Ps-45-9\" id=\"es-NBLA-14607\"><span class=\"verse-num\">9</span>Hijas de reyes hay entre Tus damas nobles;</span><br/><span class=\"text Ps-45-9\">A Tu diestra, en oro de Ofir, está la reina.</span><br/><span class=\"text Ps-45-10\" id=\"es-NBLA-14608\"><span class=\"verse-num\">10</span>¶Escucha, hija, presta atención e inclina tu oído;</span><br/><span class=\"text Ps-45-10\">Olvídate de tu pueblo y de la casa de tu padre.</span><br/><span class=\"text Ps-45-11\" id=\"es-NBLA-14609\"><span class=\"verse-num\">11</span>Entonces el Rey deseará tu hermosura;</span><br/><span class=\"text Ps-45-11\">Inclínate ante Él, porque Él es tu señor.</span></p>"
        },
        {
            "ref": "Judit 15:9-10",
            "text": "<p><span class=\"verse-num\">9</span> Cuando llegaron ante ella, todas a una voz la bendijeron y le dijeron: «Tú eres la gloria de Jerusalén, tú el gran orgullo de Israel, tú la gran honra de nuestra nación. <span class=\"verse-num\">10</span> Has hecho todo esto con tu mano; has hecho bien a Israel y Dios se ha complacido en ello. Que el Señor Omnipotente te bendiga para siempre». Y todo el pueblo dijo: «¡Amén!»</p>"
        },
        {
            "ref": "2 Timoteo 4:8",
            "text": "<p><span class=\"text 2Tim-4-8\" id=\"es-NBLA-29879\"><span class=\"verse-num\">8</span>En el futuro me está reservada la corona de justicia que el Señor, el Juez justo, me entregará en aquel día; y no solo a mí, sino también a todos los que aman Su venida.</span></p>"
        },
        {
            "ref": "Santiago 1:12",
            "text": "<p><span class=\"text Jas-1-12\"><span class=\"verse-num\">12</span>Bienaventurado el hombre que persevera bajo la prueba, porque una vez que ha sido aprobado, recibirá la corona de la vida que <i>el Señor</i> ha prometido a los que lo aman. </span></p>"
        }
    ],
    "luminosos-0": [
        {
            "ref": "Mateo 3:13-17",
            "text": "<p><span class=\"text Matt-3-13\"><span class=\"verse-num\">13</span>Entonces Jesús llegó de Galilea al Jordán, a <i>donde estaba</i> Juan, para ser bautizado por él. </span> <span class=\"text Matt-3-14\" id=\"es-NBLA-23207\"><span class=\"verse-num\">14</span>Pero Juan trató de impedirlo, diciendo: «Yo necesito ser bautizado por Ti, ¿y Tú vienes a mí?».</span></p><p><span class=\"text Matt-3-15\" id=\"es-NBLA-23208\"><span class=\"verse-num\">15</span>Jesús le respondió: <span class=\"woj\">«Permíte<i>lo</i> ahora; porque es conveniente que así cumplamos toda justicia</span><span class=\"woj\">».</span> Entonces Juan consintió. </span> <span class=\"text Matt-3-16\" id=\"es-NBLA-23209\"><span class=\"verse-num\">16</span>Después de ser bautizado, Jesús salió del agua inmediatamente; y los cielos se abrieron en ese momento y él vio al Espíritu de Dios que descendía como una paloma y venía sobre Él. </span> <span class=\"text Matt-3-17\" id=\"es-NBLA-23210\"><span class=\"verse-num\">17</span>Y <i>se oyó</i> una voz de los cielos que decía: «Este es Mi Hijo amado en quien me he complacido».</span></p>"
        },
        {
            "ref": "Marcos 1:9-11",
            "text": "<p><span class=\"text Mark-1-9\"><span class=\"verse-num\">9</span>Sucedió que en aquellos días Jesús vino de Nazaret de Galilea, y fue bautizado por Juan en el Jordán. </span> <span class=\"text Mark-1-10\" id=\"es-NBLA-24226\"><span class=\"verse-num\">10</span>Inmediatamente, al salir del agua, vio que los cielos se abrían, y que el Espíritu descendía sobre Él como una paloma; </span> <span class=\"text Mark-1-11\" id=\"es-NBLA-24227\"><span class=\"verse-num\">11</span>y vino una voz de los cielos, <i>que decía:</i> «Tú eres Mi Hijo amado, en Ti me he complacido».</span></p>"
        },
        {
            "ref": "Lucas 3:21-22",
            "text": "<p><span class=\"text Luke-3-21\"><span class=\"verse-num\">21</span>Y aconteció que cuando todo el pueblo era bautizado, Jesús también fue bautizado; y mientras Él oraba, el cielo se abrió, </span> <span class=\"text Luke-3-22\" id=\"es-NBLA-25048\"><span class=\"verse-num\">22</span>y el Espíritu Santo descendió sobre Él en forma corporal, como una paloma, y vino una voz del cielo, <i>que decía:</i> «Tú eres Mi Hijo amado, en Ti me he complacido».</span></p>"
        },
        {
            "ref": "Juan 1:29-34",
            "text": "<p><span class=\"text John-1-29\"><span class=\"verse-num\">29</span>Al día siguiente Juan vio a Jesús que venía hacia él, y dijo: «Ahí está el Cordero de Dios que quita el pecado del mundo. </span> <span class=\"text John-1-30\" id=\"es-NBLA-26075\"><span class=\"verse-num\">30</span>Este es Aquel de quien yo dije: “Después de mí viene un Hombre que es antes de mí porque era primero que yo”. </span> <span class=\"text John-1-31\" id=\"es-NBLA-26076\"><span class=\"verse-num\">31</span>Yo no lo conocía, pero para que Él fuera manifestado a Israel, por esto yo vine bautizando en agua».</span></p><p><span class=\"text John-1-32\" id=\"es-NBLA-26077\"><span class=\"verse-num\">32</span>Juan también dio testimonio, diciendo: «He visto al Espíritu que descendía del cielo como paloma, y se posó sobre Él. </span> <span class=\"text John-1-33\" id=\"es-NBLA-26078\"><span class=\"verse-num\">33</span>Yo no lo conocía, pero el que me envió a bautizar en agua me dijo: “Aquel sobre quien veas al Espíritu descender y posarse sobre Él, Este es el que bautiza en el Espíritu Santo”. </span> <span class=\"text John-1-34\" id=\"es-NBLA-26079\"><span class=\"verse-num\">34</span>Y yo <i>lo</i> he visto y he dado testimonio de que Este es el Hijo de Dios».</span></p>"
        },
        {
            "ref": "Isaías 42:1",
            "text": "<p><span class=\"text Isa-42-1\"><span class=\"verse-num\">1</span>»Este es Mi Siervo, a quien Yo sostengo,</span><br/><span class=\"text Isa-42-1\">Mi escogido, <i>en quien</i> Mi alma se complace.</span><br/><span class=\"text Isa-42-1\">He puesto Mi Espíritu sobre Él;</span><br/><span class=\"text Isa-42-1\">Él traerá justicia a las naciones.</span></p>"
        },
        {
            "ref": "Isaías 61:1",
            "text": "<p><span class=\"text Isa-61-1\"><span class=\"verse-num\">1</span>El Espíritu del Señor <span class=\"small-caps\" style=\"font-variant: small-caps\">Dios</span> está sobre mí,</span><br/><span class=\"text Isa-61-1\">Porque me ha ungido el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span></span><br/><span class=\"text Isa-61-1\">Para traer buenas nuevas a los afligidos.</span><br/><span class=\"text Isa-61-1\">Me ha enviado para vendar a los quebrantados de corazón,</span><br/><span class=\"text Isa-61-1\">Para proclamar libertad a los cautivos</span><br/><span class=\"text Isa-61-1\">Y liberación a los prisioneros;</span></p>"
        },
        {
            "ref": "2 Corintios 5:21",
            "text": "<p><span class=\"text 2Cor-5-21\" id=\"es-NBLA-28899\"><span class=\"verse-num\">21</span>Al que no conoció pecado, lo hizo pecado por nosotros, para que fuéramos hechos justicia de Dios en Él.</span></p>"
        }
    ],
    "luminosos-1": [
        {
            "ref": "Juan 2:1-11",
            "text": "<p><span class=\"text John-2-1\"><span class=\"verse-num\">1</span>Al tercer día se celebró una boda en Caná de Galilea, y estaba allí la madre de Jesús; </span> <span class=\"text John-2-2\" id=\"es-NBLA-26098\"><span class=\"verse-num\">2</span>y también Jesús fue invitado a la boda, con Sus discípulos. </span> <span class=\"text John-2-3\" id=\"es-NBLA-26099\"><span class=\"verse-num\">3</span>Cuando se acabó el vino, la madre de Jesús le dijo: «No tienen vino». </span> <span class=\"text John-2-4\" id=\"es-NBLA-26100\"><span class=\"verse-num\">4</span>Y Jesús le dijo: <span class=\"woj\">«Mujer</span><span class=\"woj\">, ¿qué <i>nos interesa esto</i> a ti y a Mí</span><span class=\"woj\">? Todavía no ha llegado Mi hora</span><span class=\"woj\">».</span> </span> <span class=\"text John-2-5\" id=\"es-NBLA-26101\"><span class=\"verse-num\">5</span>Su madre dijo a los que servían: «Hagan todo lo que Él les diga».</span></p><p><span class=\"text John-2-6\" id=\"es-NBLA-26102\"><span class=\"verse-num\">6</span>Y había allí seis tinajas de piedra, puestas para ser usadas en el rito de la purificación de los judíos; en cada una cabían dos o tres cántaros. </span> <span class=\"text John-2-7\" id=\"es-NBLA-26103\"><span class=\"verse-num\">7</span>Jesús les dijo: <span class=\"woj\">«Llenen de agua las tinajas».</span> Y las llenaron hasta el borde. </span> <span class=\"text John-2-8\" id=\"es-NBLA-26104\"><span class=\"verse-num\">8</span>Entonces les dijo: <span class=\"woj\">«Saquen ahora <i>un poco</i> y llévenlo al mayordomo».</span> Y <i>se</i> lo llevaron. </span> <span class=\"text John-2-9\" id=\"es-NBLA-26105\"><span class=\"verse-num\">9</span>El mayordomo probó el agua convertida en vino, sin saber de dónde era, pero los que servían, que habían sacado el agua, lo sabían. Entonces el mayordomo llamó al novio, </span> <span class=\"text John-2-10\" id=\"es-NBLA-26106\"><span class=\"verse-num\">10</span>y le dijo: «Todo hombre sirve primero el vino bueno, y cuando ya han tomado bastante, <i>entonces</i> el inferior; <i>pero</i> tú has guardado hasta ahora el vino bueno».</span></p><p><span class=\"text John-2-11\" id=\"es-NBLA-26107\"><span class=\"verse-num\">11</span>Este principio de <i>Sus</i> señales hizo Jesús en Caná de Galilea, y manifestó Su gloria, y Sus discípulos creyeron en Él.</span></p>"
        },
        {
            "ref": "Isaías 25:6",
            "text": "<p><span class=\"text Isa-25-6\" id=\"es-NBLA-18125\"><span class=\"verse-num\">6</span>¶El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> de los ejércitos preparará en este monte para todos los pueblos un banquete de manjares suculentos,</span><br/><span class=\"text Isa-25-6\">Un banquete de vino añejo, pedazos escogidos con tuétano,</span><br/><span class=\"text Isa-25-6\"><i>Y</i> vino añejo refinado.</span></p>"
        },
        {
            "ref": "Isaías 62:4-5",
            "text": "<p><span class=\"text Isa-62-4\" id=\"es-NBLA-18859\"><span class=\"verse-num\">4</span>Nunca más se dirá de ti: «Abandonada»,</span><br/><span class=\"text Isa-62-4\">Ni de tu tierra se dirá jamás: «Desolada»;</span><br/><span class=\"text Isa-62-4\">Sino que se te llamará: «Mi deleite está en ella»,</span><br/><span class=\"text Isa-62-4\">Y a tu tierra: «Prometida».</span><br/><span class=\"text Isa-62-4\">Porque en ti se deleita el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>,</span><br/><span class=\"text Isa-62-4\">Y tu tierra tendrá esposo.</span><br/><span class=\"text Isa-62-5\" id=\"es-NBLA-18860\"><span class=\"verse-num\">5</span>Porque <i>como</i> el joven se desposa con una virgen,</span><br/><span class=\"text Isa-62-5\">Se desposarán contigo tus hijos;</span><br/><span class=\"text Isa-62-5\">Y <i>como</i> se regocija el esposo por la esposa,</span><br/><span class=\"text Isa-62-5\">Tu Dios se regocijará por ti.</span></p>"
        },
        {
            "ref": "Apocalipsis 19:7-9",
            "text": "<p><span class=\"text Rev-19-7\" id=\"es-NBLA-31026\"><span class=\"verse-num\">7</span>-»Regocijémonos y alegrémonos, y démosle a Él la gloria,</span><br/><span class=\"text Rev-19-7\">Porque las bodas del Cordero han llegado y Su esposa se ha preparado».</span><br/><span class=\"text Rev-19-8\" id=\"es-NBLA-31027\"><span class=\"verse-num\">8</span>Y a ella le fue concedido vestirse de lino fino, resplandeciente <i>y</i> limpio,</span><br/><span class=\"text Rev-19-8\">Porque las acciones justas de los santos son el lino fino.</span></p><p><span class=\"text Rev-19-9\" id=\"es-NBLA-31028\"><span class=\"verse-num\">9</span>El <i>ángel</i> me dijo: «Escribe: “Bienaventurados los que están invitados a la cena de las bodas del Cordero”». También me dijo: «Estas son palabras verdaderas de Dios». </span></p>"
        }
    ],
    "luminosos-2": [
        {
            "ref": "Mateo 4:12-17",
            "text": "<p><span class=\"text Matt-4-12\"><span class=\"verse-num\">12</span>Cuando Jesús oyó que Juan había sido encarcelado, regresó a Galilea. </span> <span class=\"text Matt-4-13\" id=\"es-NBLA-23223\"><span class=\"verse-num\">13</span>Saliendo de Nazaret, fue a vivir en Capernaúm, que está junto al mar, en la región de Zabulón y de Neftalí; </span> <span class=\"text Matt-4-14\" id=\"es-NBLA-23224\"><span class=\"verse-num\">14</span>para que se cumpliera lo que fue dicho por medio del profeta Isaías, cuando dijo:</span></p><p><span class=\"text Matt-4-15\" id=\"es-NBLA-23225\"><span class=\"verse-num\">15</span>«¡<span class=\"small-caps\" style=\"font-variant: small-caps\">Tierra de Zabulón y tierra de Neftalí</span>,</span><br/><span class=\"text Matt-4-15\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Camino del mar</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">al otro lado del Jordán</span>, <span class=\"small-caps\" style=\"font-variant: small-caps\">Galilea de los gentiles</span>!</span><br/><span class=\"text Matt-4-16\" id=\"es-NBLA-23226\"><span class=\"verse-num\">16</span>-»<span class=\"small-caps\" style=\"font-variant: small-caps\">El pueblo asentado en tinieblas vio una gran Luz</span>,</span><br/><span class=\"text Matt-4-16\">Y <span class=\"small-caps\" style=\"font-variant: small-caps\">a los que vivían</span> <span class=\"small-caps\" style=\"font-variant: small-caps\">en región y sombra de muerte</span>,</span><br/><span class=\"text Matt-4-16\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Una Luz les resplandeció</span>».</span></p><p><span class=\"text Matt-4-17\" id=\"es-NBLA-23227\"><span class=\"verse-num\">17</span>Desde entonces Jesús comenzó a predicar: <span class=\"woj\">«Arrepiéntanse, porque el reino de los cielos se ha acercado</span><span class=\"woj\">».</span></span></p>"
        },
        {
            "ref": "Marcos 1:14-15",
            "text": "<p><span class=\"text Mark-1-14\"><span class=\"verse-num\">14</span>Después que Juan había sido encarcelado, Jesús vino a Galilea predicando el evangelio de Dios. </span> <span class=\"text Mark-1-15\" id=\"es-NBLA-24231\"><span class=\"verse-num\">15</span><span class=\"woj\">«El tiempo se ha cumplido</span><span class=\"woj\">»,</span> decía, <span class=\"woj\">«y el reino de Dios se ha acercado; arrepiéntanse y crean</span><span class=\"woj\">en el evangelio».</span></span></p>"
        },
        {
            "ref": "Lucas 4:14-21",
            "text": "<p><span class=\"text Luke-4-14\"><span class=\"verse-num\">14</span>Jesús regresó a Galilea en el poder del Espíritu, y las nuevas acerca de Él se divulgaron por toda <i>aquella</i> región. </span> <span class=\"text Luke-4-15\" id=\"es-NBLA-25079\"><span class=\"verse-num\">15</span>Y enseñaba en sus sinagogas, siendo alabado por todos.</span></p><p><span class=\"text Luke-4-16\"><span class=\"verse-num\">16</span>Jesús llegó a Nazaret, donde había sido criado, y según Su costumbre, entró en la sinagoga el día de reposo, y se levantó a leer. </span> <span class=\"text Luke-4-17\" id=\"es-NBLA-25081\"><span class=\"verse-num\">17</span>Le dieron el libro del profeta Isaías, y abriendo el libro, halló el lugar donde estaba escrito:</span></p><p><span class=\"text Luke-4-18\" id=\"es-NBLA-25082\"><span class=\"verse-num\">18</span><span class=\"woj\">«<span class=\"small-caps\" style=\"font-variant: small-caps\">El Espíritu del Señor está sobre Mí</span>,</span></span><br/><span class=\"text Luke-4-18\"><span class=\"woj\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Porque me ha ungido para anunciar el evangelio a los pobres</span>.</span></span><br/><span class=\"text Luke-4-18\"><span class=\"woj\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Me ha enviado</span></span> <span class=\"woj\"><span class=\"small-caps\" style=\"font-variant: small-caps\">para proclamar libertad a los cautivos</span>,</span></span><br/><span class=\"text Luke-4-18\"><span class=\"woj\">Y <span class=\"small-caps\" style=\"font-variant: small-caps\">la recuperación de la vista a los ciegos</span>;</span></span><br/><span class=\"text Luke-4-18\"><span class=\"woj\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Para poner en libertad a los oprimidos</span></span> <span class=\"woj\">;</span></span><br/><span class=\"text Luke-4-19\" id=\"es-NBLA-25083\"><span class=\"verse-num\">19</span><span class=\"woj\"><span class=\"small-caps\" style=\"font-variant: small-caps\">Para proclamar el año favorable del Señor</span></span> <span class=\"woj\">».</span></span></p><p><span class=\"text Luke-4-20\" id=\"es-NBLA-25084\"><span class=\"verse-num\">20</span>Cerrando el libro, <i>lo</i> devolvió al asistente y se sentó; y los ojos de todos en la sinagoga estaban fijos en Él. </span> <span class=\"text Luke-4-21\" id=\"es-NBLA-25085\"><span class=\"verse-num\">21</span>Y comenzó a decirles: <span class=\"woj\">«Hoy se ha cumplido esta Escritura que han oído</span><span class=\"woj\">».</span> </span></p>"
        },
        {
            "ref": "Lucas 7:22",
            "text": "<p><span class=\"text Luke-7-22\" id=\"es-NBLA-25218\"><span class=\"verse-num\">22</span>Entonces Él les respondió: <span class=\"woj\">«Vayan y cuenten a Juan lo que han visto y oído: los <span class=\"small-caps\" style=\"font-variant: small-caps\">ciegos reciben la vista</span>, los cojos andan, los leprosos quedan limpios y los sordos oyen, los muertos son resucitados <i>y a</i> los <span class=\"small-caps\" style=\"font-variant: small-caps\">pobres se les anuncia el evangelio</span></span><span class=\"woj\">.</span> </span></p>"
        },
        {
            "ref": "Isaías 55:1-3",
            "text": "<p><span class=\"text Isa-55-1\"><span class=\"verse-num\">1</span>«Todos los sedientos, vengan a las aguas;</span><br/><span class=\"text Isa-55-1\">Y los que no tengan dinero, vengan, compren y coman.</span><br/><span class=\"text Isa-55-1\">Vengan, compren vino y leche</span><br/><span class=\"text Isa-55-1\">Sin dinero y sin costo alguno.</span><br/><span class=\"text Isa-55-2\" id=\"es-NBLA-18743\"><span class=\"verse-num\">2</span>-»¿Por qué gastan dinero en lo que no es pan,</span><br/><span class=\"text Isa-55-2\">Y su salario en lo que no sacia?</span><br/><span class=\"text Isa-55-2\">Escúchenme atentamente, y coman lo que es bueno,</span><br/><span class=\"text Isa-55-2\">Y se deleitará su alma en la abundancia.</span><br/><span class=\"text Isa-55-3\" id=\"es-NBLA-18744\"><span class=\"verse-num\">3</span>-»Inclinen su oído y vengan a Mí,</span><br/><span class=\"text Isa-55-3\">Escuchen y vivirá su alma.</span><br/><span class=\"text Isa-55-3\">Y haré con ustedes un pacto eterno,</span><br/><span class=\"text Isa-55-3\"><i>Conforme a</i> las fieles misericordias mostradas a David.</span></p>"
        },
        {
            "ref": "Isaías 61:1-2",
            "text": "<p><span class=\"text Isa-61-1\"><span class=\"verse-num\">1</span>El Espíritu del Señor <span class=\"small-caps\" style=\"font-variant: small-caps\">Dios</span> está sobre mí,</span><br/><span class=\"text Isa-61-1\">Porque me ha ungido el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span></span><br/><span class=\"text Isa-61-1\">Para traer buenas nuevas a los afligidos.</span><br/><span class=\"text Isa-61-1\">Me ha enviado para vendar a los quebrantados de corazón,</span><br/><span class=\"text Isa-61-1\">Para proclamar libertad a los cautivos</span><br/><span class=\"text Isa-61-1\">Y liberación a los prisioneros;</span><br/><span class=\"text Isa-61-2\" id=\"es-NBLA-18846\"><span class=\"verse-num\">2</span>Para proclamar el año favorable del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>,</span><br/><span class=\"text Isa-61-2\">Y el día de venganza de nuestro Dios;</span><br/><span class=\"text Isa-61-2\">Para consolar a todos los que lloran,</span></p>"
        },
        {
            "ref": "Ezequiel 36:25-27",
            "text": "<p><span class=\"text Ezek-36-25\" id=\"es-NBLA-21385\"><span class=\"verse-num\">25</span>Entonces los rociaré con agua limpia y quedarán limpios; de todas sus inmundicias y de todos sus ídolos los limpiaré.</span></p><p><span class=\"text Ezek-36-26\" id=\"es-NBLA-21386\"><span class=\"verse-num\">26</span>’Además, les daré un corazón nuevo y pondré un espíritu nuevo dentro de ustedes; quitaré de su carne el corazón de piedra y les daré un corazón de carne. </span> <span class=\"text Ezek-36-27\" id=\"es-NBLA-21387\"><span class=\"verse-num\">27</span>Pondré dentro de ustedes Mi espíritu y haré que anden en Mis estatutos, y que cumplan cuidadosamente Mis ordenanzas. </span></p>"
        }
    ],
    "luminosos-3": [
        {
            "ref": "Mateo 17:1-9",
            "text": "<p><span class=\"text Matt-17-1\"><span class=\"verse-num\">1</span>Seis días después, Jesús tomó con Él a Pedro, a Jacobo y a Juan su hermano, y los llevó aparte a un monte alto. </span> <span class=\"text Matt-17-2\" id=\"es-NBLA-23703\"><span class=\"verse-num\">2</span>Delante de ellos se transfiguró; y Su rostro resplandeció como el sol y Sus vestiduras se volvieron blancas como la luz. </span> <span class=\"text Matt-17-3\" id=\"es-NBLA-23704\"><span class=\"verse-num\">3</span>En esto, se les aparecieron Moisés y Elías hablando con Él.</span></p><p><span class=\"text Matt-17-4\" id=\"es-NBLA-23705\"><span class=\"verse-num\">4</span>Entonces Pedro dijo a Jesús: «Señor, bueno es que estemos aquí; si quieres, haré aquí tres enramadas, una para Ti, otra para Moisés y otra para Elías». </span> <span class=\"text Matt-17-5\" id=\"es-NBLA-23706\"><span class=\"verse-num\">5</span>Mientras estaba aún hablando, una nube luminosa los cubrió; y una voz <i>salió</i> de la nube, diciendo: «Este es Mi Hijo amado en quien Yo estoy complacido; óiganlo a Él».</span></p><p><span class=\"text Matt-17-6\" id=\"es-NBLA-23707\"><span class=\"verse-num\">6</span>Cuando los discípulos oyeron <i>esto,</i> cayeron sobre sus rostros y tuvieron gran temor. </span> <span class=\"text Matt-17-7\" id=\"es-NBLA-23708\"><span class=\"verse-num\">7</span>Entonces Jesús se <i>les</i> acercó, y tocándolos, dijo: <span class=\"woj\">«Levántense y no teman</span><span class=\"woj\">».</span> </span> <span class=\"text Matt-17-8\" id=\"es-NBLA-23709\"><span class=\"verse-num\">8</span>Y cuando alzaron sus ojos no vieron a nadie, sino a Jesús solo.</span></p><p><span class=\"text Matt-17-9\"><span class=\"verse-num\">9</span>Mientras descendían del monte, Jesús les ordenó: <span class=\"woj\">«No cuenten a nadie la visión</span><span class=\"woj\">hasta que el Hijo del Hombre</span><span class=\"woj\">haya resucitado de entre los muertos</span><span class=\"woj\">».</span> </span></p>"
        },
        {
            "ref": "Marcos 9:2-10",
            "text": "<p><span class=\"text Mark-9-2\"><span class=\"verse-num\">2</span>Seis días después, Jesús tomó con Él a Pedro, a Jacobo y a Juan, y los llevó a ellos solos a un monte alto; y se transfiguró delante de ellos. </span> <span class=\"text Mark-9-3\" id=\"es-NBLA-24542\"><span class=\"verse-num\">3</span>Sus vestiduras se volvieron resplandecientes, muy blancas, tal como ningún lavandero sobre la tierra las puede blanquear. </span> <span class=\"text Mark-9-4\" id=\"es-NBLA-24543\"><span class=\"verse-num\">4</span>Y se les apareció Elías junto con Moisés, y estaban hablando con Jesús. </span> <span class=\"text Mark-9-5\" id=\"es-NBLA-24544\"><span class=\"verse-num\">5</span>Entonces Pedro dijo a Jesús: «Rabí, bueno es que estemos aquí; hagamos tres enramadas, una para Ti, otra para Moisés y otra para Elías».</span></p><p><span class=\"text Mark-9-6\" id=\"es-NBLA-24545\"><span class=\"verse-num\">6</span>Porque él no sabía qué decir, pues estaban aterrados. </span> <span class=\"text Mark-9-7\" id=\"es-NBLA-24546\"><span class=\"verse-num\">7</span>Entonces se formó una nube que los cubrió, y una voz salió de la nube: «Este es Mi Hijo amado; oigan a Él». </span> <span class=\"text Mark-9-8\" id=\"es-NBLA-24547\"><span class=\"verse-num\">8</span>Y enseguida miraron en derredor, pero ya no vieron a nadie con ellos, sino a Jesús solo.</span></p><p><span class=\"text Mark-9-9\"><span class=\"verse-num\">9</span>Cuando bajaban del monte, Jesús les ordenó que no contaran a nadie lo que habían visto, hasta que el Hijo del Hombre resucitara de entre los muertos. </span> <span class=\"text Mark-9-10\" id=\"es-NBLA-24549\"><span class=\"verse-num\">10</span>Y se guardaron para sí lo que fue dicho, discutiendo entre sí qué significaría eso de resucitar de entre los muertos. </span></p>"
        },
        {
            "ref": "Lucas 9:28-36",
            "text": "<p><span class=\"text Luke-9-28\"><span class=\"verse-num\">28</span>Y como ocho días después de estas palabras, Jesús tomó con Él a Pedro, a Juan y a Jacobo, y subió al monte a orar. </span> <span class=\"text Luke-9-29\" id=\"es-NBLA-25331\"><span class=\"verse-num\">29</span>Mientras oraba, la apariencia de Su rostro se hizo otra, y Su ropa <i>se hizo</i> blanca <i>y</i> resplandeciente.</span></p><p><span class=\"text Luke-9-30\" id=\"es-NBLA-25332\"><span class=\"verse-num\">30</span>Y de repente dos hombres hablaban con Él, los cuales eran Moisés y Elías, </span> <span class=\"text Luke-9-31\" id=\"es-NBLA-25333\"><span class=\"verse-num\">31</span>quienes apareciendo en gloria, hablaban de la partida de Jesús que Él estaba a punto de cumplir en Jerusalén. </span> <span class=\"text Luke-9-32\" id=\"es-NBLA-25334\"><span class=\"verse-num\">32</span>Pedro y sus compañeros habían sido vencidos por el sueño, pero cuando estuvieron bien despiertos, vieron la gloria de Jesús y a los dos varones que estaban con Él. </span> <span class=\"text Luke-9-33\" id=\"es-NBLA-25335\"><span class=\"verse-num\">33</span>Y al retirarse ellos de Él, Pedro dijo a Jesús: «Maestro, es bueno quedarnos aquí; hagamos tres enramadas, una para Ti, otra para Moisés y otra para Elías». Pero Pedro no sabía lo que decía.</span></p><p><span class=\"text Luke-9-34\" id=\"es-NBLA-25336\"><span class=\"verse-num\">34</span>Entonces, mientras él decía esto, se formó una nube que los cubrió; y tuvieron temor al entrar en la nube. </span> <span class=\"text Luke-9-35\" id=\"es-NBLA-25337\"><span class=\"verse-num\">35</span>Y una voz salió de la nube, que decía: «Este es Mi Hijo, <i>Mi</i> Escogido; oigan a Él». </span> <span class=\"text Luke-9-36\" id=\"es-NBLA-25338\"><span class=\"verse-num\">36</span>Después de oírse la voz, Jesús quedó solo. Ellos mantuvieron esto en secreto; por aquellos días no contaron nada de lo que habían visto.</span></p>"
        },
        {
            "ref": "Éxodo 34:29-35",
            "text": "<p><span class=\"text Exod-34-29\"><span class=\"verse-num\">29</span>Cuando Moisés descendía del monte Sinaí con las dos tablas del testimonio en su mano, al descender del monte, Moisés no sabía que la piel de su rostro resplandecía por haber hablado con Dios. </span> <span class=\"text Exod-34-30\" id=\"es-NBLA-2527\"><span class=\"verse-num\">30</span>Al ver Aarón y todos los israelitas que la piel del rostro de Moisés resplandecía, tuvieron temor de acercarse a él.</span></p><p><span class=\"text Exod-34-31\" id=\"es-NBLA-2528\"><span class=\"verse-num\">31</span>Entonces Moisés los llamó, y Aarón y todos los jefes de la congregación regresaron a él, y Moisés les habló. </span> <span class=\"text Exod-34-32\" id=\"es-NBLA-2529\"><span class=\"verse-num\">32</span>Después se acercaron todos los israelitas, y él les mandó <i>que hicieran</i> todo lo que el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> había hablado con él en el monte Sinaí. </span> <span class=\"text Exod-34-33\" id=\"es-NBLA-2530\"><span class=\"verse-num\">33</span>Cuando Moisés acabó de hablar con ellos, puso un velo sobre su rostro.</span></p><p><span class=\"text Exod-34-34\" id=\"es-NBLA-2531\"><span class=\"verse-num\">34</span>Pero siempre que Moisés entraba a la presencia del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> para hablar con Él, se quitaba el velo hasta que salía. Siempre que él salía, decía a los israelitas lo que el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> le había <i>ordenado</i>. </span> <span class=\"text Exod-34-35\" id=\"es-NBLA-2532\"><span class=\"verse-num\">35</span>Los israelitas veían que la piel del rostro de Moisés resplandecía, y Moisés volvía a ponerse el velo sobre su rostro hasta que entraba a hablar con Dios.</span></p>"
        },
        {
            "ref": "2 Pedro 1:16-18",
            "text": "<p><span class=\"text 2Pet-1-16\"><span class=\"verse-num\">16</span>Porque cuando les dimos a conocer el poder y la venida de nuestro Señor Jesucristo, no seguimos fábulas ingeniosamente inventadas, sino que fuimos testigos oculares de Su majestad. </span> <span class=\"text 2Pet-1-17\" id=\"es-NBLA-30497\"><span class=\"verse-num\">17</span>Pues cuando Él recibió honor y gloria de Dios Padre, la Majestuosa Gloria le hizo esta declaración: «Este es Mi Hijo amado en quien me he complacido». </span> <span class=\"text 2Pet-1-18\" id=\"es-NBLA-30498\"><span class=\"verse-num\">18</span>Nosotros mismos escuchamos esta declaración, hecha desde el cielo cuando estábamos con Él en el monte santo.</span></p>"
        },
        {
            "ref": "2 Corintios 3:18",
            "text": "<p><span class=\"text 2Cor-3-18\" id=\"es-NBLA-28860\"><span class=\"verse-num\">18</span>Pero todos nosotros, con el rostro descubierto, contemplando como en un espejo la gloria del Señor, estamos siendo transformados en la misma imagen de gloria en gloria, como por el Señor, el Espíritu.</span></p>"
        }
    ],
    "luminosos-4": [
        {
            "ref": "Mateo 26:26-29",
            "text": "<p><span class=\"text Matt-26-26\"><span class=\"verse-num\">26</span>Mientras comían, Jesús tomó pan, y habiéndo<i>lo</i> bendecido, <i>lo</i> partió, y dándose<i>lo</i> a los discípulos, dijo: <span class=\"woj\">«Tomen, coman; esto es Mi cuerpo».</span> </span> <span class=\"text Matt-26-27\" id=\"es-NBLA-24082\"><span class=\"verse-num\">27</span>Y tomando una copa, y habiendo dado gracias, se <i>la</i> dio, diciendo: <span class=\"woj\">«Beban todos de ella;</span> </span> <span class=\"text Matt-26-28\" id=\"es-NBLA-24083\"><span class=\"verse-num\">28</span><span class=\"woj\">porque esto es Mi sangre del nuevo</span><span class=\"woj\">pacto</span><span class=\"woj\">, que es derramada por muchos</span><span class=\"woj\">para el perdón de los pecados.</span> </span> <span class=\"text Matt-26-29\" id=\"es-NBLA-24084\"><span class=\"verse-num\">29</span><span class=\"woj\">Les digo que desde ahora no beberé más de este fruto de la vid, hasta aquel día cuando lo beba nuevo con ustedes en el reino de Mi Padre».</span></span></p>"
        },
        {
            "ref": "Marcos 14:22-25",
            "text": "<p><span class=\"text Mark-14-22\"><span class=\"verse-num\">22</span>Mientras comían, tomó pan, y habiéndo<i>lo</i> bendecido <i>lo</i> partió, se <i>lo</i> dio a ellos, y dijo: <span class=\"woj\">«Tomen, esto es Mi cuerpo».</span> </span> <span class=\"text Mark-14-23\" id=\"es-NBLA-24778\"><span class=\"verse-num\">23</span>Y tomando una copa, después de dar gracias, se <i>la</i> dio a ellos, y todos bebieron de ella. </span> <span class=\"text Mark-14-24\" id=\"es-NBLA-24779\"><span class=\"verse-num\">24</span>Y les dijo: <span class=\"woj\">«Esto es Mi sangre del nuevo</span><span class=\"woj\">pacto</span><span class=\"woj\">, que es derramada por muchos</span><span class=\"woj\">.</span> </span> <span class=\"text Mark-14-25\" id=\"es-NBLA-24780\"><span class=\"verse-num\">25</span><span class=\"woj\">En verdad les digo, que ya no beberé más del fruto de la vid hasta aquel día cuando lo beba nuevo en el reino de Dios».</span></span></p>"
        },
        {
            "ref": "Lucas 22:14-20",
            "text": "<p><span class=\"text Luke-22-14\"><span class=\"verse-num\">14</span>Cuando llegó la hora, Jesús se sentó <i>a la mesa,</i> y con Él los apóstoles, </span> <span class=\"text Luke-22-15\" id=\"es-NBLA-25880\"><span class=\"verse-num\">15</span>y les dijo: <span class=\"woj\">«Intensamente he deseado comer esta Pascua con ustedes antes de padecer;</span> </span> <span class=\"text Luke-22-16\" id=\"es-NBLA-25881\"><span class=\"verse-num\">16</span><span class=\"woj\">porque les digo que nunca más volveré a comerla hasta que se cumpla en el reino de Dios</span><span class=\"woj\">».</span></span></p><p><span class=\"text Luke-22-17\" id=\"es-NBLA-25882\"><span class=\"verse-num\">17</span>Y tomando una copa, después de haber dado gracias, dijo: <span class=\"woj\">«Tomen esto y repártanlo entre ustedes</span><span class=\"woj\">;</span> </span> <span class=\"text Luke-22-18\" id=\"es-NBLA-25883\"><span class=\"verse-num\">18</span><span class=\"woj\">porque les digo que de ahora en adelante no beberé del fruto de la vid, hasta que venga el reino de Dios</span><span class=\"woj\">».</span></span></p><p><span class=\"text Luke-22-19\" id=\"es-NBLA-25884\"><span class=\"verse-num\">19</span>Y tomando el pan, después de haber dado gracias, <i>lo</i> partió, y les dio, diciendo: <span class=\"woj\">«Esto es Mi cuerpo que por ustedes es dado; hagan esto en memoria de Mí».</span> </span> <span class=\"text Luke-22-20\" id=\"es-NBLA-25885\"><span class=\"verse-num\">20</span>De la misma manera <i>tomó</i> la copa después de haber cenado, diciendo: <span class=\"woj\">«Esta copa es el nuevo pacto</span><span class=\"woj\">en Mi sangre</span><span class=\"woj\">, que es derramada por ustedes.</span></span></p>"
        },
        {
            "ref": "1 Corintios 11:23-26",
            "text": "<p><span class=\"text 1Cor-11-23\" id=\"es-NBLA-28624\"><span class=\"verse-num\">23</span>Porque yo recibí del Señor lo mismo que les he enseñado: que el Señor Jesús, la noche en que fue entregado, tomó pan, </span> <span class=\"text 1Cor-11-24\" id=\"es-NBLA-28625\"><span class=\"verse-num\">24</span>y después de dar gracias, <i>lo</i> partió y dijo: <span class=\"woj\">«Esto es Mi cuerpo que es</span><span class=\"woj\">para ustedes; hagan esto en memoria de Mí».</span></span></p><p><span class=\"text 1Cor-11-25\" id=\"es-NBLA-28626\"><span class=\"verse-num\">25</span>De la misma manera <i>tomó</i> también la copa después de haber cenado, diciendo: <span class=\"woj\">«Esta copa es el nuevo pacto</span><span class=\"woj\">en Mi sangre</span><span class=\"woj\">; hagan esto cuantas veces <i>la</i> beban en memoria de Mí».</span> </span> <span class=\"text 1Cor-11-26\" id=\"es-NBLA-28627\"><span class=\"verse-num\">26</span>Porque todas las veces que coman este pan y beban <i>esta</i> copa, proclaman la muerte del Señor hasta que Él venga.</span></p>"
        },
        {
            "ref": "Génesis 14:18-20",
            "text": "<p><span class=\"text Gen-14-18\" id=\"es-NBLA-355\"><span class=\"verse-num\">18</span>Y Melquisedec, rey de Salem, sacó pan y vino; él era sacerdote del Dios Altísimo. </span> <span class=\"text Gen-14-19\" id=\"es-NBLA-356\"><span class=\"verse-num\">19</span>Él lo bendijo, diciendo:</span></p><p><span class=\"text Gen-14-19\">«Bendito sea Abram del Dios Altísimo,</span><br/><span class=\"text Gen-14-19\">Creador del cielo y de la tierra;</span><br/><span class=\"text Gen-14-20\" id=\"es-NBLA-357\"><span class=\"verse-num\">20</span>Y bendito sea el Dios Altísimo</span><br/><span class=\"text Gen-14-20\">Que entregó a tus enemigos en tu mano».</span></p><p><span class=\"text Gen-14-20\">Y <i>Abram</i> le dio el diezmo de todo.</span></p>"
        },
        {
            "ref": "Éxodo 12:1-14",
            "text": "<p><span class=\"text Exod-12-1\"><span class=\"verse-num\">1</span>En la tierra de Egipto el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> habló a Moisés y a Aarón y les dijo: </span> <span class=\"text Exod-12-2\" id=\"es-NBLA-1819\"><span class=\"verse-num\">2</span>«Este mes será para ustedes el principio de los meses. Será el primer mes del año para ustedes. </span> <span class=\"text Exod-12-3\" id=\"es-NBLA-1820\"><span class=\"verse-num\">3</span>Hablen a toda la congregación de Israel y digan: “El <i>día</i> diez de este mes cada uno tomará para sí un cordero, según sus casas paternas; un cordero para cada casa. </span> <span class=\"text Exod-12-4\" id=\"es-NBLA-1821\"><span class=\"verse-num\">4</span>Pero si la casa es muy pequeña para un cordero, entonces él y el vecino más cercano a su casa tomarán uno según el número de personas. Conforme a lo que cada persona coma, dividirán ustedes el cordero. </span> <span class=\"text Exod-12-5\" id=\"es-NBLA-1822\"><span class=\"verse-num\">5</span>El cordero será un macho sin defecto, de un año. Lo apartarán de entre las ovejas o de entre las cabras. </span> <span class=\"text Exod-12-6\" id=\"es-NBLA-1823\"><span class=\"verse-num\">6</span>Y lo guardarán hasta el día catorce del mismo mes. Entonces toda la asamblea de la congregación de Israel lo matará al anochecer. </span> <span class=\"text Exod-12-7\" id=\"es-NBLA-1824\"><span class=\"verse-num\">7</span>Ellos tomarán parte de la sangre y la pondrán en los dos postes y en el dintel de las casas donde lo coman.</span></p><p><span class=\"text Exod-12-8\" id=\"es-NBLA-1825\"><span class=\"verse-num\">8</span>”Comerán la carne esa <i>misma</i> noche, asada al fuego, y la comerán con pan sin levadura y con hierbas amargas. </span> <span class=\"text Exod-12-9\" id=\"es-NBLA-1826\"><span class=\"verse-num\">9</span>Ustedes no comerán nada de él crudo ni hervido en agua, sino asado al fuego, <i>tanto</i> su cabeza <i>como</i> sus patas y sus entrañas. </span> <span class=\"text Exod-12-10\" id=\"es-NBLA-1827\"><span class=\"verse-num\">10</span>No dejarán nada de él para la mañana, sino que lo que quede de él para la mañana lo quemarán en el fuego. </span> <span class=\"text Exod-12-11\" id=\"es-NBLA-1828\"><span class=\"verse-num\">11</span>De esta manera lo comerán: ceñidas sus cinturas, las sandalias en sus pies y el cayado en su mano, lo comerán apresuradamente. Es la Pascua del <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>.</span></p><p><span class=\"text Exod-12-12\" id=\"es-NBLA-1829\"><span class=\"verse-num\">12</span>”Porque esa noche pasaré por la tierra de Egipto, y heriré a todo primogénito en la tierra de Egipto, tanto <i>de</i> hombre como <i>de</i> animal. Ejecutaré juicios contra todos los dioses de Egipto. Yo, el <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>. </span> <span class=\"text Exod-12-13\" id=\"es-NBLA-1830\"><span class=\"verse-num\">13</span>La sangre les será a ustedes por señal en las casas donde estén. Cuando Yo vea la sangre pasaré de largo, y ninguna plaga vendrá sobre ustedes para destruir<i>los</i> cuando Yo hiera la tierra de Egipto. </span> <span class=\"text Exod-12-14\" id=\"es-NBLA-1831\"><span class=\"verse-num\">14</span>Y este día será memorable para ustedes y lo celebrarán <i>como</i> fiesta al <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span>. Lo celebrarán por todas sus generaciones <i>como</i> ordenanza perpetua.</span></p>"
        },
        {
            "ref": "Salmos 110:4",
            "text": "<p><span class=\"text Ps-110-4\" id=\"es-NBLA-15791\"><span class=\"verse-num\">4</span>¶El <span class=\"small-caps\" style=\"font-variant: small-caps\">Señor</span> ha jurado y no se retractará:</span><br/><span class=\"text Ps-110-4\">«Tú eres sacerdote para siempre</span><br/><span class=\"text Ps-110-4\">Según el orden de Melquisedec».</span></p>"
        },
        {
            "ref": "Juan 6:35, 51-58",
            "text": "<p><span class=\"text John-6-35\" id=\"es-NBLA-26293\"><span class=\"verse-num\">35</span>Jesús les dijo: <span class=\"woj\">«Yo soy el pan de la vida</span><span class=\"woj\">; el que viene a Mí no tendrá hambre, y el que cree en Mí nunca tendrá sed</span><span class=\"woj\">.</span> </span></p>"
        }
    ]
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

const btnReadBible = document.getElementById("btn-read-bible");
const btnSkipDecade = document.getElementById("btn-skip-decade");
const bibleModal = document.getElementById("bible-modal");
const bibleModalTitle = document.getElementById("bible-modal-title");
const bibleTabs = document.getElementById("bible-tabs");
const bibleText = document.getElementById("bible-text");
const closeModal = document.querySelector(".close-modal");

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

    btnReadBible.addEventListener("click", openBibleModal);
    btnSkipDecade.addEventListener("click", skipDecade);
    closeModal.addEventListener("click", () => bibleModal.classList.remove("active"));
    window.addEventListener("click", (e) => {
        if (e.target === bibleModal) {
            bibleModal.classList.remove("active");
        }
    });
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
        
        // Contenedor izquierdo para número e info
        const infoDiv = document.createElement("div");
        infoDiv.style.display = "flex";
        infoDiv.style.gap = "0.5rem";
        infoDiv.style.alignItems = "center";
        
        const span = document.createElement("span");
        span.textContent = `${idx + 1}.`;
        infoDiv.appendChild(span);
        
        const textNode = document.createTextNode(` ${m.title.substring(3)}`);
        infoDiv.appendChild(textNode);
        li.appendChild(infoDiv);
        
        // Botón derecho para abrir el visor bíblico
        const readBtn = document.createElement("button");
        readBtn.className = "btn-read-preview";
        readBtn.textContent = "Leer pasajes";
        readBtn.title = `Leer pasajes bíblicos para ${m.title}`;
        readBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            openBibleModalForMystery(key, idx);
        });
        li.appendChild(readBtn);
        
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
        mysteryIndex: 0,
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
            mysteryIndex: d,
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
    prayerName.textContent = step.prayer.name;
    
    // Limpiar y setear texto de descripción de misterio de forma segura
    mysteryDesc.textContent = "";
    const descLines = step.desc.split("\n\n");
    descLines.forEach((lineText) => {
        const p = document.createElement("p");
        let cleanText = lineText.replace(/^\*(.*)\*$/, '$1');
        p.textContent = cleanText;
        if (lineText.startsWith("*") && lineText.endsWith("*")) {
            p.style.fontStyle = "italic";
            p.style.fontWeight = "600";
            p.style.color = "var(--color-neutral)";
        }
        mysteryDesc.appendChild(p);
    });
    
    // Limpiar y setear texto de oración de forma segura
    prayerText.textContent = "";
    const lines = step.prayer.text.split("\n\n");
    lines.forEach((lineText) => {
        const p = document.createElement("p");
        p.style.marginBottom = "0.75rem";
        if (lineText.startsWith("*") && lineText.endsWith("*")) {
            p.textContent = lineText.slice(1, -1);
            p.style.fontStyle = "italic";
            p.style.fontWeight = "600";
            p.style.color = "var(--color-neutral)";
        } else {
            p.textContent = lineText;
        }
        prayerText.appendChild(p);
    });

    // Contador y progreso
    phaseLabel.textContent = step.phase;
    stepCounter.textContent = `Paso ${currentStepIndex + 1} de ${rosarySteps.length}`;
    
    const progressPercent = (currentStepIndex / (rosarySteps.length - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Navegación
    btnPrev.disabled = currentStepIndex === 0;

    // Mostrar/ocultar botón de lectura bíblica
    if (step.mysteryIndex !== undefined) {
        btnReadBible.style.display = "inline-flex";
    } else {
        btnReadBible.style.display = "none";
    }

    // Mostrar/ocultar botón de saltar decena
    // Solo en los Ave Marías de las decenas (ID empieza con "decena-" y contiene "-av-")
    if (step.id.startsWith("decena-") && step.id.includes("-av-")) {
        btnSkipDecade.style.display = "inline-block";
    } else {
        btnSkipDecade.style.display = "none";
    }

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

function openBibleModal() {
    const step = rosarySteps[currentStepIndex];
    if (step.mysteryIndex === undefined) return;
    
    const key = DAY_MAP[selectedDay];
    openBibleModalForMystery(key, step.mysteryIndex);
}

function openBibleModalForMystery(key, mysteryIndex) {
    const bibleKey = `${key}-${mysteryIndex}`;
    const passages = BIBLE_PASSAGES[bibleKey];
    
    if (!passages || passages.length === 0) return;
    
    // Set title
    const activeMysteries = MYSTERIES[key].list;
    bibleModalTitle.textContent = activeMysteries[mysteryIndex].title;
    
    // Build tabs
    bibleTabs.replaceChildren();
    passages.forEach((p, idx) => {
        const btn = document.createElement("button");
        btn.className = `bible-tab ${idx === 0 ? "active" : ""}`;
        btn.textContent = p.ref;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".bible-tab").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            bibleText.innerHTML = p.text;
        });
        bibleTabs.appendChild(btn);
    });
    
    // Set default text (first passage)
    bibleText.innerHTML = passages[0].text;
    
    // Show modal
    bibleModal.classList.add("active");
}

function skipDecade() {
    // Buscar hacia adelante el primer paso de Gloria/Fátima de esta decena
    const nextGloriaIndex = rosarySteps.findIndex((step, idx) => idx > currentStepIndex && step.id.endsWith("-gl-fat"));
    if (nextGloriaIndex !== -1) {
        currentStepIndex = nextGloriaIndex;
        updateStepView();
    }
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

        // Espacio vacío para el Gloria al final de la decena d (solo si no es la última decena d === 4)
        if (d < 4) {
            currentAngle += 10;
            const angleSpace = (currentAngle) * (Math.PI / 180);
            const sx = cx + rx * Math.cos(angleSpace);
            const sy = cy + ry * Math.sin(angleSpace);
            createBead(svg, svgNS, `bead-decena-space-${d}`, sx, sy, 2.2, false, true);
        }

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
        circle.style.fill = "var(--color-tertiary)";
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
        bead.classList.remove("active", "completed");
        bead.classList.add("inactive");
    });

    // Colorear cuentas de los pasos anteriores como completadas
    for (let i = 0; i < currentStepIndex; i++) {
        const step = rosarySteps[i];
        const elem = document.getElementById(step.beadId);
        if (elem && step.beadId !== beadId) {
            elem.classList.remove("inactive", "active");
            elem.classList.add("completed");
        }
    }

    // Colorear la cuenta actual como activa
    const currentElem = document.getElementById(beadId);
    if (currentElem) {
        currentElem.classList.remove("inactive", "completed");
        currentElem.classList.add("active");
    }
}
