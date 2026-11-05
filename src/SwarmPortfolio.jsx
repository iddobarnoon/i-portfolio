// Recovered and adapted from califa/swarm-site. See SWARM-NOTICE.md.
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
const op = {
  arrow: [5, 3.5],
  dup: [5, 3.5],
  pen: [3, 3],
  "pen-add": [3, 3],
  "pen-close": [3, 3],
  cross: [12, 12],
  ibeam: [12, 12],
  ew: [12, 12],
  ns: [12, 12]
};
const pi = "M4.6 3.9 C4.2 3.1 4.9 2.4 5.7 2.8 L20.6 9.4 C21.5 9.8 21.4 11.1 20.4 11.3 L13.9 12.9 C13.4 13 13 13.4 12.9 13.9 L11.3 20.4 C11.1 21.4 9.8 21.5 9.4 20.6 Z";
function sp({
  shape: e,
  color: t
}) {
  const n = {
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinejoin: "round"
  };
  switch (e) {
    case "arrow":
      return jsxRuntime.jsx("path", {
        d: pi,
        fill: t,
        ...n
      });
    case "dup":
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx("path", {
          d: pi,
          transform: "translate(4 3.5)",
          fill: "#fff",
          stroke: t,
          strokeWidth: 1.3,
          strokeLinejoin: "round"
        }), jsxRuntime.jsx("path", {
          d: pi,
          fill: t,
          ...n
        })]
      });
    case "pen":
    case "pen-add":
    case "pen-close":
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsx("path", {
          d: "M17.4 10.6 L20.6 13.8 L13.8 20.6 L10.6 17.4 Z",
          fill: t,
          ...n
        }), jsxRuntime.jsx("path", {
          d: "M3 3 L13.1 6.3 L17.4 10.6 L10.6 17.4 L6.3 13.1 Z",
          fill: t,
          ...n
        }), jsxRuntime.jsx("path", {
          d: "M3.6 3.6 L8.9 8.9",
          stroke: "#fff",
          strokeWidth: 1.2,
          strokeLinecap: "round"
        }), jsxRuntime.jsx("circle", {
          cx: 10.2,
          cy: 10.2,
          r: 1.75,
          fill: "none",
          stroke: "#fff",
          strokeWidth: 1.2
        }), e === "pen-add" && jsxRuntime.jsxs("g", {
          strokeLinecap: "round",
          children: [jsxRuntime.jsx("path", {
            d: "M23 19.5 V26.5 M19.5 23 H26.5",
            stroke: "#fff",
            strokeWidth: 3.4
          }), jsxRuntime.jsx("path", {
            d: "M23 19.5 V26.5 M19.5 23 H26.5",
            stroke: "#1E1E1E",
            strokeWidth: 1.3
          })]
        }), e === "pen-close" && jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx("circle", {
            cx: 23,
            cy: 23,
            r: 2.8,
            fill: "none",
            stroke: "#fff",
            strokeWidth: 3.2
          }), jsxRuntime.jsx("circle", {
            cx: 23,
            cy: 23,
            r: 2.8,
            fill: "none",
            stroke: "#1E1E1E",
            strokeWidth: 1.2
          })]
        })]
      });
    case "cross":
      return jsxRuntime.jsxs("g", {
        strokeLinecap: "round",
        children: [jsxRuntime.jsx("path", {
          d: "M12 3.5 V20.5 M3.5 12 H20.5",
          stroke: "#fff",
          strokeWidth: 3.6
        }), jsxRuntime.jsx("path", {
          d: "M12 3.5 V20.5 M3.5 12 H20.5",
          stroke: t,
          strokeWidth: 1.5
        })]
      });
    case "ibeam":
      {
        const r = "M8.5 4.5 H10.5 Q12 4.5 12 6 Q12 4.5 13.5 4.5 H15.5 M12 6 V18 M8.5 19.5 H10.5 Q12 19.5 12 18 Q12 19.5 13.5 19.5 H15.5";
        return jsxRuntime.jsxs("g", {
          fill: "none",
          strokeLinecap: "round",
          children: [jsxRuntime.jsx("path", {
            d: r,
            stroke: "#fff",
            strokeWidth: 3.6
          }), jsxRuntime.jsx("path", {
            d: r,
            stroke: t,
            strokeWidth: 1.5
          })]
        });
      }
    case "ew":
    case "ns":
      return jsxRuntime.jsx("path", {
        d: "M2.5 12 L7 7.5 V10.4 H17 V7.5 L21.5 12 L17 16.5 V13.6 H7 V16.5 Z",
        transform: e === "ns" ? "rotate(90 12 12)" : void 0,
        fill: t,
        ...n
      });
  }
}
function Cursor({
  c: e,
  X: t,
  Y: n
}) {
  const [r, l] = op[e.shape],
    i = 1 - e.press * .12;
  return jsxRuntime.jsx("div", {
    className: "cursor",
    style: {
      transform: `translate(${t}px, ${n}px)`
    },
    children: jsxRuntime.jsx("svg", {
      width: 28,
      height: 28,
      viewBox: "0 0 28 28",
      style: {
        transform: `translate(${-r}px, ${-l}px) rotate(${e.angle}deg) scale(${i})`,
        transformOrigin: `${r}px ${l}px`
      },
      children: jsxRuntime.jsx(sp, {
        shape: e.shape,
        color: e.color
      })
    })
  });
}
const Jt = document.createElement("canvas").getContext("2d");
const fu = new Map();
const fontFamily = e => e.font === "mono" ? '"JetBrains Mono", ui-monospace, monospace' : "Inter, system-ui, sans-serif";
const lineHeight = (e, t = e.size) => Math.round(t * e.lh);
function measureText(e, t, n, r) {
  const l = `${e}|${t.font}|${t.weight}|${n}|${t.ls ?? 0}|${r ?? -1}`,
    i = fu.get(l);
  if (i) return i;
  Jt.font = `${t.weight} ${n}px ${fontFamily(t)}`, Jt.letterSpacing = `${(t.ls ?? 0) * n}px`;
  const o = [];
  for (const a of e.split(`
`)) {
    if (r == null || t.pre) {
      o.push(Jt.measureText(a).width);
      continue;
    }
    const p = a.split(" ");
    let m = "";
    for (const c of p) {
      const h = m ? m + " " + c : c;
      m && Jt.measureText(h).width > r ? (o.push(Jt.measureText(m).width), m = c) : m = h;
    }
    o.push(Jt.measureText(m).width);
  }
  const s = r ?? Math.max(0, ...o),
    u = {
      w: Math.ceil(s),
      h: o.length * lineHeight(t, n),
      lines: o
    };
  return fu.set(l, u), u;
}
const SCENE_WIDTH = 1280;
const LEFT = 80;
const RIGHT = 1200;
const OFFSCREEN_LEFT = -1e4;
const OFFSCREEN_RIGHT = 1e4;
const Z = LEFT + 36;
const palette = {
  ink: "#121417",
  muted: "#62666d",
  line: "#d7dade",
  accent: "#4c5bd4",
  card: "#ffffff",
  code: "#111721"
};
const he = (e, t, n, r = palette.ink, l = 0) => ({
  font: "sans",
  size: e,
  weight: t,
  lh: n,
  color: r,
  ls: l
});
const lt = (e, t = palette.muted, n = 400, r = {}) => ({
  font: "mono",
  size: e,
  weight: n,
  lh: 1.45,
  color: t,
  ...r
});
const textStyles = {
  h1: he(64, 600, 1.02, palette.ink, -.035),
  h2: he(40, 600, 1.08, palette.ink, -.03),
  h3: he(21, 600, 1.25, palette.ink, -.012),
  lead: he(19, 400, 1.5, palette.muted, -.005),
  body: he(15.5, 400, 1.55, palette.muted),
  item: he(14.5, 450, 1.4, palette.ink),
  nav: he(14, 500, 1.4, palette.ink),
  btn: he(14.5, 600, 1.4, "#ffffff"),
  btnDark: he(14.5, 600, 1.4, palette.ink),
  logo: he(19, 650, 1.3, "#43474e", -.025),
  brand: he(18, 650, 1.3, palette.ink, -.02),
  stat: he(52, 600, 1, palette.ink, -.04),
  price: he(44, 600, 1.05, palette.ink, -.035),
  code: lt(13.5, "#E0E2E5", 400, {
    lh: 1.7,
    code: !0,
    pre: !0
  }),
  codeDim: lt(12, "#81868D"),
  nodeName: lt(13, palette.ink, 500),
  nodeWhite: lt(14, palette.ink, 500),
  small: lt(12, palette.muted)
};
const zc = [{d:"M8 10H30V130H8ZM48 10H91Q119 10 119 42Q119 62 104 69Q124 78 124 100Q124 130 91 130H48ZM70 32V59H88Q98 59 98 45Q98 32 88 32ZM70 80V108H89Q103 108 103 94Q103 80 89 80Z",anchors:[]}];

