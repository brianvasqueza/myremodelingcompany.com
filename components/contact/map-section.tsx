import { FadeInView } from '@/components/fade-in-view'

export function MapSection() {
  return (
    <section className="bg-linen">
      <FadeInView>
        <div className="w-full h-[400px] md:h-[500px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443086.6771558146!2d-95.68458266503908!3d29.817478312610827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1710876000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Premier Remodeling Houston Location"
          />
          {/* Gold overlay gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-linen to-transparent" />
        </div>
      </FadeInView>
    </section>
  )
}
