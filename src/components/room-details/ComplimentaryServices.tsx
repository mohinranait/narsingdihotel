'use client'

interface ComplimentaryServicesProps {
  services: string[]
}

export function ComplimentaryServices({ services }: ComplimentaryServicesProps) {
  return (
    <section className="py-12 bg-gray-50 rounded-lg p-6 mb-12">
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className="text-3xl flex-shrink-0">🎁</div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-[#2d3e50] mb-4 uppercase">Complimentary</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#A70F2E] mt-1">✓</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
