// ==========================================
// RIVO ESPORTS - app.js
// ==========================================

// بيانات RIVO التجريبية
const البطولات = [
  {
    لعبة: "ببجي موبايل",
    عنوان: "RIVO PUBG - الموسم الأول",
    وصف: "تصفيات، نصف النهائي، النهائي",
    ميتا: ["🏆 01 موسم", "👥 100 لاعب", "🔥 مفتوحة"]
  },
  {
    لعبة: "كرة القدم الإلكترونية",
    عنوان: "كأس RIVO لكرة القدم الإلكترونية",
    وصف: "بطولة فردية لأفضل لاعبي eFootball",
    ميتا: ["🏆 موسم 01", "⚽ 1 ضد 1", "👤 لاعب"]
  },
  {
    لعبة: "ببجي موبايل",
    عنوان: "RIVO Squad Open",
    وصف: "بطولة متعددة الفرق مع تجميع النقاط",
    ميتا: ["👥 4 لاعبين", "🔥 المزيد من القصص", "📅 17"]
  }
];

const التحديات = [
  {
    عنوان: "تحدي 15 قتلاً",
    لعبة: "ببجي موبايل",
    وصف: "إقصاء 15 لاعباً في مباراة واحدة وإثبات مهارتك.",
    نقاط: "150+ نقطة"
  },
  {
    عنوان: "سلسلة الانتصارات",
    لعبة: "eFootball",
    وصف: "حقق 5 انتصارات متتالية.",
    نقاط: "200 نقطة"
  },
  {
    عنوان: "تحدي الفريق",
    لعبة: "ببجي موبايل",
    وصف: "حقق أفضل نتيجة جماعية مع فريقك.",
    نقاط: "250 نقطة"
  }
];

const اللاعبين = [
  {
    الاسم: "Mustafa",
    اللعبة: "PUBG Mobile",
    النقاط: 1250,
    الرتبة: "Champion"
  },
  {
    الاسم: "RIVO Player",
    اللعبة: "PUBG Mobile",
    النقاط: 980,
    الرتبة: "Diamond"
  },
  {
    الاسم: "eFootball Star",
    اللعبة: "eFootball",
    النقاط: 870,
    الرتبة: "Platinum"
  }
];

const الفرق = [
  {
    الاسم: "RIVO Elite",
    اللعبة: "PUBG Mobile",
    النقاط: 2400,
    الأعضاء: 4
  },
  {
    الاسم: "RIVO Warriors",
    اللعبة: "PUBG Mobile",
    النقاط: 1980,
    الأعضاء: 4
  },
  {
    الاسم: "RIVO Football",
    اللعبة: "eFootball",
    النقاط: 1750,
    الأعضاء: 3
  }
];


// ==========================================
// القائمة الرئيسية في الهاتف
// ==========================================

function toggleNav() {
  const nav = document.getElementById("nav");

  if (!nav) return;

  nav.classList.toggle("open");
}


// ==========================================
// عرض البطولات
// ==========================================

function renderTournaments() {
  const container = document.getElementById("tournamentList");

  if (!container) return;

  container.innerHTML = "";

  البطولات.forEach((item) => {
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="card-top">
        <span class="game-tag">${item.لعبة}</span>
        <span class="status">مفتوحة</span>
      </div>

      <h3>${item.عنوان}</h3>

      <p>${item.وصف}</p>

      <div class="meta">
        ${item.ميتا.map(x => `<span>${x}</span>`).join("")}
      </div>

      <button class="btn primary full"
        onclick="joinTournament('${item.عنوان}')">
        المشاركة
      </button>
    `;

    container.appendChild(card);
  });
}


// ==========================================
// عرض التحديات
// ==========================================

function renderChallenges() {
  const container = document.getElementById("challengeList");

  if (!container) return;

  container.innerHTML = "";

  التحديات.forEach((item) => {
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="card-top">
        <span class="game-tag">${item.لعبة}</span>
        <span class="points">${item.نقاط}</span>
      </div>

      <h3>${item.عنوان}</h3>

      <p>${item.وصف}</p>

      <button class="btn ghost full"
        onclick="joinChallenge('${item.عنوان}')">
        دخول التحدي
      </button>
    `;

    container.appendChild(card);
  });
}


// ==========================================
// عرض اللاعبين
// ==========================================

function renderPlayers() {
  const container = document.getElementById("playerList");

  if (!container) return;

  container.innerHTML = "";

  اللاعبين.forEach((player) => {
    const card = document.createElement("article");

    card.className = "card player-card";

    card.innerHTML = `
      <div class="avatar">
        ${player.الاسم.charAt(0).toUpperCase()}
      </div>

      <h3>${player.الاسم}</h3>

      <p>${player.اللعبة}</p>

      <div class="player-score">
        <strong>${player.النقاط}</strong>
        <span>نقطة</span>
      </div>

      <span class="rank">${player.الرتبة}</span>
    `;

    container.appendChild(card);
  });
}


