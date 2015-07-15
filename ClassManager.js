// stuff

(function() {
    'use strict';

    // prototype changes

    Array.prototype.sortBy = function (p) {
        return this.slice(0).sort(function (a, b) {
            return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
    };

    // variables
    
    var storedClass = localStorage.getItem('cls'),
        cls = (storedClass) ? JSON.parse(storedClass) : [],
        storedPreferences = localStorage.getItem('pref'),
        preferences = (storedPreferences) ? JSON.parse(storedPreferences) : {},
        isValid = true,
        tempClass = cls.slice(), // makes a copy
        cols = preferences.cols || 5,
        gapX = preferences.gapX || 11,
        gapY = preferences.gapY || 5;

    // functions
    
    function compact() {
        cols = 5;
        gapX = 11;
        gapY = 5;
        updateClassList();
    }
    
    function spaced() {
        cols = 4;
        gapX = 12;
        gapY = 6;
        updateClassList();
    }

    function validateAddChild() {
        console.log('validateAddChild');
    }

    function store() {
        localStorage.setItem('cls', JSON.stringify(cls));
        localStorage.setItem('pref', JSON.stringify(preferences));
    }

    function saveChild(child) {
        cls.push(child);
        store();
    }

    function getGenderClass(gender) {
        if (!gender) return '';
        return (gender === 'M') ? 'male' : 'female';
    }

    function prettyDate(dob) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            dobArray = dob.split('-'),
            birthday = dobArray[2] + ' ' + months[dobArray[1] - 1];
        return birthday;
    }

    function getAge(dob) {
        var today = new Date();
        var dobArray = dob.split('-');
        var birth = new Date(dobArray[0], dobArray[1] -1, dobArray[2]);
        var age = today - birth;
        console.log(birth);
        console.log(age);
        return age;
    }
    
    function getGridPos(i) {
        var x = (i + 1) % cols || cols,
            y = Math.ceil((i + 1) / cols);
        return {
            posX: x - 1,
            posY: y - 1
        }
    }

    function createClassList() {
        var ul = document.getElementsByClassName('class-list')[0],
            frag = document.createDocumentFragment();
        for (var i = 0, x = cls.length; i < x; i++) {
            var li = document.createElement('li'),
                span = document.createElement('span'),
                pos = 'translate(' + (getGridPos(i).posX * gapX) + 'em, ' + (getGridPos(i).posY * gapY) + 'em)';
            li.setAttribute('id', cls[i].id);
            li.textContent = cls[i].name;
            li.className = getGenderClass(cls[i].gender);
            span.textContent = '(' + prettyDate(cls[i].dob) + ')';
            li.appendChild(span);
            li.style.webkitTransform = pos;
            li.style.MozTransform = pos;
            li.style.mstransform = pos;
            li.style.OTransform = pos;
            li.style.transform = pos;
            frag.appendChild(li);
        }
        ul.innerHTML = '';
        ul.appendChild(frag);
    }

    function updateClassList() {
        for (var i = 0, x = cls.length; i < x; i++) {
            var li = document.getElementById(cls[i].id),
                pos = 'translate(' + (getGridPos(i).posX * gapX) + 'em, ' + (getGridPos(i).posY * gapY) + 'em)';
            li.style.webkitTransform = pos;
            li.style.MozTransform = pos;
            li.style.mstransform = pos;
            li.style.OTransform = pos;
            li.style.transform = pos;
        }
    }
    
    function shuffle() {
        cls.sort(function() {
            return 0.5 - Math.random();
        });
        updateClassList();
    }

    function sort() {
        switch (location.hash) {
            case '#sort-by-name-asc':
                cls = cls.sortBy('name');
                break;
            case '#sort-by-name-desc':
                cls = cls.sortBy('name');
                cls.reverse();
                break;
            case '#sort-by-age-asc':
                cls = cls.sortBy('dob');
                cls.reverse();
                break;
            case '#sort-by-age-desc':
                cls = cls.sortBy('dob');
                break;
            case '#sort-by-gender':
                cls = cls.sortBy('gender');
                break;
            case '#random':
                shuffle();
                break;
            case '#compact':
                compact();
                break;
            case '#spaced':
                spaced();
        }
        updateClassList();
        store();
    }

    function fadeRandom() {
        var rnd = Math.floor(Math.random() * tempClass.length),
            li = document.querySelectorAll('li:not(.faded)')[rnd];
        li.className += ' faded';
        tempClass.splice(rnd, 1);
    }

    function pickOne() {
        var timer = setInterval(function () {
            fadeRandom();
            if (tempClass.length === 1) {
                clearInterval(timer);
                document.querySelectorAll('li:not(.faded)')[0].className += ' selected';
            }
        }, 100);
    }
    
    function reset() {
        
        createClassList();
        sort();
    }
    
    function writeDate() {
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            d = new Date(),
            today = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
        document.getElementById('date-today').textContent = today;
    }

    // events

    document.forms['addChild'].onsubmit = function () {

        var f = document.forms['addChild'],
            child = {
                id: +new Date(),
                name: f.name.value,
                gender: f.gender.value,
                dob: f.dob.value,
                tags: f.tags.value
            };

        validateAddChild();

        if (isValid) {
            saveChild(child);
            updateClassList();
        }
        else {
            // message
        }

    };

    document.getElementById('sort-by').onchange = function() {
        window.location = '#' + this.value;
    };
    
    document.getElementById('pick-one').addEventListener('click', pickOne);
    
    document.getElementById('reset').addEventListener('click', reset);   

    window.onhashchange = sort;

    writeDate();
    createClassList();
    sort();

})();