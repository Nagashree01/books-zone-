import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Books zone, where literature lovers and bookworms alike can immerse
        themselves in a world of stories, knowledge, and imagination. Whether
        you seek an adventure in a distant land, a romantic escape, or a journey
        through time, our carefully curated collection is sure to captivate your
        senses.
      </p>
      <p>
        Customer can browse and order books from the comfort of your own home.
        Our user-friendly website provides detailed information on each title,
        including summaries, author biographies. With our efficient ordering and
        delivery system, you can have your favorite books delivered right to
        your doorstep, ensuring that the joy of reading is accessible to all, no
        matter where they may be.
      </p>
      <div>
        <NavLink className="about-link" to="/*">
          About
        </NavLink>
        <NavLink className="about-link" to="/*">
          T&C
        </NavLink>
      </div>
    </footer>
  );
};
