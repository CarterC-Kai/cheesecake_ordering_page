// Carter Chan

const sum = require('../public/javascripts/sum.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

var fs = require('fs');

test('test selectEvent', () => {
    //Read the index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything()); //any non-null value is okay

    //put the HTML into a testing DOM and do a sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1').html()).toBe("Cheesecake Manufactory");
});
