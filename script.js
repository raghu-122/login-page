const members = [
    { 
        name: "U.Avinash", 
        dob: "1990-01-01", 
        details: {
            registrationNumber: "123456",
            department: "Computer Science",
            branch: "Software Engineering",
            section: "A"
        }
    },
    { 
        name: "P.Varun", 
        dob: "1992-02-02", 
        details: {
            registrationNumber: "654321",
            department: "Electrical Engineering",
            branch: "Power Systems",
            section: "B"
        }
    },
    { 
        name: "B.Chaturya", 
        dob: "1991-03-03", 
        details: {
            registrationNumber: "789012",
            department: "Mechanical Engineering",
            branch: "Thermodynamics",
            section: "C"
        }
    },
    { 
        name: "K.Raghu", 
        dob: "1993-04-04", 
        details: {
            registrationNumber: "345678",
            department: "Civil Engineering",
            branch: "Structural Engineering",
            section: "D"
        }
    },
    { 
        name: "Charlie Davis", 
        dob: "1994-05-05", 
        details: {
            registrationNumber: "901234",
            department: "Chemical Engineering",
            branch: "Process Engineering",
            section: "E"
        }
    },
    { 
        name: "Diana Evans", 
        dob: "1995-06-06", 
        details: {
            registrationNumber: "567890",
            department: "Biotechnology",
            branch: "Genetic Engineering",
            section: "F"
        }
    },
    { 
        name: "Ethan Foster", 
        dob: "1996-07-07", 
        details: {
            registrationNumber: "234567",
            department: "Aerospace Engineering",
            branch: "Aerodynamics",
            section: "G"
        }
    },
    { 
        name: "Fiona Green", 
        dob: "1997-08-08", 
        details: {
            registrationNumber: "890123",
            department: "Environmental Engineering",
            branch: "Sustainable Development",
            section: "H"
        }
    },
    { 
        name: "George Harris", 
        dob: "1998-09-09", 
        details: {
            registrationNumber: "456789",
            department: "Materials Science",
            branch: "Nanotechnology",
            section: "I"
        }
    },
    { 
        name: "Hannah Irving", 
        dob: "1999-10-10", 
        details: {
            registrationNumber: "012345",
            department: "Physics",
            branch: "Quantum Mechanics",
            section: "J"
        }
    },
    { 
        name: "Ian Jackson", 
        dob: "2000-11-11", 
        details: {
            registrationNumber: "678901",
            department: "Mathematics",
            branch: "Applied Mathematics",
            section: "K"
        }
    },
    { 
        name: "Julia King", 
        dob: "2001-12-12", 
        details: {
            registrationNumber: "234567",
            department: "Statistics",
            branch: "Data Science",
            section: "L"
        }
    },
    { 
        name: "Kevin Lewis", 
        dob: "2002-01-13", 
        details: {
            registrationNumber: "890123",
            department: "Economics",
            branch: "Microeconomics",
            section: "M"
        }
    },
    { 
        name: "Laura Miller", 
        dob: "2003-02-14", 
        details: {
            registrationNumber: "456789",
            department: "Political Science",
            branch: "International Relations",
            section: "N"
        }
    },
    { 
        name: "Michael Nelson", 
        dob: "2004-03-15", 
        details: {
            registrationNumber: "012345",
            department: "History",
            branch: "Modern History",
            section: "O"
        }
    },
    { 
        name: "Nina Owens", 
        dob: "2005-04-16", 
        details: {
            registrationNumber: "678901",
            department: "Philosophy",
            branch: "Ethics",
            section: "P"
        }
    },
    { 
        name: "Oscar Perez", 
        dob: "2006-05-17", 
        details: {
            registrationNumber: "234567",
            department: "Psychology",
            branch: "Clinical Psychology",
            section: "Q"
        }
    },
    { 
        name: "Paula Quinn", 
        dob: "2007-06-18", 
        details: {
            registrationNumber: "890123",
            department: "Sociology",
            branch: "Criminology",
            section: "R"
        }
    },
    { 
        name: "Quincy Roberts", 
        dob: "2008-07-19", 
        details: {
            registrationNumber: "456789",
            department: "Anthropology",
            branch: "Cultural Anthropology",
            section: "S"
        }
    },
    { 
        name: "Rachel Scott", 
        dob: "2009-08-20", 
        details: {
            registrationNumber: "012345",
            department: "Linguistics",
            branch: "Syntax",
            section: "T"
        }
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const member = members.find(member => member.name === name && member.dob === dob);

    if (member) {
        localStorage.setItem('memberDetails', JSON.stringify(member));
        window.location.href = 'index1.1.html';
    } else {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Invalid credentials';
        messageElement.style.color = 'red';
    }
});
