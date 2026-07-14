/* ==========================================================================
   LOGIC & DECISION TREE C4.5 - SISTEM PAKAR DIAGNOSA ANDROID (KELOMPOK 5)
   ========================================================================== */

// 1. DATA POHON KEPUTUSAN C4.5 SIMULATION
const decisionTree = {
  "Q1": {
    pertanyaan: "Apakah smartphone Anda bisa menyala sampai ke menu utama (homescreen)?",
    jika_ya: "Q2",
    jika_tidak: "Q3"
  },
  "Q2": {
    pertanyaan: "Apakah layar smartphone menampilkan gambar dengan normal dan merespon sentuhan dengan baik (tidak pecah, tidak bergaris, tidak ghost touch)?",
    jika_ya: "Q5", 
    jika_tidak: "Q4" 
  },
  "Q3": {
    pertanyaan: "Apakah smartphone Anda benar-benar mati total (tidak bergetar, tidak ada indikator lampu, tidak merespon tombol power sama sekali)?",
    jika_ya: "Q6", 
    jika_tidak: "Q7" 
  },
  "Q4": {
    pertanyaan: "Apakah layar smartphone pecah secara fisik, bergaris-garis warna, atau mengalami sentuhan liar (ghost touch)?",
    jika_ya: {
      tipe: "HARDWARE",
      nama: "Layar/LCD Pecah atau Ghost Touch",
      persentase: 94,
      solusi: [
        "Hindari menekan area layar yang pecah agar tidak merusak panel OLED/LCD di bawahnya.",
        "Gunakan pelindung layar tambahan (tempered glass) sementara jika retakannya hanya retak halus.",
        "Segera bawa ke service center untuk penggantian modul LCD satu set (layar sentuh + LCD).",
        "Jangan mencoba membiarkan ghost touch terus-menerus karena dapat memicu salah input PIN/password berkali-kali yang berujung pada HP terkunci total."
      ]
    },
    jika_tidak: "Q5"
  },
  "Q5": {
    pertanyaan: "Apakah persentase baterai menurun sangat drastis (drop cepat), smartphone sering mati tiba-tiba saat baterai masih 20-30%, atau baterai terlihat kembung?",
    jika_ya: {
      tipe: "HARDWARE",
      nama: "Baterai Drop atau Kembung",
      persentase: 92,
      solusi: [
        "Hentikan penggunaan smartphone segera jika baterai terlihat menggelembung/kembung untuk menghindari risiko meledak atau terbakar.",
        "Gunakan charger original bawaan dan hindari menggunakan smartphone secara intensif saat sedang di-charge.",
        "Nonaktifkan aplikasi latar belakang dan matikan fitur GPS/Bluetooth/Wi-Fi jika tidak digunakan untuk menghemat daya sementara.",
        "Lakukan penggantian baterai dengan komponen yang baru dan original di service center resmi."
      ]
    },
    jika_tidak: "Q8"
  },
  "Q6": {
    pertanyaan: "Saat dicolokkan ke charger, apakah smartphone menunjukkan indikator pengisian daya atau bergetar, tetapi tetap tidak bisa dinyalakan?",
    jika_ya: {
      tipe: "HARDWARE",
      nama: "IC Power Rusak",
      persentase: 88,
      solusi: [
        "Cobalah menekan tombol power + volume bawah bersamaan selama 10-15 detik untuk memicu soft reset.",
        "Jika tetap tidak menyala namun ada getaran/indikator pengisian daya, kemungkinan besar komponen IC Power di motherboard bermasalah.",
        "Hindari menggunakan charger non-standar atau charger dengan tegangan berlebih yang dapat merusak sirkuit daya mesin smartphone.",
        "Bawa smartphone ke teknisi profesional atau service center resmi untuk dilakukan pengukuran tegangan mesin dan penggantian IC Power."
      ]
    },
    jika_tidak: "Q9"
  },
  "Q7": {
    pertanyaan: "Apakah smartphone Anda menyala tetapi hanya menampilkan logo Android / merk secara terus-menerus (stuck logo) dan tidak pernah masuk ke menu utama?",
    jika_ya: {
      tipe: "SOFTWARE",
      nama: "Bootloop (Stuck Logo)",
      persentase: 95,
      solusi: [
        "Lakukan restart paksa (force restart) dengan menekan kombinasi tombol Power + Volume Down selama beberapa detik.",
        "Masuk ke recovery mode (biasanya tekan Power + Volume Up saat HP mati) dan lakukan 'Wipe Cache Partition' (jika ada) untuk membersihkan file cache yang rusak.",
        "Jika masih bootloop, lakukan 'Wipe Data / Factory Reset' melalui recovery mode (Catatan: ini akan menghapus semua file di penyimpanan internal).",
        "Apabila langkah di atas gagal, flash ulang firmware resmi smartphone menggunakan PC/Laptop sesuai seri tipe HP Anda."
      ]
    },
    jika_tidak: "Q10"
  },
  "Q8": {
    pertanyaan: "Apakah Anda tidak bisa masuk ke layar utama karena lupa pola, PIN, atau kata sandi kunci layar?",
    jika_ya: {
      tipe: "SOFTWARE",
      nama: "Lupa Pola/Sandi (Kunci Layar)",
      persentase: 97,
      solusi: [
        "Gunakan layanan resmi pabrikan seperti Google 'Find My Device' atau 'SmartThings Find' (untuk Samsung) untuk mereset kunci layar secara remote jika HP terhubung internet.",
        "Matikan HP Anda, masuk ke Recovery Mode dengan menekan kombinasi tombol Power + Volume Up secara bersamaan, kemudian pilih 'Wipe Data/Factory Reset' (ini akan menghapus semua data internal).",
        "Setelah berhasil reset, masukkan email Google dan password yang sebelumnya tersinkronisasi di HP tersebut untuk melewati verifikasi FRP (Factory Reset Protection).",
        "Jika masih terkendala, bawa kartu garansi/nota pembelian resmi ke service center resmi pabrikan untuk dibantu pembukaan kunci."
      ]
    },
    jika_tidak: "Q11"
  },
  "Q9": {
    pertanyaan: "Apakah lubang port charger terasa longgar saat kabel dicolokkan, kotor, atau Anda harus memegang kabel pada sudut tertentu agar pengisian daya berjalan?",
    jika_ya: {
      tipe: "HARDWARE",
      nama: "Port Charger Rusak",
      persentase: 90,
      solusi: [
        "Gunakan senter untuk memeriksa lubang port USB, lalu bersihkan debu atau serat kain secara perlahan menggunakan jarum tipis atau tusuk gigi kayu secara ekstra hati-hati.",
        "Coba gunakan kabel charger dan adaptor lain yang sudah dipastikan berfungsi normal pada smartphone lain.",
        "Hindari menarik atau menggoyang-goyangkan kabel saat dicolokkan ke port charger untuk menghindari kerusakan solderan kaki port pada mesin.",
        "Bawa ke bengkel reparasi HP terpercaya untuk mengganti konektor charger (port micro USB / USB Type-C) yang rusak."
      ]
    },
    jika_tidak: {
      tipe: "HARDWARE",
      nama: "IC Power Rusak",
      persentase: 85,
      solusi: [
        "Karena tidak ada respon kelistrikan dan kondisi fisik port charger tampak normal, kerusakan diduga kuat pada IC Power atau jalur sirkuit pengisian daya di mainboard.",
        "Jangan memaksakan men-charge terus-menerus dalam waktu lama karena bisa menyebabkan panas berlebih yang memperparah kerusakan komponen lain.",
        "Segera bawa ke service center untuk pengecekan tegangan arus masuk menggunakan multimeter."
      ]
    }
  },
  "Q10": {
    pertanyaan: "Apakah smartphone secara otomatis masuk ke menu Recovery Mode / Safe Mode setiap kali dihidupkan?",
    jika_ya: {
      tipe: "SOFTWARE",
      nama: "Bootloop / Kerusakan OS (Recovery Loop)",
      persentase: 91,
      solusi: [
        "Pilih opsi 'Reboot System Now' pada menu Recovery menggunakan tombol volume untuk memindahkan kursor dan tombol power untuk konfirmasi.",
        "Periksa tombol Volume Up/Down fisik Anda, pastikan tidak terjepit atau macet karena tombol volume tertekan saat booting memicu masuk ke recovery secara otomatis.",
        "Lakukan 'Wipe Data / Factory Reset' melalui menu recovery untuk membersihkan file sistem OS yang mengalami korupsi data.",
        "Apabila tombol normal dan wipe data tidak berhasil, bawa ke teknisi untuk instal ulang firmware resmi."
      ]
    },
    jika_tidak: {
      tipe: "SOFTWARE",
      nama: "Lupa Pola/Sandi (Kunci Layar)",
      persentase: 80,
      solusi: [
        "Jika HP tidak mati total dan tidak stuck logo melainkan hanya tidak bisa diakses, besar kemungkinan terjadi bug pada otentikasi kunci keamanan Android.",
        "Lakukan Factory Reset melalui recovery mode guna mengembalikan setelan perangkat ke pengaturan pabrik.",
        "Pastikan Anda mengingat email Google yang terdaftar di HP tersebut untuk proses setup awal (bypass FRP)."
      ]
    }
  },
  "Q11": {
    pertanyaan: "Apakah smartphone Anda sering terasa lambat secara signifikan (lag parah) saat membuka menu atau berpindah aplikasi?",
    jika_ya: "Q12",
    jika_tidak: {
      tipe: "SOFTWARE",
      nama: "Sistem Melambat (Lag Parah)",
      persentase: 75,
      solusi: [
        "Hapus file cache aplikasi yang menumpuk melalui Pengaturan > Penyimpanan > Bersihkan File Sampah.",
        "Hapus (uninstall) aplikasi yang jarang digunakan untuk melonggarkan kapasitas penyimpanan internal (sisakan minimal 15-20% ruang kosong).",
        "Matikan animasi visual sistem melalui Pengaturan > Opsi Developer > Ubah Skala Animasi ke 0.5x atau Nonaktifkan.",
        "Lakukan restart HP secara berkala (misal 2-3 hari sekali) untuk menyegarkan kembali RAM sistem."
      ]
    }
  },
  "Q12": {
    pertanyaan: "Apakah masalah utama adalah aplikasi yang sering keluar sendiri secara mendadak disertai pesan error 'Aplikasi Telah Berhenti' (Force Close)?",
    jika_ya: {
      tipe: "SOFTWARE",
      nama: "Aplikasi Sering Force Close",
      persentase: 93,
      solusi: [
        "Hapus cache dan data pada aplikasi yang bermasalah melalui Pengaturan > Aplikasi > [Pilih Aplikasi] > Penyimpanan > Hapus Cache & Hapus Data.",
        "Perbarui (update) aplikasi bermasalah tersebut ke versi terbaru melalui Google Play Store.",
        "Apabila force close terjadi pada layanan sistem (seperti Google Play Services), coba uninstal pembaruan Google Play Services lalu instal ulang.",
        "Pastikan RAM bebas memadai; tutup aplikasi latar belakang lain sebelum menjalankan aplikasi berat."
      ]
    },
    jika_tidak: {
      tipe: "SOFTWARE",
      nama: "Sistem Melambat (Lag Parah)",
      persentase: 89,
      solusi: [
        "Bersihkan file sampah dan cache yang menumpuk di penyimpanan internal HP.",
        "Batasi proses latar belakang melalui Opsi Pengembang (Limit background processes ke maksimal 2 atau 3 proses).",
        "Gunakan versi ringan (Lite) untuk aplikasi-aplikasi yang memakan banyak memori (seperti Facebook Lite, dll).",
        "Lakukan backup data penting kemudian lakukan Factory Reset jika performa sistem masih lambat secara tidak wajar."
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
    gradientStart.setAttribute("stop-color", "#f43f5e");
    gradientEnd.setAttribute("stop-color", "#fb923c");
  } else {
    resultBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400 uppercase inline-block";
    resultAccentStrip.className = "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-teal-400";
    gradientStart.setAttribute("stop-color", "#6366f1");
    gradientEnd.setAttribute("stop-color", "#2dd4bf");
  }

  const circumference = 2 * Math.PI * 62;
  const offset = circumference - (resultData.persentase / 100) * circumference;
  
  setTimeout(() => {
    resultDialFill.style.strokeDasharray = `${circumference}`;
    resultDialFill.style.strokeDashoffset = `${offset}`;
  }, 100);

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
  printDate.textContent = now.toLocaleDateString('id-ID', options) + " WIB";
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

    copyIcon.className = "fa-solid fa-check text-emerald-400";
    copyText.textContent = "Tersalin!";

    showToast("Laporan diagnosa berhasil disalin ke clipboard!");

    setTimeout(() => {
      copyIcon.className = "fa-solid fa-copy";
      copyText.textContent = "Salin Hasil";
    }, 2000);
  }).catch(err => {
    showToast("Gagal menyalin teks.");
    console.error("Gagal menyalin: ", err);
  });
}
