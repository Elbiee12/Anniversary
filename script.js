<script>
const slides = document.querySelectorAll('.slide');
let current = 0;
const audio = document.getElementById("bgMusic");

window.addEventListener("load", () => {
  audio.play().catch(() => {
    console.log("Auto play blocked");
  });
  startTyping(slides[current]);
});

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
  audio.play();
  startTyping(slides[current]);
}

function startTyping(slide) {
  const typingElement = slide.querySelector(".typing-text");
  if (!typingElement) return;

  const text = typingElement.getAttribute("data-text");
  typingElement.textContent = "";
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 30); // kecepatan mengetik (ms)
}
</script>

function createFlowers() {
  const flowerCount = 25;
  const flowerBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAdUlEQVQ4T2NkoBAwUqifwzCh2A8Y8N+1YxB+Io1gFMS+T8xTQo5uEGIwBqUwM7P+v+DO3qABqIkLD+NZwA0EUGksgOhA3GqkE1H8IwPq1YsAvjCghIDGHQDVMYihGKFBgAxvs2NGWUR8rQZRz4BzQYCN8UGAJRUDLUNTHZPAAAAAElFTkSuQmCC';

  for(let i = 0; i < flowerCount; i++) {
    const flower = document.createElement('img');
    flower.src = flowerBase64;
    flower.classList.add('flower');

    // Posisi horizontal acak dalam viewport width
    flower.style.left = Math.random() * 100 + 'vw';

    // Durasi animasi acak antara 8s sampai 15s
    flower.style.animationDuration = (8 + Math.random() * 7) + 's';

    // Delay animasi acak supaya bunga tidak jatuh serentak
    flower.style.animationDelay = (Math.random() * 15) + 's';

    // Ukuran bunga acak antara 20px sampai 50px
    const size = 20 + Math.random() * 30;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';

    document.body.appendChild(flower);
  }
}

// Panggil fungsi ini setelah halaman siap
window.addEventListener('load', () => {
  createFlowers();
});
