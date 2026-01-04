const colorThemes = [
    { name: 'GOLD', primary: '#FFD700', secondary: '#000000' },
    { name: 'CRIMSON', primary: '#DC2626', secondary: '#FFFFFF' },
    { name: 'ELECTRIC BLUE', primary: '#3B82F6', secondary: '#FFFFFF' },
    { name: 'EMERALD', primary: '#10B981', secondary: '#000000' },
    { name: 'MAGENTA', primary: '#EC4899', secondary: '#FFFFFF' },
    { name: 'ORANGE', primary: '#F97316', secondary: '#000000' },
    { name: 'CYAN', primary: '#06B6D4', secondary: '#000000' },
    { name: 'PURPLE', primary: '#8B5CF6', secondary: '#FFFFFF' },
    { name: 'LIME', primary: '#84CC16', secondary: '#000000' },
    { name: 'CORAL', primary: '#FF6B6B', secondary: '#000000' },
    { name: 'TEAL', primary: '#14B8A6', secondary: '#000000' },
    { name: 'ROSE', primary: '#F43F5E', secondary: '#FFFFFF' },
    { name: 'AMBER', primary: '#F59E0B', secondary: '#000000' },
    { name: 'VIOLET', primary: '#7C3AED', secondary: '#FFFFFF' },
    { name: 'SPRING GREEN', primary: '#00D9A5', secondary: '#000000' }
];

