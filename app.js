// ================================
// 1. 定数定義
// ================================

let START_POINT = {
  name: "南区役所入口",
  lat: 33.561142,
  lng: 130.426336
};

const END_POINT = {
  name: "福岡市保健環境研究所",
  lat: 33.594422,
  lng: 130.364309
};

const POIS = [
  { id: "あいざわ歯科医院", name: "あいざわ歯科医院", lat: 33.573566, lng: 130.411316 },
  { id: "アイビーデンタルクリニック", name: "アイビーデンタルクリニック", lat: 33.560028, lng: 130.424774 },
  { id: "秋岡デンタルクリニック", name: "秋岡デンタルクリニック", lat: 33.571350, lng: 130.415924 },
  { id: "浅田歯科医院", name: "浅田歯科医院", lat: 33.576015, lng: 130.413391 },
  { id: "いくた歯科", name: "いくた歯科", lat: 33.570835, lng: 130.423950 },
  { id: "いしつか脳神経クリニック", name: "いしつか脳神経クリニック", lat: 33.572044, lng: 130.423035 },
  { id: "今泉歯科医院", name: "今泉歯科医院", lat: 33.557022, lng: 130.428665 },
  { id: "医療法人おおはし内科循環器内科医院", name: "医療法人おおはし内科循環器内科医院", lat: 33.558231, lng: 130.430771 },
  { id: "医療法人たけや内科胃腸科医院", name: "医療法人たけや内科胃腸科医院", lat: 33.557110, lng: 130.426941 },
  { id: "医療法人つちや内科循環器内科クリニック", name: "医療法人つちや内科循環器内科クリニック", lat: 33.558090, lng: 130.428757 },
  { id: "医療法人ハレクラニ大橋駅前 アロハ歯科 小児・矯正歯科クリニック 九州インプラントクリニック", name: "医療法人ハレクラニ大橋駅前 アロハ歯科 小児・矯正歯科クリニック 九州インプラントクリニック", lat: 33.558918, lng: 130.427429 },
  { id: "医療法人ひのでクリニック", name: "医療法人ひのでクリニック", lat: 33.552250, lng: 130.429245 },
  { id: "医療法人やの内科胃腸科クリニック", name: "医療法人やの内科胃腸科クリニック", lat: 33.568260, lng: 130.417313 },
  { id: "医療法人元気が湧く こどもの歯科診療所", name: "医療法人元気が湧く こどもの歯科診療所", lat: 33.555706, lng: 130.428589 },
  { id: "医療法人光竹会大橋ごう脳神経外科・脳神経内科クリニック", name: "医療法人光竹会大橋ごう脳神経外科・脳神経内科クリニック", lat: 33.557953, lng: 130.427277 },
  { id: "医療法人香和会おおたわ歯科医院", name: "医療法人香和会おおたわ歯科医院", lat: 33.567867, lng: 130.414169 },
  { id: "医療法人香和会オールオンフォーザイゴマクリニック", name: "医療法人香和会オールオンフォーザイゴマクリニック", lat: 33.567921, lng: 130.414246 },
  { id: "医療法人今村歯科・矯正歯科クリニック", name: "医療法人今村歯科・矯正歯科クリニック", lat: 33.558399, lng: 130.426666 },
  { id: "医療法人仁水会出水歯科医院", name: "医療法人仁水会出水歯科医院", lat: 33.557182, lng: 130.426056 },
  { id: "医療法人菅原内科医院", name: "医療法人菅原内科医院", lat: 33.557747, lng: 130.429291 },
  { id: "医療法人成歯会成沢歯科クリニック", name: "医療法人成歯会成沢歯科クリニック", lat: 33.567005, lng: 130.414963 },
  { id: "医療法人青見内科胃腸内科クリニック", name: "医療法人青見内科胃腸内科クリニック", lat: 33.568321, lng: 130.414291 },
  { id: "医療法人竹内皮膚泌尿器科医院", name: "医療法人竹内皮膚泌尿器科医院", lat: 33.558331, lng: 130.426117 },
  { id: "医療法人福松会福泉歯科医院", name: "医療法人福松会福泉歯科医院", lat: 33.558159, lng: 130.424362 },
  { id: "上田整形外科外科医院", name: "上田整形外科外科医院", lat: 33.557220, lng: 130.425812 },
  { id: "えがみ歯科医院", name: "えがみ歯科医院", lat: 33.562790, lng: 130.429199 },
  { id: "大橋アイクリニック", name: "大橋アイクリニック", lat: 33.561211, lng: 130.421326 },
  { id: "小串歯科医院", name: "小串歯科医院", lat: 33.575607, lng: 130.415482 },
  { id: "如月総健クリニック", name: "如月総健クリニック", lat: 33.571663, lng: 130.415649 },
  { id: "如月福岡クリニック", name: "如月福岡クリニック", lat: 33.571663, lng: 130.415649 },
  { id: "木村耳鼻咽喉科医院", name: "木村耳鼻咽喉科医院", lat: 33.553120, lng: 130.427765 },
  { id: "くすの木クリニック", name: "くすの木クリニック", lat: 33.558769, lng: 130.426117 },
  { id: "さわやま内科・総合診療クリニック", name: "さわやま内科・総合診療クリニック", lat: 33.574150, lng: 130.409943 },
  { id: "歯科のじみよ子クリニック", name: "歯科のじみよ子クリニック", lat: 33.558422, lng: 130.427368 },
  { id: "シティクリニック", name: "シティクリニック", lat: 33.558495, lng: 130.426666 },
  { id: "杉本医院", name: "杉本医院", lat: 33.574478, lng: 130.418198 },
  { id: "たかた内科医院", name: "たかた内科医院", lat: 33.569386, lng: 130.419403 },
  { id: "たじり歯科医院", name: "たじり歯科医院", lat: 33.565159, lng: 130.429031 },
  { id: "千鳥橋病院付属大楠診療所", name: "千鳥橋病院付属大楠診療所", lat: 33.573124, lng: 130.416687 },
  { id: "天神オーバーナイト透析クリニック", name: "天神オーバーナイト透析クリニック", lat: 33.575760, lng: 130.414429 },
  { id: "特別養護老人ホームおおはし徳巣", name: "特別養護老人ホームおおはし徳巣", lat: 33.556339, lng: 130.432510 },
  { id: "とよた歯科医院", name: "とよた歯科医院", lat: 33.569931, lng: 130.420212 },
  { id: "なかむら歯科クリニック", name: "なかむら歯科クリニック", lat: 33.572712, lng: 130.417053 },
  { id: "にしだ整形外科", name: "にしだ整形外科", lat: 33.571842, lng: 130.422729 },
  { id: "新田歯科医院", name: "新田歯科医院", lat: 33.558754, lng: 130.426849 },
  { id: "ひいらぎ歯科医院", name: "ひいらぎ歯科医院", lat: 33.567486, lng: 130.425613 },
  { id: "ひめの胃腸内科クリニック", name: "ひめの胃腸内科クリニック", lat: 33.552250, lng: 130.429245 },
  { id: "平岡歯科クリニック", name: "平岡歯科クリニック", lat: 33.558517, lng: 130.428833 },
  { id: "平尾ごう脳神経外科クリニック", name: "平尾ごう脳神経外科クリニック", lat: 33.579277, lng: 130.401550 },
  { id: "平田ペインクリニック", name: "平田ペインクリニック", lat: 33.572239, lng: 130.422348 },
  { id: "福岡大橋駅前心療内科", name: "福岡大橋駅前心療内科", lat: 33.558300, lng: 130.426834 },
  { id: "福岡南在宅診療所", name: "福岡南在宅診療所", lat: 33.558140, lng: 130.430054 },
  { id: "福田皮ふ科野間四ツ角クリニック", name: "福田皮ふ科野間四ツ角クリニック", lat: 33.567493, lng: 130.423859 },
  { id: "藤見歯科医院", name: "藤見歯科医院", lat: 33.557480, lng: 130.425598 },
  { id: "まつうら整形外科", name: "まつうら整形外科", lat: 33.567547, lng: 130.423706 },
  { id: "松永歯科医院", name: "松永歯科医院", lat: 33.573780, lng: 130.411880 },
  { id: "みうら整形外科", name: "みうら整形外科", lat: 33.571899, lng: 130.422440 },
  { id: "みやけ通り歯科クリニック", name: "みやけ通り歯科クリニック", lat: 33.559483, lng: 130.432983 },
  { id: "むらおか歯科医院", name: "むらおか歯科医院", lat: 33.575729, lng: 130.415497 },
  { id: "もり歯科クリニック", name: "もり歯科クリニック", lat: 33.567318, lng: 130.425507 },
  { id: "もりやま歯科", name: "もりやま歯科", lat: 33.567760, lng: 130.425385 },
  { id: "やまだ歯科クリニック", name: "やまだ歯科クリニック", lat: 33.560970, lng: 130.426498 }
  { id: "よしだ内科循環器科クリニック", name: "よしだ内科循環器科クリニック", lat: 33.558262, lng: 130.426773 },
  { id: "わかば総合診療クリニック", name: "わかば総合診療クリニック", lat: 33.572601, lng: 130.423523 },
  { id: "井口野間病院", name: "井口野間病院", lat: 33.560577, lng: 130.432251 },
  { id: "井本耳鼻咽喉科医院", name: "井本耳鼻咽喉科医院", lat: 33.574341, lng: 130.414551 },
  { id: "原病院", name: "原病院", lat: 33.560001, lng: 130.432175 },
  { id: "古賀医院", name: "古賀医院", lat: 33.573864, lng: 130.411987 },
  { id: "吉田医院", name: "吉田医院", lat: 33.574120, lng: 130.414581 },
  { id: "向新町病院", name: "向新町病院", lat: 33.558907, lng: 130.468536 },
  { id: "塩原歯科医院", name: "塩原歯科医院", lat: 33.561661, lng: 130.432297 },
  { id: "大橋南クリニック", name: "大橋南クリニック", lat: 33.553673, lng: 130.428726 },
  { id: "寺沢病院", name: "寺沢病院", lat: 33.559898, lng: 130.430603 },
  { id: "小野歯科医院", name: "小野歯科医院", lat: 33.572266, lng: 130.423248 },
  { id: "山口整形外科医院", name: "山口整形外科医院", lat: 33.572815, lng: 130.422638 },
  { id: "平尾山病院", name: "平尾山病院", lat: 33.577438, lng: 130.393372 },
  { id: "平尾駅眼科", name: "平尾駅眼科", lat: 33.578274, lng: 130.402267 },
  { id: "後藤歯科医院", name: "後藤歯科医院", lat: 33.572594, lng: 130.423401 },
  { id: "成田整形外科医院", name: "成田整形外科医院", lat: 33.571617, lng: 130.423126 },
  { id: "村山循環器科内科医院", name: "村山循環器科内科医院", lat: 33.574108, lng: 130.412704 },
  { id: "松田脳神経外科クリニック", name: "松田脳神経外科クリニック", lat: 33.574677, lng: 130.410812 },
  { id: "樋口歯科医院", name: "樋口歯科医院", lat: 33.557590, lng: 130.426422 },
  { id: "永利内科医院", name: "永利内科医院", lat: 33.574329, lng: 130.414444 },
  { id: "河野歯科クリニック", name: "河野歯科クリニック", lat: 33.572830, lng: 130.423218 },
  { id: "清水ヶ丘整形外科", name: "清水ヶ丘整形外科", lat: 33.565601, lng: 130.426651 },
  { id: "清水皮膚科医院", name: "清水皮膚科医院", lat: 33.572708, lng: 130.423477 },
  { id: "清永皮膚科医院", name: "清永皮膚科医院", lat: 33.559345, lng: 130.430130 },
  { id: "田中ひろし小児内科医院", name: "田中ひろし小児内科医院", lat: 33.572655, lng: 130.423370 },
  { id: "田辺整形外科医院", name: "田辺整形外科医院", lat: 33.558205, lng: 130.429947 },
  { id: "甲斐歯科医院", name: "甲斐歯科医院", lat: 33.560040, lng: 130.429489 },
  { id: "真田産婦人科麻酔科クリニック", name: "真田産婦人科麻酔科クリニック", lat: 33.572681, lng: 130.423447 },
  { id: "福岡スポーツクリニック", name: "福岡スポーツクリニック", lat: 33.558460, lng: 130.426605 },
  { id: "福岡整形外科病院", name: "福岡整形外科病院", lat: 33.558334, lng: 130.427109 },
  { id: "福田内科循環器科", name: "福田内科循環器科", lat: 33.572662, lng: 130.423294 },
  { id: "竹山ファミリークリニック", name: "竹山ファミリークリニック", lat: 33.571575, lng: 130.423203 },
  { id: "米倉脊椎・関節病院", name: "米倉脊椎・関節病院", lat: 33.572693, lng: 130.423340 },
  { id: "老司歯科医院", name: "老司歯科医院", lat: 33.530949, lng: 130.418060 },
  { id: "老司眼科医院", name: "老司眼科医院", lat: 33.530891, lng: 130.418015 },
  { id: "藤田整形外科スポーツクリニック", name: "藤田整形外科スポーツクリニック", lat: 33.558414, lng: 130.426727 },
  { id: "西岡歯科医院", name: "西岡歯科医院", lat: 33.557842, lng: 130.427002 },
  { id: "西田歯科医院", name: "西田歯科医院", lat: 33.558510, lng: 130.428818 },
  { id: "西高宮クリニック", name: "西高宮クリニック", lat: 33.570522, lng: 130.401688 },
  { id: "野間内科医院", name: "野間内科医院", lat: 33.567307, lng: 130.423798 },
  { id: "野間薬局", name: "野間薬局", lat: 33.567265, lng: 130.423706 },
  { id: "長沢医院", name: "長沢医院", lat: 33.573944, lng: 130.412018 },
  { id: "高宮外科内科医院", name: "高宮外科内科医院", lat: 33.572498, lng: 130.404770 },
  { id: "高木歯科医院", name: "高木歯科医院", lat: 33.558296, lng: 130.426849 },
  { id: "高橋内科医院", name: "高橋内科医院", lat: 33.571636, lng: 130.423157 },
  { id: "高橋歯科医院", name: "高橋歯科医院", lat: 33.573845, lng: 130.412109 },
  { id: "髙宮かくら小児科", name: "髙宮かくら小児科", lat: 33.570675, lng: 130.401962 },
  { id: "髙宮はるかぜクリニック", name: "髙宮はるかぜクリニック", lat: 33.570652, lng: 130.401932 },
  { id: "髙木内科医院", name: "髙木内科医院", lat: 33.572708, lng: 130.423416 },
  { id: "髙田整形外科医院", name: "髙田整形外科医院", lat: 33.558140, lng: 130.429947 },
  { id: "ＨＩＲＯデンタルクリニック", name: "ＨＩＲＯデンタルクリニック", lat: 33.558388, lng: 130.426666 }
];

