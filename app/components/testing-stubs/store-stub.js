export const defaultFakeStore = {
  movieReducer: {
    movies: [{}, {}, {}],
  },
  userSignInReducer: [],
  movieIndexReducer: [],
  allMoviesReducer: []
}

export const fakeStore = {
  movieReducer: {
    movies: [ {
      id: 70,
      movie_id: 346685,
      user_id: 77,
      title: "The Girl on the Train",
      poster_path: "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
      release_date: "2016-10-05",
      vote_average: "6",
      overview: "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds."
      },
      {
      id: 71,
      movie_id: 207932,
      user_id: 77,
      title: "Inferno",
      poster_path: "/oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
      release_date: "2016-10-13",
      vote_average: "5.5",
      overview: "After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot."
      },
      {
      id: 72,
      movie_id: 346672,
      user_id: 77,
      title: "Underworld: Blood Wars",
      poster_path: "/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg",
      release_date: "2016-12-01",
      vote_average: "4.2",
      overview: "Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice."
      } ]
  },
  userSignInReducer: {
    user: {
      id: 2,
      name: "steph",
      password: "password",
      email: "fake@fake.com"
    } ,
    fav: {
      data: {
        data : [{
        id: 71,
        movie_id: 207932,
        user_id: 77,
        title: "Inferno",
        poster_path: "/oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
        release_date: "2016-10-13",
        vote_average: "5.5",
        overview: "After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot."
        },
        {
        id: 72,
        movie_id: 346672,
        user_id: 77,
        title: "Underworld: Blood Wars",
        poster_path: "/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg",
        release_date: "2016-12-01",
        vote_average: "4.2",
        overview: "Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice."
        }]
      }
    }
  },
  movieIndexReducer: {
    new:
      { id: 60,
      movie_id: 328111,
      user_id: 2,
      title: "The Secret Life of Pets",
      poster_path: "/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg",
      release_date: "2016-06-18",
      vote_average: "5.8",
      overview: "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes."
      }
  },
  allMoviesReducer:  {
    finalFaves:
      [{  id: 61,
      movie_id: 297761,
      user_id: 2,
      title: "Suicide Squad",
      poster_path: "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      release_date: "2016-08-02",
      vote_average: "5.9",
      overview: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences."
      },
      {
      id: 62,
      movie_id: 127380,
      user_id: 2,
      title: "Finding Dory",
      poster_path: "/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
      release_date: "2016-06-16",
      vote_average: "6.7",
      overview: "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?"
      },
      {
      id: 63,
      movie_id: 135397,
      user_id: 2,
      title: "Jurassic World",
      poster_path: "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      release_date: "2015-06-09",
      vote_average: "6.5",
      overview: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond."
      },
      {
      id: 64,
      movie_id: 329865,
      user_id: 2,
      title: "Arrival",
      poster_path: "/hLudzvGfpi6JlwUnsNhXwKKg4j.jpg",
      release_date: "2016-11-10",
      vote_average: "6.7",
      overview: "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat."
      },
      {
      id: 65,
      movie_id: 313369,
      user_id: 2,
      title: "La La Land",
      poster_path: "/ylXCdC106IKiarftHkcacasaAcb.jpg",
      release_date: "2016-12-01",
      vote_average: "8.1",
      overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
      },
      {
      id: 66,
      movie_id: 283366,
      user_id: 2,
      title: "Miss Peregrine's Home for Peculiar Children",
      poster_path: "/uSHjeRVuObwdpbECaXJnvyDoeJK.jpg",
      release_date: "2016-09-28",
      vote_average: "6.3",
      overview: "A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them."
    }]
  }
}
