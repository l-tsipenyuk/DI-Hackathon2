
questions = [
    {
        "id": 1,
        "question": "What's your favourite time of the day?",
        "opt1": "Morning. The earlier the better!",
        "opt2": "Afternoon",
        "opt3": "I'm a night owl.",
        "tags": {
            "opt1": ["cook"],
            "opt2": ["skills"],
            "opt3": ["online"]
        }
    },
    {
        "id": 2,
        "question": "Do you like dogs?",
        "opt1": "Yes, I adore them.",
        "opt2": "No extra feelings",
        "opt3": "Not at all.",
        "tags": {
            "opt1": ["dogs"],
            "opt2": ["skills"],
            "opt3": ["other"]
        }
    }, {
        "id": 3,
        "question": "What would you cook on your free day?",
        "opt1": "Potatoes, carrots, stews...the more the better: I want to invite all of my friends!",
        "opt2": "Preparing food for pets is way easier...",
        "opt3": "I prefer to write a post on how to cook rather than to actually cook.",
        "tags": {
            "opt1": ["cook"],
            "opt2": ["dogs"],
            "opt3": ["online"]
        }
    }, {
        "id": 4,
        "question": "How do you feel about charity?",
        "opt1": "I feel that now the need to donate is more than ever.",
        "opt2": "I believe in charity power but now feel that I could contribute more with other deeds.",
        "tags": {
            "opt1": ["donate"],
            "opt2": ["other"],
        }
    }, {
        "id": 5,
        "question": "What are your hobbies?",
        "opt1": "Music, yoga, zumba...I love outdoor activites and would love to share it!",
        "opt2": "I'm obsessed with social media.",
        "opt3": "Cooking is my passion!",
        "opt4": "What are hobbies? I work all the time...",
        "tags": {
            "opt1": ["skills"],
            "opt2": ["online"],
            "opt3": ["cook"],
            "opt4": ["donate"],
        }
    },
    {
        "id": 6,
        "question": "Do you believe in importance of information warfare?",
        "opt1": "Yes. As an active social media user I feel the responsibility of my own impact.",
        "opt2": "I'm not sure...in social media I feel more to be an observer rather than influencer.",
        "tags": {
            "opt1": ["online"],
            "opt2": ["other"],
        }
    },
    {
        "id": 7,
        "question": "How do you feel about physical work?",
        "opt1": "I'm ready to contribute however I can.",
        "opt2": "I believe I'd be more useful doing more high-qualified work.",
        "opt3": "As for now I see my main contributuion as making a donation.",
        "tags": {
            "opt1": ["cook"],
            "opt2": ["online"],
            "opt3": ["donate"],
        }
    },
    {
        "id": 8,
        "question": "Do you prefer spending time outside or at home?",
        "opt1": "I love walking.",
        "opt2": "Home is my safe space, especially the fridge...",
        "opt3": "I just spend all of the time in the office.",
        "tags": {
            "opt1": ["dogs"],
            "opt2": ["cook"],
            "opt3": ["donate"],
        }
    },
    {
        "id": 9,
        "question": "In your free minute would you rather...",
        "opt1": "make a tiny workout.",
        "opt2": "take a quick look at a hilarious gif of a dancing pet.",
        "opt3": "check out a website with donation links.",
        "tags": {
            "opt1": ["skills"],
            "opt2": ["dogs"],
            "opt3": ["donate"],
        }
    },
    {
        "id": 10,
        "question": "I've always dreamed of...",
        "opt1": "learning a new skill.",
        "opt2": "adopting a cute dog.",
        "opt3": "finally finish this quiz.",
        "tags": {
            "opt1": ["skills"],
            "opt2": ["dogs"],
            "opt3": ["other"],
        }
    }
]


// Categories || tags

// 1. Pack supplies/ cook for soldiers || cook
// 2. Skills for soldiers/refugees || skills
// 3. Dog sitting || dogs
// 4. Online public diplomacy || online
// 5. Donation links || donate
// 6. Other: || other


function categorizeUser(answers) {
    let userTags = [];

    answers.forEach((answer, index) => {
        const question = questions[index];

        if (question.tags) {
            // answer key based on response
            const answerKey = Object.keys(question).find(key => question[key] === answer);

            if (answerKey && question.tags[answerKey]) {
                userTags = userTags.concat(question.tags[answerKey]);
            }
        }
    });

    //occurrences of each tag
    let tagCounts = {};
    userTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    //tag with the max count
    let maxTag = null;
    let maxCount = 0;

    for (const tag in tagCounts) {
        if (tagCounts[tag] > maxCount) {
            maxCount = tagCounts[tag];
            maxTag = tag;
        }
    }

    return maxTag ? [maxTag] : [];
}

// Example:

// const userAnswers = ["I'm a night owl.", "Yes, I adore them.", "I prefer to write a post on how to cook rather than to actually cook.", "I believe in charity power but now feel that I could contribute more with other deeds.", "I'm obsessed with social media.", "Yes. As an active social media user I feel the responsibility of my own impact.", "I believe I'd be more useful doing more high-qualified work.", "I just spend all of the time in the office.", "check out a website with donation links.", "learning a new skill."];

// the answer will be online

const userAnswers = ["Morning. The earlier the better!", "Yes, I adore them.", "Potatoes, carrots, stews...the more the better: I want to invite all of my friends!", "I feel that now the need to donate is more than ever.", "Cooking is my passion!", "Yes. As an active social media user I feel the responsibility of my own impact.", "I'm ready to contribute however I can.", "Home is my safe space, especially the fridge...", "make a tiny workout.", "adopting a cute dog."]

// the answer will be cook

const maxCategory = categorizeUser(userAnswers);
console.log("Your volunteering activity tag is:", maxCategory);


// For future use

// module.exports = {
//     questions
// }