const COLORS = ["#1a73e8", "#34a853", "#ea4335"];

// 対応時間（分）
const SERVICE_TIME = {};

// 出発時刻
let START_TIME = "09:00";

// ================================
// 2. グローバル
// ================================

let map;
let renderers = [];
let markers = [];
let worker;
let startMarker = null;
let autocomplete;

// ================================
// 3. 初期化
// ================================

window.onload = () => {
  initMap();
  initPlaceSearch();
  buildCheckboxList();
  bindEvents();
  worker = new Worker("worker.js");
  updateStartInfo();
};

// ================================
// 4. Map
// ================================

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: START_POINT,
    zoom: 12
  });

  addStartMarker();

  map.addListener("click", e => {
    START_POINT = {
      name: "選択した地点",
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };

    addStartMarker();
    updateStartInfo();
  });
}

function initPlaceSearch() {
  const input = document.getElementById("placeSearch");

  autocomplete = new google.maps.places.Autocomplete(input, {
    fields: ["name", "geometry"]
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) return;

    const newPoi = {
      id: "custom_" + Date.now(),
      name: place.name,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    POIS.push(newPoi);
    buildCheckboxList();
    setStatus("経由地に追加しました");
    input.value = "";
  });
}

// ================================
// 5. UI生成
// ================================

