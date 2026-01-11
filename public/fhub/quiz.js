// Quiz data structure with branching logic
const quizData = {
    questions: {
        q1: {
            text: "What's your biggest business challenge right now?",
            answers: [
                { text: "Growing revenue and acquiring customers", next: "q2a" },
                { text: "Improving operations and efficiency", next: "q2b" },
                { text: "Managing finances and fundraising", next: "q2c" },
                { text: "Building product and team culture", next: "q2d" }
            ]
        },
        q2a: {
            text: "What aspect of growth needs the most attention?",
            answers: [
                { text: "Marketing strategy and lead generation", next: "q3a", category: "Marketing & Growth" },
                { text: "Sales process and closing deals", next: "q3a", category: "Sales & Revenue Operations" },
                { text: "Understanding our target market better", next: "q3a", category: "Marketing & Growth" }
            ]
        },
        q2b: {
            text: "Where are your operational pain points?",
            answers: [
                { text: "Hiring and team processes", next: "q3b", category: "Operations & Scale" },
                { text: "System chaos and tech stack bloat", next: "q3b", category: "Operations & Scale" },
                { text: "Crisis management or turnaround needed", next: "q3b", category: "Operations & Scale" }
            ]
        },
        q2c: {
            text: "What financial challenge are you facing?",
            answers: [
                { text: "Preparing for fundraising", next: "q3c", category: "Finance & Fundraising" },
                { text: "Understanding our unit economics and profitability", next: "q3c", category: "Finance & Fundraising" },
                { text: "Cash flow management and forecasting", next: "q3c", category: "Finance & Fundraising" }
            ]
        },
        q2d: {
            text: "What's your focus area?",
            answers: [
                { text: "Product development and launches", next: "q3d", category: "Product & People" },
                { text: "Company culture and HR systems", next: "q3d", category: "Product & People" },
                { text: "Performance management and retention", next: "q3d", category: "Product & People" }
            ]
        },
        q3a: {
            text: "What's your timeline and budget?",
            answers: [
                { text: "Quick wins in 2-4 weeks ($5k-$10k)", timeframe: "short", budget: "low" },
                { text: "Medium engagement 6-8 weeks ($10k-$18k)", timeframe: "medium", budget: "medium" },
                { text: "Comprehensive 90 days ($18k-$25k)", timeframe: "long", budget: "high" }
            ]
        },
        q3b: {
            text: "What's your timeline and budget?",
            answers: [
                { text: "Quick wins in 3-5 weeks ($6k-$12k)", timeframe: "short", budget: "low" },
                { text: "Medium engagement 6-8 weeks ($12k-$18k)", timeframe: "medium", budget: "medium" },
                { text: "Major overhaul 10-12 weeks ($15k-$30k)", timeframe: "long", budget: "high" }
            ]
        },
        q3c: {
            text: "What's your timeline and budget?",
            answers: [
                { text: "Quick analysis 3-5 weeks ($7k-$12k)", timeframe: "short", budget: "low" },
                { text: "Medium engagement 6-8 weeks ($12k-$18k)", timeframe: "medium", budget: "medium" },
                { text: "Comprehensive 12+ weeks ($20k-$35k)", timeframe: "long", budget: "high" }
            ]
        },
        q3d: {
            text: "What's your timeline and budget?",
            answers: [
                { text: "Quick sprint 4-6 weeks ($8k-$14k)", timeframe: "short", budget: "low" },
                { text: "Medium engagement 6-8 weeks ($10k-$16k)", timeframe: "medium", budget: "medium" },
                { text: "Comprehensive 8-10 weeks ($15k-$22k)", timeframe: "long", budget: "high" }
            ]
        }
    }
};

// State management
let currentQuestion = 'q1';
let questionHistory = [];
let userChoices = {
    category: null,
    timeframe: null,
    budget: null
};
let playbooks = [];

// Load playbooks data
async function loadPlaybooks() {
    try {
        const response = await fetch('playbooks.json');
        const data = await response.json();
        playbooks = data.playbooks;
    } catch (error) {
        console.error('Error loading playbooks:', error);
    }
}

// Initialize quiz
function initQuiz() {
    loadPlaybooks();
    renderQuestion(currentQuestion);
}

// Render question
function renderQuestion(questionId) {
    const question = quizData.questions[questionId];
    const questionTitle = document.getElementById('question-title');
    const answersContainer = document.getElementById('answers-container');
    const currentQuestionNum = document.getElementById('current-question');
    const progressBar = document.getElementById('progress-bar');
    const backBtn = document.getElementById('back-btn');
    
    // Update question text
    questionTitle.textContent = question.text;
    
    // Update progress
    const questionNum = questionHistory.length + 1;
    currentQuestionNum.textContent = questionNum;
    progressBar.style.width = `${(questionNum / 3) * 100}%`;
    
    // Show/hide back button
    backBtn.style.display = questionHistory.length > 0 ? 'block' : 'none';
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Render answers
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.style.cssText = `
            padding: 20px 24px;
            background: var(--white);
            border: 2px solid var(--light-bg);
            border-radius: 12px;
            text-align: left;
            font-size: 16px;
            color: var(--text-dark);
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 500;
        `;
        button.textContent = answer.text;
        
        // Hover effect
        button.addEventListener('mouseenter', () => {
            button.style.borderColor = 'var(--primary-blue)';
            button.style.background = 'var(--light-bg)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.borderColor = 'var(--light-bg)';
            button.style.background = 'var(--white)';
        });
        
        button.addEventListener('click', () => handleAnswer(answer));
        answersContainer.appendChild(button);
    });
}

