// On load you har given these word to start with but later on 
// can add words to the list and save it to local storage

let verbaWords = [];

let levelWords = [
    // Easy
    [
        {
            word: "Diplomacy",
            answer: "Skill in dealing with people without offending or upsetting them",
            wrongAnswer: "Diploma in a skill of handling people",
        },
        {
            word: "Showmanship",
            answer: "The ability to entertain people",
            wrongAnswer: "The ability to care for others",
        },
        {
            word: "Idealist",
            answer: "Some One who believes that very good things can be achieved, often when this does not seem to others",
            wrongAnswer: "A person with a lot of ideas",
        },
        {
            word: "Interlude",
            answer: "A short period wheen a situation or activity is different from what comes before and after it",
            wrongAnswer: "A period in time where things move slower",
        },
        {
            word: "Decipher",
            answer: "To convert something written in code into normal language",
            wrongAnswer: "Separate true from false",
        }, 
        {
            word: "Genome",
            answer: "The complete set of genes in a cell or living thing",
            wrongAnswer: "A single cell in the human body",
        }, 
        {
            word: "Transcribed",
            answer: "To record thoughts, speech or data in a written form, or in a different written form from the original",
            wrongAnswer: "A form of translation from speech or data in written form",
        },   
        {
            word: "Intrigued",
            answer: "Very interested in something/somebody and wanting to know more about it/them",
            wrongAnswer: "Interested in a specific task that repeats it's self",
        },  
        {
            word: "Feasibility",
            answer: "The quality of being possible and likely to be achieved",
            wrongAnswer: "The ability to dispose of a substance",
        }, 
        {
            word: "Substance",
            answer: "A type of solid, liquid or gas that has particular qualities",
            wrongAnswer: "A non existing mass that has particular qualities",
        },
    ],
    // Medium
    [
        {
            word: "Diplomatic",
            answer: "Acting in a way that does not cause offence",
            wrongAnswer: "Acting in a non truthful manner",
        },
        {
            word: "Attentive",
            answer: "Listening carefully",
            wrongAnswer: "Is an Attention deficit disorder",
        },
        {
            word: "Perceptive",
            answer: "Having or showing the ability to see or understand things quickly, especially things that are not obvious",
            wrongAnswer: "The ability to understand a subject",
        }, 
        {
            word: "Hereditary",
            answer: "A disease or a characteristic given to a child by its parents before it is born",
            wrongAnswer: "A disease that is common among older people",
        },
        {
            word: "Catalysts",
            answer: "A substance that makes a chemical reaction happen faster without being changed itself",
            wrongAnswer: "A substance that changes depending on what substance you mix it with",
        }, 
        {
            word: "Conceded",
            answer: "To admit that something is true, logical, etc. after first denying it or resisting it",
            wrongAnswer: "A logical method of explaining the truth",
        },
        {
            word: "Injunction",
            answer: "An official order given by a court that demands that something must or must not be done",
            wrongAnswer: "Something that creates friction amongst people",
        }, 
        {
            word: "Splice",
            answer: "To join the ends of two pieces of rope by twisting them together",
            wrongAnswer: "Dividing a single object in to two",
        },
        {
            word: "Conciliate",
            answer: "to make somebody less angry or more friendly, especially by being kind and pleasant or by giving them something",
            wrongAnswer: "Hide a specific that can offend other humans",
        },
        {
            word: "Quisling",
            answer: "A person who helps an enemy that has taken control of his or her country",
            wrongAnswer: "The reaction of the human body when it is cold",
        },
    ],
    // Hard
    [
        {
            word: "Multifarious",
            answer: "Of many different types",
            wrongAnswer: "A multitude of situations to occur",
        },
        {
            word: "Constituent",
            answer: "One of the parts that a substance or combination is made of",
            wrongAnswer: "A combination of different substances",
        },  
        {
            word: "Obstreperous",
            answer: "Difficult to deal with and noisy",
            wrongAnswer: "Stiffening in you upper body",
        },
        {
            word: "Antacid",
            answer: "A substance used to reduce or prevent acid collection in the body, especially in the stomach",
            wrongAnswer: "A substance to clear the stomach from bacteria",
        },
        {
            word: "Meteoric",
            answer: "If something is described as meteoric, it is sudden and usually breif",
            wrongAnswer: "A fall from a great hight and speed",
        },
        {
            word: "Dissertation",
            answer: "A long piece of writing on a particular subject, especially one written for a university degree",
            wrongAnswer: "A method of erasing a long piece of writing on a particular subject",
        },  
        {
            word: "Ubiquitous",
            answer: "Seeming to be everywhere or in several places at the same time; very common",
            wrongAnswer: "Unwilling to change a behavior that risks offending others",
        }, 
        {
            word: "Precursor",
            answer: "A person or thing that comes before somebody/something similar and that leads to or influences its development",
            wrongAnswer: "A decision that is made before executing on a idea",
        }, 
        {
            word: "Enzyme",
            answer: "A substance that is produced by all living things and that helps a chemical change happen or happen more quickly, without being changed itself",
            wrongAnswer: "A chemical reaction that occurs in humans",
        }, 
        {
            word: "Garrulous",
            answer: "Talking a lot, especially about unimportant things",
            wrongAnswer: "When a peron is behaving in a certain manner that offends others",
        },
    ],
];

function testingToPush() {
    verbaWords = levelWords.flatMap(x => x);
  }
  testingToPush();