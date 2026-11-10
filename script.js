const defaultEmergencies = [
  {
    icon:"🫀", name:"RCP", category:"Reanimación",
    desc:"La reanimación cardiopulmonar (RCP) se utiliza cuando una persona no responde y no respira normalmente. Su objetivo es mantener la circulación mientras llega ayuda.",
    signs:["La persona no responde cuando se le habla o estimula suavemente.","No respira normalmente o solo presenta jadeos aislados.","Puede haber colapso repentino y ausencia de movimientos normales."],
    actions:[
      "Verifica que el lugar sea seguro antes de acercarte.",
      "Comprueba si responde y si respira normalmente. No confundas jadeos aislados con respiración normal.",
      "Pide a alguien que llame al SAMU (106) y solicite un desfibrilador externo automático (DEA), si hay uno disponible. Activa el altavoz del teléfono.",
      "Si es una persona adulta y no respira normalmente, inicia compresiones en el centro del pecho, sobre la mitad inferior del esternón.",
      "Realiza compresiones a un ritmo de 100 a 120 por minuto y con una profundidad aproximada de 5 a 6 cm en un adulto promedio. Permite que el pecho vuelva a su posición entre compresiones.",
      "Si tienes entrenamiento, combina 30 compresiones con 2 ventilaciones. Si no estás entrenado, sigue las instrucciones telefónicas del operador y realiza compresiones continuas.",
      "Si hay un DEA, enciéndelo y sigue sus instrucciones. Continúa hasta que llegue ayuda, la persona muestre signos claros de vida o no puedas continuar."
    ],
    avoid:["No retrases la llamada de emergencia buscando objetos o intentando trasladar a la persona por tus propios medios.","No realices compresiones si la persona está consciente o respira normalmente.","No interrumpas las compresiones más de lo necesario."],
    urgent:["Llama al 106 inmediatamente. La falta de respuesta y la respiración ausente o anormal son una emergencia vital."],
    prevention:["Aprende RCP mediante un curso práctico y actualizado.","Identifica dónde hay un DEA en los lugares que frecuentas."],
    note:"Esta ficha describe la RCP básica en adultos. En bebés y niños la técnica cambia. La capacitación práctica es fundamental.",
    sources:[{label:"AHA · Guías de soporte vital básico para adultos 2025",url:"https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support"},{label:"SAMU Perú · Atención de emergencias",url:"https://www.gob.pe/1013"}]
  },
  {
    icon:"🩸", name:"Hemorragias", category:"Lesiones y sangrado",
    desc:"Una hemorragia es la pérdida de sangre por la lesión de un vaso sanguíneo. Puede ser externa, cuando la sangre sale por una herida, o interna, cuando queda dentro del cuerpo.",
    signs:["Sangrado visible que puede ser leve, continuo, abundante o salir a chorros.","Herida profunda, amputación o presencia de un objeto incrustado.","Palidez, piel fría o húmeda, debilidad, mareo, respiración rápida o confusión pueden indicar pérdida importante de sangre."],
    actions:[
      "Asegura el entorno y, si es posible, utiliza guantes o una barrera para evitar el contacto directo con la sangre.",
      "Si el sangrado es abundante, pide a alguien que llame al SAMU (106).",
      "Expón la herida y aplica presión firme y directa con una gasa o tela limpia.",
      "Mantén la presión sin levantar repetidamente la tela para revisar. Si la sangre la empapa, sigue las indicaciones del operador y coloca material adicional manteniendo la presión.",
      "Si hay un objeto incrustado, no lo retires. Aplica presión alrededor del objeto y espera ayuda médica.",
      "Si la persona presenta signos de shock, mantenla acostada si lo tolera, abrigada y en reposo. Vigila su respiración hasta que llegue la ayuda."
    ],
    avoid:["No retires objetos incrustados ni explores profundamente la herida.","No apliques alcohol, café, polvo, cremas ni remedios caseros sobre una hemorragia importante.","No uses torniquetes improvisados. Un torniquete comercial debe utilizarse por personas entrenadas o siguiendo indicaciones del servicio de emergencia."],
    urgent:["Sangrado abundante, a chorros o que no se controla con presión directa.","Heridas profundas, amputaciones o sangrado en cuello, tórax, abdomen o ingle.","Palidez intensa, sudor frío, mareo, confusión, debilidad extrema o pérdida de conciencia."],
    prevention:["Manipula cuchillos, herramientas y objetos cortantes con cuidado.","Utiliza protección adecuada al realizar trabajos de riesgo."],
    note:"La hemorragia interna no siempre es visible. Tras un golpe fuerte, el dolor abdominal o torácico, la palidez, el mareo o la confusión requieren evaluación urgente.",
    sources:[{label:"AHA · Primeros auxilios: control del sangrado",url:"https://cpr.heart.org/en/resuscitation-science/first-aid-guidelines/first-aid"},{label:"British Red Cross · Sangrado abundante",url:"https://www.redcross.org.uk/first-aid/learn-first-aid/bleeding-heavily"}]
  },
  {
    icon:"🦴", name:"Fracturas", category:"Lesiones y traumatismos",
    desc:"Una fractura es la ruptura parcial o total de un hueso. Puede ser cerrada, cuando la piel permanece intacta, o abierta, cuando existe una herida que comunica con la zona de la fractura.",
    signs:["Dolor intenso o sensibilidad en una zona concreta, especialmente después de una caída o golpe.","Hinchazón, moretones o deformidad de la extremidad.","Dificultad o imposibilidad para mover o apoyar la zona lesionada.","La extremidad puede verse torcida, acortada o en una posición inusual.","En una fractura abierta puede existir una herida y, en ocasiones, verse el hueso. También puede haber adormecimiento, hormigueo o cambios de color y temperatura."],
    actions:[
      "Asegura el lugar y evita mover innecesariamente a la persona, sobre todo si hubo accidente de tránsito, caída desde altura o golpe fuerte.",
      "Pide a la persona que permanezca quieta y sostén la zona lesionada en la posición en la que se encuentra, sin intentar corregirla.",
      "Retira anillos, relojes o elementos ajustados si pueden retirarse fácilmente y sin mover la lesión.",
      "Si hay una herida, cúbrela con una gasa estéril o tela limpia. Si sangra, aplica presión alrededor de la herida, nunca directamente sobre un hueso expuesto o deformidad.",
      "Puedes colocar apoyo acolchado alrededor de la zona para limitar el movimiento, solo si puedes hacerlo sin causar dolor ni modificar la posición.",
      "Comprueba si hay cambios de sensibilidad, hormigueo, entumecimiento, palidez o frialdad en la mano o el pie, sin forzar movimientos.",
      "Solicita evaluación médica. Si se sospecha fractura de columna, cuello, pelvis, cadera, muslo, hay hueso expuesto o signos de shock, llama al SAMU (106)."
    ],
    avoid:["No intentes enderezar el hueso, acomodar la articulación ni introducir un hueso expuesto.","No masajees ni apliques calor sobre la lesión.","No obligues a la persona a caminar ni a mover la extremidad para comprobar si está fracturada.","No traslades a una persona con posible lesión de columna, cuello o pelvis, salvo que exista peligro inmediato en el lugar."],
    urgent:["Fractura abierta, deformidad importante o dolor intenso.","Sospecha de lesión en cuello, espalda, pelvis, cadera o muslo.","Pérdida de sensibilidad, hormigueo intenso, extremidad fría o pálida.","Accidente de alta energía, dificultad para respirar, desmayo o signos de shock."],
    prevention:["Mantén los pisos secos y los pasillos libres de obstáculos.","Utiliza calzado adecuado y equipo de protección en actividades deportivas o laborales.","En adultos mayores, mejora la iluminación y coloca pasamanos donde sean necesarios."],
    note:"No siempre es posible diferenciar una fractura de un esguince o una luxación a simple vista. Si existe duda, evita mover la zona y solicita evaluación profesional.",
    sources:[{label:"St John Ambulance · Fracturas y huesos rotos (revisión 2025)",url:"https://www.sja.org.uk/first-aid-advice/fractures-and-broken-bones/"},{label:"WA Health · Primeros auxilios para fracturas",url:"https://www.fsfhg.health.wa.gov.au/sitecore/content/Healthy-WA/Articles/F_I/First-aid-for-fractures-and-dislocations"}]
  },
  {
    icon:"🤕", name:"Caídas", category:"Lesiones y traumatismos",
    desc:"Una caída es un evento en el que una persona termina involuntariamente en el suelo o en un nivel inferior. Puede causar golpes, heridas, fracturas o lesiones en la cabeza y columna.",
    signs:["Dolor, hinchazón, moretones o heridas.","Dificultad para levantarse, caminar o apoyar una extremidad.","Golpe en la cabeza, confusión, somnolencia, vómitos o pérdida de conciencia.","Dolor en cuello o espalda, hormigueo, debilidad o pérdida de sensibilidad."],
    actions:[
      "Comprueba que el lugar sea seguro y pregunta a la persona qué ocurrió y dónde siente dolor.",
      "Verifica si responde y respira normalmente. Si no responde o no respira normalmente, llama al 106 y sigue las indicaciones de emergencia.",
      "Si existe sospecha de lesión en cabeza, cuello, espalda, cadera o fractura, no la levantes ni la muevas; espera ayuda.",
      "Si tiene una herida con sangrado, controla el sangrado con presión directa, excepto sobre un hueso expuesto u objeto incrustado.",
      "Si no hay signos de lesión importante y la persona está alerta, ayúdala a permanecer cómoda y solicita evaluación si hay dolor, limitación o dudas.",
      "Anota cómo ocurrió la caída y observa cambios en el estado de conciencia mientras llega la ayuda."
    ],
    avoid:["No levantes bruscamente a una persona que presenta dolor intenso o posible lesión de columna o cadera.","No minimices un golpe en la cabeza, especialmente en adultos mayores o personas que toman anticoagulantes.","No des alimentos, bebidas o medicamentos a una persona con conciencia alterada."],
    urgent:["Pérdida de conciencia, convulsiones, confusión o somnolencia inusual después de la caída.","Vómitos repetidos, dolor de cabeza intenso o debilidad de una parte del cuerpo.","Dolor en cuello o espalda, deformidad, incapacidad para levantarse o sangrado abundante.","Caída desde altura o accidente de tránsito."],
    prevention:["Retira cables y alfombras sueltas de las zonas de paso.","Mejora la iluminación y utiliza barras de apoyo en baño y escaleras.","Usa calzado firme y revisa la visión y los medicamentos con un profesional."],
    note:"En adultos mayores, incluso una caída aparentemente leve puede causar lesiones importantes. No fuerces a la persona a ponerse de pie.",
    sources:[{label:"SAMU Perú · Atención por caídas y accidentes",url:"https://www.gob.pe/1013"}]
  },
  {
    icon:"🔥", name:"Quemaduras", category:"Lesiones y traumatismos",
    desc:"Una quemadura es una lesión de la piel o de tejidos más profundos causada por calor, líquidos calientes, vapor, electricidad, sustancias químicas o radiación.",
    signs:["Enrojecimiento, dolor e hinchazón.","Ampollas o piel húmeda y muy dolorosa.","Piel blanca, marrón, negra, seca o con aspecto carbonizado en lesiones profundas.","Tos, dificultad respiratoria o quemaduras alrededor de la boca y nariz pueden indicar inhalación de humo o lesión de la vía aérea."],
    actions:[
      "Asegura el lugar y detén el contacto con la fuente de calor sin ponerte en riesgo.",
      "Enfría la quemadura térmica con agua corriente fresca durante 20 minutos. Evita enfriar todo el cuerpo, especialmente en niños y personas mayores.",
      "Retira anillos, relojes y ropa cercana si no está pegada a la piel.",
      "Después de enfriar, cubre la zona con una gasa estéril o apósito limpio, suelto y no adherente.",
      "En quemaduras químicas o eléctricas, evita el contacto con la fuente o sustancia y solicita ayuda médica urgente. En químicos, retira con cuidado la ropa contaminada y sigue las indicaciones especializadas.",
      "Si hay quemadura extensa, profunda, en cara, manos, pies, genitales o signos de inhalación de humo, llama al SAMU (106)."
    ],
    avoid:["No uses hielo ni agua helada.","No apliques pasta dental, mantequilla, aceite, alcohol, cremas ni remedios caseros.","No revientes las ampollas ni retires ropa adherida a la piel.","No coloques algodón directamente sobre la quemadura."],
    urgent:["Quemaduras grandes, profundas o con piel blanca, negra o carbonizada.","Quemaduras en cara, manos, pies, genitales o articulaciones importantes.","Lesiones por electricidad o sustancias químicas.","Dificultad para respirar, inhalación de humo, quemaduras en boca o cuello."],
    prevention:["Aleja líquidos calientes y recipientes del borde de mesas.","Verifica la temperatura del agua antes del baño de niños y adultos mayores.","Guarda productos químicos fuera del alcance de niños y usa protección al manipularlos."],
    note:"La recomendación de enfriamiento con agua corriente durante 20 minutos se refiere a quemaduras térmicas. Las quemaduras eléctricas y químicas requieren evaluación médica urgente.",
    sources:[{label:"OMS · Quemaduras",url:"https://www.who.int/news-room/fact-sheets/detail/burns"},{label:"NHS · Quemaduras y escaldaduras",url:"https://www.nhs.uk/conditions/Burns-and-scalds/"}]
  },
  {
    icon:"🫁", name:"Atragantamiento", category:"Emergencia respiratoria",
    desc:"El atragantamiento ocurre cuando un alimento u objeto bloquea parcial o totalmente la vía respiratoria. La obstrucción grave impide hablar, respirar o toser eficazmente.",
    signs:["Obstrucción leve: la persona puede toser, hablar o respirar, aunque con dificultad.","Obstrucción grave: no puede hablar, respirar ni toser eficazmente; puede llevarse las manos al cuello o cambiar de color.","Puede perder el conocimiento si no se libera la vía respiratoria."],
    actions:[
      "Si la persona puede toser con fuerza y hablar, anímala a seguir tosiendo y obsérvala. No golpees su espalda si la tos es efectiva.",
      "Si no puede hablar, respirar ni toser eficazmente, pide ayuda y llama al SAMU (106).",
      "En adultos conscientes con obstrucción grave, inclínala hacia delante y aplica hasta 5 golpes firmes entre los omóplatos con el talón de la mano.",
      "Si no se libera, realiza hasta 5 compresiones abdominales hacia dentro y arriba, por encima del ombligo. Alterna 5 golpes en la espalda y 5 compresiones abdominales.",
      "Si queda inconsciente, bájala con cuidado al suelo, activa el 106 y comienza RCP siguiendo las indicaciones del operador."
    ],
    avoid:["No introduzcas los dedos a ciegas en la boca para buscar el objeto.","No des agua ni alimentos durante el atragantamiento.","No realices compresiones abdominales a bebés menores de un año; requieren una técnica distinta.","No retrases la llamada de emergencia si la obstrucción es grave."],
    urgent:["Incapacidad para hablar, respirar o toser eficazmente.","Coloración azulada, pérdida de conciencia o empeoramiento rápido.","Tos persistente, dolor o dificultad para respirar después de expulsar el objeto: requiere evaluación médica."],
    prevention:["Come sentado y sin apuro, masticando bien.","Mantén objetos pequeños fuera del alcance de niños.","Adapta la textura de los alimentos cuando un profesional lo indique."],
    note:"Esta secuencia de golpes en la espalda y compresiones abdominales es para adultos conscientes. En bebés, niños pequeños, embarazadas y otras situaciones se requieren técnicas específicas; sigue las instrucciones del SAMU.",
    sources:[{label:"AHA · Soporte vital básico para adultos 2025",url:"https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support"},{label:"British Red Cross · Atragantamiento en adultos",url:"https://www.redcross.org.uk/first-aid/learn-first-aid/choking"}]
  },
  {
    icon:"⚡", name:"Convulsiones", category:"Emergencia neurológica",
    desc:"Una convulsión es un episodio de actividad eléctrica anormal en el cerebro. Puede provocar movimientos involuntarios, rigidez, cambios de conciencia o una mirada fija.",
    signs:["Movimientos bruscos e involuntarios de brazos y piernas.","Rigidez del cuerpo, caída o pérdida de conciencia.","Mirada fija, ausencia de respuesta o confusión posterior.","En algunos casos puede haber dificultad respiratoria o lesiones por la caída."],
    actions:[
      "Mantén la calma y mide cuánto dura el episodio.",
      "Retira muebles u objetos cercanos para evitar golpes y coloca algo suave bajo la cabeza si puedes hacerlo sin forzarla.",
      "Afloja prendas ajustadas alrededor del cuello y permanece junto a la persona.",
      "Cuando los movimientos terminen, si respira normalmente, colócala suavemente de lado y vigila su respiración.",
      "Si es la primera convulsión, dura más de 5 minutos, se repite sin recuperación, ocurre en el agua, durante el embarazo o la persona tiene una lesión o dificultad respiratoria, llama al SAMU (106)."
    ],
    avoid:["No sujetes ni intentes detener los movimientos.","No introduzcas objetos, dedos, cucharas ni medicamentos en la boca.","No des agua, comida ni pastillas hasta que esté completamente alerta.","No intentes trasladarla mientras convulsiona, salvo que exista peligro inmediato."],
    urgent:["Primera convulsión conocida.","Duración mayor de 5 minutos o episodios repetidos sin recuperar la conciencia.","Dificultad para respirar, lesión, embarazo, episodio en el agua o falta de recuperación después de la crisis."],
    prevention:["Si la persona tiene diagnóstico de epilepsia, conoce su plan de actuación indicado por su equipo de salud.","Mantén el entorno despejado y sigue las indicaciones médicas."],
    note:"No todas las convulsiones tienen los mismos signos. Protege a la persona de golpes, mide el tiempo y no intervengas dentro de su boca.",
    sources:[{label:"CDC · Primeros auxilios para convulsiones",url:"https://www.cdc.gov/epilepsy/first-aid-for-seizures/"}]
  },
  {
    icon:"🌀", name:"Desmayo", category:"Pérdida transitoria de conciencia",
    desc:"El desmayo o síncope es una pérdida breve de conciencia que suele relacionarse con una disminución temporal del flujo sanguíneo al cerebro. Aunque la persona puede recuperarse pronto, es importante identificar señales de alarma.",
    signs:["Mareo, debilidad, sudor frío o visión borrosa antes del episodio.","Palidez y pérdida breve de conciencia o tono postural.","Recuperación espontánea en poco tiempo, aunque puede persistir debilidad."],
    actions:[
      "Si la persona siente que va a desmayarse, ayúdala a acostarse boca arriba y eleva sus piernas si no presenta lesión ni dolor que lo impida.",
      "Si ya está inconsciente, verifica si responde y si respira normalmente.",
      "Si respira normalmente, mantenla acostada y vigila su respiración. Si está embarazada, colócala de lado cuando sea posible.",
      "Si no responde y no respira normalmente, llama al SAMU (106) e inicia RCP siguiendo las instrucciones del operador.",
      "Cuando recupere la conciencia, no permitas que se levante de inmediato. Solicita evaluación, especialmente si es el primer episodio o no se conoce la causa."
    ],
    avoid:["No la sientes ni la levantes bruscamente.","No le des agua, comida ni medicamentos mientras esté inconsciente o confundida.","No la abofetees ni uses olores fuertes para intentar despertarla."],
    urgent:["No despierta rápidamente, no recupera completamente el habla o el movimiento, o presenta dificultad respiratoria.","Dolor de pecho, palpitaciones, convulsiones o lesión importante.","Desmayo durante el ejercicio o estando acostado."],
    prevention:["Si aparecen señales de desmayo, siéntate o recuéstate de inmediato.","Mantén una hidratación adecuada según las indicaciones de salud y evita permanecer de pie por tiempos prolongados si te produce síntomas.","Consulta con un profesional si los episodios se repiten."],
    note:"El desmayo puede tener distintas causas. No debe asumirse que se debe solamente al calor, hambre o cansancio.",
    sources:[{label:"NHS · Desmayo",url:"https://www.nhs.uk/symptoms/fainting/"}]
  },
  {
    icon:"🧠", name:"Accidente cerebrovascular (ACV)", category:"Emergencia neurológica",
    desc:"El accidente cerebrovascular ocurre cuando se interrumpe el flujo de sangre a una parte del cerebro o se produce una hemorragia. Es una emergencia en la que cada minuto cuenta.",
    signs:["Rostro: un lado de la cara puede caer o verse diferente al sonreír.","Brazos: debilidad o dificultad repentina para levantar uno de los brazos.","Habla: dificultad repentina para hablar o comprender.","También puede aparecer pérdida súbita de visión, equilibrio, coordinación o dolor de cabeza intenso sin causa conocida."],
    actions:[
      "Reconoce las señales con la regla RÁPIDO: Rostro, Brazos, Habla, Tiempo y Obtén ayuda.",
      "Llama inmediatamente al SAMU (106), aunque los síntomas desaparezcan.",
      "Anota la hora en que comenzaron los síntomas o la última vez que la persona estaba bien.",
      "Mantén a la persona en un lugar seguro, acompáñala y vigila su respiración y estado de conciencia.",
      "Sigue las instrucciones del operador y espera la atención profesional."
    ],
    avoid:["No esperes a que los síntomas desaparezcan.","No des alimentos, bebidas ni medicamentos por cuenta propia.","No permitas que la persona conduzca ni la traslades en vehículo particular si puede activarse el SAMU."],
    urgent:["Cualquier aparición repentina de debilidad de un lado del cuerpo, rostro caído o dificultad para hablar requiere ayuda inmediata.","También son señales de alarma la pérdida súbita de visión, equilibrio o un dolor de cabeza muy intenso e inusual."],
    prevention:["Controla la presión arterial, glucosa y colesterol con seguimiento profesional.","Evita el tabaco y realiza actividad física de acuerdo con tu condición de salud.","Sigue los tratamientos indicados y acude a tus controles."],
    note:"Aunque los síntomas desaparezcan en pocos minutos, puede tratarse de un ataque isquémico transitorio y requiere evaluación urgente.",
    sources:[{label:"CDC en español · Signos y síntomas de ACV",url:"https://www.cdc.gov/stroke/es/signs-symptoms/signos-y-sintomas-de-accidente-cerebrovascular.html"},{label:"AHA · Guías de primeros auxilios 2024",url:"https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines"}]
  }
];

