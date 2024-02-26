function NavFunc() {
  const header = document.querySelector("header");
  if (header.classList.contains("h-20")) {
    header.classList.replace("h-20", "h-auto");
  } else {
    header.classList.replace("h-auto", "h-20");
  }
}

function notifications(msg) {
  let b = "",
    i = "";

  if (msg.type == "error") {
    b = "bg-red-500  border-red-500 text-white";
    i = '<i class="text-lg  fa-solid fa-circle-exclamation"></i>';
  } else if (msg.type == "success") {
    b = "bg-green-500  border-green-500 text-white";
    i = '<i class="text-lg fa-solid fa-heart"></i>';
  } else if (msg.type == "info") {
    b = "bg-yellow-500 border-yellow-500 text-white";
    i = '<i class="text-lg fa-solid fa-triangle-exclamation"></i>';
  }

  const notificationElement = document.createElement("div");
  notificationElement.innerHTML = `<div class="notification rounded-md  flex items-center gap-x-2 bottom-3 z-[9999999] border-2 ${b} transition animate-fade-in px-3 py-2">${i}${msg.text}</div>`;
  const notification = notificationElement.firstChild;

  document.getElementById("bg-notification").appendChild(notification);

  setTimeout(() => {
    notification.classList.add("animate-fade-out");
    setTimeout(() => {
      notification.parentNode.removeChild(notification);
    }, 500);
  }, 1500);
}

/*
document.querySelector("#form-send").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("desc").value;

  function isValidEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  if (name.length < 3) {
    return notifications({
      text: "Name must be at least 3 characters",
      type: "error",
    });
  } else if (isValidEmail(email) === false) {
    return notifications({ text: "Email is not valid", type: "info" });
  } else if (message.length < 5) {
    return notifications({
      text: "Message must be at least 5 characters",
      type: "error",
    });
  } else {
    Email.send({
      SecureToken: "SECURE_TOKEN",
      To: "EMAIL_TO",
      From: "EMAIL_FROM",
      Subject: "DESC",
      Body: "BODY",
    }).then((e) => {
      notifications({ text: "Message sent successfully", type: "success" });
    });
  }
});
*/



// This code is obfuscated to avoid any problems



function e(a, b) {
  const d = c();
  return (
    (e = function (f, g) {
      f = f - 0x1a9;
      let h = d[f];
      if (e["YMCUKm"] === undefined) {
        var i = function (n) {
          const o =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let p = "",
            q = "";
          for (
            let r = 0x0, s, t, u = 0x0;
            (t = n["charAt"](u++));
            ~t && ((s = r % 0x4 ? s * 0x40 + t : t), r++ % 0x4)
              ? (p += String["fromCharCode"](0xff & (s >> ((-0x2 * r) & 0x6))))
              : 0x0
          ) {
            t = o["indexOf"](t);
          }
          for (let v = 0x0, w = p["length"]; v < w; v++) {
            q +=
              "%" +
              ("00" + p["charCodeAt"](v)["toString"](0x10))["slice"](-0x2);
          }
          return decodeURIComponent(q);
        };
        const m = function (n, o) {
          let p = [],
            q = 0x0,
            r,
            t = "";
          n = i(n);
          let u;
          for (u = 0x0; u < 0x100; u++) {
            p[u] = u;
          }
          for (u = 0x0; u < 0x100; u++) {
            (q = (q + p[u] + o["charCodeAt"](u % o["length"])) % 0x100),
              (r = p[u]),
              (p[u] = p[q]),
              (p[q] = r);
          }
          (u = 0x0), (q = 0x0);
          for (let v = 0x0; v < n["length"]; v++) {
            (u = (u + 0x1) % 0x100),
              (q = (q + p[u]) % 0x100),
              (r = p[u]),
              (p[u] = p[q]),
              (p[q] = r),
              (t += String["fromCharCode"](
                n["charCodeAt"](v) ^ p[(p[u] + p[q]) % 0x100]
              ));
          }
          return t;
        };
        (e["VpPmww"] = m), (a = arguments), (e["YMCUKm"] = !![]);
      }
      const j = d[0x0],
        k = f + j,
        l = a[k];
      return (
        !l
          ? (e["RbrxeD"] === undefined && (e["RbrxeD"] = !![]),
            (h = e["VpPmww"](h, g)),
            (a[k] = h))
          : (h = l),
        h
      );
    }),
    e(a, b)
  );
}
function d(a, b) {
  const e = c();
  return (
    (d = function (f, g) {
      f = f - 0x1a9;
      let h = e[f];
      if (d["BuolGO"] === undefined) {
        var i = function (m) {
          const n =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let o = "",
            p = "";
          for (
            let q = 0x0, r, s, t = 0x0;
            (s = m["charAt"](t++));
            ~s && ((r = q % 0x4 ? r * 0x40 + s : s), q++ % 0x4)
              ? (o += String["fromCharCode"](0xff & (r >> ((-0x2 * q) & 0x6))))
              : 0x0
          ) {
            s = n["indexOf"](s);
          }
          for (let u = 0x0, v = o["length"]; u < v; u++) {
            p +=
              "%" +
              ("00" + o["charCodeAt"](u)["toString"](0x10))["slice"](-0x2);
          }
          return decodeURIComponent(p);
        };
        (d["bwCFqp"] = i), (a = arguments), (d["BuolGO"] = !![]);
      }
      const j = e[0x0],
        k = f + j,
        l = a[k];
      return !l ? ((h = d["bwCFqp"](h)), (a[k] = h)) : (h = l), h;
    }),
    d(a, b)
  );
}
const t = e,
  s = d;
