const screens = [...document.querySelectorAll(".screen")];
const journeySteps = [...document.querySelectorAll(".journey li")];
const loadingLayer = document.getElementById("loadingLayer");
const toast = document.getElementById("toast");
const experienceSidebar = document.getElementById("experienceSidebar");
const decisionPanel = document.getElementById("decisionPanel");
const mobileGuideButton = document.getElementById("mobileGuideButton");
const mobileGuideLabel = document.getElementById("mobileGuideLabel");
const guideOverlay = document.getElementById("guideOverlay");

function syncGuideOverlay() {
  const open = experienceSidebar.classList.contains("open") || decisionPanel.classList.contains("open");
  guideOverlay.classList.toggle("show", open);
  guideOverlay.setAttribute("aria-hidden", String(!open));
}

function setGuideOpen(open) {
  experienceSidebar.classList.toggle("open", open);
  if (open) decisionPanel.classList.remove("open");
  mobileGuideButton.setAttribute("aria-expanded", String(open));
  mobileGuideLabel.setAttribute("aria-expanded", "false");
  mobileGuideButton.textContent = open ? "×" : "☰";
  syncGuideOverlay();
}

function setDecisionOpen(open) {
  decisionPanel.classList.toggle("open", open);
  if (open) experienceSidebar.classList.remove("open");
  mobileGuideLabel.setAttribute("aria-expanded", String(open));
  mobileGuideButton.setAttribute("aria-expanded", "false");
  mobileGuideButton.textContent = "☰";
  syncGuideOverlay();
}

function closeMobilePanels() {
  setGuideOpen(false);
  setDecisionOpen(false);
}

mobileGuideButton.addEventListener("click", () => setGuideOpen(!experienceSidebar.classList.contains("open")));
mobileGuideLabel.addEventListener("click", () => setDecisionOpen(!decisionPanel.classList.contains("open")));
guideOverlay.addEventListener("click", closeMobilePanels);

const shoeData = {
  ballet: {
    image: "./assets/look-ballet.png",
    name: "Oxblood ballet",
    shortName: "Ballet flats",
    reason: "Refines the curve",
    price: 89,
  },
  loafer: {
    image: "./assets/look-loafer.png",
    name: "Black loafer",
    shortName: "Black loafers",
    reason: "Sharpens the look",
    price: 118,
  },
  sneaker: {
    image: "./assets/look-sneaker.png",
    name: "Retro sneaker",
    shortName: "Retro sneakers",
    reason: "Easy all-day wear",
    price: 95,
  },
};

const productData = {
  trousers: {
    brand: "ATELIER NORTH",
    name: "Sculpted wool balloon trousers",
    price: 129,
    color: "Charcoal",
    material: "Wool blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#4a4a48",
    imagePosition: "50% 58%",
    image: "./assets/feed-look.png",
    canTryOn: true,
  },
  jacket: {
    brand: "NORTH & LANE",
    name: "Cropped leather jacket",
    price: 218,
    color: "Oxblood",
    material: "Leather",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#6f202b",
    imagePosition: "50% 25%",
    image: "./assets/feed-look.png",
  },
  bag: {
    brand: "MARA STUDIO",
    name: "Mini crescent shoulder bag",
    price: 110,
    color: "Black",
    material: "Leather",
    sizes: ["One size"],
    swatch: "#171715",
    imagePosition: "37% 31%",
    image: "./assets/feed-look.png",
  },
  boots: {
    brand: "ARC / 01",
    name: "Square-toe ankle boots",
    price: 146,
    color: "Black",
    material: "Leather",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#202020",
    imagePosition: "52% 90%",
    image: "./assets/feed-look.png",
  },
  london_jacket: {
    brand: "NORTH & LANE",
    name: "Cropped cocoa jacket",
    price: 164,
    color: "Warm cocoa",
    material: "Brushed wool blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#745142",
    imagePosition: "50% 27%",
    image: "./assets/look-ballet.png",
    source: "Recommended for your London look",
  },
  london_shoes: {
    brand: "MAISON RUE",
    name: "Oxblood ballet flats",
    price: 89,
    color: "Oxblood",
    material: "Leather",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#701b2b",
    imagePosition: "50% 95%",
    image: "./assets/look-ballet.png",
    source: "Recommended for your London look",
  },
  london_loafer: {
    brand: "NORTH & LANE",
    name: "Black leather loafers",
    price: 118,
    color: "Black",
    material: "Leather",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#171715",
    imagePosition: "50% 95%",
    image: "./assets/look-loafer.png",
    source: "Recommended for your London look",
  },
  london_sneaker: {
    brand: "RUE MARCHE",
    name: "Retro walking sneakers",
    price: 95,
    color: "Cream",
    material: "Leather and suede",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#ded4c2",
    imagePosition: "50% 95%",
    image: "./assets/look-sneaker.png",
    source: "Recommended for your London look",
  },
  london_alt_jacket: {
    brand: "NORTH & LANE",
    name: "Dusty blue cropped jacket",
    price: 168,
    color: "Dusty blue",
    material: "Brushed wool blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#6f7f8d",
    imagePosition: "50% 27%",
    image: "./assets/look-alt-jacket.png",
    source: "Recommended for your London look",
  },
  london_alt_top: {
    brand: "STUDIO ARDEN",
    name: "Powder-blue mock-neck knit",
    price: 92,
    color: "Powder blue",
    material: "Fine rib knit",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#aab9c4",
    imagePosition: "50% 30%",
    image: "./assets/look-alt-top.png",
    source: "Recommended for your London look",
  },
  london_alt_bag: {
    brand: "MARA STUDIO",
    name: "Burgundy shoulder bag",
    price: 120,
    color: "Burgundy",
    material: "Leather",
    sizes: ["One size"],
    swatch: "#682c3a",
    imagePosition: "34% 32%",
    image: "./assets/look-alt-bag.png",
    source: "Recommended for your London look",
  },
  paris_jacket: {
    brand: "RIVE ATELIER",
    name: "Cropped rain trench",
    price: 179,
    color: "Sand beige",
    material: "Water-resistant cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#c6aa82",
    imagePosition: "50% 28%",
    image: "./assets/look-paris.png",
    source: "Recommended for your Paris look",
  },
  paris_shoes: {
    brand: "RUE MARCHE",
    name: "Retro walking sneakers",
    price: 95,
    color: "Cream",
    material: "Leather and suede",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#ded4c2",
    imagePosition: "50% 95%",
    image: "./assets/look-paris.png",
    source: "Recommended for your Paris look",
  },
  paris_maryjane: {
    brand: "MAISON RUE",
    name: "Burgundy Mary Jane flats",
    price: 108,
    color: "Dark burgundy",
    material: "Leather",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    swatch: "#681f2c",
    imagePosition: "50% 95%",
    image: "./assets/look-paris-maryjane.png",
    source: "Recommended for your Paris look",
  },
  paris_alt_jacket: {
    brand: "RIVE ATELIER",
    name: "Navy cropped rain jacket",
    price: 184,
    color: "Deep navy",
    material: "Water-resistant cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#273947",
    imagePosition: "50% 28%",
    image: "./assets/look-paris-alt-jacket.png",
    source: "Recommended for your Paris look",
  },
  paris_alt_top: {
    brand: "STUDIO ARDEN",
    name: "Moss rib knit",
    price: 88,
    color: "Moss green",
    material: "Fine rib knit",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "#66705a",
    imagePosition: "50% 30%",
    image: "./assets/look-paris-alt-top.png",
    source: "Recommended for your Paris look",
  },
  paris_alt_bag: {
    brand: "MARA STUDIO",
    name: "Black structured crossbody",
    price: 124,
    color: "Black",
    material: "Leather",
    sizes: ["One size"],
    swatch: "#20201f",
    imagePosition: "34% 32%",
    image: "./assets/look-paris-alt-bag.png",
    source: "Recommended for your Paris look",
  },
};

const noteData = {
  mara: {
    image: "./assets/feed-look.png",
    alt: "Creator wearing charcoal balloon trousers on a London street",
    creator: "@mara.moves",
    initial: "M",
    location: "London, UK",
    caption: "Soft structure for a rainy London afternoon. The trousers do all the work.",
    likes: "8.2k",
    comments: "246",
  },
  naya: {
    image: "./assets/look-ballet.png",
    alt: "Creator styling balloon trousers with oxblood ballet flats",
    creator: "@naya.styles",
    initial: "N",
    location: "Manchester, UK",
    caption: "One trouser, three ways I’d actually wear it. Starting with the softer everyday version.",
    likes: "3.1k",
    comments: "118",
  },
  ana: {
    image: "./assets/look-loafer.png",
    alt: "Creator styling balloon trousers with black loafers",
    creator: "@ana.edits",
    initial: "A",
    location: "London, UK",
    caption: "The polished workday version: grounded with a loafer and one clean cropped layer.",
    likes: "1.8k",
    comments: "74",
  },
  theo: {
    image: "./assets/look-sneaker.png",
    alt: "Creator styling balloon trousers with retro sneakers",
    creator: "@theo.wears",
    initial: "T",
    location: "Brighton, UK",
    caption: "The everyday version, with sneakers. Same shape, less effort, ready for a full day out.",
    likes: "956",
    comments: "39",
  },
};

