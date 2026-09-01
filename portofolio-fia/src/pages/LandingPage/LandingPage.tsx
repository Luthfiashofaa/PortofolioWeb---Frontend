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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Portofolio from "../../assets/portofolio_web.svg";

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
      description:
        "Learn the fundamentals of React and component-based development.",
      link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
    },
    {
      id: 2,
      title: "JavaScript Programming",
      description:
        "Learn modern JavaScript concepts and programming fundamentals.",
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
      description:
        "Learn the fundamentals of user interface and experience design.",
      link: "https://drive.google.com/file/d/1hHEcNMXB0hmUakUcyrDD3X1oNZAPjCRs/view?usp=drive_link",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // Mobile
      } else {
        setItemsPerPage(4); // sm ke atas
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(dummyCourses.length / itemsPerPage);

  const visibleCourses = dummyCourses.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
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
        className="md:relative md:h-screen h-auto overflow-hidden scroll-mt-20"
      >
        <Navbar />
        <div className="grid md:grid-cols-4 h-full">
          {/* Section 1 - left */}
          <div className="hidden md:col-span-1 md:flex h-full items-center md:ml-10 font-semibold">
            <div>
              {theme === "light" ? (
                <img
                  src={Petik}
                  alt="petik"
                  className="h-9 w-9 object-cover mr-4 mb-2"
                />
              ) : (
                <img
                  src={PetikDark}
                  alt="petik"
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
          <div className="relative md:h-screen col-span-2">
            {/* Hero content */}
            <div className="flex h-full flex-col items-center justify-center md:mt-12 mt-20">
              {/* Greeting badge */}
              <div className="rounded-full border dark:text-white dark:border-white border-black px-5 py-1 text-sm text-black mt-10">
                Hello!
              </div>

              {/* Name */}
              <div className="mt-3 flex gap-2 md:text-6xl text-4xl font-semibold">
                I'm{" "}
                <a href="" className="text-primary hover:underline">
                  Fia
                </a>
                ,
              </div>

              {/* Title */}
              <div className="mt-2 md:text-6xl text-4xl font-semibold">
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
                  className="relative md:h-125 md:w-125 w-110 h-110 rounded-full"
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
          <div className="hidden md:col-span-1 md:flex md:h-full items-center md:ml-5 md:font-semibold">
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
        className="items-center h-auto dark:bg-dark py-8 scroll-mt-20"
      >
        {/* Section 2 - About*/}
        <div className="flex flex-col items-center md:px-52 px-10">
          <h1 className="md:text-4xl text-2xl font-bold">ABOUT ME</h1>
          <hr className="w-72 border-t border-gray-300 my-4" />
          <p className="text-center md:leading-8 leading-5 text-xs">
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
          className="md:mt-8 mt-6 flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-3 -gap-3 lg:grid-cols-6 lg:gap-7">
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
        className="relative md:h-svh overflow-hidden bg-linear-to-br from-[#FFFCF5] via-[#FFF8E7] to-[#FFF3D0] scroll-mt-20 dark:from-[#171717] dark:via-[#1F1F1F] dark:to-[#111111]"
      >
        {/* Background decoration */}
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-primary/20 to-transparent md:h-32" />

        {/* Glow kiri atas */}
        <div className="absolute -left-32 top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl md:h-80 md:w-80" />

        {/* Glow kanan bawah */}
        <div className="absolute -bottom-32 -right-32 h-60 w-60 rounded-full bg-primary/10 blur-3xl md:h-96 md:w-96" />

        {/* Main Container */}
        <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4 md:px-6 md:py-8">
          {/* Title */}
          <div className="mb-2 text-center md:mb-8">
            <h1 className="text-xl font-bold text-dark md:text-3xl dark:text-white">
              EXPERIENCE
            </h1>

            <hr className="mx-auto my-2 w-32 border-t border-gray-300 md:my-3 md:w-52 dark:border-gray-600" />

            <p className="text-[8px] text-gray-500 md:text-xs dark:text-gray-400">
              My journey and professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex-1">
            {/* Location Icon */}
            <div className="absolute left-4 top-0 z-20 -translate-x-1/2 animate-location md:left-1/2">
              <LocationOnIcon
                className="text-red-500 drop-shadow-lg"
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 28,
                  },
                }}
              />
            </div>

            {/* Timeline Line */}
            <div className="absolute left-4 top-2 h-[calc(100%-10px)] border-l border-dashed border-primary md:left-1/2 md:border-l-2" />

            {/* Experiences Container */}
            <div className="relative flex flex-col gap-3 py-5 md:h-full md:justify-around md:gap-0 md:py-0">
              {/* ================= EXPERIENCE 1 ================= */}
              <div className="relative grid grid-cols-[32px_1fr] gap-x-2 md:grid-cols-[1fr_180px_1fr] md:items-center">
                {/* Mobile: Institution → Role → Year */}
                <div className="col-start-2 md:col-start-1 md:row-start-1 md:pr-8 md:text-right">
                  {/* Institution */}
                  <h2 className="text-[10px] font-bold leading-3 text-dark md:text-base md:leading-normal dark:text-white">
                    Universitas Muhammadiyah Malang
                  </h2>

                  {/* Mobile Role */}
                  <h2 className="mt-0.5 text-[9px] font-semibold leading-3 text-primary md:hidden">
                    Bachelor of Informatics Engineering
                  </h2>

                  {/* Mobile Year */}
                  <p className="mt-0.5 text-[8px] text-gray-500 md:hidden dark:text-gray-400">
                    Sept 2022 – Agt 2026
                  </p>

                  {/* Desktop Year */}
                  <p className="mt-1 hidden text-xs text-gray-500 md:block dark:text-gray-400">
                    Sept 2022 – Agt 2026
                  </p>
                </div>

                {/* Point */}
                <div className="absolute left-4 top-1 -translate-x-1/2 md:relative md:left-auto md:top-auto md:col-start-2 md:row-start-1 md:h-8 md:translate-x-0">
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-primary shadow-md md:absolute md:left-1/2 md:top-1/2 md:h-5 md:w-5 md:-translate-x-1/2 md:-translate-y-1/2 md:border-4 md:shadow-lg dark:border-dark" />
                </div>

                {/* Description */}
                <div className="col-start-2 mt-0.5 md:col-start-3 md:row-start-1 md:mt-0 md:pl-8">
                  {/* Mobile */}
                  <p className="text-[8px] leading-3 text-gray-600 md:hidden dark:text-gray-400">
                    Built a strong foundation in software development and worked
                    on various academic projects.
                  </p>

                  {/* Desktop */}
                  <div className="hidden md:block">
                    <h2 className="text-base font-bold text-dark dark:text-white">
                      Bachelor of Informatics Engineering
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                      Built a strong foundation in software development and
                      worked on various academic projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= EXPERIENCE 2 ================= */}
              <div className="relative grid grid-cols-[32px_1fr] gap-x-2 md:grid-cols-[1fr_180px_1fr] md:items-center">
                {/* Institution */}
                <div className="col-start-2 md:col-start-1 md:row-start-1 md:pr-8 md:text-right">
                  <h2 className="text-[10px] font-bold leading-3 text-dark md:text-base md:leading-normal dark:text-white">
                    Laboratory of Informatics Engineering, Universitas
                    Muhammadiyah Malang
                  </h2>

                  {/* Mobile Role */}
                  <h2 className="mt-0.5 text-[9px] font-semibold leading-3 text-primary md:hidden">
                    Laboratory Assistant
                  </h2>

                  {/* Mobile Year */}
                  <p className="mt-0.5 text-[8px] text-gray-500 md:hidden dark:text-gray-400">
                    Sept 2023 – Agt 2026
                  </p>

                  {/* Desktop Year */}
                  <p className="mt-1 hidden text-xs text-gray-500 md:block dark:text-gray-400">
                    Sept 2023 – Agt 2026
                  </p>
                </div>

                {/* Point */}
                <div className="absolute left-4 top-1 -translate-x-1/2 md:relative md:left-auto md:top-auto md:col-start-2 md:row-start-1 md:h-8 md:translate-x-0">
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-primary shadow-md md:absolute md:left-1/2 md:top-1/2 md:h-5 md:w-5 md:-translate-x-1/2 md:-translate-y-1/2 md:border-4 md:shadow-lg dark:border-dark" />
                </div>

                {/* Description */}
                <div className="col-start-2 mt-0.5 md:col-start-3 md:row-start-1 md:mt-0 md:pl-8">
                  {/* Mobile */}
                  <p className="text-[8px] leading-3 text-gray-600 md:hidden dark:text-gray-400">
                    Assisted lecturers and students during laboratory sessions
                    and supported students in understanding programming
                    concepts.
                  </p>

                  {/* Desktop */}
                  <div className="hidden md:block">
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
              </div>

              {/* ================= EXPERIENCE 3 ================= */}
              <div className="relative grid grid-cols-[32px_1fr] gap-x-2 md:grid-cols-[1fr_180px_1fr] md:items-center">
                {/* Company */}
                <div className="col-start-2 md:col-start-1 md:row-start-1 md:pr-8 md:text-right">
                  <h2 className="text-[10px] font-bold leading-3 text-dark md:text-base md:leading-normal dark:text-white">
                    Paperplay Studio
                  </h2>

                  {/* Mobile Role */}
                  <h2 className="mt-0.5 text-[9px] font-semibold leading-3 text-primary md:hidden">
                    Frontend Developer
                  </h2>

                  {/* Mobile Year */}
                  <p className="mt-0.5 text-[8px] text-gray-500 md:hidden dark:text-gray-400">
                    Agt 2025 – Sept 2025
                  </p>

                  {/* Desktop Year */}
                  <p className="mt-1 hidden text-xs text-gray-500 md:block dark:text-gray-400">
                    Agt 2025 – Sept 2025
                  </p>
                </div>

                {/* Point */}
                <div className="absolute left-4 top-1 -translate-x-1/2 md:relative md:left-auto md:top-auto md:col-start-2 md:row-start-1 md:h-8 md:translate-x-0">
                  <div className="h-3 w-3 rounded-full border-2 border-white bg-primary shadow-md md:absolute md:left-1/2 md:top-1/2 md:h-5 md:w-5 md:-translate-x-1/2 md:-translate-y-1/2 md:border-4 md:shadow-lg dark:border-dark" />
                </div>

                {/* Description */}
                <div className="col-start-2 mt-0.5 md:col-start-3 md:row-start-1 md:mt-0 md:pl-8">
                  {/* Mobile */}
                  <p className="text-[8px] leading-3 text-gray-600 md:hidden dark:text-gray-400">
                    Developed responsive web interfaces and contributed to web
                    development projects.
                  </p>

                  {/* Desktop */}
                  <div className="hidden md:block">
                    <h2 className="text-base font-bold text-dark dark:text-white">
                      Frontend Developer
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                      Developed responsive web interfaces and contributed to web
                      development projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= NEXT JOURNEY ================= */}
              <div className="relative grid grid-cols-[32px_1fr] gap-x-2 md:grid-cols-[1fr_180px_1fr] md:items-center">
                {/* Empty Left Desktop */}
                <div className="hidden md:block" />

                {/* Final Point */}
                <div className="absolute left-4 top-1 flex h-5 w-5 -translate-x-1/2 items-center justify-center md:relative md:left-auto md:top-auto md:col-start-2 md:h-10 md:w-auto md:translate-x-0">
                  <div className="absolute h-5 w-5 animate-ping rounded-full bg-primary opacity-30 md:h-8 md:w-8" />

                  <div className="relative flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-primary md:h-5 md:w-5 md:border-4 dark:border-dark">
                    <div className="h-1 w-1 rounded-full bg-white md:h-1.5 md:w-1.5" />
                  </div>
                </div>

                {/* Text */}
                <div className="col-start-2 md:col-start-3 md:row-start-1 md:pl-8">
                  <h2 className="text-[10px] font-bold text-primary md:text-base">
                    The Journey Continues
                  </h2>

                  <p className="mt-0.5 text-[8px] leading-3 text-gray-600 md:mt-1 md:text-xs md:leading-5 dark:text-gray-400">
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
        className="flex flex-col bg-background items-center gap-4 h-auto dark:bg-dark py-8 md:px-0 px-3 scroll-mt-20"
      >
        <h1 className="md:text-4xl text-2xl font-bold">PROJECTS</h1>

        <div className="flex flex-col gap-4 hover:cursor-pointer">
          {/* Row 1 */}
          <div className="flex flex-row md:gap-4 gap-2">
            <Projects1
              image={thumbnail}
              link="https://drive.google.com/file/d/1I9IzDT5ZVK8mun5TV47CN1U5MZZHNCUx/view?usp=drive_link"
            />
            <Projects1
              image={Portofolio}
              link="https://codebyfia.vercel.app/"
            />
            <div className="hidden sm:block">
              <Projects1 />
            </div>
          </div>

          <div className="flex w-full gap-2 md:gap-4">
            <Projects2 />

            <div className="hidden flex-1 sm:block">
              <Projects2 />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-row gap-4">
            <div className="hidden sm:block">
              <Projects1 />
            </div>
            <Projects1 />
            <div className="group relative flex md:h-40 md:w-72 h-28 w-1/2 cursor-pointer overflow-hidden rounded-2xl bg-[#1E1F1F] md:p-6 p-2 dark:bg-white/10">
              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/30 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -left-8 md:h-24 md:w-24 w-12 h-12  rounded-full border border-primary/30" />

              <div className="relative flex h-full w-full flex-col justify-between">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-full bg-primary">
                    <AutoAwesomeIcon
                      sx={{
                        fontSize: {
                          xs: 14,
                          sm: 18,
                          lg: 22,
                        },
                      }}
                      className="text-black"
                    />
                  </div>
                  <ArrowOutwardIcon className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Text */}
                <div className="">
                  <h3 className="md:text-xl text-sm font-bold text-white dark:text-white">
                    More to Create
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    New ideas are waiting to become something amazing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

      <section
        id="courses"
        className="flex flex-col items-center justify-center md:py-12 -pt-5 pb-5"
      >
        <h1 className="text-center md:text-4xl text-xl font-bold">
          COURSES & CERTIFICATIONS
        </h1>

        <p className="mt-2 px-4 md:text-md text-xs text-center text-gray-500 dark:text-gray-400">
          Courses and certifications completed to enhance my skills and
          knowledge.
        </p>

        <div className="relative mt-6 flex w-full items-center justify-center">
          {/* Panah kiri */}
          {dummyCourses.length > itemsPerPage && (
            <button
              onClick={previousCourses}
              className="mr-2 flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-primary transition hover:scale-110 sm:mr-4"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
          )}

          {/* Courses */}
          <div className="flex gap-3 sm:gap-6">
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
          {dummyCourses.length > itemsPerPage && (
            <button
              onClick={nextCourses}
              className="ml-2 flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-primary transition hover:scale-110 sm:ml-4"
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

      {/* Section 6 - Contact */}
      <section
        id="contact"
        className="bg-black text-white dark:text-dark dark:bg-primary flex items-center justify-center h-auto py-7 flex-col"
      >
        <h3 className="text-xs font-semibold">FEEL FREE TO CONTACT ME!</h3>

        <div className="mt-5 flex items-center flex-col text-lg">
          <h1 className="font-bold">+62 815-2392-1755</h1>
          <h1 className="font-bold">luthfiashofaa29@gmail.com</h1>
        </div>

        <div className="mt-5 flex items-center flex-col text-sm">
          <h3>Malang, East Java</h3>
          <h3>Indonesia</h3>
        </div>

        <div className="mt-5 flex items-center gap-4">
          <a
            href="https://github.com/Luthfiashofaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-10 w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/luthfiashofaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-10 w-10" />
          </a>
          <a
            href="https://www.instagram.com/luthfiashofaa_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="h-10 w-10" />
          </a>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
