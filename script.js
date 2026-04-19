// 1. 原型数据定义
const archetypes = {
    'Fool': {
        name: "Fool",
        quote: "“未知的旅程本身就是奖励，跳向那片虚空吧。”",
        recipe: "• 白朗姆酒 45ml<br>• 新鲜薄荷与青柠<br>• 自由的清爽感" },

    'Magician': {
        name: "Magician",
        quote: "“万物皆由意志塑造，你手中握着改变现实的权杖。”",
        recipe: "• 龙舌兰 45ml<br>• 蓝橙利口酒 15ml<br>• 充满创造力的色彩" },

    'High Priestess': {
        name: "High Priestess",
        quote: "“在静默中守候，智慧在无声处显现。”",
        recipe: "• 清酒基底<br>• 樱花利口酒<br>• 优雅的东方调" },
    
    'Empress': {
        name: "Empress",
        quote: "“丰饶与创造力的象征，掌握生命的艺术。”",
        recipe: "• 桃子利口酒 45ml<br>• 香草伏特加 15ml<br>• 丰富而圆润的口感" },

    'Emperor': {
        name: "Emperor",
        quote: "“秩序并非枷锁，而是建立伟业的基石。”",
        recipe: "• 伦敦干金酒 60ml<br>• 干苦艾酒 10ml<br>• 橄榄，极致冷静" },

    'Hierophant': {
        name: "Hierophant",
        quote: "“传统与智慧的守护者，引导你走向内在的真理。”",
        recipe: "• 伦敦干金酒 60ml<br>• 干苦艾酒 10ml<br>• 橄榄，极致冷静" },

    'Lovers': {
        name: "Lovers",
        quote: "“选择意味着放弃，但爱让这种牺牲变得神圣。”",
        recipe: "• 龙舌兰 45ml<br>• 玫瑰糖浆 10ml<br>• 甜美而危险的平衡" },

    'Chariot': {
        name: "Chariot",
        quote: "“意志与决心的象征，驾驭命运的力量。”",
        recipe: "• 龙舌兰 45ml<br>• 玫瑰糖浆 10ml<br>• 甜美而危险的平衡" },

    'Strength': {
        name: "Strength",
        quote: "“真正的勇气不是没有恐惧，而是温柔地驯服它。”",
        recipe: "• 波本威士忌 60ml<br>• 橙皮苦精<br>• 坚韧的基调" },

    'Hermit': {
        name: "Hermit",
        quote: "“即便在最深的黑暗中，内省之光也能照亮前行的路。”",
        recipe: "• 洋甘菊金酒 45ml<br>• 蜂蜜糖浆 15ml<br>• 低酒精度，草本调" },

    'Wheel of Fortune': {
        name: "Wheel of Fortune",
        quote: "“命运的轮盘不断旋转，掌握它需要智慧与勇气。”",
        recipe: "• 洋甘菊金酒 45ml<br>• 蜂蜜糖浆 15ml<br>• 低酒精度，草本调" },

    'Justice': {
        name: "Justice",
        quote: "“因果的丝线编织成网，没有任何决定是孤立的。”",
        recipe: "• 杜松子酒 45ml<br>• 简单的平衡比例" },

    'Hanged Man': {
        name: "Hanged Man",
        quote: "“因果的丝线编织成网，没有任何决定是孤立的。”",
        recipe: "• 杜松子酒 45ml<br>• 简单的平衡比例" },

    'Death': {
        name: "Death",
        quote: "“没有彻底的终结，就没有纯粹的诞生。”",
        recipe: "• 伏特加 30ml<br>• 咖啡利口酒 30ml<br>• 纯黑，重生的味道" },

    'Temperance': {
        name: "Temperance",
        quote: "“平衡与和谐的象征，掌握节制的艺术。”",
        recipe: "• 伏特加 30ml<br>• 咖啡利口酒 30ml<br>• 纯黑，重生的味道" },
 
    'Devil': {
        name: "Devil",
        quote: "“诱惑与束缚的象征，面对内心的阴影。”",
        recipe: "• 朗姆酒 45ml<br>• 黑莓利口酒 15ml<br>• 深沉而复杂的味道" },

    'Tower': {
        name: "Tower",
        quote: "“突如其来的变故，打破旧有的秩序。”",
        recipe: "• 朗姆酒 45ml<br>• 黑莓利口酒 15ml<br>• 深沉而复杂的味道" },

    'Star': {
        name: "Star",
        quote: "“在绝望的荒野里，抬头总能看见永恒的指引。”",
        recipe: "• 蝶豆花浸渍金酒<br>• 汤力水<br>• 星空般的紫色梦境" },
 
    'Moon': {
        name: "Moon",
        quote: "“真实往往隐藏在阴影之后，听从你的直觉。”",
        recipe: "• 冰镇白葡萄酒<br>• 苦艾酒润杯<br>• 朦胧的迷雾感" },

    'Sun': {
        name: "Sun",
        quote: "“真正的光芒来自内心，照亮你前行的道路。”",
        recipe: "• 金朗姆酒 45ml<br>• 菠萝汁 60ml<br>• 阳光般的热带风味" },

    'Judgement': {
        name: "Judgement",
        quote: "“审判与觉醒的象征，面对内心的真相。”",
        recipe: "• 五种基酒混合<br>• 可乐与柠檬汁<br>• 复杂的和谐" },

    'World': {
        name: "World",
        quote: "“圆满并非终点，而是与宇宙节奏合一的瞬间。”",
        recipe: "• 五种基酒混合<br>• 可乐与柠檬汁<br>• 复杂的和谐" },



};

