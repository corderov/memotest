export const albumImages = [
  "https://upload.wikimedia.org/wikipedia/en/0/02/Lali_-_Lali.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_943549-MLA54271726131_032023-O.webp",
  "https://ca-times.brightspotcdn.com/dims4/default/7dbc480/2147483647/strip/true/crop/2100x2100+0+0/resize/1200x1200!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0a%2F5d%2F0ecdec4a747b91e7e002ff8c0c75%2F96b5ef0319624339a2b57ae34ac0175c",
  "https://cdn.smehost.net/sonymusiclatincom-uslatinprod/wp-content/uploads/2022/05/tucreesenmi-1024x1024.jpg",
  "https://www.lahiguera.net/musicalia/artistas/maria_becerra/disco/12240/maria_becerra_la_nena_de_argentina-portada.jpg",
  "https://i.scdn.co/image/ab67616d0000b2732ccbe28be97225ae844bef55",
  "https://www.clarin.com/img/2023/03/31/0Rgy0eonW_720x0__1.jpg",
  "https://i0.wp.com/caribempresarial.com/wp-content/uploads/2022/06/FOTO-PORTADA.png?fit=600%2C600&ssl=1",
  "https://upload.wikimedia.org/wikipedia/en/9/9e/Paulo_Londra_-_Homerun.png",
  "https://cdns-images.dzcdn.net/images/cover/d475db1f32bc7067ea99389daa7494f0/500x500.jpg",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);
