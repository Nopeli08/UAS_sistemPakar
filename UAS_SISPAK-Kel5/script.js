/* ==========================================================================
   LOGIC & DECISION TREE C4.5 - SISTEM PAKAR DIAGNOSA ANDROID (KELOMPOK 5)
   ========================================================================== */

// 1. DATA POHON KEPUTUSAN C4.5 FLAT INDEX STRUCTURE (FIXED)
const decisionTree = {
  "Q1": {
    "pertanyaan": "Apakah handphone dapat dinyalakan dengan normal?",
    "jika_ya": "Q2",
    "jika_tidak": "Q15"
  },
 
  "Q2": {
    "pertanyaan": "Apakah LCD/Layar menyala normal saat HP dihidupkan?",
    "jika_ya": "Q3",
    "jika_tidak": "Q10"
  },
 
  "Q3": {
    "pertanyaan": "Apakah ada kendala pada sinyal jaringan seluler Anda?",
    "jika_ya": "Q4",
    "jika_tidak": "Q6"
  },
  "Q4": {
    "pertanyaan": "Apakah muncul pesan peringatan tidak ada layanan ('No Service')?",
    "jika_ya": "Q5",
    "jika_tidak": {
      "kode": "K13", "nama": "IC WTR", "tipe": "HARDWARE", "persentase": 100,
      "solusi": [
        "Cek tegangan sinyal (Nengsih & Putra, 2020)",
        "Ganti IC WTR untuk mengatasi masalah tidak ada sinyal atau sinyal lemah."
      ]
    }
  },
  "Q5": {
    "pertanyaan": "Apakah SIM Card juga tidak terbaca sama sekali oleh sistem?",
    "jika_ya": {
      "kode": "K10", "nama": "IMEI (Software Corrupt)", "tipe": "SOFTWARE", "persentase": 95,
      "solusi": [
        "Masukkan atau modifikasi IMEI baru (Abdullah, et al., 2024).",
        "Write ulang IMEI menggunakan box/dongle software khusus sesuai chipset (mediatek/snapdragon).",
        "Gejala pendukung: nomor IMEI hilang atau berubah menjadi 'Null/Unknown' (G14)."
      ]
    },
    "jika_tidak": {
      "kode": "K21", "nama": "EEPROM", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Flash ulang partisi NVRAM/EFS, atau ganti IC EEPROM/SPI jika tidak bisa menyimpan data sistem.",
        "Gejala pendukung: setelah diganti kartu SIM baru, sinyal tetap tidak muncul sama sekali (G15)."
      ]
    }
  },
 
  "Q6": {
    "pertanyaan": "Apakah slot kartu atau kuningan SIM card terindikasi rusak fisik? (G23)",
    "jika_ya": {
      "kode": "K1", "nama": "SIM Card (Kuningan/Slot Rusak)", "tipe": "HARDWARE", "persentase": 100,
      "solusi": [
        "Bersihkan kuningan SIM, perbaiki pin slot card yang bengkok, atau ganti modul slot SIM."
      ]
    },
    "jika_tidak": "Q7"
  },
  "Q7": {
    "pertanyaan": "Apakah ada masalah pada fungsionalitas Kamera? (G8)",
    "jika_ya": {
      "kode": "K3", "nama": "Kamera", "tipe": "HARDWARE", "persentase": 95,
      "solusi": [
        "Cek fungsi kamera (Nengsih & Putra, 2020).",
        "Ganti kamera (Abdullah, et al., 2024).",
        "Bersihkan lensa, cek tegangan supply kamera, atau ganti modul kamera depan/belakang."
      ]
    },
    "jika_tidak": "Q8"
  },
  "Q8": {
    "pertanyaan": "Apakah HP tiba-tiba restart terus-menerus (Booting)? (G9)",
    "jika_ya": {
      "kode": "K4", "nama": "Boot Restart (Sistem Overload)", "tipe": "SOFTWARE", "persentase": 90,
      "solusi": [
        "Reboot software (Nengsih & Putra, 2020).",
        "Bersihkan cache sistem, flash ulang firmware, atau cek tombol power yang short/tertekan.",
        "Gejala pendukung: HP tiba-tiba mati/restart saat membuka aplikasi berat (G12)."
      ]
    },
    "jika_tidak": "Q20"
  },
 
  "Q20": {
    "pertanyaan": "Apakah kinerja HP terasa sangat lemot atau sering nge-hang/macet? (G20)",
    "jika_ya": {
      "kode": "K15", "nama": "IC RAM", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek penggunaan RAM lewat menu developer options, tutup aplikasi latar belakang.",
        "Lakukan pengecekan jalur solder IC RAM; reballing atau ganti IC RAM jika hang menetap setelah factory reset."
      ]
    },
    "jika_tidak": "Q21"
  },
  "Q21": {
    "pertanyaan": "Apakah HP susah atau tidak bisa mengisi daya, padahal kabel dan port USB terlihat normal? (G21)",
    "jika_ya": {
      "kode": "K5", "nama": "Charging Interface", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Ganti socket charger (Nengsih & Putra, 2020)"
      ]
    },
    "jika_tidak": "Q22"
  },
  "Q22": {
    "pertanyaan": "Apakah HP sering stuck di logo saat boot, gagal update sistem, atau aplikasi bawaan sering force-close? (G22)",
    "jika_ya": {
      "kode": "K8", "nama": "Software (Sistem Operasi)", "tipe": "SOFTWARE", "persentase": 90,
      "solusi": [
        "Reboot software (Nengsih & Putra, 2020)"
      ]
    },
    "jika_tidak": "Q12"
  },
 
  "Q10": {
    "pertanyaan": "Apakah layar dalam kondisi blank hitam tetapi mesin masih merespon? (G16)",
    "jika_ya": "Q11",
    "jika_tidak": {
      "kode": "K16", "nama": "Touchscreen", "tipe": "HARDWARE", "persentase": 95,
      "solusi": [
        "Cek flexibel (Nengsih & Putra, 2020).",
        "Cek kelurusan/kebersihan fleksibel, re-solder konektor FPC, atau ganti panel touchscreen/LCD."
      ]
    }
  },
  "Q11": {
    "pertanyaan": "Apakah ada bekas benturan keras atau tertimpa benda berat? (G17)",
    "jika_ya": {
      "kode": "K2", "nama": "LCD (Fisik Rusak)", "tipe": "HARDWARE", "persentase": 100,
      "solusi": [
        "Cek arus LCD layar dan flexibel (Nengsih & Putra, 2020).",
        "Ganti LCD (Abdullah, et al., 2024).",
        "Ganti satu set LCD jika terdapat garis, pecah fisik, atau lampu latar mati."
      ]
    },
    "jika_tidak": {
      "kode": "K18", "nama": "Flexi Cable", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek flexibel (Nengsih & Putra, 2020).",
        "Ganti kabel flexibel penghubung antar board (main sub yang putus atau aus)."
      ]
    }
  },
 
  "Q12": {
    "pertanyaan": "Apakah audio / suara tidak berfungsi (speaker atau microphone mati)? (G3)",
    "jika_ya": "Q13",
    "jika_tidak": "Q14"
  },
  "Q13": {
    "pertanyaan": "Apakah microphone tidak berfungsi sama sekali saat merekam atau telepon? (G4)",
    "jika_ya": {
      "kode": "K17", "nama": "Microphone", "tipe": "HARDWARE", "persentase": 95,
      "solusi": [
        "Cek lubang mic dari sumbatan, re-solder konektor mic atau ganti modul mic."
      ]
    },
    "jika_tidak": {
      "kode": "K11", "nama": "Speaker", "tipe": "HARDWARE", "persentase": 92,
      "solusi": [
        "Cek tahanan kaki speaker pada mesin (Nengsih & Putra, 2020).",
        "Bersihkan debu speaker, cek jalur audio, atau ganti komponen speaker fisik jika robek/mati."
      ]
    }
  },
  "Q14": {
    "pertanyaan": "Apakah Wi-Fi atau Bluetooth tidak bisa dinyalakan? (G6)",
    "jika_ya": {
      "kode": "K12", "nama": "IC WiFi / Bluetooth", "tipe": "HARDWARE", "persentase": 95,
      "solusi": [
        "Cek tegangan sinyal (Nengsih & Putra, 2020)",
        "Ganti WiFi/Bluetooth, dan periksa jalur antena sinyal nirkabel."
      ]
    },
    "jika_tidak": {
      "kode": "K22", "nama": "Vibrator Interface", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek motor gelar (vibrator), bersihkan elastisnya, atau ganti motor vibrator baru.",
        "Gejala pendukung: fitur getar (vibrator) handphone mati total (G5)."
      ]
    }
  },
 
  "Q15": {
    "pertanyaan": "Apakah handphone dalam kondisi benar-benar mati total?",
    "jika_ya": "Q16",
    "jika_tidak": {
      "kode": "K9", "nama": "Baterai (Drop / Rusak)", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek tegangan arus power (Nengsih & Putra, 2020).",
        "Ganti baterai (Abdullah, et al., 2024).",
        "Cek socket baterai, atau ganti sel baterai baru jika sudah kembung/drop."
      ]
    }
  },
 
  "Q16": {
    "pertanyaan": "Apakah HP mati total ini terjadi sesaat setelah kemasukan air? (G10)",
    "jika_ya": "Q17",
    "jika_tidak": "Q18"
  },
  "Q17": {
    "pertanyaan": "Apakah saat di-charge HP terasa panas berlebih dan tidak bisa mengisi daya?",
    "jika_ya": {
      "kode": "K6", "nama": "Hardbrick", "tipe": "HARDWARE", "persentase": 100,
      "solusi": [
        "Lakukan perbaikan via test point (EDL Mode), direct ISP atau ganti IC EMMC/UFS.",
        "Gejala pendukung: saat dicolok charger, gambar petir tidak muncul (G11)."
      ]
    },
    "jika_tidak": {
      "kode": "K7", "nama": "IC Power", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek tegangan arus power (Nengsih & Putra, 2020).",
        "Ganti IC Power (Abdullah, et al., 2024)",
        "Periksa arus konsumsi daya, ganti IC Power (PMIC) jika tegangan drop.",
        "Gejala pendukung: saat dicolok charger, gambar petir tidak muncul (G11)."
      ]
    }
  },
  "Q18": {
    "pertanyaan": "Apakah saat menekan tombol power, sama sekali tidak ada respon getar atau tanda menyala? (G18)",
    "jika_ya": "Q19",
    "jika_tidak": {
      "kode": "K20", "nama": "IC UEM (Power Distribution)", "tipe": "HARDWARE", "persentase": 85,
      "solusi": [
        "Cek tegangan arus power (Nengsih & Putra, 2020).",
        "Reball atau ganti IC UEM (Universal Energy Module) yang mengatur manajemen daya dan pengisian."
      ]
    }
  },
  "Q19": {
    "pertanyaan": "Apakah HP sempat menampilkan pesan error 'Contact Service' sebelum akhirnya mati total?",
    "jika_ya": {
      "kode": "K14", "nama": "IC CPU", "tipe": "HARDWARE", "persentase": 95,
      "solusi": [
        "Cek tegangan arus power (Nengsih & Putra, 2020).",
        "Ganti CPU jika terjadi corrupt data berat/mati total karena overheat.",
        "Gejala pendukung: komputer/laptop masih mendeteksi perangkat saat tersambung kabel data (G19)."
      ]
    },
    "jika_tidak": {
      "kode": "K19", "nama": "Power On Key", "tipe": "HARDWARE", "persentase": 90,
      "solusi": [
        "Cek flexibel (Nengsih & Putra, 2020).",
        "Bersihkan switch tombol, ganti membran tombol power, atau ganti satu set flexibel power."
      ]
    }
  }
};

