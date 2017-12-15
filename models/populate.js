const Question = require('../models/question');
const User = require('../models/user');
const defaultAmount = 100

// Random Stat Generator
const generateStats = array => {
    array.push(
        { identifier: `html1`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `html2`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `html3`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `css1`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `css2`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `css3`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `js1`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `js2`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `js3`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
        { identifier: `db1`, timesTested: 100, timesCorrect: Math.floor((Math.random() * 100) + 1) },
    );
    return array
}

// Populate Default Users
exports.setupUsers = () => {
    User.new(`Robert`, `admin`, `robertjschaap@gmail.com`, generateStats([]));
}

// Populate Default Questions
exports.setupQuestions = () => {
    Question.new(
        `HTML`,
        `htm1`,
        `What does <a href='/about'> do?`,
        `It's a link that sends the user to the about page from the current page`,
        `It loades an image with information about the site`,
        'A'
    );
    Question.new(
        `HTML`,
        `html2`,
        `<!doctype html> is:`,
        `A document type declaration that tells the browser that the page is made in HTML5`,
        `A document type declaration that tells the browser that the page is made in HTML 4.01 Transitional`,
        'A'
    );
    Question.new(
        `HTML`,
        `html3`,
        `<html lang='en'> instructs the browser that:`,
        `The page is writen in English and tries to stop the broswer from suggesting a translation language`,
        `The page needs to be translated to English before it can be viewed`,
        'A'
    );
    Question.new(
        `CSS`,
        `css1`,
        `When you 'float' two children in a parent element, what happens?`,
        `The parent element collapses because both children are removed from the normal document flow.`,
        `Nothing happens, float is not a valid property`,
        'A'
    );
    Question.new(
        `CSS`,
        `css2`,
        `What is this: --main-bg-color: white`,
        `A CSS variable that can be used by calling var(--main-bg-color) on a property.`,
        `This is not a CSS property but a JavaScript property`,
        'A'
    );
    Question.new(
        `CSS`,
        `css3`,
        `What does @media print {} do?`,
        `It allows you to specify CSS styles specifically for documents that the user is trying to print.`,
        `It prints a message to the screen.`,
        'A'
    );
    Question.new(
        `JavaScript`,
        `js1`,
        `What is this in JavaScript: ...`,
        `The spread operator.`,
        `Three dots. These will break your code`,
        'A'
    );
    Question.new(
        `JavaScript`,
        `js2`,
        `What is this called and what does it do: (() => 'magic')()`,
        `An immediately invoked function expression (IIFE), it returns the word 'magic' immeditately.`,
        `It's a mess of parentheses and it's black magic.`,
        'A'
    );
    Question.new(
        `JavaScript`,
        `js3`,
        `What does it mean when 'use strict' is at the top of a JavaScript file.`,
        `The file will run in strict mode and prevent you from doing things like overwriting global functions, not declaring variables and re-using the same variables/arguments.`,
        `The file needs to be properly indented`,
        'A'
    );
    Question.new(
        `Databases`,
        `db1`,
        `Describe Sequelize;`,
        `It works, however it's a mess of poorly documented and deprecated features.`,
        `It's literally the best thing ever when you need to manage a database.`,
        'A'
    );

}