let emergencies = [...defaultEmergencies];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
}

function enterSite() {
  const welcome = document.getElementById("welcome");
  if (welcome) welcome.classList.add("hide");
}

function showSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  document.querySelectorAll("main > .section").forEach(section => {
    section.classList.toggle("active", section.id === id);
  });
  target.scrollIntoView({behavior:"smooth",block:"start"});
  const nav = document.getElementById("nav");
  if (nav) nav.classList.remove("nav-open");
  history.replaceState(null,"","#"+id);
}

function toggleMenu() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("nav-open");
}

function renderEmergencies(list = emergencies) {
  const grid = document.getElementById("emergencyGrid");
  const empty = document.getElementById("emptySearch");
  if (!grid || !empty) return;
  grid.innerHTML = "";
  list.forEach(item => {
    const index = emergencies.indexOf(item);
    const card = document.createElement("article");
    card.className = "emergency-card";
    card.tabIndex = 0;
    card.setAttribute("role","button");
    card.setAttribute("aria-label","Consultar "+item.name);
    card.innerHTML = `
      <div class="icon">${escapeHTML(item.icon)}</div>
      <span class="emergency-card-label">${escapeHTML(item.category || "Primeros auxilios")}</span>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.desc)}</p>
      <div class="emergency-card-more">Ver guía completa →</div>`;
    card.addEventListener("click", () => showDetail(index));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDetail(index);
      }
    });
    grid.appendChild(card);
  });
  empty.classList.toggle("hidden",list.length > 0);
}