// 2. STATE VARIABLES
let currentNodeId = "Q1";
let historyStack = [];

// DOM Elements
let screenHome, screenDiagnose, screenResult;
let questionText, diagnoseProgressText, diagnoseProgressBar;
let historySection, historyList, btnBack;
let resultTitle, resultBadge, resultConfidenceText, resultSolutionsList, resultDialFill, resultAccentStrip, printDate;
let gradientStart, gradientEnd;
let toast, toastMessage;

// Initialize DOM references when window loads
window.addEventListener("DOMContentLoaded", () => {
  screenHome = document.getElementById("screen-home");
  screenDiagnose = document.getElementById("screen-diagnose");
  screenResult = document.getElementById("screen-result");

  questionText = document.getElementById("question-text");
  diagnoseProgressText = document.getElementById("diagnose-progress-text");
  diagnoseProgressBar = document.getElementById("diagnose-progress-bar");
  historySection = document.getElementById("history-section");
  historyList = document.getElementById("history-list");
  btnBack = document.getElementById("btn-back");

  resultTitle = document.getElementById("result-title");
  resultBadge = document.getElementById("result-badge");
  resultConfidenceText = document.getElementById("result-confidence-text");
  resultSolutionsList = document.getElementById("result-solutions-list");
  resultDialFill = document.getElementById("result-dial-fill");
  resultAccentStrip = document.getElementById("result-accent-strip");
  printDate = document.getElementById("print-date");

  gradientStart = document.getElementById("gradient-start");
  gradientEnd = document.getElementById("gradient-end");

  toast = document.getElementById("toast");
  toastMessage = document.getElementById("toast-message");
  
  // Memastikan bahwa sistem merender antarmuka awal
  resetDiagnosis();
});

