document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- Template Generator Engine ---
    const DB = {
        'sbir-central': {
            title: '經濟部 SBIR 中小企業創新研發計畫',
            getDoc: (c, p, f) => `
                <h3>【經濟部 SBIR】計畫書：${p}</h3>
                <p><strong>壹、 計畫摘要</strong></p>
                <p>本計畫由「${c}」提出，旨在開發具備高度競爭力之「${p}」。有鑑於目前市場上面臨諸多挑戰，本團隊將導入先進技術以解決現有痛點，預期能帶動整體產業升級。</p>
                <p><strong>貳、 創新性與核心技術</strong></p>
                <p>本專案的核心優勢在於：${f}。有別於傳統解決方案，本系統不僅能大幅降低營運成本，更能建立難以跨越的技術護城河。</p>
                <p><strong>參、 預期效益與商業化規劃</strong></p>
                <ul>
                    <li>完成系統原型開發，並取得 2 項發明專利。</li>
                    <li>預計第一年可推廣至 50 家企業客戶，創造 1,500 萬產值。</li>
                    <li>響應節能減碳政策，預估可降低 30% 之無效能耗。</li>
                </ul>
            `
        },
        'sbir-local': {
            title: '全台地方型 SBIR',
            getDoc: (c, p, f) => `
                <h3>【地方型 SBIR】創新研發計畫：${p}</h3>
                <p><strong>一、 計畫背景與在地連結</strong></p>
                <p>「${c}」深耕在地多年，為響應縣市政府推動之產業轉型政策，特提出「${p}」計畫。本計畫將結合在地資源，帶動地方經濟發展與就業機會。</p>
                <p><strong>二、 研發重點與特色</strong></p>
                <p>本計畫的關鍵創新點為：${f}。透過此項技術突破，我們將協助在地傳統產業進行數位化與智慧化升級。</p>
                <p><strong>三、 經費預算與實施期程</strong></p>
                <ul>
                    <li>計畫總期程為 10 個月。</li>
                    <li>主要經費投入於研發人員薪資與創新設備購置。</li>
                    <li>預期帶動地方衍生投資 500 萬元。</li>
                </ul>
            `
        },
        'ai-plus': {
            title: '經濟部 AI+ 產業計畫',
            getDoc: (c, p, f) => `
                <h3>【AI+ 計畫】數位轉型導入企劃書</h3>
                <p><strong>壹、 產業痛點與需求分析</strong></p>
                <p>我國製造業與服務業正面臨全球供應鏈重組及缺工危機。「${c}」深知轉型之迫切性，因此擬導入「${p}」，以資料驅動決策，提升整體營運韌性。</p>
                <p><strong>貳、 AI 技術導入方案</strong></p>
                <p>本案將採用先進演算法，具體應用場景為：${f}。透過建立數據中台與 AI 預測模型，我們預期能將錯誤率降低 80%，並提升產能 25%。</p>
                <p><strong>參、 績效指標 (KPI)</strong></p>
                <ul>
                    <li>AI 模型準確度達 95% 以上。</li>
                    <li>單月節省作業工時達 3,000 小時。</li>
                    <li>培育 AI 轉型種子人員 10 名。</li>
                </ul>
            `
        },
        'digiplus': {
            title: 'DIGITAL+ 數位服務創新補助',
            getDoc: (c, p, f) => `
                <h3>【DIGITAL+】數位服務創新計畫書：${p}</h3>
                <p><strong>壹、 數位服務創新概念</strong></p>
                <p>本計畫由「${c}」發起，旨在打造次世代之 SaaS 服務。我們觀察到市場上缺乏整合性解決方案，因此推出「${p}」，提供隨插即用的雲端服務。</p>
                <p><strong>貳、 系統架構與關鍵技術</strong></p>
                <p>本平台採用高擴充性之微服務架構，核心亮點包括：${f}。我們將透過 API 經濟模式，快速串聯上下游生態系。</p>
                <p><strong>參、 商業模式與市場拓展</strong></p>
                <ul>
                    <li>採 B2B 訂閱制 (ARR 模式)，確保穩定營收。</li>
                    <li>首年目標獲取 100 家付費企業用戶。</li>
                    <li>第二年計畫將服務拓展至東南亞市場。</li>
                </ul>
            `
        },
        'siir': {
            title: 'SIIR 服務業創新研發',
            getDoc: (c, p, f) => `
                <h3>【SIIR】服務創新計畫書：${p}</h3>
                <p><strong>壹、 創新服務模式說明</strong></p>
                <p>為響應「智慧化」與「低碳化」趨勢，「${c}」提出「${p}」計畫。本計畫將重新設計消費者旅程 (Customer Journey)，打造線上線下 (O2O) 融合之無縫體驗。</p>
                <p><strong>貳、 服務缺口與解決方案</strong></p>
                <p>現有服務流程常導致顧客流失。我們的解方為：${f}。這不僅能大幅提升顧客滿意度 (NPS)，更能精準收集數據以進行二次行銷。</p>
                <p><strong>參、 預期商業與永續效益</strong></p>
                <ul>
                    <li>提升客單價 15%，帶動整體營收成長 20%。</li>
                    <li>無紙化與自動化流程，每年預估減少 1,500 公斤碳排。</li>
                </ul>
            `
        },
        'moc': {
            title: '文化部各項補助',
            getDoc: (c, p, f) => `
                <h3>【文化部】文化創意產業發展補助計畫書</h3>
                <p><strong>一、 計畫宗旨與文化意涵</strong></p>
                <p>「${c}」致力於推動台灣文化底蘊之創新應用。本計畫「${p}」旨在結合現代科技與在地文化元素，創造具備國際視野之文創 IP 服務。</p>
                <p><strong>二、 跨域整合與科技應用</strong></p>
                <p>我們將透過數位科技賦能文化產業，具體作法包含：${f}。此舉將打破傳統展演與文創產品之地域限制，觸及更廣大的年輕客群。</p>
                <p><strong>三、 成果展示與行銷規劃</strong></p>
                <ul>
                    <li>舉辦 3 場線上與實體結合之沉浸式展演。</li>
                    <li>與至少 5 位在地創作者達成跨界聯名合作。</li>
                </ul>
            `
        },
        'nstc': {
            title: '國科會計畫補助',
            getDoc: (c, p, f) => `
                <h3>【國科會】產學合作研究計畫申請書</h3>
                <p><strong>一、 研究動機與背景</strong></p>
                <p>在前端科技競爭日趨激烈之環境下，「${c}」擬聯合頂尖學術機構進行「${p}」之先期研究。本研究旨在突破現有技術瓶頸，達到國際領先水準。</p>
                <p><strong>二、 研究方法與學理基礎</strong></p>
                <p>本計畫之技術突破點在於：${f}。透過產學雙方的緊密合作，我們將把實驗室之研究成果，轉化為具備商業價值之實體產品。</p>
                <p><strong>三、 預期研發成果與專利佈局</strong></p>
                <ul>
                    <li>發表 2 篇國際期刊或研討會論文。</li>
                    <li>申請 1 項美國發明專利及 2 項台灣發明專利。</li>
                    <li>培育 3 名高階研發碩博士人才。</li>
                </ul>
            `
        },
        'sme': {
            title: '中小及新創企業署補助',
            getDoc: (c, p, f) => `
                <h3>【中小及新創企業署】中小企業創育機構發展計畫</h3>
                <p><strong>壹、 企業現況與升級需求</strong></p>
                <p>「${c}」作為具潛力之中小企業，正面臨規模化擴張之關鍵期。為強化體質，我們提出「${p}」，期望藉由政策支持，加速企業升級轉型。</p>
                <p><strong>貳、 核心轉型策略</strong></p>
                <p>我們的轉型亮點為：${f}。這將協助我們從傳統代工/純服務提供者，轉型為具備自有品牌與核心技術的高附加價值企業。</p>
                <p><strong>參、 財務規劃與風險控管</strong></p>
                <ul>
                    <li>導入 ERP/CRM 系統，提升財務透明度與管理效率。</li>
                    <li>預計獲利潤率將自現有之 10% 提升至 18%。</li>
                </ul>
            `
        },
        'smepass': {
            title: 'G2B 企業得來速 smepass',
            getDoc: (c, p, f) => `
                <h3>【smepass】企業一站式服務申請書</h3>
                <p><strong>一、 企業基本資料與營運概況</strong></p>
                <p>申請企業：「${c}」。本公司主要營運項目涵蓋創新科技服務，近期主力推動之專案為「${p}」。</p>
                <p><strong>二、 跨機關資源整合需求</strong></p>
                <p>為加速專案落地，我們需要透過 smepass 平台整合各項行政資源，包含工商登記變更、商標申請與補助資格認證。本專案之核心優勢為：${f}。</p>
                <p><strong>三、 預計申辦事項清單</strong></p>
                <ul>
                    <li>完成數位發展部之資訊安全能量登錄。</li>
                    <li>申請青年創業及啟動金貸款（最高額度）。</li>
                </ul>
            `
        },
        'bounty': {
            title: '獎金獵人 Bounty Hunter',
            getDoc: (c, p, f) => `
                <h3>【競賽提案】${p} 參賽作品企劃書</h3>
                <p><strong>一、 創作理念與主題契合度</strong></p>
                <p>大家好，我們是團隊「${c}」。我們的參賽作品「${p}」完美契合本次競賽之「永續創新」主題，致力於透過科技解決社會議題。</p>
                <p><strong>二、 作品特色與亮點</strong></p>
                <p>我們的作品與其他參賽者最大的差異在於：${f}。這不僅是一個概念，而是一個已經具備雛形且可實際運作的解決方案。</p>
                <p><strong>三、 未來發展與實作可行性</strong></p>
                <ul>
                    <li>目前已完成 MVP (最小可行性產品) 開發與內部測試。</li>
                    <li>若獲獎，獎金將全數投入於介面優化與第一波市場封測。</li>
                </ul>
            `
        },
        'startup': {
            title: 'Startup Terrace 台灣新創競技場',
            getDoc: (c, p, f) => `
                <h3>【Pitch Deck】${c} - ${p} 募資簡報腳本</h3>
                <p><strong>[Slide 1] 痛點與市場規模 (TAM/SAM/SOM)</strong></p>
                <p>各位投資人好，我們是「${c}」。我們發現市場上有一個價值 50 億美金的痛點尚未被解決，而現有方案效率極低。</p>
                <p><strong>[Slide 2] 解決方案與護城河 (Solution & Moat)</strong></p>
                <p>我們推出了「${p}」。我們的核心技術護城河是：${f}。這使我們的客戶獲取成本 (CAC) 遠低於競品，且留存率極高。</p>
                <p><strong>[Slide 3] 商業模式與 Traction</strong></p>
                <ul>
                    <li>採用 B2B 訂閱制 (SaaS)，目前已有 5 家付費企業客戶。</li>
                    <li>本次預計募資 100 萬美金 (Seed Round)，用於拓展海外市場與招募研發團隊。</li>
                </ul>
            `
        },
        'qitc': {
            title: '高通台灣創新競賽 (QITC)',
            getDoc: (c, p, f) => `
                <h3>【QITC】高通台灣創新競賽 參賽企劃書</h3>
                <p><strong>壹、 團隊簡介與參賽動機</strong></p>
                <p>「${c}」專注於邊緣運算與 AIoT 領域。我們希望透過參與 QITC，取得高通 Snapdragon 平台的技術支援，加速「${p}」的落地應用。</p>
                <p><strong>貳、 技術架構與高通平台整合</strong></p>
                <p>本專案將深度整合高通行動平台，利用其 NPU 進行終端推論。我們的技術亮點為：${f}。這將大幅降低資料傳輸延遲，並保護使用者隱私。</p>
                <p><strong>參、 商業潛力與全球化佈局</strong></p>
                <ul>
                    <li>鎖定智慧城市與工業 4.0 兩大垂直領域。</li>
                    <li>預計於育成期間完成高通平台之相容性驗證，並推展至全球供應鏈。</li>
                </ul>
            `
        },
        'pcc': {
            title: '政府電子採購網',
            getDoc: (c, p, f) => `
                <h3>【服務建議書 (RFP)】政府標案：${p}</h3>
                <p><strong>第一章、 專案概述與整體架構</strong></p>
                <p>「${c}」針對本次招標案需求，提出最佳化解決方案。我們將以最高規格之資訊安全標準，為貴機關打造具備高可用性之系統。</p>
                <p><strong>第二章、 核心技術與加值服務</strong></p>
                <p>除了完全符合 RFP 之基本要求，我們額外提供的創新加值服務為：${f}。這將大幅減輕機關承辦人員之負擔，並提升便民服務品質。</p>
                <p><strong>第三章、 專案管理與資安規範</strong></p>
                <ul>
                    <li>承諾導入 ISO 27001 資安管理制度，並附上第三方弱點掃描報告。</li>
                    <li>採用敏捷開發 (Agile) 搭配雙週 Sprint 審查，確保進度 100% 準確。</li>
                </ul>
            `
        },
        'g0v-pcc': {
            title: 'g0v pcc API 整合',
            getDoc: (c, p, f) => `
                <h3>【g0v 標案 API】資料加值與整合應用計畫</h3>
                <p><strong>一、 專案背景與開源精神</strong></p>
                <p>「${c}」為響應 g0v 零時政府之開放資料精神，特發起「${p}」專案。本專案將介接 pcc API，將生硬的政府採購數據，轉化為具備商業洞察的視覺化儀表板。</p>
                <p><strong>二、 API 串接架構與技術特點</strong></p>
                <p>我們將建立自動化的 Data Pipeline，核心技術包括：${f}。確保資料更新的即時性與正確性，並透過 RESTful API 提供給第三方開發者使用。</p>
                <p><strong>三、 應用場景與社會影響力</strong></p>
                <ul>
                    <li>協助中小企業精準尋找適合的標案，降低投標門檻。</li>
                    <li>透過數據追蹤，提升政府採購透明度與公共監督效能。</li>
                </ul>
            `
        }
    };

    let currentProject = 'sbir-central';

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
    
    const docTitleDisplay = document.getElementById('doc-title-display');
    const btnCopy = document.getElementById('btn-copy');
    const btnDownload = document.getElementById('btn-download');

    // Input Elements
    const inCompany = document.getElementById('input-company');
    const inProduct = document.getElementById('input-product');
    const inFeatures = document.getElementById('input-features');

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

    // Step 1: Research
    btnResearch.addEventListener('click', () => {
        btnResearch.disabled = true;
        btnResearch.classList.add('active');
        viewResearch.style.display = 'block';
        contentResearch.innerHTML = `
            <div class="loader-container">
                <div class="spinner"></div>
                <p>AI 正在根據您的產業 (${inCompany.value}) 進行全網調研...</p>
            </div>
        `;
        
        setTimeout(() => {
            contentResearch.innerHTML = `
                <table class="mock-table">
                    <thead><tr><th>評估維度</th><th>您的專案: ${inProduct.value}</th><th>AI 建議切入點</th></tr></thead>
                    <tbody>
                        <tr><td>技術與特色</td><td>${inFeatures.value.substring(0, 30)}...</td><td>加強描述在<b>該補助計畫</b>中的必要性</td></tr>
                        <tr><td>市場競爭力</td><td>中高</td><td>需強調與現有競品的差異化護城河</td></tr>
                        <tr><td>財務與指標</td><td>待規劃</td><td>建議量化 KPI (如: 節省 30% 工時)</td></tr>
                    </tbody>
                </table>
            `;
            viewResearch.querySelector('.current-time').textContent = getCurrentTime();
            btnWrite.disabled = false;
        }, 1200);
    });

    // Step 2: Write (Real Document Generation)
    btnWrite.addEventListener('click', () => {
        btnWrite.disabled = true;
        btnWrite.classList.add('active');
        viewWrite.style.display = 'block';
        contentWrite.innerHTML = `<div class="typing-cursor">AI 正在將您的資料寫入 10 頁計畫書樣板中...</div>`;
        docTitleDisplay.textContent = `${DB[currentProject].title} - 自動產出文件`;
        
        setTimeout(() => {
            const comp = inCompany.value || '測試公司';
            const prod = inProduct.value || '測試產品';
            const feat = inFeatures.value || '強大的AI技術';
            
            contentWrite.innerHTML = DB[currentProject].getDoc(comp, prod, feat);
            btnFill.disabled = false;
        }, 1500);
    });

    // Step 3: Fill Form
    btnFill.addEventListener('click', () => {
        btnFill.disabled = true;
        btnFill.classList.add('active');
        viewFill.style.display = 'block';
        contentFill.innerHTML = '';
        
        const comp = inCompany.value || '測試公司';
        const lines = [
            `▶ 啟動 [${DB[currentProject].title}] 自動化填表程序...`,
            `# 載入目標機關入口網站設定檔`,
            `[OK] 成功登入系統 (認證通過: ${comp})`,
            `[OK] 將 AI 產出之計畫書轉換為純文字並依序寫入表單欄位`,
            `[OK] 自動勾選所有法規切結書與聲明條款`,
            `[OK] 經費預算表數據自動 Mapping 完成`,
            ``,
            `> 所有資料登打完畢，進度 100%！請進行最後人工核閱。`
        ];
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
                
                const windowBody = contentFill.parentElement;
                windowBody.scrollTop = windowBody.scrollHeight;
                
                setTimeout(typeLine, Math.random() * 300 + 100);
            }
        }
        
        typeLine();
    });

    // Copy Button
    btnCopy.addEventListener('click', () => {
        const text = contentWrite.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btnCopy.innerHTML;
            btnCopy.innerHTML = `<i data-lucide="check"></i> 已複製！`;
            lucide.createIcons();
            setTimeout(() => {
                btnCopy.innerHTML = originalText;
                lucide.createIcons();
            }, 2000);
        });
    });

    // Download Button
    btnDownload.addEventListener('click', () => {
        const text = contentWrite.innerText;
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${DB[currentProject].title}_申請企劃書.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
