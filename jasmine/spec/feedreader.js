
$(function() {

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
            expect(allFeeds.length).toBeGreaterThan(0);
        });


          /*  Write a test that loops through each feed
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



        /* Write a test that loops through each feed
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

      /* Write a test that ensures the menu element is
      * hidden by default. You'll have to analyze the HTML and
      * the CSS to determine how we're performing the
      * hiding/showing of the menu element.
      */


      it("ensures the menu item is hidden", function(){


        expect($('body').hasClass('menu-hidden')).toBe(true);

      });


      /* Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */

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


    describe('Initial Entries', function() {
        /* *
         * Checks for at least one single .entry element within the
         * feed container after the loadFeed function completes.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have an .entry element', function() {
            var feedLen = $('.feed .entry').length;
            expect(feedLen).toBeGreaterThan(0);
        });
    });



    describe('New Feed selection', function() {
    var contentA, contentB;

    beforeEach(function(done) {
        // first asnyc call
        loadFeed(0, function() {
            // store contentA value
            contentA = document.querySelector('.feed').innerHTML;
            // second asnyc call
            // only happens once first loadFeed function has returned
            loadFeed(1, function() {
                // store contentB value
                contentB = document.querySelector('.feed').innerHTML;
                done();
            });

        })
    });


    it('ensures the content changes when feed is loaded', function(done) {
        expect(contentA !== contentB).toBe(true);
        done();
    });
  });

}());
