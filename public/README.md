# Lokaverkefni Forr3FV

### Um
Verkefni skrifað í Javascript React með Nivo library til að sjá um gröfin

### Hugmyndin
Hugmyndin var að hafa gagna/admin bakenda með mörgum "Tile"-um (power bi fílingur). 

### Lokaafurð
Endaði á að hafa bara Eitt tile fyrir mannsfjölda sem sínir kort, þegar það þú ýtir að Tile-ið opnast popup þar sem kemur annað kort sem hægt er að interact-a við ef ýtt er að land kemur upp annað popup sem sýnir sögu mannsfjölda frá 1950 til 2023. Gognin koma frá https://population.un.org gegnum api og eru dýnamisk fyrir utan listan yfir löndin, en þau eru ekki að breytast voða hratt.

### Útskýring á api
* Á forsíðuni og í fyrsta popup-i sæki ég bara síðasta punktin fyrir hvert land fyrir sig (Að sækja alla punktana frá 1950-2023 fyrir öll löndin væru **123** api blaðsíður eða **12210** stök)
* Í seinna popupinu fyrir línuritið sæki ég síðan alla punktana fyrri það land (það er oftast **1** api blaðsíða og **74** stök)