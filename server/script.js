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
