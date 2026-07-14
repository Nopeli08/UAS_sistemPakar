/* ==========================================================================
   LOGIC & DECISION TREE C4.5 - SISTEM PAKAR DIAGNOSA ANDROID (KELOMPOK 5)
   ========================================================================== */

// 1. DATA POHON KEPUTUSAN C4.5 FLAT INDEX STRUCTURE (FIXED)
const decisionTree = {
  // --- LEVEL 1: PERTANYAAN UTAMA (KONDISI NYALA HP) ---
  "Q1": {
    "pertanyaan": "Apakah Handphone dapat dinyalakan dengan normal sampai ke menu?",
    "jika_ya": "Q2",   // Masuk ke jalur HP Hidup
    "jika_tidak": "Q9" // Masuk ke jalur HP Mati/Restart
  },
 
  // ==========================================================================
  // JALUR HP HIDUP (8 kerusakan: K13, K22, K32, K15, K20, K1, K3, K4)
  // ==========================================================================
  "Q2": {
    "pertanyaan": "Apakah aplikasi dan sistem operasi berjalan dengan baik tanpa lag/error?",
    "jika_ya": "Q3",
    "jika_tidak": "Q7"
  },
  "Q3": {
    "pertanyaan": "Apakah ada masalah pada output suara (speaker mati atau mic tidak merespon)?",
    "jika_ya": "Q4",
    "jika_tidak": "Q5"
  },
  "Q4": {
    "pertanyaan": "Apakah komponen Speaker (suara media) dan Microphone mati secara bersamaan?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "Speaker (fisik, interface)",
      "persentase": 95,
      "solusi": [
        "Periksa kebersihan lubang speaker dari debu atau kotoran.",
        "Lakukan pengujian modul speaker fisik menggunakan hardware test menu (*#0*#).",
        "Bawa ke teknisi untuk penggantian komponen buzzer jika kumparan putus."
      ]
    },
    "jika_tidak": {
      "tipe": "HARDWARE",
      "nama": "Microphone",
      "persentase": 92,
      "solusi": [
        "Bersihkan lubang mic kecil di bagian bawah bodi HP secara hati-hati.",
        "Gunakan aplikasi perekam suara bawaan untuk memastikan ini bukan bug aplikasi pihak ketiga.",
        "Jika suara tetap tidak terekam, modul fleksibel mic harus diganti."
      ]
    }
  },
  "Q5": {
    "pertanyaan": "Apakah fitur getar (vibrator) HP mati total?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "Vibrator Interface",
      "persentase": 95,
      "solusi": [
        "Pastikan mode getar telah diaktifkan pada pengaturan profil suara.",
        "Periksa konektor motor vibrator pada mesin utama.",
        "Ganti komponen dinamo getar yang sudah lemah."
      ]
    },
    "jika_tidak": "Q6"
  },
  "Q6": {
    "pertanyaan": "Apakah Wi-Fi tidak bisa diaktifkan ATAU Bluetooth gagal mendeteksi perangkat lain?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "IC WiFi/Bluetooth",
      "persentase": 91,
      "solusi": [
        "Lakukan reset pengaturan jaringan (Wi-Fi & Bluetooth) pada sistem Android.",
        "Jika salah satu modul tetap mati setelah reset, kemungkinan chip combo IC WiFi/Bluetooth bermasalah.",
        "Lakukan reballing atau penggantian chip IC WiFi/Bluetooth di logic board."
      ]
    },
    "jika_tidak": {
      "tipe": "HARDWARE",
      "nama": "Touchscreen (Mati Sebagian)",
      "persentase": 96,
      "solusi": [
        "Bersihkan layar dari kotoran atau air.",
        "Aktifkan 'Tampilkan ketukan' di opsi pengembang untuk melacak area mati.",
        "Ganti panel kaca depan/digitizer touchscreen."
      ]
    }
  },
  "Q7": {
    "pertanyaan": "Apakah kartu SIM (SIM Card) tiba-tiba tidak terbaca oleh sistem?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "SIM Card (Fisik)",
      "persentase": 96,
      "solusi": [
        "Coba gunakan kartu SIM lain untuk memastikan kartu lama tidak rusak.",
        "Bersihkan kuningan pembaca di dalam slot SIM dengan cairan pembersih khusus.",
        "Ganti satu set slot tray pembaca kartu SIM jika ada pin yang patah."
      ]
    },
    "jika_tidak": "Q8"
  },
  "Q8": {
    "pertanyaan": "Apakah aplikasi kamera sering force-close, gagal dibuka, atau hasil gambar blur?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "Kamera (Soket Kendor)",
      "persentase": 93,
      "solusi": [
        "Periksa apakah aplikasi kamera langsung crash atau black screen.",
        "Bongkar HP dan pastikan soket fleksibel kamera tidak kendor akibat benturan.",
        "Ganti modul kamera modular jika lensa dalam pecah."
      ]
    },
    "jika_tidak": {
      "tipe": "SOFTWARE",
      "nama": "Boot Restart (Virus/Malware/Overload)",
      "persentase": 92,
      "solusi": [
        "Masuk ke Safe Mode Android dan uninstal aplikasi asing/mencurigakan yang terindikasi malware.",
        "Hapus cache dan file sampah, serta uninstal aplikasi versi BETA penyebab overload/panas berlebih.",
        "Lakukan factory reset jika sistem masih sering hang, crash, atau muncul iklan pop-up."
      ]
    }
  },
 
  // ==========================================================================
  // JALUR HP MATI / RESTART (12 kerusakan: K8, K18, K10, K5, K12, K16, K29,
  // K2, K24, K27, K28, K7)
  // ==========================================================================
  "Q9": {
    "pertanyaan": "Apakah HP mengalami siklus mati-hidup sendiri (looping) secara terus-menerus?",
    "jika_ya": "Q10",   // Jalur Restart Loop
    "jika_tidak": "Q13" // Jalur Mati Total / Sinyal Hilang / Fisik
  },
 
  // --- SUB-JALUR: RESTART LOOP (4 kerusakan) ---
  "Q10": {
    "pertanyaan": "Apakah mati total ini terjadi setelah/karena HP terkena air atau cairan?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "IC Power",
      "persentase": 95,
      "solusi": [
        "Lepaskan baterai dengan segera untuk memutus arus.",
        "Ukur tegangan kapasitor di sekitar IC Power.",
        "Lakukan reball atau penggantian IC Power utama."
      ]
    },
    "jika_tidak": "Q11"
  },
  "Q11": {
    "pertanyaan": "Apakah saat dicolok charger, lampu indikator atau layar tidak memunculkan gambar sama sekali?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "IC CPU (Otak Mesin)",
      "persentase": 91,
      "solusi": [
        "Hubungkan ke PC, cek apakah terdeteksi driver chipset (9008/Preloader).",
        "Lakukan pengerjaan reballing (angkat cetak kaki) chip CPU.",
        "Ganti mesin utuh jika jalur internal board terputus."
      ]
    },
    "jika_tidak": "Q12"
  },
  "Q12": {
    "pertanyaan": "Apakah HP tiba-tiba mati/restart saat digunakan untuk membuka aplikasi berat atau kamera?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "Baterai (Drop/Rusak)",
      "persentase": 97,
      "solusi": [
        "Periksa apakah fisik baterai kembung.",
        "Uji stabilitas tegangan dengan multitester (minimal 3.7 Volt).",
        "Ganti baterai dengan yang baru dan original."
      ]
    },
    "jika_tidak": {
      "tipe": "SOFTWARE",
      "nama": "Bootloop (Gagal Booting)",
      "persentase": 94,
      "solusi": [
        "Masuk ke Recovery Mode (tombol Power + Volume Up).",
        "Pilih 'Wipe Data / Factory Reset'; jika belum berhasil unduh Stock ROM Firmware asli sesuai tipe HP.",
        "Flash ulang firmware menggunakan SP Flash Tool atau Odin sebelum booting ulang."
      ]
    }
  },
 
  // --- SUB-JALUR: TIDAK LOOPING (8 kerusakan) ---
  "Q13": {
    "pertanyaan": "Apakah masalah utamanya adalah hilangnya sinyal seluler (No Service/Panggilan Darurat)?",
    "jika_ya": "Q14",
    "jika_tidak": "Q16"
  },
 
  // -- Sinyal (3 kerusakan) --
  "Q14": {
    "pertanyaan": "Apakah nomor IMEI HP Anda hilang atau berubah menjadi 'Null / Unknown' saat dicek via *#06#?",
    "jika_ya": {
      "tipe": "SOFTWARE",
      "nama": "IMEI (Software Corrupt)",
      "persentase": 95,
      "solusi": [
        "Cek status IMEI melalui dial *#06#.",
        "Lakukan write ulang data NVRAM / EFS menggunakan box flasher.",
        "Daftarkan kembali nomor IMEI jika terblokir di database."
      ]
    },
    "jika_tidak": "Q15"
  },
  "Q15": {
    "pertanyaan": "Apakah setelah ganti kartu SIM baru sinyal tetap tidak muncul sama sekali?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "IC WTR / Transceiver",
      "persentase": 92,
      "solusi": [
        "Periksa kabel antena koaksial di dalam casing.",
        "Ganti IC Transceiver (WTR/MT) penerima sinyal.",
        "Solder ulang jalur antena penguat daya (RF)."
      ]
    },
    "jika_tidak": {
      "tipe": "SOFTWARE",
      "nama": "EEPROM (Data Sinyal)",
      "persentase": 89,
      "solusi": [
        "Flash ulang baseband firmware.",
        "Restore partisi backup modem via TWRP.",
        "Lakukan repair partisi modem di sistem."
      ]
    }
  },
 
  // -- Non-sinyal / fisik (5 kerusakan) --
  "Q16": {
    "pertanyaan": "Apakah layar HP Anda mati (hitam), tetapi getar atau suara notifikasi masih aktif?",
    "jika_ya": "Q17",
    "jika_tidak": "Q18"
  },
  "Q17": {
    "pertanyaan": "Apakah layar HP tersebut retak di bagian dalam setelah insiden terjatuh?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "LCD (Fisik Rusak)",
      "persentase": 96,
      "solusi": [
        "Periksa keretakan kaca LCD bagian dalam.",
        "Pasang kembali soket LCD yang mungkin kendor.",
        "Ganti satu set panel LCD + Touchscreen."
      ]
    },
    "jika_tidak": {
      "tipe": "HARDWARE",
      "nama": "Flexi Cable",
      "persentase": 91,
      "solusi": [
        "Bersihkan pin konektor fleksibel penghubung layar.",
        "Periksa apakah ada lipatan tajam yang memutus jalur fleksibel.",
        "Ganti kabel fleksibel penghubung mesin atas-bawah."
      ]
    }
  },
  "Q18": {
    "pertanyaan": "Apakah tombol Power terasa empuk/tidak klik saat ditekan secara fisik?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "Power On Key",
      "persentase": 94,
      "solusi": [
        "Hubungkan kedua pin power di mesin menggunakan pinset untuk menyalakan langsung.",
        "Bersihkan membran tombol dari karat.",
        "Ganti flexi switch tombol power."
      ]
    },
    "jika_tidak": "Q19"
  },
  "Q19": {
    "pertanyaan": "Apakah komputer/laptop masih mendeteksi perangkat Anda saat tersambung kabel data?",
    "jika_ya": {
      "tipe": "HARDWARE",
      "nama": "IC UEM (Power Distribution)",
      "persentase": 88,
      "solusi": [
        "Uji arus pengisian daya menggunakan USB Ammeter.",
        "Perbaiki jalur distribusi tegangan utama.",
        "Ganti komponen IC UEM yang mengontrol daya sistem."
      ]
    },
    "jika_tidak": {
      "tipe": "HARDWARE",
      "nama": "Hardbrick (Mati Total)",
      "persentase": 90,
      "solusi": [
        "Gunakan Test Point untuk memaksa masuk EDL Mode.",
        "Lakukan flashing bootloader via alat JTAG.",
        "Ganti modul memori internal jika tidak bisa di-write."
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