let currentQuestionIndex = 0;
const userAnswers = [];

async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/api/questions/");
        const questions = await response.json();

        const question = document.getElementById("question");
        const answerButtonsContainer = document.getElementById("withBtn");

        function updateQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            question.textContent = currentQuestion.question;

            answerButtonsContainer.innerHTML = "";

            for (const key in currentQuestion) {
                if (key.startsWith("opt")) {
                    const button = document.createElement("button");
                    button.classList.add("AnswerBtn");
                    button.textContent = currentQuestion[key];
                    button.addEventListener("click", () => handleAnswer(currentQuestion[key]));
                    answerButtonsContainer.appendChild(button);
                }
            }
        }

        function handleAnswer(answer) {

            userAnswers[currentQuestionIndex] = answer;

            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                updateQuestion();
            } else {
                console.log("Quiz completed. User answers:", userAnswers);
                function categorizeUser(answers) {
                    let userTags = [];

                    answers.forEach((answer, index) => {
                        const question = questions[index];

                        if (question.tags) {

                            const answerKey = Object.keys(question).find(key => question[key] === answer);

                            if (answerKey && question.tags[answerKey]) {
                                userTags = userTags.concat(question.tags[answerKey]);
                            }
                        }
                    });

                    let tagCounts = {};
                    userTags.forEach(tag => {
                        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                    });

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
                const resultCategory = categorizeUser(userAnswers);
                async function handleResult() {
                    try {
                        const response = await fetch(`http://localhost:3000/api/links/${resultCategory}`);
                        const links = await response.json();

                        const resultContainer = document.getElementById("result-container");
                        const withBtn = document.getElementById("withBtn");
                        const question = document.getElementById("question");
                        withBtn.innerHTML = "";
                        question.innerHTML = "";

                        if (links.length > 0) {
                            const img = document.createElement("img")
                            img.setAttribute('src', './images/result.png')
                            img.id = 'cup'
                            resultContainer.append(img)

                            const categoryDiv = document.createElement("div");
                            categoryDiv.id = 'category'

                            const tagObjects = [
                                { "cook": "Chef or pack supplier" },
                                { "skills": "Master of various skills" },
                                { "dogs": "Dog's best friend" },
                                { "online": "Master of online public diplomacy" },
                                { "donate": "Sponsor of the better future" },
                                { "other": "too hard too define. Check out various options!" },
                            ]

                            const resultCategory2 = resultCategory[0];

                            const keyWithRes = Object.values(tagObjects.find(obj => Object.keys(obj)[0]?.includes(resultCategory2)))[0];

                            categoryDiv.textContent = `Your result is ${keyWithRes}. Possible volunteering options:`;
                            resultContainer.appendChild(categoryDiv);

                            links.forEach(link => {
                                const linkDiv = document.createElement("div");
                                linkDiv.classList.add('linkDiv')
                                // const description = document.createElement("p");
                                // description.textContent = `${link.description}`;
                                // linkDiv.appendChild(description);

                                const linkElement = document.createElement("a");
                                linkElement.href = link.link;
                                linkElement.textContent = `${link.description}`;
                                linkDiv.appendChild(linkElement);

                                const contact = document.createElement("p");
                                contact.textContent = `Contact: ${link.contact}`;
                                linkDiv.appendChild(contact);

                                resultContainer.appendChild(linkDiv);
                            });

                            const aToSearch = document.createElement('a')
                            aToSearch.href = 'search.html'
                            const BtnSearch = document.createElement('button')
                            BtnSearch.id = 'to-search'
                            BtnSearch.textContent = 'VIEW ALL OPPORTUNITIES'
                            aToSearch.append(BtnSearch)
                            resultContainer.appendChild(aToSearch)
                            
                        }

                    } catch (err) {
                        console.error("An error occurred:", err);
                    }
                }
                handleResult()
            }
        }
        updateQuestion();
    } catch (err) {
        console.error("An error occurred:", err);
    }
}

fetchData();