// Handle answer selection
function handleAnswer(answer) {
    // Store category if present
    if (answer.category) {
        userChoices.category = answer.category;
    }
    
    // Store timeframe and budget if present
    if (answer.timeframe) {
        userChoices.timeframe = answer.timeframe;
    }
    if (answer.budget) {
        userChoices.budget = answer.budget;
    }
    
    // Check if this is the final question
    if (!answer.next) {
        showResults();
        return;
    }
    
    // Save current question to history
    questionHistory.push(currentQuestion);
    
    // Move to next question
    currentQuestion = answer.next;
    renderQuestion(currentQuestion);
}

// Go back to previous question
document.getElementById('back-btn').addEventListener('click', () => {
    if (questionHistory.length > 0) {
        currentQuestion = questionHistory.pop();
        renderQuestion(currentQuestion);
    }
});

// Match playbooks based on user choices
function matchPlaybooks() {
    let filtered = playbooks.filter(p => p.category === userChoices.category);
    
    // Score each playbook based on budget and timeframe
    const scoredPlaybooks = filtered.map(playbook => {
        let score = 0;
        const avgPrice = (playbook.price.min + playbook.price.max) / 2;
        
        // Budget matching
        if (userChoices.budget === 'low' && avgPrice < 12000) score += 2;
        if (userChoices.budget === 'medium' && avgPrice >= 10000 && avgPrice <= 20000) score += 2;
        if (userChoices.budget === 'high' && avgPrice > 18000) score += 2;
        
        // Timeframe matching (approximate)
        const timeWeeks = parseInt(playbook.timeLength) || 6;
        if (userChoices.timeframe === 'short' && timeWeeks <= 5) score += 1;
        if (userChoices.timeframe === 'medium' && timeWeeks >= 5 && timeWeeks <= 10) score += 1;
        if (userChoices.timeframe === 'long' && timeWeeks >= 8) score += 1;
        
        return { ...playbook, score };
    });
    
    // Sort by score and return top 3
    return scoredPlaybooks.sort((a, b) => b.score - a.score).slice(0, 3);
}

// Show results
function showResults() {
    const quizContent = document.getElementById('quiz-content');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');
    const progressBar = document.getElementById('progress-bar');
    const backBtn = document.getElementById('back-btn');
    
    // Hide quiz, show results
    quizContent.style.display = 'none';
    resultsSection.style.display = 'block';
    progressBar.style.width = '100%';
    backBtn.style.display = 'none';
    
    // Get matched playbooks
    const matches = matchPlaybooks();
    
    // Render results
    resultsContainer.innerHTML = '';
    matches.forEach((playbook, index) => {
        const card = document.createElement('div');
        card.style.cssText = `
            background: var(--light-bg);
            border-radius: 12px;
            padding: 30px;
            border-left: 4px solid var(--primary-blue);
        `;
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                <div>
                    <span style="display: inline-block; background: var(--primary-blue); color: white; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; margin-bottom: 10px;">
                        ${index === 0 ? 'BEST MATCH' : 'RECOMMENDED'}
                    </span>
                    <h3 style="font-size: 22px; margin-bottom: 8px; color: var(--text-dark);">${playbook.title}</h3>
                    <p style="color: var(--text-gray); margin-bottom: 15px;">${playbook.description}</p>
                </div>
            </div>
            <div style="margin-bottom: 15px;">
                <p style="font-size: 14px; color: var(--text-gray); margin-bottom: 5px;">
                    <strong style="color: var(--text-dark);">Delivered by:</strong> ${playbook.offeredBy.name}, ${playbook.offeredBy.role}
                </p>
                <p style="font-size: 13px; color: var(--text-gray);">${playbook.offeredBy.experience}</p>
            </div>
            <div style="display: flex; gap: 30px; flex-wrap: wrap; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1);">
                <div>
                    <p style="font-size: 12px; color: var(--text-gray); margin-bottom: 3px;">Timeline</p>
                    <p style="font-weight: 600; color: var(--text-dark);">${playbook.timeLength}</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: var(--text-gray); margin-bottom: 3px;">Commitment</p>
                    <p style="font-weight: 600; color: var(--text-dark);">${playbook.commitment}</p>
                </div>
                <div>
                    <p style="font-size: 12px; color: var(--text-gray); margin-bottom: 3px;">Investment</p>
                    <p style="font-weight: 600; color: var(--text-dark);">$${playbook.price.min.toLocaleString()} - $${playbook.price.max.toLocaleString()}</p>
                </div>
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

// Restart quiz
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestion = 'q1';
    questionHistory = [];
    userChoices = { category: null, timeframe: null, budget: null };
    
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('results-section').style.display = 'none';
    
    renderQuestion(currentQuestion);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initQuiz);