function createScene(e) {
  const t = [],
    n = [],
    r = [],
    l = new Map();
  let i = [];
  const o = S => (t.push(S), l.set(S.id, S), S),
    s = (S, C, z, $ = i) => (n.push({
      id: S,
      y: C,
      spec: z,
      deps: $
    }), S);
  function u(S, C, z = {}) {
    return o({
      kind: "path",
      id: S,
      v: 0,
      vis: !1,
      dx: 0,
      dy: 0,
      pts: C,
      closed: !!z.closed,
      stroke: z.stroke ?? palette.line,
      sw: z.sw ?? 1,
      fill: z.fill,
      d: z.d,
      tf: z.tf,
      add: z.add ?? !0,
      placed: 0,
      shut: !1,
      edit: !1,
      owner: null,
      fillOn: !1
    }), s("p:" + S, Math.min(...C.map($ => $.y)), {
      type: "path",
      el: S
    }, z.deps ?? []);
  }
  function a(S, C, z, $, W, X = {}) {
    return o({
      kind: "rect",
      id: S,
      v: 0,
      vis: !1,
      dx: 0,
      dy: 0,
      x: C,
      y: z,
      w: $,
      h: W,
      r: X.r ?? 0,
      fill: X.fill ?? palette.card,
      stroke: X.stroke,
      draw: null,
      styled: !1
    }), s("r:" + S, z, {
      type: "rect",
      el: S
    }, X.deps ?? []);
  }
  function p(S, C, z, $, W, X = {}) {
    const te = W.upper ? $.toUpperCase() : $;
    return o({
      kind: "text",
      id: S,
      v: 0,
      vis: !1,
      dx: 0,
      dy: 0,
      x: C,
      y: z,
      w: X.w,
      align: X.align ?? "left",
      text: te,
      shown: "",
      st: W,
      size: W.size,
      editing: !1,
      selAll: !1,
      dyn: X.dyn
    }), s("t:" + S, z, {
      type: "text",
      el: S,
      snap: X.snap,
      grow: X.grow
    }, X.deps ?? []);
  }
  function m(S, C, z, $) {
    return o({
      kind: "guide",
      id: S,
      v: 0,
      vis: !1,
      dx: 0,
      dy: 0,
      axis: C,
      pos: z,
      cur: z,
      op: 1,
      flash: 0,
      dragging: !1
    }), s("g:" + S, $, {
      type: "guide",
      el: S
    }, []);
  }
  function c(S, C, z) {
    const $ = {
        id: S,
        ids: C,
        copies: []
      },
      W = n.filter(te => "el" in te.spec && C.includes(te.spec.el)).map(te => te.id),
      X = [];
    z.forEach((te, Me) => {
      var D;
      const Ae = [];
      let _ = 0;
      for (const H of C) {
        const U = l.get(H),
          pt = `${H}~${Me + 1}`;
        if (Ae.push(pt), U.kind === "text") {
          const et = U.st.upper ? (D = te.edits[_]) == null ? void 0 : D.toUpperCase() : te.edits[_];
          o({
            ...U,
            id: pt,
            x: U.x + te.dx,
            y: U.y + te.dy,
            text: et ?? U.text
          }), _++;
        } else U.kind === "rect" && o({
          ...U,
          id: pt,
          x: U.x + te.dx,
          y: U.y + te.dy
        });
      }
      $.copies.push({
        dx: te.dx,
        dy: te.dy,
        ids: Ae
      });
      const j = Math.min(...Ae.map(H => l.get(H).y));
      X.push(s(`d:${S}:${Me}`, j, {
        type: "dup",
        group: S,
        k: Me
      }, W));
    }), $.copies.forEach(te => te.ids.forEach((Me, Ae) => {
      const _ = l.get(Me),
        j = l.get(C[Ae]);
      _.kind === "text" && j.kind === "text" && _.text !== j.text && s("e:" + Me, _.y, {
        type: "edit",
        el: Me
      }, X);
    })), r.push($);
  }
  function h(S, C, z, $ = !1) {
    i = [];
    const W = $ ? [OFFSCREEN_RIGHT, OFFSCREEN_LEFT] : [OFFSCREEN_LEFT, OFFSCREEN_RIGHT];
    u("rule-" + S, [{
      x: W[0],
      y: z
    }, {
      x: W[1],
      y: z
    }]), u("left-" + S, [{
      x: LEFT,
      y: C
    }, {
      x: LEFT,
      y: z
    }]), u("right-" + S, [{
      x: RIGHT,
      y: z
    }, {
      x: RIGHT,
      y: C
    }]);
  }
  const v = (S, C, z, $, W) => u(S, [{
      x: C,
      y: z
    }, {
      x: C,
      y: $
    }], {
      deps: W
    }),
    w = (S, C, z = OFFSCREEN_LEFT, $ = OFFSCREEN_RIGHT, W) => u(S, [{
      x: z,
      y: C
    }, {
      x: $,
      y: C
    }], {
      deps: W
    }),
    T = (S, C) => measureText(S, C, C.size).w,
    d = (S, C, z, $) => {
      const W = {
        x: C,
        y: z,
        s: $ / 140
      };
      zc.forEach((X, te) => u(`${S}${te}`, X.anchors.map(([Me, Ae]) => ({
        x: C + Me * W.s,
        y: z + Ae * W.s
      })), {
        closed: !0,
        stroke: palette.ink,
        fill: palette.ink,
        add: !1,
        d: X.d,
        tf: W
      }));
    };
  const text = p, rect = a, path = u, guide = m, duplicate = c, frame = h, vertical = v;
  const heading = textStyles.h2, body = textStyles.body, small = textStyles.small;
  const links = new Map();
  const link = (id, href) => links.set(id, href);
  const button = (id, x, y, width, label, href, primary = false) => {
    rect(id, x, y, width, 48, {r:8,fill:primary?palette.accent:palette.card,stroke:palette.line});
    text(id+'-label', x, y+13, label, primary?{...textStyles.btn,color:'#ffffff'}:textStyles.btnDark,{w:width,align:'center',deps:['r:'+id]});
    link(id+'-label',href);
  };
  const navStart=t.length;
  path('nav-top',[{x:OFFSCREEN_LEFT,y:24},{x:OFFSCREEN_RIGHT,y:24}]);
  frame('nav',24,88,true);
  text('brand',112,43,'IB / Iddo Barnoon',textStyles.brand);
  text('nav-work',600,46,'Work',textStyles.nav); link('nav-work','#work');
  text('nav-about',700,46,'About',textStyles.nav); link('nav-about','#about');
  text('nav-exp',800,46,'Experience',textStyles.nav); link('nav-exp','#experience');
  rect('nav-mail',1024,36,144,40,{r:8,fill:palette.accent});
  text('nav-mail-label',1024,46,'Let’s talk ↗',{...textStyles.btn,color:'#ffffff'},{w:144,align:'center',deps:['r:nav-mail']});link('nav-mail-label','mailto:iddobarnoon@gmail.com');
  t.slice(navStart).forEach(el=>el.sticky=true);
  frame('hero',88,660);
  guide('hero-left','x',116,120);
  text('hero-kicker',116,140,'01 / intro',small,{w:1048,align:'center'});
  text('hero-title',116,205,'Hi!',textStyles.h1,{w:1048,align:'center',snap:'hero-left',grow:true});
  text('hero-copy',300,320,'I’m Iddo. I’m interested in all things data, AI agents, inference and ML infrastructure, and forward-deployed engineering.',textStyles.lead,{w:680,align:'center'});
  button('hero-work',464,450,184,'Explore my work ↓','#work',true);
  button('hero-github',660,450,156,'GitHub ↗','https://github.com/iddobarnoon');
  text('hero-location',116,565,'NEW YORK, NY  /  COMPUTER SCIENCE + MATHEMATICS',small,{w:1048,align:'center'});
  frame('tools',660,770,true);
  text('tools-label',116,707,"I'M MOST EXPERIENCED WITH",lt(11));
  text('tool',380,704,'Python',textStyles.logo);
  duplicate('tool-list',['tool'],['Java','PyTorch','React','Docker'].map((name,index)=>({dx:(index+1)*155,dy:0,edits:[name]})));
  frame('work-heading',770,960);
  guide('work-guide','x',116,790);
  text('work-kicker',116,815,'02 / SELECTED WORK',small,{snap:'work-guide'});
  text('work-heading-title',116,858,'Personal Projects',heading,{w:600,snap:'work-guide',grow:true});
  text('work-heading-copy',790,858,'I love learning about unrelated topics and building cool software that connects them.',body,{w:345});
  frame('project-grid',960,1440,true);
  vertical('project-split',640,960,1440);
  guide('project-guide','y',1180,970);
  rect('project-art',116,998,488,140,{r:10,fill:'#edf1ff',stroke:'#bec8ed'});
  text('project-glyph',145,1036,'B ↗',he(52,600,1,'#4c5bd4'),{deps:['r:project-art']});
  text('project-art-copy',300,1044,'analyze → plan → save',lt(13,'#4c5bd4'),{deps:['r:project-art']});
  text('project-title',116,1180,'BudgetWise',textStyles.h3,{snap:'project-guide'});
  text('project-desc',116,1225,'A budgeting app with a tool-calling AI assistant, FastAPI microservices, a Next.js frontend, and Supabase storage.',body,{w:455});
  text('project-tech',116,1310,'Python · Next.js · FastAPI · Supabase · Docker',lt(11));
  text('project-link',116,1370,'Explore repository ↗',lt(13,palette.accent,500));link('project-link','https://github.com/iddobarnoon/BudgetWise');
  duplicate('projects',['project-art','project-glyph','project-art-copy','project-title','project-desc','project-tech','project-link'],[{dx:560,dy:0,edits:['{ }','create → search → restore','Persistent Document Storage System','A persistent document store using B-Trees for retrieval, with prefix search, deletion, undo, and version control.','Java · Maven · Data Structures · GSON','Explore repository ↗']}]);
  link('project-link~1','https://github.com/iddobarnoon/PersistentDocuStore');

  frame('trading',1440,1840);
  vertical('trading-divider',640,1440,1840);
  rect('market',116,1490,488,290,{r:8,fill:'#edf5ee',stroke:'#bfd1c3'});
  text('market-label',146,1518,'PREDICTION MARKET / OCR → EXECUTION',lt(12,'#3c6031'),{deps:['r:market']});
  path('market-chart',[{x:150,y:1690},{x:200,y:1660},{x:245,y:1675},{x:295,y:1610},{x:335,y:1630},{x:390,y:1580},{x:440,y:1595},{x:560,y:1555}],{stroke:'#5f8968',sw:2,deps:['r:market']});
  text('market-speed',146,1722,'< 1 second',he(30,600,1.1,'#3c6031'),{deps:['r:market']});
  text('trading-title',676,1490,'High Frequency Prediction\nMarket Trading Bot',textStyles.h3,{w:480});
  text('trading-date',676,1560,'JANUARY 2026',lt(11));
  text('trading-desc',676,1598,'Built an OCR-driven trading system with sub-second response from outcome recognition to order placement. OpenCV image binarization feeds Tesseract; Kalshi and Polymarket APIs execute orders, with SQLite logging.',body,{w:455});
  text('trading-tech',676,1730,'OpenCV · Tesseract-OCR · SQLite · APIs',lt(11));
  text('trading-link',676,1775,'Explore repository ↗',lt(13,palette.accent,500));link('trading-link','https://github.com/iddobarnoon/HFPredictionMarketBot');
  frame('about',1840,2340);
  vertical('about-divider',640,1840,2340);
  guide('about-guide','x',116,1860);
  text('about-kicker',116,1880,'03 / EDUCATION',small,{snap:'about-guide'});
  text('about-title',116,1920,'Education',heading,{w:480,snap:'about-guide',grow:true});
  text('nyu-school',116,2030,'NYU Courant ↗',he(19,600,1.3,palette.accent),{w:450});link('nyu-school','https://cs.nyu.edu/');
  text('nyu-degree',116,2075,'BA, Computer Science + Mathematics',body,{w:450});
  text('nyu-dates',116,2110,'AUG 2026 — MAY 2028 (EXPECTED)',lt(11));
  rect('terminal',676,1880,488,406,{r:12,fill:palette.code,stroke:palette.line});
  text('terminal-file',704,1902,'● ● ●                         iddo.config',lt(11,'#94a3be'),{deps:['r:terminal']});
  path('terminal-divider',[{x:676,y:1940},{x:1164,y:1940}],{stroke:palette.line,deps:['r:terminal']});
  const code=['// a few things about me','const iddo = {','  basedIn: "New York, NY",','  studies: "CS + Mathematics",','  school: "NYU Courant",','  drawnTo: [','    "all things data",','    "AI agents",','    "inference / ML infra",','    "FDE work"','  ]','};'];
  code.forEach((line,index)=>text('code-'+index,704,1964+index*25,line,textStyles.code,{deps:['r:terminal']}));

  frame('experience',2340,3380,true);
  vertical('experience-divider',640,2340,3380);
  text('experience-kicker',116,2390,'04 / EXPERIENCE',small);
  text('experience-title',116,2430,'Professional\nExperience',heading,{w:480,grow:true});
  text('fellowships-kicker',676,2390,'05 / FELLOWSHIPS + AWARDS',small);
  text('fellowships-title',676,2430,'Fellowships\nand Awards',heading,{w:480,grow:true});
  text('axonius-company',116,2560,'AXONIUS ↗',lt(13,palette.accent,500));link('axonius-company','https://www.axonius.com/');
  text('axonius-date',116,2595,'JUN — AUG 2026 · TEL AVIV, ISRAEL',lt(11));
  text('axonius-role',116,2630,'Software Engineer Intern',he(26,600,1.15),{w:480});
  text('axonius-body',116,2690,'Built developer tooling with MCP, Claude Skills, and LangGraph to resolve Jira tickets and automate low-priority fixes. Helped migrate front-end tests and shipped reusable, accessible components.',body,{w:460});
  text('axonius-stat',116,2810,'40%',he(40,600,1,palette.ink));
  text('axonius-caption',116,2865,'shorter front-end test suite runtime',small,{w:460});
  text('excel-title',676,2560,'Birthright Excel\nGlobal Fellow ↗',he(24,600,1.2,palette.accent),{w:480});link('excel-title','https://birthrightisraelexcel.com/');
  text('excel-date',676,2630,'SUMMER 2026',lt(11));
  text('excel-body',676,2670,'A selective, lifelong business and tech fellowship. Chosen as one of 80 fellows from over 2,000 applicants.',body,{w:460});
  text('excel-stat',676,2810,'1 of 80',he(40,600,1,palette.ink));
  text('excel-caption',676,2865,'selected from 2,000+ applicants',small,{w:460});
  path('experience-row',[{x:80,y:2910},{x:1200,y:2910}],{stroke:palette.line});
  text('lendbuzz-company',116,2940,'LENDBUZZ ↗',lt(13,palette.accent,500));link('lendbuzz-company','https://www.lendbuzz.com/');
  text('lendbuzz-date',116,2975,'JUN — AUG 2025 · BOSTON, MA',lt(11));
  text('lendbuzz-role',116,3010,'Machine Learning\nEngineering Intern',he(26,600,1.15),{w:470});
  text('lendbuzz-body',116,3090,'Built Docker-based tooling for running ML models locally, replacing Proxmox instances. Automated deployments with GitHub Actions and AWS EC2/ECS. Contributed to fraud-model post-training using OCR, Word2Vec, and Bag-of-Words.',body,{w:460});
  text('setup-stat',116,3250,'65%',he(40,600,1,palette.ink));
  text('setup-caption',116,3305,'less setup time',small);
  duplicate('deployment-stats',['setup-stat','setup-caption'],[{dx:260,dy:0,edits:['35%','faster deployment']}]);
  text('approval-note',116,3345,'Supported express approvals reaching 17.4% by Q2',lt(11),{w:470});
  text('award-title',676,2940,'Trade the Knight\n1st Place',he(24,600,1.2),{w:480});
  text('award-host',676,3020,'RUTGERS UNIVERSITY · CITADEL',lt(12,palette.accent,500),{w:470});
  text('award-date',676,3055,'MARCH 2026 · ALGORITHMIC TRADING',lt(11));
  text('award-body',676,3090,'Built four bots for pairs trading, market-making, statistical arbitrage, and prediction markets, plus a real-time market data dashboard.',body,{w:460});
  text('return-stat',676,3250,'102%',he(40,600,1,palette.ink));
  text('return-caption',676,3305,'return / 8-hour session',lt(11));
  text('sharpe-stat',960,3250,'2.26',he(40,600,1,palette.ink));
  text('sharpe-caption',960,3305,'Sharpe ratio',lt(11));
  frame('contact',3380,3810);
  guide('contact-guide','x',116,3400);
  text('contact-kicker',116,3440,'06 / NEXT UP',small,{snap:'contact-guide'});
  text('contact-title',116,3490,'Let’s build\nsomething good.',{...textStyles.h1,color:palette.accent},{w:950,snap:'contact-guide',grow:true});
  text('contact-email',116,3670,'iddobarnoon@gmail.com ↗',textStyles.lead);link('contact-email','mailto:iddobarnoon@gmail.com');
  text('contact-copy',790,3670,'Feel free to email!',body,{w:370});
  text('contact-linkedin',116,3740,'LinkedIn ↗',lt(13,palette.accent,500));link('contact-linkedin','https://linkedin.com/in/iddobarnoon');
  frame('footer',3810,3920,true);
  text('copyright',116,3850,'© '+new Date().getFullYear()+' Iddo Barnoon',small);
  text('footer-linkedin',760,3850,'LinkedIn ↗',small);link('footer-linkedin','https://linkedin.com/in/iddobarnoon');
  text('footer-link',1000,3850,'GitHub ↗',small);link('footer-link','https://github.com/iddobarnoon');
  for(const el of t) if(links.has(el.id)) el.href=links.get(el.id);
  return {els:t,tasks:n,groups:r,height:3920};

}

