import meImage from "../../assets/me.svg";
import Navbar from "../../components/Navbar";
import Petik from "../../assets/petik.svg";
import PetikDark from "../../assets/petik_dark.svg";
import { useTheme } from "../../context/theme/useTheme";
import { useEffect, useState } from "react";
import Skill from "../../components/LandingPage/Skills";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CssIcon from "@mui/icons-material/Css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Projects1 from "../../components/LandingPage/Projects1";
import Projects2 from "../../components/LandingPage/Projects2";
import thumbnail from "../../assets/thumbnail.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Courses from "../../components/LandingPage/Courses";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LandingPage = () => {
  const { theme } = useTheme();
  const text = `Hello! I'm Luthfia, an Informatics Engineering graduate with a strong interest in Frontend Development. I enjoy creating modern, responsive, and user-friendly web applications.
    I have experience working with technologies such as React, JavaScript, TypeScript, HTML, CSS, and Tailwind CSS. I am passionate about turning ideas and designs into functional and interactive digital experiences.
    I am continuously learning and improving my skills to become a better developer. I enjoy exploring new technologies, solving problems, and building projects that provide a great user experience.
    I am currently open to opportunities where I can grow, collaborate, and contribute as a Frontend Developer.`;
  const words = text.split(" ");

  const [activeWord, setActiveWord] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((current) => (current + 1) % words.length);
    }, 150); // kecepatan

    return () => clearInterval(interval);
  }, [words.length]);

