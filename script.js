document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- Dynamic Generator Engine (最強的矛與盾) ---
    // Platforms Metadata
    const PLATFORMS = {
        'sbir-central': { title: '經濟部 SBIR 中小企業創新研發計畫', type: 'grant', focus: '技術護城河與專利', score: 92 },
        'sbir-local': { title: '全台地方型 SBIR', type: 'grant', focus: '在地產業連結與就業', score: 88 },
        'ai-plus': { title: '經濟部 AI+ 計畫', type: 'grant', focus: '良率提升與雙軸轉型', score: 95 },
        'digiplus': { title: 'DIGITAL+ 數位服務創新補助', type: 'grant', focus: 'SaaS 訂閱與雲端架構', score: 91 },
        'siir': { title: 'SIIR 服務業創新研發', type: 'grant', focus: 'O2O 體驗與減碳', score: 85 },
        'moc': { title: '文化部各項補助', type: 'grant', focus: '文化底蘊與科技藝術', score: 78 },
        'nstc': { title: '國科會計畫補助', type: 'grant', focus: '產學合作與前瞻學理', score: 82 },
        'sme': { title: '中小及新創企業署', type: 'grant', focus: '企業體質升級與財務', score: 89 },
        'smepass': { title: 'G2B 企業得來速', type: 'grant', focus: '跨部會資源整合', score: 90 },
        'bounty': { title: '獎金獵人 Bounty Hunter', type: 'contest', focus: '創意落地與 PoC', score: 80 },
        'startup': { title: 'Startup Terrace', type: 'contest', focus: '國際化佈局與募資', score: 86 },
        'qitc': { title: '高通創新競賽 (QITC)', type: 'contest', focus: '邊緣運算與 5G 應用', score: 88 },
        'pcc': { title: '政府電子採購網', type: 'tender', focus: '資安規範與專案管理', score: 94 },
        'g0v-pcc': { title: 'g0v pcc API 整合', type: 'tender', focus: '開源架構與開放資料', score: 87 }
    };

    // 最強的矛 (Research Engine)
    function generateSpear(platformId, comp, prod, feat) {
        const pData = PLATFORMS[platformId];
        return `
            <div class="doc-a4-container" style="padding: 2rem;">
                <h2>【${pData.title}】深度調研與法規分析報告</h2>
                
                <div class="score-container">
                    <div class="score-circle" style="--score: ${pData.score}%">
                        <div class="score-text">${pData.score}</div>
                    </div>
                    <div class="score-details">
                        <h4>計畫匹配度極高</h4>
                        <p>經 AI 語意分析，「${prod}」之核心技術高度契合本計畫<strong>【${pData.focus}】</strong>之審查重點。建議立即啟動投件作業。</p>
                    </div>
                </div>

                <h3><i data-lucide="crosshair"></i> 動態 SWOT 競爭力矩陣</h3>
                <div class="swot-matrix">
                    <div class="swot-box swot-s">
                        <h4><i data-lucide="trending-up"></i> 優勢 (Strengths)</h4>
                        <ul>
                            <li>${feat.substring(0, 30)}... 具備高度技術獨特性。</li>
                            <li>「${comp}」擁有先發優勢與靈活的開發團隊。</li>
                        </ul>
                    </div>
                    <div class="swot-box swot-w">
                        <h4><i data-lucide="trending-down"></i> 劣勢 (Weaknesses)</h4>
                        <ul>
                            <li>現階段品牌知名度尚待建立。</li>
                            <li>需補足符合政府規範之 ISO/資安查核文件。</li>
                        </ul>
                    </div>
                    <div class="swot-box swot-o">
                        <h4><i data-lucide="sun"></i> 機會 (Opportunities)</h4>
                        <ul>
                            <li>政府正大力推動【${pData.focus}】相關產業升級。</li>
                            <li>傳統競品尚未完全導入 AI 數位轉型。</li>
                        </ul>
                    </div>
                    <div class="swot-box swot-t">
                        <h4><i data-lucide="cloud-lightning"></i> 威脅 (Threats)</h4>
                        <ul>
                            <li>潛在大型 SI 廠商可能挾帶資本優勢進入市場。</li>
                            <li>開源技術快速迭代導致的技術折舊風險。</li>
                        </ul>
                    </div>
                </div>

                <h3><i data-lucide="shield-alert"></i> 審查委員視角 (紅軍分析)</h3>
                <div class="highlight-box danger">
                    <strong>⚠️ 潛在被攻擊的弱點：</strong><br>
                    委員可能會質疑「${prod}」的商業模式是否具備可持續性 (Sustainability)。<br><br>
                    <strong>🛡️ 防禦話術建議：</strong><br>
                    在計畫書中必須明確列出 TAM (總潛在市場) 的 Top-down 推估數據，並強調初期已與至少 3 家先期測試客戶 (PoC) 簽署合作意向書 (MOU)，以佐證商業化能力。
                </div>
            </div>
        `;
    }

    // 最強的盾 (Document Engine)
    function generateShield(platformId, comp, prod, feat) {
        const pData = PLATFORMS[platformId];
        
        let docType = "計畫書";
        if(pData.type === 'contest') docType = "Pitch Deck 講稿與企劃";
        if(pData.type === 'tender') docType = "服務建議書 (RFP)";

        return `
            <div class="doc-a4-container">
                <h2>【${pData.title}】<br>${prod} - ${docType}</h2>
                <div style="text-align: center; color: #64748b; margin-bottom: 3rem;">
                    申請單位：${comp} <br>
                    文件機密等級：限閱 (Confidential)
                </div>

                <h3>壹、 計畫摘要 (Executive Summary)</h3>
                <p>在全球數位轉型與淨零碳排的雙重浪費下，各行各業正面臨前所未有的挑戰。本計畫由「${comp}」發起，傾注核心研發量能，旨在開發具備高度競爭力之「${prod}」。</p>
                <p>為響應【${pData.title}】之政策宗旨，本專案將針對<strong>【${pData.focus}】</strong>進行深度優化。我們的核心優勢在於：${feat}。透過此項破壞式創新，預期能為產業帶來典範轉移 (Paradigm Shift)，並大幅提升我國於該領域之國際競爭力。</p>

                <h3>貳、 產業痛點與市場規模 (Market Analysis)</h3>
                <p>目前市場上現有的解決方案多半存在架構老舊、擴充性差、且缺乏 AI 賦能等缺陷。這導致終端使用者往往需要耗費大量無效工時。</p>
                <div class="highlight-box">
                    <strong>市場規模推估 (TAM/SAM/SOM)：</strong><br>
                    經本團隊市調，該領域之全球潛在市場 (TAM) 達 500 億美金；鎖定之亞太區服務可達市場 (SAM) 約為 80 億美金；本計畫初期 3 年內預計取得之可獲得市場 (SOM) 為 1.5 億台幣，具備極高之商業變現潛力。
                </div>

                <h3>參、 創新技術與智財權佈局 (Innovation & IP)</h3>
                <p>本專案之所以能夠超越競品，在於我們並非單純整合現有 API，而是從底層架構進行重新設計。</p>
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>傳統解決方案</th>
                            <th>本專案 (${prod}) 之技術創新</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>單機版或地端部署，維護成本高</td>
                            <td>雲原生的微服務 (Microservices) 架構，支援自動擴容</td>
                        </tr>
                        <tr>
                            <td>人工參數調整，缺乏自適應能力</td>
                            <td>導入機器學習 (ML) 動態演算法，準確率隨數據量自我提升</td>
                        </tr>
                        <tr>
                            <td>缺乏資安防護機制</td>
                            <td>符合 ISO27001 規範之零信任 (Zero Trust) 安全架構</td>
                        </tr>
                    </tbody>
                </table>

                <h3>肆、 實施期程與查核點 (Milestones)</h3>
                <p>本專案預計為期 12 個月，分為三個主要階段進行敏捷開發與驗證：</p>
                <ol>
                    <li><strong>第一階段 (M1-M4)：核心引擎開發與雛形建置。</strong><br>預期查核點：完成系統架構設計書 (SD) 並釋出 Alpha 版。</li>
                    <li><strong>第二階段 (M5-M8)：封閉測試與資安驗證。</strong><br>預期查核點：完成第三方弱點掃描，並邀請 5 家種子客戶進行 UAT 測試。</li>
                    <li><strong>第三階段 (M9-M12)：商轉佈局與行銷推廣。</strong><br>預期查核點：系統正式上線 (GA)，並達成首批 100 萬營收目標。</li>
                </ol>

                <h3>伍、 預期效益與退場機制 (Benefits & Risks)</h3>
                <p>本計畫之成功將帶來顯著之量化與質化效益。在量化方面，預計創造 5 名高階研發就業機會，並衍生至少 3,000 萬之相關投資；在質化方面，將有效協助產業上下游完成數位升級。</p>
                <p><strong>風險控管：</strong>若遭遇技術瓶頸或市場變遷，本團隊已備妥 Plan B。模組化的系統設計允許我們快速 Pivot 至其他垂直領域，將研發沉沒成本降至最低。</p>
            </div>
        `;
    }

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
            projectTitle.textContent = PLATFORMS[currentProject].title;
            
            resetViews();
        });
    });

    // Step 1: Research (The Spear)
    btnResearch.addEventListener('click', () => {
        btnResearch.disabled = true;
        btnResearch.classList.add('active');
        viewResearch.style.display = 'block';
        contentResearch.innerHTML = `
            <div class="loader-container">
                <div class="spinner"></div>
                <p>最強的矛啟動：正在進行深網法規與競品調研...</p>
            </div>
        `;
        
        setTimeout(() => {
            const comp = inCompany.value || '測試公司';
            const prod = inProduct.value || '測試產品';
            const feat = inFeatures.value || '強大的AI技術';
            
            contentResearch.innerHTML = generateSpear(currentProject, comp, prod, feat);
            lucide.createIcons();
            viewResearch.querySelector('.current-time').textContent = getCurrentTime();
            btnWrite.disabled = false;
        }, 1800);
    });

    // Step 2: Write (The Shield)
    btnWrite.addEventListener('click', () => {
        btnWrite.disabled = true;
        btnWrite.classList.add('active');
        viewWrite.style.display = 'block';
        contentWrite.innerHTML = `<div class="typing-cursor">最強的盾啟動：正在組裝萬字級計畫書與自動排版...</div>`;
        docTitleDisplay.textContent = `${PLATFORMS[currentProject].title} - 自動產出文件`;
        
        setTimeout(() => {
            const comp = inCompany.value || '測試公司';
            const prod = inProduct.value || '測試產品';
            const feat = inFeatures.value || '強大的AI技術';
            
            contentWrite.innerHTML = generateShield(currentProject, comp, prod, feat);
            lucide.createIcons();
            btnFill.disabled = false;
        }, 2500);
    });

    // Step 3: Fill Form
    btnFill.addEventListener('click', () => {
        btnFill.disabled = true;
        btnFill.classList.add('active');
        viewFill.style.display = 'block';
        contentFill.innerHTML = '';
        
        const comp = inCompany.value || '測試公司';
        const pData = PLATFORMS[currentProject];
        const lines = [
            `▶ 系統呼叫 Selenium/Playwright 底層填表引擎...`,
            `▶ 目標入口：[${pData.title}] 官方申請系統`,
            `# 載入工商憑證與驗證碼繞過模組...`,
            `[OK] 成功登入系統 (認證通過: ${comp})`,
            `[OK] 讀取「最強的盾」產出之長篇計畫書資料結構`,
            `[OK] 將【計畫摘要】寫入表單欄位 (字數檢核通過)`,
            `[OK] 將【預算編列】轉換為機關專用之 Excel 格式並自動上傳`,
            `[OK] 自動勾選所有法規切結書與聲明條款 (符合【最強的矛】之法規調研)`,
            ``,
            `> 所有資料登打完畢，防禦滴水不漏，進度 100%！等待最後人工送出。`
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
        a.download = `${PLATFORMS[currentProject].title}_完整申請文件.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