let selectedProduct = "trousers";
let currentNote = "mara";
let productReturnScreen = "feed";
let selectedLookItemKey = null;

let currentScreen = "market";
const caseChapterOrder = ["market", "feed", "product", "tryon", "look", "mylooks", "lookdetail"];
const caseGuide = {
  market: {
    number: "01 / 07",
    kicker: "穿搭浏览",
    title: "穿搭浏览页",
    summary: "当季趋势使用大 Banner 作为专题入口，下方双列笔记流承接日常个性化推荐",
    points: [
      "Banner 展示当季穿搭趋势",
      "双列笔记流提供个性化穿搭推荐",
      "Explore 进入对应主题的穿搭详情",
    ],
    decision: "内容浏览和商品购买使用同一条路径，用户可以从喜欢的造型继续了解其中的商品",
    try: "点击 Explore 进入穿搭详情（页面内其他内容仅作展示，无法点击）",
  },
  feed: {
    number: "02 / 07",
    kicker: "穿搭详情",
    title: "穿搭详情页",
    summary: "点击人物身上的商品标记，查看这套穿搭中的外套、包、裤子和鞋",
    points: [
      "查看整套穿搭的上身效果",
      "点击商品标记查看名称和价格",
      "打开商品卡继续查看详情或试穿",
    ],
    decision: "将完整造型和单件商品放在同一页面，用户可以从整体效果继续了解感兴趣的单品",
    try: "点击人物身上的气球裤标记，打开商品卡",
  },
  feedProduct: {
    number: "02 / 07",
    kicker: "穿搭详情",
    title: "查看单品信息",
    summary: "商品卡集中展示价格、材质、尺码，并提供商品详情和个人试穿入口",
    points: [
      "查看商品名称、价格和基础属性",
      "Product details 进入完整商品页",
      "Try on me 将商品穿到个人 Avatar 上",
    ],
    decision: "商品信息和试穿入口放在同一张卡片中，减少从内容浏览到购买决策的跳转",
    try: "气球裤可以继续试穿，其他单品可以查看商品详情",
  },
  product: {
    number: "03 / 07",
    kicker: "商品详情",
    title: "商品详情页",
    summary: "集中展示商品图、价格、颜色、尺码、配送和退换信息",
    points: [
      "选择颜色与尺码",
      "加入购物车后返回浏览页",
      "也可以直接购买",
    ],
    decision: "把购买所需的信息集中在一个页面，减少在试穿与交易之间来回确认",
    try: "选择尺码后加入购物车或直接购买",
  },
  tryon: {
    number: "04 / 07",
    kicker: "单品试穿",
    title: "单品试衣间",
    summary: "系统根据用户上传的照片、身高和体型数据生成个人 Avatar，让气球裤直接穿到自己身上",
    points: [
      "拖动 Avatar 查看不同角度",
      "查看商品详情或直接加入购物车",
      "Style this item：围绕这件气球裤生成一套完整穿搭",
    ],
    decision: "试穿帮助用户判断版型、长度和身体比例，降低购买前的不确定感",
    try: "左右拖动人物，也可以查看详情、加入购物车，或点击 Style this item 生成整套穿搭",
  },
  look: {
    number: "05 / 07",
    kicker: "完整穿搭",
    title: "完整穿搭试衣间",
    summary: "气球裤保持锁定，系统结合用户身材、风格、衣橱和使用场景生成完整穿搭",
    points: [
      "顶部展示并支持修改穿搭场景",
      "人物区域预览整套上身效果",
      "外套、上衣、包和鞋都可以重新推荐",
    ],
    decision: "完整穿搭可以继续调整，用户保留满意的部分，只替换不满意的单品",
    try: "点击外套的 Try another，选择换颜色或换版型，也可以自由输入；提交后换上新的推荐",
  },
  mylooks: {
    number: "06 / 07",
    kicker: "穿搭收藏",
    title: "个人穿搭收藏",
    summary: "My Looks 把试衣间里生成的造型保存成个人穿搭库，方便继续查看、重新搭配或购买",
    points: [
      "按日常、旅行和通勤筛选",
      "每张卡保留完整形象与场景",
      "点击卡片进入穿搭详情和购买清单",
    ],
    decision: "保存对象是一套完整形象，用户可以把灵感持续积累为自己的穿搭库",
    try: "打开 Paris city walk，查看这套穿搭的商品构成",
  },
  lookdetail: {
    number: "07 / 07",
    kicker: "购买清单",
    title: "穿搭详情与购买清单",
    summary: "上方保留完整形象，下方把这套穿搭拆成可购买推荐和用户已有单品",
    points: [
      "推荐购买的商品放在上方",
      "用户已经拥有的单品放在下方",
      "支持单件选择，也支持整套结算优惠",
    ],
    decision: "穿搭按整套保存，购买精确到单品，让用户保留造型灵感，同时只为真正需要的部分付费",
    try: "单独勾选喜欢的商品，或全选查看整套 10% 优惠",
  },
};
let currentLookShoe = "ballet";
let selectedShoe = null;
let shoeBaseline = "ballet";
let compareRestore = null;
let shoeInBag = false;
let toastTimer;

function guideKeyForScreen(screenName) {
  if (screenName === "market") return "market";
  if (screenName === "feed") return "feed";
  if (screenName === "product") return "product";
  if (screenName === "mylooks") return "mylooks";
  if (screenName === "lookdetail") return "lookdetail";
  if (["look", "shoes"].includes(screenName)) return "look";
  if (screenName === "tryon") return isStyledLook ? "look" : "tryon";
  return "market";
}

function guideStateForScreen(screenName) {
  if (screenName === "feed" && document.getElementById("productSheet").classList.contains("is-open")) return "feedProduct";
  if (screenName === "product") return "product";
  if (screenName === "lookdetail") return "lookdetail";
  return guideKeyForScreen(screenName);
}

function syncCaseGuide(screenName = currentScreen) {
  const guideKey = guideKeyForScreen(screenName);
  const guide = caseGuide[guideStateForScreen(screenName)];
  const index = caseChapterOrder.indexOf(guideKey);
  journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === guideKey));
  document.getElementById("caseChapterNumber").textContent = guide.number;
  document.getElementById("caseKicker").textContent = guide.kicker;
  document.getElementById("caseTitle").textContent = guide.title;
  document.getElementById("caseSummary").textContent = guide.summary;
  document.getElementById("casePoint1").textContent = guide.points[0];
  document.getElementById("casePoint2").textContent = guide.points[1];
  document.getElementById("casePoint3").textContent = guide.points[2];
  document.getElementById("caseDecision").textContent = guide.decision;
  document.getElementById("caseTry").textContent = guide.try;
  document.getElementById("caseProgressBar").style.width = `${((index + 1) / caseChapterOrder.length) * 100}%`;
  document.getElementById("casePrev").disabled = index === 0;
  const nextButton = document.getElementById("caseNext");
  nextButton.disabled = index === caseChapterOrder.length - 1;
  nextButton.innerHTML = index === caseChapterOrder.length - 1 ? "演示结束" : `下一步 <span>→</span>`;
  const activeLabel = journeySteps[index]?.querySelector("b")?.textContent || guide.kicker;
  mobileGuideLabel.textContent = `${String(index + 1).padStart(2, "0")} · ${activeLabel}`;
}

function navigateCaseChapter(guideKey) {
  closeMobilePanels();
  if (guideKey === "market") {
    goTo("market");
    return;
  }
  if (guideKey === "feed") {
    openOutfitNote("mara");
    return;
  }
  if (guideKey === "product") {
    openOutfitNote("mara");
    openProduct("trousers");
    document.getElementById("viewProductBtn").click();
    return;
  }
  if (guideKey === "tryon") {
    resetFittingRoom();
    goTo("tryon");
    return;
  }
  if (guideKey === "look") {
    renderFittingLook("london");
    goTo("tryon");
    return;
  }
  if (guideKey === "mylooks") {
    renderMyLooks();
    goTo("mylooks");
    return;
  }
  renderSavedLookDetail("paris");
  goTo("lookdetail");
}

function goTo(screenName) {
  const device = document.querySelector(".device");
  device.scrollTop = 0;
  device.scrollLeft = 0;
  document.getElementById("productSheet").classList.remove("is-open");
  document.getElementById("productScrim").classList.remove("is-open");
  document.getElementById("checkoutSheet")?.classList.remove("is-open");
  document.getElementById("checkoutScrim")?.classList.remove("is-open");
  currentScreen = screenName;
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === screenName));
  const journeyScreen = guideKeyForScreen(screenName);
  journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === journeyScreen));
  syncCaseGuide(screenName);
}

document.querySelectorAll("[data-case-step]").forEach((button) => {
  button.addEventListener("click", () => navigateCaseChapter(button.dataset.caseStep));
});

