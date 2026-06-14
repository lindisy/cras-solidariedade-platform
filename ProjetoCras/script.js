// ========================================
// CRAS+ PLATFORM - Main JavaScript
// Social Assistance Web Platform
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Change icon based on menu state
            const icon = mobileMenuBtn.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // --- Active link highlighting on scroll ---
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // --- Campaigns Data ---
    const campaigns = [
        {
            title: "Arrecadação de Alimentos",
            description: "Ajude famílias em situação de vulnerabilidade com doação de alimentos não perecíveis. Pontos de coleta em todos os CRAS.",
            date: "Até 30/04/2026",
            icon: "fa-apple-alt"
        },
        {
            title: "Campanha do Agasalho",
            description: "Doe cobertores, casacos e roupas de frio. Sua doação aquece o coração de quem mais precisa.",
            date: "Até 15/06/2026",
            icon: "fa-tshirt"
        },
        {
            title: "Doação de Brinquedos",
            description: "Participe da campanha de arrecadação de brinquedos para o Dia das Crianças. Faça uma criança sorrir!",
            date: "Até 10/10/2026",
            icon: "fa-gift"
        }
    ];
    
    // --- Programs Data ---
    const programs = [
        {
            title: "Programa Bolsa Família",
            description: "Transferência direta de renda para famílias em situação de pobreza e extrema pobreza.",
            icon: "fa-hand-holding-usd"
        },
        {
            title: "BPC - Benefício de Prestação Continuada",
            description: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda.",
            icon: "fa-file-invoice"
        },
        {
            title: "PAIF - Serviço de Proteção e Atendimento Integral à Família",
            description: "Apoio e acompanhamento para fortalecimento de vínculos familiares e comunitários.",
            icon: "fa-users"
        },
        {
            title: "Serviço de Convivência e Fortalecimento de Vínculos",
            description: "Atividades para crianças, adolescentes e idosos que promovem integração social.",
            icon: "fa-hand-sparkles"
        }
    ];
    
    // --- Events Data ---
    const events = [
        {
            title: "Oficina de Inclusão Digital",
            description: "Aprenda noções básicas de computador, internet e uso de aplicativos do dia a dia.",
            date: "15/04/2026 - 14h",
            icon: "fa-laptop-code"
        },
        {
            title: "Palestra: Direitos da Pessoa Idosa",
            description: "Informações sobre benefícios, saúde e proteção legal para a terceira idade.",
            date: "22/04/2026 - 10h",
            icon: "fa-calendar-alt"
        },
        {
            title: "Feira de Empreendedorismo",
            description: "Oportunidade para artesãos e pequenos empreendedores mostrarem seus produtos.",
            date: "05/05/2026 - 9h às 16h",
            icon: "fa-store"
        }
    ];
    
    // --- Render Campaigns ---
    const campaignsContainer = document.getElementById('campaignsContainer');
    if (campaignsContainer) {
        campaigns.forEach(campaign => {
            const card = document.createElement('div');
            card.className = 'campaign-card';
            card.innerHTML = `
                <div class="campaign-icon"><i class="fas ${campaign.icon}"></i></div>
                <h3>${campaign.title}</h3>
                <p>${campaign.description}</p>
                <div class="campaign-date"><i class="fas fa-calendar-alt"></i> ${campaign.date}</div>
                <a href="#contato" class="campaign-btn">Quero Participar →</a>
            `;
            campaignsContainer.appendChild(card);
        });
    }
    
    // --- Render Programs ---
    const programsContainer = document.getElementById('programsContainer');
    if (programsContainer) {
        programs.forEach(program => {
            const card = document.createElement('div');
            card.className = 'program-card';
            card.innerHTML = `
                <div class="program-icon"><i class="fas ${program.icon}"></i></div>
                <h3>${program.title}</h3>
                <p>${program.description}</p>
                <a href="#contato" class="campaign-btn">Saiba Mais →</a>
            `;
            programsContainer.appendChild(card);
        });
    }
    
    // --- Render Events ---
    const eventsContainer = document.getElementById('eventsContainer');
    if (eventsContainer) {
        events.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="event-icon"><i class="fas ${event.icon}"></i></div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="event-date"><i class="fas fa-clock"></i> ${event.date}</div>
            `;
            eventsContainer.appendChild(card);
        });
    }
    
    // --- Toast Notification ---
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.style.background = type === 'success' ? '#2d6a4f' : '#dc2626';
        toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }
    
    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                showToast('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Simulate form submission
            showToast(`Obrigado ${name}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.`);
            contactForm.reset();
        });
    }
    
    // --- Newsletter Form Handler ---
    const newsletterForm = document.querySelector('#newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email || !email.includes('@')) {
                showToast('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            showToast('Inscrição realizada! Você receberá nossas novidades.');
            emailInput.value = '';
        });
    }
    
    // --- Add smooth scroll to all anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // --- Set current year in footer if needed ---
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear && !footerYear.innerHTML.includes('2026')) {
        const year = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
    }
    
    console.log('CRAS+ Platform loaded successfully!');
});