const categoryAffirmations = {
    fear: {
        name: 'Fear',
        icon: '🛡️',
        messages: [
            "I AM STRONGER THAN MY FEARS",
            "FEAR IS JUST A FEELING, NOT MY REALITY",
            "I HAVE THE POWER TO OVERCOME ANYTHING",
            "I CHOOSE COURAGE OVER COMFORT",
            "MY INNER STRENGTH IS UNBREAKABLE",
            "I FACE MY FEARS HEAD-ON",
            "I AM BOLD, I AM BRAVE, I AM FREE",
            "EVERY DAY I GROW STRONGER",
            "I RELEASE ALL Fear AND EMBRACE LOVE",
            "MY HEART IS FILLED WITH COURAGE",
            "I TRUST MY ABILITY TO HANDLE ANYTHING",
            "I AM SAFE TO EXPLORE AND GROW",
            "I MOVE FORWARD DESPITE MY FEARS",
            "I AM THE HERO OF MY OWN STORY",
            "MY CONFIDENCE GROWS WITH EVERY STEP",
            "I CONQUER DOUBT WITH ACTION",
            "I AM WORTHY OF LIVING WITHOUT FEAR",
            "THE ONLY THING I SHOULD FEAR IS FEAR ITSELF",
            "I RISE ABOVE EVERY CHALLENGE",
            "I AM CAPABLE OF AMAZING THINGS",
            "MY SPIRIT IS STRONGER THAN ANY FEAR",
            "I WELCOME ADVENTURE AND GROWTH",
            "I RELEASE THE NEED TO CONTROL EVERYTHING",
            "I TRUST THE UNIVERSE HAS MY BACK",
            "I AM RESILIENT, I AM POWERFUL",
            "I CHOOSE TO LIVE IN FREEDOM",
            "MY COURAGE IS MY SUPERPOWER",
            "I FACE THE UNKNOWN WITH GRACE",
            "I TRANSFORM FEAR INTO FUEL",
            "I AM COMPLETELY, TOTALLY FREE"
        ]
    },
    anxiety: {
        name: 'Anxiety',
        icon: '🌊',
        messages: [
            "I BREATHE IN PEACE, I BREATHE OUT WORRY",
            "I AM SAFE IN THIS MOMENT",
            "I RELEASE WHAT I CANNOT CONTROL",
            "MY MIND CAN FIND CALM ANYTIME",
            "I TRUST THE PROCESS OF LIFE",
            "I SURRENDER TO THE PRESENT MOMENT",
            "MY BREATH IS MY ANCHOR OF PEACE",
            "I LET GO OF WHAT NO LONGER SERVES ME",
            "I AM GROUNDED, CENTERED, AND WHOLE",
            "I CHOOSE CALM OVER CHAOS",
            "I RELEASE ALL TENSION FROM MY BODY",
            "I TRUST THAT EVERYTHING WILL BE OKAY",
            "I AM AT PEACE WITH THE UNKNOWN",
            "I SLOW DOWN AND FIND STILLNESS",
            "I REPLACE WORRY WITH GRATITUDE",
            "I AM SURROUNDED BY DIVINE PROTECTION",
            "I BREATHE IN STRENGTH, I BREATHE OUT FEAR",
            "MY MIND IS CLEAR AND SERENE",
            "I EMBRACE QUIET MOMENTS OF REFLECTION",
            "I AM WORTHY OF INNER PEACE",
            "I FORGIVE MYSELF FOR WORRYING",
            "I TRUST THE JOURNEY OF LIFE",
            "I AM PATIENT WITH MY OWN HEALING",
            "I CREATE SPACE FOR CALM IN MY LIFE",
            "I AM GENTLE WITH MY SENSITIVE HEART",
            "I SURRENDER TO DIVINE TIMING",
            "I RELEASE ANXIOUS THOUGHTS WITH EASE",
            "I AM SURROUNDED BY LOVE AND SUPPORT",
            "I CHOOSE PEACE IN EVERY MOMENT",
            "I AM COMPLETELY CALM AND CENTERED"
        ]
    },
    sadness: {
        name: 'Sadness',
        icon: '💜',
        messages: [
            "IT'S OKAY TO FEEL, HEALING TAKES TIME",
            "I AM WORTHY OF JOY AND HAPPINESS",
            "THIS PAIN IS TEMPORARY, MY STRENGTH IS FOREVER",
            "I GRIEVE WITH HOPE, I HEAL WITH COURAGE",
            "I DESERVE COMPASSION AND LOVE",
            "I HONOR MY FEELINGS WITHOUT JUDGMENT",
            "I AM ALLOWED TO TAKE MY TIME TO HEAL",
            "MY HEART WILL HEAL AND LOVE AGAIN",
            "I EMBRACE MY EMOTIONS WITH KINDNESS",
            "I SURRROUND MYSELF WITH POSITIVE ENERGY",
            "I RELEASE SORROW AND WELCOME LIGHT",
            "I AM STRONG ENOUGH TO GET THROUGH THIS",
            "I AM GENTLE WITH MYSELF IN HARD TIMES",
            "I CHOOSE HEALING OVER HURT",
            "I TRUST THAT BETTER DAYS ARE COMING",
            "I AM RESILIENT IN THE FACE OF PAIN",
            "I LET MY HEART BREAK AND THEN REBUILD",
            "I AM SURROUNDED BY HEALING LIGHT",
            "I ACCEPT WHERE I AM ON MY JOURNEY",
            "I FIND STRENGTH IN MY VULNERABILITY",
            "I RELEASE THE PAST AND EMBRACE NOW",
            "I AM NOT ALONE IN MY STRUGGLE",
            "I CRY, I HEAL, I RISE AGAIN",
            "I AM COMPASSIONATE TOWARD MYSELF",
            "I SURRENDER MY PAIN TO THE UNIVERSE",
            "I AM A SURVIVOR, I AM A THRIVER",
            "I EMBRACE THE FULL SPECTRUM OF LIFE",
            "I ALLOW MYSELF TO FEEL AND THEN RELEASE",
            "I DESERVE HAPPINESS AND FULFILLMENT",
            "I OPEN MY HEART TO JOY AND LOVE"
        ]
    },
    creative: {
        name: 'Creative Block',
        icon: '✨',
        messages: [
            "MY CREATIVITY FLOWS LIKE AN ENDLESS RIVER",
            "I TRUST MY UNIQUE CREATIVE VISION",
            "BRILLIANT IDEAS ARE BORN FROM ME",
            "I AM A NATURAL CREATOR OF MAGNIFICENT THINGS",
            "MY IMAGINATION HAS NO BOUNDARIES",
            "I AM A VISIONARY AND A CREATOR",
            "MY MIND IS FILLED WITH AMAZING IDEAS",
            "I TRUST MY INNER CREATIVE GENIUS",
            "I AM INFINITELY CREATIVE AND EXPRESSIVE",
            "I EMBRACE MY ARTISTIC SPIRIT",
            "I RELEASE ALL CREATIVE BLOCKS",
            "I ALLOW MY IDEAS TO FLOW FREELY",
            "I AM A MASTER OF MY CRAFT",
            "I TRUST THE CREATIVE PROCESS",
            "I CELEBRATE MY UNIQUE CREATIVE VOICE",
            "I AM INSPIRED BY LIFE ITSELF",
            "MY CREATIVITY IGNITES MY SOUL",
            "I AM DIVINELY GUIDED IN MY CREATIONS",
            "I SURRENDER TO MY CREATIVE IMPULSE",
            "I AM BOLD, BRAVE, AND CREATIVE",
            "I TRUST THAT IDEAS WILL COME TO ME",
            "I AM OPEN TO INFINITE CREATIVE POSSIBILITIES",
            "I LET MY SPIRIT GUIDE MY CREATIVE WORK",
            "I AM A CHANNEL FOR DIVINE CREATIVITY",
            "I RELEASE ALL DOUBT ABOUT MY TALENTS",
            "I AM CONFIDENT IN MY CREATIVE ABILITIES",
            "I TRUST MY INSTINCTS AND MY VISION",
            "I AM A BIRTHER OF NEW IDEAS",
            "MY CREATIVITY IS MY SUPERPOWER",
            "I AM LIMITLESS IN MY CREATIVE EXPRESSION"
        ]
    },
    focus: {
        name: 'Focus',
        icon: '🎯',
        messages: [
            "I HAVE COMPLETE CLARITY OF MIND",
            "I DIRECT MY ENERGY TOWARD WHAT MATTERS",
            "ONE STEP AT A TIME, I ACHIEVE GREATNESS",
            "MY MIND IS SHARP, MY PURPOSE IS CLEAR",
            "I COMPLETE WHAT I START WITH EXCELLENCE",
            "I AM COMPLETELY PRESENT IN THIS MOMENT",
            "I PRIORITIZE WHAT TRULY MATTERS",
            "I MAINTAIN LASER-LIKE FOCUS DAILY",
            "I AM DISCIPLINED AND DETERMINED",
            "I REMAIN CENTERED UNDER PRESSURE",
            "I SAY NO TO DISTRACTIONS, YES TO PURPOSE",
            "I TRUST MY ABILITY TO CONCENTRATE",
            "I COMPLEX TASKS WITH EASE AND CLARITY",
            "I AM THE MASTER OF MY ATTENTION",
            "I FOCUS ON SOLUTIONS, NOT PROBLEMS",
            "I TAKE CALCULATED STEPS TOWARD MY GOALS",
            "I AM PRODUCTIVE, EFFICIENT, AND EFFECTIVE",
            "I HONOR MY TIME AND MY ENERGY",
            "I AM UNWAVERING IN MY DEDICATION",
            "I FINISH WHAT I START WITH PRIDE",
            "I REMAIN CALM AND FOCUSED ALWAYS",
            "I TRUST MY INNER GUIDANCE SYSTEM",
            "I AM COMMITTED TO MY HIGHEST GOALS",
            "I MAKE PROGRESS EVERY SINGLE DAY",
            "I AM IN CONTROL OF MY ATTENTION",
            "I CELEBRATE EACH ACCOMPLISHMENT",
            "I AM A MASTER OF MY OWN TIME",
            "I FOCUS ON ONE THING AT A TIME",
            "I AM PROUD OF MY ACCOMPLISHMENTS",
            "I COMPLETE MY WORK WITH GREAT JOY"
        ]
    },
    health: {
        name: 'Health',
        icon: '💚',
        messages: [
            "MY BODY IS STRONG, MY MIND IS RESILIENT",
            "I NOURISH MYSELF WITH LOVE AND CARE",
            "EVERY CELL IN MY BODY RADIATES WELLNESS",
            "I AM GRATEFUL FOR THIS HEALTHY BODY",
            "HEALING FLOWS THROUGH ME EFFORTLESSLY",
            "I GIVE MY BODY THE REST IT NEEDS",
            "I CHOOSE FOODS THAT NOURISH AND HEAL",
            "I MOVE MY BODY WITH JOY AND GRACE",
            "I AM SURROUNDED BY HEALING ENERGY",
            "MY IMMUNE SYSTEM IS STRONG AND RESILIENT",
            "I LISTEN TO MY BODY'S WISDOM",
            "I DESERVE TO FEEL AMAZING EVERY DAY",
            "I RELEASE ALL TENSION FROM MY MUSCLES",
            "I BREATHE IN VITALITY AND HEALTH",
            "I AM HEALED, I AM WHOLE, I AM WELL",
            "MY BODY KNOWS HOW TO HEAL ITSELF",
            "I TREAT MY BODY WITH LOVE AND RESPECT",
            "I AM COMMITTED TO MY WELL-BEING",
            "EVERY DAY MY HEALTH IMPROVES",
            "I TRUST MY BODY'S ABILITY TO HEAL",
            "I AM FILLED WITH ENERGY AND VITALITY",
            "I MAKE HEALTHY CHOICES EASILY",
            "I AM WORTHY OF EXCELLENT HEALTH",
            "I SURRENDER TO DEEP, RESTORATIVE SLEEP",
            "MY MIND, BODY, AND SPIRIT ARE ALIGNED",
            "I NOURISH MYSELF INSIDE AND OUT",
            "I RELEASE ALL NEGATIVE HEALTH HABITS",
            "I AM Grateful FOR MY STRONG BODY",
            "I CHOOSE WELLNESS IN EVERY MOMENT",
            "I AM THE PICTURE OF HEALTH AND VITALITY"
        ]
    },
    finance: {
        name: 'Finance',
        icon: '💰',
        messages: [
            "I AM A MAGNET FOR ABUNDANCE AND PROSPERITY",
            "MONEY FLOWS TO ME EASILY AND FREELY",
            "I DESERVE FINANCIAL FREEDOM AND SUCCESS",
            "I MAKE WISE DECISIONS THAT CREATE WEALTH",
            "ABUNDANCE IS MY NATURAL STATE OF BEING",
            "I AM SURROUNDED BY FINANCIAL ABUNDANCE",
            "I RELEASE ALL BLOCKS TO WEALTH",
            "MY INCOME INCREASES DAILY",
            "I AM A SMART AND SUCCESSFUL INVESTOR",
            "I ATTRACT MONEY FROM UNEXPECTED SOURCES",
            "I LIVE IN A STATE OF FINANCIAL PEACE",
            "I AM GRATEFUL FOR ALL THE MONEY I HAVE",
            "I TRUST THE UNIVERSE TO PROVIDE",
            "MY FINANCIAL FUTURE IS BRIGHT AND SECURE",
            "I AM WORTHY OF UNLIMITED WEALTH",
            "I RECEIVE MONEY EASILY AND JOYFULLY",
            "I MAKE DECISIONS THAT GROW MY WEALTH",
            "I RELEASE ALL FEAR ABOUT MONEY",
            "I AM CONFIDENT IN MY FINANCIAL ABILITY",
            "I DESERVE TO LIVE A LIFE OF LUXURY",
            "MY BANK ACCOUNT IS ALWAYS GROWING",
            "I ATTRACT OPPORTUNITIES FOR WEALTH",
            "I AM A MASTER OF MY FINANCIAL DESTINY",
            "I LIVE ABUNDANTLY AND GENEROUSLY",
            "FINANCIAL FREEDOM IS MY BIRTHRIGHT",
            "I AM SURROUNDED BY PROSPERITY EVERYWHERE",
            "I TRUST IN MY ABILITY TO CREATE WEALTH",
            "MONEY COMES TO ME EFFORTLESSLY",
            "I AM GRATEFUL FOR FINANCIAL INDEPENDENCE",
            "I OPEN MYSELF TO UNLIMITED ABUNDANCE"
        ]
    },
    relationships: {
        name: 'Relationships',
        icon: '💞',
        messages: [
            "I AM SURROUNDED BY LOVE AND SUPPORT",
            "I ATTRACT HEALTHY, LOVING RELATIONSHIPS",
            "I COMMUNICATE WITH CLARITY AND KINDNESS",
            "I DESERVE TO BE LOVED UNCONDITIONALLY",
            "I SET BOUNDARIES THAT PROTECT MY PEACE",
            "I SURROUND MYSELF WITH POSITIVE PEOPLE",
            "I AM A LOYAL AND TRUSTWORTHY FRIEND",
            "I HEAL AND GROW IN EVERY RELATIONSHIP",
            "I OPEN MY HEART TO DEEP CONNECTION",
            "I ATTRACT PEOPLE WHO RESPECT ME",
            "I AM WORTHY OF DEEP, MEANINGFUL LOVE",
            "I RELEASE TOXIC RELATIONSHIPS EASILY",
            "I TRUST MY INTUITION IN RELATIONSHIPS",
            "I GIVE LOVE FREELY AND RECEIVE IT GRATEFULLY",
            "I BUILD STRONG BONDS WITH OTHERS",
            "I AM VULNERABLE AND STRONG AT ONCE",
            "I FORGIVE OTHERS AND SET MYSELF FREE",
            "I CHOOSE LOVE OVER FEAR IN RELATIONSHIPS",
            "I AM A SAFE SPACE FOR OTHERS TO HEAL",
            "I ATTRACT AUTHENTIC FRIENDSHIPS",
            "I CELEBRATE THE SUCCESS OF OTHERS",
            "I AM PRESENT IN ALL MY RELATIONSHIPS",
            "I SHARE MY TRUTH WITH LOVE AND COURAGE",
            "I AM GRATEFUL FOR EVERY CONNECTION",
            "I DESERVE RESPECT IN EVERY RELATIONSHIP",
            "I CREATE HARMONY IN ALL MY INTERACTIONS",
            "I TRUST THE TIMING OF MY HEART",
            "I AM PEACEFUL IN ALL MY RELATIONSHIPS",
            "I ATTRACT SOUL-LEVEL CONNECTIONS",
            "I LOVE AND AM LOVED DEEPLY"
        ]
    },
    sleep: {
        name: 'Sleep',
        icon: '🌙',
        messages: [
            "I SURRENDER TO PEACEFUL, RESTORATIVE SLEEP",
            "MY BODY RELAXES COMPLETELY EACH NIGHT",
            "I RELEASE THE DAY AND EMBRACE REST",
            "I SLEEP DEEPLY AND WAKE REFRESHED",
            "MY MIND IS CALM AS I DRIFT TO SLEEP",
            "I CREATE A SANCTUARY OF PEACE AT NIGHT",
            "I DESERVE COMPLETE REST AND RECOVERY",
            "I FALL ASLEEP EASILY AND NATURALLY",
            "I RELEASE ALL TENSION FROM MY BODY",
            "I AM SAFE TO LET GO AND SLEEP",
            "MY SLEEP IS HEALING AND RESTORATIVE",
            "I WAKE UP FILLED WITH ENERGY AND JOY",
            "I HONOR MY BODY'S NEED FOR REST",
            "I LET GO OF WORRIES BEFORE BED",
            "I SLEEP PEACEFULLY THROUGH THE NIGHT",
            "I AM GRATEFUL FOR THIS TIME OF REST",
            "MY BODY HEALS WHILE I SLEEP",
            "I CREATE HEALTHY SLEEP HABITS DAILY",
            "I DRIFT INTO SLEEP WITH GRATITUDE",
            "I WAKE FEELING COMPLETELY RESTORED",
            "I SURRENDER TO THE HEALING POWER OF SLEEP",
            "MY SLEEP PATTERN IS PERFECTLY BALANCED",
            "I RELEASE ALL RESTLESSNESS AT NIGHT",
            "I AM PEACEFUL, CALM, AND SLEEPING DEEPLY",
            "I TRUST MY BODY TO HEAL WHILE I REST",
            "I FALL ASLEEP WITH A Grateful HEART",
            "MY SLEEP QUALITY IMPROVES DAILY",
            "I AM WELL-RESTED AND VITAL EVERY MORNING",
            "I EMBRACE SLEEP AS A HEALING PRACTICE",
            "I SLEEP LIKE A PEACEFUL WARRIOR"
        ]
    },
    selflove: {
        name: 'Self-Love',
        icon: '💝',
        messages: [
            "I LOVE AND ACCEPT MYSELF COMPLETELY",
            "I AM WORTHY OF MY OWN UNCONDITIONAL LOVE",
            "I TREAT MYSELF WITH KINDNESS AND PATIENCE",
            "I FORGIVE MYSELF FOR ALL PAST MISTAKES",
            "I CELEBRATE WHO I AM BECOMING",
            "I AM ENOUGH EXACTLY AS I AM RIGHT NOW",
            "I SURROUND MYSELF WITH SELF-COMPASSION",
            "I HONOR MY NEEDS AND MY BOUNDARIES",
            "I CHOOSE SELF-LOVE EVERY SINGLE DAY",
            "I DESERVE THE BEST THAT LIFE OFFERS",
            "I AM GENTLE WITH MY OWN HEART",
            "I TRUST MY INNER VOICE AND WISDOM",
            "I RELEASE THE NEED FOR OUTSIDE VALIDATION",
            "I AM PROUD OF MY STRENGTH AND RESILIENCE",
            "I NOURISH MYSELF WITH LOVE AND CARE",
            "I EMBRACE MY PERFECT IMPERFECTIONS",
            "I AM MY OWN BEST FRIEND AND SUPPORTER",
            "I CHOOSE HAPPINESS FOR MYSELF FIRST",
            "I AM GRATEFUL FOR MY UNIQUE GIFTS",
            "I SPEAK KINDLY TO MYSELF ALWAYS",
            "I AM BEAUTIFUL INSIDE AND OUT",
            "I GENTLE MYSELF WITH COMPASSION DAILY",
            "I RESPECT AND HONOR MY JOURNEY",
            "I LET GO OF SELF-CRITICISM COMPLETELY",
            "I AM WORTHY OF ALL THE LOVE I GIVE",
            "I RADIATE SELF-LOVE EVERYWHERE I GO",
            "I CREATE A LIFE FILLED WITH SELF-CARE",
            "I AM COMPLETELY AT PEACE WITH MYSELF",
            "I CHOOSE MYSELF WITHOUT GUILT OR SHAME",
            "I AM DEEPLY, UNCONDITIONALLY IN LOVE WITH MYSELF"
        ]
    },
    gratitude: {
        name: 'Gratitude',
        icon: '🙏',
        messages: [
            "I AM DEEPLY GRATEFUL FOR THIS BEAUTIFUL LIFE",
            "I FIND JOY IN EVERY SINGLE DAY",
            "I APPRECIATE ALL THE BLESSINGS IN MY LIFE",
            "I AM THANKFUL FOR EVERY LESSON LEARNED",
            "I COUNT MY BLESSINGS DAILY AND PROUDLY",
            "I SURROUND MYSELF WITH THINGS THAT BRING ME JOY",
            "I AM GRATEFUL FOR THE PEOPLE WHO LOVE ME",
            "I APPRECIATE THE PRESENT MOMENT FULLY",
            "I AM THANKFUL FOR MY HEALTH AND VITALITY",
            "I RECOGNIZE THE ABUNDANCE IN MY LIFE",
            "I EXPRESS GRATITUDE FOR EVERYTHING I HAVE",
            "I AM BLESSED IN SO MANY UNSEEN WAYS",
            "I FIND BEAUTY IN THE SIMPLE THINGS",
            "I AM GRATEFUL FOR THIS DAY AND EVERY DAY",
            "I APPRECIATE THE MIRACLES THAT SURROUND ME",
            "I AM THANKFUL FOR MY UNIQUE JOURNEY",
            "I WELCOME PROSPERITY WITH A GRATEFUL HEART",
            "I CELEBRATE ALL OF MY ACCOMPLISHMENTS",
            "I AM APPRECIATIVE OF THE LOVE I SHARE",
            "I FIND REASONS TO SMILE EVERY DAY",
            "I AM DEEPLY GRATEFUL FOR MY GROWTH",
            "I HONOR ALL WHO HAVE SUPPORTED ME",
            "I AM THANKFUL FOR MY STRENGTH AND COURAGE",
            "I APPRECIATE THE PEACE I HAVE CREATED",
            "I AM GRATEFUL FOR NEW BEGINNINGS EACH DAY",
            "I RECOGNIZE THE MAGIC IN EVERY MOMENT",
            "I AM BLESSED WITH AMAZING OPPORTUNITIES",
            "I EXPRESS THANKS FOR EVERY BLESSING",
            "I AM OVERFLOWING WITH GRATITUDE AND JOY",
            "I WELCOME MORE REASONS TO BE THANKFUL"
        ]
    },
    general: {
        name: 'General',
        icon: '🌟',
        messages: [
            "I AM ENOUGH, JUST AS I AM",
            "I BELIEVE IN MYSELF COMPLETELY",
            "I AM POWERFUL BEYOND MEASURE",
            "MY POTENTIAL IS TRULY LIMITLESS",
            "I CREATE MY OWN MIRACLES EVERY DAY",
            "I AM WORTHY OF ALL GOOD THINGS",
            "I TRUST MY INNER WISDOM",
            "I AM SURROUNDED BY DIVINE LOVE",
            "I EMBRACE MY UNIQUE JOURNEY",
            "I LIVE IN THE MOMENT AND FIND JOY",
            "I AM STRONG, RESILIENT, AND BRAVE",
            "I DESERVE TO BE HAPPY AND FULFILLED",
            "I CHOOSE POSITIVITY AND HOPE",
            "I AM A LIGHT TO OTHERS",
            "I SURRENDER TO THE DIVINE PLAN",
            "I AM CONNECTED TO MY HIGHER POWER",
            "I LIVE WITH PURPOSE AND MEANING",
            "I AM AT PEACE WITH WHO I AM",
            "I CELEBRATE MY UNIQUE GIFTS",
            "I TRUST THE JOURNEY OF MY LIFE",
            "I AM CONFIDENT IN MY OWN ABILITIES",
            "I OPEN MY HEART TO UNCONDITIONAL LOVE",
            "I AM GRATEFUL FOR THIS BEAUTIFUL LIFE",
            "I RADIATE POSITIVE ENERGY EVERYWHERE",
            "I AM WORTHY OF RESPECT AND KINDNESS",
            "I FORGIVE MYSELF AND OTHERS EASILY",
            "I AM A BEACON OF HOPE AND LIGHT",
            "I TRUST THAT EVERYTHING WORKS OUT",
            "I AM SURROUNDED BY ANGELS AND GUIDES",
            "I LIVE WITH PASSION, PURPOSE, AND JOY"
        ]
    }
};

