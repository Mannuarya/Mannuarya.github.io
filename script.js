// ================== typing animation ===================//
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Python GUI Based System Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60, // Corrected capitalization
  loop: true,
})
// ================================== Aside =====================//
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function ()
        {
            removeBackSection();
            for (let j = 0; j < totalNavList; j++)
            {
                if (navList[j].querySelector('a').classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })           
    }
    function removeBackSection()
    {
         for (let i = 0; i < totalSection; i++) {
           allSection[i].classList.remove("back-section");
         }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for (let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element)
    {
        for (let i = 0; i < totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");   
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click",function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () =>
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for (let i = 0; i < totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
    
// contact section  start====================//

        function validateEmail(email) {
          const re = /\S+@\S+\.\S+/;
          return re.test(email);
        }

        // Function to handle form submission
        function sendEmail() {
          // Get form inputs
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          // Validate email
          if (!validateEmail(email)) {
            alert("Please provide a valid email address");
            return;
          }

          // Construct email body
          const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

          // Compose email link
          const mailtoLink = `mailto:mannuarya2002@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`;

          // Open default email client
          window.location.href = mailtoLink;
        }

        // Attach form submission function to the button click event
        document
          .getElementById("sendButton")
          .addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            sendEmail(); // Call function to send email
          });

// contact section   end====================//

// download cv ========================================================  start ===============    
        document.getElementById('downloadCV').addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            // Replace 'path_to_your_cv_file.pdf' with the actual path to your CV file
            var cvUrl = "ManishAryaCV.pdf";
            var link = document.createElement('a');
            link.href = cvUrl;
            link.download = "ManishAryaCV.pdf"; // Change the filename as desired
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
// download cv ========================================================  end ===============
