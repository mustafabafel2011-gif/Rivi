const tournaments = [
  {
    game: "PUBG Mobile",
    title: "RIVO PUBG — الموسم الأول",
    desc: "بطولة فرق بنظام المراحل: تصفيات، نصف نهائي، نهائي.",
    meta: ["👥 فرق", "🏆 مراحل", "🎯 موسم 01"]
  },
  {
    game: "eFootball",
    title: "RIVO eFootball Cup",
    desc: "بطولة فردية بنظام 1 ضد 1 لأفضل لاعبي eFootball.",
    meta: ["👤 فردي", "⚽ 1 ضد 1", "🏆 موسم 01"]
  },
  {
    game: "PUBG Mobile",
    title: "RIVO Squad Open",
    desc: "بطولة متعددة المباريات مع تجميع النقاط.",
    meta: ["👥 4 لاعبين", "🔥 عدة مباريات", "📅 قريبًا"]
  }
];

const challenges = [
  {
    title: "تحدي 15 Kills",
    game: "PUBG Mobile",
    desc: "حقق 15 إقصاءً في مباراة واحدة وأثبت مهارتك.",
    pts: "+150 نقطة تحديات"
  },
  {
    title: "سلسلة الفوز",
    game: "eFootball",
    desc: "حقق 5 انتصارات متتالية في مواجهات 1 ضد 1.",
    pts: "+200 نقطة تحديات"
  },
  {
    title: "التحدي الأسبوعي",
    game: "PUBG Mobile",
    desc: "مهمة أسبوعية جديدة تتغير مع كل أسبوع.",
    pts: "+100 نقطة تحديات"
  }
];

const players = [
  ["01", "مصطفى", "PUBG Mobile", "2450", "Diamond II"],
  ["02", "أحمد", "eFootball", "2180", "Diamond I"],
  ["03", "علي", "PUBG Mobile", "1940", "Platinum II"],
  ["04", "حسين", "eFootball", "1760", "Platinum I"],
  ["05", "سيف", "PUBG Mobile", "1510", "Gold II"]
];

const teams = [
  ["RIVO FORCE", "2450", "#1", "28/30"],
  ["RED WOLVES", "2210", "#2", "24/30"],
  ["NOVA SQUAD", "1980", "#3", "19/30"]
];

function render() {
  document.getElementById("tournamentList").innerHTML =
    tournaments.map(x => `
      <article class="card">
        <div class="card-top">
          <span class="game">${x.game}</span>
          <span class="pill">مفتوحة</span>
        </div>

        <h3>${x.title}</h3>
        <p>${x.desc}</p>

        <div class="meta">
          ${x.meta.map(m => `<span>${m}</span>`).join("")}
        </div>

        <button class="btn primary"
          onclick="alert('التسجيل سيكون متاحًا بعد ربط قاعدة البيانات.')">
          عرض البطولة
        </button>
      </article>
    `).join("");

  document.getElementById("challengeList").innerHTML =
    challenges.map(x => `
      <article class="card">
        <div class="card-top">
          <span class="game">${x.game}</span>
          <span class="pill red">تحدي</span>
        </div>

        <h3>${x.title}</h3>
        <p>${x.desc}</p>

        <div class="meta">
          <span>⚔️ ${x.pts}</span>
        </div>

        <button class="btn ghost"
          onclick="alert('التحديات ستصبح تفاعلية في المرحلة التالية.')">
          عرض التحدي
        </button>
      </article>
    `).join("");

  document.getElementById("teamList").innerHTML =
    teams.map(x => `
      <article class="card">
        <div class="card-top">
          <h3>${x[0]}</h3>
          <span class="rank">${x[2]}</span>
        </div>

        <p>فريق تنافسي في RIVO</p>

        <div class="meta">
          <span>🏆 ${x[1]} نقطة</span>
          <span>👥 ${x[3]} عضو</span>
        </div>

        <button class="btn ghost">صفحة الفريق</button>
      </article>
    `).join("");

  document.getElementById("playerList").innerHTML =
    players.slice(0, 4).map(x => `
      <article class="card">
        <div class="card-top">
          <h3>${x[1]}</h3>
          <span class="rank">#${x[0]}</span>
        </div>

        <p>${x[2]}</p>

        <div class="meta">
          <span>🏆 ${x[3]} نقطة</span>
          <span>🏅 ${x[4]}</span>
        </div>
      </article>
    `).join("");

  showRanking("players", document.querySelector(".tab"));
}

function showRanking(type, el) {

  document.querySelectorAll(".tab")
    .forEach(x => x.classList.remove("active"));

  if (el) {
    el.classList.add("active");
  }

  let rows;

  if (type === "players") {

    rows = players.map(x => [
      x[0],
      x[1],
      x[2],
      x[3],
      x[4]
    ]);

  } else if (type === "teams") {

    rows = teams.map(x => [
      x[2],
      x[0],
      "PUBG Mobile",
      x[1],
      "ترتيب فريق"
    ]);

  } else {

    rows = [
      ["01", "مصطفى", "PUBG Mobile", "1350", "تحديات"],
      ["02", "علي", "PUBG Mobile", "1220", "تحديات"],
      ["03", "أحمد", "eFootball", "980", "تحديات"]
    ];
  }

  document.getElementById("rankingBody").innerHTML =
    rows.map(r => `
      <tr>
        <td class="rank">${r[0]}</td>
        <td>${r[1]}</td>
        <td>${r[2]}</td>
        <td>${r[3]}</td>
        <td>${r[4]}</td>
      </tr>
    `).join("");
}

function toggleNav() {
  document.getElementById("nav").classList.toggle("open");
}

function createAccount(e) {

  e.preventDefault();

  const name =
    document.getElementById("name").value;

  const game =
   