// 2. 游戏状态变量
let weights = {}; 
let historyStack = [];
let currentStep = -1; 
let currentResultKey = '';
let isTyping = false;
let timeoutId;

// 3. 故事树定义
const storyTree = {
    start: {
        text: [
            "Welcome to the MistBar. I'm Knight of Cups.",
            "Is it the first for you here?"
        ],
        options: [
            { text: "It's my first time here", next: 'onboarding' },
            { text: "I used to been here before", next: 'main_menu' }
        ]
    },
    onboarding: {
        text: [
            "Welcome to the MistBar, dear.",
            "I recommend you to take our quiz to find your own drink.",
            "I can also give you a random drink.",
        ],
        options: [
            { text: "I'll try the specialty drink", action: () => { startQuiz(); } },
            { text: "Just give me something random", action: () => fetchRandomDrink() },
            { text: "Can I have the menu?", action: () => openSearch("Sure, you can search by keywords") }
        ]
    },
    main_menu: {
        text: "Welcome back. What do you want?",
        options: [
            { text: "I want to take the quiz again", action: () => { startQuiz(); } },
            { text: "Give me a random drink", action: () => fetchRandomDrink()},
            { text: "Can I have the menu?", action: () => openSearch("Sure, you can search by keywords") }
        ]
    }
};

