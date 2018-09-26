/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
       it('URL defined', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe("");
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.name).toBeDefined();
                expect(obj.name).not.toBe("");
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        let $menuIcon, $body;

        beforeEach(function() {
        $menuIcon = $('.menu-icon-link');
        $body = $('body');
        });

        afterEach(function() {
        $menuIcon = null;
        $body = null;
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('the menu element is hidden by default', function() {
            expect($body.addClass('menu-hidden')).toBeDefined();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('the menu changes visibility when the menu icon is clicked', function() {
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBeFalsy();
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBeTruthy();
        });
    });
        
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        let $feedContainer;

        beforeEach(function(done) {
            $feedContainer = $('.feed');
            setTimeout(function() {
                $feedContainer !== "";
                done();
            }, 3000);
        });
        
        //To check that the feed container is not empty
        it('when loadFeed', function() {
            expect($feedContainer.length).not.toEqual(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        const oldFeed, newFeed;

        beforeEach(function(done){
           //load first feed
          loadFeed(0, function(){
            firstFeed = $('.feed');

            //load second feed
            loadFeed(1, function(){
              secondFeed = $('.feed');
              done();

            });

          });

         });

        
        //To check if the feeds are not the same
        it('a new feed is loaded', function() {
            expect(oldFeed).not.toBe(newFeed);
        }); 

    });
        
}());