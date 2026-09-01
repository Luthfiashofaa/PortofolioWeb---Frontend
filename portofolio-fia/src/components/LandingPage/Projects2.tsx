import ComingSoon from '../../assets/comingsoon.svg'

type Projects2Props = {
  image?: string
  link?: string
}

const Projects2 = ({ image, link }: Projects2Props) => {
  return (
    <a
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      className={`group relative flex h-40 w-1/2 overflow-hidden rounded-2xl ${
        link ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={(e) => {
        if (!link) e.preventDefault()
      }}
    >
      <img
        src={image ?? ComingSoon}
        alt={image ? 'project' : 'coming soon'}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      {link && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-semibold text-white">
              View Project
            </p>

            <span className="mt-1 text-sm text-gray-300">
              Click to visit
            </span>
          </div>
        </div>
      )}
    </a>
  )
}

export default Projects2