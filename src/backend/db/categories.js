import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },

  {
    _id: uuid(),
    categoryName: "Mystery",
    description:
      "Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story.Often within a closed circle of suspects, each suspect is usually provided with a credible motive and a reasonable opportunity for committing the crime.",
  },
  {
    _id: uuid(),
    categoryName: "Classics",
    description:
      "A classic stands the test of time. The work is usually considered to be a representation of the period in which it was written; and the work merits lasting recognition. ",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Fantasy, from the Greek ϕαντασία meaning 'making visible' is a genre of fiction that concentrates on imaginary elements (the fantastic). This can mean magic, the supernatural, alternate worlds, superheroes, monsters, fairies, magical creatures, mythological heroes—essentially, anything that an author can imagine outside of reality. ",
  },
  {
    _id: uuid(),
    categoryName: "Science Fiction",
    description:
      "Science fiction (abbreviated SF or sci-fi with varying punctuation and capitalization) is a broad genre of fiction that often involves speculations based on current or future science or technology.",
  },
];