function filterEmergencies() {
  const input = document.getElementById("search");
  const q = input ? input.value.toLowerCase().trim() : "";
  const filtered = emergencies.filter(item => {
    const searchable = [
      item.name,item.category,item.desc,
      ...(item.signs || []),...(item.actions || item.steps || []),
      ...(item.avoid || []),...(item.urgent || [])
    ].join(" ").toLowerCase();
    return searchable.includes(q);
  });
  renderEmergencies(filtered);
}

function listHTML(items) {
  if (!Array.isArray(items) || !items.length) return "<li>Consulta con un profesional de salud.</li>";
  return items.map(item => "<li>"+escapeHTML(item)+"</li>").join("");
}

function showDetail(index) {
  const item = emergencies[index];
  const panel = document.getElementById("detail");
  if (!item || !panel) return;
  const actions = item.actions || item.steps || [];
  const sources = (item.sources || []).map(source =>
    '<a href="'+escapeHTML(source.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(source.label)+'</a>'
  ).join("");
  panel.innerHTML = `
    <button class="secondary" type="button" onclick="document.getElementById('detail').classList.add('hidden')">← Volver a las emergencias</button>
    <div class="detail-header">
      <div class="detail-title-group">
        <div class="detail-icon">${escapeHTML(item.icon)}</div>
        <div><span class="detail-tag">${escapeHTML(item.category || "Primeros auxilios")}</span><h3>${escapeHTML(item.name)}</h3><p class="detail-summary">${escapeHTML(item.desc)}</p></div>
      </div>
    </div>
    <div class="detail-grid">
      <section class="detail-box"><h4>🔎 ¿Cómo reconocerla?</h4><ul>${listHTML(item.signs || [])}</ul></section>
      <section class="detail-box"><h4>✅ ¿Qué hacer?</h4><ol>${listHTML(actions)}</ol></section>
      <section class="detail-box avoid"><h4>⛔ ¿Qué evitar?</h4><ul>${listHTML(item.avoid || [])}</ul></section>
      <section class="detail-box urgent"><h4>🚨 ¿Cuándo pedir ayuda urgente?</h4><ul>${listHTML(item.urgent || [])}</ul></section>
      <section class="detail-box"><h4>🛡️ Prevención</h4><ul>${listHTML(item.prevention || [])}</ul></section>
    </div>
    <div class="detail-bottom-note"><strong>Importante:</strong> ${escapeHTML(item.note || "Esta información es educativa y no reemplaza la evaluación de un profesional.")} Ante una emergencia médica en Perú, llama al <a href="tel:106"><strong>SAMU 106</strong></a>.</div>
    ${sources ? '<div class="detail-sources"><strong>Fuentes de consulta</strong>'+sources+'</div>' : ""}
  `;
  panel.classList.remove("hidden");
  panel.scrollIntoView({behavior:"smooth",block:"start"});
}

const learningModules = {
  fundamentos: {
    icon:"🧠", number:"MÓDULO 01", title:"Fundamentos de primeros auxilios",
    intro:"Los primeros auxilios son la ayuda inicial que se brinda a una persona que presenta una lesión o un problema de salud repentino. Su finalidad es proteger la vida, evitar que la situación empeore y acompañar a la persona hasta que reciba atención adecuada.",
    blocks:[
      {title:"¿Qué se busca con los primeros auxilios?",items:["Reconocer rápidamente una situación que necesita ayuda.","Proteger a la persona afectada y a quienes la rodean.","Prevenir complicaciones mientras llega la atención profesional.","Brindar apoyo básico de acuerdo con los conocimientos y la capacitación de quien auxilia."]},
      {title:"La secuencia PAS",items:["PROTEGER: comprueba que el lugar sea seguro. Identifica tránsito, electricidad, fuego, humo, sustancias peligrosas u otros riesgos.","AVISAR: pide ayuda y activa el servicio de emergencia cuando corresponda. En una emergencia médica en Perú puedes llamar al SAMU 106.","SOCORRER: brinda la ayuda inicial que conoces, explica lo que harás y respeta la decisión de una persona consciente que puede decidir."]}
    ],
    takeaway:"No es necesario realizar maniobras complejas para ayudar. Mantener la seguridad, reconocer una urgencia y solicitar asistencia a tiempo también son acciones importantes."
  },
  evaluacion: {
    icon:"🔎", number:"MÓDULO 02", title:"Evaluación inicial y seguridad",
    intro:"Antes de actuar, observa la escena y determina si hay peligro. La evaluación inicial permite reconocer problemas que pueden comprometer la vida y decidir cuándo se necesita ayuda profesional inmediata.",
    blocks:[
      {title:"Orden de observación",items:["Mira alrededor antes de acercarte. No ingreses a lugares con fuego, humo, electricidad, derrumbes, tráfico u otros peligros sin personal especializado.","Acércate con calma, identifícate y explica que deseas ayudar. Si la persona está consciente y puede decidir, solicita su consentimiento.","Comprueba si responde cuando le hablas. Observa si respira normalmente y si existe una hemorragia abundante o una lesión evidente.","Si no responde, no respira normalmente, presenta sangrado grave o muestra signos de alarma, activa el servicio de emergencia sin demora."]}
      ,{title:"Información que debes comunicar",items:["Ubicación exacta y referencias para encontrar el lugar.","Qué ocurrió y cuándo sucedió, si lo sabes.","Cuántas personas necesitan ayuda y cómo se encuentran.","Peligros presentes y medidas que ya se realizaron. Mantén la comunicación y sigue las indicaciones del operador."]}
    ],
    takeaway:"No muevas a una persona con posible lesión de cabeza, cuello, columna o fractura, salvo que exista un peligro inmediato o sea necesario para una intervención vital. Evita acciones que puedan empeorar la lesión."
  },
  rcp: {
    icon:"❤️", number:"MÓDULO 03", title:"Paro cardíaco, RCP y DEA",
    intro:"El paro cardíaco es una emergencia en la que la persona pierde la capacidad de responder y no respira normalmente. Reconocerlo y activar la ayuda de inmediato puede ser decisivo.",
    blocks:[
      {title:"Señales que requieren actuar",items:["La persona no responde cuando le hablas o estimulas suavemente.","No respira normalmente o solo presenta jadeos aislados y anormales.","No pierdas tiempo buscando pulso si no tienes formación para realizar esa valoración."]}
      ,{title:"Respuesta inicial",items:["Pide a alguien que llame al SAMU 106 y que consiga un desfibrilador externo automático (DEA), si hay uno disponible.","Activa el altavoz del teléfono para poder seguir las instrucciones del operador mientras ayudas.","Inicia RCP si sabes realizarla o sigue las instrucciones telefónicas del personal de emergencia.","Cuando llegue un DEA, enciéndelo y sigue sus indicaciones de voz. No toques a la persona durante el análisis o la descarga.","Continúa hasta que la persona muestre signos claros de recuperación, llegue el personal de emergencia o no puedas continuar por agotamiento."]}
    ],
    takeaway:"La RCP requiere aprendizaje práctico. Este módulo no sustituye la capacitación presencial ni enseña por sí solo a dominar la técnica. Ante una persona que no responde y no respira normalmente, activa inmediatamente la ayuda de emergencia."
  },
  hemorragias: {
    icon:"🩹", number:"MÓDULO 04", title:"Heridas y hemorragias",
    intro:"Una hemorragia es la pérdida de sangre. Puede ser externa, cuando la sangre sale del cuerpo, o interna, cuando ocurre dentro del organismo y no siempre es visible. El sangrado abundante puede poner en riesgo la vida.",
    blocks:[
      {title:"Medidas iniciales ante sangrado externo",items:["Protege tus manos con guantes o una barrera limpia cuando esté disponible.","Coloca una gasa o tela limpia sobre la herida y aplica presión directa, firme y continua.","Si la tela se empapa, no retires la primera capa; sigue las instrucciones del personal de emergencia.","Si hay un objeto incrustado, no lo retires ni presiones directamente sobre él. Busca ayuda urgente.","Ante sangrado abundante, persistente o acompañado de debilidad, palidez o pérdida de conciencia, llama al SAMU 106."]}
      ,{title:"Qué debes evitar",items:["No coloques café, tierra, ceniza, pasta dental ni sustancias caseras en la herida.","No retires objetos incrustados ni explores la herida con los dedos.","No improvises torniquetes. Su uso y el empaquetamiento de heridas requieren capacitación y una situación que lo justifique."]}
    ],
    takeaway:"La presión directa es una medida inicial importante para el sangrado externo. La hemorragia grave necesita asistencia de emergencia; no demores la llamada para intentar resolverla por tu cuenta."
  },
  quemaduras: {
    icon:"🔥", number:"MÓDULO 05", title:"Quemaduras y lesiones frecuentes",
    intro:"Las quemaduras pueden producirse por calor, líquidos calientes, electricidad o sustancias químicas. La gravedad depende de la profundidad, extensión, zona afectada y condición de la persona.",
    blocks:[
      {title:"Cuidados iniciales ante una quemadura térmica",items:["Aleja a la persona de la fuente de calor sin exponerte al peligro.","Enfría la zona con agua corriente fresca durante 20 minutos. No uses hielo.","Retira anillos, relojes o prendas ajustadas cercanas antes de que aparezca hinchazón, pero no arranques ropa adherida a la piel.","Después del enfriamiento, cubre la zona de forma holgada con un apósito limpio y no adherente mientras se busca valoración cuando corresponda.","Solicita evaluación profesional si la quemadura es extensa, profunda o afecta rostro, manos, pies o genitales."]}
      ,{title:"Señales de alarma y errores frecuentes",items:["Dificultad para respirar, humo inhalado, quemaduras en la cara o signos de compromiso general requieren ayuda urgente.","No revientes ampollas ni apliques pasta dental, mantequilla, aceite, alcohol o hielo directamente.","Las quemaduras eléctricas y químicas requieren valoración profesional. No toques a una persona que sigue en contacto con una fuente eléctrica; primero debe cortarse la energía de forma segura."]}
    ],
    takeaway:"Para una quemadura térmica, el agua corriente fresca durante 20 minutos es una medida inicial recomendada por el MINSA. La valoración profesional es importante cuando la lesión es extensa, profunda o afecta zonas delicadas."
  },
  otras: {
    icon:"🛡️", number:"MÓDULO 06", title:"Atragantamiento, convulsiones y prevención",
    intro:"Algunas emergencias requieren reconocer rápidamente las señales y evitar maniobras que puedan causar daño. También es importante preparar el hogar y mantener medidas básicas de higiene.",
    blocks:[
      {title:"Atragantamiento",items:["Si la persona puede hablar, respirar y toser con fuerza, anímala a seguir tosiendo y vigila su estado.","Si no puede hablar, respirar o toser eficazmente, pide ayuda urgente y sigue las indicaciones del operador y las técnicas aprendidas en un curso práctico.","No le des agua ni introduzcas los dedos a ciegas en la boca. Las maniobras para desobstruir dependen de la edad y la condición de la persona."]}
      ,{title:"Convulsiones",items:["Retira objetos cercanos con los que pueda golpearse y protege su cabeza con algo suave, si es posible.","No sujetes con fuerza sus movimientos y nunca introduzcas objetos, alimentos o dedos en su boca.","Cuando terminen los movimientos, comprueba su respiración y colócala de lado si respira normalmente y no hay una lesión que lo impida.","Llama al 106 si es la primera convulsión, dura más de cinco minutos, se repite, ocurre en el agua, hay lesión o dificultad respiratoria, la persona está embarazada o no recupera su estado habitual."]}
      ,{title:"Caídas, fracturas y prevención",items:["Ante una posible fractura, evita mover o enderezar la zona. Mantén a la persona en una posición cómoda y solicita evaluación.","Mantén pasillos iluminados y libres de cables, objetos sueltos y superficies resbaladizas.","Ten a mano teléfonos de emergencia, dirección del domicilio y datos relevantes que puedan facilitar la comunicación.","Lávate las manos con agua y jabón durante al menos 20 segundos. Usa guantes u otra protección cuando exista riesgo de contacto con sangre o fluidos."]}
    ],
    takeaway:"En las convulsiones, atragantamientos y posibles fracturas, evita maniobras improvisadas. Proteger, pedir ayuda y actuar dentro de tu formación es más seguro que intentar procedimientos que no dominas."
  }
};

const completedLearningModules = new Set();

function learningList(items) {
  return "<ul>" + (items || []).map(function(item){ return "<li>" + escapeHTML(item) + "</li>"; }).join("") + "</ul>";
}

function renderLearningProgress() {
  var total = Object.keys(learningModules).length;
  var done = completedLearningModules.size;
  var percent = Math.round((done / total) * 100);
  var text = document.getElementById("learningProgressText");
  var percentText = document.getElementById("learningProgressPercent");
  var fill = document.getElementById("learningProgressFill");
  if (text) text.textContent = done + " de " + total + " módulos estudiados";
  if (percentText) percentText.textContent = percent + "%";
  if (fill) fill.style.width = percent + "%";
  document.querySelectorAll("#learningModulesGrid .learning-module").forEach(function(button) {
    var key = button.getAttribute("data-learning");
    button.classList.toggle("completed", completedLearningModules.has(key));
  });
}

function openLearning(type) {
  var panel = document.getElementById("learningPanel");
  var item = learningModules[type];
  if (!panel || !item) return;
  var sections = item.blocks.map(function(block) {
    return '<section class="learning-content-box"><h4>' + escapeHTML(block.title) + '</h4>' + learningList(block.items) + '</section>';
  }).join("");
  panel.innerHTML =
    '<div class="learning-panel-head"><div class="learning-panel-icon">' + escapeHTML(item.icon) + '</div><div><span class="learning-kicker">' + escapeHTML(item.number) + '</span><h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.intro) + '</p></div></div>' +
    '<div class="learning-panel-body">' + sections + '</div>' +
    '<div class="learning-module-takeaway"><strong>Para recordar:</strong> ' + escapeHTML(item.takeaway) + '</div>' +
    '<div class="learning-panel-actions"><button type="button" class="learning-done" id="markLearningDone">' + (completedLearningModules.has(type) ? '✓ Módulo estudiado' : 'Marcar como estudiado') + '</button><button type="button" class="learning-close" id="closeLearningPanel">Cerrar módulo</button></div>';
  panel.classList.remove("hidden");
  document.querySelectorAll("#learningModulesGrid .learning-module").forEach(function(button) {
    button.classList.toggle("active", button.getAttribute("data-learning") === type);
  });
  var markButton = document.getElementById("markLearningDone");
  if (markButton) markButton.addEventListener("click",function(){
    completedLearningModules.add(type);
    renderLearningProgress();
    markButton.textContent = "✓ Módulo estudiado";
  });
  var closeButton = document.getElementById("closeLearningPanel");
  if (closeButton) closeButton.addEventListener("click",function(){
    panel.classList.add("hidden");
    document.querySelectorAll("#learningModulesGrid .learning-module").forEach(function(button){ button.classList.remove("active"); });
  });
  renderLearningProgress();
  panel.scrollIntoView({behavior:"smooth",block:"start"});
}

function initializeLearningQuiz() {
  var form = document.getElementById("learningQuizForm");
  var result = document.getElementById("learningQuizResult");
  var reset = document.getElementById("resetLearningQuiz");
  if (!form || !result || form.dataset.initialized === "true") return;
  form.dataset.initialized = "true";
  var answers = {lq1:"b",lq2:"a",lq3:"c",lq4:"b",lq5:"a",lq6:"c",lq7:"b",lq8:"a"};
  var explanations = [
    "Primero observa si hay riesgos para ti, la persona afectada y los demás. No te conviertas en otra víctima.",
    "PAS significa Proteger, Avisar y Socorrer. Es una forma sencilla de recordar el orden general de actuación.",
    "La falta de respuesta y la respiración anormal requieren activar el SAMU, solicitar un DEA e iniciar la respuesta indicada por el operador y la capacitación recibida.",
    "La presión directa con una gasa o tela limpia ayuda a controlar el sangrado externo. No retires objetos incrustados.",
    "El MINSA recomienda enfriar las quemaduras térmicas con agua fresca durante 20 minutos. No se debe aplicar hielo directamente.",
    "No sujetes los movimientos ni introduzcas objetos en la boca durante una convulsión. Protege a la persona de golpes y pide ayuda si hay señales de alarma.",
    "No intentes enderezar una fractura. Mantén la zona quieta y busca valoración profesional.",
    "La higiene de manos y el equipo de protección adecuado reducen la exposición a sangre y otros fluidos."
  ];
  form.addEventListener("submit",function(event){
    event.preventDefault();
    var data = new FormData(form);
    var keys = Object.keys(answers);
    var unanswered = keys.filter(function(key){return !data.get(key);});
    if (unanswered.length) {
      result.className = "learning-quiz-result";
      result.innerHTML = "<strong>Completa las preguntas que faltan.</strong><p>Responde las ocho preguntas para conocer tu resultado.</p>";
      result.scrollIntoView({behavior:"smooth",block:"nearest"});
      return;
    }
    var score = 0;
    var rows = "";
    keys.forEach(function(key,index){
      var correct = data.get(key) === answers[key];
      if (correct) score++;
      rows += '<li class="' + (correct ? "answer-correct" : "answer-review") + '"><strong>Pregunta ' + (index+1) + ': ' + (correct ? "Correcta" : "Para repasar") + '.</strong> ' + explanations[index] + '</li>';
    });
    var message = score === 8 ? "¡Excelente! Has respondido correctamente todas las preguntas." :
      score >= 6 ? "¡Buen trabajo! Revisa las explicaciones de los puntos que puedes reforzar." :
      score >= 4 ? "Vas avanzando. Repasa los módulos y vuelve a intentarlo." :
      "Te recomendamos volver a estudiar los módulos antes de repetir el cuestionario.";
    result.className = "learning-quiz-result";
    result.innerHTML = "<strong>Tu resultado: " + score + " de 8 respuestas correctas.</strong><p>" + message + "</p><ul>" + rows + "</ul>";
    result.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  if (reset) reset.addEventListener("click",function(){
    form.reset();
    result.className = "learning-quiz-result hidden";
    result.innerHTML = "";
  });
}

const addForm = document.getElementById("addForm");
if (addForm) {
  addForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const icon = document.getElementById("icon").value.trim() || "🚑";
    const description = document.getElementById("description").value.trim();
    const steps = document.getElementById("steps").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
    if (!name || !description || !steps.length) return;
    emergencies.push({name,icon,desc:description,steps,category:"Contenido agregado"});
    renderEmergencies();
    addForm.reset();
    document.getElementById("icon").value = "🚑";
    alert("La ficha se agregó a la lista durante esta sesión. Para conservarla permanentemente debe guardarse en el repositorio o en una base de datos.");
    showSection("emergencias");
  });
}

renderEmergencies();

/* ===== AUXISALUD: INTERACTIVIDAD VISUAL DE EMERGENCIAS ===== */
var activeEmergencyCategory = "Todas";

function renderEmergencyFilters() {
  var container = document.getElementById("emergencyFilters");
  if (!container) return;
  var categories = ["Todas"];
  emergencies.forEach(function(item) {
    var category = item.category || "Primeros auxilios";
    if (!categories.includes(category)) categories.push(category);
  });
  container.innerHTML = "";
  categories.forEach(function(category) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "emergency-filter" + (category === activeEmergencyCategory ? " active" : "");
    button.textContent = category;
    button.setAttribute("aria-pressed", category === activeEmergencyCategory ? "true" : "false");
    button.addEventListener("click", function() {
      activeEmergencyCategory = category;
      renderEmergencyFilters();
      filterEmergencies();
    });
    container.appendChild(button);
  });
}

