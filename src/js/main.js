import '../css/style.css';
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

Alpine.plugin(intersect);
Alpine.plugin(collapse);
window.Alpine = Alpine;
Alpine.start();

const initCardReveal = () => {
    const section = document.querySelector('.reveal-section');
    const cards = gsap.utils.toArray('.reveal-card');

    if (!section || cards.length === 0) return;

    const colors = ['#491E42', '#5F2A57', '#75346A', '#8B3E7D', '#A1488F'];
    const total = cards.length;

    // ДИНАМІЧНИЙ КРОК:
    // Якщо ширина екрана менша за 640px, використовуємо 3, інакше — 5
    const step = window.innerWidth < 640 ? 2.5 : 5;

    cards.forEach((card, i) => {
        gsap.set(card, { zIndex: total - i });

        const inner = card.querySelector('.card-inner');
        if (inner) {
            gsap.set(inner, { backgroundColor: colors[i] || colors[colors.length - 1] });
        }

        // Використовуємо динамічну змінну step
        const yPercentValue = (total - 1 - i) * step;

        gsap.set(card, {
            scale: 1 - (i * 0.085),
            yPercent: yPercentValue,
            transformOrigin: "top center"
        });
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => `+=${total * 100}%`,
            scrub: true,
            pin: true,
            anticipatePin: 1
        }
    });

    cards.forEach((card, index) => {
        if (index === total - 1) return;

        tl.to(card, {
            yPercent: 120,
            opacity: 1,
            scale: 0.9,
            ease: "power1.inOut"
        }, index === 0 ? 0 : ">");

        cards.forEach((remainingCard, rIndex) => {
            if (rIndex > index) {
                const targetSlot = rIndex - 1 - index;
                // Оновлюємо позицію з тим самим динамічним кроком
                const newYPercent = (total - 1 - targetSlot) * step;

                tl.to(remainingCard, {
                    scale: 1 - (targetSlot * 0.085),
                    yPercent: newYPercent,
                    ease: "power1.inOut"
                }, "<");
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', initCardReveal);