// 4. Quiz Questions - Immersive Story: Finding Yourself in the Mist
const quizQuestions = [
    { text: "Mist surrounds you. You step through an ancient door. Behind it:", options: [
        { text: "A. Mirror reflecting your true self", tags: ['High Priestess', 'Justice'] },
        { text: "B. Endless winding path", tags: ['Fool', 'Magician'] },
        { text: "C. Blooming garden", tags: ['Empress', 'Lovers'] },
        { text: "D. Golden palace with order", tags: ['Emperor', 'Hierophant'] }
    ]},
    { text: "A figure emerges from the mist. It is:", options: [
        { text: "A. Ancient voice chanting", tags: ['Hierophant', 'High Priestess'] },
        { text: "B. Hand inviting you to dance", tags: ['Lovers', 'Chariot'] },
        { text: "C. Rider on a fierce horse", tags: ['Chariot', 'Emperor'] },
        { text: "D. Gentle, sheltering embrace", tags: ['Strength', 'Hermit'] }
    ]},
    { text: "You remember the last time you were alone. You were:", options: [
        { text: "A. Lighting a lamp in darkness", tags: ['Hermit', 'Justice'] },
        { text: "B. Facing fortune's wheel, powerless", tags: ['Wheel of Fortune', 'Death'] },
        { text: "C. Between opposing forces, seeking balance", tags: ['Justice', 'Temperance'] },
        { text: "D. Suspended upside down, waiting", tags: ['Hanged Man', 'Moon'] }
    ]},
    { text: "An unavoidable truth: life must end. You feel:", options: [
        { text: "A. Natural transformation; I will rise", tags: ['Death', 'Temperance'] },
        { text: "B. I've learned to let go, found peace", tags: ['Temperance', 'Hermit'] },
        { text: "C. My deepest desires awaken", tags: ['Devil', 'Tower'] },
        { text: "D. Old self must shatter to rebuild", tags: ['Tower', 'Fool'] }
    ]},
    { text: "The sky tears open. Light pierces the mist. It is:", options: [
        { text: "A. An eternal guiding star", tags: ['Star', 'Judgement'] },
        { text: "B. Moonlight woven with shadows", tags: ['Moon', 'Devil'] },
        { text: "C. A dazzling golden sun", tags: ['Sun'] },
        { text: "D. The awakening of cosmic consciousness", tags: ['Judgement', 'World'] }
    ]},
    { text: "Two paths diverge. One leads to:", options: [
        { text: "A. Complete self, perfect harmony", tags: ['World', 'Temperance'] },
        { text: "B. Infinite possibilities, creative power", tags: ['Magician', 'Fool'] },
        { text: "C. A temple holding all answers", tags: ['High Priestess', 'Hierophant'] },
        { text: "D. Life's source, where all awakens", tags: ['Empress', 'Wheel of Fortune'] }
    ]},
    { text: "A storm arrives suddenly. Your choice:", options: [
        { text: "A. Hold my truth, whatever the cost", tags: ['Emperor', 'Justice'] },
        { text: "B. Keep faith, resist with strength", tags: ['Hierophant', 'Strength'] },
        { text: "C. Reflect, follow my heart", tags: ['Lovers', 'Hanged Man'] },
        { text: "D. Ride the waves with courage", tags: ['Chariot', 'Magician'] }
    ]},
    { text: "The storm passes. Night falls. You feel:", options: [
        { text: "A. Long-dormant courage awakening", tags: ['Strength', 'Fool'] },
        { text: "B. Ancient wisdom from deep within", tags: ['Hermit', 'High Priestess'] },
        { text: "C. Fortune's wheel turning silently", tags: ['Wheel of Fortune', 'Judgement'] },
        { text: "D. Hidden truths shining brightly", tags: ['Justice', 'Devil'] }
    ]},
    { text: "Through darkness and light, the secret emerges:", options: [
        { text: "A. Let go gracefully; freedom comes", tags: ['Hanged Man', 'Death'] },
        { text: "B. Find harmony in contradictions", tags: ['Temperance', 'Lovers'] },
        { text: "C. Embrace desire and shadow", tags: ['Devil', 'Empress'] },
        { text: "D. Break boundaries, be reborn", tags: ['Tower', 'World'] }
    ]},
    { text: "The mist clears. The ancient door reappears. You will:", options: [
        { text: "A. Open it, welcome the unknown", tags: ['Star', 'Strength'] },
        { text: "B. Ignore it, it's just a dream", tags: ['Moon', 'Hermit'] },
        { text: "C. Turn away, retrace your steps", tags: ['Sun'] },
        { text: "D. Smash the door", tags: ['Judgement', 'Chariot'] }
    ]}
];

