const defaultEmergencies=[
{icon:"🫀",name:"RCP",desc:"Información educativa sobre reanimación cardiopulmonar.",steps:["Reconocer la situación y solicitar ayuda profesional.","Evaluar la respuesta de la persona y seguir las indicaciones de los servicios de emergencia.","Aplicar las maniobras de reanimación según la capacitación recibida."]},
{icon:"🩸",name:"Hemorragias",desc:"Orientación básica ante situaciones de sangrado.",steps:["Mantener la calma y valorar la situación.","Aplicar medidas básicas de control del sangrado según la capacitación recibida.","Buscar atención profesional cuando corresponda."]},
{icon:"🦴",name:"Fracturas",desc:"Información inicial ante posibles lesiones óseas.",steps:["Evitar movimientos innecesarios de la zona afectada.","Mantener a la persona en una posición segura.","Solicitar evaluación profesional."]},
{icon:"🤕",name:"Caídas",desc:"Recomendaciones iniciales ante una caída.",steps:["Valorar el estado de la persona.","Evitar levantarla bruscamente si existe posibilidad de lesión.","Solicitar ayuda profesional si presenta signos de gravedad."]},
{icon:"🔥",name:"Quemaduras",desc:"Orientación educativa ante quemaduras.",steps:["Alejar a la persona de la fuente de calor si es seguro hacerlo.","Valorar la lesión.","Buscar atención profesional según la gravedad."]},
{icon:"🚑",name:"Emergencias comunes",desc:"Categoría preparada para incorporar nuevas situaciones.",steps:["Identificar la situación.","Mantener la calma y proteger a la persona.","Buscar atención profesional."]}
];
let emergencies=[...defaultEmergencies];

function enterSite(){
  const welcome=document.getElementById("welcome");
  if(welcome)welcome.classList.add("hide");
}
function showSection(id){
  const target=document.getElementById(id);
  if(!target)return;
  target.scrollIntoView({behavior:"smooth",block:"start"});
  const nav=document.getElementById("nav");
  if(nav)nav.classList.remove("nav-open");
  history.replaceState(null,"","#"+id);
}
function toggleMenu(){document.getElementById("nav").classList.toggle("nav-open")}
function renderEmergencies(list=emergencies){const grid=document.getElementById("emergencyGrid");grid.innerHTML="";list.forEach(e=>{const i=emergencies.indexOf(e),card=document.createElement("article");card.className="emergency-card";card.innerHTML=`<div class="icon">${e.icon}</div><h3>${e.name}</h3><p>${e.desc}</p>`;card.onclick=()=>showDetail(i);grid.appendChild(card)});document.getElementById("emptySearch").classList.toggle("hidden",list.length>0)}
function filterEmergencies(){const q=document.getElementById("search").value.toLowerCase().trim();renderEmergencies(emergencies.filter(e=>(e.name+" "+e.desc).toLowerCase().includes(q)))}
function showDetail(i){const e=emergencies[i],d=document.getElementById("detail");d.classList.remove("hidden");d.innerHTML=`<button class="secondary" onclick="document.getElementById('detail').classList.add('hidden')">← Volver</button><h3>${e.icon} ${e.name}</h3><p>${e.desc}</p><h4>Pasos básicos</h4><ol>${e.steps.map(s=>`<li>${s}</li>`).join("")}</ol><div class="notice"><strong>Nota:</strong> El contenido debe ser revisado y validado por profesionales antes de utilizarse como material educativo definitivo.</div>`;d.scrollIntoView({behavior:"smooth",block:"start"})}
function openLearning(type){const p=document.getElementById("learningPanel");p.classList.remove("hidden");const c={conceptos:["🧠 Conceptos básicos","Aquí incorporaremos definiciones y conceptos del proyecto a medida que agregues información a tu documento."],pasos:["📝 Pasos básicos","Esta sección podrá reunir procedimientos, imágenes y recomendaciones revisadas por el equipo del proyecto."],visual:["🖼️ Material visual","Espacio preparado para añadir infografías, imágenes, esquemas y otros recursos."],quiz:["❓ Quiz educativo","Podemos convertir esta sección en un cuestionario interactivo con preguntas, alternativas, puntuación y retroalimentación."]}[type];p.innerHTML=`<h3>${c[0]}</h3><p>${c[1]}</p>`;p.scrollIntoView({behavior:"smooth",block:"center"})}
document.getElementById("addForm").addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("name").value.trim(),icon=document.getElementById("icon").value.trim()||"🚑",description=document.getElementById("description").value.trim(),steps=document.getElementById("steps").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);emergencies.push({name,icon,desc:description,steps});renderEmergencies();e.target.reset();document.getElementById("icon").value="🚑";alert("La nueva sección fue agregada durante esta sesión.");showSection("emergencias")});
renderEmergencies();
