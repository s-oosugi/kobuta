// ================================================
// こぶたしゃしんかん - JavaScript
// ================================================

// DOM要素の取得
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');
const faqItems = document.querySelectorAll('.faq-item');

// ================================================
// ヘッダースクロール効果
// ================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ================================================
// モバイルメニュートグル
// ================================================
mobileMenuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// メニューリンククリック時にメニューを閉じる
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// ================================================
// FAQアコーディオン
// ================================================
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // すでに開いているアイテムを閉じる
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // クリックされたアイテムをトグル
    item.classList.toggle('active');
  });
});

// ================================================
// スクロールアニメーション
// ================================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// スクロールで表示する要素を監視
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
scrollRevealElements.forEach(element => {
  observer.observe(element);
});

// ================================================
// スムーズスクロール
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ================================================
// ページ読み込み時のアニメーション
// ================================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});