let currentSlide = 1;
const totalSlides = 5;
const slideDuration = 20000;
let selectedCategory = null;
let selectedAffirmations = [];
let currentTheme = null;
let isAutoPlaying = false;
let autoplayInterval = null;
let timeRemaining = slideDuration / 1000;

function getRandomTheme() {
    const randomIndex = Math.floor(Math.random() * colorThemes.length);
    return colorThemes[randomIndex];
}

function applyTheme(theme) {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);

    const textElements = document.querySelectorAll('.affirmation, .affirmation-category, .slide-number, .healing-badge, .slide-counter, .timer-display, .playing-indicator, .category-title, .category-subtitle');
    const borderElements = document.querySelectorAll('.nav-btn, .restart-btn, .autoplay-btn, .category-btn, .back-btn, .screenshot-btn');

    textElements.forEach(el => {
        el.style.color = theme.primary;
    });

    borderElements.forEach(el => {
        el.style.borderColor = theme.primary;
        el.style.color = theme.primary;
        el.style.fill = theme.primary;
        el.style.stroke = theme.primary;
    });

    document.querySelectorAll('.nav-btn svg path').forEach(path => {
        path.style.stroke = theme.primary;
    });

    document.getElementById('timerBar').style.backgroundColor = theme.primary;

    const setupButtonHover = (btn) => {
        btn.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.backgroundColor = theme.primary;
                this.style.color = theme.secondary;
                this.style.fill = theme.secondary;
                this.style.stroke = theme.secondary;
                const svgPath = this.querySelector('svg path');
                if (svgPath) svgPath.style.stroke = theme.secondary;
            }
        });
        btn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = theme.primary;
            this.style.fill = theme.primary;
            this.style.stroke = theme.primary;
            const svgPath = this.querySelector('svg path');
            if (svgPath) svgPath.style.stroke = theme.primary;
        });
    };

    document.querySelectorAll('.nav-btn').forEach(setupButtonHover);
    setupButtonHover(document.getElementById('autoplayBtn'));
    setupButtonHover(document.getElementById('restartBtn'));
    setupButtonHover(document.getElementById('backBtn'));
    setupButtonHover(document.getElementById('screenshotBtn'));

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = theme.primary;
            this.querySelector('.category-name').style.color = theme.secondary;
        });
        btn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.querySelector('.category-name').style.color = theme.primary;
        });
    });

    console.log(`Theme applied: ${theme.name} (Primary: ${theme.primary})`);
}