// 3. NAVIGATION & LOGIC FUNCTIONS (Exposed globally)
function startDiagnosis() {
  currentNodeId = "Q1";
  historyStack = [];
  showScreen("diagnose");
  renderQuestion();
}

function resetDiagnosis() {
  currentNodeId = "Q1";
  historyStack = [];
  showScreen("home");
}

function showScreen(screenName) {
  if (!screenHome || !screenDiagnose || !screenResult) return;

  screenHome.classList.add("hidden");
  screenDiagnose.classList.add("hidden");
  screenResult.classList.add("hidden");

  let activeScreen;
  if (screenName === "home") {
    activeScreen = screenHome;
  } else if (screenName === "diagnose") {
    activeScreen = screenDiagnose;
  } else if (screenName === "result") {
    activeScreen = screenResult;
  }

  activeScreen.classList.remove("hidden");
  activeScreen.classList.remove("fade-enter-active");
  void activeScreen.offsetWidth; // Trigger layout reflow to restart transition
  activeScreen.classList.add("fade-enter-active");
}

function getEstimatedProgress() {
  const step = historyStack.length + 1;
  const totalSteps = 5;
  const pct = Math.min((step / totalSteps) * 100, 100);
  return { step, totalSteps, pct };
}

function renderQuestion() {
  const node = decisionTree[currentNodeId];
  if (!node) return;

  questionText.textContent = node.pertanyaan;

  const prog = getEstimatedProgress();
  diagnoseProgressText.textContent = `Langkah ${prog.step} dari ~${prog.totalSteps}`;
  diagnoseProgressBar.style.width = `${prog.pct}%`;

  if (historyStack.length === 0) {
    btnBack.classList.add("opacity-50", "pointer-events-none");
  } else {
    btnBack.classList.remove("opacity-50", "pointer-events-none");
  }

  if (historyStack.length > 0) {
    historySection.classList.remove("hidden");
    historyList.innerHTML = "";
    historyStack.forEach((hist, index) => {
      const item = document.createElement("div");
      item.className = "flex items-start space-x-2 text-slate-400 border-b border-slate-900 pb-1.5 last:border-b-0";
      item.innerHTML = `
        <span class="font-bold text-indigo-400 w-4">${index + 1}.</span>
        <div class="flex-grow">
          <p class="text-slate-300 font-medium">${hist.question}</p>
          <p class="text-[11px] font-semibold flex items-center space-x-1 mt-0.5">
            <span>Jawaban:</span>
            <span class="${hist.answerValue ? 'text-emerald-400' : 'text-rose-400'} uppercase font-bold">
              ${hist.answerText}
            </span>
          </p>
        </div>
      `;
      historyList.appendChild(item);
    });
  } else {
    historySection.classList.add("hidden");
  }
}