document.getElementById("casePrev").addEventListener("click", () => {
  const index = caseChapterOrder.indexOf(guideKeyForScreen(currentScreen));
  if (index > 0) navigateCaseChapter(caseChapterOrder[index - 1]);
});

document.getElementById("caseNext").addEventListener("click", () => {
  const index = caseChapterOrder.indexOf(guideKeyForScreen(currentScreen));
  if (index < caseChapterOrder.length - 1) navigateCaseChapter(caseChapterOrder[index + 1]);
});

function openOutfitNote(noteKey) {
  const note = noteData[noteKey] || noteData.mara;
  currentNote = noteKey in noteData ? noteKey : "mara";
  selectedProduct = "trousers";
  selectedLookItemKey = null;
  const feedImage = document.getElementById("feedHeroImage");
  feedImage.src = note.image;
  feedImage.alt = note.alt;
  const visual = document.getElementById("feedVisual");
  visual.dataset.note = currentNote;
  visual.classList.remove("is-inspecting");
  document.getElementById("shopLookBtn").classList.remove("inspecting");
  document.getElementById("shopLookLabel").textContent = "Shop the look";
  document.getElementById("noteCreatorAvatar").textContent = note.initial;
  document.getElementById("noteCreator").textContent = note.creator;
  document.getElementById("noteLocation").textContent = note.location;
  document.getElementById("noteCaption").textContent = note.caption;
  document.getElementById("noteLikes").textContent = `♡ ${note.likes}`;
  document.getElementById("noteComments").textContent = `◯ ${note.comments}`;
  document.getElementById("productSource").textContent = `From ${note.creator}’s look`;
  const fittingSource = document.getElementById("fittingSource");
  if (fittingSource) fittingSource.textContent = `FROM ${note.creator.toUpperCase()}`;
  goTo("feed");
}

document.querySelectorAll("[data-open-look]").forEach((entry) => {
  entry.addEventListener("click", () => openOutfitNote(entry.dataset.openLook));
});

document.querySelectorAll(".market-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".market-tabs button").forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

document.querySelectorAll(".browse-chips button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".browse-chips button").forEach((item) => item.classList.toggle("is-active", item === button));
  });
});
document.querySelector(".back-market").addEventListener("click", () => goTo("market"));

function showLoading(next, copy = "Fitting it to you") {
  loadingLayer.querySelector("b").textContent = copy;
  document.getElementById("loadingAnalysis").classList.remove("is-visible");
  loadingLayer.classList.add("is-active");
  window.setTimeout(() => {
    next();
    loadingLayer.classList.remove("is-active");
  }, 1050);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1900);
}

const feedVisual = document.getElementById("feedVisual");
const shopLookBtn = document.getElementById("shopLookBtn");
const shopLookLabel = document.getElementById("shopLookLabel");
shopLookBtn.addEventListener("click", () => {
  const inspecting = feedVisual.classList.toggle("is-inspecting");
  shopLookBtn.classList.toggle("inspecting", inspecting);
  shopLookLabel.textContent = inspecting ? "Hide items" : "Shop the look";
});

const productSheet = document.getElementById("productSheet");
const productScrim = document.getElementById("productScrim");
function openProduct(productKey) {
  const product = productData[productKey];
  selectedProduct = productKey;
  selectedLookItemKey = null;
  productReturnScreen = "feed";
  document.getElementById("productBrand").textContent = product.brand;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = `£${product.price}`;
  document.getElementById("productColor").textContent = product.color;
  document.getElementById("productMaterial").textContent = product.material;
  document.getElementById("productSizes").textContent = product.sizes.length === 1 ? product.sizes[0] : `${product.sizes[0]}–${product.sizes[product.sizes.length - 1]}`;
  document.getElementById("productSwatch").style.background = product.swatch;
  const quickImage = document.getElementById("quickProductImage");
  quickImage.src = product.image || "./assets/feed-look.png";
  quickImage.style.objectPosition = product.imagePosition;
  quickImage.alt = product.name;
  const tryButton = document.getElementById("tryOnBtn");
  tryButton.innerHTML = "Try on me <span>→</span>";
  tryButton.disabled = !product.canTryOn;
  productSheet.classList.add("is-open");
  productScrim.classList.add("is-open");
  syncCaseGuide("feed");
}

document.querySelectorAll("[data-product]").forEach((hotspot) => {
  hotspot.addEventListener("click", () => openProduct(hotspot.dataset.product));
});
productScrim.addEventListener("click", () => {
  productSheet.classList.remove("is-open");
  productScrim.classList.remove("is-open");
  syncCaseGuide("feed");
});

function startSelectedTryOn() {
  productSheet.classList.remove("is-open");
  productScrim.classList.remove("is-open");
  syncCaseGuide("feed");
  resetFittingRoom();
  showLoading(() => goTo("tryon"));
}

document.getElementById("viewProductBtn").addEventListener("click", () => {
  const product = productData[selectedProduct];
  document.getElementById("pdpBrand").textContent = product.brand;
  document.getElementById("pdpName").textContent = product.name;
  document.getElementById("pdpPrice").textContent = `£${product.price}`;
  document.getElementById("pdpColor").textContent = product.color;
  document.getElementById("pdpColorButton").textContent = product.color;
  document.getElementById("pdpSwatch").style.background = product.swatch;
  const pdpImage = document.getElementById("pdpImage");
  pdpImage.src = product.image || "./assets/feed-look.png";
  pdpImage.style.objectPosition = product.imagePosition;
  pdpImage.alt = product.name;
  document.getElementById("pdpSizes").innerHTML = product.sizes
    .map((size, index) => `<button class="${index === Math.min(1, product.sizes.length - 1) ? "is-selected" : ""}">${size}</button>`)
    .join("");
  document.getElementById("productSource").textContent = product.source || `From ${noteData[currentNote].creator}’s look`;
  const pdpBag = document.getElementById("pdpBagBtn");
  pdpBag.textContent = bagProductKeys.has(selectedProduct) ? "Added ✓" : "＋ Add to bag";
  pdpBag.classList.toggle("is-added", bagProductKeys.has(selectedProduct));
  document.getElementById("pdpPrimaryBtn").innerHTML = "Buy now <span>→</span>";
  goTo("product");
});

document.getElementById("tryOnBtn").addEventListener("click", () => {
  const product = productData[selectedProduct];
  if (product.canTryOn) startSelectedTryOn();
});

document.querySelector(".back-product").addEventListener("click", () => {
  goTo(productReturnScreen);
  if (productReturnScreen === "tryon" && isStyledLook) {
    journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === "look"));
  }
});
document.getElementById("pdpBagBtn").addEventListener("click", () => {
  const product = productData[selectedProduct];
  bagProductKeys.add(selectedProduct);
  const button = document.getElementById("pdpBagBtn");
  button.textContent = "Added ✓";
  button.classList.add("is-added");
  showToast(`${product.name} added to your bag`);
  window.setTimeout(() => goTo("market"), 720);
});
document.getElementById("pdpPrimaryBtn").addEventListener("click", () => {
  openProductCheckout();
});
document.getElementById("pdpSizes").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll("#pdpSizes button").forEach((item) => item.classList.toggle("is-selected", item === button));
});

document.querySelector(".back-feed").addEventListener("click", () => goTo("feed"));
document.querySelector(".back-tryon").addEventListener("click", () => goTo("tryon"));
document.querySelectorAll(".add-trouser").forEach((button) => button.addEventListener("click", () => {
  showToast("Trousers added to your bag");
  window.setTimeout(() => goTo("market"), 720);
}));

const tryonImage = document.getElementById("tryonImage");
const avatarPane = document.getElementById("avatarPane");
const avatarAngles = {
  0: "./assets/avatar-0.png",
  90: "./assets/avatar-90.png",
  180: "./assets/avatar-180.png",
  270: "./assets/avatar-270.png",
};
const angleButtons = [...document.querySelectorAll("[data-angle]")];
const angleOrder = ["0", "90", "180", "270"];
let currentAngle = "0";
let isStyledLook = false;

function setAvatarAngle(angle) {
  if (!avatarAngles[angle] || angle === currentAngle) return;
  currentAngle = angle;
  angleButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.angle === angle));
  tryonImage.style.opacity = "0";
  window.setTimeout(() => {
    tryonImage.src = avatarAngles[angle];
    tryonImage.alt = `Your 3D avatar wearing the balloon trousers, ${angle} degree view`;
    tryonImage.style.opacity = "1";
  }, 150);
}

angleButtons.forEach((button) => button.addEventListener("click", () => setAvatarAngle(button.dataset.angle)));

