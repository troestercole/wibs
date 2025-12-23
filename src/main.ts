import './style.css';

const finalWords = ['WHERE', 'IS', 'BFRED', 'SLOTS?'];

const videoUrls: Record<number, string> = {
  1: 'https://www.youtube.com/shorts/gWbnPiXlvao',
  2: 'https://www.youtube.com/shorts/SHX7P2IlIaI',
  3: 'https://www.youtube.com/shorts/4owavWyRbcE',
  4: 'https://www.youtube.com/shorts/2aF0DyCob9w',
  5: 'https://www.youtube.com/shorts/jxtG61jIndM',
  6: 'https://www.youtube.com/shorts/rgH6PMvniRY',
  7: 'https://www.youtube.com/shorts/rah-6KtjdVw',
  8: 'https://www.youtube.com/shorts/Q0z6_Hg-4y8',
  9: 'https://www.youtube.com/shorts/g4Xtz6likYw',
  10: 'https://www.youtube.com/shorts/lXtFb2Q5oME',
  11: 'https://www.youtube.com/shorts/mXQ3ousJ_8U',
  12: 'https://www.youtube.com/shorts/50EpbeOBSt8',
  13: 'https://www.youtube.com/shorts/1Lm4wPLU4fE',
  14: 'https://www.youtube.com/shorts/_yGnYoiwRl8',
  15: 'https://www.youtube.com/shorts/_6lUV2T6Ths',
  16: 'https://www.youtube.com/shorts/S7MHcmchLIw',
  17: 'https://www.youtube.com/shorts/OzLzeeSRljs',
  18: 'https://www.youtube.com/shorts/kbUCmpDdV64',
  19: 'https://www.youtube.com/shorts/_iStfaYbJRQ',
  20: 'https://www.youtube.com/shorts/niKG1SGPN2c',
  21: 'https://www.youtube.com/shorts/CnV8jsbWnn8',
  22: 'https://www.youtube.com/shorts/6V6TgOC5jVA',
  23: 'https://www.youtube.com/shorts/cL3__BIM2wE',
  24: 'https://www.youtube.com/shorts/XiLh2GTpjlw',
  25: 'https://www.youtube.com/shorts/yvoFtPOzGKY',
  26: 'https://www.youtube.com/shorts/3q7NTrnGekw',
};

