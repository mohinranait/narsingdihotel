import React from 'react'

const GoogleMap = () => {
  return (
    <div className="h-110 bg-slate-200 rounded-lg flex items-center justify-center">
      <iframe
        title="Shikder Ambulance, Mogbazar, Dhaka"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11260.62132106335!2d90.40976524429216!3d23.78996494947933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cafeffc7145ade5%3A0x6f6919835e6914af!2sShikder%20Ambulance%20Services!5e0!3m2!1sen!2sbd!4v1761139933386!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"

        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  )
}

export default GoogleMap