//random drink
// --- 2. 随机饮品主函数 ---
const fetchRandomDrink = async () => {
    

    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const drink = data.drinks[0];
        console.log('Random drink:', drink); // 完整调试
        console.log('Drink image URL:', drink.strDrinkThumb);

        // 构建完整配方
        let recipe = "";
        for(let i=1; i<=15; i++) {
            if(drink[`strIngredient${i}`]) {
                recipe += `• ${drink[`strMeasure${i}`] || ''} ${drink[`strIngredient${i}`]}<br>`;
            }
        }
        recipe += `<br><strong>Glass:</strong> ${drink.strGlass}<br><br>${drink.strInstructions}`;

        // 动态创建结果面板
        const overlay = document.createElement('div');
        overlay.id = 'api-result-overlay';
        overlay.innerHTML = `
            <div class="api-card">
                <h2 style="letter-spacing:3px; font-size:1rem; opacity:0.7;">[ RANDOM SELECTION ]</h2>
                <img src="${drink.strDrinkThumb}" class="api-img" onerror="console.log('Image failed to load:', '${drink.strDrinkThumb}'); this.src='https://via.placeholder.com/300x300?text=No+Image';">
                <h1 class="api-title">${drink.strDrink}</h1>
                <p style="font-style:italic; color:#4dabf7; font-size:0.8rem;">Category: ${drink.strCategory}</p>
                <div class="api-recipe">
                    ${recipe}
                </div>
                <button class="api-close-btn" id="close-api-btn">Back to Bar</button>
            </div>
        `;

        document.body.appendChild(overlay);
        document.getElementById('game-container').style.display = 'none';

        // 绑定关闭事件
        document.getElementById('close-api-btn').onclick = () => {
            document.body.removeChild(overlay);
            document.getElementById('game-container').style.display = 'flex';
            renderStoryNode('main_menu');
        };

    } catch (error) {
        console.error("API Error:", error);
        typeWriter("“迷雾太重，调酒师失联了...再试一次？”");
    }
};

// --- 核心驱动引擎 ---

function startQuiz() {
    resetGameData();
    currentStep = 0;
    renderQuestion();
}

function renderStoryNode(nodeKey) {
    const node = storyTree[nodeKey];
    if (!node) return;
    updateInterfaceMode(nodeKey, node);
    processDialogue(node.text, node.options, 'column');
}

function renderQuestion() {
    if (currentStep >= quizQuestions.length) { 
        showFinalResult(); 
        return; 
    }
    const q = quizQuestions[currentStep];
    // 强制触发 UI 模式更新
    updateInterfaceMode('quiz');
    
    // 先清空 back 按钮
    document.getElementById('back-button-area').innerHTML = '';
    
    // 将 quiz 选项转换为 processDialogue 所需的格式
    const options = q.options.map(opt => ({
        text: opt.text,
        action: () => {
            historyStack.push({...weights});
            opt.tags.forEach(t => weights[t] = (weights[t] || 0) + 1);
            currentStep++;
            renderQuestion();
        }
    }));
    
    processDialogue(q.text, options, 'column', () => {
        // 选项出现后再显示 back 按钮
        if (currentStep > 0) {
            const backButtonArea = document.getElementById('back-button-area');
            backButtonArea.innerHTML = '<button onclick="goBackToPreviousQuestion()">[ Back ]</button>';
        }
    });
}

function goBackToPreviousQuestion() {
    if (historyStack.length === 0) return;
    weights = historyStack.pop();
    currentStep--;
    renderQuestion();
}

function updateInterfaceMode(key, node = {}) {
    const body = document.body;
    const cardStage = document.getElementById('card-stage');
    const quizImageDisplay = document.getElementById('quiz-image-display');
    
    // 判定：只要在测试中 (currentStep >= 0) 或者是结果页
    const isSpecialMode = (key === 'quiz' || key === 'result' || currentStep >= 0 || node.showCard);
    
    if (isSpecialMode) {
        // 1. 加上类名 -> CSS 会隐藏背景立绘、显示对话框头像
        body.classList.add('is-giving-card');
        
        // 2. 只有在真正出结果时才显示中间的卡牌区域
        if (currentStep >= quizQuestions.length || key === 'result' || node.showCard) {
            cardStage.classList.remove('hidden');
            quizImageDisplay.classList.add('hidden');
        } else {
            cardStage.classList.add('hidden');
        }
    } else {
        // 初始状态/主菜单：移除类名 -> CSS 显示立绘、隐藏头像
        body.classList.remove('is-giving-card');
        cardStage.classList.add('hidden');
        quizImageDisplay.classList.add('hidden');
    }
}