// ==========================================
// عرض الفرق
// ==========================================

function renderTeams() {
  const container = document.getElementById("teamList");

  if (!container) return;

  container.innerHTML = "";

  الفرق.forEach((team) => {
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="team-icon">R</div>

      <h3>${team.الاسم}</h3>

      <p>${team.اللعبة}</p>

      <div class="meta">
        <span>👥 ${team.الأعضاء} أعضاء</span>
        <span>🏆 ${team.النقاط} نقطة</span>
      </div>

      <button class="btn ghost full"
        onclick="viewTeam('${team.الاسم}')">
        عرض الفريق
      </button>
    `;

    container.appendChild(card);
  });
}


// ==========================================
// جدول التصنيف
// ==========================================

function showRanking(type, button) {

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  const body = document.getElementById("rankingBody");

  if (!body) return;

  body.innerHTML = "";

  let data = [];

  if (type === "players") {

    data = اللاعبين.map((player) => ({
      name: player.الاسم,
      game: player.اللعبة,
      points: player.النقاط,
      rank: player.الرتبة
    }));

  } else if (type === "teams") {

    data = الفرق.map((team) => ({
      name: team.الاسم,
      game: team.اللعبة,
      points: team.النقاط,
      rank: getRank(team.النقاط)
    }));

  } else {

    data = التحديات.map((challenge, index) => ({
      name: challenge.عنوان,
      game: challenge.لعبة,
      points: (index + 1) * 100,
      rank: "Challenge"
    }));

  }

  data.sort((a, b) => b.points - a.points);

  data.forEach((item, index) => {

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.game}</td>
      <td><strong>${item.points}</strong></td>
      <td><span class="rank">${item.rank}</span></td>
    `;

    body.appendChild(row);
  });
}


// ==========================================
// نظام الرتب
// ==========================================

function getRank(points) {

  if (points >= 2500) return "Champion";
  if (points >= 2000) return "Master";
  if (points >= 1600) return "Diamond";
  if (points >= 1200) return "Platinum";
  if (points >= 800) return "Gold";
  if (points >= 400) return "Silver";

  return "Bronze";
}


// ==========================================
// إنشاء الحساب
// ==========================================

function createAccount(event) {

  event.preventDefault();

  const nameInput = document.getElementById("name");
  const gameInput = document.getElementById("game");
  const result = document.getElementById("accountResult");

  if (!nameInput || !gameInput || !result) return;

  const name = nameInput.value.trim();
  const game = gameInput.value;

  if (!name) return;

  const account = {
    name,
    game,
    points: 0,
    rank: "Bronze",
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(
    "rivo_account",
    JSON.stringify(account)
  );

  result.innerHTML = `
    <div class="success-box">
      <strong>تم إنشاء حسابك بنجاح 🎉</strong>
      <p>مرحباً ${name} في RIVO.</p>
      <span>${game} · Bronze · 0 نقطة</span>
    </div>
  `;
}


// ==========================================
// تحميل الحساب المحفوظ
// ==========================================

function loadAccount() {

  const saved = localStorage.getItem("rivo_account");

  if (!saved) return;

  try {

    const account = JSON.parse(saved);

    const result = document.getElementById("accountResult");

    if (!result) return;

    result.innerHTML = `
      <div class="success-box">
        <strong>مرحباً بعودتك ${account.name} 👋</strong>
        <p>${account.game}</p>
        <span>
          ${account.rank} · ${account.points} نقطة
        </span>
      </div>
    `;

  } catch (error) {

    console.error("RIVO account error:", error);

  }
}


// ==========================================
// أزرار البطولات
// ==========================================

function joinTournament(name) {

  alert(
    `🏆 ${name}\n\nسيتم فتح التسجيل في هذه البطولة قريباً.`
  );
}


// ==========================================
// أزرار التحديات
// ==========================================

function joinChallenge(name) {

  alert(
    `🎯 ${name}\n\nسيتم تسجيل مشاركتك في التحدي قريباً.`
  );
}


// ==========================================
// الفرق
// ==========================================

function viewTeam(name) {

  alert(
    `👥 فريق ${name}\n\nصفحة الفريق ستكون متاحة في النسخة القادمة.`
  );
}


// ==========================================
// إغلاق القائمة عند اختيار رابط
// ==========================================

document.querySelectorAll("#nav a").forEach((link) => {

  link.addEventListener("click", () => {

    const nav = document.getElementById("nav");

    if (nav) {
      nav.classList.remove("open");
    }

  });

});


// ==========================================
// تشغيل RIVO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  renderTournaments();

  renderChallenges();

  renderPlayers();

  renderTeams();

  showRanking("players", document.querySelector(".tab"));

  loadAccount();

  console.log("RIVO ESPORTS is running 🚀");

});
