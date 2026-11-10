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

function openLearning(type) {
  const panel = document.getElementById("learningPanel");
  if (!panel) return;
  const content = {
    conceptos:["🧠 Conceptos básicos","Revisa las fichas de emergencias para conocer definiciones, señales de alerta, acciones iniciales y medidas de prevención."],
    pasos:["📝 Pasos básicos","Cada ficha organiza la respuesta inicial en pasos sencillos. Practica las técnicas mediante cursos presenciales de primeros auxilios."],
    visual:["🖼️ Material visual","En esta sección se incorporarán infografías, imágenes y esquemas para reforzar el aprendizaje de primeros auxilios."],
    quiz:["❓ Quiz educativo","Próximamente se incorporarán preguntas para reforzar lo aprendido sobre las emergencias y sus medidas iniciales."]
  }[type];
  if (!content) return;
  panel.innerHTML = "<h3>"+escapeHTML(content[0])+"</h3><p>"+escapeHTML(content[1])+"</p>";
  panel.classList.remove("hidden");
  panel.scrollIntoView({behavior:"smooth",block:"center"});
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
