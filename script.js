// ★イベントが準備中かどうか
// true：今年度開催、false：準備中
const isEventReady = false; 

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function loadEvent(year) {
    const content = document.getElementById(`events-${year}`);
    const allContents = document.querySelectorAll('.accordion-content');

    // すべてのコンテンツを隠す
    allContents.forEach(item => {
        if (item !== content) {
            item.style.display = 'none'; // 開いていない年は非表示
        }
    });

    // トグル表示
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block'; // クリックした年の表示/非表示を切り替え
}

window.onload = function() {
    const eventDetailsSection = document.getElementById('event-details');
    const statusMessage = document.getElementById('status-message');

    if (isEventReady) {
        eventDetailsSection.style.display = 'block';
        statusMessage.textContent = "＜＜開催情報＞＞";
    } else {
        eventDetailsSection.style.display = 'none';
    }

    // イベント情報を読み込む
    fetch('event-info.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('event-details').innerHTML = data;
        });
};

function loadEvent(year) {
    thisEvent = null;
    thisPage = null;

    // ★Const
    const events2024 = document.getElementById('events-2024');
    const events2023 = document.getElementById('events-2023');
    const events2022 = document.getElementById('events-2022');

    // ★ページ情報
    if (year === '2024') {
        thisEvent = events2024;
        thisPage = 'events-2024.html';
    }
    if (year === '2023') {
        thisEvent = events2023;
        thisPage = 'events-2023.html';
    }
    if (year === '2022') {
        thisEvent = events2022;
        thisPage = 'events-2022.html';
    }

    if (thisEvent.style.display === 'none') {
        thisEvent.style.display = 'block';
        fetch(thisPage).then(response => response.text())
        .then(data => {thisEvent.innerHTML = data;});
    } else {
        thisEvent.style.display = 'none';
    }
}
        
window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

function showSlides() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active'); // アクティブなスライドを表示
            slide.style.display = "block"; // スライドを表示
            setTimeout(() => {
                slide.style.opacity = 1; // フェードイン
            }, 10); // 一瞬遅らせてフェードイン効果を適用
        } else {
            slide.style.opacity = 0; // フェードアウト
            setTimeout(() => {
                slide.style.display = "none"; // フェードアウト後に非表示
            }, 10); // フェードアウトの時間と同じ時間で遅延
        }
    });
    slideIndex = (slideIndex + 1) % slides.length; // スライドのインデックスを更新
}

// 初期スライドを表示
showSlides();

// 8秒ごとにスライドを切り替え
setInterval(showSlides, 8000);