function selectCategory(category) {
    selectedCategory = category;
    const categoryData = categoryAffirmations[category];

    // Shuffle and pick 5 random messages
    const shuffled = [...categoryData.messages].sort(() => Math.random() - 0.5);
    selectedAffirmations = shuffled.slice(0, totalSlides);

    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`affirmation-${i}`).textContent = selectedAffirmations[i - 1];
        const categoryLabelId = i === 1 ? 'affirmationCategory' : `affirmationCategory-${i}`;
        document.getElementById(categoryLabelId).textContent = `${categoryData.icon} ${categoryData.name}`;
    }

    console.log('Before adding hidden class');
    const categoryScreen = document.getElementById('categoryScreen');
    console.log('Category screen element:', categoryScreen);
    categoryScreen.classList.add('hidden');
    console.log('After adding hidden class, has hidden:', categoryScreen.classList.contains('hidden'));
    
    currentTheme = getRandomTheme();
    applyTheme(currentTheme);
    updateSlide(1);
}

function showCategoryScreen() {
    stopAutoPlay();
    currentSlide = 1;
    document.getElementById('categoryScreen').classList.remove('hidden');
    document.getElementById('restartBtn').classList.remove('visible');
}

function updateSlide(slideNum) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });

    const targetSlide = document.querySelector(`[data-slide="${slideNum}"]`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }

    document.getElementById('currentNum').textContent = slideNum;

    document.getElementById('prevBtn').disabled = slideNum === 1;
    document.getElementById('nextBtn').disabled = slideNum === totalSlides;

    const restartBtn = document.getElementById('restartBtn');
    if (slideNum === totalSlides) {
        restartBtn.classList.add('visible');
    } else {
        restartBtn.classList.remove('visible');
    }

    timeRemaining = slideDuration / 1000;
    document.getElementById('timerDisplay').textContent = `${timeRemaining}s`;
    document.getElementById('timerBar').style.width = '0%';
}

