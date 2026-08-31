document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch(e) {
        console.warn("Icons could not be loaded", e);
    }

    const PLATFORMS = {
        'sbir-central': { title: '經濟部 SBIR 中小企業創新研發計畫', focus: '技術研發與創新護城河' },
        'sbir-local': { title: '全台地方型 SBIR', focus: '在地產業升級與連結' },
        'ai-plus': { title: '經濟部 AI+ 計畫', focus: 'AI 技術導入與雙軸轉型' },
        'digiplus': { title: 'DIGITAL+ 創新補助', focus: 'SaaS 訂閱與雲端架構' },
        'siir': { title: 'SIIR 服務業創新', focus: 'O2O 體驗與服務流程創新' },
        'moc': { title: '文化部各項補助', focus: '文化底蘊與科技藝術結合' },
        'nstc': { title: '國科會計畫補助', focus: '產學合作與前瞻學理突破' },
        'sme': { title: '中小及新創企業署', focus: '企業體質升級與財務規模化' },
        'smepass': { title: 'G2B 企業得來速', focus: '跨部會資源整合與行政優化' },
        'bounty': { title: '獎金獵人', focus: '創意落地與 PoC 實證' },
        'startup': { title: 'Startup Terrace', focus: '國際化佈局與募資潛力' },
        'qitc': { title: '高通創新競賽 (QITC)', focus: '邊緣運算與 5G 應用' },
        'pcc': { title: '政府電子採購網', focus: '資安規範與專案管理能力' },
        'g0v-pcc': { title: 'g0v pcc API 整合', focus: '開源架構與開放資料應用' }
    };

    let currentProject = 'sbir-central';
    let apiKey = '';
    try {
        apiKey = localStorage.getItem('gemini_api_key') || '';
    } catch (e) {
        console.warn("localStorage is not available", e);
    }

    // UI Elements
    const navItems = document.querySelectorAll('.nav-item');
    const projectTitle = document.getElementById('project-title');
    const projectStatus = document.getElementById('project-status');
    const btnResearch = document.getElementById('btn-research');
    const btnWrite = document.getElementById('btn-write');
    const btnFill = document.getElementById('btn-fill');
    
    const viewResearch = document.getElementById('view-research');
    const viewWrite = document.getElementById('view-write');
    const viewFill = document.getElementById('view-fill');
    
    const contentResearch = document.getElementById('content-research');
    const contentWrite = document.getElementById('content-write');
    const contentFill = document.getElementById('content-fill');
    
    const inCompany = document.getElementById('input-company');
    const inProduct = document.getElementById('input-product');
    const inFeatures = document.getElementById('input-features');

    // Modal Elements
    const modal = document.getElementById('settings-modal');
    const btnSettings = document.getElementById('btn-settings');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnCancelModal = document.getElementById('btn-cancel-modal');
    const btnSaveModal = document.getElementById('btn-save-modal');
    const inputApiKey = document.getElementById('input-api-key');

    // Init Modal
    inputApiKey.value = apiKey;
    if(apiKey) {
        projectStatus.innerHTML = '<span class="dot green"></span> 真實 API 已連線';
    } else {
        projectStatus.innerHTML = '<span class="dot red"></span> 未設定 API 金鑰';
    }

    btnSettings.addEventListener('click', () => modal.style.display = 'flex');
    btnCloseModal.addEventListener('click', () => modal.style.display = 'none');
    btnCancelModal.addEventListener('click', () => modal.style.display = 'none');
    btnSaveModal.addEventListener('click', () => {
        apiKey = inputApiKey.value.trim();
        try {
            localStorage.setItem('gemini_api_key', apiKey);
        } catch (e) {
            console.warn("localStorage setItem failed", e);
        }
        if(apiKey) {
            projectStatus.innerHTML = '<span class="dot green"></span> 真實 API 已連線';
        } else {
            projectStatus.innerHTML = '<span class="dot red"></span> 未設定 API 金鑰';
        }
        modal.style.display = 'none';
    });

    function resetViews() {
        viewResearch.style.display = 'none';
        viewWrite.style.display = 'none';
        viewFill.style.display = 'none';
        btnResearch.disabled = false;
        btnWrite.disabled = false;
        btnFill.disabled = true;
    }

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

    async function callGemini(promptText, container) {
        if (!apiKey) {
            container.innerHTML = `
                <div class="highlight-box danger">
                    <strong>⚠️ 錯誤：未設定 API Key</strong><br>
                    為了進行真實 AI 運算，請先點擊左下角「系統設定」輸入您的 Google Gemini API Key。
                </div>
            `;
            return false;
        }

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=\${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: promptText }] }],
                    generationConfig: { temperature: 0.7, topK: 40, topP: 0.95 }
                })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error?.message || 'API Request Failed');
            }

            const data = await response.json();
            const resultText = data.candidates[0].content.parts[0].text;
            container.innerHTML = marked.parse(resultText);
            return true;
        } catch (error) {
            container.innerHTML = `
                <div class="highlight-box danger">
                    <strong>⚠️ AI 呼叫失敗：</strong><br>
                    \${error.message}<br>
                    請檢查您的 API Key 是否正確或額度是否耗盡。
                </div>
            `;
            return false;
        }
    }

    // Step 1: Real Research (The Spear)
    btnResearch.addEventListener('click', async () => {
        btnResearch.disabled = true;
        viewResearch.style.display = 'block';
        contentResearch.innerHTML = `
            <div class="loader-container">
                <div class="spinner"></div>
                <p>最強的矛啟動中：正在呼叫 Google Gemini API 進行真實推理，請稍候約 10 秒...</p>
            </div>
        `;
        
        const pData = PLATFORMS[currentProject];
        const prompt = `
您是一位台灣資深政府補助與投標顧問。
目前有一家公司「\${inCompany.value}」，其產品為「\${inProduct.value}」。
核心特點：「\${inFeatures.value}」。

該公司正打算申請/投標「\${pData.title}」。該計畫/標案的審查重點是「\${pData.focus}」。
請為此專案進行深度的「調研與法規分析報告」，請務必使用 Markdown 格式輸出，並包含以下標題與內容：

## 計畫匹配度分析
（給出 1 到 100 分的匹配分數，並解釋原因，點出加分關鍵）

## 動態 SWOT 競爭力矩陣
（請以表格或條列式，針對該產品在該計畫中的 Strengths, Weaknesses, Opportunities, Threats 進行深度剖析）

## 潛在競品情報
（虛擬 2~3 家可能在市場上的競品，並比較我方護城河）

## 審查委員視角 (Red Team Analysis)
（用最嚴苛的標準，預判委員可能會攻擊的痛點，並直接給予防禦話術建議）
`;

        await callGemini(prompt, contentResearch);
        btnResearch.disabled = false;
    });

    // Step 2: Real Write (The Shield)
    btnWrite.addEventListener('click', async () => {
        btnWrite.disabled = true;
        viewWrite.style.display = 'block';
        contentWrite.innerHTML = `
            <div class="loader-container">
                <div class="spinner"></div>
                <p>最強的盾啟動中：正在由 Gemini API 為您即時撰寫長篇專業文件，請稍候約 15 秒...</p>
            </div>
        `;
        document.getElementById('doc-title-display').textContent = `${PLATFORMS[currentProject].title} - 真實產出文件`;

        const pData = PLATFORMS[currentProject];
        const prompt = `
您是一位台灣資深政府計畫書/企劃書撰寫專家。
請為公司「\${inCompany.value}」的產品「\${inProduct.value}」撰寫一份用於申請「\${pData.title}」的長篇專業計畫書/企劃書大綱。
產品痛點與核心技術：「\${inFeatures.value}」。
請注意，該計畫特別看重「\${pData.focus}」，請在文中大力強調此面向。

這份文件必須極度專業、長篇，像是由頂尖顧問所撰寫。請務必使用 Markdown 格式輸出，必須包含以下章節，並為每個章節撰寫豐富的內容與推演數據：

# 【\${pData.title}】專案企劃書：\${inProduct.value}

## 壹、 計畫摘要
（至少 300 字，包含背景、痛點、解方與預期效益）

## 貳、 產業痛點與市場規模 (TAM/SAM/SOM)
（請合理推估數據，展現龐大的商業潛力）

## 參、 創新技術與智財權佈局
（請使用 Markdown 表格，對比傳統解決方案與本專案的創新技術，至少列出 3 個技術特點）

## 肆、 商業模式與營收預測
（說明獲利模式，以及未來 3 年的營收成長預估）

## 伍、 實施期程與查核點
（將計畫分為三到四個階段，列出查核點與具體 KPI）

## 陸、 預算編列與資金運用
（說明資金如何分配於研發、行銷、營運等項目）

## 柒、 風險控管與退場機制
（列出技術、市場、法規風險，並給出具體應對策略）
`;

        const success = await callGemini(prompt, contentWrite);
        btnWrite.disabled = false;
        if(success) btnFill.disabled = false;
    });

    // Step 3: Real Auto-Fill View
    btnFill.addEventListener('click', () => {
        btnFill.disabled = true;
        btnFill.classList.add('active');
        viewFill.style.display = 'block';
        
        // Ensure the correct target portal link is displayed
        const targetLink = document.getElementById('target-portal-link');
        if (currentProject === 'ai-plus') {
            targetLink.href = "https://eii.nat.gov.tw/moeai-plus/apply";
            targetLink.textContent = "https://eii.nat.gov.tw/moeai-plus/apply";
        } else {
            targetLink.href = "#";
            targetLink.textContent = `[${PLATFORMS[currentProject].title}] 的官方申請系統`;
        }
    });

    // Download AI Document (.txt)
    document.getElementById('btn-download-doc').addEventListener('click', () => {
        const text = contentWrite.innerText;
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai_generated_document.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Download Python Script (.py)
    document.getElementById('btn-download-py').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = "autofill.py";
        a.download = "autofill.py";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // Copy / Download logic remains the same
    document.getElementById('btn-copy').addEventListener('click', () => {
        const text = contentWrite.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('已複製到剪貼簿！');
        });
    });

    document.getElementById('btn-download').addEventListener('click', () => {
        const text = contentWrite.innerHTML;
        const htmlDoc = `
        <html><head><meta charset="utf-8"><title>匯出文件</title>
        <style>body{font-family:sans-serif; line-height:1.6; padding:2rem; max-width:800px; margin:0 auto;} table{border-collapse:collapse;width:100%;margin:1rem 0} th,td{border:1px solid #ccc;padding:0.5rem}</style>
        </head><body>\${text}</body></html>
        `;
        const blob = new Blob([htmlDoc], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `\${PLATFORMS[currentProject].title}_完整申請文件.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