const du = ["Ada", "Linus", "Grace", "Alan", "Margaret", "Ken", "Barbara", "Dennis", "Radia", "Guido", "Frances", "Bjarne", "Hedy", "Tim", "Katherine", "Edsger", "Joan", "Donald", "Sophie", "Niklaus", "Anita", "Brian", "Mary", "Rob", "Ida", "Yukihiro", "Shafi", "Leslie", "Jean", "Vint", "Lynn", "Bram"];
const pu = ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83", "#FF7262", "#FFC700", "#9747FF", "#E8467C", "#14AE5C", "#0D99FF", "#FF8A00", "#00B5CE"];
const cp = 24;
const fp = 20;
const hu = 18;
const Ar = 6;
const dp = 36;
const pp = 48;
const F = (e, t) => e + Math.random() * (t - e);
const Ur = (e, t, n) => Math.max(t, Math.min(n, e));
const yu = e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
const hp = e => 1 - Math.pow(1 - e, 3);
const B = e => {
  e.v++;
};
class SwarmEngine {
  constructor() {
    this.els = new Map(), this.list = [], this.tasks = [], this.byTask = new Map(), this.groups = new Map(), this.cursors = [], this.vp = {
      scrollY: 0,
      vh: 800,
      vw: 1280,
      s: 1,
      left: 0
    }, this.started = !1, this.frontier = 0, this.vel = 0, this.tempo = 1, this.time = 0, this.rulers = {
      want: 0,
      t: 0,
      lastNeed: -10
    }, this.lastScroll = 0, this.nextId = 0, this.spawnCooldown = 0, this.flocking = !1, this.lastT = null, this.tv = {
      x: 0,
      y: 0
    }, this.mouse = null, this.guideDeps = new Map(), this.retiredWorkers = 0;
    const t = createScene(() => this.cursors.filter(n => n.worked).length + this.retiredWorkers);
    this.height = t.height;
    for (const n of t.els) this.els.set(n.id, n), this.list.push(n);
    for (const n of t.tasks) {
      const r = {
        ...n,
        state: "wait",
        doneAt: 0
      };
      if (this.tasks.push(r), this.byTask.set(n.id, r), n.spec.type === "text" && n.spec.snap) {
        const l = this.guideDeps.get(n.spec.snap) ?? [];
        l.push(r), this.guideDeps.set(n.spec.snap, l);
      }
    }
    for (const n of t.groups) this.groups.set(n.id, n);
    for (let n = 0; n < hu; n++) {
      const r = n / hu * Math.PI * 2,
        l = this.makeCursor(SCENE_WIDTH / 2 + Math.cos(r) * 160, 400 + Math.sin(r) * 160, n < Ar ? {
          x: 0,
          y: 0
        } : null);
      l.follow = !0, this.cursors.push(l);
    }
  }
  makeCursor(t, n, r = null) {
    const l = this.nextId++;
    return {
      id: l,
      x: t,
      y: n,
      home: r,
      name: du[l % du.length],
      color: pu[l % pu.length],
      shape: "arrow",
      press: 0,
      task: null,
      gen: null,
      ov: null,
      idleFor: 0,
      leaving: !1,
      worked: !1,
      sticky: !1,
      vx: 0,
      vy: 0,
      angle: 0,
      ...(Math.random() < .25 ? {
        speed: F(1e3, 1500),
        force: F(3500, 6e3),
        spin: F(2.2, 3.4)
      } : {
        speed: F(300, 750),
        force: F(700, 1800),
        spin: F(.8, 1.8)
      }),
      curl: F(-1, 1),
      ph: F(0, Math.PI * 2),
      orbit: F(70, 170),
      spin: 0,
      follow: !1
    };
  }
  get viewTop() {
    return this.vp.scrollY / this.vp.s;
  }
  get viewBot() {
    return (this.vp.scrollY + this.vp.vh) / this.vp.s;
  }
  get stick() {
    return Math.max(0, this.viewTop + fp * this.rulers.t / this.vp.s - cp);
  }
  isSticky(t) {
    var l;
    const n = t.spec,
      r = n.type === "dup" ? this.groups.get(n.group).ids[0] : n.el;
    return !!((l = this.els.get(r)) != null && l.sticky);
  }
  fromViewport(t, n) {
    return {
      x: (t - this.vp.left) / this.vp.s,
      y: (this.vp.scrollY + n) / this.vp.s
    };
  }
  start() {
    if (!this.started) {
      this.started = !0;
      for (const t of this.cursors) t.follow = !1, t.gen = null, t.angle = ((t.angle + 180) % 360 + 360) % 360 - 180;
    }
  }
  bounds(t) {
    var n, r;
    if (t.kind === "text") {
      const l = measureText(t.shown || " ", t.st, t.size, t.w);
      return {
        x: t.x + t.dx,
        y: t.y + t.dy,
        w: t.w ?? Math.max(l.w, 2),
        h: Math.max(l.h, lineHeight(t.st, t.size))
      };
    }
    if (t.kind === "rect") return {
      x: t.x + t.dx,
      y: t.y + t.dy,
      w: ((n = t.draw) == null ? void 0 : n.w) ?? t.w,
      h: ((r = t.draw) == null ? void 0 : r.h) ?? t.h
    };
    if (t.kind === "path") {
      const l = t.pts.map(o => o.x),
        i = t.pts.map(o => o.y);
      return {
        x: Math.min(...l),
        y: Math.min(...i),
        w: Math.max(...l) - Math.min(...l),
        h: Math.max(...i) - Math.min(...i)
      };
    }
    return {
      x: t.pos,
      y: 0,
      w: 0,
      h: 0
    };
  }
  unionBounds(t) {
    const n = t.map(i => this.bounds(this.els.get(i))),
      r = Math.min(...n.map(i => i.x)),
      l = Math.min(...n.map(i => i.y));
    return {
      x: r,
      y: l,
      w: Math.max(...n.map(i => i.x + i.w)) - r,
      h: Math.max(...n.map(i => i.y + i.h)) - l
    };
  }
  textUnderline(t) {
    const n = measureText(t.shown || " ", t.st, t.size, t.w),
      r = this.bounds(t),
      l = n.lines[0] ?? 0;
    return {
      x: t.align === "center" && t.w ? r.x + (t.w - l) / 2 : r.x,
      y: r.y + lineHeight(t.st, t.size) * .5 + t.size * .42,
      w: l,
      h: 0
    };
  }
  selection(t, n = {}) {
    const r = this.bounds(t);
    return {
      t: "box",
      b: r,
      handles: !0,
      badge: `${Math.round(r.w)} × ${Math.round(r.h)}`,
      rulerLines: !0,
      underline: t.kind === "text" ? this.textUnderline(t) : void 0,
      ...n
    };
  }
  setScroll(t) {
    this.vp.scrollY = t;
    if (t > 0) this.start();
  }
  step(t) {
    t = Math.min(t, .05), this.time += t;
    const n = this.vp.s,
      r = Math.abs(this.vp.scrollY - this.lastScroll) / n / Math.max(t, .001);
    this.lastScroll = this.vp.scrollY, this.vel = Math.max(this.vel * Math.exp(-t * 1.2), this.vel * .7 + r * .3), this.started && (this.frontier = Math.max(this.frontier, this.viewBot));
    const l = this.started ? this.available() : [],
      i = this.cursors.filter(a => a.task).length;
    this.tempo = Ur(2.1 + this.vel / 900 + l.length / Math.max(1, this.cursors.length) * .5, 2.1, 4.5), this.rulers.want > 0 && (this.rulers.lastNeed = this.time);
    const o = this.time - this.rulers.lastNeed < .7 ? 1 : 0;
    this.rulers.t += (o - this.rulers.t) * Math.min(1, t * 10), Math.abs(o - this.rulers.t) < .002 && (this.rulers.t = o);
    for (const a of this.list) {
      if (a.kind !== "guide" || !a.vis) continue;
      a.flash > 0 && (a.flash = Math.max(0, a.flash - t * 1.5), B(a));
      const p = this.guideDeps.get(a.id) ?? [];
      if (!a.dragging && p.every(m => m.state === "done")) {
        const m = Math.max(...p.map(c => c.doneAt));
        this.time - m > 1.2 && a.op > 0 && (a.op = Math.max(0, a.op - t * 1.2), B(a));
      }
    }
    if (!this.flocking && this.started && this.tasks.every(a => a.state !== "wait")) {
      for (const a of this.cursors) a.task || a.follow || (a.follow = !0, a.gen = null, a.leaving = !1, a.ov = null, a.shape = "arrow");
      this.cursors.every(a => a.follow) && (this.flocking = !0);
    }
    if (this.flocking) {
      this.flock(t);
      return;
    }
    if (!this.started) {
      const a = this.fromViewport(this.vp.vw / 2, this.vp.vh / 2);
      this.follow(t, this.cursors, a, .7);
      return;
    }
    this.cursors.some(a => a.follow) && this.follow(t, this.cursors.filter(a => a.follow)), this.spawnCooldown -= t;
    const s = Ur(Ar + Math.floor(this.vel / 50) + Math.floor(l.length / 3), Ar, pp),
      u = this.cursors.filter(a => !a.leaving).length;
    if (this.started && u < s && l.length > u - i && this.spawnCooldown <= 0) {
      const a = Math.random() < .5,
        p = this.fromViewport(a ? -40 : this.vp.vw + 40, F(.2, .8) * this.vp.vh);
      this.cursors.push(this.makeCursor(p.x, p.y)), this.spawnCooldown = .035;
    }
    for (const a of this.cursors) {
      if (a.task || a.leaving || a.follow || !this.started) continue;
      const p = this.pick(a, l);
      p && (l.splice(l.indexOf(p), 1), p.state = "active", a.task = p, a.worked = !0, this.isSticky(p) && (a.sticky = !0, a.y -= this.stick), a.idleFor = 0, a.gen = this.run(a, p));
    }
    for (const a of [...this.cursors]) {
      if (a.follow) continue;
      a.press = Math.max(0, a.press - t * 6), a.angle !== 0 && (a.angle = Math.abs(a.angle) < .5 ? 0 : a.angle * (1 - Math.min(1, t * 10))), a.task || (a.idleFor += t, !a.leaving && this.started && a.idleFor > 2.5 && this.cursors.filter(m => !m.leaving).length > Ar && !a.home && (a.leaving = !0, a.gen = this.leave(a)), a.gen || (a.gen = this.idle(a))), a.gen.next(t).done && (a.task && (a.task.state = "done", a.task.doneAt = this.time, a.task = null, a.ov = null, a.sticky && (a.sticky = !1, a.y += this.stick), a.shape = "arrow"), a.gen = null, a.leaving && (a.worked && this.retiredWorkers++, this.cursors.splice(this.cursors.indexOf(a), 1)));
    }
  }
  flockTarget() {
    if (this.mouse) return this.fromViewport(this.mouse.x, this.mouse.y);
    const t = this.time;
    return this.fromViewport(this.vp.vw * (.5 + .28 * Math.sin(t * .37)), this.vp.vh * (.5 + .25 * Math.sin(t * .53 + 1)));
  }
  flock(t) {
    if (this.spawnCooldown -= t, this.cursors.length < dp && this.spawnCooldown <= 0) {
      const n = Math.random() < .5,
        r = this.fromViewport(n ? -30 : this.vp.vw + 30, F(.1, .9) * this.vp.vh),
        l = this.makeCursor(r.x, r.y);
      l.follow = !0, this.cursors.push(l), this.spawnCooldown = .04;
    }
    this.follow(t, this.cursors);
  }
  follow(t, n, r, l = 1) {
    const i = this.mouse ? this.fromViewport(this.mouse.x, this.mouse.y) : null,
      o = r ?? this.flockTarget(),
      s = this.time;
    if (i && this.lastT && t > 0) {
      const h = Math.min(1, t * 18);
      this.tv.x += ((i.x - this.lastT.x) / t - this.tv.x) * h, this.tv.y += ((i.y - this.lastT.y) / t - this.tv.y) * h;
    }
    this.lastT = i;
    const u = 135 * l * (1 + .18 * Math.sin(s * .55)),
      a = Math.tanh(Math.cos(s * .11) * 3),
      p = [];
    for (const h of n) {
      const v = h.x - o.x,
        w = h.y - o.y,
        T = Math.hypot(v, w) || .01,
        d = v / T,
        f = w / T,
        y = Math.atan2(w, v),
        g = (h.orbit - 120) * .55 * l,
        E = u * (1 + .3 * Math.sin(3 * y + s * .7)) + g,
        L = 300 * (.7 + h.spin * .2) * a,
        M = Ur((E - T) * 4, -2600, 1400),
        S = Math.min(1, Math.max(0, (T - E) / 600));
      p.push([-f * L + d * M - f * h.curl * 400 * S, d * L + f * M + d * h.curl * 400 * S]);
    }
    for (let h = 0; h < n.length; h++) {
      const v = n[h];
      let w = 0,
        T = 0,
        d = 0;
      for (let z = 0; z < n.length; z++) {
        if (z === h) continue;
        const $ = n[z],
          W = Math.hypot($.x - v.x, $.y - v.y);
        if (W > 90) continue;
        const X = 1 - W / 90;
        w += $.vx * X, T += $.vy * X, d += X;
      }
      let [f, y] = p[h];
      d > 0 && (f = f * .7 + w / d * .3, y = y * .7 + T / d * .3);
      const g = Math.max(0, Math.hypot(v.x - o.x, v.y - o.y) - 180 * l),
        E = v.speed * (1.3 + Math.min(3.2, g / 90)),
        N = Math.hypot(f, y);
      N > E && (f *= E / N, y *= E / N);
      let L = (f - v.vx) * 6,
        M = (y - v.vy) * 6;
      const S = v.force * (1.4 + Math.min(5, g / 50)),
        C = Math.hypot(L, M);
      C > S && (L *= S / C, M *= S / C), v.vx += L * t, v.vy += M * t, v.x += v.vx * t, v.y += v.vy * t;
    }
    const m = 48;
    let c = !1;
    if (i) for (const h of n) {
      const v = h.x - i.x,
        w = h.y - i.y,
        T = Math.hypot(v, w) || .01;
      if (T >= m) continue;
      c = !0;
      const d = v / T,
        f = w / T;
      h.x = i.x + d * m, h.y = i.y + f * m;
      const y = (h.vx - this.tv.x) * d + (h.vy - this.tv.y) * f;
      y < 0 && (h.vx -= d * y * 1.6, h.vy -= f * y * 1.6), h.vx += d * 260, h.vy += f * 260;
    }
    for (const h of n) {
      const v = h.vx,
        w = h.vy;
      if (Math.hypot(v, w) < 30) continue;
      const d = (Math.atan2(w, v) * 180 / Math.PI + 128 - h.angle + 540) % 360 - 180;
      h.angle += d * Math.min(1, t * 8), h.press = Math.max(0, h.press - t * 6);
    }
    return c;
  }
  available() {
    const t = [];
    for (const n of this.tasks) n.state !== "wait" || n.y > this.frontier || n.deps.every(r => {
      var l;
      return ((l = this.byTask.get(r)) == null ? void 0 : l.state) === "done";
    }) && t.push(n);
    return t;
  }
  pick(t, n) {
    let r = null,
      l = 1 / 0;
    const i = this.viewTop - 40,
      o = this.viewBot;
    for (const s of n) {
      const u = s.y >= i && s.y <= o ? 0 : s.y < i ? 1 : 2,
        a = u * 1e6 + (u === 1 ? i - s.y : s.y) * .6 + Math.abs(s.y - t.y) * .4;
      a < l && (l = a, r = s);
    }
    return r;
  }
  *wait(t) {
    let n = 0;
    for (; n < t;) n += (yield) * this.tempo;
  }
  *moveTo(t, n, r = {}) {
    var h, v, w;
    const l = typeof n == "function" ? n : () => n,
      i = t.x,
      o = t.y,
      s = l(),
      u = Math.hypot(s.x - i, s.y - o);
    if (u < .5) {
      t.x = s.x, t.y = s.y, (h = r.onStep) == null || h.call(r);
      return;
    }
    const a = Ur(.12 + Math.sqrt(u) * .021, .14, .9) / (r.speed ?? 1),
      p = (r.bend ?? (Math.random() < .5 ? -1 : 1) * F(.04, .14)) * Math.min(u, 600);
    let m = 0;
    for (; m < a;) {
      m += (yield) * this.tempo;
      const T = Math.min(1, m / a),
        d = r.drag || T < .15 ? yu(T) : hp(T),
        f = l(),
        y = f.x - i,
        g = f.y - o,
        E = Math.hypot(y, g) || 1,
        N = Math.sin(Math.PI * d) * p;
      t.x = i + y * d + -g / E * N, t.y = o + g * d + y / E * N, (v = r.onStep) == null || v.call(r);
    }
    const c = l();
    t.x = c.x, t.y = c.y, (w = r.onStep) == null || w.call(r);
  }
  *click(t) {
    t.press = 1, yield* this.wait(.07);
  }
  *type(t, n, r = !1) {
    for (let l = 0; l < n.length; l++) {
      l === 0 && r && (t.shown = ""), t.shown += n[l], t.selAll = !1, B(t);
      let i = F(.012, .04);
      n[l] === " " && (i += F(0, .03)), n[l] === `
` && (i += .1), Math.random() < .025 && (i += F(.08, .2)), yield* this.wait(i);
    }
  }
  *idle(t) {
    if (!this.started && t.home) {
      const n = t.home,
        r = F(0, 6);
      for (; !this.started;) {
        const l = this.time;
        t.x = n.x + Math.sin(l * 1.3 + r) * 3, t.y = n.y + Math.cos(l * 1.7 + r) * 2.5, yield;
      }
    }
    for (;;) {
      const n = this.viewTop,
        r = this.viewBot,
        l = {
          x: F(220, 1060),
          y: F(n + (r - n) * .2, n + (r - n) * .8)
        };
      yield* this.moveTo(t, l, {
        speed: .35
      });
      let i = F(.4, 1.4);
      for (; i > 0 && (i -= yield, !(t.y < this.viewTop || t.y > this.viewBot)););
    }
  }
  *leave(t) {
    const n = t.x > SCENE_WIDTH / 2;
    yield* this.moveTo(t, () => this.fromViewport(n ? this.vp.vw + 60 : -60, (t.y - this.viewTop) * this.vp.s), {
      speed: .8
    });
  }
  run(t, n) {
    const r = n.spec;
    switch (r.type) {
      case "path":
        return this.drawPath(t, this.els.get(r.el));
      case "rect":
        return this.drawRect(t, this.els.get(r.el));
      case "text":
        return this.drawText(t, this.els.get(r.el), r.snap ? this.els.get(r.snap) : null, !!r.grow);
      case "guide":
        return this.dragGuide(t, this.els.get(r.el));
      case "dup":
        return this.duplicate(t, this.groups.get(r.group), r.k);
      case "edit":
        return this.editText(t, this.els.get(r.el));
    }
  }
  anchor(t) {
    return t.x <= OFFSCREEN_LEFT ? () => ({
      x: this.fromViewport(6, 0).x,
      y: t.y
    }) : t.x >= OFFSCREEN_RIGHT ? () => ({
      x: this.fromViewport(this.vp.vw - 6, 0).x,
      y: t.y
    }) : t;
  }
  *drawPath(t, n) {
    if (n.d) return yield* this.drawLogo(t, n);
    t.shape = n.add ? "pen-add" : "pen", yield* this.moveTo(t, this.anchor(n.pts[0])), yield* this.click(t), n.vis = !0, n.edit = !0, n.placed = 1, n.owner = t.id, B(n), t.shape = "pen";
    for (let r = 1; r < n.pts.length; r++) yield* this.moveTo(t, this.anchor(n.pts[r]), {
      bend: F(-.03, .03)
    }), yield* this.click(t), n.placed = r + 1, B(n), yield* this.wait(F(.04, .12));
    n.closed && (t.shape = "pen-close", yield* this.moveTo(t, n.pts[0], {
      bend: F(-.03, .03)
    }), yield* this.click(t), n.shut = !0, B(n)), n.owner = null, B(n), t.shape = "pen", yield* this.moveTo(t, {
      x: t.x + F(14, 30),
      y: t.y + F(10, 24)
    }, {
      speed: 1.4
    }), yield* this.wait(.3), n.edit = !1, n.fill && (n.fillOn = !0), B(n);
  }
  *drawLogo(t, n) {
    t.shape = "pen", yield* this.moveTo(t, this.anchor(n.pts[0])), n.vis = !0, n.placed = 1, B(n);
    for (let r = 1; r <= n.pts.length; r++) yield* this.moveTo(t, n.pts[r % n.pts.length], {
      speed: 1.6
    }), n.placed = r + 1, B(n);
    n.shut = !0, n.fillOn = !0, B(n), yield* this.moveTo(t, {
      x: t.x + F(14, 30),
      y: t.y + F(10, 24)
    }, {
      speed: 1.4
    });
  }
  *drawRect(t, n) {
    t.shape = "cross", yield* this.moveTo(t, {
      x: n.x,
      y: n.y
    }), t.press = 1, n.vis = !0, n.draw = {
      w: 0,
      h: 0
    }, B(n), t.ov = () => [this.selection(n)], yield* this.moveTo(t, {
      x: n.x + n.w,
      y: n.y + n.h
    }, {
      speed: .75,
      drag: !0,
      bend: 0,
      onStep: () => {
        n.draw = {
          w: Math.max(0, t.x - n.x),
          h: Math.max(0, t.y - n.y)
        }, B(n);
      }
    }), n.draw = null, B(n), t.shape = "arrow", yield* this.wait(F(.18, .3)), n.styled = !0, B(n), yield* this.wait(.35), t.ov = null;
  }
  *drawText(t, n, r, l) {
    n.dyn && (n.text = n.dyn()), r && (r.axis === "x" ? (n.dx = F(28, 64), n.dy = F(-8, 8)) : (n.dx = F(-8, 8), n.dy = F(18, 34) * (Math.random() < .5 ? -1 : 1))), l && (n.size = 18);
    const i = n.x + n.dx,
      o = n.y + n.dy;
    if (t.shape = "cross", yield* this.moveTo(t, {
      x: i,
      y: o
    }), n.w == null) yield* this.click(t), n.vis = !0, n.editing = !0, B(n);else {
      t.press = 1;
      const s = {
          kind: "rect",
          id: "",
          v: 0,
          vis: !0,
          dx: 0,
          dy: 0,
          x: i,
          y: o,
          w: 0,
          h: 0,
          r: 0,
          fill: "",
          draw: null,
          styled: !0
        },
        u = lineHeight(n.st, n.size);
      t.ov = () => [this.selection(s)], yield* this.moveTo(t, {
        x: i + n.w,
        y: o + u
      }, {
        speed: .9,
        drag: !0,
        bend: 0,
        onStep: () => {
          s.w = Math.max(0, t.x - i), s.h = Math.max(0, t.y - o);
        }
      }), n.vis = !0, n.editing = !0, B(n);
    }
    if (t.shape = "ibeam", t.ov = () => [{
      t: "box",
      b: this.bounds(n)
    }], yield* this.moveTo(t, {
      x: t.x + F(-30, 10),
      y: t.y + F(10, 30)
    }, {
      speed: 1.5
    }), yield* this.type(n, n.text), yield* this.wait(.12), n.editing = !1, B(n), t.shape = "arrow", t.ov = () => [this.selection(n)], l) {
      const s = [24, 32, 40, 48, 56, 64, 72].filter(u => u < n.st.size);
      for (const u of [...s, n.st.size]) yield* this.wait(.06), n.size = u, B(n);
      yield* this.wait(.15);
    }
    if (r) {
      const s = this.byTask.get("g:" + r.id);
      for (; s.state !== "done";) yield;
      const u = this.bounds(n),
        a = {
          x: u.x + Math.min(u.w * .4, 60) + F(-6, 6),
          y: u.y + Math.min(u.h * .5, 22)
        };
      yield* this.moveTo(t, a), t.press = 1;
      const p = {
          x: a.x - n.dx,
          y: a.y - n.dy
        },
        m = {
          x: p.x + (r.axis === "x" ? -F(2, 5) : F(-6, 6)),
          y: p.y + (r.axis === "y" ? -F(2, 5) : F(-3, 3))
        },
        c = () => {
          let h = t.x - p.x,
            v = t.y - p.y;
          r.axis === "x" && Math.abs(h) < 9 && (h !== 0 && n.dx !== 0 && (r.flash = 1), h = 0), r.axis === "y" && Math.abs(v) < 9 && (v !== 0 && n.dy !== 0 && (r.flash = 1), v = 0), n.dx = h, n.dy = v, B(n), B(r);
        };
      yield* this.moveTo(t, m, {
        speed: .6,
        drag: !0,
        onStep: c
      }), yield* this.wait(.1), yield* this.moveTo(t, p, {
        speed: 2,
        onStep: c
      }), n.dx = 0, n.dy = 0, B(n), yield* this.wait(.25);
    } else yield* this.wait(.2);
    t.ov = null;
  }
  *dragGuide(t, n) {
    this.rulers.want++;
    try {
      const r = F(-.15, .15),
        l = () => n.axis === "x" ? this.fromViewport(10, this.vp.vh * (.45 + r)) : this.fromViewport(this.vp.left + (n.pos > 0 ? 400 : 300) * this.vp.s + r * 200, 10);
      for (t.shape = "arrow", yield* this.moveTo(t, l); this.rulers.t < .95;) yield;
      yield* this.moveTo(t, l, {
        speed: 3
      }), t.press = 1, t.shape = n.axis === "x" ? "ew" : "ns", n.vis = !0, n.dragging = !0, n.op = 1;
      const i = () => {
        n.cur = n.axis === "x" ? t.x : t.y, B(n);
      };
      i();
      const o = () => {
        const s = l();
        return n.axis === "x" ? {
          x: n.pos,
          y: s.y + 40
        } : {
          x: s.x + 30,
          y: n.pos
        };
      };
      yield* this.moveTo(t, o, {
        speed: .55,
        drag: !0,
        onStep: i
      }), n.cur = n.pos, n.dragging = !1, B(n), t.shape = "arrow", yield* this.wait(.25);
    } finally {
      this.rulers.want--;
    }
  }
  *duplicate(t, n, r) {
    const l = n.copies[r],
      i = [{
        dx: 0,
        dy: 0,
        ids: n.ids
      }, ...n.copies.filter((c, h) => {
        var v;
        return ((v = this.byTask.get(`d:${n.id}:${h}`)) == null ? void 0 : v.state) === "done";
      })];
    let o = i[0];
    for (const c of i) Math.hypot(c.dx - l.dx, c.dy - l.dy) < Math.hypot(o.dx - l.dx, o.dy - l.dy) && (o = c);
    const s = this.unionBounds(o.ids);
    t.shape = "arrow";
    const u = {
      x: s.x + Math.min(s.w * .45, 70) + F(-8, 8),
      y: s.y + Math.min(s.h * .45, 30) + F(-4, 4)
    };
    yield* this.moveTo(t, u), yield* this.click(t), t.ov = () => [{
      t: "box",
      b: s,
      handles: !0,
      badge: `${Math.round(s.w)} × ${Math.round(s.h)}`
    }], yield* this.wait(F(.15, .3)), t.shape = "dup", yield* this.wait(.12), t.press = 1;
    const a = o.dx - l.dx,
      p = o.dy - l.dy;
    l.ids.forEach((c, h) => {
      const v = this.els.get(c),
        w = this.els.get(n.ids[h]);
      v.vis = !0, v.dx = a, v.dy = p, v.kind === "text" && w.kind === "text" && (v.shown = w.text), v.kind === "rect" && (v.styled = !0), B(v);
    });
    const m = {
      x: u.x - a,
      y: u.y - p
    };
    t.ov = () => {
      const c = this.unionBounds(l.ids),
        h = [{
          t: "box",
          b: s,
          color: "red"
        }, {
          t: "box",
          b: c,
          color: "red"
        }],
        v = this.spacing(s, c);
      return v && h.push(v), h;
    }, yield* this.moveTo(t, m, {
      speed: .6,
      drag: !0,
      onStep: () => {
        l.ids.forEach(c => {
          const h = this.els.get(c);
          h.dx = t.x - m.x, h.dy = t.y - m.y, B(h);
        });
      }
    }), yield* this.wait(.1), t.shape = "arrow", t.ov = () => {
      const c = this.unionBounds(l.ids);
      return [{
        t: "box",
        b: c,
        handles: !0,
        badge: `${Math.round(c.w)} × ${Math.round(c.h)}`
      }];
    }, yield* this.wait(.35);
  }
  spacing(t, n) {
    const r = Math.min(t.y + t.h, n.y + n.h) - Math.max(t.y, n.y),
      l = Math.min(t.x + t.w, n.x + n.w) - Math.max(t.x, n.x);
    if (r > 0) {
      const i = Math.max(t.y, n.y) + r / 2,
        [o, s] = t.x < n.x ? [t, n] : [n, t],
        u = s.x - (o.x + o.w);
      if (u > 0) return {
        t: "measure",
        a: {
          x: o.x + o.w,
          y: i
        },
        b: {
          x: s.x,
          y: i
        },
        label: String(Math.round(u))
      };
    } else if (l > 0) {
      const i = Math.max(t.x, n.x) + l / 2,
        [o, s] = t.y < n.y ? [t, n] : [n, t],
        u = s.y - (o.y + o.h);
      if (u > 0) return {
        t: "measure",
        a: {
          x: i,
          y: o.y + o.h
        },
        b: {
          x: i,
          y: s.y
        },
        label: String(Math.round(u))
      };
    }
    return null;
  }
  *editText(t, n) {
    t.shape = "arrow";
    const r = this.bounds(n),
      i = measureText(n.shown, n.st, n.size, n.w).lines[0] ?? r.w,
      o = n.align === "center" && n.w ? r.x + (n.w - i) / 2 : r.x;
    yield* this.moveTo(t, {
      x: o + Math.min(i * .5, 50) + F(-5, 5),
      y: r.y + lineHeight(n.st, n.size) * .55
    }), yield* this.click(t), yield* this.wait(.08), yield* this.click(t), n.editing = !0, n.selAll = !0, B(n), t.shape = "ibeam", t.ov = () => [{
      t: "box",
      b: this.bounds(n)
    }], yield* this.wait(F(.2, .35)), yield* this.type(n, n.text, !0), yield* this.wait(.12), n.editing = !1, B(n), t.shape = "arrow", t.ov = () => [this.selection(n)], yield* this.wait(.3);
  }
}
const qt = "#0D99FF";
const rt = "#F24822";
const Be = 20;
const hi = 24;
const mu = 64;
function mp(e) {
  if (e.trimStart().startsWith("#")) return jsxRuntime.jsx("span", {
    style: {
      color: "#6B7078"
    },
    children: e
  });
  const t = [],
    n = /([A-Za-z_]+)(?=:)|([{}:,])|([^{}:,A-Za-z_]+|[A-Za-z_]+)/g;
  let r,
    l = 0,
    i = !0;
  for (; r = n.exec(e);) r[1] ? (t.push(jsxRuntime.jsx("span", {
    style: {
      color: i ? "#8FC9D6" : "#AEB6EE"
    },
    children: r[1]
  }, l++)), i = !1) : r[2] ? t.push(jsxRuntime.jsx("span", {
    style: {
      color: "#81868D"
    },
    children: r[2]
  }, l++)) : t.push(r[3]);
  return t;
}
const TextElement = React.memo(({
  el: e
}) => {
  if (!e.vis) return null;
  const t = e.st,
    n = e.selAll ? jsxRuntime.jsx("span", {
      className: "text-sel",
      children: e.shown
    }) : t.code ? mp(e.shown) : e.shown;
  return jsxRuntime.jsxs(e.href ? "a" : "div", {
    href: e.href,
    onClick: e.href?.startsWith("#") ? event => { event.preventDefault(); const y = {work:770,about:1840,experience:2340}[e.href.slice(1)] ?? 0; window.scrollTo({top:Math.max(0,y * (window.swarm?.vp.s ?? 1) - 90),behavior:"smooth"}); } : undefined,
    className: "el-text",
    style: {
      left: e.x + e.dx,
      top: e.y + e.dy,
      width: e.w,
      whiteSpace: e.w != null && !t.pre ? "pre-wrap" : "pre",
      fontFamily: fontFamily(t),
      fontSize: e.size,
      fontWeight: t.weight,
      lineHeight: `${lineHeight(t, e.size)}px`,
      letterSpacing: `${t.ls ?? 0}em`,
      color: t.color,
      textAlign: e.align
    },
    children: [n, e.editing && !e.selAll && jsxRuntime.jsx("span", {
      className: "caret",
      style: {
        height: e.size * 1.15
      }
    })]
  });
}, (e, t) => e.v === t.v);
const RectElement = React.memo(({
  el: e
}) => {
  var r, l;
  if (!e.vis) return null;
  const t = ((r = e.draw) == null ? void 0 : r.w) ?? e.w,
    n = ((l = e.draw) == null ? void 0 : l.h) ?? e.h;
  return jsxRuntime.jsx("div", {
    className: "el-rect",
    style: {
      left: e.x + e.dx,
      top: e.y + e.dy,
      width: t,
      height: n,
      background: e.styled ? e.fill : "#d9d9d9",
      borderRadius: e.styled ? e.r : 0,
      boxShadow: e.styled && e.stroke ? `inset 0 0 0 1px ${e.stroke}` : "none"
    }
  });
}, (e, t) => e.v === t.v);
const PathElement = React.memo(({
  el: e
}) => {
  if (!e.vis || e.placed === 0) return null;
  if (e.d && e.tf) {
    const r = Math.min(1, (e.placed - 1) / e.pts.length);
    return jsxRuntime.jsx("path", {
      d: e.d,
      transform: `translate(${e.tf.x} ${e.tf.y}) scale(${e.tf.s})`,
      pathLength: 1,
      strokeDasharray: "1 1",
      strokeDashoffset: 1 - r,
      stroke: e.stroke,
      strokeWidth: 1.2 / e.tf.s,
      fill: e.fill,
      fillOpacity: e.fillOn ? 1 : 0,
      style: {
        transition: "fill-opacity 220ms ease, stroke-dashoffset 120ms linear"
      }
    });
  }
  const n = e.pts.slice(0, e.placed).map((r, l) => `${l ? "L" : "M"}${r.x} ${r.y}`).join(" ") + (e.shut ? " Z" : "");
  return jsxRuntime.jsx("path", {
    d: n,
    stroke: e.stroke,
    strokeWidth: e.sw,
    fill: e.fill ?? "none",
    fillOpacity: e.fillOn ? 1 : 0,
    style: {
      transition: "fill-opacity 220ms ease"
    },
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "miter",
    strokeLinecap: "square"
  });
}, (e, t) => e.v === t.v);
function SceneElements({
  els: e,
  height: t
}) {
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [e.map(n => n.kind === "rect" ? jsxRuntime.jsx(RectElement, {
      el: n,
      v: n.v
    }, n.id) : null), jsxRuntime.jsx("svg", {
      className: "paths",
      width: SCENE_WIDTH,
      height: t,
      children: e.map(n => n.kind === "path" ? jsxRuntime.jsx(PathElement, {
        el: n,
        v: n.v
      }, n.id) : null)
    }), e.map(n => n.kind === "text" ? jsxRuntime.jsx(TextElement, {
      el: n,
      v: n.v
    }, n.id) : null)]
  });
}
function SceneCanvas({
  engine: e
}) {
  const {
      s: t,
      left: n
    } = e.vp,
    r = e.list.filter(l => !l.sticky);
  return jsxRuntime.jsx("div", {
    className: "canvas",
    style: {
      width: SCENE_WIDTH,
      height: e.height,
      transform: `translateX(${n}px) scale(${t})`
    },
    children: jsxRuntime.jsx(SceneElements, {
      els: r,
      height: e.height
    })
  });
}
function StickyNavigation({
  engine: e
}) {
  const {
      s: t,
      left: n
    } = e.vp,
    r = e.list.filter(i => i.sticky),
    l = r.some(i => i.vis);
  return jsxRuntime.jsxs("div", {
    className: "nav-sticky",
    style: {
      marginTop: hi * t,
      height: mu * t,
      top: Be * e.rulers.t
    },
    children: [l && jsxRuntime.jsx("div", {
      className: "nav-backdrop"
    }), jsxRuntime.jsx("div", {
      className: "nav-canvas",
      style: {
        width: SCENE_WIDTH,
        transform: `translateX(${n}px) scale(${t}) translateY(${-hi}px)`
      },
      children: jsxRuntime.jsx(SceneElements, {
        els: r,
        height: hi + mu + 30
      })
    })]
  });
}
function EditorOverlay({
  engine: e
}) {
  const {
      s: t,
      left: n,
      vw: r,
      scrollY: l
    } = e.vp,
    i = c => n + c * t,
    o = c => c * t,
    s = e.height * t,
    u = [],
    a = [];
  let p = 0;
  for (const c of e.list) {
    if (c.kind === "guide" && c.vis && c.op > 0) {
      const h = c.flash > 0 ? `drop-shadow(0 0 ${2 + c.flash * 3}px ${rt})` : void 0,
        v = 1 + c.flash;
      u.push(c.axis === "x" ? jsxRuntime.jsx("line", {
        x1: i(c.cur),
        x2: i(c.cur),
        y1: 0,
        y2: s,
        stroke: rt,
        strokeWidth: v,
        opacity: c.op,
        style: {
          filter: h
        }
      }, p++) : jsxRuntime.jsx("line", {
        x1: 0,
        x2: r,
        y1: o(c.cur),
        y2: o(c.cur),
        stroke: rt,
        strokeWidth: v,
        opacity: c.op,
        style: {
          filter: h
        }
      }, p++));
    }
    if (c.kind === "path" && c.edit) {
      const h = c.sticky ? e.stick : 0,
        v = c.pts.slice(0, c.placed).map(d => ({
          x: i(d.x),
          y: o(d.y + h)
        })),
        w = c.owner != null ? e.cursors.find(d => d.id === c.owner) : null,
        T = [...v, ...(w ? [{
          x: i(w.x),
          y: o(w.y + h)
        }] : [])];
      u.push(jsxRuntime.jsx("polyline", {
        points: T.map(d => `${d.x},${d.y}`).join(" ") + (c.shut ? ` ${v[0].x},${v[0].y}` : ""),
        fill: "none",
        stroke: qt,
        strokeWidth: 1.5
      }, p++)), v.forEach(d => u.push(jsxRuntime.jsx("circle", {
        cx: d.x,
        cy: d.y,
        r: 3.6,
        fill: "#fff",
        stroke: qt,
        strokeWidth: 1.5
      }, p++)));
    }
  }
  const m = e.rulers.t;
  for (const c of e.cursors) {
    if (!c.ov) continue;
    const h = v => (v + (c.sticky ? e.stick : 0)) * t;
    for (const v of c.ov()) if (v.t === "box") {
      const w = i(v.b.x),
        T = h(v.b.y),
        d = v.b.w * t,
        f = v.b.h * t,
        y = v.color === "red" ? rt : qt;
      if (u.push(jsxRuntime.jsx("rect", {
        x: w,
        y: T,
        width: d,
        height: f,
        fill: "none",
        stroke: y,
        strokeWidth: 1
      }, p++)), v.underline && v.underline.w > 0) {
        const g = v.underline;
        u.push(jsxRuntime.jsx("line", {
          x1: i(g.x),
          x2: i(g.x + g.w),
          y1: h(g.y),
          y2: h(g.y),
          stroke: qt,
          strokeWidth: 1.5
        }, p++));
      }
      if (v.rulerLines && m > .05 && u.push(jsxRuntime.jsxs("g", {
        stroke: qt,
        strokeWidth: 1,
        strokeDasharray: "2 2",
        opacity: m,
        children: [jsxRuntime.jsx("line", {
          x1: Be,
          x2: w,
          y1: T + f / 2,
          y2: T + f / 2
        }), jsxRuntime.jsx("line", {
          x1: w + d / 2,
          x2: w + d / 2,
          y1: l + Be,
          y2: T
        })]
      }, p++)), v.handles) for (const [g, E] of [[w, T], [w + d, T], [w, T + f], [w + d, T + f]]) u.push(jsxRuntime.jsx("rect", {
        x: g - 3.5,
        y: E - 3.5,
        width: 7,
        height: 7,
        fill: "#fff",
        stroke: qt,
        strokeWidth: 1
      }, p++));
      v.badge && d > 0 && a.push(jsxRuntime.jsx("div", {
        className: "badge",
        style: {
          left: w + d / 2,
          top: T + f + 8,
          background: y
        },
        children: v.badge
      }, p++));
    } else {
      const w = {
          x: i(v.a.x),
          y: h(v.a.y)
        },
        T = {
          x: i(v.b.x),
          y: h(v.b.y)
        };
      u.push(jsxRuntime.jsx("line", {
        x1: w.x,
        y1: w.y,
        x2: T.x,
        y2: T.y,
        stroke: rt,
        strokeWidth: 1
      }, p++));
      const d = w.y === T.y;
      a.push(jsxRuntime.jsx("div", {
        className: "badge",
        style: {
          left: d ? (w.x + T.x) / 2 : w.x + 18,
          top: d ? w.y + 8 : (w.y + T.y) / 2 - 9,
          background: rt
        },
        children: v.label
      }, p++));
    }
  }
  return jsxRuntime.jsxs("div", {
    className: "overlay",
    style: {
      height: s
    },
    children: [jsxRuntime.jsx("svg", {
      width: r,
      height: s,
      children: u
    }), a]
  });
}
function CursorLayer({
  engine: e
}) {
  const {
    s: t,
    left: n
  } = e.vp;
  return jsxRuntime.jsx("div", {
    className: "cursors",
    style: {
      height: e.height * t
    },
    children: e.cursors.map(r => jsxRuntime.jsx(Cursor, {
      c: r,
      X: n + r.x * t,
      Y: (r.y + (r.sticky ? e.stick : 0)) * t
    }, r.id))
  });
}
function Rulers({
  engine: e
}) {
  const t = e.rulers.t;
  if (t <= .001) return null;
  const {
      s: n,
      left: r,
      vw: l,
      vh: i,
      scrollY: o
    } = e.vp,
    s = n > .6 ? 100 : n > .3 ? 200 : 500,
    u = [],
    a = [],
    p = Math.floor(-r / n / s) * s;
  for (let c = p; r + c * n < l; c += s / 2) {
    const h = r + c * n,
      v = c % s === 0;
    u.push(jsxRuntime.jsx("line", {
      x1: h,
      x2: h,
      y1: v ? 13 : 16,
      y2: Be,
      stroke: "#5E5E5E"
    }, "t" + c)), v && u.push(jsxRuntime.jsx("text", {
      x: h + 3,
      y: 11,
      className: "rtext",
      children: c
    }, "l" + c));
  }
  const m = Math.floor(o / n / s) * s;
  for (let c = m; c * n - o < i; c += s / 2) {
    const h = c * n - o,
      v = c % s === 0;
    a.push(jsxRuntime.jsx("line", {
      y1: h,
      y2: h,
      x1: v ? 13 : 16,
      x2: Be,
      stroke: "#5E5E5E"
    }, "t" + c)), v && a.push(jsxRuntime.jsx("text", {
      x: 11,
      y: h - 3,
      className: "rtext",
      transform: `rotate(-90 11 ${h - 3})`,
      children: c
    }, "l" + c));
  }
  for (const c of e.cursors) if (c.ov) for (const h of c.ov()) {
    if (h.t !== "box" || !h.handles) continue;
    const v = r + h.b.x * n,
      w = r + (h.b.x + h.b.w) * n,
      T = h.b.y * n - o,
      d = (h.b.y + h.b.h) * n - o;
    u.unshift(jsxRuntime.jsx("rect", {
      x: v,
      y: 0,
      width: w - v,
      height: Be,
      fill: "rgba(13,153,255,0.22)"
    }, "s" + c.id)), u.push(jsxRuntime.jsx("text", {
      x: v + 3,
      y: 11,
      className: "rtext rsel",
      children: Math.round(h.b.x)
    }, "sa" + c.id)), a.unshift(jsxRuntime.jsx("rect", {
      y: T,
      x: 0,
      height: d - T,
      width: Be,
      fill: "rgba(13,153,255,0.22)"
    }, "s" + c.id));
  }
  for (const c of e.list) if (!(c.kind !== "guide" || !c.dragging)) if (c.axis === "x") {
    const h = r + c.cur * n;
    u.push(jsxRuntime.jsx("line", {
      x1: h,
      x2: h,
      y1: 0,
      y2: Be,
      stroke: rt
    }, "g" + c.id)), u.push(jsxRuntime.jsx("text", {
      x: h + 4,
      y: 11,
      className: "rtext",
      fill: rt,
      children: Math.round(c.cur)
    }, "gl" + c.id));
  } else {
    const h = c.cur * n - o;
    a.push(jsxRuntime.jsx("line", {
      y1: h,
      y2: h,
      x1: 0,
      x2: Be,
      stroke: rt
    }, "g" + c.id));
  }
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", {
      className: "ruler ruler-top",
      style: {
        transform: `translateY(${(t - 1) * 100}%)`
      },
      children: jsxRuntime.jsx("svg", {
        width: l,
        height: Be,
        children: u
      })
    }), jsxRuntime.jsx("div", {
      className: "ruler ruler-left",
      style: {
        transform: `translateX(${(t - 1) * 100}%)`
      },
      children: jsxRuntime.jsx("svg", {
        width: Be,
        height: i,
        children: a
      })
    }), jsxRuntime.jsx("div", {
      className: "ruler-corner",
      style: {
        opacity: t
      }
    })]
  });
}
function SwarmPage() {
  const [e, t] = React.useState(null),
    [, n] = React.useState(0);
  return React.useEffect(() => {
    "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0);
    const r = ["400 16px Inter", "500 16px Inter", "600 16px Inter", '400 16px "JetBrains Mono"', '500 16px "JetBrains Mono"'],
      l = new Promise(i => setTimeout(i, 2500));
    Promise.race([Promise.all(r.map(i => document.fonts.load(i))), l]).then(() => t(new SwarmEngine()));
  }, []), React.useEffect(() => {
    if (!e) return;
    const r = () => {
      const m = document.documentElement.clientWidth,
        c = Math.min(1, m / SCENE_WIDTH);
      e.vp.vw = m, e.vp.vh = window.innerHeight, e.vp.s = c, e.vp.left = (m - SCENE_WIDTH * c) / 2;
    };
    window.swarm = e;
    const l = () => e.setScroll(window.scrollY);
    r();
    e.vp.scrollY = window.scrollY;
    window.addEventListener("resize", r);
    window.addEventListener("scroll", l, { passive: true });
    const o = m => {
        e.mouse = {
          x: m.clientX,
          y: m.clientY
        };
      },
      s = () => {
        e.mouse = null;
      };
    window.addEventListener("pointermove", o, {
      passive: !0
    }), document.documentElement.addEventListener("pointerleave", s);
    let u = 0,
      a = performance.now();
    const p = m => {
      e.step((m - a) / 1e3), a = m, n(c => c + 1), u = requestAnimationFrame(p);
    };
    return u = requestAnimationFrame(p), () => {
      cancelAnimationFrame(u), window.removeEventListener("resize", r), window.removeEventListener("scroll", l), window.removeEventListener("pointermove", o), document.documentElement.removeEventListener("pointerleave", s);
    };
  }, [e]), e ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs("div", {
      className: "page",
      style: {
        height: e.height * e.vp.s
      },
      children: [jsxRuntime.jsx(StickyNavigation, {
        engine: e
      }), jsxRuntime.jsx(SceneCanvas, {
        engine: e
      }), jsxRuntime.jsx("div", {
        className: "intro-logo" + (e.started ? " gone" : ""),
        "aria-hidden": !0,
        children: jsxRuntime.jsx("svg", {
          viewBox: "0 0 120 140",
          width: 60,
          height: 70,
          children: zc.map((r, l) => jsxRuntime.jsx("path", {
            d: r.d,
            fill: palette.line
          }, l))
        })
      }), jsxRuntime.jsx(EditorOverlay, {
        engine: e
      }), jsxRuntime.jsx(CursorLayer, {
        engine: e
      })]
    }), jsxRuntime.jsx(Rulers, {
      engine: e
    })]
  }) : null;
}
export default SwarmPage;
