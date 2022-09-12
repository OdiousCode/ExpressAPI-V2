# Simpel API med express & typescript, med filhantering i form av JSON. #
## Av: Görgen Andersson (OdiousCode) ##  

## https://github.com/OdiousCode/ExpressAPI-V2 ##

## Hur du startar med VSCode##

För att köra projektet börjar du med en "npm -i" i terminalen, för att installera nödvända packages.
Sedan för att starta så skriver du "npm run dev" i terminalen, så skall server studsa igång. 
Nu du kan testa projektets endpoints med medföljande .rest-fil om du har extensionet "Rest-client" i VSCode.
Alternativt browsa in på "http://localhost:4444/api/games"

## Komplettering ##
Då jag kände att jag inte hade superbra koll på hur jag skulle få till validering i det föregående projektet, så gjorde jag valet att börja om från början, med lite hjälp ifrån webben och paketet joi.

## Krav för godkänt ##

- [X] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [X] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [X] Datan som API:et hanterar sparas lokalt i serverfilen
- [X] APIét ska svara med 404 om datan saknas.
- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [X] Uppgiften lämnas in i tid!

## Krav för väl godkänt ##

- [X] Alla punkter för godkänt är uppfyllda
- [X] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [X] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [X] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
