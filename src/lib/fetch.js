export const data = await fetch('https://sjmnwbaewwkgvybajpzc.supabase.co/rest/v1/cheatsheet-da?order=id', {
   method: "GET",
   headers: {
      apikey: 'xxx'
   }

}).then((res) => res.json())
  .catch((err) => console.log(err))
 


