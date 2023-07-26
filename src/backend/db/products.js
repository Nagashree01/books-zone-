import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    price: 399,
    categoryName: "Non-fiction",
    format: "Paperback",
    description:
      "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 350,
    categoryName: "Non-fiction",
    format: "Hardcover",
    description:
      "In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, and reach their full potential.",
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1536184191i/41721428.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Think Again",
    author: "Adam M. Grant",
    price: 429,
    categoryName: "Non-fiction",
    format: "Audiobook",
    description:
      "Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams.",
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602574232i/55539565.jpg",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "One of Us Is Lying",
    author: "Karen M. McManus",
    price: 700,
    categoryName: "Mystery",
    format: "Hardcover",
    description: `"Pay close attention and you might solve this.
    On Monday afternoon, five students at Bayview High walk into detention.
    Bronwyn, the brain, is Yale-bound and never breaks a rule.
    Addy, the beauty, is the picture-perfect homecoming princess.
    Nate, the criminal, is already on probation for dealing.
    Cooper, the athlete, is the all-star baseball pitcher.
    And Simon, the outcast, is the creator of Bayview High's notorious gossip app.
    
    Only, Simon never makes it out of that classroom. Before the end of detention Simon's dead. And according to investigators, his death wasn't an accident. On Monday, he died. But on Tuesday, he'd planned to post juicy reveals about all four of his high-profile classmates, which makes all four of them suspects in his murder. Or are they the perfect patsies for a killer who's still on the loose?
    
    Everyone has secrets, right? What really matters is how far you would go to protect them."`,
    bookImg:
      "https://m.media-amazon.com/images/I/51UPDWyyFSL._SX329_BO1,204,203,200_.jpg",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    price: 599,
    categoryName: "Mystery",
    format: "Hardcover",
    description: `"
    Everyone in Fairview knows the story of the pretty high school senior who was tragically murdered by her boyfriend before he killed himself. Five years later, a girl named Pip sees how the tragedy still haunts her town and decides to reexamine the closed case for a school project. But soon she discovers a trail of dark secrets...and her investigation might turn into obsession."`,
    bookImg:
      "https://m.media-amazon.com/images/I/51vPX1gw41L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "1984",
    author: "George Orwell",
    price: 250,
    categoryName: "Classics",
    format: "Paperback",
    description: `The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his "most solid, most brilliant" work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 299,
    categoryName: "Classics",
    format: "Paperback",
    description: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
    Written for J.R.R. Tolkiens own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001)`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    price: 500,
    categoryName: "Classics",
    format: "Hardcover",
    description: `In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud. In this death-filled setting, the movement from love at first sight to the lovers final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629680008i/18135.jpg",
    ratings: 2,
  },
  {
    _id: uuid(),
    title: "Game of Thrones",
    author: "George R.R. Martin",
    price: 500,
    categoryName: "Fantasy",
    format: "Hardcover",
    description: `A New York Times bestselling epic. A blockbuster TV series. And now, George R. R. Martin’s breathtaking fantasy masterpiece makes its powerful graphic novel debut—with all the majesty, intrigue, full-blooded adventure, and sweeping, mythic vision that have made it a landmark work of imaginative literature. Beyond the legendary Wall, the vast battlement that stands between the kingdom of Winterfell and the untamed unknown, something sinister and supernatural is stirring in the frozen wastes. `,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1395362013i/21524265.jpg",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "Jade City",
    author: "Fonda Lee",
    price: 570,
    categoryName: "Fantasy",
    format: "Paperback",
    description: `Jade is the lifeblood of the island of Kekon. It has been mined, traded, stolen, and killed for -- and for centuries, honorable Green Bone warriors like the Kaul family have used it to enhance their magical abilities and defend the island from foreign invasion. Now, the war is over and a new generation of Kauls vies for control of Kekon's bustling capital city. They care about nothing but protecting their own, cornering the jade market, and defending the districts under their protection. Ancient tradition has little place in this rapidly changing nation.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1547625704i/43587154.jpg",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "Star Wars:Heir to the Empire",
    author: "Timothy Zahn",
    price: 500,
    categoryName: "Science Fiction",
    format: "Paperback",
    description: `It is a time of renewal, five years after the destruction of the Death Star and the defeat of Darth Vader and the Empire.

    But with the war seemingly won, strains are beginning to show in the Rebel Alliance. New challenges to galactic peace have arisen. And Luke Skywalker hears a voice from his past. A voice with a warning. Beware the dark side….`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529605994i/40604754.jpg",
    ratings: 2,
  },
  {
    _id: uuid(),
    title: "Dune",
    author: "Frank Herbert",
    price: 370,
    categoryName: "Science Fiction",
    format: "Hardcover",
    description: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...

    When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad'Dib, he will bring to fruition humankind's most ancient and unattainable dream.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    ratings: 1,
  },
  {
    _id: uuid(),
    title: "Six of Crows",
    author: "Leigh Bardugo",
    price: 370,
    categoryName: "Fantasy",
    format: "Hardcover",
    description: `Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . . .
    A convict with a thirst for revenge.
    A sharpshooter who can’t walk away from a wager.
    A runaway with a privileged past.
    A spy known as the Wraith.
    A Heartrender using her magic to survive the slums.
    A thief with a gift for unlikely escapes.
    Six dangerous outcasts. One impossible heist. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651710803i/23437156.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    price: 570,
    categoryName: "Non-fiction",
    format: "Paperback",
    description: `This is a book about self-sabotage. Why we do it, when we do it, and how to stop doing it—for good. Coexisting but conflicting needs create self-sabotaging behaviors. This is why we resist efforts to change, often until they feel completely futile. But by extracting crucial insight from our most damaging habits, building emotional intelligence by better understanding our brains and bodies, releasing past experiences at a cellular level, and learning to act as our highest potential future selves, we can step out of our own way and into our potential. For centuries, the mountain has been used as a metaphor for the big challenges we face, especially ones that seem impossible to overcome. To scale our mountains, we actually have to do the deep internal work of excavating trauma, building resilience, and adjusting how we show up for the climb. In the end, it is not the mountain we master, but ourselves.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590806892i/53642699.jpg",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "The Strength In Our Scars",
    author: "Bianca Sparacino",
    price: 370,
    categoryName: "Non-fiction",
    format: "Paperback",
    description: `The Strength In Our Scars” is Bianca Sparacino’s reminder to you: No matter what you’re going through, no matter where you are on your healing journey—you are strong.Through poetry, prose, and compassionate encouragement you would expect from someone who knows exactly what you’re working through, Sparacino is here with the words you need.“The Strength In Our Scars” tackles the gut-wrenching but relatable experiences of moving on, self-love, and ultimately learning to heal. In this book you will find peace, you will find a rock, you will find understanding, and you will find hope.Remember: Whatever is dark within you has also carved light into your soul. Whatever is lost within you has also brought you back home to yourself. Whatever is hurt within you is also healing you in ways you may not understand at that moment in time. This book hopes to show you that.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1533562564i/41057388.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 440,
    categoryName: "Mystery",
    format: "Hardcover",
    description: `Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.

    Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London.
    
    Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations—a search for the truth that threatens to consume him....
    
    The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 660,
    categoryName: "Classics",
    format: "Hardcover",
    description: `The Adventures of Sherlock Holmes is the series of short stories that made the fortunes of the Strand magazine, in which they were first published, and won immense popularity for Sherlock Holmes and Dr Watson. The detective is at the height of his powers and the volume is full of famous cases, including 'The Red-Headed League', 'The Blue Carbuncle', and 'The Speckled Band'.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1164045516i/3590.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "How to Kill Your Family",
    author: "Bella Mackie",
    price: 500,
    categoryName: "Mystery",
    format: "Paperback",
    description: `I have killed several people (some brutally, others calmly) and yet I currently languish in jail for a murder I did not commit.

    When I think about what I actually did, I feel somewhat sad that nobody will ever know about the complex operation that I undertook. Getting away with it is highly preferable, of course, but perhaps when I’m long gone, someone will open an old safe and find this confession. The public would reel. After all, almost nobody else in the world can possibly understand how someone, by the tender age of 28, can have calmly killed six members of her family. And then happily got on with the rest of her life, never to regret a thing.
    
    When Grace Bernard discovers her absentee millionaire father has rejected her dying mother’s pleas for help, she vows revenge, and sets about to kill every member of his family. Readers have a front row seat as Grace picks off the family one by one – and the result is as and gruesome as it is entertaining in this wickedly dark romp about class, family, love… and murder.
    
    But then Grace is imprisoned for a murder she didn’t commit.
    
    Outrageously funny, compulsive and subversive, perfect for fans of Killing Eve and My Sister, the Serial Killer.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617719574i/50224049.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 530,
    categoryName: "Classics",
    format: "Paperback",
    description: `Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    price: 600,
    categoryName: "Science Fiction",
    format: "Paperback",
    description: `A race for survival among the stars... Humanity's last survivors escaped earth's ruins to find a new home. But when they find it, can their desperation overcome its dangers?

    WHO WILL INHERIT THIS NEW EARTH?
    
    The last remnants of the human race left a dying Earth, desperate to find a new home among the stars. Following in the footsteps of their ancestors, they discover the greatest treasure of the past age—a world terraformed and prepared for human life.
    
    But all is not right in this new Eden. In the long years since the planet was abandoned, the work of its architects has borne disastrous fruit. The planet is not waiting for them, pristine and unoccupied. New masters have turned it from a refuge into mankind's worst nightmare.
    
    Now two civilizations are on a collision course, both testing the boundaries of what they will do to survive. As the fate of humanity hangs in the balance, who are the true heirs of this new Earth?`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1431014197i/25499718.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    price: 498,
    categoryName: "Fantasy",
    format: "Paperback",
    description: `In a land without magic, where the king rules with an iron hand, an assassin is summoned to the castle. She comes not to kill the king, but to win her freedom. If she defeats twenty-three killers, thieves, and warriors in a competition, she is released from prison to serve as the king's champion. Her name is Celaena Sardothien.

    The Crown Prince will provoke her. The Captain of the Guard will protect her. But something evil dwells in the castle of glass—and it's there to kill. When her competitors start dying one by one, Celaena's fight for freedom becomes a fight for survival, and a desperate quest to root out the evil before it destroys her world.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Dark Matter",
    author: "Blake Crouch",
    price: 720,
    categoryName: "Science Fiction",
    format: "Paperback",
    description: `A mindbending, relentlessly surprising thriller from the author of the bestselling Wayward Pines trilogy.Dark Matter is a brilliantly plotted tale that is at once sweeping and intimate, mind-bendingly strange and profoundly human--a relentlessly surprising science-fiction thriller about choices, paths not taken, and how far we'll go to claim the lives we dream of.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472119680i/27833670.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    price: 270,
    categoryName: "Fantasy",
    format: "Paperback",
    description: `Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.

    The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature.
    
    A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1270352123i/186074.jpg",
    ratings: 4,
  },
  {
    _id: uuid(),
    title: "Recursion",
    author: "Blake Crouch",
    price: 370,
    categoryName: "Science Fiction",
    format: "Paperback",
    description: `Memory makes reality.

    That's what NYC cop Barry Sutton is learning, as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.
    
    That's what neuroscientist Helena Smith believes. It's why she's dedicated her life to creating a technology that will let us preserve our most precious memories. If she succeeds, anyone will be able to re-experience a first kiss, the birth of a child, the final moment with a dying parent.
    
    As Barry searches for the truth, he comes face to face with an opponent more terrifying than any disease—a force that attacks not just our minds, but the very fabric of the past. And as its effects begin to unmake the world as we know it, only he and Helena, working together, will stand a chance at defeating it.
    
    But how can they make a stand when reality itself is shifting and crumbling all around them?
    
    At once a relentless pageturner and an intricate science-fiction puzzlebox about time, identity, and memory, Recursion is a thriller as only Blake Crouch could imagine it—and his most ambitious, mind-boggling, irresistible work to date.`,
    bookImg:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1543687940i/42046112.jpg",
    ratings: 4,
  },
];