function handleAnswer(isYes) {
  const node = decisionTree[currentNodeId];
  if (!node) return;

  const nextNode = isYes ? node.jika_ya : node.jika_tidak;
  
  historyStack.push({
    nodeId: currentNodeId,
    question: node.pertanyaan,
    answerText: isYes ? "YA, Sesuai" : "TIDAK Sesuai",
    answerValue: isYes
  });

  if (typeof nextNode === "string") {
    currentNodeId = nextNode;
    renderQuestion();
  } else {
    showResult(nextNode);
  }
}

function goBack() {
  if (historyStack.length === 0) return;

  const prevStep = historyStack.pop();
  currentNodeId = prevStep.nodeId;
  renderQuestion();
}

function showResult(resultData) {
  showScreen("result");

  resultTitle.textContent = resultData.nama;
  resultConfidenceText.textContent = `${resultData.persentase}%`;
  resultBadge.textContent = resultData.tipe;

  if (resultData.tipe === "HARDWARE") {
    resultBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold tracking-wider bg-rose-500/10 border border-rose-500/30 text-rose-400 uppercase inline-block";
    resultAccentStrip.className = "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-orange-500";
    if(gradientStart && gradientEnd) {
      gradientStart.setAttribute("stop-color", "#f43f5e");
      gradientEnd.setAttribute("stop-color", "#fb923c");
    }
  } else {
    resultBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400 uppercase inline-block";
    resultAccentStrip.className = "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-teal-400";
    if(gradientStart && gradientEnd) {
      gradientStart.setAttribute("stop-color", "#6366f1");
      gradientEnd.setAttribute("stop-color", "#2dd4bf");
    }
  }

  const circumference = 2 * Math.PI * 62;
  const offset = circumference - (resultData.persentase / 100) * circumference;
  
  if (resultDialFill) {
    setTimeout(() => {
      resultDialFill.style.strokeDasharray = `${circumference}`;
      resultDialFill.style.strokeDashoffset = `${offset}`;
    }, 100);
  }

  resultSolutionsList.innerHTML = "";
  resultData.solusi.forEach((sol, index) => {
    const li = document.createElement("li");
    li.className = "flex items-start space-x-3 bg-slate-900/40 p-3.5 rounded-xl border border-slate-800 print:bg-slate-50 print:border-slate-200";
    li.innerHTML = `
      <div class="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs shrink-0 print:border-slate-300">
        <span class="font-bold">${index + 1}</span>
      </div>
      <span class="leading-relaxed text-[13px]">${sol}</span>
    `;
    resultSolutionsList.appendChild(li);
  });

  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  if (printDate) {
    printDate.textContent = now.toLocaleDateString('id-ID', options) + " WIB";
  }
}

