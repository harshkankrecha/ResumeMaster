module.exports = (data) =>{
    const {
        firstname,
        lastname,
        address,
        state,
        country,
        zipcode,
        phone,
        email,
        linkedin,
        github,
        experience,          
        projectsList,
        educationList,
        skillsList,
        achievementsList,
    
    } = data

    let plainTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${firstname}'s Resume</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          
          .resume-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .name {
            font-size: 32px;
            margin: 10px 0;
          }
          
          .contact {
            font-size: 16px;
            margin: 5px 0;
            color: #666;
          }
          
          h2 {
            margin: 10px 0;
          }
          
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          li {
            margin-bottom: 5px;
          }
          
        </style>
    </head>
    <body>
    <div class="resume-container">
    <header>
      <h1 class="name">${firstname} ${lastname}</h1>
      <p class="contact">Email: ${email} | Phone: ${phone} | LinkedIn: ${linkedin} | Github: ${github}</p>  
    </header>
    </div>
  <script>
        
    console.log(educationList)     
  </script>
    </body>
    </html> 
    `
    return plainTemplate
}