$(document).ready(function () {

  $("#aboutBtn").on("click", function () {
    $(this).text('Home');
    $(this).on("click", function () {
      location.reload();
    });

    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(
        `    
        <div class="d-g-a"> <!--grid wrapper-->
    
          <div class="gbx-a-2 p-m t-i">
            I'm a Web Developer based in the Greater Chicago area. Currently I am
            looking for positions working on the front end - HTML, CSS, JavaScript,
            and JQuery are the tools I'm, most comfortable working with. I have a 
            penchant for design as well as the abilities to bring my vision onto the page.
            Not only am I able to design your website, but I am able to give it life with
            many different effects and styles using the latest frameworks and tools available.
          </div>
          <div class="gbx-a-3 p-m t-i">
            I hold a Bachelors of Administration in Information Systems from the
            University of Cincinnati Lindner College of Business. I am pursuing a
            certificate from Northwestern University's Trilogy Full Stack Web
            Development Boot Camp program, focusing on the MERV Stack. Once the program is 
            finished, I will will have been exposed to many languages, frameworks, and database
            applications.
          </div>
          <div class="gbx-a-4 p-m t-i">
            In my free-time I enjoy playing music on my various instruments
            including my guitars, drum kit, and other small instruments. I love
            nothing more than to cruise down the Lake Shore Trail on my bike on a
            cool September afternoon. I enjoy all types of food and am willing to
            try anything, a philosphy I carry into my professional life as well.
            I like to travel any chance I get - my most memorable trips include visiting
            the Bahamas, Jamaica, London, and Colorado Springs.
            I am a skiier, snowboarder, and skateboarder, and like to play golf and tennis.
          </div>

        </div>
        `
        );
    });
  });

  $("#portBtn").on("click", function () {
    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(
        
    `
    <section class="ac-c ji-c d-f df-fdc m-m mt-xxl h-f p-l">
      <div class="m-s ta-c fz-jj ts-i">Solo Projects</div>

      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Password-Generator/">
          <div class="c-db ta-c">Password Generator</div>
          <img class="i-fl mt-l" src="./assets/images/soon5.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Day-Planner/">
          <div class="c-db ta-c">Day Planner</div>
          <img class="i-fl mt-l" src="./assets/images/soon3.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Weather-Dashboard/">
          <div class="c-db ta-c">Weather Dashboard</div>
          <img class="i-fl mt-l" src="./assets/images/152-367x267.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Dev-Profile-Generator/">
          <div class="c-db ta-c">Profile Generator</div>
          <img class="i-fl mt-l" src="./assets/images/331-3648x2432.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/note-taker/">
          <div class="c-db ta-c">Note Taker</div>
          <img class="i-fl mt-l" src="./assets/images/4-5616x3744.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://da-burger-smk.herokuapp.com/">
          <div class="c-db ta-c">Database CLI with "Burgers"</div>
          <img class="i-fl mt-l" src="./assets/images/soon4.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://hot-restaurant-scottkumor.herokuapp.com/">
          <div class="c-db ta-c">Restaurant Reservations</div>
          <img class="i-fl mt-l" src="./assets/images/437-367x267.jpg" />
        </a>
      </div>
      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://star-wars-scottkumor.herokuapp.com/">
          <div class="c-db ta-c">Create Your Own Star Wars Character</div>
          <img class="i-fl mt-l" src="./assets/images/537-2291x3450.jpg" />
        </a>
      </div>

      <div class="m-s ta-c fz-j ts-i">Collaborations</div>

      <div class="bg-c-lb-hv m-m bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc p-m s-hv">
        <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://iedson.github.io/spotlight/">
          <div class="c-db ta-c">Spotlight</div>
          <img class="i-fl mt-l" src="./assets/images/spotlight.jpg" />
        </a>
      </div>

      <div class="mt-l ta-c"> My <a class="td-n bg-c-b-fc bg-c-db-hv c-db-fc c-db c-w-hv td-n s-hv t-g-hv t-s-fc" href="https://github.com/scottkumor">
        Github Page</a> is the best place to keep up to date with all my projects and endeavors. Feel free to preruse at your leisure.
      </div>
  </section>
    `
      )
    });
  });

  $("#contactBtn").on("click", function () {
    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(
        `
        <div class="fz-j">
          <div class=""> My primary email is <a class="bg-c-b-fc bg-c-db-hv c-db-fc c-db c-w-hv td-n s-hv t-g-hv t-s-fc" href="mailto:scott.kumor1212@gmail.com">scott.kumor1212@gmail.com</a>. 
          I check my email regularly and usually reply within 1-2 business days.
        </div>
        `)
    });
  });
}); 