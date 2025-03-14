import Image from "next/image"

interface FeaturedProfessorProps {
  name: string
  role: string
  image: string
  description: string
  achievements: string[]
  quote: string
}

export default function FeaturedProfessor({
  name,
  role,
  image,
  description,
  achievements,
  quote,
}: FeaturedProfessorProps) {
  // Get initial from name (first character, uppercase)
  const initial = name.charAt(0).toUpperCase()

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden p-8 mb-12 hover-card">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {initial}
            </div>
            {/* Removed Image component, keeping structure for consistency */}
          </div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h3 className="text-3xl font-bold mb-2">{name}</h3>
          <p className="text-xl text-gray-600 mb-4">{role}</p>
          <p className="text-gray-800 mb-6">{description}</p>
          <h4 className="text-xl font-semibold mb-2">Puntos destacados:</h4>
          <ul className="list-disc list-inside mb-6">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-800">
                {achievement}
              </li>
            ))}
          </ul>
          {quote && ( // Only render blockquote if quote exists
            <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">"{quote}"</blockquote>
          )}
        </div>
      </div>
    </div>
  )
}