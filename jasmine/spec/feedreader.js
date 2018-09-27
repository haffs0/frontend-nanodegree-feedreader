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

        //To check URL is defined and not empty 
        it('URL defined', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe("");
            });
        });

        //To check name is defined and not empty 
        it('name defined', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.name).toBeDefined();
                expect(obj.name).not.toBe("");
            });
        });
    });

    /*A test suite named "The menu" */
    describe('The menu', function() {

        let $menuIcon, $body;

        beforeEach(function() {
        $menuIcon = $('.menu-icon-link');
        $body = $('body');
        });

        // To check if the body has class menu-hidden
        it('the menu element is hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });

        // To check if the menu displayed or hide when clicked 
        it('the menu changes visibility when the menu icon is clicked', function() {
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);
            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });
        
    /*A test suite for "Initial Entries" */
    describe('Initial Entries', function() {
        // variable declaration
        let $feedContainer;

        beforeEach(function(done) {
            //load feed
            loadFeed(0, function() {
                $feedContainer = $('.feed .entry-link');
                done();
            });
        });
        
        //To check that the feed container is not empty
        it('when loadFeed', function() {
            expect($feedContainer.length).toBeGreaterThan(0);
        });
    });

    /*A test suite for "New Feed Selection" */
    describe('New Feed Selection', function() {
        // variable declaration
        let oldFeed, newFeed;

        beforeEach(function(done) {
            //load feed
            loadFeed(0, function() {
                oldfeed = $('.feed').html();
                //load new feed
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
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
