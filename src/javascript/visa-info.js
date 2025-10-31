// Visa Information Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Visa type data
    const visaTypes = {
        tourist: {
            title: 'Tourist Visa',
            description: 'For leisure travel, tourism, and visiting friends or family abroad.',
            processingTime: '5-7 working days',
            price: 'R750',
            documents: [
                'Valid passport (with at least 6 months validity)',
                'Recent passport-sized photographs',
                'Completed visa application form',
                'Proof of travel arrangements (flight itinerary)',
                'Proof of accommodation'
            ],
            serviceDetails: {
                processingTime: '5-7 working days',
                serviceFee: 'R750',
                embassyFee: 'Varies by destination',
                expressProcessing: 'Available at extra cost'
            }
        },
        business: {
            title: 'Business Visa',
            description: 'For business meetings, conferences, and short-term work assignments.',
            processingTime: '7-10 working days',
            price: 'R1,200',
            documents: [
                'Valid passport (with at least 6 months validity)',
                'Recent passport-sized photographs',
                'Completed visa application form',
                'Business invitation letter',
                'Company registration documents',
                'Proof of business activities'
            ],
            serviceDetails: {
                processingTime: '7-10 working days',
                serviceFee: 'R1,200',
                embassyFee: 'Varies by destination',
                expressProcessing: 'Available at extra cost'
            }
        },
        study: {
            title: 'Study Visa',
            description: 'For students planning to study at educational institutions abroad.',
            processingTime: '10-15 working days',
            price: 'R1,500',
            documents: [
                'Valid passport (with at least 6 months validity)',
                'Recent passport-sized photographs',
                'Completed visa application form',
                'Letter of acceptance from educational institution',
                'Proof of financial means',
                'Academic transcripts and certificates'
            ],
            serviceDetails: {
                processingTime: '10-15 working days',
                serviceFee: 'R1,500',
                embassyFee: 'Varies by destination',
                expressProcessing: 'Available at extra cost'
            }
        },
        work: {
            title: 'Work Visa',
            description: 'For those with job offers or employment contracts in foreign countries.',
            processingTime: '15-20 working days',
            price: 'R2,000',
            documents: [
                'Valid passport (with at least 6 months validity)',
                'Recent passport-sized photographs',
                'Completed visa application form',
                'Employment contract',
                'Company registration of employer',
                'Professional qualifications and certificates'
            ],
            serviceDetails: {
                processingTime: '15-20 working days',
                serviceFee: 'R2,000',
                embassyFee: 'Varies by destination',
                expressProcessing: 'Available at extra cost'
            }
        }
    };

    // Initialize with tourist visa selected
    let selectedVisaType = 'tourist';
    updateSelectedVisaDetails(selectedVisaType);

    // Visa type selection
    const visaTypeCards = document.querySelectorAll('.visa-type-card');
    visaTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            const visaType = this.getAttribute('data-type');
            selectVisaType(visaType);
        });
    });

    function selectVisaType(visaType) {
        // Update card selection
        visaTypeCards.forEach(card => {
            card.classList.remove('selected');
        });
        
        const selectedCard = document.querySelector(`[data-type="${visaType}"]`);
        selectedCard.classList.add('selected');
        
        // Update selected visa type
        selectedVisaType = visaType;
        
        // Update details section
        updateSelectedVisaDetails(visaType);
        
        // Update apply button
        updateApplyButton(visaType);
    }

    function updateSelectedVisaDetails(visaType) {
        const visaData = visaTypes[visaType];
        
        // Update description
        document.querySelector('.visa-description').textContent = visaData.description;
        
        // Update documents list
        const documentsList = document.querySelector('.documents-list');
        documentsList.innerHTML = '';
        
        visaData.documents.forEach(doc => {
            const li = document.createElement('li');
            li.textContent = doc;
            documentsList.appendChild(li);
        });
        
        // Update service details
        document.querySelector('.info-row:nth-child(1) .info-value').textContent = visaData.serviceDetails.processingTime;
        document.querySelector('.info-row:nth-child(2) .info-value').textContent = visaData.serviceDetails.serviceFee;
        document.querySelector('.info-row:nth-child(3) .info-value').textContent = visaData.serviceDetails.embassyFee;
        document.querySelector('.info-row:nth-child(4) .info-value').textContent = visaData.serviceDetails.expressProcessing;
    }

    function updateApplyButton(visaType) {
        const visaData = visaTypes[visaType];
        const applyButton = document.querySelector('.btn-apply');
        applyButton.textContent = `Apply for ${visaData.title}`;
        
        // Store selected visa type for the application form
        applyButton.setAttribute('data-visa-type', visaType);
    }

    // Apply button click handler
    const applyButton = document.querySelector('.btn-apply');
    applyButton.addEventListener('click', function() {
        const visaType = this.getAttribute('data-visa-type');
        // Store selected visa type in session storage for the application form
        sessionStorage.setItem('selectedVisaType', visaType);
        // Redirect to application form
        window.location.href = 'visa-application.html';
    });

    // Start application button
    const startApplicationBtn = document.querySelector('.btn-start-application');
    startApplicationBtn.addEventListener('click', function() {
        // Store selected visa type in session storage
        sessionStorage.setItem('selectedVisaType', selectedVisaType);
        // Redirect to application form
        window.location.href = 'visa-application.html';
    });

    // Live chat functionality
    const liveChatBtn = document.getElementById('liveChatBtn');
    if (liveChatBtn) {
        liveChatBtn.addEventListener('click', function() {
            openLiveChat();
        });
    }

    function openLiveChat() {
        // Simulate live chat opening
        const chatWindow = document.createElement('div');
        chatWindow.className = 'live-chat-window';
        chatWindow.innerHTML = `
            <div class="chat-header">
                <h4>Visa Specialist Chat</h4>
                <button class="close-chat">&times;</button>
            </div>
            <div class="chat-messages">
                <div class="message bot-message">
                    <p>Hello! I'm your visa specialist. How can I assist you with your visa application today?</p>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" placeholder="Type your message...">
                <button class="send-message">Send</button>
            </div>
        `;
        
        document.body.appendChild(chatWindow);
        
        // Add styles for chat window
        const style = document.createElement('style');
        style.textContent = `
            .live-chat-window {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 350px;
                height: 400px;
                background: white;
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                display: flex;
                flex-direction: column;
                z-index: 1000;
            }
            .chat-header {
                background: #0F3460;
                color: white;
                padding: 12px 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 8px 8px 0 0;
            }
            .chat-header h4 {
                margin: 0;
                font-size: 14px;
                font-weight: 600;
            }
            .close-chat {
                background: none;
                border: none;
                color: white;
                font-size: 18px;
                cursor: pointer;
            }
            .chat-messages {
                flex: 1;
                padding: 16px;
                overflow-y: auto;
            }
            .message {
                margin-bottom: 12px;
                padding: 8px 12px;
                border-radius: 8px;
                max-width: 80%;
            }
            .bot-message {
                background: #F1F5F9;
                align-self: flex-start;
            }
            .chat-input {
                padding: 12px;
                border-top: 1px solid #E5E7EB;
                display: flex;
                gap: 8px;
            }
            .chat-input input {
                flex: 1;
                padding: 8px 12px;
                border: 1px solid #D1D5DB;
                border-radius: 6px;
            }
            .send-message {
                background: #0F3460;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
        
        // Close chat functionality
        const closeBtn = chatWindow.querySelector('.close-chat');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(chatWindow);
            document.head.removeChild(style);
        });
        
        // Send message functionality
        const sendBtn = chatWindow.querySelector('.send-message');
        const input = chatWindow.querySelector('input');
        
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function sendMessage() {
            const message = input.value.trim();
            if (message) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'message';
                userMessage.style.background = '#0F3460';
                userMessage.style.color = 'white';
                userMessage.style.marginLeft = 'auto';
                userMessage.innerHTML = `<p>${message}</p>`;
                chatWindow.querySelector('.chat-messages').appendChild(userMessage);
                
                // Clear input
                input.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'message bot-message';
                    botMessage.innerHTML = '<p>Thank you for your message. Our visa specialist will get back to you shortly with detailed information.</p>';
                    chatWindow.querySelector('.chat-messages').appendChild(botMessage);
                    chatWindow.querySelector('.chat-messages').scrollTop = chatWindow.querySelector('.chat-messages').scrollHeight;
                }, 1000);
                
                // Scroll to bottom
                chatWindow.querySelector('.chat-messages').scrollTop = chatWindow.querySelector('.chat-messages').scrollHeight;
            }
        }
    }

    // Smooth scrolling for FAQ items
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.style.cursor = 'pointer';
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Initialize FAQ answers as visible
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'block';
    });

    // Add animation to visa type cards on load
    setTimeout(() => {
        visaTypeCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});