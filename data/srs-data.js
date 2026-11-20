/* =========================================================
   SRS 2027 Online Proceedings — data file
   このファイルだけ編集すればサイト全体が更新されます。

   多言語の書き方：
     文字列をそのまま書く        → 全言語で同じ表示
     { en: "...", ja: "...", vi: "..." } → 言語ごとに切替（無い言語は en を表示）
   ========================================================= */
window.SRS = {

  languages: [
    { code: "en", label: "English", short: "EN" },
    { code: "ja", label: "日本語", short: "JA" },
    { code: "vi", label: "Tiếng Việt", short: "VI" }
  ],
  defaultLang: "en",

  event: {
    name: {
      en: "Student Research Symposium 2027",
      ja: "Student Research Symposium 2027（学生研究シンポジウム）",
      vi: "Hội thảo Nghiên cứu Sinh viên 2027 (Student Research Symposium)"
    },
    nameEn: "Student Research Symposium 2027",   // 引用表記用（英語固定）
    short: "SRS 2027",
    year: "2027",
    date: {
      en: "Friday, 10 December 2027",
      ja: "2027年12月10日（金）",
      vi: "Thứ Sáu, ngày 10 tháng 12 năm 2027"
    },
    tourDate: {
      en: "Saturday, 11 December 2027 — City Tour",
      ja: "2027年12月11日（土）シティツアー",
      vi: "Thứ Bảy, ngày 11 tháng 12 năm 2027 — Tham quan thành phố"
    },
    venue: {
      en: "Cao Thang Technical College",
      ja: "カオタン技術短期大学",
      vi: "Trường Cao đẳng Kỹ thuật Cao Thắng"
    },
    city: {
      en: "Ho Chi Minh City, Vietnam",
      ja: "ベトナム・ホーチミン市",
      vi: "Thành phố Hồ Chí Minh, Việt Nam"
    },
    cityEn: "Ho Chi Minh City, Vietnam",
    organizers: ["CT", "AR"],   // institutions のコード
    keynote: {
      en: "To be announced",
      ja: "調整中",
      vi: "Sẽ thông báo sau"
    },
    url: "https://makiko-takagi.github.io/srs2027/",   // 公開URL（共有リンク・OGP用）
    startDate: "2027-12-10",                       // カウントダウン用
    address: {
      en: "65 Huynh Thuc Khang Street, Sai Gon Ward, Ho Chi Minh City, Vietnam",
      ja: "ベトナム・ホーチミン市 サイゴン坊 フィンテュックカン通り65番地",
      vi: "Số 65 Huỳnh Thúc Kháng, Phường Sài Gòn, Thành phố Hồ Chí Minh"
    },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cao+Thang+Technical+College+65+Huynh+Thuc+Khang",
    issn: "",
    published: "",
    contact: "srs2027@example.com",                // 問い合わせ先（事務局メール）
    secretariat: {
      en: "SRS 2027 Secretariat (Cao Thang Technical College / NIT Ariake College)",
      ja: "SRS 2027 事務局（カオタン技術短期大学／有明工業高等専門学校）",
      vi: "Ban Thư ký SRS 2027 (Trường CĐ Kỹ thuật Cao Thắng / Trường KOSEN Ariake)"
    }
  },

  /* トップの紹介文 */
  about: {
    en: "The Student Research Symposium (SRS) is an international symposium where students of Cao Thang Technical College and Japanese colleges of technology (KOSEN) present their research in English. Each presenter gives a 7-minute oral presentation and then discusses the work with participants in the poster session.",
    ja: "Student Research Symposium（SRS）は、カオタン技術短期大学と日本の高等専門学校（高専）の学生が、自らの研究を英語で発表する国際シンポジウムです。各発表者は7分間の口頭発表を行い、その後のポスターセッションで参加者と議論します。",
    vi: "Hội thảo Nghiên cứu Sinh viên (SRS) là hội thảo quốc tế, nơi sinh viên Trường Cao đẳng Kỹ thuật Cao Thắng và các trường KOSEN của Nhật Bản trình bày nghiên cứu của mình bằng tiếng Anh. Mỗi sinh viên trình bày miệng 7 phút, sau đó thảo luận với người tham dự tại phiên poster."
  },

  /* 重要日程（過去の日付は自動で薄く表示） */
  dates: [
    { date: "2027-11-30", label: { en: "Submission deadline: proceedings paper and poster (PDF)", ja: "提出締切：プロシーディング原稿・ポスター（PDF）", vi: "Hạn nộp: bài kỷ yếu và poster (PDF)" } },
    { date: "2027-12-08", label: { en: "Submission deadline: presentation slides (PDF)", ja: "提出締切：発表スライド（PDF）", vi: "Hạn nộp: slide trình bày (PDF)" } },
    { date: "2027-12-10", label: { en: "SRS 2027 at Cao Thang Technical College", ja: "SRS 2027 開催（カオタン技術短期大学）", vi: "SRS 2027 tại Trường CĐ Kỹ thuật Cao Thắng" }, main: true },
    { date: "2027-12-11", label: { en: "City Tour", ja: "シティツアー", vi: "Tham quan thành phố" } }
  ],

  /* 会場の紹介（Venue & Access） */
  venueInfo: {
    en: "Cao Thang Technical College is located in the centre of Ho Chi Minh City. It traces its origins to 1906, when it was founded as the École des Mécaniciens Asiatiques.",
    ja: "カオタン技術短期大学はホーチミン市の中心部にあります。1906年に創設された École des Mécaniciens Asiatiques（アジア機械工学校）を前身とする学校です。",
    vi: "Trường Cao đẳng Kỹ thuật Cao Thắng nằm tại trung tâm Thành phố Hồ Chí Minh. Tiền thân của trường là Trường Cơ khí Á Châu (École des Mécaniciens Asiatiques), thành lập năm 1906."
  },

  /* 企業の皆さまへ（日系企業への共有用） */
  forCompanies: {
    lead: {
      en: "SRS is an opportunity to meet engineering students from Vietnam and Japan who present their own research in English. We warmly welcome companies in Ho Chi Minh City, including Japanese-affiliated companies, to join us on the day.",
      ja: "SRSは、ベトナムと日本の工学系学生が自らの研究を英語で発表する場です。ホーチミン市の日系企業をはじめ、企業の皆さまのご来場を心より歓迎いたします。",
      vi: "SRS là cơ hội gặp gỡ sinh viên kỹ thuật Việt Nam và Nhật Bản đang trình bày nghiên cứu của chính mình bằng tiếng Anh. Chúng tôi trân trọng chào đón các doanh nghiệp tại TP. Hồ Chí Minh, bao gồm các doanh nghiệp Nhật Bản, đến tham dự."
    },
    why: [
      { en: "Meet motivated engineering students from Cao Thang Technical College and Japanese KOSEN.", ja: "カオタン技術短期大学と日本の高専の、意欲ある工学系学生に出会えます。", vi: "Gặp gỡ sinh viên kỹ thuật năng động của Trường CĐ Kỹ thuật Cao Thắng và các trường KOSEN Nhật Bản." },
      { en: "Talk with students one-on-one about their research in the poster session.", ja: "ポスターセッションで、学生と研究内容について直接話せます。", vi: "Trao đổi trực tiếp với sinh viên về nghiên cứu tại phiên poster." },
      { en: "Build connections with faculty members of Cao Thang Technical College and KOSEN.", ja: "カオタン技術短期大学と高専の教員とつながりをつくれます。", vi: "Kết nối với giảng viên Trường CĐ Kỹ thuật Cao Thắng và các trường KOSEN." }
    ],
    ways: [
      { en: "Attend the oral sessions and the poster session", ja: "口頭発表・ポスターセッションの見学", vi: "Tham dự các phiên báo cáo và phiên poster" },
      { en: "Give comments as a guest reviewer", ja: "ゲスト講評者としてのコメント", vi: "Nhận xét với vai trò khách mời đánh giá" },
      { en: "Sponsor an award (e.g. a company award)", ja: "賞のご提供（企業賞など）", vi: "Tài trợ giải thưởng (ví dụ: giải doanh nghiệp)" },
      { en: "Introduce your company during the networking time", ja: "交流タイムでの企業紹介", vi: "Giới thiệu doanh nghiệp trong thời gian giao lưu" }
    ],
    waysNote: {
      en: "Forms of participation are being arranged. Please contact the secretariat for details.",
      ja: "ご参加の形は現在調整中です。詳しくは事務局までお問い合わせください。",
      vi: "Hình thức tham gia đang được sắp xếp. Vui lòng liên hệ Ban Thư ký để biết thêm chi tiết."
    }
  },

  /* 協賛・協力（ロゴ画像を置いたら追記） */
  partners: [
    // { name: "Company name", logo: "assets/partners/company.png", url: "https://..." },
  ],

  /* 写真（過去のSRSの写真などを置いたら追記。空ならセクションごと非表示） */
  gallery: [
    // { src: "assets/gallery/srs2026-01.jpg", caption: { en: "Poster session, SRS 2026", ja: "SRS 2026 ポスターセッション", vi: "Phiên poster, SRS 2026" } },
  ],

  /* 組織（実行委員など） */
  organization: [
    { role: { en: "Organizers", ja: "主催", vi: "Đơn vị tổ chức" }, names: ["Cao Thang Technical College", "National Institute of Technology (KOSEN), Ariake College"] },
    { role: { en: "Organizing Committee", ja: "実行委員", vi: "Ban tổ chức" }, names: ["TBA"] }
  ],

  institutions: {
    AR: {
      en: "National Institute of Technology (KOSEN), Ariake College",
      ja: "有明工業高等専門学校",
      vi: "Trường KOSEN Ariake (Viện Công nghệ Quốc gia Nhật Bản)"
    },
    CT: {
      en: "Cao Thang Technical College",
      ja: "カオタン技術短期大学",
      vi: "Trường Cao đẳng Kỹ thuật Cao Thắng"
    },
    OK: { en: "Other KOSEN", ja: "その他の高専", vi: "Các trường KOSEN khác" }
  },

  /* type: "ceremony" | "talk" | "session" | "break" | "poster" */
  program: [
    { start: "8:30",  end: "8:45",  type: "ceremony",
      title: { en: "Opening Ceremony", ja: "開会式", vi: "Lễ khai mạc" },
      note:  { en: "Welcome addresses; briefing", ja: "両校挨拶・進行説明", vi: "Phát biểu chào mừng; phổ biến chương trình" } },
    { start: "8:45",  end: "9:00",  type: "talk",
      title: { en: "Keynote Lecture", ja: "基調講演", vi: "Bài phát biểu chính" },
      note:  { en: "Speaker to be announced", ja: "講演者は調整中", vi: "Diễn giả sẽ được thông báo sau" } },
    { start: "9:00",  end: "10:05", type: "session", session: "S1" },
    { start: "10:05", end: "10:20", type: "break",
      title: { en: "Break", ja: "休憩", vi: "Giải lao" } },
    { start: "10:20", end: "11:35", type: "session", session: "S2" },
    { start: "11:40", end: "12:30", type: "break",
      title: { en: "Lunch", ja: "昼食", vi: "Ăn trưa" } },
    { start: "12:30", end: "13:45", type: "session", session: "S3" },
    { start: "13:45", end: "13:55", type: "break",
      title: { en: "Move to Poster Area", ja: "ポスター会場へ移動", vi: "Di chuyển đến khu vực poster" } },
    { start: "13:55", end: "14:25", type: "poster",
      title: { en: "Poster Session", ja: "ポスターセッション", vi: "Phiên poster" },
      note:  { en: "All presenters; Q&A takes place here", ja: "全発表者。質疑はここで行います", vi: "Tất cả người trình bày; phần hỏi đáp diễn ra tại đây" } },
    { start: "14:30", end: "15:00", type: "break",
      title: { en: "Score Tabulation", ja: "採点集計", vi: "Tổng hợp điểm" },
      note:  { en: "Networking / group photo", ja: "交流タイム・集合写真", vi: "Giao lưu / chụp ảnh tập thể" } },
    { start: "15:00", end: "16:00", type: "ceremony",
      title: { en: "Award and Closing Ceremony", ja: "表彰式・閉会式", vi: "Lễ trao giải và bế mạc" } },
    { start: "16:00", end: "17:00", type: "tour",
      title: { en: "CTTC Club Room Tour", ja: "CTTC部室めぐり", vi: "Tham quan phòng câu lạc bộ CTTC" },
      note:  { en: "Students visit CTTC club rooms in mixed groups", ja: "学生が混成グループでCTTCの部活動の部室を回ります", vi: "Sinh viên chia nhóm hỗn hợp tham quan các câu lạc bộ của CTTC" } }
  ],

  /* 12/11 シティツアー（詳細が決まったら items を追記） */
  cityTour: {
    note: { en: "Details will be announced to participants.", ja: "詳細は参加者に別途連絡します。", vi: "Chi tiết sẽ được thông báo cho người tham gia." },
    items: []
  },

  sessions: {
    S1: { title: { en: "Oral Session 1", ja: "口頭発表 セッション1", vi: "Phiên báo cáo 1" }, start: "9:00",  chair: "TBA" },
    S2: { title: { en: "Oral Session 2", ja: "口頭発表 セッション2", vi: "Phiên báo cáo 2" }, start: "10:20", chair: "TBA" },
    S3: { title: { en: "Oral Session 3", ja: "口頭発表 セッション3", vi: "Phiên báo cáo 3" }, start: "12:30", chair: "TBA" }
  },
  slotMinutes: 8,   // 発表7分＋交代1分

  /* 提出物（締切が決まったら deadline を記入） */
  submissions: [
    { item: { en: "Proceedings paper", ja: "プロシーディング原稿", vi: "Bài kỷ yếu" },
      format: { en: "PDF, A4, max. 4 pages", ja: "PDF・A4・最大4枚", vi: "PDF, A4, tối đa 4 trang" },
      deadline: { en: "Tue, 30 Nov 2027", ja: "2027年11月30日（火）", vi: "Thứ Ba, 30/11/2027" } },
    { item: { en: "Poster", ja: "ポスター", vi: "Poster" },
      format: { en: "PDF, 1 page", ja: "PDF・1枚", vi: "PDF, 1 trang" },
      deadline: { en: "Tue, 30 Nov 2027", ja: "2027年11月30日（火）", vi: "Thứ Ba, 30/11/2027" } },
    { item: { en: "Presentation slides", ja: "発表スライド", vi: "Slide trình bày" },
      format: { en: "PDF (16:9)", ja: "PDF（16:9）", vi: "PDF (16:9)" },
      deadline: { en: "Wed, 8 Dec 2027", ja: "2027年12月8日（水）", vi: "Thứ Tư, 08/12/2027" } }
  ],

  awards: [
    // 表彰後に記入。award は多言語可、id は papers の id
    // { award: { en: "Best Presentation Award", ja: "最優秀発表賞", vi: "Giải Báo cáo xuất sắc nhất" }, id: "S1-01" },
  ],

  /* 発表一覧
     title / abstract は多言語オブジェクトにもできます：
       title: { en: "...", ja: "...", vi: "..." }
     引用表記には常に en が使われます。 */
  papers: [
    {
      /* ▼ 記入例（SAMPLE）— 実際の発表に差し替えてください */
      id: "S1-01", session: "S1", order: 1,
      title: {
        en: "[SAMPLE] Development of a Low-Cost IoT System for Monitoring Classroom Air Quality",
        ja: "【記入例】教室の空気質を測る低コストIoTモニタリングシステムの開発",
        vi: "[MẪU] Phát triển hệ thống IoT chi phí thấp giám sát chất lượng không khí lớp học"
      },
      authors: [
        { name: "Taro Ariake", inst: "AR", presenter: true },
        { name: "Nguyen Van An", inst: "CT" },
        { name: "Tran Thi Binh", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["IoT", "CO2 concentration", "indoor air quality", "microcontroller"],
      abstract: {
        en: "This study develops a low-cost monitoring system for indoor air quality in classrooms. Sensor units measuring CO2 concentration, temperature and relative humidity were built with a commercially available microcontroller, and data were transmitted to a cloud server at one-minute intervals. Measurements were carried out in two classrooms over four weeks. The results show that CO2 concentration exceeded 1,000 ppm in about 40% of class hours when windows were closed, and that a simple alert displayed to the teacher reduced this proportion. The total cost of one unit was below 30 USD. The system can be adopted by other schools with minimal technical support.",
        ja: "本研究は、教室の空気質を測定する低コストのモニタリングシステムを開発するものである。市販のマイコンを用いてCO2濃度・温度・相対湿度を測るセンサユニットを製作し、1分間隔でクラウドサーバに送信した。2教室で4週間の測定を行った結果、窓を閉めた状態では授業時間の約40%でCO2濃度が1,000 ppmを超えること、教員に簡易な警告を表示することでその割合が低下することが確認された。ユニット1台の費用は30米ドル未満であり、技術的支援が少ない学校でも導入できると考えられる。",
        vi: "Nghiên cứu này phát triển một hệ thống chi phí thấp để giám sát chất lượng không khí trong lớp học. Các bộ cảm biến đo nồng độ CO2, nhiệt độ và độ ẩm tương đối được chế tạo bằng vi điều khiển thương mại, dữ liệu được gửi lên máy chủ đám mây mỗi phút một lần. Phép đo được thực hiện tại hai phòng học trong bốn tuần. Kết quả cho thấy khi đóng cửa sổ, nồng độ CO2 vượt quá 1.000 ppm trong khoảng 40% thời gian học, và việc hiển thị cảnh báo đơn giản cho giáo viên giúp giảm tỷ lệ này. Chi phí mỗi bộ dưới 30 USD, cho phép các trường khác áp dụng với hỗ trợ kỹ thuật tối thiểu."
      },
      pdf: "papers/S1-01.pdf",
      poster: "posters/S1-01.pdf"
    },
    {
      id: "S1-02", session: "S1", order: 2,
      title: "Title of the Presentation (S1-02)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-02.pdf"
      poster: ""
    },
    {
      id: "S1-03", session: "S1", order: 3,
      title: "Title of the Presentation (S1-03)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-03.pdf"
      poster: ""
    },
    {
      id: "S1-04", session: "S1", order: 4,
      title: "Title of the Presentation (S1-04)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-04.pdf"
      poster: ""
    },
    {
      id: "S1-05", session: "S1", order: 5,
      title: "Title of the Presentation (S1-05)",
      authors: [
        { name: "Firstname Lastname", inst: "OK", presenter: true },
        { name: "Firstname Lastname", inst: "OK" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-05.pdf"
      poster: ""
    },
    {
      id: "S1-06", session: "S1", order: 6,
      title: "Title of the Presentation (S1-06)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-06.pdf"
      poster: ""
    },
    {
      id: "S1-07", session: "S1", order: 7,
      title: "Title of the Presentation (S1-07)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-07.pdf"
      poster: ""
    },
    {
      id: "S1-08", session: "S1", order: 8,
      title: "Title of the Presentation (S1-08)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S1-08.pdf"
      poster: ""
    },
    {
      id: "S2-01", session: "S2", order: 1,
      title: "Title of the Presentation (S2-01)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-01.pdf"
      poster: ""
    },
    {
      id: "S2-02", session: "S2", order: 2,
      title: "Title of the Presentation (S2-02)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-02.pdf"
      poster: ""
    },
    {
      id: "S2-03", session: "S2", order: 3,
      title: "Title of the Presentation (S2-03)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-03.pdf"
      poster: ""
    },
    {
      id: "S2-04", session: "S2", order: 4,
      title: "Title of the Presentation (S2-04)",
      authors: [
        { name: "Firstname Lastname", inst: "OK", presenter: true },
        { name: "Firstname Lastname", inst: "OK" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-04.pdf"
      poster: ""
    },
    {
      id: "S2-05", session: "S2", order: 5,
      title: "Title of the Presentation (S2-05)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-05.pdf"
      poster: ""
    },
    {
      id: "S2-06", session: "S2", order: 6,
      title: "Title of the Presentation (S2-06)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-06.pdf"
      poster: ""
    },
    {
      id: "S2-07", session: "S2", order: 7,
      title: "Title of the Presentation (S2-07)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-07.pdf"
      poster: ""
    },
    {
      id: "S2-08", session: "S2", order: 8,
      title: "Title of the Presentation (S2-08)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-08.pdf"
      poster: ""
    },
    {
      id: "S2-09", session: "S2", order: 9,
      title: "Title of the Presentation (S2-09)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S2-09.pdf"
      poster: ""
    },
    {
      id: "S3-01", session: "S3", order: 1,
      title: "Title of the Presentation (S3-01)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-01.pdf"
      poster: ""
    },
    {
      id: "S3-02", session: "S3", order: 2,
      title: "Title of the Presentation (S3-02)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-02.pdf"
      poster: ""
    },
    {
      id: "S3-03", session: "S3", order: 3,
      title: "Title of the Presentation (S3-03)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-03.pdf"
      poster: ""
    },
    {
      id: "S3-04", session: "S3", order: 4,
      title: "Title of the Presentation (S3-04)",
      authors: [
        { name: "Firstname Lastname", inst: "OK", presenter: true },
        { name: "Firstname Lastname", inst: "OK" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-04.pdf"
      poster: ""
    },
    {
      id: "S3-05", session: "S3", order: 5,
      title: "Title of the Presentation (S3-05)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-05.pdf"
      poster: ""
    },
    {
      id: "S3-06", session: "S3", order: 6,
      title: "Title of the Presentation (S3-06)",
      authors: [
        { name: "Firstname Lastname", inst: "CT", presenter: true },
        { name: "Firstname Lastname", inst: "CT" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-06.pdf"
      poster: ""
    },
    {
      id: "S3-07", session: "S3", order: 7,
      title: "Title of the Presentation (S3-07)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-07.pdf"
      poster: ""
    },
    {
      id: "S3-08", session: "S3", order: 8,
      title: "Title of the Presentation (S3-08)",
      authors: [
        { name: "Firstname Lastname", inst: "OK", presenter: true },
        { name: "Firstname Lastname", inst: "OK" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-08.pdf"
      poster: ""
    },
    {
      id: "S3-09", session: "S3", order: 9,
      title: "Title of the Presentation (S3-09)",
      authors: [
        { name: "Firstname Lastname", inst: "AR", presenter: true },
        { name: "Firstname Lastname", inst: "AR" }
      ],
      supervisor: "Supervisor Name",
      keywords: ["keyword 1", "keyword 2", "keyword 3"],
      abstract: "Abstract text (approx. 150–200 words). Replace this placeholder with the submitted abstract.",
      pdf: "",      // 例: "papers/S3-09.pdf"
      poster: ""
    }
  ]
};
