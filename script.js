// BMW Uzbekistan demo — barcha interaktiv funksiyalar
const cars = [
  {id:1,name:"BMW 3 Series",type:"Sedan",year:2025,engine:"2.0L Turbo",hp:255,speed:"250 km/soat",accel:"5.8 soniya",price:45000,priceUzs:585000000,tag:"Sport sedan",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/3-series.html",description:"Kundalik hayot va sportona haydash zavqini uyg‘unlashtirgan dinamik sedan."},
  {id:2,name:"BMW 5 Series",type:"Sedan",year:2025,engine:"2.0L Turbo",hp:255,speed:"250 km/soat",accel:"6.0 soniya",price:60000,priceUzs:780000000,tag:"Biznes sedan",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/5-series.html",description:"Biznes klass qulayligi, ilg‘or texnologiyalar va o‘ziga xos BMW xarakteri."},
  {id:3,name:"BMW 7 Series",type:"Sedan",year:2025,engine:"3.0L Turbo",hp:375,speed:"250 km/soat",accel:"5.4 soniya",price:100000,priceUzs:1300000000,tag:"Hashamat",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/7-series.html",description:"Hashamat, innovatsiya va yuqori darajadagi qulaylikni birlashtirgan flagman."},
  {id:4,name:"BMW M3",type:"M",year:2025,engine:"3.0L TwinPower Turbo",hp:473,speed:"250 km/soat",accel:"4.1 soniya",price:76000,priceUzs:988000000,tag:"M Performance",image:"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m3-sedan/2024/navigation/bmw-m3-sedan-flyout.png",url:"https://www.bmw-m.com/en/all-models/overview-m.html",description:"Motorsport ruhidagi kuch, aniqlik va kundalik foydalanish imkoniyati."},
  {id:5,name:"BMW M4",type:"Coupe",year:2025,engine:"3.0L TwinPower Turbo",hp:503,speed:"290 km/soat",accel:"3.9 soniya",price:80000,priceUzs:1040000000,tag:"M Coupe",image:"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m4-coupe/2024/navigation/bmw-m4-coupe-flyout.png",url:"https://www.bmw-m.com/en/all-models/overview-m.html",description:"Ikki eshikli sport kuzov, kuchli motor va trekdan ilhomlangan xarakter."},
  {id:6,name:"BMW M5",type:"M",year:2025,engine:"V8 Plug-in Hybrid",hp:717,speed:"305 km/soat",accel:"3.5 soniya",price:120000,priceUzs:1560000000,tag:"M High Performance",image:"https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m5-sedan/2024/navigation/bmw-m5-sedan-flyout.png",url:"https://www.bmw-m.com/en/all-models/overview-m.html",description:"Yuqori unumdorlik va zamonaviy gibrid texnologiya uyg‘unligi."},
  {id:7,name:"BMW X3",type:"SUV",year:2025,engine:"2.0L Turbo",hp:255,speed:"210 km/soat",accel:"6.3 soniya",price:50000,priceUzs:650000000,tag:"Premium SAV",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/x-series/X3.html",description:"Ko‘p qirrali, qulay va faol turmush tarzi uchun yaratilgan SAV."},
  {id:8,name:"BMW X5",type:"SUV",year:2025,engine:"3.0L Turbo",hp:375,speed:"243 km/soat",accel:"5.5 soniya",price:75000,priceUzs:975000000,tag:"Luxury SAV",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/x-series/X5.html",description:"Kuch, hashamat va kenglikni birlashtirgan premium BMW SAV."},
  {id:9,name:"BMW X6",type:"SUV",year:2025,engine:"3.0L Turbo",hp:375,speed:"250 km/soat",accel:"5.5 soniya",price:85000,priceUzs:1105000000,tag:"Sports Activity Coupe",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/x-series/X6.html",description:"Kupe silueti va SUV imkoniyatlarini o‘zida jamlagan dadil dizayn."},
  {id:10,name:"BMW X7",type:"SUV",year:2025,engine:"3.0L Turbo",hp:375,speed:"250 km/soat",accel:"5.8 soniya",price:95000,priceUzs:1235000000,tag:"Full-size Luxury SAV",image:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg",url:"https://www.bmw.com/en/all-models/x-series/X7.html",description:"Uch qatorli o‘rindiqlar, keng makon va flagman darajasidagi qulaylik."}
];

const $ = (s,root=document) => root.querySelector(s);
const money = n => "$" + n.toLocaleString("en-US");
const uzs = n => n.toLocaleString("uz-UZ") + " so‘m";
const imageFallback = "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/freude-01-stage-hd.jpg";
let slideIndex = 0, autoPlay, favorites = JSON.parse(localStorage.getItem("bmwFavorites") || "[]"), showFavorites = false;

function carImage(car, extraClass="") {
  return `<img class="${extraClass}" src="${car.image}" alt="${car.name} avtomobili" loading="lazy" onerror="this.onerror=null;this.src='${imageFallback}'">`;
}
function specs(car) {
  return `<div class="spec-grid"><div><span>Quvvat</span><b>${car.hp} hp</b></div><div><span>Motor</span><b>${car.engine}</b></div><div><span>0–100 km/soat</span><b>${car.accel}</b></div></div>`;
}
function renderCarousel() {
  const track=$("#carouselTrack"), dots=$("#carouselDots");
  const visible=[0,1,2].map(offset=>cars[(slideIndex+offset)%cars.length]);
  track.innerHTML=visible.map((car,i)=>`<article class="slide-card">
    <div class="slide-image">${carImage(car)}</div><div class="slide-info">
      <div class="slide-top"><span>${car.tag}</span><span>${String((slideIndex+i)%10+1).padStart(2,"0")} / 10</span></div>
      <h3>${car.name}</h3>${specs(car)}
      <div class="slide-price"><strong>${money(car.price)} dan</strong><button data-details="${car.id}">Batafsil ↗</button></div>
    </div></article>`).join("");
  dots.innerHTML=cars.map((c,i)=>`<button class="${i===slideIndex?"active":""}" data-slide="${i}" aria-label="${i+1}-slayd"></button>`).join("");
  $("#carouselProgress").style.width=((slideIndex+1)*10)+"%";
}
function moveSlide(n){slideIndex=(slideIndex+n+cars.length)%cars.length;renderCarousel();restartAutoplay();}
function startAutoplay(){autoPlay=setInterval(()=>{slideIndex=(slideIndex+1)%cars.length;renderCarousel();},5000);}
function restartAutoplay(){clearInterval(autoPlay);startAutoplay();}
function renderCatalog(){
  const q=$("#searchInput").value.trim().toLowerCase(), type=$("#typeFilter").value, sort=$("#sortSelect").value;
  let list=cars.filter(c=>(c.name.toLowerCase().includes(q)||c.type.toLowerCase().includes(q))&&(type==="all"||c.type===type)&&(!showFavorites||favorites.includes(c.id)));
  if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price);
  $("#carGrid").innerHTML=list.map(car=>`<article class="car-card">
    <div class="car-card-image">${carImage(car)}<button class="heart-btn ${favorites.includes(car.id)?"active":""}" data-favorite="${car.id}" aria-label="Sevimlilarga qo‘shish">${favorites.includes(car.id)?"♥":"♡"}</button></div>
    <div class="car-card-body"><div class="car-card-top"><span>${car.type} · ${car.year}</span><span>${car.tag}</span></div><h3>${car.name}</h3>
    <div class="car-meta"><span>${car.hp} hp</span><span>${car.engine}</span><span>${car.accel}</span></div>
    <div class="car-card-bottom"><strong>${money(car.price)} dan</strong><button data-details="${car.id}">Batafsil ↗</button></div></div></article>`).join("");
  $("#emptyState").classList.toggle("hidden",list.length>0);
  $("#favoriteCount").textContent=favorites.length;
}
function showDetails(id){
  const car=cars.find(c=>c.id===Number(id)); if(!car)return;
  $("#dialogContent").innerHTML=`${carImage(car,"dialog-image")}<div class="dialog-body"><span class="eyebrow">${car.tag} · ${car.year}</span><h2>${car.name}</h2><p>${car.description}</p><div class="dialog-price">${money(car.price)} dan <small style="font-size:11px;color:#9aa4b1"> / ${uzs(car.priceUzs)} dan</small></div><div class="dialog-specs"><div><small>Dvigatel quvvati</small><b>${car.hp} hp</b></div><div><small>Maksimal tezlik</small><b>${car.speed}</b></div><div><small>0–100 km/soat</small><b>${car.accel}</b></div><div><small>Dvigatel</small><b>${car.engine}</b></div><div><small>Kuzov</small><b>${car.type}</b></div><div><small>Yil</small><b>${car.year}</b></div></div><a class="btn btn-blue" href="#test-drive" onclick="document.getElementById('detailsDialog').close();document.getElementById('testModel').value='${car.name}'">Test-drayvga yozilish →</a> <a class="text-link" href="${car.url}" target="_blank" rel="noopener">BMW rasmiy sahifasi ↗</a></div>`;
  $("#detailsDialog").showModal();
}
function toast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800);}

$("#carouselPrev").addEventListener("click",()=>moveSlide(-1));
$("#carouselNext").addEventListener("click",()=>moveSlide(1));
$("#carouselDots").addEventListener("click",e=>{const b=e.target.closest("[data-slide]");if(b){slideIndex=Number(b.dataset.slide);renderCarousel();restartAutoplay();}});
$("#carouselTrack").addEventListener("click",e=>{const b=e.target.closest("[data-details]");if(b)showDetails(b.dataset.details);});
["searchInput","typeFilter","sortSelect"].forEach(id=>$("#"+id).addEventListener(id==="searchInput"?"input":"change",renderCatalog));
$("#carGrid").addEventListener("click",e=>{
  const detail=e.target.closest("[data-details]"), fav=e.target.closest("[data-favorite]");
  if(detail)showDetails(detail.dataset.details);
  if(fav){const id=Number(fav.dataset.favorite);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("bmwFavorites",JSON.stringify(favorites));renderCatalog();}
});
$("#favoritesFilter").addEventListener("click",()=>{showFavorites=!showFavorites;$("#favoritesFilter").classList.toggle("active",showFavorites);renderCatalog();});
$("#dialogClose").addEventListener("click",()=>$("#detailsDialog").close());
$("#detailsDialog").addEventListener("click",e=>{if(e.target===$("#detailsDialog"))$("#detailsDialog").close();});

const nav=$("#mainNav"), menu=$("#menuToggle");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");menu.setAttribute("aria-expanded","false");}});
document.addEventListener("visibilitychange",()=>{if(document.hidden)clearInterval(autoPlay);else startAutoplay();});

const modelSelect=$("#testModel");
modelSelect.innerHTML='<option value="">Modelni tanlang</option>'+cars.map(c=>`<option>${c.name}</option>`).join("");
const dateInput=$("#testDate");const today=new Date();dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
$("#testForm").addEventListener("submit",e=>{
  e.preventDefault();const form=e.currentTarget;
  if(!form.reportValidity())return;
  const phone=form.elements.phone.value.replace(/[^\d+]/g,"");
  if(phone.replace(/\D/g,"").length<9){$("#formMessage").textContent="Telefon raqamini to‘g‘ri kiriting.";return;}
  const data=Object.fromEntries(new FormData(form).entries());
  $("#formMessage").textContent=`Rahmat, ${data.name}! ${data.model} uchun arizangiz demo tarzida qabul qilindi.`;
  form.reset();dateInput.min=new Date().toISOString().split("T")[0];
});
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;$("#contactMessage").textContent="Xabaringiz demo tarzida qabul qilindi. Rahmat!";form.reset();});
$("#year").textContent=new Date().getFullYear();

renderCarousel();renderCatalog();startAutoplay();