function processDialogue(text, options, layout = 'column', onOptionsShown = null) {
    const overlay = document.getElementById('options-overlay');
    overlay.classList.remove('show-options');
    overlay.style.opacity = "0"; 
    overlay.innerHTML = '';
    
    // Set layout
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.gap = '20px';
    
    if (Array.isArray(text)) {
        processDialogueSequence(text, options, layout);
        return;
    }

    typeWriter(text, 0, () => {
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'rpg-option';
            btn.innerText = opt.text;
            btn.onclick = () => opt.action ? opt.action() : renderStoryNode(opt.next);
            overlay.appendChild(btn);
        });
        void overlay.offsetWidth; 
        overlay.classList.add('show-options');
        if (onOptionsShown) onOptionsShown();
    });
}

function processDialogueSequence(segments, options, layout = 'column') {
    const overlay = document.getElementById('options-overlay');
    let index = 0;
    const container = document.getElementById('game-container');

    // Set layout
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.gap = '20px';

    const showSegment = () => {
        const text = segments[index];
        typeWriter(text, 0, () => {
            index += 1;
            if (index < segments.length) {
                const proceed = () => {
                    container.removeEventListener('click', proceed);
                    showSegment();
                };
                container.addEventListener('click', proceed, { once: true });
            } else {
                options.forEach(opt => {
                    const btn = document.createElement('button');
                    btn.className = 'rpg-option';
                    btn.innerText = opt.text;
                    btn.onclick = () => opt.action ? opt.action() : renderStoryNode(opt.next);
                    overlay.appendChild(btn);
                });
                void overlay.offsetWidth; 
                overlay.classList.add('show-options');
            }
        });
    };

    overlay.classList.remove('show-options');
    overlay.style.opacity = "0";
    overlay.innerHTML = '';
    showSegment();
}

// --- 辅助功能 ---

function typeWriter(text, index = 0, callback) {
    const el = document.getElementById('dialogue-text');
    if (index === 0) {
        el.innerHTML = '';
        isTyping = true;
        el.onclick = () => {
            if (isTyping) {
                el.innerHTML = text;
                isTyping = false;
                clearTimeout(timeoutId);
                if (callback) callback();
            }
        };
    }
    if (index < text.length && isTyping) {
        el.innerHTML += text.charAt(index);
        timeoutId = setTimeout(() => typeWriter(text, index + 1, callback), 30);
    } else if (callback && isTyping) {
        isTyping = false;
        callback();
    }
}

function resetGameData() {
    weights = {}; 
    historyStack = []; 
    currentStep = -1; // 默认重置为 -1
    Object.keys(archetypes).forEach(k => weights[k] = 0);
}

function showFinalResult(isRandom = false) {
    // 确保出结果时模式正确
    updateInterfaceMode('result');
    document.body.classList.add('is-showing-result');
    
    // 清除 back 按钮
    document.getElementById('back-button-area').innerHTML = '';
    
    let sorted = Object.entries(weights).sort((a, b) => b[1] - a[1]);
    const first = isRandom ? 'Fool' : sorted[0][0];
    
    let shadow = null;
    if (!isRandom) {
        let rev = [...sorted].sort((a, b) => a[1] - b[1]); 
        const cand = rev.filter(i => i[0] !== first);
        if (cand.length > 0) shadow = cand[0][0];
    }

    displayCard(first, "主人格", null, null, true);
    
    const overlay = document.getElementById('options-overlay');
    overlay.innerHTML = '';
    // 确保结果页选项为纵向排列
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.gap = '20px';

    if (shadow) {
        const btn = document.createElement('button');
        btn.className = 'rpg-option';
        btn.innerText = "Show your Shadow side.";
        btn.onclick = () => {
            displayCard(shadow, "阴影人格", null, null, true);
            typeWriter("“在你灵魂被忽视的角落，存放着你最陌生的自我...”");
        };
        overlay.appendChild(btn);
    }

    const reBtn = document.createElement('button');
    reBtn.className = 'rpg-option';
    reBtn.innerText = "Restart";
    reBtn.onclick = () => { 
        resetGameData();
        document.body.classList.remove('is-showing-result');
        renderStoryNode('main_menu'); 
    };
    overlay.appendChild(reBtn);

    // 显示选项
    void overlay.offsetWidth;
    overlay.classList.add('show-options');
}

