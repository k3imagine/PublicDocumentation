let originalReleaseDate = new Date("2021-01-12");
let nextProdRelease = originalReleaseDate;
let prodRelease = true;
let rcRelease = true;

function getNextYearsWorthOfReleases(originalReleaseDate) {
  let nextDate = new Date(originalReleaseDate);
  nextDate.setDate(nextDate.getDate() + 14);
  originalReleaseDate = nextDate;
  return nextDate;
}

for (let i = 0; i < 52; i++) {
  if (i % 2) {
    prodRelease = false;
    rcRelease = true;
  } else {
    prodRelease = true;
    rcRelease = false;
  }
  nextDate = getNextYearsWorthOfReleases(nextProdRelease);
  nextProdRelease = nextDate;
  addRow(prodRelease, nextProdRelease, rcRelease);
}

function addRow(prodRelease, nextDate, rcRelease) {
  const todaysDate = Date.now();
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var twoWeeks = new Date();
  twoWeeks.setDate(yesterday.getDate() - 14);
  if (nextDate < yesterday && prodRelease) return;
  if (nextDate < twoWeeks && rcRelease) return;
  const div = document.createElement("div");
  if (prodRelease) {
    div.className = "container right";
  } else {
    div.className = "container left";
  }
  const formattedDate = formatDate(nextDate);
  let nextRCDate = new Date(nextDate);
  nextRCDate.setDate(nextRCDate.getDate() + 7);
  nextRCDate = formatDate(nextRCDate);
  if (nextDate.getMonth() == 11) return;
  if (!prodRelease) {
    div.innerHTML = `
        <div class="content">
        <h2 class="rc">RC Release</h2>
        <h3>${nextRCDate}</h3>
        <p>Production Preview, UAT and Customer Access</p>
        </div>
    `;
  } else {
    div.innerHTML = `
        <div class="content">
        <h2 class="prod">Production Release</h2>
        <h3>Evening of ${formattedDate}</h3>
        <p></p>
        </div>
    `;
    if (nextDate.getMonth() == 10 && nextDate.getDate() > 20) {
      div.innerHTML = `
        <div class="content">
        <h2 class="prod">Production Release</h2>
        <h3>Evening of ${formattedDate}</h3>
        <p>Last release of ${nextDate.getFullYear()}</p>
        </div>
    `;
    }
  }
  document.getElementById("content").appendChild(div);
}

function getOrdinal(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function getMonthName(m) {
  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    default:
      return "December";
  }
}

function formatDate(d) {
  const ordinal = getOrdinal(d.getDate());
  const month = getMonthName(d.getMonth());
  const formattedDate = `${d.getDate()}${ordinal} ${month} ${d.getFullYear()}`;
  return formattedDate;
}
