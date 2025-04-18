// src/components/Scroll-fade-in.js
export default function initScrollFadeIn() {
  const sections = document.querySelectorAll('.fade-in-section')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  sections.forEach(section => {
    observer.observe(section)
  })
}