function startAutoPlay() {
    if (isAutoPlaying) return;

    isAutoPlaying = true;
    document.getElementById('playIcon').style.display = 'none';
    document.getElementById('pauseIcon').style.display = 'block';
    document.getElementById('playingIndicator').classList.add('visible');

    timeRemaining = slideDuration / 1000;
    document.getElementById('timerDisplay').textContent = `${timeRemaining}s`;

    let startTime = Date.now();
    let elapsed = 0;

    autoplayInterval = setInterval(() => {
        elapsed = Date.now() - startTime;

        if (elapsed >= slideDuration) {
            startTime = Date.now();
            elapsed = 0;

            if (currentSlide < totalSlides) {
                currentSlide++;
                updateSlide(currentSlide);
            } else {
                stopAutoPlay();
                return;
            }
        }

        timeRemaining = Math.ceil((slideDuration - elapsed) / 1000);
        document.getElementById('timerDisplay').textContent = `${timeRemaining}s`;

        const progress = (elapsed / slideDuration) * 100;
        document.getElementById('timerBar').style.width = `${progress}%`;
    }, 100);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    clearInterval(autoplayInterval);
    document.getElementById('playIcon').style.display = 'block';
    document.getElementById('pauseIcon').style.display = 'none';
    document.getElementById('playingIndicator').classList.remove('visible');
    document.getElementById('timerDisplay').textContent = '20s';
    document.getElementById('timerBar').style.width = '0%';
}

