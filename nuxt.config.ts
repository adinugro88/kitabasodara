// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title : 'Kitabasodara Mitra Olahraga',
          link:[
            { rel:"stylesheet",href:"css/bootstrap.min.css"},
            { rel:"stylesheet",href:"css/colors.css"},
            { rel:"stylesheet",href:"css/versions.css"},
            { rel:"stylesheet",href:"css/responsive.css"},
            { rel:"stylesheet",href:"css/custom.css"},
            { rel:"stylesheet",href:"css/3dslider.css"},
            { rel:"stylesheet",href:"style.css"},
            { rel:"stylesheet",href:" https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"},
           
          ],
          script:[
            {src:"http://code.jquery.com/jquery-1.11.1.min.js"},
            {src:"js/3dslider.js"},
            {src:"js/all.js"},
            {src:"js/custom.js"}
          ]
        }
      }


    
})