function renderEmergencies(list) {
  var grid = document.getElementById("emergencyGrid");
  var empty = document.getElementById("emptySearch");
  var counter = document.getElementById("emergencyCount");
  if (!grid || !empty) return;
  var items = Array.isArray(list) ? list : emergencies;
  grid.innerHTML = "";
  items.forEach(function(item) {
    var index = emergencies.indexOf(item);
    var card = document.createElement("article");
    card.className = "emergency-card";
    card.tabIndex = 0;
    card.setAttribute("role","button");
    card.setAttribute("aria-label","Consultar " + item.name);
    card.innerHTML =
      '<div class="icon">' + escapeHTML(item.icon) + '</div>' +
      '<span class="emergency-card-label">' + escapeHTML(item.category || "Primeros auxilios") + '</span>' +
      '<h3>' + escapeHTML(item.name) + '</h3>' +
      '<p>' + escapeHTML(item.desc) + '</p>' +
      '<div class="emergency-card-more">Ver guía completa →</div>';
    card.addEventListener("click", function(){ showDetail(index); });
    card.addEventListener("keydown", function(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDetail(index);
      }
    });
    grid.appendChild(card);
  });
  empty.classList.toggle("hidden", items.length > 0);
  if (counter) counter.textContent = items.length + (items.length === 1 ? " tema disponible" : " temas disponibles");
}

