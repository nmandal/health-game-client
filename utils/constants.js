const CONTRACT_ADDRESS = '0xb4EF8Fa5f7f296e4731A5AE7B947Ae2504d24e40';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      energy: characterData.energy?.toNumber(),
      maxEnergy: characterData.maxEnergy?.toNumber(),
      sleep: characterData.sleep.toNumber(),
      nutrition: characterData.nutrition.toNumber(),
      activity: characterData.activity.toNumber(),
    };
  };

  const characters = [
    {
        id: 0,
        name: 'Matthew Walker',
        title: 'Sleep researcher',
        imageSrc: 'https://i.imgur.com/mmBH3Rf.jpeg',
        imageAlt: 'Matthew Walker picture',
        techniques: [
          {id: 0, name: "8 hours of sleep", action: "Sleeping 8 hours tonight...", description: "Humans should sleep an average of eight hours per night. That means you should try and spend enough time in bed to give your body opportunity to sleep 8 hours or more."},
          {id: 1, name: "Consistent sleep schedule", action: "Going to bed and waking up at the same time...",  description: "Consistency is important to help regulate your circadian rhythm. Try and keep that wake up time as consistent as possible even on the weekends so you aren't jet-lagging yourself"},
          {id: 2, name: "Mindful substance consumption", action: "Last cup of coffee at noon, skipping the nightcap...", description: "Be conscious of caffeine and alcohol consumption as they can have dramatic effects on your sleep."},
        ],
    },
    {
      id: 1,
      name: 'Peter Attia',
      title: 'Longevity doctor',
      imageSrc: 'https://i.imgur.com/hb3k67H.jpeg',
      imageAlt: 'Peter Attia picture',
      techniques: [
        {id: 3, name: "Zone II", action: "Riding the Peloton for some Zone II cardio...",  description: "Zone II is the highest level of exertion that is effectively pure mitochondrial oxidative phosphorylation before you start to net accumulate lactate. Try and do 3-4 hours per week of zone 2 cardio (45 minutes minimum per session)."},
        {id: 4, name: "Levers of nutrition", action: "Pulling all three levers today with by fasting, no-carb diet, and restricting calories...",  description: "There are three levers we can pull with nutrition: dietary restriction - restricting what you eat (avoiding carbs, sugar, etc.); time restriction: restricting when you eat (fasting); Caloric restriction: restricting how much you eat."},
        {id: 5, name: "Dynamic Neuromuscular Stabilization", action: "Focusing on my stability today...", description: "DNS is based on a re-engineering of the development of movement patterns that occurs between three months of age and walking. The idea behind it is that we are born with the innate ability to move efficiently, but we lose our natural movement patterns by sitting all day. It was originally developed to help kids with cerebral palsy, but is now used to help anyone with movement deficiencies."},
      ],
    },
    {
      id: 2,
      name: 'Will Tennyson',
      title: 'Fitness YouTuber',
      imageSrc: 'https://i.imgur.com/ALrNi9W.png',
      imageAlt: 'Will Tennyson picture',
      techniques: [
        {id: 6, name: "Full-body strength", action: "Getting my gains at the gym...",  description: "Push, Pull, Squat, Deadlift, Press, Row, Hip Hinge, Lunge"},
        {id: 7, name: "10k steps", action: "Making sure I go for a few walks today...", description: "Low-level activity throughout the day."},
        {id: 8, name: "Meal logging", action: "Being mindful as I log my meals...", description: "Logging meals is a simple practice that draws awareness to you're eating. It helps me realize when I'm eating out of boredom rather than hunger."},
      ],
    },
    {
      id: 3,
      name: 'Ally Love',
      title: 'Peloton instructor',
      imageSrc: 'https://i.imgur.com/iUii00W.jpeg',
      imageAlt: 'Ally Love picture',
      techniques: [
        {id: 9, name: "Barre", action: "Doing barre today - going to be sore tomorrow...", description: "Barre helps strengthen your legs."},
        {id: 10, name: "Pilates", action: "Pilates today - my hips will thank me tomorrow...", description: "Pilates helps train your stability in hips and core."},
        {id: 11, name: "Tabata", action: "4 hardest minutes of exercise...", description: "Tabata enhances my anaerobic performance by training in Zone 5. I'll do four minute Tabata protocols using the air bike: 20:10 (20 sec sprint with 10 sec recovery)"},
      ],
    },
  ]
  

export { CONTRACT_ADDRESS, transformCharacterData, characters };