let dragStartX = 0;
let dragHandled = false;
avatarPane.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button") || isStyledLook) return;
  dragStartX = event.clientX;
  dragHandled = false;
  avatarPane.classList.add("is-turning");
  avatarPane.setPointerCapture(event.pointerId);
});
avatarPane.addEventListener("pointermove", (event) => {
  if (!avatarPane.hasPointerCapture(event.pointerId) || dragHandled) return;
  const distance = event.clientX - dragStartX;
  if (Math.abs(distance) < 36) return;
  const currentIndex = angleOrder.indexOf(currentAngle);
  const nextIndex = (currentIndex + (distance < 0 ? 1 : -1) + angleOrder.length) % angleOrder.length;
  setAvatarAngle(angleOrder[nextIndex]);
  dragHandled = true;
});
function finishAvatarTurn(event) {
  if (avatarPane.hasPointerCapture(event.pointerId)) avatarPane.releasePointerCapture(event.pointerId);
  avatarPane.classList.remove("is-turning");
}
avatarPane.addEventListener("pointerup", finishAvatarTurn);
avatarPane.addEventListener("pointercancel", finishAvatarTurn);

document.getElementById("editFitBtn").addEventListener("click", () => showToast("Fit profile · height, measurements and photos"));
const tryonProductRail = document.getElementById("tryonProductRail");
const tryonActionBar = document.getElementById("tryonActionBar");
const fittingStage = document.getElementById("fittingStage");
const garmentPoints = document.getElementById("garmentPoints");
const activeItemCard = document.getElementById("activeItemCard");
const itemConnector = document.getElementById("itemConnector");
const lookVariantLayers = document.getElementById("lookVariantLayers");

const itemGeometry = {
  jacket: { x: "76%", y: "27%", lineLeft: "45.5%", lineY: "25%", cardTop: "25%" },
  top: { x: "66%", y: "31%", lineLeft: "39.5%", lineY: "29%", cardTop: "29%" },
  bag: { x: "35%", y: "39%", lineLeft: "21%", lineY: "37%", cardTop: "37%" },
  trousers: { x: "75%", y: "57%", lineLeft: "45%", lineY: "54%", cardTop: "54%" },
  shoes: { x: "68%", y: "88%", lineLeft: "41%", lineY: "82%", cardTop: "79%" },
};

const fittingLooks = {
  initial: {
    image: "./assets/avatar-0.png",
    alt: "Your 3D avatar wearing the balloon trousers, front view",
    subtitle: "Your avatar · trousers",
    mode: "EVERYDAY",
    context: "London · 12°C",
    weather: "Light rain",
    items: {
      trousers: { status: "FROM @MARA.MOVES", name: "Balloon trousers", brand: "Atelier North", tone: "tone-slate", chip: "charcoal-chip", details: ["Charcoal", "M Tall", "Length 106 cm"], value: "£129", cta: "View product →", action: "product" },
    },
  },
  london: {
    image: "./assets/look-ballet.png",
    baseImage: "./assets/look-ballet.png",
    alt: "Your avatar in a personalized London everyday look built around the balloon trousers",
    subtitle: "Your avatar · London everyday",
    mode: "EVERYDAY",
    context: "London · 12°C",
    weather: "Light rain",
    shopCount: 2,
    items: {
      jacket: { status: "RECOMMENDED · NEW", name: "Cropped cocoa jacket", brand: "North & Lane", tone: "tone-cocoa", chip: "cocoa-chip", details: ["Warm cocoa", "Size M", "Sleeve 62 cm"], value: "£164", cta: "View product →", action: "new" },
      top: { status: "YOUR WARDROBE · OWNED", name: "Ribbed ivory knit", brand: "Your REDshop purchases", tone: "tone-ivory", chip: "ivory-chip", details: ["Soft ivory", "Size M", "Body length 56 cm"], value: "Owned", cta: "See item →", action: "owned" },
      bag: { status: "YOUR WARDROBE · OWNED", name: "Mini shoulder bag", brand: "Your REDshop purchases", tone: "tone-slate", chip: "black-chip", details: ["Black", "One size"], value: "Owned", cta: "See item →", action: "owned" },
      trousers: { status: "FROM THIS POST · LOCKED", name: "Balloon trousers", brand: "Atelier North", tone: "tone-slate", chip: "charcoal-chip", details: ["Charcoal", "M Tall", "Length 106 cm"], value: "£129", cta: "View product →", action: "product" },
      shoes: { status: "RECOMMENDED · NEW", name: "Oxblood ballet flats", brand: "Maison Rue", tone: "tone-wine", chip: "wine-chip", details: ["Oxblood", "EU 40", "Regular width"], value: "£89", cta: "View product →", action: "new" },
    },
  },
  paris: {
    image: "./assets/look-paris.png",
    baseImage: "./assets/look-paris.png",
    alt: "Your avatar in a personalized Paris city-walk look built around the balloon trousers",
    subtitle: "Your avatar · Paris city walk",
    mode: "CITY WALK",
    context: "Paris · full day",
    weather: "Light rain",
    shopCount: 2,
    items: {
      jacket: { status: "RECOMMENDED · NEW", name: "Cropped rain trench", brand: "Rive Atelier", tone: "tone-sand", chip: "sand-chip", details: ["Sand beige", "Size M", "Sleeve 61 cm"], value: "£179", cta: "View product →", action: "new" },
      top: { status: "YOUR WARDROBE · OWNED", name: "Breton stripe knit", brand: "Your REDshop purchases", tone: "tone-stripe", chip: "stripe-chip", details: ["Black / cream", "Size M", "Body length 57 cm"], value: "Owned", cta: "See item →", action: "owned" },
      bag: { status: "YOUR WARDROBE · OWNED", name: "Burgundy crossbody", brand: "Your REDshop purchases", tone: "tone-burgundy", chip: "burgundy-chip", details: ["Deep burgundy", "One size"], value: "Owned", cta: "See item →", action: "owned" },
      trousers: { status: "FROM THIS POST · LOCKED", name: "Balloon trousers", brand: "Atelier North", tone: "tone-slate", chip: "charcoal-chip", details: ["Charcoal", "M Tall", "Length 106 cm"], value: "£129", cta: "View product →", action: "product" },
      shoes: { status: "RECOMMENDED · NEW", name: "Retro walking sneakers", brand: "Rue Marche", tone: "tone-cream", chip: "cream-chip", details: ["Cream", "EU 40", "Regular width"], value: "£95", cta: "View product →", action: "new" },
    },
  },
};

const savedLookMeta = {
  london: {
    title: "London everyday",
    category: "Everyday",
    cardContext: "London · 12°C",
    detailContext: "London · 12°C · Light rain",
  },
  paris: {
    title: "Paris city walk",
    category: "Travel",
    cardContext: "Paris · full day",
    detailContext: "Paris · full day · Light rain",
  },
};

let activeFittingLook = "initial";
let activeLookItem = "trousers";
let singleItemSaved = false;
let singleItemInBag = false;
let refineOpenItem = null;
let refineDirection = "";
let savedLookOrder = ["paris", "london"];
let recentlySavedLook = null;
let currentSavedLook = "london";
const selectedSavedItems = new Set();
const orderedLookItems = new Set();
const orderedProductKeys = new Set();
const bagProductKeys = new Set();
let checkoutMode = "look";
let checkoutProductContext = null;
const completeLookDiscount = 0.1;

const lookProductKeys = {
  london: { trousers: "trousers", jacket: "london_jacket", shoes: "london_shoes" },
  paris: { trousers: "trousers", jacket: "paris_jacket", shoes: "paris_shoes" },
};

const replacementPresets = {
  london: {
    jacket: {
      image: "./assets/look-alt-jacket.png",
      productKey: "london_alt_jacket",
      item: { status: "RECOMMENDED · NEW", name: "Dusty blue cropped jacket", brand: "North & Lane", tone: "tone-blue", chip: "blue-chip", details: ["Dusty blue"], value: "£168", cta: "Product details →", action: "new" },
    },
    top: {
      image: "./assets/look-alt-top.png",
      productKey: "london_alt_top",
      item: { status: "RECOMMENDED · NEW", name: "Powder-blue mock-neck knit", brand: "Studio Arden", tone: "tone-blue", chip: "blue-chip", details: ["Powder blue"], value: "£92", cta: "Product details →", action: "new" },
    },
    bag: {
      image: "./assets/look-alt-bag.png",
      productKey: "london_alt_bag",
      item: { status: "RECOMMENDED · NEW", name: "Burgundy shoulder bag", brand: "Mara Studio", tone: "tone-burgundy", chip: "burgundy-chip", details: ["Burgundy"], value: "£120", cta: "Product details →", action: "new" },
    },
    shoes: [
      {
        image: "./assets/look-loafer.png",
        productKey: "london_loafer",
        item: { status: "RECOMMENDED · NEW", name: "Black leather loafers", brand: "North & Lane", tone: "tone-slate", chip: "black-chip", details: ["Black"], value: "£118", cta: "Product details →", action: "new" },
      },
      {
        image: "./assets/look-sneaker.png",
        productKey: "london_sneaker",
        item: { status: "RECOMMENDED · NEW", name: "Retro walking sneakers", brand: "Rue Marche", tone: "tone-cream", chip: "cream-chip", details: ["Cream"], value: "£95", cta: "Product details →", action: "new" },
      },
    ],
  },
  paris: {
    jacket: {
      image: "./assets/look-paris-alt-jacket.png",
      productKey: "paris_alt_jacket",
      item: { status: "RECOMMENDED · NEW", name: "Navy cropped rain jacket", brand: "Rive Atelier", tone: "tone-navy", chip: "navy-chip", details: ["Deep navy"], value: "£184", cta: "Product details →", action: "new" },
    },
    top: {
      image: "./assets/look-paris-alt-top.png",
      productKey: "paris_alt_top",
      item: { status: "RECOMMENDED · NEW", name: "Moss rib knit", brand: "Studio Arden", tone: "tone-moss", chip: "moss-chip", details: ["Moss green"], value: "£88", cta: "Product details →", action: "new" },
    },
    bag: {
      image: "./assets/look-paris-alt-bag.png",
      productKey: "paris_alt_bag",
      item: { status: "RECOMMENDED · NEW", name: "Black structured crossbody", brand: "Mara Studio", tone: "tone-slate", chip: "black-chip", details: ["Black"], value: "£124", cta: "Product details →", action: "new" },
    },
    shoes: [{
      image: "./assets/look-paris-maryjane.png",
      productKey: "paris_maryjane",
      item: { status: "RECOMMENDED · NEW", name: "Burgundy Mary Jane flats", brand: "Maison Rue", tone: "tone-burgundy", chip: "burgundy-chip", details: ["Dark burgundy"], value: "£108", cta: "Product details →", action: "new" },
    }],
  },
};