// Create SVG filter for vertical motion blur
const svgFilter = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgFilter.setAttribute('width', '0');
svgFilter.setAttribute('height', '0');
svgFilter.style.position = 'absolute';
svgFilter.innerHTML = `
  <defs>
    <filter id="motion-blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0,12" />
    </filter>
  </defs>
`;
document.body.appendChild(svgFilter);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="w-screen min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden gap-16 md:gap-24 hero">
    <h1 class=" font-bold uppercase text-center tracking-tight flex flex-col md:flex-row gap-4 ">
      ${finalWords
        .map(
          (word, i) => `
        <span class="slot-container" data-index="${i}">
          <span class="slot-reel">
            ${Array(20)
              .fill(word)
              .map((w) => `<span class="slot-item">${w}</span>`)
              .join('')}
          </span>
        </span>
      `
        )
        .join('')}
    </h1>
    <div class="max-w-4xl w-full flex flex-col gap-4 text-gray-300">
      <h2 class="text-2xl text-gray-500">WHO IS BFRED SLOTS?</h2>
      <p class="pinstripe ">
      Bfred Slots is a prominent and at times controversial YouTube creator known for posting short-form videos showcasing high‑value slot machine wins from casinos. Beginning in early 2025, his uploads quickly gained traction within the gambling and slots community, earning him a large and highly engaged audience.
      </p>
      <p class="pinstripe ">
      As his popularity grew, so did scrutiny. Viewers debated the legitimacy of his wins, the frequency of his bonuses, and the transparency of what was shown on camera. Some creators openly criticized his content, producing response videos that questioned the nature of his recordings and highlighted his losses alongside his wins.
      </p>
      <p class="pinstripe ">
      Despite the controversy, Bfred Slots continued to grow—until March 12, 2025. On that date, he uploaded his final video.
      </p>
      <p class="pinstripe text-white font-bold">
      There was no announcement. No explanation. No return.
      </p>
      <p class="pinstripe ">
      In the weeks that followed, comments and messages flooded his channel, with viewers asking the same question and receiving no response. To this day, there has been no confirmation of why he stopped posting or where he went.
      </p>
      <p class="pinstripe ">
      Which leaves one unanswered question:
      </p>
      <p class="text-lg pinstripe font-bold text-red-500">
      WHERE IS BFRED SLOTS?
      </p>
    </div>
  </div>
  <div class="videos-carousel">
    <div class="carousel-row carousel-row-1">
      <div class="carousel-track">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
          .map(
            (n) =>
              `<a href="${videoUrls[n]}" target="_blank" class="carousel-item"><img src="/vid_${n}.jpeg" alt="Video ${n}" loading="lazy" /></a>`
          )
          .join('')}
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
          .map(
            (n) =>
              `<a href="${videoUrls[n]}" target="_blank" class="carousel-item"><img src="/vid_${n}.jpeg" alt="Video ${n}" loading="lazy" /></a>`
          )
          .join('')}
      </div>
    </div>
    <div class="carousel-row carousel-row-2">
      <div class="carousel-track">
        ${[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
          .map(
            (n) =>
              `<a href="${videoUrls[n]}" target="_blank" class="carousel-item"><img src="/vid_${n}.jpeg" alt="Video ${n}" loading="lazy" /></a>`
          )
          .join('')}
        ${[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
          .map(
            (n) =>
              `<a href="${videoUrls[n]}" target="_blank" class="carousel-item"><img src="/vid_${n}.jpeg" alt="Video ${n}" loading="lazy" /></a>`
          )
          .join('')}
      </div>
    </div>
  </div>
  <div class="video-text px-4 py-12">
    <div class="max-w-4xl w-full flex flex-col gap-4 text-gray-300 mx-auto">
      <h2 class="flex flex-row items-baseline justify-center gap-2">
        <span class="text-5xl md:text-[10em] font-bold leading-none">26</span>
        <span class="text-xl md:text-2xl font-bold">videos</span>
      </h2>
      <p class="pinstripe ">
      Twenty-six videos were uploaded between January and March of 2025, an average of roughly one every three days. The schedule was consistent. Predictable. Nothing about the volume or timing suggested burnout or a planned break.
      </p>
      <p class="pinstripe ">
      What stands out is not how often Bfred Slots posted, but how abruptly he stopped.
      </p>
      <p class="pinstripe ">
      There was no gradual slowdown. No missed uploads. <span class="text-white font-bold">One day the videos simply ended</span>.
      </p>
      <p class="pinstripe ">
      Some have suggested the wins dried up. Others believe he lost interest or walked away after peaking. But those explanations fail to account for the sudden silence and the absence of any explanation.
      </p>
      <p class="pinstripe ">
      Which raises a more uncomfortable possibility. That <span class="text-white font-bold">Bfred Slots discovered something casinos never intended to be noticed</span>, and that whatever he found was not meant to stay public.
      </p>
    </div>
  </div>
  <div class="contact-section px-4 py-16">
    <div class="max-w-4xl w-full mx-auto flex flex-col gap-6">
      <h2 class="text-2xl text-gray-500">DO YOU KNOW SOMETHING?</h2>
      <p class="pinstripe text-gray-300">
        If you have any information about Bfred Slots or his whereabouts, submit an anonymous tip below.
      </p>
      <form action="https://formspree.io/f/mnjawrwe" method="POST" class="contact-form flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Your email (optional)"
          class="form-input"
        >
        <textarea
          name="message"
          placeholder="What do you know?"
          required
          rows="4"
          class="form-input"
        ></textarea>
        <button
          type="submit"
          class="submit-btn"
        >
          SUBMIT TIP
        </button>
      </form>
    </div>
  </div>
  <footer class="secret-footer">
    <a href="https://coletroester.com" target="_blank" rel="noopener">CT</a>
  </footer>
`;

function animateSlot(container: HTMLElement, delay: number) {
  const reel = container.querySelector('.slot-reel') as HTMLElement;
  if (!reel) return;

  const items = reel.querySelectorAll('.slot-item');
  const itemHeight = (items[0] as HTMLElement).offsetHeight;
  const totalSpins = 18;
  const totalDistance = itemHeight * totalSpins;

  // Start position (offset so we can spin down)
  reel.style.transform = `translateY(-${totalDistance}px)`;
  reel.classList.add('spinning');

  // Small delay then start spinning
  setTimeout(() => {
    const spinDuration = 2500 + delay;

    // Animate with easing - fast start, slow end (like a real slot machine)
    reel.style.transition = `transform ${spinDuration}ms cubic-bezier(0.1, 0.7, 0.3, 1)`;
    reel.style.transform = 'translateY(0)';

    // Remove blur as it slows down
    setTimeout(() => {
      reel.classList.remove('spinning');
    }, spinDuration * 0.7);

    // Final landing effect
    setTimeout(() => {
      container.classList.add('landed');
    }, spinDuration);
  }, 50);
}

// Preload carousel images
function preloadCarouselImages() {
  for (let i = 1; i <= 26; i++) {
    const img = new Image();
    img.src = `/vid_${i}.jpeg`;
  }
}

// Start the slot machine animation
const slots = document.querySelectorAll('.slot-container');
document.addEventListener('DOMContentLoaded', () => {
  // Preload images after page load
  preloadCarouselImages();

  setTimeout(() => {
    document.fonts.ready.then(() => {
      slots.forEach((slot, index) => {
        const delay = index * 400;
        setTimeout(() => {
          animateSlot(slot as HTMLElement, 300);
        }, delay);
      });
    });
  }, 2000);
});
