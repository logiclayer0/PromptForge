const TEMPLATES = {
    art: [
        "A {style} {subject} with {mood} atmosphere, {lighting} lighting, {color} color palette, {camera} angle, {detail} details, {background} background, {quality} quality",
        "Create {style} artwork of {subject} featuring {mood} mood, {lighting} lighting, {color} tones, shot from {camera} perspective with {detail} details in {background} setting",
        "{style} illustration of {subject} with {mood} vibe, dramatic {lighting}, vibrant {color} palette, {camera} composition, intricate {detail} details, {background} environment, {quality} style",
        "Design a {style} {subject} with {mood} expression, cinematic {lighting}, harmonious {color} scheme, {camera} viewpoint, detailed {detail} elements, {background} scenery, {quality} finish"
    ],
    coding: [
        "Write {language} code for {subject} with {feature} functionality, {complexity} implementation, {optimization} optimization, and {error} error handling",
        "Create {language} solution for {subject} using {feature} approach, with {complexity} performance, {optimization} techniques, and {error} handling",
        "Develop {language} program for {subject} implementing {feature} pattern, {complexity} algorithm, {optimization} strategy, and {error} management",
        "Build {language} application for {subject} with {feature} architecture, {complexity} structure, {optimization} methods, and {error} prevention"
    ],
    writing: [
        "Write a {genre} story about {subject} with {tone} tone, {character} characters, {setting} setting, and {plot} plot, {length} length",
        "Create a {genre} narrative featuring {subject}, {tone} voice, {character} protagonists, {setting} world, and {plot} storyline, {length} length",
        "Craft a {genre} tale centered on {subject}, with {tone} atmosphere, {character} cast, {setting} backdrop, and {plot} conflict, {length} length",
        "Develop a {genre} piece about {subject} using {tone} style, {character} development, {setting} context, and {plot} arc, {length} length"
    ],
    education: [
        "Create educational content about {subject} for {level} students, covering {topic} topics, with {format} format, {approach} approach, and {goal} learning outcomes",
        "Design lesson plan for {subject} at {level} level, focusing on {topic} concepts, using {format} method, {approach} strategy, and {goal} objectives",
        "Develop study material for {subject} targeted at {level} learners, explaining {topic} principles, through {format} resources, {approach} techniques, and {goal} goals",
        "Prepare teaching resources for {subject} for {level} grade, including {topic} modules, {format} materials, {approach} pedagogy, and {goal} assessments"
    ],
    business: [
        "Create a {type} business strategy for {subject} focusing on {goal}, with {approach} approach, {resource} resources, and {timeframe} timeline",
        "Develop a {type} plan for {subject} targeting {goal}, using {approach} methodology, {resource} allocation, and {timeframe} schedule",
        "Design a {type} framework for {subject} to achieve {goal}, implementing {approach} tactics, {resource} management, and {timeframe} milestones",
        "Build a {type} system for {subject} oriented around {goal}, with {approach} principles, {resource} optimization, and {timeframe} deadlines"
    ],
    health: [
        "Create a {type} health plan for {subject} focusing on {goal}, with {approach} approach, {duration} duration, and {monitoring} monitoring",
        "Design a {type} wellness program for {subject} targeting {goal}, using {approach} methods, {duration} period, and {monitoring} tracking",
        "Develop a {type} fitness routine for {subject} to achieve {goal}, implementing {approach} exercises, {duration} schedule, and {monitoring} progress",
        "Build a {type} health regimen for {subject} centered on {goal}, with {approach} practices, {duration} timeline, and {monitoring} evaluation"
    ],
    travel: [
        "Plan a {type} trip to {subject} featuring {activity} activities, {duration} duration, {budget} budget, and {style} style of travel",
        "Create a {type} itinerary for {subject} including {activity} experiences, {duration} days, {budget} costs, and {style} accommodations",
        "Design a {type} adventure to {subject} with {activity} adventures, {duration} length, {budget} expenses, and {style} lodging",
        "Develop a {type} tour of {subject} highlighting {activity} attractions, {duration} timeframe, {budget} spending, and {style} transport"
    ],
    tech: [
        "Create a {type} technology solution for {subject} using {tech} technology, {approach} approach, {integration} integration, and {scale} scalability",
        "Design a {type} tech system for {subject} leveraging {tech} tools, {approach} architecture, {integration} compatibility, and {scale} growth",
        "Develop a {type} digital product for {subject} with {tech} stack, {approach} design, {integration} connectivity, and {scale} capacity",
        "Build a {type} technology platform for {subject} utilizing {tech} framework, {approach} development, {integration} features, and {scale} performance"
    ],
    social: [
        "Create {type} social media content for {subject} with {tone} tone, {platform} platform, {format} format, and {goal} engagement goal",
        "Design {type} posts for {subject} using {tone} voice, {platform} channels, {format} media, and {goal} interaction metrics",
        "Develop {type} campaign for {subject} with {tone} style, {platform} networks, {format} content, and {goal} conversion targets",
        "Build {type} strategy for {subject} featuring {tone} messaging, {platform} presence, {format} assets, and {goal} audience growth"
    ],
    lifestyle: [
        "Create a {type} lifestyle guide for {subject} focusing on {goal}, with {approach} approach, {duration} duration, and {outcome} outcomes",
        "Design a {type} daily routine for {subject} targeting {goal}, using {approach} habits, {duration} commitment, and {outcome} results",
        "Develop a {type} improvement plan for {subject} to achieve {goal}, implementing {approach} changes, {duration} process, and {outcome} benefits",
        "Build a {type} lifestyle framework for {subject} centered on {goal}, with {approach} practices, {duration} consistency, and {outcome} transformation"
    ]
};