function filterEmergencies() {
  var input = document.getElementById("search");
  var query = input ? input.value.toLowerCase().trim() : "";
  var filtered = emergencies.filter(function(item) {
    var categoryMatch = activeEmergencyCategory === "Todas" || (item.category || "Primeros auxilios") === activeEmergencyCategory;
    var searchText = [
      item.name,item.category,item.desc
    ].concat(item.signs || [],item.actions || [],item.avoid || [],item.urgent || [],item.prevention || []).join(" ").toLowerCase();
    return categoryMatch && searchText.includes(query);
  });
  renderEmergencies(filtered);
}

function clearEmergencySearch() {
  var input = document.getElementById("search");
  if (input) input.value = "";
  activeEmergencyCategory = "Todas";
  renderEmergencyFilters();
  filterEmergencies();
}

function detailAccordion(title, icon, content, open, extraClass) {
  return '<details class="detail-box ' + (extraClass || "") + '" ' + (open ? "open" : "") + '>' +
    '<summary><span class="detail-summary-title">' + icon + ' ' + title + '</span><span>Ver contenido</span></summary>' +
    content + '</details>';
}

function showDetail(index) {
  var item = emergencies[index];
  var panel = document.getElementById("detail");
  if (!item || !panel) return;
  var sources = (item.sources || []).map(function(source) {
    return '<a href="' + escapeHTML(source.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(source.label) + '</a>';
  }).join("");
  var boxes = [
    detailAccordion("¿Cómo reconocerla?","🔎","<ul>" + listHTML(item.signs || []) + "</ul>",false,""),
    detailAccordion("¿Qué hacer?","✅","<ol>" + listHTML(item.actions || item.steps || []) + "</ol>",true,""),
    detailAccordion("¿Qué evitar?","⛔","<ul>" + listHTML(item.avoid || []) + "</ul>",false,"avoid"),
    detailAccordion("¿Cuándo pedir ayuda urgente?","🚨","<ul>" + listHTML(item.urgent || []) + "</ul>",true,"urgent"),
    detailAccordion("Prevención","🛡️","<ul>" + listHTML(item.prevention || []) + "</ul>",false,"")
  ].join("");
  panel.innerHTML =
    '<button class="secondary" type="button" onclick="document.getElementById(\'detail\').classList.add(\'hidden\')">← Volver a las emergencias</button>' +
    '<div class="detail-header"><div class="detail-title-group"><div class="detail-icon">' + escapeHTML(item.icon) + '</div><div><span class="detail-tag">' + escapeHTML(item.category || "Primeros auxilios") + '</span><h3>' + escapeHTML(item.name) + '</h3><p class="detail-summary">' + escapeHTML(item.desc) + '</p></div></div></div>' +
    '<div class="detail-grid">' + boxes + '</div>' +
    '<div class="detail-bottom-note"><strong>Importante:</strong> ' + escapeHTML(item.note || "Esta información es educativa y no reemplaza la evaluación de un profesional.") + ' Ante una emergencia médica en Perú, llama al <a href="tel:106"><strong>SAMU 106</strong></a>.</div>' +
    (sources ? '<div class="detail-sources"><strong>Fuentes de consulta</strong>' + sources + '</div>' : "");
  panel.classList.remove("hidden");
  panel.scrollIntoView({behavior:"smooth",block:"start"});
}

function initializeEmergencyQuiz() {
  var form = document.getElementById("emergencyQuizForm");
  var result = document.getElementById("emergencyQuizResult");
  var reset = document.getElementById("resetEmergencyQuiz");
  if (!form || !result) return;
  var answers = {q1:"b",q2:"a",q3:"c",q4:"b"};
  var explanations = [
    "Ante la falta de respuesta y respiración normal, activa el 106, solicita un DEA e inicia RCP siguiendo las instrucciones del operador.",
    "La presión directa ayuda a controlar una hemorragia externa. No retires objetos incrustados.",
    "Una quemadura térmica se enfría con agua corriente fresca durante 20 minutos. No uses hielo ni remedios caseros.",
    "En adultos con obstrucción grave, pide ayuda y sigue la secuencia de primeros auxilios indicada en la guía."
  ];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    var unanswered = Object.keys(answers).filter(function(key){ return !data.get(key); });
    if (unanswered.length) {
      result.className = "quiz-result incomplete";
      result.innerHTML = "<strong>Te faltan respuestas.</strong><p>Responde las cuatro preguntas para revisar tu resultado.</p>";
      return;
    }
    var score = 0;
    var feedback = "";
    Object.keys(answers).forEach(function(key,index) {
      var correct = data.get(key) === answers[key];
      if (correct) score++;
      feedback += "<li><strong>Pregunta " + (index+1) + ": " + (correct ? "Correcta" : "Revisa") + ".</strong> " + explanations[index] + "</li>";
    });
    result.className = "quiz-result";
    result.innerHTML = "<strong>Obtuviste " + score + " de 4 respuestas correctas.</strong><p>" +
      (score === 4 ? "¡Excelente! Respondiste correctamente todas las preguntas." : "Revisa las explicaciones y vuelve a intentarlo para reforzar lo aprendido.") +
      "</p><ul>" + feedback + "</ul>";
    result.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  if (reset) reset.addEventListener("click",function(){
    form.reset();
    result.className = "quiz-result hidden";
    result.innerHTML = "";
  });
}
renderEmergencyFilters();
filterEmergencies();
initializeEmergencyQuiz();
renderLearningProgress();
initializeLearningQuiz();
