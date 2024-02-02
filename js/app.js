//Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const menuUl = document.querySelector(".menu ul");

menuToggle.addEventListener("click", () => {
    menuUl.classList.toggle("show");
});


// Navbarin Scrool edilince Maviye donmesi
window.addEventListener("scroll", () => {
    let navbar = document.querySelector("#nav-blue");

    // Sayfanın scroll pozisyonunu kontrol et
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#355592"; 
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});


// //Our Classes Training Style 
document.addEventListener("DOMContentLoaded",  () => {
    // Span elementlerini seçin
    let yogaSpan = document.getElementById("yoga");
    let groupSpan = document.getElementById("group");
    let soloSpan = document.getElementById("solo");
    let stretchingSpan = document.getElementById("streching");

    // İçerik gösterme fonksiyonu
    function showContent(content) {
        // Tüm içerikleri gizle
        document.querySelector(".section-our-content").innerHTML = "";

        // Belirli içeriği göster
        document.querySelector(".section-our-content").appendChild(content);
    }


    // Active class ekleme fonksiyonu
    function setActive(span) {
        // Tüm span elementlerinden active class`ı kaldır
        yogaSpan.classList.remove("active-training");
        groupSpan.classList.remove("active-training");
        soloSpan.classList.remove("active-training");
        stretchingSpan.classList.remove("active-training");

        // Tüm span elementlerinden üçgeni içeren div`i kaldır
        yogaSpan.innerHTML = yogaSpan.innerHTML.replace(`<div class="triangle-training-choose"></div>`, ``);
        groupSpan.innerHTML = groupSpan.innerHTML.replace(`<div class="triangle-training-choose"></div>`, ``);
        soloSpan.innerHTML = soloSpan.innerHTML.replace(`<div class="triangle-training-choose"></div>`, ``);
        stretchingSpan.innerHTML = stretchingSpan.innerHTML.replace(`<div class="triangle-training-choose"></div>`, ``);

        // Belirli span elementine active class`ı ekle
        span.classList.add("active-training");
        // Seçilen span içine üçgen ekleyin
        span.innerHTML += `<div class="triangle-training-choose"></div>`;
    }

    // Yoga Content
    function createYogaContent() {
        let content = document.createElement(`div`);
        content.className = `section-our-content`;

        let paragraph = document.createElement(`div`);
        paragraph.className = `content-paragraph`;

        let top = document.createElement(`div`);
        top.className = `paragraph-top`;

        let h5Top = document.createElement(`h5`);
        h5Top.textContent = `Why are your ${"Yoga"}?`;

        let pTop = document.createElement(`p`);
        pTop.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste`;

        top.appendChild(h5Top);
        top.appendChild(pTop);

        let bottom = document.createElement(`div`);
        bottom.className = `paragraph-bottom`;

        let h5Bottom = document.createElement(`h5`);
        h5Bottom.textContent = `When comes Yoga Your Time.`;

        let p1Bottom = document.createElement(`p`);
        p1Bottom.textContent = `Saturday-Sunday: 8:00am - 10:00am`;

        let p2Bottom = document.createElement(`p`);
        p2Bottom.textContent = `Monday-Tuesday: 10:00am - 12:00pm`;

        let p3Bottom = document.createElement(`p`);
        p3Bottom.textContent = `Saturday-Sunday: 3:00pm - 6:00pm`;

        bottom.appendChild(h5Bottom);
        bottom.appendChild(p1Bottom);
        bottom.appendChild(p2Bottom);
        bottom.appendChild(p3Bottom);

        paragraph.appendChild(top);
        paragraph.appendChild(bottom);

        let img = document.createElement(`div`);
        img.className = `content-img`;

        let imgElement = document.createElement(`img`);
        imgElement.src = `./assets/yoga.jpg`;
        imgElement.alt = `yoga`;

        img.appendChild(imgElement);

        content.appendChild(paragraph);
        content.appendChild(img);

        return content;
    }

    // Solo Content
    function createSoloContent() {
        let content = document.createElement(`div`);
        content.className = `section-our-content`;

        let paragraph = document.createElement(`div`);
        paragraph.className = `content-paragraph`;

        let top = document.createElement(`div`);
        top.className = `paragraph-top`;

        let h5Top = document.createElement(`h5`);
        h5Top.textContent = `Why are your ${"Solo"}?`;

        let pTop = document.createElement(`p`);
        pTop.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste`;

        top.appendChild(h5Top);
        top.appendChild(pTop);

        let bottom = document.createElement(`div`);
        bottom.className = `paragraph-bottom`;

        let h5Bottom = document.createElement(`h5`);
        h5Bottom.textContent = `When comes Solo Your Time.`;

        let p1Bottom = document.createElement(`p`);
        p1Bottom.textContent = `Monday-Tuesday: 8:00am - 10:00am`;

        let p2Bottom = document.createElement(`p`);
        p2Bottom.textContent = `Saturday-Sunday: 10:00am - 12:00pm`;

        let p3Bottom = document.createElement(`p`);
        p3Bottom.textContent = `Wednesday-Thursday: 3:00pm - 6:00pm`;

        bottom.appendChild(h5Bottom);
        bottom.appendChild(p1Bottom);
        bottom.appendChild(p2Bottom);
        bottom.appendChild(p3Bottom);

        paragraph.appendChild(top);
        paragraph.appendChild(bottom);

        let img = document.createElement(`div`);
        img.className = `content-img`;

        let imgElement = document.createElement(`img`);
        imgElement.src = `./assets/solo.jpg`;
        imgElement.alt = `solo`;

        img.appendChild(imgElement);

        content.appendChild(paragraph);
        content.appendChild(img);

        return content;
    }


    // Group  Content
    function createGroupContent() {
        let content = document.createElement(`div`);
        content.className = `section-our-content`;

        let paragraph = document.createElement(`div`);
        paragraph.className = `content-paragraph`;

        let top = document.createElement(`div`);
        top.className = `paragraph-top`;

        let h5Top = document.createElement(`h5`);
        h5Top.textContent = `Why are your ${"Group"}?`;

        let pTop = document.createElement(`p`);
        pTop.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste`;

        top.appendChild(h5Top);
        top.appendChild(pTop);

        let bottom = document.createElement(`div`);
        bottom.className = `paragraph-bottom`;

        let h5Bottom = document.createElement(`h5`);
        h5Bottom.textContent = `When comes Group Your Time.`;

        let p1Bottom = document.createElement(`p`);
        p1Bottom.textContent = `Tuesday-Wednesday: 9:00am - 11:00am`;

        let p2Bottom = document.createElement(`p`);
        p2Bottom.textContent = `Saturday-Sunday: 10:00am - 12:00pm`;

        let p3Bottom = document.createElement(`p`);
        p3Bottom.textContent = `Thursday-Friday: 5:00pm - 7:00pm`;

        bottom.appendChild(h5Bottom);
        bottom.appendChild(p1Bottom);
        bottom.appendChild(p2Bottom);
        bottom.appendChild(p3Bottom);

        paragraph.appendChild(top);
        paragraph.appendChild(bottom);

        let img = document.createElement(`div`);
        img.className = `content-img`;

        let imgElement = document.createElement(`img`);
        imgElement.src = `./assets/group.webp`;
        imgElement.alt = `group training`;

        img.appendChild(imgElement);

        content.appendChild(paragraph);
        content.appendChild(img);

        return content;
    }


    // Streching  Content
    function createStretchingContent() {
        let content = document.createElement(`div`);
        content.className = `section-our-content`;

        let paragraph = document.createElement(`div`);
        paragraph.className = `content-paragraph`;

        let top = document.createElement(`div`);
        top.className = `paragraph-top`;

        let h5Top = document.createElement(`h5`);
        h5Top.textContent = `Why are your ${"Streching"}?`;

        let pTop = document.createElement(`p`);
        pTop.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem, dolor perferendis quae dolorem eveniet ut ullam, vel expedita praesentium asfagfd numquam quidem possimus iste recusandae ipsaa. asfagfd numquam quidem possimus iste`;

        top.appendChild(h5Top);
        top.appendChild(pTop);

        let bottom = document.createElement(`div`);
        bottom.className = `paragraph-bottom`;

        let h5Bottom = document.createElement(`h5`);
        h5Bottom.textContent = `When comes Strech Your Time.`;

        let p1Bottom = document.createElement(`p`);
        p1Bottom.textContent = `Sunday-Monday: 9:00am - 11:00am`;

        let p2Bottom = document.createElement(`p`);
        p2Bottom.textContent = `Saturday-Sunday: 10:00am - 12:00pm`;

        let p3Bottom = document.createElement(`p`);
        p3Bottom.textContent = `Tuesday-Wdnesday: 7:00pm - 9:00pm`;

        bottom.appendChild(h5Bottom);
        bottom.appendChild(p1Bottom);
        bottom.appendChild(p2Bottom);
        bottom.appendChild(p3Bottom);

        paragraph.appendChild(top);
        paragraph.appendChild(bottom);

        let img = document.createElement(`div`);
        img.className = `content-img`;

        let imgElement = document.createElement(`img`);
        imgElement.src = `./assets/stret.webp`;
        imgElement.alt = `group training`;

        img.appendChild(imgElement);

        content.appendChild(paragraph);
        content.appendChild(img);

        return content;
    }


    // Başlangıçta Yoga span`i tiklanmis olarak gelsin
    showContent(createYogaContent());
    setActive(yogaSpan);

    yogaSpan.addEventListener(`click`, function () {
        showContent(createYogaContent());
        setActive(yogaSpan);
    });

    groupSpan.addEventListener(`click`, function () {
        showContent(createGroupContent());
        setActive(groupSpan);
    });

    soloSpan.addEventListener(`click`, function () {
        showContent(createSoloContent());
        setActive(soloSpan);
    });

    stretchingSpan.addEventListener(`click`, function () {
        showContent(createStretchingContent());
        setActive(stretchingSpan);
    });

});



//BMI CALCULATION
const heightInput = document.querySelector(`.input-height`);
const weightInput = document.querySelector(`.input-weight`);
const bmiTriangle = document.querySelector(`.bmi-triangle`);

// BMI hesaplama fonksiyonu
function calculateBMI() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // BMI hesaplama formülü
    const bmi = weight / ((height / 100) ** 2);

    // BMI değerine göre üçgeni hareket ettir
    const minBMI = 15;
    const maxBMI = 45.5;
    const percentage = (bmi - minBMI) / (maxBMI - minBMI) * 100;
    const newPosition = Math.min(Math.max(percentage, 0), 100);

    // Eğer newPosition 80`den büyükse, 80 olarak ayarla
    if (newPosition > 80) {
        bmiTriangle.style.left = `80%`;
    } else {
        bmiTriangle.style.left = `${newPosition}%`;
    }
}

// Giriş değerleri değiştiğinde BMI hesapla
heightInput.addEventListener(`input`, calculateBMI);
weightInput.addEventListener(`input`, calculateBMI);