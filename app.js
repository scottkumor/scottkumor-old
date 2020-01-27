$(document).ready(function () {


  $("#aboutBtn").on("click", function () {
    $(this).text('Home');
    $(this).on("click", function () {
      location.reload();
    });

    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(`
    <div class="d-g-a"> <!--grid wrapper-->
    
        <div class="gbx-a-2 p-m t-i">
          I'm a Web Developer based in the Greater Chicago area. Currently I am
          looking for positions working on the frint end - HTML, CSS, JavaScript,
          and JQuery are the tools I', most comfortable working with. I have a 
          penchant for desin as well as the abilities to bring my vision onto the page
          Not only am I able to design your website, but I am able to give it life with
          many different effefts and styles using the latest frameworks and tools available.
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
          try anything once. I like to travel any chance I get - my most
          memorable trips include visiting the Bahamas, Jamaica, London, and
          Colorado Springs. I am a skiier, snowboarder, and skateboarder, and
          like to play golf and tennis.
        </div>
        </div>`);
    });
  });




  $("#portBtn").on("click", function () {
    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(`
      
      <div class="m-s ta-c fz-j ts-i">Solo Projects</div>

      <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-0 p-m s-hv">
      <!--grid box wrapper-->
      <a
        class="ai-c d-f jc-c df-fdc c-w td-n"
        href="https://github.com/scottkumor"
      > <!--link to page or project-->
        <div class="c-db ta-c">Github Page</div>
        <img
          class="i-fl mt-l"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png"
        />
      </a>
    </div>
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-1 p-m s-hv"
    >
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Password-Generator/">
        <div class="c-db ta-c">Password Generator</div>
        <img class="i-fl mt-l" src="./assets/images/soon5.jpg" />
      </a>
    </div>
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-2 p-m s-hv"
    >
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Day-Planner/">
        <div class="c-db ta-c">Day Planner</div>
        <img class="i-fl mt-l" src="./assets/images/soon3.jpg" />
      </a>
    </div>
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-3 p-m s-hv"
    >
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Weather-Dashboard/">
        <div class="c-db ta-c">Weather Dashboard</div>
        <img class="i-fl mt-l" src="./assets/images/152-367x267.jpg" />
      </a>
    </div>    
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-4 p-m s-hv"
    >
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/Dev-Profile-Generator/">
        <div class="c-db ta-c">Profile Generator</div>
        <img class="i-fl mt-l" src="./assets/images/331-3648x2432.jpg" />
      </a>
    
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-5 p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://scottkumor.github.io/note-taker/">
        <div class="c-db ta-c">Note Taker</div>
        <img class="i-fl mt-l" src="./assets/images/4-5616x3744.jpg" />
      </a>
    </div>  
  <div
    class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-5 p-m s-hv">
    <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://da-burger-smk.herokuapp.com/">
      <div class="c-db ta-c">Database CLI with "Burgers"</div>
      <img class="i-fl mt-l" src="./assets/images/soon4.jpg"/>
    </a>
  </div>
  <div
    class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-5 p-m s-hv">
    <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://hot-restaurant-scottkumor.herokuapp.com/">
      <div class="c-db ta-c">Restaurant Reservations</div>
      <img class="i-fl mt-l" src="./assets/images/437-367x267.jpg"/>
    </a>
  </div>
  <div
    class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-5 p-m s-hv">
    <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://star-wars-scottkumor.herokuapp.com/">
      <div class="c-db ta-c">Create Your Own Star Wars Character</div>
      <img class="i-fl mt-l" src=""/>
    </a>
  </div>

    <div class="m-s ta-c fz-j ts-i">Collaborations</div>
        
    <div
      class="bg-c-lb-hv bg-c-db-fc c-w-hv c-w-fc t-g-hv t-s-fc gbx-p-5 p-m s-hv">
      <a class="ai-c d-f jc-c df-fdc c-w td-n" href="https://iedson.github.io/spotlight/">
        <div class="c-db ta-c">Spotlight</div>
        <img class="i-fl mt-l" src="./assets/images/537-2291x3450.jpg" />
      </a>
    </div>    
    
        `
      )
    });
  });

  $("#contactBtn").on("click", function () {
    $('#contentWrapper').slideUp('slow', function () {
      $('#contentWrapper').attr('style', "display:block");
      $('#contentWrapper').html(`<div class="fz-j"><!--grid wrapper, raise font alittle higher-->
    <div class="">
      My primary email is
      <a
        class="bg-c-b-fc bg-c-db-hv c-db-fc c-db c-w-hv td-n s-hv t-g-hv t-s-fc"
        href="mailto:scott.kumor1212@gmail.com"
        >scott.kumor1212@gmail.com</a
      >. I check my email regularly and usually reply within 1-2 business
      days.
    </div>
    `)
    });
  });
}); 