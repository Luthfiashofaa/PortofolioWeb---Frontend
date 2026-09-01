import type { ReactNode } from 'react'

type SkillProps = {
  icon: ReactNode
  percentage: number
  name: string
}

import { useTheme } from '../../context/theme/useTheme'

const Skill = ({ icon, percentage, name }: SkillProps) => {
    const { theme } = useTheme()
    return (
        <div className="flex min-w-32 flex-col items-center px-5 py-6">
            {/* Progress Circle */}
            <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                    background:
                        theme === 'dark'
                        ? `conic-gradient(
                            #FDC435 ${percentage * 3.6}deg,
                            #4b4b4b ${percentage * 3.6}deg
                            )`
                        : `conic-gradient(
                            #FDC435 ${percentage * 3.6}deg,
                            #E5E7EB ${percentage * 3.6}deg
                            )`,
                }}
            >
                {/* Inner Circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background dark:bg-dark">
                    <span className="flex items-center justify-center text-4xl dark:text-background text-black">
                        {icon}
                    </span>
                </div>
            </div>

            {/* Percentage */}
            <p className="mt-3 text-sm font-bold text-primary">
                {percentage}%
            </p>

            {/* Skill Name */}
            <p className="mt-1 text-xs dark:text-gray-400 text-black">
                {name}
            </p>

        </div>
    )
}

export default Skill