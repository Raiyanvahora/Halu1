// Full-bleed cinematic video hero strip — autoplays muted on loop.
// All native controls/badges (incl. the Picture-in-Picture button) are
// suppressed and the element is non-interactive.
export default function VideoBanner() {
  return (
    <section className="py-3 sm:py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative h-[440px] w-full overflow-hidden rounded-[1.5rem] shadow-card sm:h-auto sm:aspect-[16/9] sm:rounded-[1.75rem] lg:aspect-[2/1]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/halu-poster.jpg"
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/halu.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