function buildCheckboxList() {
  const list = document.getElementById("poiList");
  list.innerHTML = "";

  POIS.forEach(p => {
    const label = document.createElement("label");
    label.className = "checkbox-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = p.id;

    const text = document.createElement("span");
    text.className = "checkbox-text";
    text.textContent = p.name;

    const timeBox = document.createElement("div");
    timeBox.style.display = "none";

    timeBox.innerHTML = `
      <label><input type="radio" name="time_${p.id}" value="10">10分</label>
      <label><input type="radio" name="time_${p.id}" value="15">15分</label>
      <label><input type="radio" name="time_${p.id}" value="30">30分</label>
      <input type="number" placeholder="自由(分)" style="width:60px;">
    `;

    cb.onchange = () => {
      timeBox.style.display = cb.checked ? "block" : "none";

      if (!cb.checked) delete SERVICE_TIME[p.id];

      updateSelectedTags();
    };

    timeBox.addEventListener("change", () => {
      const radio = timeBox.querySelector("input[type=radio]:checked");
      const free = timeBox.querySelector("input[type=number]").value;

      SERVICE_TIME[p.id] = Number(free || (radio ? radio.value : 0));
    });

    label.appendChild(cb);
    label.appendChild(text);
    label.appendChild(timeBox);

    list.appendChild(label);
  });
}

