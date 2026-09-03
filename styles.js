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