function displayCard(key, label, customData = null, imageUrl = null, allowFlip = false) {
    currentResultKey = key;
    const data = customData || archetypes[key] || archetypes['Fool'];
    const frontEl = document.getElementById('card-front-display');
    frontEl.classList.add('card-image-full');
    frontEl.style.backgroundImage = `url('tarot/${key.toUpperCase()}.png')`;
    
    document.getElementById('recipe-title').innerText = key === 'custom' ? data.name : `${label}配方`;
    document.getElementById('recipe-content').innerHTML = data.recipe;
    
    document.getElementById('card-stage').classList.remove('hidden');
    
    // 初始显示卡面（不翻转）
    const card = document.getElementById('tarot-card');
    card.classList.remove('flipped');
    
    typeWriter(`“这就是属于你的：【${data.name}】。Click the tarot card to see your special drink.”`);
//这里需要增加每一个卡牌的剧情

    const drinkImgEl = document.getElementById('drink-image-display');
    if (imageUrl) {
        drinkImgEl.style.backgroundImage = `url(${imageUrl})`;
    } else {
        drinkImgEl.style.backgroundImage = `url('drink/${key.toLowerCase()}.png')`;
    }
    
    // 只有测试结果才可以翻转
    if (allowFlip) {
        card.style.cursor = 'pointer';
        card.onclick = flipCard;
    } else {
        card.style.cursor = 'default';
        card.onclick = null;
    }
}














function flipCard() {    // 菜单页面不允许flip
    if (currentStep < 0) return;
        const card = document.getElementById('tarot-card');
    card.classList.toggle('flipped');
    
    let textToType = card.classList.contains('flipped') 
        ? (currentResultKey === 'custom' ? window.customQuote : archetypes[currentResultKey].quote)
        : "“原型之光正在闪耀。”";
    
    typeWriter(textToType);
}

// --- 搜索 API 功能 ---

async function executeSearch() {
    const input = document.getElementById('search-input').value;
    const resDiv = document.getElementById('search-results');
    if(!input) return;
    resDiv.innerHTML = "正在迷雾中搜寻...";

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        const data = await response.json();
        resDiv.innerHTML = "";
        if (data.drinks) {
            data.drinks.slice(0, 5).forEach(drink => {
                const item = document.createElement('div');
                item.className = 'search-item';
                item.innerText = drink.strDrink;
                item.onclick = () => showCustomDrink(drink);
                resDiv.appendChild(item);
            });
        } else {
            resDiv.innerHTML = "“遗憾，在那片领域并未发现此物。”";
        }
    } catch(e) { 
        resDiv.innerHTML = "“连接断开了，迷雾太重...”"; 
    }
}

