
   const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Complete report",
        description: "Finish the quarterly financial report",
        date: "2024-11-14",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Weekly check-in with team",
        date: "2024-11-15",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with client X on project progress",
        date: "2024-11-16",
        category: "Client Relations",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskSummary: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Isha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare presentation",
        description: "Prepare slides for the upcoming presentation",
        date: "2024-11-17",
        category: "Presentations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Research project",
        description: "Conduct market research for new project",
        date: "2024-11-18",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Data analysis",
        description: "Analyze recent customer data",
        date: "2024-11-19",
        category: "Data",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Email outreach",
        description: "Send introductory emails to new leads",
        date: "2024-11-20",
        category: "Outreach",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Product review",
        description: "Review the latest product release",
        date: "2024-11-21",
        category: "Product Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Documentation update",
        description: "Update documentation for product X",
        date: "2024-11-22",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "System maintenance",
        description: "Run system updates and maintenance tasks",
        date: "2024-11-23",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug fixing",
        description: "Resolve known issues in software",
        date: "2024-11-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security review",
        description: "Assess security vulnerabilities",
        date: "2024-11-25",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Social media post",
        description: "Schedule posts for the week",
        date: "2024-11-26",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Content review",
        description: "Review latest content submissions",
        date: "2024-11-27",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Campaign planning",
        description: "Plan upcoming ad campaign",
        date: "2024-11-28",
        category: "Advertising",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskSummary: {
      active: 3,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  }
];

  
  

const admin =[{
    "id":1,
    "email":"admin@gmail.com",
    "password":"123"
}]




export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
 }