function scrollToEdukasi() {
  const el = document.getElementById("edukasi");
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function printReport() {
  window.print();
}

function showToast(message) {
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3000);
}

function copyResultToClipboard() {
  const type = resultBadge.textContent.trim();
  const title = resultTitle.textContent.trim();
  const confidence = resultConfidenceText.textContent.trim();
  
  let solutionsText = "";
  const solutions = resultSolutionsList.querySelectorAll("li");
  solutions.forEach((sol, index) => {
    const text = sol.querySelector("span").textContent.trim();
    solutionsText += `${index + 1}. ${text}\n`;
  });

  const fullText = `=== LAPORAN DIAGNOSA SMARTPHONE ANDROID ===\n` +
                   `Klasifikasi: ${type}\n` +
                   `Jenis Kerusakan: ${title}\n` +
                   `Tingkat Keyakinan: ${confidence}\n\n` +
                   `Solusi Penanganan Pertama:\n${solutionsText}` +
                   `==========================================\n` +
                   `*Laporan generated by SENSROID C4.5 - Kelompok 5*`;

  navigator.clipboard.writeText(fullText).then(() => {
    const copyIcon = document.getElementById("btn-copy-icon");
    const copyText = document.getElementById("btn-copy-text");

    if (copyIcon && copyText) {
      copyIcon.className = "fa-solid fa-check text-emerald-400";
      copyText.textContent = "Tersalin!";
    }

    showToast("Laporan diagnosa berhasil disalin ke clipboard!");

    setTimeout(() => {
      if (copyIcon && copyText) {
        copyIcon.className = "fa-solid fa-copy";
        copyText.textContent = "Salin Hasil";
      }
    }, 2000);
  }).catch(err => {
    showToast("Gagal menyalin teks.");
    console.error("Gagal menyalin: ", err);
  });
}