function showCustomDrink(drink) {
    document.getElementById('search-overlay').classList.add('hidden');
    currentResultKey = 'custom';
    updateInterfaceMode('result', {showCard: true}); // 已改用API overlay方式
    
    let recipe = "";
    for(let i=1; i<=15; i++) {
        if(drink[`strIngredient${i}`]) {
            recipe += `• ${drink[`strMeasure${i}`] || ''} ${drink[`strIngredient${i}`]}<br>`;
        }
    }
    recipe += `<br><strong>Glass:</strong> ${drink.strGlass}<br><br>${drink.strInstructions}`;

    // 动态创建结果面板
    const overlay = document.createElement('div');
    overlay.id = 'api-result-overlay';
    overlay.innerHTML = `
        <div class="api-card">
            <h2 style="letter-spacing:3px; font-size:1rem; opacity:0.7;">[ SEARCH RESULT ]</h2>
            <img src="${drink.strDrinkThumb}" class="api-img" onerror="console.log('Image failed to load:', '${drink.strDrinkThumb}'); this.src='https://via.placeholder.com/300x300?text=No+Image';">
            <h1 class="api-title">${drink.strDrink}</h1>
            <p style="font-style:italic; color:#4dabf7; font-size:0.8rem;">Category: ${drink.strCategory}</p>
            <div class="api-recipe">
                ${recipe}
            </div>
            <button class="api-close-btn" id="close-api-btn">Back to Bar</button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.getElementById('game-container').style.display = 'none';

    document.getElementById('close-api-btn').onclick = () => {
        document.body.removeChild(overlay);
        document.getElementById('game-container').style.display = 'flex';
        renderStoryNode('main_menu');
    };
}

function openSearch(message = "“告诉我，你心中所想的味道（输入材料或酒名）...”") {
    document.getElementById('options-overlay').innerHTML = '';
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.classList.add('hidden');
    typeWriter(message, 0, () => {
        setTimeout(() => {
            searchOverlay.classList.remove('hidden');
        }, 750); // 信息停留 0.75 秒后再显示搜索界面
    });
}

function closeSearch() {
    document.getElementById('search-overlay').classList.add('hidden');
    renderStoryNode('main_menu');
}

window.onload = () => renderStoryNode('start');

async function getRandomDrink() {
    console.log("%c--- 调试开始：正在寻觅随机佳酿 ---", "color: #4dabf7; font-weight: bold;");

    // 1. 检查关键容器是否存在
    const container = document.getElementById('api-result-container');
    const gameContainer = document.getElementById('game-container');
    const screen = document.querySelector('.result-screen');

    if (!container) {
        console.error("❌ 错误：找不到 id='api-result-container' 的容器");
        return;
    }

    try {
        // 2. 发起 API 请求
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const drink = data.drinks[0];
        console.log("✅ API 请求成功，得到饮品：", drink.strDrink);

        // 3. 抓取所有显示元素并调试状态
        const elements = {
            img: document.getElementById('drink-img'),
            name: document.getElementById('drink-name'),
            cat: document.getElementById('drink-category'),
            glass: document.getElementById('drink-glass'),
            info: document.getElementById('drink-info')
        };

        // 遍历检查哪个元素丢了
        for (let key in elements) {
            if (!elements[key]) {
                console.warn(`⚠️ 警告：找不到 id='drink-${key === 'img' ? 'img' : key}' 的 HTML 元素`);
            }
        }

        // 4. 强制注入数据并修改样式（仅用于调试可见性）
        if (elements.img) {
            elements.img.src = drink.strDrinkThumb;
            elements.img.style.border = "5px solid lime"; // 强制加个绿边，看它在哪
        }
        if (elements.name) {
            elements.name.innerText = drink.strDrink;
            elements.name.style.color = "white"; // 强制白色
        }
        
        elements.cat.innerText = drink.strCategory;
        elements.glass.innerText = drink.strGlass;
        elements.info.innerText = drink.strInstructions;

        // 5. 打印计算后的样式（查黑屏元凶）
        const containerStyle = window.getComputedStyle(container);
        console.log("📊 容器 z-index:", containerStyle.zIndex);
        console.log("📊 容器 display:", containerStyle.display);
        console.log("📊 容器 opacity:", containerStyle.opacity);

        // 6. 执行切换
        gameContainer.classList.add('hidden');
        container.classList.remove('hidden');
        
        // 强制修正可能导致黑屏的 CSS 属性
        container.style.display = 'flex'; 
        container.style.opacity = '1';
        container.style.visibility = 'visible';

        console.log("%c--- 调试结束：界面已尝试推送到前端 ---", "color: #4dabf7; font-weight: bold;");

    } catch (error) {
        console.error("❌ 运行时出错:", error);
    }
}

// --- 屏幕方向管理 ---
function handleScreenOrientation() {
    const portraitWarning = document.getElementById('portrait-warning');
    const gameContainer = document.getElementById('game-container');
    
    // 检查当前方向
    const checkOrientation = () => {
        const isPortrait = window.innerHeight > window.innerWidth;
        
        if (isPortrait) {
            // 竖屏 - 显示提示
            portraitWarning.style.display = 'flex';
            gameContainer.style.display = 'none';
        } else {
            // 横屏 - 显示游戏
            portraitWarning.style.display = 'none';
            gameContainer.style.display = 'flex';
        }
    };
    
    // 初始检查
    checkOrientation();
    
    // 监听方向改变
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    
    // 尝试锁定屏幕方向（仅 iOS Safari 和某些 Android 浏览器支持）
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(() => {
            console.log('无法锁定屏幕方向，请手动调整');
        });
    }
}

// 页面加载时初始化屏幕方向
document.addEventListener('DOMContentLoaded', handleScreenOrientation);