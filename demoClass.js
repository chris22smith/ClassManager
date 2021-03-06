// demo data

var demoClass = [
    {
        name: 'Abigail',
        gender: 'F',
        dob: '2006-05-06',
        tags: null,
        id: 1433574993905
    },
    {
        name: 'Ben',
        gender: 'M',
        dob: '2006-01-24',
        tags: null,
        id: 1433574993906
    },
    {
        name: 'Christopher',
        gender: 'M',
        dob: '2005-09-26',
        tags: null,
        id: 1433574993935
    },
    {
        name: 'Danielle',
        gender: 'F',
        dob: '2006-02-01',
        tags: null,
        id: 1433574993978
    },
    {
        name: 'Dylan',
        gender: 'M',
        dob: '2005-10-15',
        tags: null,
        id: 1433574993956
    },
    {
        name: 'Evan',
        gender: 'M',
        dob: '2005-11-14',
        tags: null,
        id: 1433574993964
    },
    {
        name: 'Francesca',
        gender: 'F',
        dob: '2005-09-10',
        tags: null,
        id: 1433574993958
    },
    {
        name: 'Gilbert',
        gender: 'M',
        dob: '2006-04-18',
        tags: null,
        id: 1433574993916
    },
    {
        name: 'Harriet',
        gender: 'F',
        dob: '2005-12-12',
        tags: null,
        id: 1433574993999
    },
    {
        name: 'India',
        gender: 'F',
        dob: '2005-10-03',
        tags: null,
        id: 1433574993945
    },
    {
        name: 'Jayden',
        gender: 'M',
        dob: '2005-09-25',
        tags: null,
        id: 1433574993911
    },
    {
        name: 'Katherine',
        gender: 'F',
        dob: '2006-03-20',
        tags: null,
        id: 1433574993923
    },
    {
        name: 'Lauren',
        gender: 'F',
        dob: '2005-11-01',
        tags: null,
        id: 1433574993918
    },
    {
        name: 'Louis',
        gender: 'M',
        dob: '2005-12-29',
        tags: null,
        id: 1433574993961
    },
    {
        name: 'Max',
        gender: 'M',
        dob: '2005-11-15',
        tags: null,
        id: 1433574993928
    },
    {
        name: 'Nina',
        gender: 'F',
        dob: '2006-06-24',
        tags: null,
        id: 1433574993955
    },
    {
        name: 'Oliver',
        gender: 'M',
        dob: '2006-07-07',
        tags: null,
        id: 1433574993974
    },
    {
        name: 'Paige',
        gender: 'F',
        dob: '2006-08-01',
        tags: null,
        id: 1433574993959
    },
    {
        name: 'Ryan',
        gender: 'M',
        dob: '2006-02-04',
        tags: null,
        id: 1433574993944
    },
    {
        name: 'Raj',
        gender: 'M',
        dob: '2006-01-22',
        tags: null,
        id: 1433574993948
    },
    {
        name: 'Sienna',
        gender: 'F',
        dob: '2006-05-11',
        tags: null,
        id: 1433574993908
    },
    {
        name: 'Toby',
        gender: 'M',
        dob: '2006-08-06',
        tags: null,
        id: 1433574993936
    },
    {
        name: 'Vanessa',
        gender: 'F',
        dob: '2006-07-12',
        tags: null,
        id: 1433574993982
    },
    {
        name: 'William',
        gender: 'M',
        dob: '2006-03-17',
        tags: null,
        id: 1433574993977
    },
    {
        name: 'Zara',
        gender: 'F',
        dob: '2005-09-15',
        tags: null,
        id: 1433574993927
    }
];

// log out totals

console.log(demoClass);
console.log(demoClass.length + ' children');

var numBoys = demoClass.filter(function(x) {
    return x.gender === 'M';
}).length;

var numGirls = demoClass.filter(function(x) {
    return x.gender === 'F';
}).length;

console.log(numBoys + ' boys');
console.log(numGirls + ' girls');

// if no stored data, use demoClass

if (!localStorage.getItem('cls')) localStorage.setItem('cls', JSON.stringify(demoClass));