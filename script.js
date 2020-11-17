const infoFromCountries = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/name/`
});

const getCountryInfo = ()=>{

  const country = document.getElementById('typedCountry').value
  console.log(country)

  infoFromCountries.get(country)
    .then((result)=>{
      const name = document.getElementById('name')
      const flag = document.getElementById('flag')

      name.innerText = result.data[0].name
      flag.setAttribute('src', result.data[0].flag)
      flag.setAttribute('alt', result.data[0].name)

      console.log(result.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
}