const TONES = {
    professional: {
        prefix: "Generate a professional-grade ",
        suffix: " ensuring industry standards and best practices.",
        style: "professional"
    },
    casual: {
        prefix: "Create a casual ",
        suffix: " with a relaxed and approachable vibe.",
        style: "casual"
    },
    funny: {
        prefix: "Create a hilarious ",
        suffix: " with a witty and entertaining twist. Add humor!",
        style: "funny"
    },
    formal: {
        prefix: "Generate a formal ",
        suffix: " maintaining a sophisticated and official tone.",
        style: "formal"
    },
    inspiring: {
        prefix: "Create an inspiring ",
        suffix: " that motivates and uplifts with powerful language.",
        style: "inspiring"
    },
    dramatic: {
        prefix: "Create a dramatic ",
        suffix: " with intense emotions and cinematic flair.",
        style: "dramatic"
    },
    minimalist: {
        prefix: "Create a minimalist ",
        suffix: " keeping it simple, clean, and elegant.",
        style: "minimalist"
    }
};

const STYLES = {
    art: {
        style: ["realistic", "cartoon", "3D render", "watercolor", "oil painting", "digital art", "sketch", "anime", "vintage", "modern"],
        mood: ["serene", "dramatic", "happy", "mysterious", "romantic", "futuristic", "retro", "dark", "bright", "whimsical"],
        lighting: ["golden hour", "studio", "natural", "neon", "dramatic", "soft", "harsh", "twilight", "sunset", "moody"],
        color: ["warm", "cool", "monochrome", "vibrant", "pastel", "earthy", "neon", "muted", "bold", "soft"],
        camera: ["wide angle", "close-up", "bird's eye", "low angle", "macro", "panoramic", "fisheye", "aerial", "portrait", "action"],
        detail: ["high", "medium", "low", "ultra", "minimal", "maximal", "balanced", "focused", "diffuse", "precise"],
        background: ["city", "nature", "studio", "abstract", "indoor", "outdoor", "space", "underwater", "mountain", "forest"],
        quality: ["8K", "4K", "HD", "photorealistic", "cinematic", "studio", "masterpiece", "award-winning", "professional", "polished"]
    },
    coding: {
        language: ["Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "PHP", "Swift", "Kotlin"],
        feature: ["OOP", "functional", "microservices", "API", "database", "AI", "machine learning", "web", "mobile", "cloud"],
        complexity: ["simple", "moderate", "complex", "enterprise", "scalable", "optimized", "elegant", "robust", "secure", "efficient"],
        optimization: ["caching", "lazy loading", "parallel", "async", "batch", "streaming", "offline", "memory", "CPU", "network"],
        error: ["try-catch", "logging", "monitoring", "retry", "fallback", "validation", "debugging", "testing", "alerting", "recovery"]
    },
    writing: {
        genre: ["fiction", "non-fiction", "fantasy", "sci-fi", "mystery", "romance", "horror", "comedy", "drama", "thriller"],
        character: ["hero", "villain", "mentor", "sidekick", "anti-hero", "innocent", "explorer", "rebel", "creator", "jester"],
        setting: ["city", "village", "space", "underwater", "jungle", "desert", "castle", "future", "past", "parallel world"],
        plot: ["quest", "mystery", "romance", "survival", "discovery", "transformation", "conflict", "adventure", "redemption", "journey"],
        length: ["short", "medium", "long", "novella", "epic", "flash", "chapter", "series", "standalone", "anthology"],
        tone: ["light", "dark", "serious", "comic", "melancholic", "hopeful", "suspenseful", "philosophical", "emotional", "action-packed"]
    },
    education: {
        level: ["elementary", "middle school", "high school", "undergraduate", "postgraduate", "professional", "adult", "beginner", "intermediate", "advanced"],
        topic: ["math", "science", "history", "language", "arts", "technology", "geography", "literature", "physics", "chemistry"],
        format: ["worksheet", "presentation", "video", "interactive", "textbook", "quiz", "project", "experiment", "discussion", "research"],
        approach: ["visual", "auditory", "kinesthetic", "collaborative", "self-paced", "structured", "project-based", "inquiry-based", "gamified", "traditional"],
        goal: ["understanding", "application", "analysis", "creation", "evaluation", "memory", "critical thinking", "problem solving", "communication", "teamwork"]
    },
    business: {
        type: ["marketing", "sales", "operations", "finance", "HR", "strategy", "innovation", "customer", "product", "growth"],
        goal: ["increase revenue", "reduce costs", "improve efficiency", "expand market", "boost engagement", "enhance brand", "retain customers", "drive innovation", "scale operations", "optimize processes"],
        approach: ["agile", "lean", "data-driven", "customer-centric", "innovative", "traditional", "disruptive", "sustainable", "collaborative", "systematic"],
        resource: ["budget", "team", "technology", "partnerships", "data", "infrastructure", "training", "consultants", "automation", "analytics"],
        timeframe: ["short-term", "medium-term", "long-term", "quarterly", "annual", "3-month", "6-month", "1-year", "5-year", "rolling"]
    },
    health: {
        type: ["fitness", "nutrition", "mental health", "yoga", "meditation", "recovery", "strength", "cardio", "flexibility", "balance"],
        goal: ["weight loss", "muscle gain", "stress reduction", "better sleep", "more energy", "improved mobility", "increased strength", "better focus", "immunity boost", "overall wellness"],
        approach: ["gradual", "intensive", "balanced", "holistic", "scientific", "traditional", "modern", "personalized", "structured", "flexible"],
        duration: ["30 days", "60 days", "90 days", "6 months", "1 year", "ongoing", "4 weeks", "8 weeks", "12 weeks", "lifetime"],
        monitoring: ["app tracking", "journal", "check-ins", "wearables", "blood work", "fitness tests", "progress photos", "mood tracking", "sleep monitoring", "nutrition logging"]
    },
    travel: {
        type: ["solo", "family", "adventure", "luxury", "budget", "cultural", "nature", "city", "road trip", "backpacking"],
        activity: ["hiking", "sightseeing", "photography", "food tasting", "shopping", "snorkeling", "skiing", "museums", "beach", "trekking"],
        duration: ["weekend", "5 days", "week", "2 weeks", "month", "3 months", "summer", "winter", "spring break", "year"],
        budget: ["budget", "mid-range", "luxury", "backpacker", "all-inclusive", "cost-effective", "splurge", "affordable", "high-end", "value"],
        style: ["slow travel", "fast-paced", "spontaneous", "planned", "eco-friendly", "immersive", "comfortable", "adventurous", "relaxing", "educational"]
    },
    tech: {
        type: ["AI", "cloud", "mobile", "web", "IoT", "blockchain", "AR", "VR", "cybersecurity", "data"],
        tech: ["Python", "React", "AWS", "Docker", "Kubernetes", "TensorFlow", "MongoDB", "Node.js", "Figma", "Git"],
        approach: ["agile", "waterfall", "devops", "microservices", "serverless", "monolithic", "event-driven", "MVC", "MVVM", "clean architecture"],
        integration: ["API-first", "microservices", "legacy", "third-party", "cloud-native", "hybrid", "on-premise", "serverless", "edge", "mesh"],
        scale: ["startup", "SMB", "enterprise", "global", "local", "department", "organization-wide", "multi-cloud", "hybrid", "distributed"]
    },
    social: {
        type: ["carousel", "reel", "story", "post", "thread", "video", "infographic", "meme", "campaign", "challenge"],
        platform: ["Instagram", "Twitter", "LinkedIn", "TikTok", "Facebook", "YouTube", "Pinterest", "Snapchat", "Reddit", "Discord"],
        format: ["image", "video", "text", "poll", "quiz", "livestream", "short-form", "long-form", "interactive", "static"],
        goal: ["awareness", "engagement", "conversion", "community", "education", "entertainment", "inspiration", "connection", "brand loyalty", "advocacy"]
    },
    lifestyle: {
        type: ["minimalism", "mindfulness", "productivity", "self-care", "organization", "financial", "relationship", "career", "creative", "spiritual"],
        goal: ["more peace", "better habits", "work-life balance", "financial freedom", "deeper connections", "career growth", "creative expression", "inner peace", "physical health", "mental clarity"],
        approach: ["gradual", "radical", "structured", "flexible", "mindful", "intentional", "practical", "holistic", "scientific", "spiritual"],
        duration: ["daily", "weekly", "monthly", "quarterly", "ongoing", "30-day", "90-day", "year-long", "lifetime", "seasonal"],
        outcome: ["happiness", "peace", "success", "fulfillment", "balance", "growth", "clarity", "strength", "wisdom", "joy"]
    }
};