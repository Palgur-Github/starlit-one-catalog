![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Starlit One Catalog: A full Stack Development Project

## Description of the project

This full-stack application project displays several pages with catalogs of star patterns and their constituting stars. The project integrates a backend application using the CRUD components. The project conveys information from the backend to the front-end application. 

- A star pattern is a constellation or a group of stars (IUA, 2024)
- A constellation is an official or defined star pattern (International Astronomical Union (IUA, 1930)
- An asterism is an unofficial sub-pattern within a constellation or unofficial pattern that overlaps constellations (IUA, 2024)

The project has SQL tables, a parent class, inherited classes, interfaces, services, controller, and repository testing.

Some caveats:

Only spring and summer phenomena were considered for this project. These constellations and asterisms manifest in the northern hemisphere. These star patterns are disjoint to simplify table structuring.

<br>

## Class Diagram

![Starlit One Diagram](https://github.com/user-attachments/assets/163bbcef-4ade-4c58-804b-f2d406f9c7b3)

### Workbench Version

<img width="713" alt="Workbench Image" src="https://github.com/user-attachments/assets/4d38d2b9-e196-424d-b637-a3f9e9f11419">

<br>

## Setup

For this project, there are two implemented database tables. The database data represents true information for a simple astronomical catalog.

### Star Pattern

| id | name            | translation         | discovery_period | pattern_type  | main_star_count | 
| -- | --------------- | ------------------- | ---------------- | ------------- | --------------- |
| 1  | Canes Venatici  | The Hunting Dogs    | Modern           | Constellation | 3               |
| 2  | Sagitta         | The Arrow           | Ancient          | Constellation | 4               |
| 3  | Septentrio      | Seven Plough Oxen   | Ancient          | Asterism      | 7               |
| 4  | Summer Triangle | The Summer Triangle | Modern           | Asterism      | 3               |
| 5  | Ursa Minor      | The Little Bear     | Ancient          | Constellation | 7               |

### Stars

| star_id  | name                  | color        | star_type                      | pattern_id | 
| -------- | --------------------- | ------------ | ------------------------------ | ---------- |
| S1       | Cor Caroli            | yellow-white | main-sequence/ variable binary | 1          |
| S2       | Chara                 | yellow       | main sequence                  | 1          |
| S3       | 20 Canum Venaticorum  | yellow-white | giant                          | 1          |
| S4       | Sham                  | yellow       | luminous giant                 | 2          |
| S5       | Beta Sagittae         | yellow       | luminous giant                 | 2          |
| S6       | Gamma Sagittae        | orange-red   | giant                          | 2          |
| S7       | Delta Sagittae        | red          | spectroscopic binary           | 2          |
| S8       | Alioth                | blue-white   | variable                       | 3          |
| S9       | Dubhe                 | blue-white   | spectroscopic binary           | 3          |
| S10      | Alkaid                | blue         | main sequence                  | 3          |
| S11      | Mizar                 | blue-white   | spectroscopic binary           | 3          |
| S12      | Megrez                | blue-white   | main sequence                  | 3          |
| S13      | Phecda                | blue-white   | main sequence                  | 3          |
| S14      | Merak                 | blue-white   | main sequence                  | 3          |
| S15      | Altair                | blue-white   | subgiant                       | 4          |
| S16      | Deneb                 | blue-white   | evolved supergiant             | 4          |
| S17      | Vega                  | blue-white   | main sequence                  | 4          |
| S18      | Polaris               | yellow-white | multiple star system           | 5          |
| S19      | Kochab                | orange-red   | variable giant                 | 5          |
| S20      | Pherkad               | blue-white   | giant                          | 5          |
| S21      | Yildun                | blue-white   | main sequence                  | 5          |
| S22      | Epsilon Ursae Minoris | yellow       | giant                          | 5          |
| S23      | Akhfa Al Farkadain    | blue-white   | variable                       | 5          |
| S24      | Anwar Al Farkadain    | yellow-white | main sequence                  | 5          |

<br>

## Used Technologies

React JS, React + Vite, CSS, HTML, JavaScript, NodeJS,Visual Studio Code software, Spring Boot Application, Java, JPA, JUnit testing, IntelliJ IDEA software, MAVEN, Git, GitHub,
MySQLWorkbench, SQL, HTTP, Postman API, Safari Browser, Chrome Browser, MacBook Air, & iPhone.

<br>

## Controllers and Routes structure

###Star Pattern Controller & Service

This project can perform different CRUD requests (i.e., Create, Read, Update, & Delete).

The "StarPatternController[Service]" implementation reads star patterns [Get request], http://localhost:8080/api/starPatterns,

the star pattern's id, http://localhost:8080/api/starPatterns/id/{id},

the star pattern's translation, http://localhost:8080/api/starPatterns/translation/{translation},

and the star pattern's discovery period, http://localhost:8080/api/starPatterns/discoveryPeriod/{discoveryPeriod}.

The "StarPatternController[Service]" implementation creates star patterns [Post request], http://localhost:8080/api/starPatterns.

The "StarPatternController[Service]" implementation updates

the star pattern's translation [Patch request], http://localhost:8080/api/starPatterns/translation/{id}.

The "StarPatternController[Service]" implementation deletes the star pattern [Delete request], http://localhost:8080/api/starPatterns.

### Stars Controller & Service

The "StarsController[Service]" implementation reads stars [Get request], http://localhost:8080/api/stars, 

the stars' id, http://localhost:8080/api/stars/starId/{starId}, 

the stars' color, http://localhost:8080/api/stars/color/{color}, 

and the stars' type, http://localhost:8080/api/stars/starType/{starType}.

The "StarsController[Service]" implementation creates stars [Post request], http://localhost:8080/api/stars.

The "StarsController[Service]" implementation updates stars [Put request],  http://localhost:8080/api/stars/starId/{starId}.

The "StarsController[Service]" implementation deletes stars [Delete request], http://localhost:8080/api/stars.

<br>

## Extra links(Trello, Presentation Slides, etc…)

https://trello.com/b/Fet7rQhT/starlit-one-catalog-project


<br>

## Future Work

To develop a full application for Starlit One Catalog.

<br>

## Resources

GitHub, https://github.com/

Visual Studio Code, https://code.visualstudio.com

React JS, https://react.dev/

React Vite, https://vitejs.dev/guide/

Node JS, https://nodejs.org/en/download/package-manager

Postman API, https://www.postman.com/

IntelliJ IDEA software, https://www.jetbrains.com/idea/

Spring, https://spring.io


MySQL Workbench, https://www.mysql.com/products/workbench/


### References

https://www.iau.org/public/themes/constellations/

https://www.universeguide.com/blogarticle/list-of-constellations-ordered-by-main-star-count-smallest-to-largest

https://www.constellation-guide.com/big-dipper/

https://arxiv.org/pdf/1507.01466

<br>

## Team members

Jorge E. Jiménez Ramírez

<br>