const activeReplacements = { london: {}, paris: {} };
const variantSequence = { london: { shoes: 0 }, paris: { shoes: 0 } };
const refineDirections = {
  jacket: ["Different colour", "Lighter layer", "Different shape"],
  top: ["Different colour", "Higher neckline", "More relaxed"],
  bag: ["Different colour", "Larger bag", "Different shape"],
  shoes: ["Different colour", "More polished", "Different shape"],
};

function nextReplacement(lookKey, itemKey) {
  const preset = replacementPresets[lookKey]?.[itemKey];
  if (!preset) return null;
  if (!Array.isArray(preset)) return preset;
  const index = variantSequence[lookKey][itemKey] || 0;
  variantSequence[lookKey][itemKey] = (index + 1) % preset.length;
  return preset[index];
}

function applyReplacement(lookKey, itemKey) {
  const replacement = nextReplacement(lookKey, itemKey);
  if (!replacement) return;
  fittingLooks[lookKey].items[itemKey] = { ...replacement.item };
  fittingLooks[lookKey].image = replacement.image;
  lookProductKeys[lookKey][itemKey] = replacement.productKey;
  activeReplacements[lookKey][itemKey] = replacement.image;
}

function lookItemState(lookKey, itemKey, item) {
  if (item.action === "owned") return "owned";
  if (orderedLookItems.has(`${lookKey}:${itemKey}`)) return "ordered";
  return "available";
}

function displayItemForLook(lookKey, itemKey, item) {
  if (lookItemState(lookKey, itemKey, item) !== "ordered") return item;
  return {
    ...item,
    status: "ORDERED · ON THE WAY",
    value: "Ordered",
    cta: "View order →",
    action: "ordered",
  };
}

function itemCardMarkup(item, key) {
  const displayItem = displayItemForLook(activeFittingLook, key, item);
  if (activeFittingLook !== "initial") {
    const directionOptions = refineDirections[key] || [];
    const statusLabel = displayItem.action === "owned"
      ? "YOUR WARDROBE"
      : displayItem.action === "ordered"
        ? "ON THE WAY"
        : key === "trousers"
          ? "LOCKED FROM POST"
          : "RECOMMENDED";
    const detailsLabel = displayItem.action === "owned" ? "Item details →" : displayItem.action === "ordered" ? "Order details →" : "Product details →";
    const canReplace = key !== "trousers";
    return `<div class="look-ticket-wrap">
      <button class="look-product-card" data-card-action="${displayItem.action}" data-item-key="${key}" aria-label="Open ${displayItem.name} details">
        <span class="look-card-main"><i class="colour-chip ${displayItem.chip}"></i><span><small>${statusLabel}</small><strong>${displayItem.name}</strong></span></span>
        <span class="look-card-footer"><b>${displayItem.value}</b><em>${detailsLabel}</em></span>
      </button>
      ${canReplace ? `<button class="look-refine-trigger" data-try-another="${key}">Try another <span>↻</span></button>` : ""}
      ${refineOpenItem === key ? `<div class="look-refine-panel">
        <div class="look-refine-chips">${directionOptions.map((label) => `<button class="${refineDirection === label ? "is-active" : ""}" data-refine-direction="${label}">${label}</button>`).join("")}</div>
        <label class="look-refine-input"><input id="lookRefineInput" type="text" value="${refineDirection}" placeholder="What would you prefer?" /><button data-submit-refine aria-label="Update ${displayItem.name}">→</button></label>
      </div>` : ""}
    </div>`;
  }
  const details = displayItem.details.map((detail) => `<span>${detail}</span>`).join("");
  const saveControl = activeFittingLook === "initial"
    ? `<button class="ticket-save${singleItemSaved ? " is-saved" : ""}" data-save-item aria-label="${singleItemSaved ? "Remove from saved items" : "Save item"}" aria-pressed="${singleItemSaved}">${singleItemSaved ? "♥" : "♡"}</button>`
    : "";
  return `<div class="ticket-wrap">
    <button class="editorial-ticket ${displayItem.tone}" data-card-action="${displayItem.action}" data-item-key="${key}" aria-label="${displayItem.name}">
      <span class="ticket-title"><i class="colour-chip ${displayItem.chip}"></i><span><small>${displayItem.status}</small><strong>${displayItem.name}</strong><em>${displayItem.brand}</em></span></span>
      <span class="ticket-details">${details}<span class="ticket-footer"><b>${displayItem.value}</b><em>${displayItem.cta}</em></span></span>
    </button>
    ${saveControl}
  </div>`;
}

function setActiveLookItem(itemKey, animate = true) {
  const look = fittingLooks[activeFittingLook];
  const item = look.items[itemKey];
  const geometry = itemGeometry[itemKey];
  if (!item || !geometry) return;
  activeLookItem = itemKey;
  activeItemCard.dataset.item = itemKey;
  garmentPoints.querySelectorAll(".garment-point").forEach((point) => point.classList.toggle("is-active", point.dataset.item === itemKey));
  fittingStage.style.setProperty("--connector-left", geometry.lineLeft);
  fittingStage.style.setProperty("--connector-y", geometry.lineY);
  tryonProductRail.style.setProperty("--card-top", geometry.cardTop);
  activeItemCard.innerHTML = itemCardMarkup(item, itemKey);
  itemConnector.hidden = false;
  itemConnector.classList.remove("is-drawn");
  const draw = () => itemConnector.classList.add("is-drawn");
  if (animate) window.requestAnimationFrame(draw);
  else draw();
}

function renderGarmentPoints(look) {
  garmentPoints.innerHTML = Object.keys(look.items).map((itemKey) => {
    const geometry = itemGeometry[itemKey];
    const item = look.items[itemKey];
    return `<button class="garment-point" data-item="${itemKey}" aria-label="Inspect ${item.name}" style="left:${geometry.x};top:${geometry.y}"></button>`;
  }).join("");
}

function renderLookVariantLayers(lookKey) {
  if (lookKey === "initial") {
    lookVariantLayers.innerHTML = "";
    return;
  }
  const order = ["jacket", "top", "bag", "shoes"];
  lookVariantLayers.innerHTML = order
    .filter((itemKey) => activeReplacements[lookKey]?.[itemKey])
    .map((itemKey) => `<img class="look-variant-layer is-${itemKey}" src="${activeReplacements[lookKey][itemKey]}" alt="" />`)
    .join("");
}

function renderFittingLook(lookKey) {
  const look = fittingLooks[lookKey];
  const fittingScreen = document.querySelector('[data-screen="tryon"]');
  activeFittingLook = lookKey;
  refineOpenItem = null;
  refineDirection = "";
  isStyledLook = lookKey !== "initial";
  fittingScreen.classList.toggle("is-single-item", !isStyledLook);
  currentAngle = "0";
  tryonImage.src = look.baseImage || look.image;
  tryonImage.alt = look.alt;
  renderLookVariantLayers(lookKey);
  document.getElementById("fittingCount").textContent = look.subtitle;
  document.getElementById("contextMode").textContent = look.mode;
  document.getElementById("tryonContextBtn").querySelector("[data-context-label]").textContent = look.context;
  document.getElementById("contextWeather").textContent = look.weather;
  document.getElementById("avatarTurnStrip").innerHTML = isStyledLook ? "Personalized front preview" : "<span>←</span> Drag your avatar to turn <span>→</span>";
  renderGarmentPoints(look);
  setActiveLookItem(isStyledLook ? "jacket" : "trousers", false);
  tryonActionBar.classList.toggle("is-styled", isStyledLook);
  tryonActionBar.classList.toggle("is-single-item", !isStyledLook);
  tryonActionBar.innerHTML = isStyledLook
    ? `<button class="primary-action full-width" data-save-look>Save to My Looks <span>→</span></button>`
    : `<button class="secondary-action${singleItemInBag ? " is-added" : ""}" data-add-item>${singleItemInBag ? "Added ✓" : "Add to bag"}</button><button class="primary-action" id="previewLookBtn">Style this item <span>→</span></button>`;
  document.querySelector(".device").scrollTop = 0;
  journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === (isStyledLook ? "look" : "tryon")));
  syncCaseGuide("tryon");
}

