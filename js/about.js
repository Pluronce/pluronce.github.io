export function aboutcontent(){
    const el = document.getElementById("mainContent");
    
      // Fetch and load content
      fetch("about.html").then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load home.html");
          }
          return response.text();
        }).then((htmlContent) => {
          el.innerHTML = htmlContent; // Inject HTML content
        }).catch((error) => {
          console.error(error);
          el.innerHTML = "<h1>Error loading content</h1>";
        });
}