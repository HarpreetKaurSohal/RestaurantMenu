import React, { useContext, useEffect, useState } from "react";
import * as m from "@mui/material";
import { DishCard, PageHeader, PageSubtitle } from "../../GlobalFileContainer";
import { MenuContext } from "../../utils/context/MenuContext";
import { menuObject } from "./menuObject";

const RouteToMenu = () => {
  const { menu } = useContext(MenuContext);
  const [title, setTitle] = useState("");
  const customRoot = document.getElementById("customRoot");

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTitle(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".category-section");
    const observer = new IntersectionObserver(handleIntersection, {
      root: customRoot,
      rootMargin: "0px",
      threshold: 0.8,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    scrollToSection(menu?.category);
  }, [menu.category]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="customRoot">
      <PageHeader title={`Menu${title ? " | " + title : ""}`} />
      <m.Box>
        {menuObject?.map((menuItem, index) => (
          <div
            id={menuItem.category}
            className="category-section"
            key={`${menuItem.category}-${index}`}
          >
            <PageSubtitle title={menuItem.category} />
            <m.Grid container spacing={2}>
              {menuItem.items.map((dish, id) => (
                <m.Grid key={`${dish.name}-${id}`} item xs={6}>
                  <DishCard
                    name={dish.name}
                    price={dish.price}
                    desc={dish.description}
                    pic={menuItem.key}
                  />
                </m.Grid>
              ))}
            </m.Grid>
          </div>
        ))}
      </m.Box>
    </div>
  );
};

export default RouteToMenu;
