import React from 'react'

const ManagementStrategies = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-blue-600 mr-3"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Management Target
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            The management targets at B B Engineers are strategically aligned with
            the organization’s vision to provide exceptional engineering solutions
            for the mobility, infrastructure, and industrial sectors.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Senior leadership sets clear objectives to cultivate technical strength,
            process excellence, and customer-focused innovation.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Achieving product excellence through zero-defect manufacturing, legal
            compliance, and transparent business processes.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Driving continuous improvement across all departments by empowering
            teams in problem-solving and resource optimization.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-blue-600 mr-3"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Strategies
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li>• Ensuring product excellence through quality and innovation.</li>
            <li>• Streamlining operations with effective organization and teamwork.</li>
            <li>• Committing to continuous improvement and customer satisfaction.</li>
            <li>• Maintaining strong client relationships with transparent communication.</li>
            <li>• Delivering reliable service to ensure long-term growth.</li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default ManagementStrategies