

const chatInput = document.querySelector(".chat-input textarea"); 
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;

// Create a chat <li> element with passed message and className
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" 
        ? `<p></p>` 
        : `<span class="material-symbols-outlined">smart_toy</span> <p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
};

// FAQ responses
const faqs = [
    { question: "name", answer: "My name is Xolani Vilakazi, a passionate web developer from South Africa." },
    { question: "experience", answer: "I have experience working with HTML, CSS, JavaScript, and several frameworks for web development." },
    { question: "education", answer: "I have a background in computer science, specializing in web development and software engineering." },
    { question: "projects", answer: "You can check my projects section to see some of my work, including websites, applications, and interactive portfolios." },
    { question: "skills", answer: "My core skills include JavaScript, HTML, CSS,and C# " },
    { question: "languages", answer: "I am proficient in English and have working knowledge of several programming languages including JavaScript,HTML,CSS,C++,C#,Assembly,Visual Basic, and Java." },
    { question: "services", answer: "I offer services in web development, including front-end design, back-end integration, and responsive design." },
    { question: "contact", answer: "You can reach me via email at xolanisyav04@gmail.com or through my social media links on the website." },
    { question: "location", answer: "I'm currently based in South Africa." },
    { question: "portfolio", answer: "My portfolio showcases my work in web development, including interactive designs and real-world projects." },
    { question: "hobbies", answer: "Outside of coding, I enjoy playing football, exploring new technologies, and listening to music." },
    { question: "hobby", answer: "Outside of coding, I enjoy playing football, exploring new technologies, and listening to music." },
    { question: "goals", answer: "My career goal is to become a senior developer and contribute to impactful projects that make a difference." },
    { question: "design philosophy", answer: "I believe in clean, user-friendly, and functional designs that focus on the end-user experience." },
    { question: "tools", answer: "I use Visual Studio Code, Git, GitHub, and various browser developer tools for my work." },
    { question: "favorite project", answer: "My favorite project was building a Project Management System for Hulumendhe group, you can navigate to about then projects you'll see the projet it's Fiberflow web and Mobile" },
    { question: "inspiration", answer: "I'm inspired by technology's potential to improve lives and solve real-world problems." },
    { question: "current project", answer: "I'm currently working on a project that involves integrating AI features into a personal assistant chatbot." },
    { question: "challenges", answer: "One of my biggest challenges is keeping up with the fast pace of tech advancements, but I enjoy the learning process." },
    { question: "strengths", answer: "My strengths include a strong work ethic, attention to detail, and a passion for continuous learning." },
    { question: "strength", answer: "My strengths include a strong work ethic, attention to detail, and a passion for continuous learning." },
    { question: "future plans", answer: "I plan to specialize further in full-stack development and explore new areas like machine learning and AI." },
    { question: "hey", answer: "Hi there how can I help you today?" },
    { question: "hello", answer: "Hi there how can I help you today?" },
    { question: "xolani", answer: "Hello that's me :)" },
    { question: "vilakazi", answer: "Hello that's my surname :)" },
    { question: "hi", answer: "Hi there how can I help you today?" }
];

// Generate response based on user input
const generateResponse = () => {
    // Find an FAQ answer that matches a keyword in the user's message
    const foundFaq = faqs.find(faq => userMessage.toLowerCase().includes(faq.question.toLowerCase()));

    // If an answer is found, return the answer; otherwise, default response
    const botResponse = foundFaq ? foundFaq.answer : "I'm sorry, I don't have information on that. Could you rephrase or ask something else?";

    // Append the bot's response to the chatbox
    chatbox.appendChild(createChatLi(botResponse, "incoming"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

// Handle the chat by displaying user message and calling generateResponse
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";

    // Append the user message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Generate and display response
    generateResponse();
};

// Toggle chatbot visibility
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


// Handle chat on send button click
sendChatBtn.addEventListener("click", handleChat);

// Typing effect
const phrases = ["Web Developer", "Problem Solver", "Tech Enthusiast", "Creative Coder"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;
const typedText = document.querySelector(".typed-text");

function typeLoop() {
    typedText.innerHTML = currentPhrase.join("");

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j > 0) {
            currentPhrase.pop();
            j--;
        }

        if (j === phrases[i].length) {
            isDeleting = true;
        }

        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }
    }

    setTimeout(typeLoop, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", () => {
    typeLoop();
    initCanvas();
});

// Canvas particle effect
function initCanvas() {
    const canvas = document.getElementById("hero-bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 217, 255, 0.5)";
            ctx.fill();
        });
    }

    function update() {
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
    }

    function animate() {
        draw();
        update();
        requestAnimationFrame(animate);
    }

    animate();
}