function updateSelectedTags() {
  const tags = document.getElementById("selectedTags");
  tags.innerHTML = "";

  getSelectedPois().forEach(p => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = p.name;
    tags.appendChild(span);
  });
}

// ================================
// 6. Events
// ================================

function bindEvents() {
  document.getElementById("calcBtn").onclick = calculate;
  document.getElementById("clearBtn").onclick = clearAll;
}

// ================================
// 7. 計算
// ================================

function calculate() {
  clearRoutes();

  const selected = getSelectedPois();

  if (!selected.length) {
    setStatus("経由地を選択してください");
    return;
  }

  const carCount = Number(document.getElementById("carCount").value);

  setStatus("計算中...");
  document.getElementById("calcBtn").disabled = true;

  worker.postMessage({ pois: selected, carCount });

  worker.onmessage = e => {
    e.data.forEach((g, i) => drawRoute(g, i));
  };
}

// ================================
// 8. ルート描画
// ================================

function drawRoute(pois, index) {
  const service = new google.maps.DirectionsService();

  const renderer = new google.maps.DirectionsRenderer({
    map,
    suppressMarkers: true,
    polylineOptions: {
      strokeColor: COLORS[index],
      strokeWeight: 5
    }
  });

  renderers.push(renderer);

  service.route({
    origin: START_POINT,
    destination: END_POINT,
    waypoints: pois.map(p => ({ location: p, stopover: true })),
    optimizeWaypoints: true,
    travelMode: "DRIVING",
    avoidHighways: true
  }, (res, status) => {

    if (status !== "OK") {
      setStatus("ルート取得失敗：" + status);
      document.getElementById("calcBtn").disabled = false;
      return;
    }

    renderer.setDirections(res);

    renderRouteDetail(res, index, pois);

    addEndMarker();
    addStartMarker();

    res.routes[0].waypoint_order.forEach((i, n) => {
      addNumberedMarker(pois[i], n + 1, COLORS[index]);
    });

    finalize();
  });
}