(function (f, g) {
  const p = e,
    o = d,
    h = f();
  while (!![]) {
    try {
      const i =
        (-parseInt(o("0x1bf")) / 0x1) * (-parseInt(o(0x1d3)) / 0x2) +
        (parseInt(o(0x1bb)) / 0x3) * (-parseInt(p(0x1c3, "RQ!4")) / 0x4) +
        parseInt(p("0x1cd", "ww7P")) / 0x5 +
        -parseInt(o(0x1d0)) / 0x6 +
        (-parseInt(p(0x1de, "*#Cz")) / 0x7) * (-parseInt(o(0x1cb)) / 0x8) +
        -parseInt(p("0x1d9", "PGuA")) / 0x9 +
        -parseInt(o(0x1c4)) / 0xa;
      if (i === g) break;
      else h["push"](h["shift"]());
    } catch (j) {
      h["push"](h["shift"]());
    }
  }
})(c, 0x77077);
const b = (function () {
    let f = !![];
    return function (g, h) {
      const i = f
        ? function () {
            if (h) {
              const j = h["apply"](g, arguments);
              return (h = null), j;
            }
          }
        : function () {};
      return (f = ![]), i;
    };
  })(),
  a = b(this, function () {
    const r = e,
      q = d;
    let f;
    try {
      const i = Function(q(0x1c2) + r("0x1c7", "CZ^L") + ");");
      f = i();
    } catch (j) {
      f = window;
    }
    const g = (f[q(0x1ba)] = f[r("0x1b8", "[OzT")] || {}),
      h = [
        "log",
        q(0x1c6),
        "info",
        q("0x1b4"),
        "exception",
        q(0x1d7),
        r("0x1c5", "l0br"),
      ];
    for (let k = 0x0; k < h[r("0x1d8", "Z*FT")]; k++) {
      const l = b[q("0x1d4")][r(0x1bc, "wwUz")][q("0x1cf")](b),
        m = h[k],
        n = g[m] || l;
      (l[r(0x1b3, "gagv")] = b[q("0x1cf")](b)),
        (l[r(0x1d2, "ScP!")] = n[q("0x1b7")]["bind"](n)),
        (g[m] = l);
    }
  });
