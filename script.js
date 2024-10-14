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

// フラグを持たせる
const isEventReady = true; // イベントが準備中かどうか


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
            const events2023 = document.getElementById('events-2023');
            const events2022 = document.getElementById('events-2022');

            if (year === '2023') {
                events2023.style.display = 'block';
                events2022.style.display = 'none';
                fetch('events-2023.html')
                    .then(response => response.text())
                    .then(data => {
                        events2023.innerHTML = data;
                    });
            } else if (year === '2022') {
                events2022.style.display = 'block';
                events2023.style.display = 'none';
                fetch('events-2022.html')
                    .then(response => response.text())
                    .then(data => {
                        events2022.innerHTML = data;
                    });
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

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active'); // すべてのスライドを非表示
        if (index === slideIndex) {
            slide.classList.add('active'); // アクティブなスライドを表示
        }
    });
    slideIndex = (slideIndex + 1) % slides.length; // スライドのインデックスを更新
}

// 初期スライドを表示
showSlides();

// 2秒ごとにスライドを切り替え
setInterval(showSlides, 2000);

