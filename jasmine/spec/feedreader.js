/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
     describe('RSS Feeds', function() {
        //Test that expects allFeeds to be defiined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Tests to ensure that allFeeds have an URL and a name
        it('URLs are defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        
        it('names are defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe('The Menu', function() {

        //Test to ensure menu element is hidden by default
        it('menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
        //Ensure menu visibility changes on click
        it('menu display changes on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
        describe('Initial Entries', function() {
        
        //Ensure loadFeed function completes it work
         beforeEach(function(done) {
             loadFeed(0, function() {
                 done();
             });
         });

         it('ensure that entry has more than 0 entries', function(){
             expect($('entry.feed')).toBeDefined();
             expect($('entry.feed')).toBeGreaterThan(0);
         });
    });
        
    describe('New Feed Selection', function() {
        //Compare initial and new feeds. Compare and ensure they are different
        let feedAfterFirstLoad;
        let feedAfterSecondLoad;
         beforeEach(function(done) {
             loadFeed(0, function() {
                feedAfterFirstLoad = $('.feed').html();
                loadFeed(1, function() {
                feedAfterSecondLoad = $('.feed').html();
                done();
             });
        });

        it('feed content changes', function(){
            expect(feedAfterFirstLoad).not.toBe(feedAfterSecondLoad);
        });
    });
        
}());