function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

let screenshotTimeout = null;
let isInZenMode = false;

function startScreenshotMode() {
    if (isInZenMode) return;

    isInZenMode = true;
    document.body.classList.add('zen-mode');
    document.getElementById('screenshotBtn').classList.add('active');

    screenshotTimeout = setTimeout(() => {
        stopScreenshotMode();
    }, 10000);
}

function stopScreenshotMode() {
    if (!isInZenMode) return;

    isInZenMode = false;
    document.body.classList.remove('zen-mode');
    document.getElementById('screenshotBtn').classList.remove('active');

    if (screenshotTimeout) {
        clearTimeout(screenshotTimeout);
        screenshotTimeout = null;
    }
}

function toggleScreenshotMode() {
    if (isInZenMode) {
        stopScreenshotMode();
    } else {
        startScreenshotMode();
    }
}

document.getElementById('screenshotBtn').addEventListener('click', toggleScreenshotMode);

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide(currentSlide);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide(currentSlide);
    }
});

document.getElementById('autoplayBtn').addEventListener('click', toggleAutoPlay);

document.getElementById('restartBtn').addEventListener('click', () => {
    stopAutoPlay();
    currentSlide = 1;
    
    // Re-randomize messages
    const categoryData = categoryAffirmations[selectedCategory];
    const shuffled = [...categoryData.messages].sort(() => Math.random() - 0.5);
    selectedAffirmations = shuffled.slice(0, totalSlides);
    
    for (let i = 1; i <= totalSlides; i++) {
        document.getElementById(`affirmation-${i}`).textContent = selectedAffirmations[i - 1];
    }
    
    currentTheme = getRandomTheme();
    applyTheme(currentTheme);
    updateSlide(1);
});

document.getElementById('backBtn').addEventListener('click', showCategoryScreen);

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        selectCategory(category);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < totalSlides) {
            currentSlide++;
            updateSlide(currentSlide);
        }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 1) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    } else if (e.key === 'p' || e.key === 'P') {
        toggleAutoPlay();
    }
});

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides) {
            currentSlide++;
            updateSlide(currentSlide);
        } else if (diff < 0 && currentSlide > 1) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    }
}

currentTheme = getRandomTheme();
applyTheme(currentTheme);
