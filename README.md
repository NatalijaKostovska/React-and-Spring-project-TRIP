

Наталија Костовска
Индекс: 173112
Семинарска по предметот Веб Програмирање, на факултетон ФИНКИ.
Избирање на патување со понудени хотели, ресторани и на кое место. 
Аdd копче - Креирање на нови места за посета,
креирање на ресторан, хотел, корисник и град.
Edit копче - промена на места,ресторан, град, корисник и хотел 
Delete копче - бришење на истите. 
Show all - и приказ на истите.

SPRING
show all trips
http://localhost:8080/trips
show all hotels
http://localhost:8080/trips/hotels
show all towns
http://localhost:8080/trips/towns


add new trip
http://localhost:8080/trips/add-new-trip

add new hotel
http://localhost:8080/trips/add-new-hotel


add new city
http://localhost:8080/trips/add-new-city


add new restoran
http://localhost:8080/trips/add-new-restoran

save restoran
http://localhost:8080/trips/add-new-restoran
save city
http://localhost:8080/trips/add-new-city
save hotel
http://localhost:8080/trips/add-new-hotel
save trip
http://localhost:8080/trips/add-new-trip


edit trip
http://localhost:8080/trips/{id}/edit


delete trip
http://localhost:8080/trips/{id}/delete
REACT


wp_project_sping_react
DELETE

http://localhost:8080/api/trips/city/{id}

http://localhost:8080/api/trips/restaurants/{id}

http://localhost:8080/api/trips/hotel/{id}

http://localhost:8080/api/trips/{id}

GET

http://localhost:8080/api/trips/cities

http://localhost:8080/api/trips/restaurants

http://localhost:8080/api/trips/hotels

http://localhost:8080/api/trips

http://localhost:8080/api/customers

GET By ID

http://localhost:8080/api/trips/{id}

http://localhost:8080/api/hotel/{id}

http://localhost:8080/api/restaurants/{id}

http://localhost:8080/api/cities/{id}

POST

http://localhost:8080/api//trip

http://localhost:8080/api//trips/hotel

http://localhost:8080/api/trips/city

http://localhost:8080/api//trips/restaurants

http://localhost:8080/api/customer

PUT

http://localhost:8080/api/city/{id}

http://localhost:8080/api/restoran/{id}

http://localhost:8080/api/trips/{id}

{ "idTrip":60, "name":"San Francisco", "description":"San Francisco", "imageBase64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAABTCAIAAACqFTjuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADqSURBVGhD7c7BDYNADETRbYKeU28aSDiP5KyNPUhEX3o32PFfr3U8Ba0etHrQ6kGrB60etHrQ6pFt/bxXn2xWpd7LySYZz9u/lEsj5ETS5pncGCSHMn69kfVZciuj1io/lMjUSX7YKrTK1wuag7QGmoO0BpqDtAaag7QGmoO0BpqDtAaag7QGmoN/2nqSH0pk6iQ/bNVaB8mtjM0bOTBIDmXs38iNEXIiKfVMLjXJeF7hpZy8QAaruu/vRKsHrR60etDqQasHrR60etDqQasHrR60etDqQasHrR60etDqQasHrR60ejyndR1fU1u3z57hK/MAAAAASUVORK5CYII=", "hotel":{"idHotel":1,"hotelName":"Epinal","numberOfStars":5}, "grad":{"idGrad":1,"gradIme":Bitola}, "restoran":{"idRestoran":2,"name":"Epinal","stars":5,"opis":"opis za restoranot"} }