// ================================
// 9. 詳細表示
// ================================

function renderRouteDetail(result, index, pois) {
  const box = document.getElementById("routeDetail");

  const route = result.routes[0];
  const legs = route.legs;
  const order = route.waypoint_order;
  const ordered = order.map(i => pois[i]);
  const points = [START_POINT, ...ordered, END_POINT];

  let dist = 0;
  let time = 0;
  let serviceTimeTotal = 0;

  let currentTime = START_TIME;

  const div = document.createElement("div");

  div.innerHTML =
    `<h4 style="color:${COLORS[index]}">🚗 車${index + 1}（出発 ${START_TIME}）</h4>`;

  const ol = document.createElement("ol");

  legs.forEach((l, i) => {
    dist += l.distance.value;
    time += l.duration.value;

    const moveMin = Math.round(l.duration.value / 60);
    currentTime = addMinutes(currentTime, moveMin);

    const next = points[i + 1];

    let serviceMin = 0;

    if (next.id && SERVICE_TIME[next.id]) {
      serviceMin = SERVICE_TIME[next.id];
      serviceTimeTotal += serviceMin * 60;
    }

    const li = document.createElement("li");

    li.textContent =
      `${points[i].name} → ${next.name} ` +
      `（${l.distance.text} / ${l.duration.text}）` +
      ` 到着 ${currentTime}` +
      (serviceMin ? ` / 対応${serviceMin}分` : "");

    ol.appendChild(li);

    if (serviceMin) {
      currentTime = addMinutes(currentTime, serviceMin);
    }
  });

  div.appendChild(ol);

  const url = buildGoogleMapsUrl(points);

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.textContent = "▶ このルートをGoogleマップで開く";

  const qr = document.createElement("img");
  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=" +
    encodeURIComponent(url);

  div.appendChild(link);
  div.appendChild(qr);

  box.appendChild(div);

  appendTotals(index, dist, time, serviceTimeTotal);
}

