import { NavLink, useSearchParams } from "react-router-dom";
import cn from "classnames";
import { Pagination, SvgIcon } from "src/components";
import { Thumbs } from "./internal/thumbs/Thumbs";
import { TagsCarousel } from "./internal/tags-carousel/TagsCarousel";
import { Search } from "./internal/search/Search";
import classes from "./style.module.scss";
import Header from "src/components/header/Header";

// пока захардкодил
const total = 52;
const perPage = 6;

const ProjectsListingPage = () => {
  // const [query] = useSearchParams();
  // const tag = query.get("tag");

  return (
    <>
      <Header></Header>
      <div className={cn("wrapper", classes["project-listing-page"])}>
        {/* {!tag ? (
        <div>
          <div className={cn("center", classes["project-listing-page__head"])}>
            <h1 className={classes["project-listing-page__h1"]}>
              Смотреть все проекты
            </h1>
            <NavLink>
              <SvgIcon name="search" />
              Поиск по всем проектам StudentWorks
            </NavLink>
          </div>
        </div>
      ) : (
        <div>123</div>
      )} */}

        <Search />

        <TagsCarousel tags={tags} />

        <Thumbs thumbs={projects} />

        <div className="center">
          <Pagination total={total} perPage={perPage}></Pagination>
        </div>
      </div>
    </>
  );
};

// const Tags = () => {
//   return (
//     <div className={classes["project-listing-page__tags"]}>
//       <NavLink
//         to={{
//           search: "?tag=дизайн",
//         }}
//         className={cn(
//           classes["project-listing-page__tag"],
//           classes["project-listing-page__tag--purple"]
//         )}
//       >
//         Дизайн
//       </NavLink>
//       <NavLink
//         to={{
//           search: "?tag=it",
//         }}
//         className={cn(
//           classes["project-listing-page__tag"],
//           classes["project-listing-page__tag--green"]
//         )}
//       >
//         IT
//       </NavLink>
//       <NavLink
//         to={{
//           search: "?tag=менеджмент",
//         }}
//         className={cn(
//           classes["project-listing-page__tag"],
//           classes["project-listing-page__tag--gray"]
//         )}
//       >
//         Менеджмент
//       </NavLink>
//       <NavLink
//         to={{
//           search: "?tag=управление",
//         }}
//         className={cn(
//           classes["project-listing-page__tag"],
//           classes["project-listing-page__tag--purple"]
//         )}
//       >
//         Управление
//       </NavLink>
//     </div>
//   );
// };

export default ProjectsListingPage;

const tags = [
  "аналитика",
  "дизайн",
  "проектирование",
  "верстка",
  "копирайтинг",
  "аналитика",
  "дизайн",
  "проектирование",
  "верстка",
  "копирайтинг",
];

const projects = [
  {
    id: "1",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн", "DevOps", "проектирование"],
    info: "Сервис для взаимодействия HR и студентов",
  },
  {
    id: "2",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн"],
    info: "Сервис для взаимодействия HR и студентов",
  },
  {
    id: "3",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн"],
    info: "Сервис для взаимодействия HR и студентов",
  },
  {
    id: "4",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн"],
    info: "Сервис для взаимодействия HR и студентов",
  },
  {
    id: "5",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн"],
    info: "Сервис для взаимодействия HR и студентов",
  },
  {
    id: "6",
    thumb: "/mock.png",
    title: "Student Works",
    tags: ["аналитика", "дизайн"],
    info: "Сервис для взаимодействия HR и студентов",
  },
];