function resetFittingRoom() {
  singleItemSaved = false;
  singleItemInBag = false;
  renderFittingLook("initial");
}

function transitionFittingLook(lookKey, title, subtitle, checks) {
  const analysis = document.getElementById("loadingAnalysis");
  loadingLayer.querySelector("b").textContent = title;
  loadingLayer.querySelector("small").textContent = subtitle;
  analysis.innerHTML = checks.map((check) => `<em>✓ ${check}</em>`).join("");
  analysis.classList.add("is-visible");
  loadingLayer.classList.add("is-active");
  window.setTimeout(() => {
    renderFittingLook(lookKey);
    loadingLayer.classList.remove("is-active");
    analysis.classList.remove("is-visible");
  }, 1650);
}

function buildLookInPlace() {
  transitionFittingLook(
    "london",
    "Building around your trousers",
    "Personalizing the rest of the look — not copying the original post",
    ["Your height, proportions & fit profile", "London weather & today’s plans", "Your saved style preferences", "Colour and silhouette balance"]
  );
}

function purchasableItemsForLook(lookKey) {
  return Object.entries(fittingLooks[lookKey].items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "available");
}

function itemPrice(item) {
  return Number(item.value.replace(/[^0-9.]/g, ""));
}

function formatPrice(value) {
  return `£${Number.isInteger(value) ? value : value.toFixed(2)}`;
}

function completeLookSelection(lookKey) {
  const purchasable = purchasableItemsForLook(lookKey);
  return Boolean(purchasable.length) && purchasable.every(([itemKey]) => selectedSavedItems.has(itemKey));
}

function renderMyLooks(filter = "All") {
  const grid = document.getElementById("myLooksGrid");
  const visibleLooks = savedLookOrder.filter((lookKey) => filter === "All" || savedLookMeta[lookKey].category === filter);
  if (!visibleLooks.length) {
    grid.innerHTML = `<div class="empty-look-state"><span>◇</span><strong>No ${filter.toLowerCase()} looks yet</strong><small>Your next saved look will appear here.</small></div>`;
    return;
  }
  grid.innerHTML = visibleLooks.map((lookKey) => {
    const look = fittingLooks[lookKey];
    const meta = savedLookMeta[lookKey];
    const ownedCount = Object.entries(look.items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "owned").length;
    const orderedCount = Object.entries(look.items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "ordered").length;
    const availableCount = purchasableItemsForLook(lookKey).length;
    const itemSummary = [`${ownedCount} owned`, `${availableCount} recommended`, orderedCount ? `${orderedCount} on the way` : ""].filter(Boolean).join(" · ");
    const badge = recentlySavedLook === lookKey ? "JUST SAVED" : "SAVED LOOK";
    return `<button class="saved-look-card" data-saved-look="${lookKey}" aria-label="Open ${meta.title}">
      <span class="saved-look-visual"><img src="${look.image}" alt="${meta.title} on your avatar" /><span>${badge}</span></span>
      <span class="saved-look-card-copy">
        <small>${meta.category.toUpperCase()}</small>
        <strong>${meta.title}</strong>
        <em>${meta.cardContext}</em>
        <span class="saved-look-card-meta"><span>${itemSummary}</span><b>›</b></span>
      </span>
    </button>`;
  }).join("");
}

function lookItemRowMarkup(lookKey, itemKey, item) {
  const state = lookItemState(lookKey, itemKey, item);
  const displayItem = displayItemForLook(lookKey, itemKey, item);
  const isOwned = state === "owned";
  const isOrdered = state === "ordered";
  const isPurchasable = state === "available";
  const isSelected = selectedSavedItems.has(itemKey);
  const look = fittingLooks[lookKey];
  const rowClasses = ["look-item-row", isOwned ? "is-owned" : "", isOrdered ? "is-ordered" : "", isPurchasable ? "is-purchasable" : "", isSelected ? "is-selected" : ""].filter(Boolean).join(" ");
  return `<div class="${rowClasses}" data-look-item="${itemKey}" data-purchasable="${isPurchasable}" role="${isPurchasable ? "button" : "group"}" tabindex="${isPurchasable ? "0" : "-1"}">
    <span class="look-item-thumb thumb-${itemKey}"><img src="${look.image}" alt="${item.name} in your saved look" /></span>
    <span class="look-item-main"><small>${displayItem.status}</small><strong>${displayItem.name}</strong><em>${displayItem.brand}</em></span>
    <span class="look-item-side"><b>${isOwned ? "Yours" : (isOrdered ? "Ordered" : item.value)}</b>${isOwned ? '<span class="look-item-status">Owned</span>' : (isOrdered ? '<span class="look-item-status">On the way</span>' : "")}<button class="look-item-view" data-view-look-item="${itemKey}">${isOwned ? "View item" : (isOrdered ? "View order" : "View product")}</button></span>
    ${isPurchasable ? `<input class="look-item-check" type="checkbox" aria-label="Select ${item.name}" ${isSelected ? "checked" : ""} />` : ""}
  </div>`;
}

function syncLookPurchaseBar() {
  const look = fittingLooks[currentSavedLook];
  const selectedItems = [...selectedSavedItems].map((itemKey) => look.items[itemKey]).filter(Boolean);
  const purchasable = purchasableItemsForLook(currentSavedLook);
  const subtotal = selectedItems.reduce((sum, item) => sum + itemPrice(item), 0);
  const count = selectedItems.length;
  const isComplete = completeLookSelection(currentSavedLook);
  const saving = isComplete ? subtotal * completeLookDiscount : 0;
  const total = subtotal - saving;
  const purchaseBar = document.getElementById("lookPurchaseBar");
  purchaseBar.classList.toggle("has-complete-offer", isComplete);
  document.getElementById("lookSelectionCount").textContent = isComplete
    ? "Complete-look saving · 10% off"
    : count
      ? `${count} of ${purchasable.length} missing pieces selected`
      : `${purchasable.length} pieces to complete this look`;
  document.getElementById("lookSelectionTotal").innerHTML = isComplete
    ? `<s>${formatPrice(subtotal)}</s> ${formatPrice(total)}`
    : count
      ? `${formatPrice(subtotal)} · Select all for 10% off`
      : "Select all for 10% off";
  const checkoutButton = document.getElementById("addSelectedLookItems");
  checkoutButton.disabled = !count;
  checkoutButton.textContent = count ? `Checkout ${count} · ${formatPrice(total)}` : "Continue to checkout";
  const selectAllButton = document.querySelector("[data-select-all-look]");
  if (selectAllButton) {
    selectAllButton.textContent = isComplete ? "Clear all" : `Select all ${purchasable.length}`;
    selectAllButton.setAttribute("aria-pressed", String(isComplete));
  }
}

function renderSavedLookDetail(lookKey, preserveSelection = false) {
  currentSavedLook = lookKey;
  if (!preserveSelection) selectedSavedItems.clear();
  const look = fittingLooks[lookKey];
  const meta = savedLookMeta[lookKey];
  const image = document.getElementById("lookDetailImage");
  image.src = look.image;
  image.alt = `${meta.title} on your avatar`;
  document.getElementById("lookDetailHeader").textContent = meta.title;
  document.getElementById("lookDetailMode").textContent = look.mode;
  document.getElementById("lookDetailTitle").textContent = meta.title;
  document.getElementById("lookDetailContext").textContent = meta.detailContext;

  const ownedItems = Object.entries(look.items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "owned");
  const orderedItems = Object.entries(look.items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "ordered");
  const recommendedItems = Object.entries(look.items).filter(([itemKey, item]) => lookItemState(lookKey, itemKey, item) === "available");
  document.getElementById("lookItemsList").innerHTML = `
    <div class="look-item-group-row"><p class="look-item-group">RECOMMENDED FOR THIS LOOK</p>${recommendedItems.length ? `<button data-select-all-look aria-pressed="false">Select all ${recommendedItems.length}</button>` : ""}</div>
    ${recommendedItems.map(([itemKey, item]) => lookItemRowMarkup(lookKey, itemKey, item)).join("")}
    ${orderedItems.length ? `<p class="look-item-group ordered-group">ON THE WAY</p>${orderedItems.map(([itemKey, item]) => lookItemRowMarkup(lookKey, itemKey, item)).join("")}` : ""}
    ${ownedItems.length ? `<p class="look-item-group owned-group">ALREADY YOURS</p>${ownedItems.map(([itemKey, item]) => lookItemRowMarkup(lookKey, itemKey, item)).join("")}` : ""}
  `;
  syncLookPurchaseBar();
  document.querySelector(".look-detail-scroll").scrollTop = 0;
}

