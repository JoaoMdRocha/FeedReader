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

        it('has URL and URL is not empty', function(){


          allFeeds.forEach(function(elem){

            var test = elem.url;
            expect(test).toBeDefined();
            expect(test).not.toBe('');

          });



        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

       it('has a name and name is not empty', function(){


         allFeeds.forEach(function(elem){

           var test = elem.name;
           expect(test).toBeDefined();
           expect(test).not.toBe('');

         });



         });



    });


    describe('The menu', function() {



      it("ensures the menu item is hidden", function(){


        expect($('body').hasClass('menu-hidden')).toBe(true);

      });


      it("ensures the menu changes visibility when clicked", function(){


        var bodyEl = document.getElementsByTagName('body');
        var bodyClass = bodyEl[0].className;
        var menuIcon = document.getElementsByClassName('menu-icon-link');

        menuIcon[0].click();
        expect($('body').hasClass('menu-hidden')).toBe(false);

        menuIcon[0].click();
        expect($('body').hasClass('menu-hidden')).toBe(true);


      });

    });


    describe('Initial Entries', function(){


      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       var container = $('.feed'),
           entryEl = $('.entry')

           beforeEach(function(done)  {
            loadFeed(0, function(){
            done();
            });
          });


      it('ensures there is an .entry element in the .feed container', function(done){

        expect(entryEl).not.toBe(undefined);
        done();

      });

    });

    describe('New Feed selection',function(){

      /* TODO: Write a new test suite named "New Feed Selection" */

          /* TODO: Write a test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           * Remember, loadFeed() is asynchronous.
           */
           let content,
               content2;


           beforeEach(function(done)  {
            loadFeed(0, function(){
              contentA = document.querySelector('.feed').innerHTML;
            });

            loadFeed(1, function(){
              contentB = document.querySelector('.feed').innerHTML;
              done();
            });
          });

        it('ensures the content changes when feed is loaded',function(done){

          expect(contentA !== contentB).toBe(true);
          done();

        });


    });

}());