const dummyCourses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn the fundamentals of React and component-based development.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
  {
    id: 2,
    title: "JavaScript Programming",
    description: "Learn modern JavaScript concepts and programming fundamentals.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Frontend Dev",
    description: "Build responsive and modern user interfaces for the web.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
  {
    id: 4,
    title: "TypeScript Basics",
    description: "Learn TypeScript fundamentals for safer web development.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Git and GitHub",
    description: "Learn version control and project collaboration using Git.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "Learn the fundamentals of user interface and experience design.",
    link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
  },
]

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(dummyCourses.length / 4);

  const visibleCourses = dummyCourses.slice(
    currentPage * 4,
    currentPage * 4 + 4,
  );

  const nextCourses = () => {
    setCurrentPage((current) => (current < totalPages - 1 ? current + 1 : 0));
  };

  const previousCourses = () => {
    setCurrentPage((current) => (current > 0 ? current - 1 : totalPages - 1));
  };
  return (
    <>
      {/* Section 1 (Hero) */}
      <section
        id="home"
        className="relative h-screen overflow-hidden scroll-mt-20"
      >
        <Navbar />
        <div className="grid grid-cols-4 h-full">
          {/* Section 1 - left */}
          <div className="col-span-1 flex h-full items-center ml-10 font-semibold">
            <div>
              {theme === "light" ? (
                <img
                  src={Petik}
                  alt="me"
                  className="h-9 w-9 object-cover mr-4 mb-2"
                />
              ) : (
                <img
                  src={PetikDark}
                  alt="me"
                  className="h-9 w-9 object-cover mr-4 mb-2"
                />
              )}
              <div>
                Turning ideas into <br />
                modern digital experiences.
              </div>
            </div>
          </div>

          {/* Section 1 - middle */}
          <div className="relative h-screen col-span-2">
            {/* Hero content */}
            <div className="flex h-full flex-col items-center justify-center mt-12">
              {/* Greeting badge */}
              <div className="rounded-full border dark:text-white dark:border-white border-black px-5 py-1 text-sm text-black mt-10">
                Hello!
              </div>

              {/* Name */}
              <div className="mt-3 flex gap-2 text-6xl font-semibold">
                I'm{" "}
                <a href="" className="text-primary hover:underline">
                  Fia
                </a>
                ,
              </div>

              {/* Title */}
              <div className="mt-2 text-6xl font-semibold">
                Frontend Developer
              </div>

              {/* Image */}
              <div className="relative z-10 -mt-14">
                <img
                  src={meImage}
                  alt="me"
                  className="h-96 w-96 object-cover"
                />
              </div>
            </div>

            {/* Background circle */}
            <div className="absolute -bottom-52 left-1/2 -translate-x-1/2">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-60" />

                {/* Circle */}
                <div
                  className="relative h-125 w-125 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, var(--color-primary), transparent, var(--color-primary))",
                    animation: "spin 8s linear infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Section 1 - right */}
          <div className="col-span-1 flex h-full items-center ml-5 font-semibold">
            <div className="text-right ml-36">
              <h2 className="text-2xl font-bold">03+</h2>
              <h1 className="text-3xl font-bold">Projects</h1>
              <h3 className="text-xs">Completed</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 (About dan Skills) */}
      <section
        id="about"
        className="items-center h-screen dark:bg-dark py-8 scroll-mt-20"
      >
        {/* Section 2 - About*/}
        <div className="flex flex-col items-center px-52">
          <h1 className="text-4xl font-bold">ABOUT ME</h1>
          <hr className="w-72 border-t border-gray-300 my-4" />
          <p className="text-center  leading-8">
            {words.map((word, index) => (
              <span
                key={index}
                className={
                  index === activeWord
                    ? "text-primary transition-colors duration-50"
                    : "transition-colors duration-75"
                }
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Section 2 - Skills*/}
        <div
          id="skills"
          className="flex justify-center mt-8 flex-col items-center"
        >
          <div className="flex gap-7 rounded-xl">
            <Skill icon={<CodeIcon />} percentage={80} name="ReactJS" />
            <Skill icon={<HtmlIcon />} percentage={90} name="HTML CSS" />
            <Skill
              icon={<JavascriptIcon />}
              percentage={70}
              name="Javascript"
            />
            <Skill icon={<CssIcon />} percentage={90} name="Tailwind CSS" />
            <Skill icon={<GitHubIcon />} percentage={90} name="Git/GitHub" />
            <Skill icon={<DesignServicesIcon />} percentage={70} name="Figma" />
          </div>
        </div>
      </section>

      {/* Section 3 - Experience */}
      <section
        id="experience"
        className="relative h-screen overflow-hidden bg-linear-to-br from-[#FFFCF5] via-[#FFF8E7] to-[#FFF3D0] scroll-mt-20 dark:from-[#171717] dark:via-[#1F1F1F] dark:to-[#111111]"
      >
        {/* Background decoration */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-primary/20 to-transparent" />

        {/* Glow kiri atas */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        {/* Glow kanan bawah */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        {/* Main Container */}
        <div className="relative mx-auto flex h-full max-w-5xl flex-col px-6 pt-8 pb-8">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-dark dark:text-white">
              EXPERIENCE
            </h1>

            <hr className="mx-auto my-3 w-52 border-t border-gray-300 dark:border-gray-600" />

            <p className="text-xs text-gray-500 dark:text-gray-400">
              My journey and professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex-1">
            {/* Location Icon */}
            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 animate-location">
              <LocationOnIcon
                className="text-red-500 drop-shadow-lg"
                sx={{ fontSize: 28 }}
              />
            </div>

            {/* Timeline Line */}
            <svg
              className="pointer-events-none absolute left-1/2 top-0 h-full w-55 -translate-x-1/2"
              viewBox="0 0 220 480"
              preserveAspectRatio="none"
            >
              <path
                d="M110 20 L110 460"
                fill="none"
                stroke="#FDC435"
                strokeWidth="3"
                strokeDasharray="7 10"
                strokeLinecap="round"
              />
            </svg>

            {/* Experiences Container */}
            <div className="relative flex h-full flex-col justify-around">
              {/* Experience 1 */}
              <div className="relative grid grid-cols-[1fr_180px_1fr] items-center">
                {/* Left */}
                <div className="pr-8 text-right">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Universitas Muhammadiyah Malang
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Sept 2022 – Agt 2026
                  </p>
                </div>

                {/* Point */}
                <div className="relative h-8">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-primary shadow-lg shadow-primary/40 dark:border-dark" />
                </div>

                {/* Right */}
                <div className="pl-8">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Bachelor of Informatics Engineering
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    Built a strong foundation in software development and worked
                    on various academic projects.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative grid grid-cols-[1fr_180px_1fr] items-center">
                {/* Left */}
                <div className="pr-8 text-right">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Laboratory of Informatics Engineering, Universitas
                    Muhammadiyah Malang
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Sept 2023 – Agt 2026
                  </p>
                </div>

                {/* Point */}
                <div className="relative h-8">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-primary shadow-lg shadow-primary/40 dark:border-dark" />
                </div>

                {/* Right */}
                <div className="pl-8">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Laboratory Assistant
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    Assisted lecturers and students during laboratory sessions
                    and supported students in understanding programming
                    concepts.
                  </p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative grid grid-cols-[1fr_180px_1fr] items-center">
                {/* Left */}
                <div className="pr-8 text-right">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Paperplay Studio
                  </h2>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Agt 2025 – Sept 2025
                  </p>
                </div>

                {/* Point */}
                <div className="relative h-8">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-primary shadow-lg shadow-primary/40 dark:border-dark" />
                </div>

                {/* Right */}
                <div className="pl-8">
                  <h2 className="text-base font-bold text-dark dark:text-white">
                    Frontend Developer
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    Developed responsive web interfaces and contributed to web
                    development projects.
                  </p>
                </div>
              </div>

              {/* Next Journey */}
              <div className="relative grid grid-cols-[1fr_180px_1fr] items-center">
                {/* Empty Left */}
                <div />

                {/* Final Point */}
                <div className="relative flex h-10 items-center justify-center">
                  <div className="absolute h-8 w-8 animate-ping rounded-full bg-primary opacity-30" />

                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg shadow-primary/40 dark:border-dark">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="pl-8">
                  <h2 className="text-base font-bold text-primary">
                    The Journey Continues
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                    Ready for the next opportunity, new challenges, and exciting
                    experiences ahead.
                  </p>
                </div>
              </div>
            </div>
            {/* End Experiences Container */}
          </div>
          {/* End Timeline */}
        </div>
        {/* End Main Container */}
      </section>

      {/* Section 4 - Projects */}
      <section
        id="projects"
        className="flex flex-col bg-background items-center gap-4 h-auto dark:bg-dark py-8 scroll-mt-20"
      >
        <h1 className="text-4xl font-bold">PROJECTS</h1>

        <div className="flex flex-col gap-4 hover:cursor-pointer">
          {/* Row 1 */}
          <div className="flex flex-row gap-4">
            <Projects1
              image={thumbnail}
              link="https://drive.google.com/file/d/1I9IzDT5ZVK8mun5TV47CN1U5MZZHNCUx/view?usp=drive_link"
            />
            <Projects1 />
            <Projects1 />
          </div>
          <div className="flex flex-row gap-4">
            <Projects2 />
            <Projects2 />
          </div>
          <div className="flex flex-row gap-4">
            <Projects1 />
            <Projects1 />
            <div className="group relative flex h-40 w-72 cursor-pointer overflow-hidden rounded-2xl bg-[#1E1F1F] p-6 dark:bg-white/10">
              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border border-primary/30" />

              <div className="relative flex h-full w-full flex-col justify-between">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                    <AutoAwesomeIcon
                      sx={{ fontSize: 18 }}
                      className="text-black"
                    />
                  </div>

                  <ArrowOutwardIcon className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white">
                    More to Create
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    New ideas are waiting to become something amazing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      {/* Section 5 - Courses */}
      {/* Section 5 - Courses */}
      <section
        id="courses"
        className="flex flex-col items-center justify-center py-12"
      >
        <h1 className="text-center text-4xl font-bold">
          COURSES & CERTIFICATIONS
        </h1>

        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Courses and certifications completed to enhance my skills and
          knowledge.
        </p>

        <div className="relative mt-6 flex items-center">
          {/* Panah kiri */}
          {dummyCourses.length > 4 && (
            <button
              onClick={previousCourses}
              className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary transition hover:scale-110"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
          )}

          {/* Maksimal 4 Course */}
          <div className="flex gap-6">
            {visibleCourses.map((course) => (
              <Courses
                key={course.id}
                title={course.title}
                description={course.description}
                link={course.link}
              />
            ))}
          </div>

          {/* Panah kanan */}
          {dummyCourses.length > 4 && (
            <button
              onClick={nextCourses}
              className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary transition hover:scale-110"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          )}
        </div>

        {/* Page Indicator */}
        {totalPages > 1 && (
          <div className="mt-5 flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index ? "w-6 bg-primary" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default LandingPage;