// ================================
// URL生成
// ================================

function buildGoogleMapsUrl(points) {
  const origin = `${points[0].lat},${points[0].lng}`;
  const destination = `${points[points.length - 1].lat},${points[points.length - 1].lng}`;
  const waypoints = points
    .slice(1, -1)
    .map(p => `${p.lat},${p.lng}`)
    .join("|");

  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=driving`;
}

// ================================
// 10. 合計
// ================================

function appendTotals(i, dist, time, serviceTime = 0) {
  const t = document.getElementById("totals");

  const totalMin = Math.round((time + serviceTime) / 60);

  t.innerHTML += `
    <div style="color:${COLORS[i]}">
      車${i + 1}: ${(dist / 1000).toFixed(1)}km / ${totalMin}分
      ${serviceTime ? `(対応${Math.round(serviceTime / 60)}分含む)` : ""}
    </div>
  `;
}

// ================================
// 11. Marker
// ================================

function addStartMarker() {
  if (startMarker) startMarker.setMap(null);

  startMarker = new google.maps.Marker({
    position: START_POINT,
    map,
    label: "S"
  });
}

function addEndMarker() {
  markers.push(new google.maps.Marker({
    position: END_POINT,
    map,
    label: "G"
  }));
}

function addNumberedMarker(p, n, c) {
  markers.push(new google.maps.Marker({
    position: p,
    map,
    label: {
      text: String(n),
      color: "#fff"
    },
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 12,
      fillColor: c,
      fillOpacity: 1,
      strokeWeight: 0
    }
  }));
}

// ================================
// 12. Util
// ================================

function updateStartInfo() {
  document.getElementById("startInfo").textContent =
    `スタート地点: ${START_POINT.name}`;
}

function getSelectedPois() {
  const ids = [...document.querySelectorAll("#poiList input:checked")]
    .map(i => i.value);

  return POIS.filter(p => ids.includes(p.id));
}

function clearRoutes() {
  renderers.forEach(r => r.setMap(null));
  markers.forEach(m => m.setMap(null));

  renderers = [];
  markers = [];

  document.getElementById("routeDetail").innerHTML = "";
  document.getElementById("totals").innerHTML = "";
}

function clearAll() {
  document.querySelectorAll("#poiList input[type=checkbox]").forEach(c => {
    c.checked = false;
  });

  Object.keys(SERVICE_TIME).forEach(k => delete SERVICE_TIME[k]);

  updateSelectedTags();
  clearRoutes();
  setStatus("");
}

function setStatus(t) {
  document.getElementById("status").textContent = t;
}

function finalize() {
  setStatus("ルート計算完了");
  document.getElementById("calcBtn").disabled = false;
}

function addMinutes(timeStr, minutes) {
  const [h, m] = timeStr.split(":").map(Number);

  const d = new Date();
  d.setHours(h);
  d.setMinutes(m + minutes);

  return d.toTimeString().slice(0, 5);
}
