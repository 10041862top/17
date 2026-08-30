document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- Database of Platforms ---
    const DB = {
        'sbir': {
            title: '經濟部 SBIR 中小企業創新研發計畫',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>評估維度</th><th>您的產品 (自動帶入)</th><th>市場競品 A</th><th>AI 建議切入點 (創新指標)</th></tr></thead>
                    <tbody>
                        <tr><td>技術核心</td><td>AI 語意分析引擎</td><td>傳統關鍵字比對</td><td>強調 <strong>LLM 微調技術</strong>在特定領域的準確率提升</td></tr>
                        <tr><td>商業模式</td><td>SaaS 訂閱制</td><td>買斷制軟體</td><td>結合 <strong>雲端經濟</strong> 與 <strong>ESG 無紙化</strong> 效益</td></tr>
                        <tr><td>計畫期程</td><td>12 個月</td><td>-</td><td>符合 Phase 2 要求，建議分 4 期查核</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【附件一】創新研發計畫書 (草案)</h3>
                <p><strong>壹、 計畫摘要</strong></p>
                <p>本計畫旨在開發具備高度語意理解能力之「次世代 AI 智慧客服引擎」，以解決現有中小企業在客服人力短缺及服務品質不一之痛點。透過導入開源大型語言模型（LLM）並進行在地化領域微調，預期能將客服回應準確率提升至 95% 以上。</p>
                <p><strong>貳、 創新性說明</strong></p>
                <ul>
                    <li><strong>技術創新：</strong>採用 RAG (檢索增強生成) 架構，解決傳統 LLM 幻覺問題。</li>
                    <li><strong>服務創新：</strong>提供中小型電商隨插即用之 API，降低技術導入門檻。</li>
                </ul>
            `,
            fillTerminal: [
                "▶ 啟動 SBIR 自動化填表程序...",
                "# 正在連線至 https://www.sbir.org.tw/ ...",
                "[OK] 成功登入系統 (Token 驗證通過)",
                "[OK] 填入公司基本資料: user-profile.yaml",
                "[OK] 填入計畫名稱: 次世代 AI 智慧客服引擎開發計畫",
                "[OK] 上傳計畫書 PDF 檔... 成功!",
                "[OK] 經費預算表已自動化轉換填入",
                "",
                "> 填表完成 (耗時: 45秒)。等待人工最終確認送出。"
            ]
        },
        'ai-plus': {
            title: '經濟部 AI+ 產業計畫',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>評估維度</th><th>傳統模式</th><th>導入 AI 後預期效益</th></tr></thead>
                    <tbody>
                        <tr><td>生產線良率檢測</td><td>人工目檢 (漏檢率 5%)</td><td>AOI 結合電腦視覺 (漏檢率 < 0.1%)</td></tr>
                        <tr><td>碳排數據盤查</td><td>Excel 人工紀錄整理</td><td>自動化收集與預測模型 (節省 80% 工時)</td></tr>
                        <tr><td>政策切合度</td><td>無直接相關</td><td>高度符合「雙軸轉型」之政策目標</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【AI+ 計畫】數位轉型導入企劃書</h3>
                <p><strong>壹、 產業痛點與需求分析</strong></p>
                <p>我國傳統製造業正面臨全球供應鏈重組及缺工危機，如何在維持產能的同時降低碳排放，成為首要課題。本公司現有之生產線依賴大量人工進行瑕疵檢測，不僅效率受限，且品質難以標準化。</p>
                <p><strong>貳、 AI 技術導入方案</strong></p>
                <ul>
                    <li><strong>邊緣運算 (Edge AI)：</strong>在產線終端部署輕量化瑕疵檢測模型，達成毫秒級即時反應。</li>
                    <li><strong>數據中台建置：</strong>彙整各機台數據，建立戰情室進行預測性維護 (Predictive Maintenance)。</li>
                </ul>
            `,
            fillTerminal: [
                "▶ 啟動 AI+ 計畫自動化填表...",
                "# 讀取 moeai-plus 入口網憑證...",
                "[OK] 驗證廠商資格 (符合製造業定義)",
                "[OK] 選擇計畫類別: A類 (AI 技術實證)",
                "[OK] 自動貼上 3,000 字計畫摘要與績效指標 (KPI)",
                "[OK] 附加檔案: 財報、企劃書、佐證文件",
                "",
                "> 資料鍵入完畢，狀態: [待送出]。"
            ]
        },
        'digiplus': {
            title: 'DIGITAL+ 數位服務創新補助',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>評估維度</th><th>您的平台架構</th><th>AI 優化建議 (符合補助宗旨)</th></tr></thead>
                    <tbody>
                        <tr><td>服務可擴充性</td><td>單機版軟體</td><td>轉型為 <strong>Multi-tenant SaaS</strong> 架構，提升擴充性</td></tr>
                        <tr><td>數據加值應用</td><td>僅儲存交易紀錄</td><td>導入 <strong>AI 預測模型</strong>，提供商業洞察報表</td></tr>
                        <tr><td>市場營收模式</td><td>一次性買斷</td><td>改採 <strong>ARR (年度經常性收入)</strong> 訂閱制</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【DIGITAL+】數位服務創新計畫書</h3>
                <p><strong>壹、 數位服務創新概念</strong></p>
                <p>本計畫擬開發「去中心化資安聯防平台」，針對中小企業面臨的勒索軟體威脅，提供零信任 (Zero Trust) 架構的防禦機制。透過 SaaS 訂閱模式，讓資源有限的企業也能享有企業級的資安防護。</p>
                <p><strong>貳、 系統架構與關鍵技術</strong></p>
                <ul>
                    <li><strong>微服務架構 (Microservices)：</strong>採用 Kubernetes 進行容器化部署，確保系統高可用性。</li>
                    <li><strong>零信任認證模組：</strong>結合 FIDO2 無密碼認證，杜絕帳號外流風險。</li>
                </ul>
            `,
            fillTerminal: [
                "▶ 啟動 DIGITAL+ SPA 自動填表程序...",
                "# 處理 React 前端路由跳轉...",
                "[OK] 建立新的申請草稿",
                "[OK] 填入技術服務能量登錄證號",
                "[OK] 系統架構圖 (JPG) 上傳完成",
                "[OK] 自動拆解計畫書內容並填入對應的 Web 表單欄位",
                "",
                "> 檢核無誤，進度 100%。"
            ]
        },
        'siir': {
            title: 'SIIR 服務業創新研發',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>消費階段</th><th>傳統服務痛點</th><th>AI 創新服務體驗 (計畫亮點)</th></tr></thead>
                    <tbody>
                        <tr><td>進店前 (引流)</td><td>依賴實體傳單，轉換率低</td><td>LBS 結合 AR 互動優惠券</td></tr>
                        <tr><td>體驗中 (服務)</td><td>尖峰時段排隊動線混亂</td><td>無人化自助點餐結合 AI 臉辨客製化推薦</td></tr>
                        <tr><td>離店後 (留存)</td><td>無法精準進行二次行銷</td><td>透過 LINE OA 綁定自動觸發沉浸式再行銷</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【SIIR】服務創新計畫書</h3>
                <p><strong>壹、 創新服務模式說明</strong></p>
                <p>為響應「智慧化」與「低碳化」趨勢，本計畫提出「沉浸式綠色餐飲體驗服務」。有別於傳統餐飲業，本計畫導入 AI 食材採購預測系統，從源頭降低 30% 食材剩食浪費，並提供消費者完整的碳足跡餐盤履歷。</p>
                <p><strong>貳、 預期商業效益</strong></p>
                <ul>
                    <li><strong>經濟效益：</strong>預計帶動整體營收成長 20%，增加就業人數 5 人。</li>
                    <li><strong>永續效益：</strong>落實 ESG 減碳目標，單店每年預計減少 1,500 公斤碳排放。</li>
                </ul>
            `,
            fillTerminal: [
                "▶ 啟動 SIIR 自動化送件模組...",
                "[OK] 驗證負責人自然人憑證 / 工商憑證",
                "[OK] 選擇申請類別：[個別創新]",
                "[OK] 匯入查稅同意書、勞保明細等附件",
                "[OK] 自動帶入經費查核表數據 (人事費/設備費/委外費)",
                "",
                "> SIIR 計畫資料登錄成功。"
            ]
        },
        'startup': {
            title: '台灣指標性新創競賽',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>評分項目</th><th>權重</th><th>Pitch Deck 優化建議</th></tr></thead>
                    <tbody>
                        <tr><td>市場規模與痛點 (TAM/SAM/SOM)</td><td>30%</td><td>使用 Top-down 估算，強調痛點的「不可替代性」</td></tr>
                        <tr><td>技術門檻與護城河 (Moat)</td><td>40%</td><td>具體化專利數量、演算法獨特性，而非僅是 UI/UX</td></tr>
                        <tr><td>商業模式與 Traction</td><td>30%</td><td>優先展示現有的 PoC 成果與早期營收轉換率</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【Pitch Deck】3 分鐘電梯簡報腳本</h3>
                <p><strong>[開場 - 痛點] (0:00 - 0:45)</strong></p>
                <p>各位評審好，我們是 Team Alpha。你知道全球每年有價值 500 億美金的庫存被浪費嗎？這不是因為沒人買，而是因為預測不準。</p>
                <p><strong>[解決方案與市場] (0:45 - 1:45)</strong></p>
                <p>我們開發了基於強化學習的動態定價與庫存預測系統。目前在台灣市場已導入 3 家連鎖超商，幫他們減少了 15% 的報廢率。我們採用 B2B 訂閱制，這是一個高達 20 億美金的潛在市場。</p>
                <p><strong>[結尾 - 呼籲] (2:30 - 3:00)</strong></p>
                <p>我們正在尋求 Seed Round 50 萬美金的資金，用於拓展東南亞市場。加入我們，一起消滅供應鏈浪費！</p>
            `,
            fillTerminal: [
                "▶ 啟動 競賽平台 自動報名腳本...",
                "[OK] 建立團隊資料: Team Alpha",
                "[OK] 邀請團隊成員並發送確認信",
                "[OK] 填寫 One-Pager 文字欄位 (500字內限制檢查通過)",
                "[OK] 貼上 YouTube Pitch 影片連結",
                "",
                "> 報名手續完成，已成功取得參賽資格序號！"
            ]
        },
        'tender': {
            title: '政府標案服務建議書 (RFP)',
            researchHTML: `
                <table class="mock-table">
                    <thead><tr><th>招標需求項目</th><th>評選權重</th><th>我方對應之解決方案</th></tr></thead>
                    <tbody>
                        <tr><td>資訊安全規範 (資安檢測)</td><td>20%</td><td>承諾取得 ISO27001 認證並附上第三方弱點掃描報告</td></tr>
                        <tr><td>專案管理與時程控管能力</td><td>30%</td><td>導入敏捷開發 (Agile) 搭配雙週 Sprint 交付機制</td></tr>
                        <tr><td>創新與加值服務</td><td>15%</td><td>免費提供 3 個月的 AI 智慧客服模組作為加值</td></tr>
                    </tbody>
                </table>
            `,
            writeHTML: `
                <h3>【服務建議書】○○部公文電子交換系統升級案</h3>
                <p><strong>第一章、 專案概述與整體架構</strong></p>
                <p>本團隊深知貴部針對「公文電子交換系統」在效能與資安上之迫切需求。本建議書提出基於微服務架構之高可用性 (High Availability) 解決方案，確保公文交換之零時差與零掉單。</p>
                <p><strong>第二章、 專案時程與查核點</strong></p>
                <ul>
                    <li><strong>第一階段 (第 1-30 日)：</strong>完成系統需求訪談與規格確認 (簽署 SD 文件)。</li>
                    <li><strong>第二階段 (第 31-90 日)：</strong>完成核心交換模組開發與封閉測試 (UAT)。</li>
                </ul>
            `,
            fillTerminal: [
                "▶ 啟動 政府採購網自動化投標準備...",
                "[OK] 解析標案案號: 1120000XXX",
                "[OK] 下載招標文件清單確認 (共 7 份附件)",
                "[OK] 自動產出: 投標廠商聲明書、切結書 (PDF 填表完成)",
                "[OK] 建立服務建議書裝訂目錄與頁碼檢核",
                "",
                "> 招標文件包裝完畢，請進行工商憑證電子簽章即可上傳！"
            ]
        }
    };

    let currentProject = 'sbir';

    // UI Elements
    const navItems = document.querySelectorAll('.nav-item');
    const projectTitle = document.getElementById('project-title');
    const btnResearch = document.getElementById('btn-research');
    const btnWrite = document.getElementById('btn-write');
    const btnFill = document.getElementById('btn-fill');
    
    const viewResearch = document.getElementById('view-research');
    const viewWrite = document.getElementById('view-write');
    const viewFill = document.getElementById('view-fill');
    
    const contentResearch = document.getElementById('content-research');
    const contentWrite = document.getElementById('content-write');
    const contentFill = document.getElementById('content-fill');

    function getCurrentTime() {
        return new Date().toLocaleTimeString('zh-TW', { hour12: false });
    }

    function resetViews() {
        viewResearch.style.display = 'none';
        viewWrite.style.display = 'none';
        viewFill.style.display = 'none';
        
        btnResearch.classList.remove('active');
        btnResearch.disabled = false;
        
        btnWrite.classList.remove('active');
        btnWrite.disabled = true;
        
        btnFill.classList.remove('active');
        btnFill.disabled = true;
    }

    // Handle Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            
            currentProject = item.getAttribute('data-id');
            projectTitle.textContent = DB[currentProject].title;
            
            resetViews();
        });
    });

    // Handle Research Button
    btnResearch.addEventListener('click', () => {
        btnResearch.disabled = true;
        btnResearch.classList.add('active');
        viewResearch.style.display = 'block';
        contentResearch.innerHTML = `
            <div class="loader-container">
                <div class="spinner"></div>
                <p>AI 正在爬取最新簡章與分析資料庫...</p>
            </div>
        `;
        
        setTimeout(() => {
            contentResearch.innerHTML = DB[currentProject].researchHTML;
            viewResearch.querySelector('.current-time').textContent = getCurrentTime();
            btnWrite.disabled = false;
        }, 1500);
    });

    // Handle Write Button
    btnWrite.addEventListener('click', () => {
        btnWrite.disabled = true;
        btnWrite.classList.add('active');
        viewWrite.style.display = 'block';
        contentWrite.innerHTML = `<div class="typing-cursor">AI 正在依據調研結果撰寫文件中...</div>`;
        
        setTimeout(() => {
            contentWrite.innerHTML = DB[currentProject].writeHTML;
            viewWrite.querySelector('.current-time').textContent = getCurrentTime();
            btnFill.disabled = false;
        }, 2000);
    });

    // Handle Fill Button
    btnFill.addEventListener('click', () => {
        btnFill.disabled = true;
        btnFill.classList.add('active');
        viewFill.style.display = 'block';
        contentFill.innerHTML = '';
        
        const lines = DB[currentProject].fillTerminal;
        let lineIdx = 0;
        
        function typeLine() {
            if (lineIdx < lines.length) {
                const line = lines[lineIdx];
                let formattedLine = line;
                if (line.startsWith('▶')) formattedLine = `<span class="keyword">${line}</span>`;
                else if (line.startsWith('#')) formattedLine = `<span class="comment">${line}</span>`;
                else if (line.includes('[OK]')) formattedLine = line.replace('[OK]', '<span class="success">[OK]</span>');
                else if (line.startsWith('>')) formattedLine = `<span class="keyword">${line}</span>`;
                
                contentFill.innerHTML += formattedLine + '<br>';
                lineIdx++;
                
                // Auto scroll to bottom
                const windowBody = contentFill.parentElement;
                windowBody.scrollTop = windowBody.scrollHeight;
                
                setTimeout(typeLine, Math.random() * 400 + 200);
            }
        }
        
        typeLine();
    });
});