function saveCurrentLook() {
  if (!isStyledLook || activeFittingLook === "initial") return;
  const saveButton = tryonActionBar.querySelector("[data-save-look]");
  saveButton.innerHTML = "Saving your look…";
  recentlySavedLook = activeFittingLook;
  savedLookOrder = [activeFittingLook, ...savedLookOrder.filter((lookKey) => lookKey !== activeFittingLook)];
  window.setTimeout(() => {
    renderMyLooks();
    goTo("mylooks");
    showToast("Saved to My Looks");
  }, 520);
}

garmentPoints.addEventListener("click", (event) => {
  const point = event.target.closest("[data-item]");
  if (point) setActiveLookItem(point.dataset.item);
});

tryonProductRail.addEventListener("click", (event) => {
  const tryAnotherButton = event.target.closest("[data-try-another]");
  if (tryAnotherButton) {
    refineOpenItem = tryAnotherButton.dataset.tryAnother;
    refineDirection = "";
    setActiveLookItem(refineOpenItem, false);
    window.setTimeout(() => document.getElementById("lookRefineInput")?.focus({ preventScroll: true }), 0);
    return;
  }
  const directionButton = event.target.closest("[data-refine-direction]");
  if (directionButton) {
    refineDirection = directionButton.dataset.refineDirection;
    activeItemCard.querySelectorAll("[data-refine-direction]").forEach((button) => button.classList.toggle("is-active", button === directionButton));
    const input = document.getElementById("lookRefineInput");
    if (input) {
      input.value = refineDirection;
      input.focus({ preventScroll: true });
    }
    return;
  }
  const submitRefine = event.target.closest("[data-submit-refine]");
  if (submitRefine) {
    const input = document.getElementById("lookRefineInput");
    refineDirection = input?.value.trim() || refineDirection;
    if (!refineDirection) {
      input?.focus({ preventScroll: true });
      return;
    }
    const itemKey = refineOpenItem;
    const currentName = fittingLooks[activeFittingLook].items[itemKey]?.name || "item";
    const analysis = document.getElementById("loadingAnalysis");
    loadingLayer.querySelector("b").textContent = `Finding another ${itemKey}`;
    loadingLayer.querySelector("small").textContent = "Keeping the rest of your look unchanged";
    analysis.innerHTML = "";
    analysis.classList.remove("is-visible");
    loadingLayer.classList.add("is-active");
    window.setTimeout(() => {
      applyReplacement(activeFittingLook, itemKey);
      renderFittingLook(activeFittingLook);
      setActiveLookItem(itemKey, false);
      loadingLayer.classList.remove("is-active");
      showToast(`${currentName} replaced in your look`);
    }, 900);
    return;
  }
  const saveButton = event.target.closest("[data-save-item]");
  if (saveButton) {
    singleItemSaved = !singleItemSaved;
    setActiveLookItem(activeLookItem, false);
    showToast(singleItemSaved ? "Trousers saved" : "Removed from saved items");
    return;
  }
  const card = event.target.closest("[data-card-action]");
  if (!card) return;
  const item = fittingLooks[activeFittingLook].items[card.dataset.itemKey];
  if (card.dataset.cardAction === "product") {
    selectedProduct = "trousers";
    selectedLookItemKey = card.dataset.itemKey;
    productReturnScreen = "tryon";
    document.getElementById("viewProductBtn").click();
  } else if (card.dataset.cardAction === "owned") {
    showToast(`${item.name} is already in your wardrobe`);
  } else if (card.dataset.cardAction === "ordered") {
    showToast(`${item.name} is on the way`);
  } else {
    selectedLookItemKey = card.dataset.itemKey;
    selectedProduct = lookProductKeys[activeFittingLook]?.[card.dataset.itemKey];
    if (!selectedProduct) {
      showToast(`${item.name} is already in this look`);
      return;
    }
    productReturnScreen = "tryon";
    document.getElementById("viewProductBtn").click();
  }
});

tryonActionBar.addEventListener("click", (event) => {
  if (event.target.closest("#previewLookBtn")) buildLookInPlace();
  if (event.target.closest("[data-add-item]")) {
    singleItemInBag = true;
    const addButton = tryonActionBar.querySelector("[data-add-item]");
    addButton.textContent = "Added ✓";
    addButton.classList.add("is-added");
    showToast("Balloon trousers added to your bag");
    window.setTimeout(() => goTo("market"), 720);
  }
  if (event.target.closest("[data-save-look]")) saveCurrentLook();
});

document.getElementById("myLooksGrid").addEventListener("click", (event) => {
  const card = event.target.closest("[data-saved-look]");
  if (!card) return;
  renderSavedLookDetail(card.dataset.savedLook);
  goTo("lookdetail");
});

document.querySelectorAll(".my-looks-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".my-looks-filters button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderMyLooks(button.textContent.trim());
  });
});

document.getElementById("myLooksBackBtn").addEventListener("click", () => {
  goTo("tryon");
  journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === "look"));
});
document.getElementById("lookDetailBackBtn").addEventListener("click", () => goTo("mylooks"));

document.getElementById("lookItemsList").addEventListener("click", (event) => {
  const selectAllButton = event.target.closest("[data-select-all-look]");
  if (selectAllButton) {
    const purchasableKeys = purchasableItemsForLook(currentSavedLook).map(([itemKey]) => itemKey);
    const allSelected = purchasableKeys.every((itemKey) => selectedSavedItems.has(itemKey));
    purchasableKeys.forEach((itemKey) => {
      if (allSelected) selectedSavedItems.delete(itemKey);
      else selectedSavedItems.add(itemKey);
      const row = document.querySelector(`[data-look-item="${itemKey}"]`);
      row?.classList.toggle("is-selected", !allSelected);
      const checkbox = row?.querySelector(".look-item-check");
      if (checkbox) checkbox.checked = !allSelected;
    });
    syncLookPurchaseBar();
    return;
  }
  const viewButton = event.target.closest("[data-view-look-item]");
  if (viewButton) {
    const itemKey = viewButton.dataset.viewLookItem;
    const item = fittingLooks[currentSavedLook].items[itemKey];
    const itemState = lookItemState(currentSavedLook, itemKey, item);
    if (itemState === "owned") {
      showToast(`${item.name} is in your wardrobe`);
    } else if (itemState === "ordered") {
      showToast(`${item.name} is on the way`);
    } else {
      selectedLookItemKey = itemKey;
      selectedProduct = lookProductKeys[currentSavedLook]?.[itemKey];
      if (!selectedProduct) return;
      productReturnScreen = "lookdetail";
      document.getElementById("viewProductBtn").click();
    }
    return;
  }
  const row = event.target.closest("[data-look-item]");
  if (!row || row.dataset.purchasable !== "true") return;
  const itemKey = row.dataset.lookItem;
  if (selectedSavedItems.has(itemKey)) selectedSavedItems.delete(itemKey);
  else selectedSavedItems.add(itemKey);
  row.classList.toggle("is-selected", selectedSavedItems.has(itemKey));
  row.querySelector(".look-item-check").checked = selectedSavedItems.has(itemKey);
  syncLookPurchaseBar();
});

document.getElementById("addSelectedLookItems").addEventListener("click", () => {
  if (!selectedSavedItems.size) return;
  const look = fittingLooks[currentSavedLook];
  const selectedEntries = [...selectedSavedItems].map((itemKey) => [itemKey, look.items[itemKey]]).filter(([, item]) => item);
  const subtotal = selectedEntries.reduce((sum, [, item]) => sum + itemPrice(item), 0);
  const isComplete = completeLookSelection(currentSavedLook);
  const saving = isComplete ? subtotal * completeLookDiscount : 0;
  const total = subtotal - saving;
  checkoutMode = "look";
  checkoutProductContext = null;
  document.getElementById("checkoutTitle").textContent = isComplete ? "Your complete look, for less." : "Only the pieces you chose.";
  document.getElementById("checkoutLookName").textContent = `From ${savedLookMeta[currentSavedLook].title}`;
  document.getElementById("checkoutItems").innerHTML = selectedEntries.map(([itemKey, item]) => `
    <div class="checkout-item">
      <span class="checkout-item-thumb thumb-${itemKey}"><img src="${look.image}" alt="" /></span>
      <span><strong>${item.name}</strong><small>${item.brand}</small></span>
      <b>${item.value}</b>
    </div>`).join("");
  const checkoutOffer = document.getElementById("checkoutOffer");
  checkoutOffer.hidden = !isComplete;
  document.getElementById("checkoutSaving").textContent = `−${formatPrice(saving)}`;
  document.getElementById("checkoutTotal").textContent = formatPrice(total);
  document.getElementById("paySelectedLookItems").textContent = `Pay ${formatPrice(total)}`;
  document.getElementById("checkoutScrim").classList.add("is-open");
  document.getElementById("checkoutSheet").classList.add("is-open");
});

