.wrap {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.track {
  display: flex;
  align-items: center;
  gap: 64px;
  width: max-content;
  animation: marquee 48s linear infinite;
}

.wrap:hover .track {
  animation-play-state: paused;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: -0.01em;
  color: var(--muted);
  white-space: nowrap;
  opacity: 0.72;
  transition: opacity 0.3s var(--ease), color 0.3s var(--ease);
}

.logo:hover {
  opacity: 1;
  color: var(--ink);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
  }
}
