const engineerQuestions = [
    {
        name: "engineerName",
        type: "input",
        message: "Please enter the engineer's name."
    },
    {
        name: "engineerID",
        type: "input",
        message: "Please enter the engineer's employee ID."
    },
    {
        name: "engineerEmail",
        type: "input",
        message: "Please enter the engineer's email."
    },
    {
        name: "gitHub",
        type: "input",
        message: "Please enter the engineer's GitHub Username."
    },
    {
        name: "addTeammate",
        type: "confirm",
        message: "Would you like to add another team member?"
    },
]

module.exports = engineerQuestions;