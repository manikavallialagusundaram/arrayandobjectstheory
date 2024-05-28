const resume = 
{
    "name": "manikavalli alagusundaram",
    "address For Communication": "M-12,M-13,12th sector,7th sector,morais city,trichy-620007",
    "contact Number": {
        "contact Number":"0123456789",
        "email": "user@gmail.com"
    },

    "Carrer Objective": "To work with a company which appreciates innovation to have a growth oriented challenging carrier,where i can contribute my knowledge and skills to the organization",
    "experience": [
        {
            "company": "civiac software solutions",
            "position": "front end developer",
            "start-date": "01-04-2022",
            "end-date": "16-09-2023",
            "responsibilities":["i enhance my experience through continuous team work and learning"
          ]
          }
        ],
        "education":[
            {
                "bachelor Of Engineering": "psna college of engineering and technology",
                "cgpa": "7.00",
                "year of passing": "2019"
            },
            {
                "12th":"sri aurobindo mira mat.hr.sec.school",
                "percentage": "92%",
                "year of passing":"march 2015"

            },
            {
               "10th": "sri aurobindo mira mat.hr.sec.school",
               "percentage": "90%",
               "year of passing" : "march 2013"
            }
        ],

       "skills":[
        {
            "adaptability":
            "team work"
        }
    ]
    };
    //using for loop 
    for(let i=0;i<resume.skills.length;i++){
        //console.log(resume.skills[i]);
        console.log(resume.skills.length);
    }
    //using for in loop 
    for(let key in resume){
        console.log(key + ":" +resume[key]); 
    }
    //using for loop 
    for(let education of resume.education){
        console.log(education);
    }
    //using for each loop 
    resume.experience.forEach(function(experience){
        console.log(experience);
    });