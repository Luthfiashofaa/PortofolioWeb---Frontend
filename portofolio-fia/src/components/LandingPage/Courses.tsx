import DraftsIcon from '@mui/icons-material/Drafts'


type SertificateProps = {
  title?: string
  description?: string
  link?: string
}

const Courses = ({ title, description, link }: SertificateProps) => {
  return (
    <a
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (!link) e.preventDefault()
      }}
      className={`group relative flex md:h-40 md:w-40 h-32 w-32 shrink-0 overflow-hidden rounded-2xl ${
        link ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      {/* Background card */}
      <div className="flex flex-col h-full w-full md:gap-3 gap-1 rounded-2xl bg-linear-to-br from-[#FFF8E1] via-[#FFE9A8] to-[#FFD35C] p-5 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
        
        {/* Icon area */}
        <div className="flex md:h-10 md:w-10 h-7 w-7 shrink-0 items-center justify-center md:rounded-xl rounded-md bg-white shadow-md">
          <DraftsIcon className="text-primary" sx={{ fontSize: 24 }} />
        </div>

        {/* Text */}
        <div className="flex min-w-0 flex-col justify-center">
          <h1 className="md:text-xs text-[0.625rem] font-bold text-dark">
            {title ?? 'Coming Soon'}
          </h1>

          <p className="mt-2 text-[0.625rem] md:leading-5 line-clamp-2 leading-3 text-gray-700">
            {description ?? 'New course or certification coming soon.'}
          </p>
        </div>

      </div>
    </a>
  )
}

export default Courses