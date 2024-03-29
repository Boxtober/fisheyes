function mediasFactories(medias) {

    this.mediasFiltered = medias;

    function displayMedias() {
// 7-9 function filterByFilter
        filterByLikes()
        filterByDate()
        filterByTitle()
//11-23 --> function display galery à appeler ds function filterby....
        const mediasSection = document.querySelector(".medias_section");

        mediasSection.innerHTML = '';

        mediasFiltered.forEach((media) => {

            const mediaFactories = mediaFactory(mediasFiltered);
            //donner tout les medias

            const mediaCard = mediaFactories.getMediaCardDOM(media);
            mediasSection.appendChild(mediaCard);

        });

    }

    /*
    function dropdown() {
        let dropdownTrigger = document.getElementById("dropdown-trigger");
        let myDropdown = document.getElementById("dropdown-trigger");
        document.addEventListener("click", function() {
            
            let dropdownContent = document.getElementById("myDropdown");
          
            dropdownTrigger.addEventListener("click", function() {
              dropdownContent.classList.toggle("active");
            });
          
            let filterByDate = document.querySelector(".filterByDate");
            let filterByTitle = document.querySelector(".filterByTitle");
          
            dropdownTrigger.addEventListener("click", function() {
                myDropdown.classList.toggle("active");
              filterByDate.classList.toggle("active");
              filterByTitle.classList.toggle("active");
            });
          });      
    }
dropdown()*/

    function filterByLikes() {
     
        let dropdownOptions = document.getElementById("dropdown-options");
        let dropdownContent = document.querySelectorAll(".dropdown-content");
        const likes = document.querySelector(".filterByLikes");


        dropdownOptions.addEventListener("click", function () {
            dropdownContent.forEach((element)=> {
                element.classList.toggle("active");
                console.log(element)
            })
            console.log('clic')
        });

        likes.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => b.likes - a.likes);
            displayMedias();
            console.log('FILTRE BY LIKES:', mediasFiltered);
        })

    }

    function filterByDate() {
        const dates = document.querySelector(".filterByDate")
        dates.addEventListener("click", function () {

            mediasFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
            displayMedias();

            console.log('FILTRE BY Date:', mediasFiltered);
        })
    }

    function filterByTitle() {
        const title = document.querySelector(".filterByTitle")
        title.addEventListener("click", function () {
            mediasFiltered.sort((a, b) => a.title.localeCompare(b.title));
            displayMedias();
            console.log('FILTRE BY TITLE:', mediasFiltered);
        })
    } 



    return { medias, displayMedias, filterByLikes, filterByDate, filterByTitle };
 
}


 /*
     const dropdownTrigger = document.getElementById('dropdown-trigger');
     dropdownTrigger.addEventListener('click', function () {
    
         const filterByDate = document.querySelector('.filterByDate');
         const filterByTitle = document.querySelector('.filterByTitle');
    
         filterByDate.style.display = 'block';
         filterByTitle.style.display = 'block';
    
     });
    
    
     const dropdownTrigger = document.getElementById('dropdown-trigger');
     const dropdownOptions = document.getElementById('dropdown-options');
    
     function toggleDropdown() {
         const expanded = dropdownOptions.getAttribute('aria-expanded') === 'true' || false;
         dropdownOptions.setAttribute('aria-expanded', !expanded);
         dropdownOptions.style.display = expanded ? 'none' : 'block';
     }
    
     dropdownTrigger.addEventListener('click', toggleDropdown);
    */
    // displayMedias();