function openProductCheckout() {
  const product = productData[selectedProduct];
  checkoutMode = "product";
  checkoutProductContext = {
    productKey: selectedProduct,
    lookKey: selectedLookItemKey ? (productReturnScreen === "lookdetail" ? currentSavedLook : activeFittingLook) : null,
    itemKey: selectedLookItemKey,
  };
  document.getElementById("checkoutTitle").textContent = "Ready to buy.";
  document.getElementById("checkoutLookName").textContent = product.source || "One item · checkout now";
  document.getElementById("checkoutItems").innerHTML = `
    <div class="checkout-item">
      <span class="checkout-item-thumb product-checkout-thumb"><img src="${product.image || "./assets/feed-look.png"}" alt="" style="object-position:${product.imagePosition}" /></span>
      <span><strong>${product.name}</strong><small>${product.brand}</small></span>
      <b>£${product.price}</b>
    </div>`;
  document.getElementById("checkoutOffer").hidden = true;
  document.getElementById("checkoutTotal").textContent = `£${product.price}`;
  document.getElementById("paySelectedLookItems").textContent = `Pay £${product.price}`;
  document.getElementById("checkoutScrim").classList.add("is-open");
  document.getElementById("checkoutSheet").classList.add("is-open");
}

function closeCheckout() {
  document.getElementById("checkoutScrim").classList.remove("is-open");
  document.getElementById("checkoutSheet").classList.remove("is-open");
}

document.getElementById("checkoutScrim").addEventListener("click", closeCheckout);
document.getElementById("paySelectedLookItems").addEventListener("click", () => {
  if (checkoutMode === "product" && checkoutProductContext) {
    const { productKey, lookKey, itemKey } = checkoutProductContext;
    orderedProductKeys.add(productKey);
    if (lookKey && itemKey) orderedLookItems.add(`${lookKey}:${itemKey}`);
    closeCheckout();
    checkoutProductContext = null;
    showToast("Order placed · we’ll let you know when it ships");
    window.setTimeout(() => goTo("market"), 720);
    return;
  }
  const purchasedKeys = [...selectedSavedItems];
  const purchasedCount = purchasedKeys.length;
  purchasedKeys.forEach((itemKey) => {
    orderedLookItems.add(`${currentSavedLook}:${itemKey}`);
  });
  selectedSavedItems.clear();
  closeCheckout();
  renderSavedLookDetail(currentSavedLook);
  renderMyLooks(document.querySelector(".my-looks-filters .is-active")?.textContent.trim() || "All");
  showToast(`Order placed · ${purchasedCount} item${purchasedCount > 1 ? "s" : ""} on the way`);
  window.setTimeout(() => goTo("market"), 720);
});

document.getElementById("restyleSavedLookBtn").addEventListener("click", () => {
  renderFittingLook(currentSavedLook);
  goTo("tryon");
  journeySteps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === "look"));
});

const contextSheet = document.getElementById("contextSheet");
const contextScrim = document.getElementById("contextScrim");
const contextInput = document.getElementById("contextInput");
const contextButtons = [...document.querySelectorAll("[data-context-trigger]")];
function closeContext() {
  contextSheet.classList.remove("is-open");
  contextScrim.classList.remove("is-open");
}
contextButtons.forEach((button) => button.addEventListener("click", () => {
    contextSheet.classList.add("is-open");
    contextScrim.classList.add("is-open");
    window.setTimeout(() => contextInput.focus({ preventScroll: true }), 300);
  }));
contextScrim.addEventListener("click", closeContext);
document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    contextInput.value = button.textContent;
    contextInput.dataset.label = button.dataset.plan;
  });
});
contextInput.addEventListener("input", () => delete contextInput.dataset.label);
document.getElementById("voiceBtn").addEventListener("click", () => showToast("Voice input ready"));
document.getElementById("applyContextBtn").addEventListener("click", () => {
  const label = contextInput.dataset.label || contextInput.value.trim();
  if (!label) {
    showToast("Tell us what is different from today");
    return;
  }
  closeContext();
  if (currentScreen === "tryon") {
    transitionFittingLook(
      "paris",
      "Restyling for Paris",
      "Keeping your trousers locked while the rest of the outfit changes",
      ["A full day of walking", "Light rain & city terrain", "Your height and fit profile", "Comfort, colour and silhouette balance"]
    );
    contextInput.value = "";
    delete contextInput.dataset.label;
    return;
  }
  contextButtons.forEach((button) => {
    const labelNode = button.querySelector("[data-context-label]");
    if (labelNode) labelNode.textContent = label;
  });
  showToast("Context applied");
});

document.getElementById("shoeCard").addEventListener("click", () => {
  shoeBaseline = currentLookShoe;
  selectedShoe = null;
  syncShoeUI();
  goTo("shoes");
});
document.getElementById("shoeBackBtn").addEventListener("click", () => {
  selectedShoe = null;
  syncShoeUI();
  goTo("look");
});
document.getElementById("shoeDoneBtn").addEventListener("click", () => {
  if (selectedShoe) {
    currentLookShoe = selectedShoe;
    shoeInBag = false;
    document.getElementById("lookImage").src = shoeData[currentLookShoe].image;
  }
  selectedShoe = null;
  syncShoeUI();
  goTo("look");
});

const shoeImage = document.getElementById("shoeImage");
const shoeOptions = [...document.querySelectorAll(".shoe-option")];
shoeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const nextShoe = option.dataset.shoe;
    if (nextShoe === selectedShoe) {
      selectedShoe = null;
      syncShoeUI();
      return;
    }
    loadingLayer.querySelector("small").textContent = "Keeping the trousers and the rest of your look stable";
    showLoading(() => {
      selectedShoe = nextShoe;
      shoeInBag = false;
      syncShoeUI();
    }, "Changing only your shoes");
  });
});

function syncShoeUI() {
  const previewKey = selectedShoe || currentLookShoe;
  const preview = shoeData[previewKey];
  const current = shoeData[currentLookShoe];
  shoeOptions.forEach((option) => {
    const active = Boolean(selectedShoe) && option.dataset.shoe === selectedShoe;
    option.classList.toggle("is-selected", active);
    option.setAttribute("aria-selected", String(active));
  });
  shoeImage.src = preview.image;
  document.getElementById("shoeCardName").childNodes[0].textContent = current.shortName;
  document.getElementById("shoeCardPrice").textContent = shoeInBag ? `Added · £${current.price}` : "In this look · not added";
  const shoeThumb = document.getElementById("shoeCardThumb");
  shoeThumb.className = `fabric-${currentLookShoe}`;
  const addButton = document.getElementById("addShoeBtn");
  addButton.textContent = selectedShoe
    ? `＋ Add ${preview.name.toLowerCase()} · £${preview.price}`
    : "Continue without adding";
  addButton.classList.toggle("is-purchase", Boolean(selectedShoe));
  document.getElementById("shoeHelper").textContent = selectedShoe
    ? `Previewing ${preview.name.toLowerCase()} · Done keeps the look without adding it.`
    : "No new pair selected · your current look stays unchanged.";
  const compareButton = document.getElementById("compareBtn");
  compareButton.disabled = !selectedShoe || selectedShoe === shoeBaseline;
  compareButton.textContent = compareButton.disabled ? "Select another pair to compare" : "⇄ Hold to compare";
  document.getElementById("lookBagBtn").textContent = shoeInBag
    ? `Add 2 items · £${129 + current.price}`
    : "Add trousers · £129";
}

document.getElementById("compareBtn").addEventListener("pointerdown", () => {
  if (!selectedShoe || selectedShoe === shoeBaseline) return;
  compareRestore = shoeImage.src;
  shoeImage.src = shoeData[shoeBaseline].image;
  document.getElementById("compareBtn").textContent = "Viewing original";
});

function endCompare() {
  if (!compareRestore) return;
  shoeImage.src = compareRestore;
  compareRestore = null;
  document.getElementById("compareBtn").textContent = "⇄ Hold to compare";
}
document.getElementById("compareBtn").addEventListener("pointerup", endCompare);
document.getElementById("compareBtn").addEventListener("pointerleave", endCompare);

document.getElementById("addShoeBtn").addEventListener("click", () => {
  if (!selectedShoe) {
    goTo("look");
    return;
  }
  currentLookShoe = selectedShoe;
  shoeInBag = true;
  document.getElementById("lookImage").src = shoeData[currentLookShoe].image;
  const addedName = shoeData[currentLookShoe].name;
  selectedShoe = null;
  syncShoeUI();
  showToast(`${addedName} added to your bag`);
  window.setTimeout(() => goTo("market"), 720);
});

document.getElementById("lookBagBtn").addEventListener("click", () => {
  showToast(shoeInBag ? "2 items added to your bag" : "Trousers added to your bag");
  window.setTimeout(() => goTo("market"), 720);
});

document.querySelector(".device").scrollTo({ top: 0, left: 0 });
syncShoeUI();
syncCaseGuide("market");