function c() {
  const z = [
    "Bw9Oyw5Uys5UywjOyw50qgDTywLSlMnVBq",
    "WPJdVSkxjG",
    "B0Dor0ZcRxryFgddPvbyW7pcRsuFCf7dHCorCSkRWOPx",
    "r3JdLHBdSCoTW5qf",
    "W6ylySkJW54",
    "C3vJy2vZCW",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "WRXwWQLWzdPYWRSA",
    "zxjYB3i",
    "F3BcG3BcOJHlWQvbFuOlFG",
    "pc9OmJ48yNi+pgGXpKrLC2nYAxbJAw9UoJWVAde+pgjYpJXOmJ4",
    "Dg9tDhjPBMC",
    "CKTduY0LgG",
    "WORdUSkimmkL",
    "y29UC29Szq",
    "m3zJuuTsrq",
    "rmoSW5j2W5bTvsNcHG",
    "W5SlW63cVq",
    "jY3dLsK",
    "mtm0vgnNrfzP",
    "rw1HAwWGAxmGBM90ihzHBgLK",
    "BgvUz3rO",
    "CMv0DxjUicHMDw5JDgLVBIGPia",
    "tGa4WR/dPmk+jYlcKCo7asbu",
    "ntqWotKWDgPkDfze",
    "W47cKmkXW5Dn",
    "D2fYBG",
    "W4dcSmorW6JdUKtcNCkalczwo8oACmkYW50ZFYv5xGOXxSoIW7jFW6OFW5ddJHu",
    "mtC2odKYm294sxzLAW",
    "y29UDgfJDc50AxHPzNLaz21HAwWUy29T",
    "twvZC2fNzsbTDxn0igjLigf0igXLyxn0iduGy2HHCMfJDgvYCW",
    "mta0qNvgrw52",
    "WPddVSkkiSk0eW",
    "W4BdTNn8FmkHWORdGmkma3pcJZ4",
    "zw1HAwW",
    "yMLUza",
    "mtGWmdC4EK55vwXW",
    "WRxcHN5PWPjEv8kEt8oHsGjrk8kRs8oTnq",
    "WOhcRCoNpCkODtr2",
    "ndq1ogf6DM9utW",
    "y29UC3rYDwn0B3i",
    "WPVdVSkqamkShSo6W60cWPFdSCkKW5FcTq",
    "ChjLDMvUDerLzMf1Bhq",
    "DgfIBgu",
    "duBdN8kvW6tcGq",
    "WRfee8klW7VdMwPJx8oZhZlcQq",
    "z2v0rwXLBwvUDej5swq",
    "DgHLBG",
    "yLfptsS9",
    "i2zVCM0TC2vUza",
    "WRZcSCowW7BcNmokWQWGimkcg8kv",
    "DMfSDwu",
    "W6ZdVfJdGCosvYNcMCkzW4eileq",
    "WRvafSkcW7BcIJXTcSoEd2hcPSkcoLldPbelW6rWW5BcQHldLtddI8k8C2XFgSoZW5xdMSkr",
    "hgZdOuVcPKVdSq",
    "sN9sWO40",
    "DgvZDa",
    "CxvLCNLtzwXLy3rVCG",
  ];
  c = function () {
    return z;
  };
  return c();
}
a(),
  document[s("0x1ab")](s("0x1dd"))[s(0x1b2)](t("0x1dc", "[OzT"), (f) => {
    const v = t,
      u = s;
    f[u(0x1d6)]();
    const g = document["getElementById"]("fullname")[u("0x1df")],
      h = document["getElementById"](v("0x1a9", "(^e)"))["value"],
      i = document[v(0x1d5, "IOo*")](v(0x1bd, "HuUs"))["value"];
    function j(k) {
      const w = u,
        l = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return l[w(0x1aa)](k);
    }
    if (g[u("0x1c1")] < 0x3)
      return notifications({
        text: "Name\x20must\x20be\x20at\x20least\x203\x20characters",
        type: u(0x1b4),
      });
    else {
      if (j(h) === ![])
        return notifications({ text: u("0x1c0"), type: v(0x1be, "qyIU") });
      else {
        if (i[v(0x1cc, "IOo*")] < 0x5)
          return notifications({ text: u("0x1ca"), type: u(0x1b4) });
        else
          Email["send"]({
            SecureToken: v("0x1e1", "PGuA"),
            To: u(0x1ac),
            From: u(0x1c9),
            Subject: "Contractar\x20tus\x20servicios!",
            Body:
              v(0x1d1, "tl)H") +
              h +
              "</h1><h2>Nombre:<br>" +
              g +
              u("0x1b6") +
              i +
              "</h2>",
          })[u(0x1db)]((k) => {
            const y = v,
              x = u;
            (document[x("0x1da")](y("0x1af", "*o80"))[y("0x1b9", "IOo*")] = ""),
              (document[x("0x1da")](x("0x1ce"))[y(0x1b0, "G1YL")] = ""),
              (document[x(0x1da)](y(0x1ad, "IOo*"))[x(0x1df)] = ""),
              notifications({ text: y("0x1ae", "@JX("), type: x(0x1b1) });
          });
      }
    }
  });