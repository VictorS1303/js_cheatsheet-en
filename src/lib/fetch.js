export const data = await fetch('https://sjmnwbaewwkgvybajpzc.supabase.co/rest/v1/cheatsheet-da?order=id', {
   method: "GET",
   headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbW53YmFld3drZ3Z5YmFqcHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0MDQzMTAsImV4cCI6MjAzODk4MDMxMH0.0GtkxT5JXswSaAkCVgIPdliV-qrjOuFd9MURfsD-RrA'
   }

}).then((res) => res.json())
  .catch((err) => console.log(err))
 


